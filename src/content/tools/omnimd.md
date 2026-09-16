---
title: 万物转 Markdown
titleEn: Universal to Markdown Converter
description: 基于 Firecrawl anydoc 引擎，将 Word、PPT、Excel、PDF、EPUB、RTF、CSV 等 14+ 种办公文档一键转为高质量 GitHub-Flavored Markdown。纯 Rust 编写，中位转换速度 < 5ms，输出结构完整、跨格式一致。
tags:
  - Markdown
  - PDF 转换
  - 文档转换
  - Rust
  - 桌面应用
platform: Windows / macOS / Linux
category: 效率工具
features:
  - title: 14+ 格式全覆盖
    text: 支持 Word（.doc/.docx/.docm）、PowerPoint（.ppt/.pptx/.pptm 等）、Excel（.xls/.xlsx/.xlsm/.xlsb）、OpenDocument（.odt/.ods/.odp）、RTF、EPUB、CSV、PDF。14 种格式仅需一个依赖，无需拼装多个转换库。
  - title: 极致的转换速度
    text: 纯 Rust 编写，无 ML 模型、无外部服务依赖。基准测试中位转换时间 < 5ms，比其他工具快一个数量级。百页文档也秒级完成。
  - title: 完整结构还原
    text: 标题（含锚点）、粗体/斜体/删除线、行内代码与代码块、链接与交叉引用、多级嵌套列表、合并单元格表格、引用、脚注/尾注、演讲者备注——全部保留为标准 Markdown 语法。
  - title: 公式转 LaTeX
    text: Word/PowerPoint 的 OMML、OpenDocument/EPUB 的 MathML、RTF 公式统一转为 GitHub 数学语法（$...$ 行内、$$...$$ 块级），无缝接入文档。
  - title: 跨格式一致输出
    text: 所有格式解析为共享文档模型，经同一个 Markdown 序列化器渲染。无论输入是 2003 年的 .doc 还是昨天的 .pptx，转义、表格、锚点、脚注的行为完全一致。
  - title: 智能格式检测
    text: 从文件内容本身读取格式标识（PDF 头、RTF 开组、OLE 流名、ZIP mimetype），不依赖扩展名。错误命名的文件也能正确转换。
  - title: 多语言绑定
    text: 提供 Rust、Node.js（npm）、Python（pip）、浏览器（WebAssembly）四种绑定，加上 CLI 命令行。同一套 API，即装即用。
  - title: 开发者友好
    text: CLI 一行命令转换，可直接集成到构建流水线、CI/CD 或自动化脚本中。Node.js 不阻塞事件循环，Python 释放 GIL。
stats:
  - label: 支持格式
    value: 14+
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
    a: 支持 14+ 种办公文档格式：Word（.doc/.docx/.docm）、PowerPoint（.ppt/.pptx/.pptm 等）、Excel（.xls/.xlsx/.xlsm/.xlsb）、OpenDocument（.odt/.ods/.odp）、RTF、EPUB、CSV、PDF。是唯一覆盖全部 14 种格式的工具。
  - q: 转换后的 Markdown 格式如何？
    a: 标题含锚点、粗体/斜体/删除线、行内代码与代码块、链接与交叉引用、多级列表、合并单元格表格、引用、脚注/尾注、演讲者备注全部保留。公式转为 LaTeX，表格转 Markdown 表格。
  - q: 速度有多快？
    a: 纯 Rust 编写，中位转换时间 < 5ms/文档。基准测试中比其他工具快一个数量级（第二名 52ms）。
  - q: 支持中文吗？
    a: 完全支持。中文、日文、韩文等多语言混排文档都能正确解析和转换。
  - q: 与在线转换工具比有什么优势？
    a: 完全本地化，零外部依赖，隐私无忧；纯 Rust 极速，无需排队；转换质量经 LLM 盲测验证最高（81/100）；CLI 一行命令，完美融入自动化流程。
  - q: 扫描版 PDF 支持吗？
    a: anydoc 本身不支持 OCR，扫描版 PDF 需搭配 Firecrawl Parse 云端 API 进行 OCR 转换。
---