---
title: FFmpeg：一条流水线，一千个选项
pubDate: 2026-10-04
description: 上一篇提到我做 MediaTool 是因为压视频太麻烦。真正的原因其实是 FFmpeg——它的选项有一千个，但概念只有三个：流水线、容器与编码器、滤镜图。把这三件事想通，剩下的都是查表。
---

`ffmpeg -h` 会刷出两百多行选项，第一反应通常是关掉它去找个图形界面。但 FFmpeg 的复杂度不在概念，而在组合：它把一件简单的事（读→改→写）做到了几乎任何格式都能吃的程度，于是选项自然堆成了山。

先记住三个概念，这座山就塌了一半。

## 它只有一条流水线

任何一次 ffmpeg 调用都在走同一条路：

```
输入 → 解封装(demux) → 解码(decode) → 滤镜(filter) → 编码(encode) → 封装(mux) → 输出
```

解封装是把 mp4/mkv/ts 这层外壳拆开，拿出里面一条条轨道；解码把 H.264 码流还原成一张张原始帧；滤镜在帧上做改动；编码再把帧压回码流；封装最后装进新外壳。中间那两步是可以整段跳过的——`-c copy` 就是「解码和编码都不做，只换外壳」。

选项分成两半，取决于它属于流水线的哪一段：写在 `-i` 之前的是输入侧（怎么读），写在 `-i` 之后、下一个输入之前的全部是输出侧（怎么写）。这就是为什么这两条命令不是一回事：

```bash
ffmpeg -ss 00:01:20 -i in.mp4 out.mp4     # 先跳着读，快
ffmpeg -i in.mp4 -ss 00:01:20 out.mp4     # 老老实实从头解码，慢
```

把 `-ss` 放前面，ffmpeg 会直接 seek 到目标时间附近的关键帧，再解码推进到那一帧，2.1 之后这个定位是帧精确的，而且比后者快一个量级——代价是时间戳会归零重算，所以切割时如果同时用 `-c copy`（不能从非关键帧开始），切点只能落在关键帧上。这类细节只要想想「谁在什么时候读到什么」就都能推出来。

底层是一组叫 `libav*` 的库：libavformat 管封装与协议，libavcodec 管编解码，libavfilter 是滤镜图，libswscale / libswresample 负责像素与音频格式的转换缩放，libavdevice 对接采集设备，libavutil 打杂。命令行工具只是这七个库的门面，所以你在 Python、Go、Rust 里调的也是同一套东西。

顺手改两个默认行为，世界会清爽很多：

```bash
-hide_banner      # 去掉版本编译信息那一坨
-loglevel warning # 只报警告；error / quiet / trace 也常用
```

## 容器和编码器不是一回事

这是最容易搞混的地方：`.mp4` 不是一种编码，`.h264` 裸流也不是容器。容器决定「外壳」——里面能放几种轨道、字幕怎么放、时间戳精度多少；编码器决定「画面怎么压」。

| 容器 | 强项 | 麻烦 |
| --- | --- | --- |
| MP4 | 浏览器、手机、CDN 通吃 | 字幕只认 mov_text，ass 特效字幕塞不进去 |
| MKV | 什么都能装：srt/ass/pgssub、多音轨、章节、附件 | 网页不能直接播 |
| TS | 直播切片的事实标准，丢了几个包不影响后面 | 头部开销大，索引难查 |
| WebM | 开源编码器（VP9/AV1）的家 | 硬件兼容性不如 MP4 |

| 编码器 | 位置 |
| --- | --- |
| H.264 / libx264 | 兼容性无敌，目前仍是分发首选 |
| H.265 / libx265 | 同画质省一半体积，授权和硬件解码是坎 |
| AV1 (libsvtav1 / libaom) | 压缩率最高，纯软件编码慢得离谱，用 svt 会好很多 |
| VP9 | WebM 标配，YouTube 那套 |
| FFV1 / -qp 0 | 无损，归档和中间格式用 |

给网页用一定要加 `-movflags +faststart`，它把索引（moov atom）挪到文件开头，这样下载几十 KB 就能开始播，否则用户得等整个文件下完——mp4 默认把索引写在结尾，这是本地文件时代留下的习惯。

转封装和转码的差别也值得单独说：

```bash
# 只换外壳，一秒钟的事，画质零损失
ffmpeg -i in.mkv -c copy out.mp4

# 真要把画面重压，这是几十分钟的计算
ffmpeg -i in.mkv -c:v libx264 -crf 21 -c:a aac out.mp4
```

前一条命令失败通常是因为外壳装不下里面的东西（比如 mkv 里的 ass 字幕），这时加 `-sn` 丢掉字幕，或者把字幕转一下 `-c:s mov_text`。

