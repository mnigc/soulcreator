---
title: 为什么要自己写小工具
pubDate: 2026-09-24
description: 从一个汇率换算的烦躁瞬间，到四个开源小工具——这是这个博客的第一篇文章，讲讲「顺手做事」的思路。
---

市面上不缺功能强大的软件，缺的是「恰好解决你这一个问题」的东西。买回来的全家桶 80% 的功能用不上，而真正卡住你的那件小事，往往没人替你做。

这些工具都始于一个具体的瞬间：

- 在外网看商品，价格是 €12.50，心里默算半天汇率；
- 手里一堆视频要压缩，云端工具传了半天还没传完；
- 想把一张截图里的文字搬进笔记，却找不到一个不联网的 OCR。

于是顺手做了它们：[网页货币转换](https://github.com/mnigc/Webpage-Currency-Converter)、[MediaTool](https://github.com/mnigc/MediaTool)、[OmniMD](https://github.com/mnigc/OmniMD)，还有一个 [宏观投资分析平台](https://github.com/mnigc/invest-platform)。原则很简单：免费、开源、能本地跑就本地跑。

代码上也是同一个思路。这个网站本身就是一个例子——整个站点没有一行运行时的 JavaScript，连代码高亮都是在构建时完成的：

```ts
// 构建时高亮，浏览器里零成本
const site = {
  framework: 'Astro',
  clientJs: 0,
  style: 'text-first',
};
```

少即是多。工具如此，网站如此，文章也会如此。
