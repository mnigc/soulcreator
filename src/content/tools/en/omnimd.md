---
title: OmniMD — Universal to Markdown
description: Powered by the Firecrawl anydoc engine, converts 21 office document formats — Word, PPT, Excel, PDF, EPUB, RTF, CSV and more — into high-quality GitHub-Flavored Markdown in one click. Median conversion under 5ms, with complete, consistent structure.
platform: Windows / macOS / Linux
github: https://github.com/mnigc/OmniMD
order: 3
---

OmniMD runs on the Firecrawl anydoc engine and converts 21 office document formats — Word, PPT, Excel, PDF, EPUB, RTF, CSV and more — into high-quality GitHub-Flavored Markdown in one click. Pure Rust, fully local, no ML models, zero external dependencies, with a median conversion time under 5ms.

## Features

- **21 file formats covered** — Word (.doc/.docx/.docm), PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, PDF — no need to assemble multiple conversion libraries.
- **Extreme conversion speed** — Written in pure Rust; benchmarks show a median conversion time under 5ms, an order of magnitude faster than other tools.
- **Complete structure restoration** — Headings (with anchors), bold/italic/strikethrough, inline code and code blocks, links and cross-references, nested lists, merged-cell tables, quotes, footnotes/endnotes, speaker notes — all preserved as standard Markdown.
- **Formulas to LaTeX** — OMML from Word/PowerPoint, MathML from OpenDocument/EPUB, and RTF formulas are uniformly converted to GitHub math syntax ($...$ inline, $$...$$ block).
- **Consistent output across formats** — Every format is parsed into a shared document model and rendered by one Markdown serializer; whether the input is a .doc from 2003 or yesterday's .pptx, escaping, tables, anchors, and footnotes behave identically.
- **Fully local** — No external services, privacy by design; CLI invocation drops it seamlessly into build pipelines and automation scripts.
