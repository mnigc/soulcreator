---
title: OmniMD — 万物转 Markdown
description: 基于 Firecrawl anydoc 引擎，将 Word、PPT、Excel、PDF、EPUB、RTF、CSV 等 21 种办公文档格式一键转为高质量 GitHub-Flavored Markdown。中位转换速度 < 5ms，输出结构完整、跨格式一致。
platform: Windows / macOS / Linux
github: https://github.com/mnigc/OmniMD
order: 3
---

OmniMD 基于 Firecrawl anydoc 引擎，将 Word、PPT、Excel、PDF、EPUB、RTF、CSV 等 21 种办公文档格式一键转为高质量 GitHub-Flavored Markdown。纯 Rust 本地运行，无 ML 模型、零外部依赖，中位转换速度 < 5ms。

## 主要特性

- **21 种文件格式全覆盖** —— Word（.doc/.docx/.docm）、PowerPoint、Excel、OpenDocument、RTF、EPUB、CSV、PDF，无需拼装多个转换库。
- **极致的转换速度** —— 纯 Rust 编写，基准测试中位转换时间 < 5ms，比其他工具快一个数量级。
- **完整结构还原** —— 标题（含锚点）、粗体/斜体/删除线、行内代码与代码块、链接与交叉引用、多级嵌套列表、合并单元格表格、引用、脚注/尾注、演讲者备注，全部保留为标准 Markdown 语法。
- **公式转 LaTeX** —— Word/PowerPoint 的 OMML、OpenDocument/EPUB 的 MathML、RTF 公式统一转为 GitHub 数学语法（$...$ 行内、$$...$$ 块级）。
- **跨格式一致输出** —— 所有格式解析为共享文档模型，经同一个 Markdown 序列化器渲染；无论是 2003 年的 .doc 还是昨天的 .pptx，转义、表格、锚点、脚注的行为完全一致。
- **完全本地化** —— 无外部服务依赖，隐私无忧；支持 CLI 命令行调用，可无缝集成到构建流程和自动化脚本中。
