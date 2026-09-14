---
title: 宏观投资决策分析平台
titleEn: Macro Investment Decision Platform
description: 覆盖黄金决策、宏观体制、全球流动性与组合信号板的宏观投资决策分析平台。数据每交易日自动同步，图表全程可视化，把分散的宏观数据变成可执行的投资判断。
tags:
  - 宏观分析
  - 黄金决策
  - 全球流动性
  - 数据可视化
  - 知识图谱
platform: Web · 浏览器
category: 财经平台
features:
  - title: 组合信号板
    text: 把黄金、流动性、宏观体制、股票循环等多个模块的信号加权汇总成一个综合评分，一张页面看清当前市场的整体倾向。
  - title: 黄金决策
    text: 金价-美元相关性、双因子定价残差、央行购金、动量指标多维度交叉验证，回答“现在黄金贵不贵、还能不能买”。
  - title: 宏观体制
    text: 基于 S&P500 与宏观体制回测识别当前所处体制，标注风险异常，并给出股票风险溢价与风格轮动的参考。
  - title: 全球流动性
    text: 美联储 / 欧央行 / 日央行资产负债表与净流动性，叠加 SOFR 资金利率，跟踪全球资金的松紧节奏。
  - title: 主题分析
    text: 收益率曲线、通胀预期、信用压力、跨资产联动、宏观一致性、大宗商品、领先指标，六大分析页各自独立成页，可单独深挖。
  - title: 数据自动同步
    text: 独立 Python 脚本接入 yfinance / FRED / gold-api，GitHub Actions 每交易日自动写入 Supabase，无需手动更新数据。
stats:
  - label: 功能模块
    value: 12+
    sub: 信号/指标/分析/知识
  - label: 知识主题
    value: "10"
    sub: 宏观概念图谱
  - label: 数据源
    value: "3"
    sub: FRED / Yahoo / gold-api
  - label: 同步频率
    value: 每交易日
    sub: 自动写入
faq:
  - q: 数据从哪里来？
    a: 主要接入 Yahoo Finance、FRED 与 gold-api，由 sync/ 目录下的独立 Python 脚本抓取并写入 Supabase (PostgreSQL)。
  - q: 数据多久更新一次？
    a: GitHub Actions 每交易日北京时间 23:30 自动同步，也可在 Actions 页面手动触发，运行日志保留 14 天。
  - q: 有哪些功能模块？
    a: 组合信号板、宏观体制、黄金决策、全球流动性、大宗商品、领先指标、收益率曲线、通胀预期、信用压力、跨资产联动、宏观一致性、股票风险溢价与轮动，外加知识图谱。
  - q: 技术栈是什么？
    a: 前端与服务端用 Astro + React + ECharts，数据存 Supabase，同步脚本是独立的 Python 服务，CI/CD 由 GitHub Actions 负责。
  - q: 需要登录或付费吗？
    a: 不需要。页面全部静态预渲染，图表数据通过 /api/v1 下的 JSON 接口读取，免费开放使用。
---