## 轨道：-map 是唯一需要背的语法

一个文件里可能有 3 条视频、5 条音轨、8 条字幕。ffmpeg 的默认策略很保守——每种类型只挑「最好」的一条，这个规则经常和你的直觉不一致，所以要手动指定。编号方式是 `输入序号:流类型:索引`：

```bash
ffmpeg -i in.mkv \
  -map 0:v:0 -map 0:a:1 -map 0:a:0 -map 0:s:0 \
  -c copy out.mkv
```

意思是：第 0 个输入的第 1 条音轨放前面，第 0 条音轨第二，再加第一条字幕。默认行为下两条音轨都会丢，因为 ffmpeg 只取一条。

```bash
-map 0:a      # 全部音轨；输出里的轨道顺序就是 -map 的出现顺序
-map 0        # 全部轨道，最省心的转封装写法
```

要合并两个输入就更直接了，`-i a.mp4 -i b.mp4 -map 0:v -map 1:a` 取第一个的画面、第二个的声音。

## 滤镜：真正麻烦但真正值钱的部分

`-vf`（视频）和 `-af`（音频）各挂一条线性链；一旦需要多条链互相接线，就得用 `-filter_complex` 搭一张图，这时流不再自动对应输入，全部靠标签显式声明。常用的单链滤镜：

```bash
-vf "scale=1280:-2"                 # 缩到宽 1280，高按比例且保证偶数
-vf "crop=1920:1080:0:0"            # 裁掉黑边
-vf "pad=1920:1080:(ow-iw)/2:(oh-ih)/2"  # 加边补齐尺寸
-vf "setsar=1"                      # 修宽高比，手机视频常见坑
-vf "fps=30"                        # 抽帧/补帧到固定帧率
-vf "transpose=1"                   # 旋转 90°（元数据不被识别时手动转）
-vf "eq=brightness=0.06:saturation=1.2"
-vf "hqdn3d=1.5:6:4:4.5"            # 降噪
-af "loudnorm=I=-16:TP=-1.5"        # EBU R128 响度归一，做播客/视频必用
-af "volume=6dB"
```

滤镜图用标签把多条链连起来，语法像这样：

```bash
ffmpeg -i video.mp4 -i logo.png -filter_complex \
  "[1:v]scale=200:-2[wm];[0:v][wm]overlay=W-w-16:16[out]" \
  -map "[out]" -c:v libx264 -crf 21 out.mp4
```

拼接是问得最多的事。同参数文件用 demuxer，`-c copy`，秒完：

```bash
# list.txt: file 'a.mp4' / file 'b.mp4'（路径带单引号）
ffmpeg -f concat -safe 0 -i list.txt -c copy out.mp4
```

不同分辨率、帧率、编码参数的就必须走 filter，因为要把它们拉平到同一个流里：

```bash
ffmpeg -i a.mp4 -i b.mp4 -filter_complex \
  "[0:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30[v0];\
   [1:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30[v1];\
   [v0][0:a][v1][1:a]concat=n=2:v=1:a=1[v][a]" \
  -map "[v]" -map "[a]" -c:v libx264 -crf 21 -c:a aac out.mp4
```

这类命令我不会手写——一行错了要整条重跑。写个脚本按上面的模板生成，或者用 `-filter_complex_script filters.txt` 把图放到单独文件里（顺便解决 Windows 下引号转义的地狱）。`drawtext` 尤其值得单独吐槽：`:` 和 `'` 都要转义，Windows 还得显式给 `fontfile=`。

需要淡入淡出就用 `xfade`，两条流加一个 `offset=` 即可。查手上这份 ffmpeg 到底有什么滤镜和参数：

```bash
ffmpeg -filters | grep -i overlay
ffmpeg -h filter=drawtext
ffmpeg -encoders | grep -i nvenc
ffmpeg -codecs | grep -i av1
ffmpeg -formats && ffmpeg -protocols && ffmpeg -pix_fmts
```

`-h filter=xxx` 这条是救命的，它给的是当前二进制的准确参数表，不是文档里可能滞后的版本。

## 画质、体积、时间：三档压缩策略

x264 的范围是 0–51，默认 23，数字越小越清晰。经验值：18 附近接近视觉无损，20–23 适合分发，26 以上开始明显掉细节。每 +6 大约体积减半，这是量化压缩的规律，不是 x264 的特性。

