---
title: WFSearch — 毫秒级全盘搜索
description: Windows 上的极速文件名搜索服务。直读 NTFS MFT，125 万文件约 2.2 秒建完索引，查询 P99 ≈ 10ms，USN Journal 实时增量，空闲 CPU ≈ 0%。
platform: Windows · 服务 / CLI
github: https://github.com/mnigc/WFSearch
order: 6
---

WFSearch（Windows Flash Search）是 Windows 上的极速文件名搜索服务：整卷 NTFS MFT 常驻内存索引，USN Journal 实时增量。百万文件约 2 秒完成全量索引，查询 P99 约 10 毫秒，空闲 CPU 几乎为零。提供 Named Pipe 与本地 HTTP 两种通道、同一套 JSON 协议，方便脚本与第三方应用接入——SVCode 的内置全盘搜索正是由它驱动。

## 主要特性

- **毫秒级查询** —— 子串与 `*`/`?` 通配符匹配，百万文件 P99 ≈ 10ms；大小写不敏感、Unicode 折叠，中文无压力。
- **秒级全量索引** —— 直接读取 NTFS MFT 文件记录，125 万文件约 2.2 秒建完索引，冷启动带快照 0.5 秒恢复。
- **实时增量** —— 每 100ms 读取一次 USN Journal，文件创建、删除、重命名 100ms 内可见；journal 回绕自动全量重建。
- **占用极低** —— 每文件约 87 字节，125 万条约 103MB 内存，空闲 CPU ≈ 0%。
- **一套协议、两种通道** —— Named Pipe 延迟最低，回环 HTTP 方便脚本接入，JSON 载荷完全一致；附 Python / C# / Rust 客户端示例。
- **自诊断与验收** —— `doctor` 子命令逐步探测每个 ioctl；验收脚本在真实磁盘上逐项实测全部性能指标，五项门禁全部通过。
- **工程化** —— Rust 工作区五个 crate 分层清晰，20+ 单测、契约测试与 criterion 基准，CI 全门禁；可作为 Windows 服务常驻运行。
