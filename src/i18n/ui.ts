import type { Locale } from './types';

type Dict = Record<string, string>;

const zh: Dict = {
  'nav.skip': '跳到内容',
  'nav.label': '站内导航',
  'nav.tools': '工具',
  'nav.writing': '写作',
  'nav.about': '关于',
  'theme.auto': '主题：跟随系统',
  'theme.light': '主题：浅色',
  'theme.dark': '主题：深色',

  'meta.home.title': 'SoulCreator — 独立开发者的效率工具',
  'meta.home.desc':
    'SoulCreator，一名独立开发者。写小工具、记录折腾：媒体工作流、万物转 Markdown、全盘搜索、网页货币转换、宏观投资分析。免费、开源、本地优先。',
  'meta.tools.title': '工具 — SoulCreator',
  'meta.tools.desc': 'SoulCreator 的全部开源小工具：本地媒体工作流、万物转 Markdown、毫秒级全盘搜索、轻量代码编辑器、网页货币转换、宏观投资分析。',
  'meta.about.title': '关于 — SoulCreator',
  'meta.about.desc':
    'SoulCreator 是一个独立工具开发者项目，专注于解决真实场景中的效率问题。',

  'home.hello': '你好，我是 <em class="accent">SoulCreator</em>。',
  'home.intro':
    '一名独立开发者。这里的工具都来自我日常里的痛点——顺手做出来，免费、开源、能本地跑就本地跑。不追求「生态」，只解决真实的小问题。',
  'home.notice':
    '工具都在持续维护。遇到问题或有想法，去 GitHub 提个 Issue 就能找到我。',
  'tools.desc': '每一个都为了解决一个具体的小问题。',
  'home.writing.title': '最近文章',
  'home.writing.all': '全部文章',

  'writing.h1': '写作',
  'writing.desc': '记录做这些工具过程中的想法与折腾。',
  'writing.enNotice': '文章以中文撰写，点击标题阅读原文。',
  'writing.prev': '上一页',
  'writing.next': '下一页',
  'writing.page': '第 {current} / {total} 页',

  'about.h1': '关于',
  'about.lede':
    '我相信好的工具不需要复杂，只需要恰好在你需要的时候出现。SoulCreator 是一个独立工具开发者项目，专注于解决真实场景中的效率问题。',
  'about.text1':
    '每一个工具都源于我自己使用中的痛点：先动手做一个顺手的小工具解决它，打磨到稳定好用，再开源分享出来。',
  'about.text2':
    '从浏览器扩展的轻量便捷，到桌面应用的深度处理能力，我追求的是「少即是多」——用最少的交互解决最核心的问题。',
  'about.text3': '所有工具均以开源或免费的方式发布，希望能为你的效率提供一点点帮助。',
  'about.contact.text': '有想法或建议？欢迎通过 GitHub 联系我：',

  'side.contact': '联系',
  'side.more': '更多',
  'side.source': '本站源码',
  'side.email': '邮箱',
  'side.wechat': '微信',
  'side.qr': '二维码',

  'notfound.title': '404 — SoulCreator',
  'notfound.desc': '你要找的页面不存在，或者已经被移动了。',
  'notfound.home': '回到首页',
};

const en: Dict = {
  'nav.skip': 'Skip to content',
  'nav.label': 'Site navigation',
  'nav.tools': 'Tools',
  'nav.writing': 'Writing',
  'nav.about': 'About',
  'theme.auto': 'Theme: system',
  'theme.light': 'Theme: light',
  'theme.dark': 'Theme: dark',

  'meta.home.title': 'SoulCreator — Small tools by an indie developer',
  'meta.home.desc':
    "SoulCreator is an indie developer. Small tools and notes: a local media workflow app, anything-to-Markdown, instant full-disk search, a lightweight code editor, a webpage currency converter, and a macro investment dashboard. Free, open source, local-first.",
  'meta.tools.title': 'Tools — SoulCreator',
  'meta.tools.desc': 'All open source tools by SoulCreator: a local media workflow app, anything-to-Markdown, instant full-disk search, a lightweight code editor, a webpage currency converter, and a macro investment dashboard.',
  'meta.about.title': 'About — SoulCreator',
  'meta.about.desc':
    'SoulCreator is a one-person tool project focused on solving real, everyday efficiency problems.',

  'home.hello': "Hi, I'm <em class='accent'>SoulCreator</em>.",
  'home.intro':
    'An indie developer. Everything here started as a scratch for my own itch — small tools I built for myself, then shared: free, open source, and local-first wherever possible. No platforms, no ecosystems — just real little problems, solved.',
  'home.notice':
    'Everything is actively maintained. Found a bug or have an idea? Open an issue on GitHub.',
  'tools.desc': 'Each one solves one specific small problem.',
  'home.writing.title': 'Recent writing',
  'home.writing.all': 'All posts',

  'writing.h1': 'Writing',
  'writing.desc': 'Notes and detours from building these tools.',
  'writing.enNotice': 'Posts are written in Chinese — titles link to the Chinese articles.',
  'writing.prev': 'Previous',
  'writing.next': 'Next',
  'writing.page': 'Page {current} of {total}',

  'about.h1': 'About',
  'about.lede':
    "I believe good tools don't need to be complicated — they just need to be there when you need them. SoulCreator is a one-person tool project focused on real, everyday efficiency problems.",
  'about.text1':
    'Every tool here grew out of a pain point in my own workflow: I build the small tool I wish existed, polish it until it is genuinely useful, then release it free and open source.',
  'about.text2':
    'From the lightness of a browser extension to the heavy lifting of a desktop app, I aim for "less is more" — the fewest interactions that solve the core problem.',
  'about.text3':
    'Everything is released free and open source, in the hope that it saves you a little time too.',
  'about.contact.text': 'Ideas or feedback? Reach me on GitHub:',

  'side.contact': 'Contact',
  'side.more': 'More',
  'side.source': 'Site source',
  'side.email': 'Email',
  'side.wechat': 'WeChat',
  'side.qr': 'QR code',

  'notfound.title': '404 — SoulCreator',
  'notfound.desc': "The page you're looking for doesn't exist or has moved.",
  'notfound.home': 'Back to home',
};

export const ui: Record<Locale, Dict> = { zh, en };