```bash
# 定质量：日常首选
ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 21 -pix_fmt yuv420p -c:a aac -b:a 128k out.mp4

# 定码率：直播和存储预算固定时用
ffmpeg -i in.mp4 -c:v libx264 -b:v 2500k -maxrate 3000k -bufsize 5000k out.mp4

# 两次编码：体积要求卡死时（注意 Windows 用 NUL 不是 /dev/null）
ffmpeg -y -i in.mp4 -c:v libx264 -b:v 2M -pass 1 -an -f mp4 -y NUL && \
ffmpeg -i in.mp4 -c:v libx264 -b:v 2M -pass 2 -c:a aac -b:a 128k out.mp4
```

`-preset` 从 `ultrafast` 到 `veryslow`（还有个 `placebo`），它调的是编码器愿意花多少 CPU 去搜索更优的编码决定。同一 CRF 下，`veryslow` 通常比 `medium` 小 15–25% 的码率——所以「我按 CRF 23 压完怎么比原来还大」多半是你从慢档换回了快档，或者源本身已经是高压缩率的网络视频，重压只会更糟。压之前先 `ffprobe` 看一眼源参数。

几个会直接影响兼容性的选项：

```bash
-pix_fmt yuv420p        # 不写这个，QuickTime 和部分播放器可能报错
-profile:v high -level 4.1
-g 120                  # GOP 长度；切片/直播建议 2 秒的帧数
-fps_mode cfr -r 30     # 手机录的是可变帧率，拼接前建议拉平
-map_metadata 0 -movflags +faststart -brand mp42
```

宽或高是奇数时 yuv420p 会直接报 `width not divisible by 2`，用 `scale=-2:H` 让 ffmpeg 自己取最近的偶数。

## 让显卡干活

编码是最耗 CPU 的环节，硬件编码器能把它卸掉。速度换画质：同码率下画质一般不如 x264 `slow`，但快 5–20 倍，直播这种必须实时的场景没有选择。

```bash
-c:v h264_nvenc -preset p5 -rc vbr -cq 26 -b:v 0     # NVIDIA
-c:v hevc_nvenc -preset p5 -cq 27                     # NVIDIA HEVC，省 30% 体积
-c:v h264_qsv -preset faster -global_quality 26       # Intel 核显
-c:v h264_amf -quality balanced -rc cqp -qp_i 24 -qp_p 28  # AMD
-c:v h264_videotoolbox -b:v 6M                        # Apple，macOS 上默认走它
-c:v h264_vaapi -global_quality 30 -vf 'format=nv12,hwupload'  # Linux/Intel
```

解码也能卸到显卡：`-hwaccel cuda -hwaccel_output_format cuda` 让帧一直留在显存里，配合 `scale_cuda` / `overlay_vulkan` 这类硬件滤镜能做到全程不落回内存。CPU 解码瓶颈时（4K HEVC 10bit 很典型）这是唯一解；纯转码体积的任务，CPU 压上去换更小的文件更划算。

## 切片、推流与那些协议

FFmpeg 同时是播放器内核、转码器和流媒体客户端，URL 就是输入输出：

```bash
# HLS 切片（H.264 进 ts 时它会自动加 annexb 比特流过滤）
ffmpeg -i in.mp4 -c:v libx264 -preset veryfast -crf 23 \
  -f hls -hls_time 6 -hls_list_size 0 \
  -hls_segment_filename 'seg_%03d.ts' out.m3u8

# DASH
ffmpeg -i in.mp4 -c copy -f dash out.mpd

# 推流：从文件推直播必须加 -re，按帧率喂数据
ffmpeg -re -i in.mp4 -c:v libx264 -preset veryfast -tune zerolatency \
  -b:v 3000k -c:a aac -ar 44100 -b:a 128k \
  -f flv rtmp://live.example.com/app/streamkey

# 拉别人流，录制
ffmpeg -i "http://host/live.m3u8" -c copy -t 600 record.mp4
```

协议列表里有 `http` `tcp` `udp` `rtp` `rtsp` `rtmp` `srt` `pipe` `data`，SRT 用法是 `srt://host:port?mode=caller&pkt_size=1316`。采集设备也能直接当输入，所以「摄像头→推流」是一条命令：

```bash
ffmpeg -list_devices true -f dshow -i dummy          # 先列出设备名
ffmpeg -f dshow -i video="Integrated Camera":audio="Microphone (Realtek)" \
  -c:v libx264 -preset veryfast -tune zerolatency -f flv rtmp://...
```

Linux 是 `-f v4l2 -i /dev/video0`，macOS 是 `-f avfoundation -i "0:1"`（冒号两边是视频和音频设备的编号，先 `-list_devices` 查；某一路不想用就写 `none`）。

反方向也有：`-f lavfi -i testsrc=size=1280x720:rate=30 -t 10` 生成测试视频，`anullsrc` 生成静音轨，做测试素材不用去搜。

