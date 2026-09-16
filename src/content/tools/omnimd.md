---
title: 万物转 Markdown
titleEn: Universal to Markdown Converter
description: 基于 Firecrawl anydoc 引擎，将 Word、PPT、Excel、PDF、EPUB、RTF、CSV 等 21 种办公文档格式一键转为高质量 GitHub-Flavored Markdown。中位转换速度 < 5ms，输出结构完整、跨格式一致。
tags:
  - Markdown
  - PDF 转换
  - 文档转换
  - 桌面应用
platform: Windows / macOS / Linux
category: 效率工具
features:
  - title: 21 种文件格式全覆盖
    text: 支持 Word（.doc/.docx/.docm）、PowerPoint（.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm）、Excel（.xls/.xlsx/.xlsm/.xlsb）、OpenDocument（.odt/.ods/.odp）、RTF、EPUB、CSV、PDF。21 种格式，无需拼装多个转换库。
  - title: 极致的转换速度
    text: 纯 Rust 编写，无 ML 模型、无外部服务依赖。基准测试中位转换时间 < 5ms，比其他工具快一个数量级。
  - title: 完整结构还原
    text: 标题（含锚点）、粗体/斜体/删除线、行内代码与代码块、链接与交叉引用、多级嵌套列表、合并单元格表格、引用、脚注/尾注、演讲者备注——全部保留为标准 Markdown 语法。
  - title: 公式转 LaTeX
    text: Word/PowerPoint 的 OMML、OpenDocument/EPUB 的 MathML、RTF 公式统一转为 GitHub 数学语法（$...$ 行内、$$...$$ 块级），无缝接入文档。
  - title: 跨格式一致输出
    text: 所有格式解析为共享文档模型，经同一个 Markdown 序列化器渲染。无论输入是 2003 年的 .doc 还是昨天的 .pptx，转义、表格、锚点、脚注的行为完全一致。
stats:
  - label: 支持格式
    value: "21"
    sub: 办公文档全覆盖
  - label: 转换速度
    value: < 5ms
    sub: 中位耗时
  - label: 质量评分
    value: 81/100
    sub: LLM 盲测最高
  - label: 外部依赖
    value: "0"
    sub: 纯 Rust，零依赖
faq:
  - q: 支持哪些输入格式？
    a: 支持 21 种办公文档格式：Word（.doc/.docx/.docm）、PowerPoint（.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm）、Excel（.xls/.xlsx/.xlsm/.xlsb）、OpenDocument（.odt/.ods/.odp）、RTF、EPUB、CSV、PDF。
  - q: 转换后的 Markdown 格式如何？
    a: 标题含锚点、粗体/斜体/删除线、行内代码与代码块、链接与交叉引用、多级列表、合并单元格表格、引用、脚注/尾注、演讲者备注全部保留。公式转为 LaTeX，表格转 Markdown 表格。
  - q: 速度有多快？
    a: 基准测试中位转换时间 < 5ms/文档，比其他工具快一个数量级（第二名 52ms）。
  - q: 支持中文吗？
    a: 完全支持。中文、日文、韩文等多语言混排文档都能正确解析和转换。
  - q: 与在线转换工具比有什么优势？
    a: 完全本地化，零外部依赖，隐私无忧；转换质量经 LLM 盲测验证最高（81/100）；纯 Rust 极速，无需排队。
  - q: 扫描版 PDF 支持吗？
    a: anydoc 本身不支持 OCR，扫描版 PDF 需搭配 Firecrawl Parse 云端 API 进行 OCR 转换。
---