---
title: MediaTool — Local media workflow
description: An entire media workflow in one local app — web downloads, live recording, compression and conversion, pipelines, and auto-upload. Powered by FFmpeg, your data never leaves the machine.
platform: Windows
github: https://github.com/mnigc/MediaTool
order: 2
---

MediaTool puts an entire media workflow into one local app: download and record from the web, compress and convert audio/video, chain steps into automated pipelines, and push finished files wherever you want. Powered by FFmpeg — no cloud, no accounts. Nothing leaves your computer unless you explicitly configure an upload target.

## Features

- **Web downloads & live recording** — Built on yt-dlp with thousands of sites supported (YouTube, Bilibili, TikTok, X, Instagram, Twitch and more); Streamlink covers ~155 live platforms, and a watched channel starts recording the moment it goes live.
- **Complete video toolbox** — Compression (H.264 / HEVC / VP9 / AV1 with a target-file-size mode), format conversion, multi-segment trimming, subtitle burning, watermarks, frame extraction, silence detection, and media inspection.
- **Audio tools** — Convert freely between MP3, AAC, M4A, Opus, and FLAC at any bitrate; extract audio from video; loudness normalization and batch merging.
- **Automated pipelines** — Chain tools into reusable pipelines where each step's output feeds the next; bind one to a download or recording task and it runs the moment the source file lands.
- **Upload when done** — Push results to WebDAV, Telegram, YouTube, Google Drive, or OneDrive with streaming progress; credentials stay in the app frontend only.
- **Batch & GPU acceleration** — Drop in dozens of files and run them concurrently across tools; NVENC, QSV, VideoToolbox, AMF, and VAAPI are auto-detected and one click away.
- **Privacy first** — 100% local processing, originals are never overwritten; in-app auto-updates and a bilingual UI included.