## ffprobe 才是另一半

转码之前必须知道源是什么，否则就是蒙着眼睛调参数：

```bash
ffprobe -v error -show_streams -show_format -of json in.mp4

# 只拿需要的字段，方便写脚本
ffprobe -v error -select_streams v:0 \
  -show_entries stream=codec_name,width,height,r_frame_rate,bit_rate,nb_frames \
  -of csv=p=0 in.mp4

# 时长（秒）
ffprobe -v error -show_entries format=duration -of csv=p=0 in.mp4
```

`-count_frames` 会真的解码统计帧数，慢但能确认 VFR。做批量工具时靠 `-of json` 就够了，不需要解析那堆人类可读的输出。

## 我会反复用的几条

```bash
# 抽一帧做封面，-q:v 2 是 JPEG 质量（越小越好）
ffmpeg -ss 00:00:05 -i in.mp4 -frames:v 1 -q:v 2 cover.jpg

# 提取音频 / 转码音频
ffmpeg -i in.mp4 -vn -c:a copy out.m4a
ffmpeg -i in.mp4 -vn -acodec libmp3lame -q:a 2 out.mp3
ffmpeg -i in.mkv -vn -ac 2 -c:a libmp3lame -q:a 2 out.mp3   # 5.1 顺便下混成立体声

# 拿第二条音轨（多语配音很常见）
ffmpeg -i in.mkv -map 0:a:1 -c:a copy second.m4a

# 只取一段，不重压
ffmpeg -ss 00:12:03 -i in.mp4 -t 45 -c copy clip.mp4

# GIF：先出调色板再用它，色阶差距肉眼可见
ffmpeg -ss 3 -t 5 -i in.mp4 \
  -vf "fps=15,scale=480:-2:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  out.gif

# 图片 + 音乐 = 视频
ffmpeg -loop 1 -i cover.jpg -i song.flac -c:v libx264 -tune stillimage \
  -pix_fmt yuv420p -c:a aac -b:a 192k -shortest out.mp4

# 序列帧合视频
ffmpeg -framerate 24 -i frame_%04d.png -c:v libx264 -crf 18 -pix_fmt yuv420p out.mp4

# 2 倍速，音画一起
ffmpeg -i in.mp4 -filter:v "setpts=0.5*PTS" -filter:a "atempo=2.0" out.mp4

# 加淡入淡出
ffmpeg -i in.mp4 -vf "fade=t=in:st=0:d=1.5,fade=t=out:st=58.5:d=1.5" -c:a copy out.mp4

# 校验一个文件是否真的能解到底（CI 里有用）
ffmpeg -v error -i suspect.mkv -f null -

# 批量：注意在循环里加 -nostdin，否则 ffmpeg 会把你的 stdin 吃掉
for f in *.mov; do
  ffmpeg -nostdin -y -i "$f" -c:v libx264 -crf 22 -c:a aac "out/${f%.mov}.mp4"
done
```

## 几个我踩过第二次才知道是坑的

- 下载的二进制缺编码器。`ffmpeg -codecs | grep x265` 先确认。Windows 上 gyan 和 BtbN 的构建带全套，macOS `brew install ffmpeg` 也带，某些精简版只带解码不带 x265/svt。
- 重压已经压过一道的网络视频：源里的块效应会被当成画面细节一起编码，越压越糊还更大。要么先降噪（`hqdn3d`、`nlmeans`）压掉伪影，要么只改封装不重压。
- 字幕进 mp4：别指望 `-c:s copy`，ass 直接报错。转 `mov_text` 会丢特效，或者老实留在 mkv 里。
- `-y` 不加，输出文件已存在时 ffmpeg 会停下来问你要不要覆盖，脚本于是卡在那儿，看起来像跑得慢。
- `scale` 用 `-1` 有时算出奇数，一律写 `-2`。
- 时间戳导致合并后的文件时长离谱或开头黑一下：`-avoid_negative_ts make_zero` 一般够用；用 segment 切片时另有 `-reset_timestamps 1` 决定每片是否从 0 开始。
- 音频和画面对不上、拼接后越走越偏：通常是 VFR。先 `-fps_mode cfr -r 30` 拉平再拼。
- 4K 长视频用 `placebo` 跑一整晚才发现参数错——先在 `-t 10` 的样本上试完整命令。

我后来还是做了 [MediaTool](https://github.com/mnigc/MediaTool)，把常用的几条参数包进界面里。原因不是命令行做不到，而是每次要翻二十分钟记录才能凑出那条 filter_complex。FFmpeg 值得学的是那三个概念，剩下的一千个选项，交给脚本和查表就行。
