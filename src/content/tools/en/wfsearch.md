---
title: WFSearch — Millisecond full-disk search
description: A blazing-fast filename search service for Windows. Reads the NTFS MFT directly — 1.25M files indexed in ~2.2s, P99 queries ≈ 10ms, real-time USN Journal updates, ~0% idle CPU.
platform: Windows · Service / CLI
github: https://github.com/mnigc/WFSearch
order: 6
---

WFSearch (Windows Flash Search) is a blazing-fast filename search service for Windows: a whole-volume NTFS MFT index kept in memory, kept fresh by the USN Journal. Around 1.25 million files are fully indexed in ~2 seconds, queries answer at P99 ≈ 10ms, and idle CPU is essentially zero. Named Pipe and loopback HTTP expose one JSON protocol, so scripts and third-party apps integrate easily — the built-in search in SVCode runs on it.

## Features

- **Millisecond queries** — Substring and `*`/`?` wildcard search at P99 ≈ 10ms across a million files; case-insensitive with Unicode folding, and Chinese filenames are first-class.
- **Second-level full indexing** — Reads NTFS MFT file records directly: ~2.2s for 1.25M files, and restarts from a valid snapshot in 0.5s.
- **Real-time increments** — Polls the USN Journal every 100ms, so creates, deletes, and renames become visible within 100ms; a wrapped journal triggers an automatic rebuild.
- **Tiny footprint** — ~87 bytes per file (~103MB for 1.25M entries) with ≈ 0% idle CPU.
- **One protocol, two channels** — Named Pipe for the lowest latency, loopback HTTP for scripts — identical JSON payloads, with Python / C# / Rust client examples.
- **Self-diagnosing & benchmarked** — A `doctor` subcommand probes every ioctl step by step, and an acceptance script measures every metric on a real disk; all five gates passed.
- **Engineered, not hacked** — A five-crate Rust workspace with 20+ unit tests, protocol contract tests, criterion benchmarks, and full CI gating; runs as a Windows service.
