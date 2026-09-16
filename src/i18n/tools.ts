import type { Locale } from './types';

export type ToolI18n = {
  title: string;
  description: string;
  category: string;
  platform: string;
  tags: string[];
  features: { title: string; text: string }[];
  stats: { label: string; sub: string }[];
  faq: { q: string; a: string }[];
};

type LocaleTools = Partial<Record<Exclude<Locale, 'zh'>, ToolI18n>>;

export const toolTranslations: Record<string, LocaleTools> = {
  'currency-converter': {
    en: {
      title: 'Webpage Currency Converter',
      description:
        'Automatically detect price numbers on any webpage and convert them to your local currency in one click. No copy-paste, no new tabs—exchange rates sync in real time across 150+ currency pairs.',
      category: 'Browser Tools',
      platform: 'Chrome / Edge',
      tags: ['Browser Extension', 'Multilingual', 'Live Rates', 'Chrome', 'Edge'],
      features: [
        {
          title: 'Smart price detection',
          text: "A deep-learning model automatically scans pages for price patterns, covering common global formats like ¥1,299, $19.99, and €12.50—no manual selection or marking needed.",
        },
        {
          title: 'One-click conversion',
          text: 'Detection results show right on the page; click to switch the target currency. No redirects, no copy-paste, zero interruption to your browsing.',
        },
        {
          title: 'Real-time rates',
          text: 'Connected to aggregated global financial-market APIs, rates refresh automatically every morning with under 2-hour latency, keeping conversions close to real market prices.',
        },
        {
          title: '150+ currencies',
          text: 'Covers major currencies like USD, EUR, GBP, JPY, CNY, HKD, and KRW, plus niche currencies from Southeast Asia, Africa, and the Middle East—truly borderless shopping.',
        },
        {
          title: 'Multilingual UI',
          text: 'The extension UI supports multiple languages including Chinese, English, Japanese, and Korean to fit different users’ habits.',
        },
        {
          title: 'Privacy safe',
          text: 'All computation happens locally in your browser. No browsing history or page content is ever uploaded to a server—your privacy stays fully in your control.',
        },
      ],
      stats: [
        { label: 'Currencies', sub: 'Global coverage', value: '150+' },
        { label: 'Refresh rate', sub: 'Live rates', value: 'Daily' },
        { label: 'Browsers', sub: 'Chrome / Edge', value: '2' },
        { label: 'Detect latency', sub: 'Millisecond response', value: '< 500ms' },
      ],
      faq: [
        {
          q: 'Which currencies are supported?',
          a: 'Over 150 currencies worldwide, including major ones like USD, EUR, GBP, JPY, CNY, HKD, and KRW, plus niche currencies, with rates updated automatically every day.',
        },
        {
          q: 'Is the tool free?',
          a: 'Completely free. No paywalls, no hidden charges—every feature is open in the base version.',
        },
        {
          q: 'How does it detect prices on a page?',
          a: 'The extension uses an intelligent regex engine to scan pages for price patterns (e.g. ¥1,299, $19.99, €12.50) automatically—no manual selection required.',
        },
        {
          q: 'Which browsers are supported?',
          a: 'Currently Chrome and Edge (Chromium-based). A Firefox version is in development.',
        },
        {
          q: 'Where do the exchange rates come from?',
          a: 'Rates come from aggregated global financial-market APIs, refreshed automatically every morning with under 2-hour latency.',
        },
      ],
    },
    ko: {
      title: '웹페이지 환율 변환기',
      description:
        '어떤 웹페이지에서든 가격 숫자를 자동으로 인식해 한 번의 클릭으로 현지 통화로 변환합니다. 복사·붙여넣기나 새 탭 없이, 환율은 150개 이상의 통화 쌍을 실시간 동기화합니다.',
      category: '브라우저 도구',
      platform: 'Chrome / Edge',
      tags: ['브라우저 확장', '다국어', '실시간 환율', 'Chrome', 'Edge'],
      features: [
        {
          title: '스마트 가격 인식',
          text: '딥러닝 모델이 페이지의 가격 패턴을 자동으로 스캔하며, ¥1,299·$19.99·€12.50 등 전 세계 흔한 형식을 별도 선택 없이 인식합니다.',
        },
        {
          title: '원클릭 변환',
          text: '인식 결과가 페이지에 바로 표시되며, 클릭만으로 대상 통화를 전환합니다. 이동이나 복사·붙여넣기 없이 브라우징이 끊기지 않습니다.',
        },
        {
          title: '실시간 환율',
          text: '전 세계 금융 시장 API를 통합해 매일 새벽 환율을 자동 갱신하며, 지연은 2시간 이내라 실제 시장가에 가깝습니다.',
        },
        {
          title: '150+ 통화 지원',
          text: 'USD·EUR·GBP·JPY·CNY·HKD·KRW 등 주요 통화와 동남아·아프리카·중동 등 소수 통화까지 폭넓게 지원합니다.',
        },
        {
          title: '다국어 인터페이스',
          text: '확장 프로그램 UI는 중국어·영어·일본어·한국어 등 여러 언어를 지원해 다양한 사용 습관에 맞춥니다.',
        },
        {
          title: '개인정보 보호',
          text: '모든 계산은 브라우저 로컬에서 이루어지며, 브라우징 기록이나 페이지 내용을 서버에 업로드하지 않아 프라이버시를 완전히 통제할 수 있습니다.',
        },
      ],
      stats: [
        { label: '지원 통화', sub: '전 세계 커버리지', value: '150+' },
        { label: '갱신 주기', sub: '실시간 환율', value: '매일' },
        { label: '지원 브라우저', sub: 'Chrome / Edge', value: '2' },
        { label: '인식 지연', sub: '밀리초 응답', value: '< 500ms' },
      ],
      faq: [
        {
          q: '어떤 통화를 지원하나요?',
          a: '전 세계 150개 이상의 통화를 지원하며 USD·EUR·GBP·JPY·CNY·HKD·KRW 등 주요 통화와 소수 통화를 포함하고, 환율은 매일 자동 갱신됩니다.',
        },
        {
          q: '이 도구는 무료인가요?',
          a: '완전 무료입니다. 유료 장벽이나 숨은 요금 없이 기본 버전의 모든 기능을 이용할 수 있습니다.',
        },
        {
          q: '웹페이지의 가격은 어떻게 인식하나요?',
          a: '확장 프로그램이 지능형 정규식 엔진으로 페이지의 가격 패턴(¥1,299·$19.99·€12.50 등)을 자동으로 스캔하며 별도 선택이 필요 없습니다.',
        },
        {
          q: '어떤 브라우저를 지원하나요?',
          a: '현재 Chrome과 Edge(Chromium 기반)를 지원하며 Firefox 버전은 개발 중입니다.',
        },
        {
          q: '환율 데이터는 어디서 오나요?',
          a: '환율 데이터는 전 세계 금융 시장 API를 통합한 것으로 매일 새벽 자동 갱신되며 지연은 2시간 이내입니다.',
        },
      ],
    },
    ja: {
      title: 'ウェブページ為替変換',
      description:
        '任意のウェブページ上の価格を自動で認識し、ワンクリックで現地通貨に変換します。コピー＆ペーストも新しいタブも不要、為替レートは150以上の通貨ペアをリアルタイム同期。',
      category: 'ブラウザツール',
      platform: 'Chrome / Edge',
      tags: ['ブラウザ拡張', '多言語', 'リアルタイム為替', 'Chrome', 'Edge'],
      features: [
        {
          title: 'スマート価格認識',
          text: '深層学習モデルがページ内の価格パターンを自動スキャンし、¥1,299・$19.99・€12.50 など世界の一般的な書式を手動選択なしでカバーします。',
        },
        {
          title: 'ワンクリック変換',
          text: '認識結果はページにそのまま表示され、クリックするだけで対象通貨を切り替えられます。遷移もコピー＆ペーストもなく、閲覧の流れが途切れません。',
        },
        {
          title: 'リアルタイム為替',
          text: '世界の金融市場 API を統合し、毎朝自動でレートを更新。遅延は2時間以内で、実際の市場価格に近い結果を維持します。',
        },
        {
          title: '150以上の通貨対応',
          text: 'USD・EUR・GBP・JPY・CNY・HKD・KRW など主要通貨に加え、東南アジア・アフリカ・中東などのニッチ通貨もカバーし、世界中でショッピングできます。',
        },
        {
          title: '多言語インターフェース',
          text: '拡張機能の UI は中国語・英語・日本語・韓国語など多言語に対応し、さまざまな利用習慣に適応します。',
        },
        {
          title: 'プライバシー保護',
          text: 'すべての計算はブラウザ内ローカルで完結。閲覧履歴やページ内容をサーバーにアップロードすることはなく、プライバシーを完全にコントロールできます。',
        },
      ],
      stats: [
        { label: '対応通貨', sub: '世界中カバー', value: '150+' },
        { label: '更新頻度', sub: 'リアルタイム為替', value: '毎日' },
        { label: '対応ブラウザ', sub: 'Chrome / Edge', value: '2' },
        { label: '認識遅延', sub: 'ミリ秒応答', value: '< 500ms' },
      ],
      faq: [
        {
          q: 'どの通貨に対応していますか？',
          a: '世界中の150以上の通貨に対応し、USD・EUR・GBP・JPY・CNY・HKD・KRW などの主要通貨に加えニッチ通貨も含み、為替は毎日自動更新されます。',
        },
        {
          q: 'このツールは無料ですか？',
          a: '完全に無料です。ペイウォールも隠れた料金もなく、基本版のすべての機能が開放されています。',
        },
        {
          q: 'ウェブページ上の価格はどう認識しますか？',
          a: '拡張機能がインテリジェントな正規表現エンジンでページ内の価格パターン（¥1,299・$19.99・€12.50 など）を自動スキャンし、手動選択は不要です。',
        },
        {
          q: 'どのブラウザに対応していますか？',
          a: '現在は Chrome と Edge（Chromium 系）に対応。Firefox 版は開発中です。',
        },
        {
          q: '為替データの出所はどこですか？',
          a: '為替データは統合された世界の金融市場 API からで、毎朝自動更新され遅延は2時間以内です。',
        },
      ],
    },
  },

  medipress: {
    en: {
      title: 'Media Format Converter & Compressor',
      description:
        'A desktop-grade media engine that converts and intelligently compresses video, audio, and images across all formats. Local processing keeps your data private and runs more than 10x faster than cloud tools.',
      category: 'Desktop Tools',
      platform: 'Windows / macOS / Linux',
      tags: ['Desktop App', 'Video Conversion', 'Audio Conversion', 'Batch Processing', 'Lossless Compression'],
      features: [
        {
          title: 'Universal format conversion',
          text: '40+ video, 30+ audio, and every image format covered—MP4, AVI, MOV, MKV, WebM, MP3, WAV, FLAC, PNG, JPG, WEBP, HEIC, AVIF and more, all in one place.',
        },
        {
          title: 'Smart compression',
          text: 'AI-driven compression shrinks files by 60–85% with visually indistinguishable quality. Choose between lossy and lossless modes as you need.',
        },
        {
          title: 'Batch processing',
          text: 'Drop in any number of files and they’re processed automatically in sequence by your preset rules. Custom output folders and naming patterns end the one-file-at-a-time grind.',
        },
        {
          title: 'Local-first',
          text: 'All conversion and compression run on your local CPU/GPU—nothing is uploaded to a server. Privacy stays in your hands while running 10x faster than the cloud.',
        },
        {
          title: 'Advanced tuning',
          text: 'An advanced mode exposes every parameter—codec, bitrate, resolution, frame rate, audio sample rate—to satisfy the fine-grained needs of pro creators.',
        },
        {
          title: 'Cross-platform',
          text: 'Runs on Windows, macOS, and Linux from a single codebase, with a consistent experience everywhere.',
        },
      ],
      stats: [
        { label: 'Video formats', sub: 'Full coverage', value: '40+' },
        { label: 'Audio formats', sub: 'All mainstream', value: '30+' },
        { label: 'Size reduced', sub: 'Smart compression', value: '85%' },
        { label: 'Speed boost', sub: 'vs. cloud', value: '10x' },
      ],
      faq: [
        {
          q: 'Which formats are supported?',
          a: 'Video: 40+ formats including MP4, AVI, MOV, MKV, WebM, FLV; audio: 30+ including MP3, WAV, FLAC, AAC, OGG; images: PNG, JPG, WEBP, HEIC, AVIF and more.',
        },
        {
          q: 'Is there much quality loss after compression?',
          a: 'Smart compression reduces size by 60–85% with differences barely visible to the eye. A lossless mode is also available—zero loss, though with less size reduction.',
        },
        {
          q: 'Is batch processing supported?',
          a: 'Fully. Drop in any number of files and they’re processed automatically by your preset rules, with custom output folders and naming patterns.',
        },
        {
          q: 'Does it need an internet connection?',
          a: 'No. All conversion and compression happen locally with nothing uploaded to a server—your privacy stays fully in your control.',
        },
        {
          q: 'Can output parameters be customized?',
          a: 'Yes. Advanced mode lets you tune every parameter: codec, bitrate, resolution, frame rate, audio sample rate, and more.',
        },
      ],
    },
    ko: {
      title: '미디어 형식 변환 및 압축',
      description:
        '데스크톱급 미디어 엔진으로 비디오·오디오·이미지를 모든 형식으로 변환하고 지능적으로 압축합니다. 로컬에서 처리해 프라이버시를 보호하며 클라우드 도구보다 10배 이상 빠릅니다.',
      category: '데스크톱 도구',
      platform: 'Windows / macOS / Linux',
      tags: ['데스크톱 앱', '비디오 변환', '오디오 변환', '일괄 처리', '무손실 압축'],
      features: [
        {
          title: '전 형식 변환',
          text: '비디오 40종, 오디오 30종, 이미지 전 형식을 지원합니다—MP4·AVI·MOV·MKV·WebM·MP3·WAV·FLAC·PNG·JPG·WEBP·HEIC·AVIF 등을 한곳에서 처리합니다.',
        },
        {
          title: '스마트 압축',
          text: 'AI 기반 압축으로 눈에 거의 구분되지 않는 화질로 용량을 60~85% 줄입니다. 손실·무손실 두 모드를 필요에 따라 선택하세요.',
        },
        {
          title: '일괄 처리',
          text: '원하는 개수의 파일을 넣으면 사전 규칙에 따라 순차 자동 처리됩니다. 출력 폴더와 이름 규칙을 지정할 수 있어 파일 하나씩 반복하는 수고를 끝냅니다.',
        },
        {
          title: '로컬 우선',
          text: '모든 변환과 압축이 로컬 CPU/GPU에서 실행되며 서버에 업로드되지 않습니다. 프라이버시를 지키면서 클라우드보다 10배 빠르게 동작합니다.',
        },
        {
          title: '고급 파라미터 조정',
          text: '고급 모드에서 코덱·비트레이트·해상도·프레임 레이트·오디오 샘플 레이트 등 모든 파라미터를 조정할 수 있어 전문 창작자의 정밀한 요구를 충족합니다.',
        },
        {
          title: '크로스 플랫폼',
          text: 'Windows·macOS·Linux 세 데스크톱 시스템에서 하나의 코드베이스로 일관된 경험을 제공합니다.',
        },
      ],
      stats: [
        { label: '비디오 형식', sub: '전 형식 커버', value: '40+' },
        { label: '오디오 형식', sub: '주요 모두 지원', value: '30+' },
        { label: '용량 감소', sub: '스마트 압축', value: '85%' },
        { label: '속도 향상', sub: '클라우드 대비', value: '10x' },
      ],
      faq: [
        {
          q: '어떤 형식을 지원하나요?',
          a: '비디오: MP4·AVI·MOV·MKV·WebM·FLV 등 40종 이상, 오디오: MP3·WAV·FLAC·AAC·OGG 등 30종 이상, 이미지: PNG·JPG·WEBP·HEIC·AVIF 등을 지원합니다.',
        },
        {
          q: '압축 후 화질 손실이 큰가요?',
          a: '스마트 압축으로 눈에 거의 띄지 않는 차이로 용량을 60~85% 줄입니다. 손실이 없는 무손실 모드도 선택할 수 있습니다(용량 감소는 적음).',
        },
        {
          q: '일괄 처리를 지원하나요?',
          a: '완전히 지원합니다. 원하는 개수의 파일을 넣으면 사전 규칙에 따라 순차 자동 처리되며, 출력 폴더와 이름 규칙을 지정할 수 있습니다.',
        },
        {
          q: '인터넷 연결이 필요한가요?',
          a: '필요 없습니다. 모든 변환과 압축이 로컬에서 이루어지며 서버에 업로드되지 않아 프라이버시를 완전히 통제할 수 있습니다.',
        },
        {
          q: '출력 파라미터를 사용자 지정할 수 있나요?',
          a: '가능합니다. 고급 모드에서 코덱·비트레이트·해상도·프레임 레이트·오디오 샘플 레이트 등 모든 파라미터를 조정할 수 있습니다.',
        },
      ],
    },
    ja: {
      title: 'メディア形式変換・圧縮',
      description:
        'デスクトップ級のメディアエンジンが、動画・音声・画像をすべての形式で相互変換し、知的に圧縮します。ローカル処理でプライバシーを守り、クラウドツールの10倍以上の速度を実現。',
      category: 'デスクトップツール',
      platform: 'Windows / macOS / Linux',
      tags: ['デスクトップアプリ', '動画変換', '音声変換', 'バッチ処理', 'ロスレス圧縮'],
      features: [
        {
          title: '全形式相互変換',
          text: '動画40種以上、音声30種以上、画像は全形式に対応——MP4・AVI・MOV・MKV・WebM・MP3・WAV・FLAC・PNG・JPG・WEBP・HEIC・AVIF などをひとつでカバー。',
        },
        {
          title: 'スマート圧縮',
          text: 'AI 駆動の圧縮で、目にほとんど判別できない画質のまま容量を60〜85%削減。ロッシー／ロスレス両モードを用途に応じて選択できます。',
        },
        {
          title: 'バッチ処理',
          text: '任意の数のファイルを放り込めば、 preset ルールに従って順次自動処理されます。出力フォルダや命名規則も指定でき、ファイルごとの繰り返し作業から解放されます。',
        },
        {
          title: 'ローカル優先',
          text: 'すべての変換と圧縮はローカルの CPU/GPU で実行され、サーバーにアップロードされません。プライバシーを守りつつクラウドの10倍の速度で動作します。',
        },
        {
          title: '高度なパラメータ調整',
          text: '高度モードではコーデック・ビットレート・解像度・フレームレート・音声サンプルレートなどすべてのパラメータを調整でき、プロクリエイターの緻密な要求に応えます。',
        },
        {
          title: 'クロスプラットフォーム',
          text: 'Windows・macOS・Linux の3デスクトップ OS で単一のコードベースから一貫した体験を提供します。',
        },
      ],
      stats: [
        { label: '動画形式', sub: '全形式カバー', value: '40+' },
        { label: '音声形式', sub: '主要すべて対応', value: '30+' },
        { label: '容量削減', sub: 'スマート圧縮', value: '85%' },
        { label: '速度向上', sub: 'クラウド比', value: '10x' },
      ],
      faq: [
        {
          q: 'どの形式に対応していますか？',
          a: '動画：MP4・AVI・MOV・MKV・WebM・FLV など40種以上、音声：MP3・WAV・FLAC・AAC・OGG など30種以上、画像：PNG・JPG・WEBP・HEIC・AVIF などに対応。',
        },
        {
          q: '圧縮後の画質低下は大きいですか？',
          a: 'スマート圧縮で目にほとんど判別できない差のまま容量を60〜85%削減します。無損失のロスレスモードも選択可能です（容量削減はやや少なめ）。',
        },
        {
          q: 'バッチ処理に対応していますか？',
          a: '完全に対応しています。任意の数のファイルを放り込めば preset ルールに従って順次自動処理され、出力フォルダや命名規則も指定できます。',
        },
        {
          q: 'インターネット接続は必要ですか？',
          a: '不要です。すべての変換と圧縮はローカルで完結しサーバーにアップロードされないため、プライバシーを完全にコントロールできます。',
        },
        {
          q: '出力パラメータをカスタマイズできますか？',
          a: 'できます。高度モードではコーデック・ビットレート・解像度・フレームレート・音声サンプルレートなどすべてのパラメータを調整できます。',
        },
      ],
    },
  },

  omnimd: {
    en: {
      title: 'Universal to Markdown Converter',
      description:
        'Powered by the Firecrawl anydoc engine, convert Word, PowerPoint, Excel, PDF, EPUB, RTF, CSV and 21 office document formats into high-quality GitHub-Flavored Markdown. Median conversion under 5ms, with full structure preservation and consistent output across all formats.',
      category: 'Productivity Tools',
      platform: 'Windows / macOS / Linux',
      tags: ['Markdown', 'PDF Conversion', 'Document Conversion', 'Desktop App'],
      features: [
        {
          title: '21 formats covered',
          text: 'Word (.doc/.docx/.docm), PowerPoint (.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm), Excel (.xls/.xlsx/.xlsm/.xlsb), OpenDocument (.odt/.ods/.odp), RTF, EPUB, CSV, PDF—21 formats, no need to assemble multiple converter libraries.',
        },
        {
          title: 'Blazing fast',
          text: 'Pure Rust, no ML models, no external services. Median conversion time under 5ms—10x faster than the next-best alternative (52ms).',
        },
        {
          title: 'Full structure preserved',
          text: 'Headings with anchors, bold/italic/strikethrough, inline code, code blocks, links and cross-references, nested lists, merged-cell tables, quotes, footnotes, endnotes, and speaker notes—all rendered as standard Markdown.',
        },
        {
          title: 'Equations to LaTeX',
          text: 'OMML (Word/PowerPoint), MathML (OpenDocument/EPUB), and RTF equations convert to GitHub math syntax ($...$ inline, $$...$$ blocks), ready to render.',
        },
        {
          title: 'Consistent output across formats',
          text: 'Every format parses into a shared document model and renders through a single Markdown serializer. A 2003 .doc and a 2025 .pptx produce identical escaping, tables, anchors, and footnotes.',
        },
      ],
      stats: [
        { label: 'Formats', sub: 'Full office coverage', value: '21' },
        { label: 'Conversion speed', sub: 'Median time', value: '< 5ms' },
        { label: 'Quality score', sub: 'LLM blind test', value: '81/100' },
        { label: 'Dependencies', sub: 'Pure Rust', value: '0' },
      ],
      faq: [
        {
          q: 'Which input formats are supported?',
          a: '21 office formats: Word (.doc/.docx/.docm), PowerPoint (.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm), Excel (.xls/.xlsx/.xlsm/.xlsb), OpenDocument (.odt/.ods/.odp), RTF, EPUB, CSV, PDF.',
        },
        {
          q: 'How is the resulting Markdown formatted?',
          a: 'Headings with anchors, bold/italic/strikethrough, inline code, code blocks, links and cross-references, nested lists, merged-cell tables, quotes, footnotes, endnotes, and speaker notes all preserved. Equations convert to LaTeX, tables to Markdown tables.',
        },
        {
          q: 'How fast is it?',
          a: 'Median conversion time under 5ms per document—10x faster than the next-best alternative (52ms) in benchmarks across 14 formats.',
        },
        {
          q: 'Does it support Chinese?',
          a: 'Fully. Mixed CJK text (Chinese, Japanese, Korean) is correctly parsed and converted.',
        },
        {
          q: 'How is it better than online converters?',
          a: 'Fully local with zero dependencies—no privacy risks; quality verified by LLM blind test (81/100, highest); blazing fast with no queue waiting.',
        },
        {
          q: 'Does it support scanned PDFs?',
          a: 'anydoc does not do OCR itself. Scanned PDFs require the Firecrawl Parse hosted API for OCR, which returns the same Markdown output.',
        },
      ],
    },
    ko: {
      title: '만능 to 마크다운 변환기',
      description:
        'Firecrawl anydoc 엔진 기반으로 Word·PPT·Excel·PDF·EPUB·RTF·CSV 등 21가지 오피스 문서를 고품질 GitHub-Flavored Markdown으로 변환합니다. 중위 변환 속도 < 5ms, 모든 형식에서 구조가 완벽히 보존됩니다.',
      category: '생산성 도구',
      platform: 'Windows / macOS / Linux',
      tags: ['Markdown', 'PDF 변환', '문서 변환', '데스크톱 앱'],
      features: [
        {
          title: '21가지 형식 전면 지원',
          text: 'Word(.doc/.docx/.docm), PowerPoint(.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm), Excel(.xls/.xlsx/.xlsm/.xlsb), OpenDocument(.odt/.ods/.odp), RTF, EPUB, CSV, PDF—21가지 형식, 여러 변환 라이브러리를 조립할 필요 없음.',
        },
        {
          title: '광속 변환',
          text: '순수 Rust로 작성되어 ML 모델이나 외부 서비스 없이 동작합니다. 중위 변환 속도 < 5ms로, 다음으로 빠른 도구(52ms)보다 10배 빠릅니다.',
        },
        {
          title: '완벽한 구조 보존',
          text: '제목(앵커 포함), 굵은 글씨/기울임/취소선, 인라인 코드, 코드 블록, 링크와 상호 참조, 중첩 목록, 병합 셀 표, 인용, 각주/말미주, 발표자 노트까지 모두 표준 마크다운으로 변환합니다.',
        },
        {
          title: '수식 → LaTeX',
          text: 'Word/PowerPoint의 OMML, OpenDocument/EPUB의 MathML, RTF 수식을 GitHub 수학 구문($...$ 인라인, $$...$$ 블록)으로 변환합니다.',
        },
        {
          title: '형식 간 일관된 출력',
          text: '모든 형식이 공유 문서 모델로 해석된 후 단일 마크다운 직렬화기를 통해 렌더링됩니다. 2003년의 .doc와 최신 .pptx 모두 동일한 방식으로 출력됩니다.',
        },
      ],
      stats: [
        { label: '지원 형식', sub: '오피스 문서 전면 커버', value: '21' },
        { label: '변환 속도', sub: '중위 시간', value: '< 5ms' },
        { label: '품질 점수', sub: 'LLM 블라인드 테스트', value: '81/100' },
        { label: '외부 의존성', sub: '순수 Rust', value: '0' },
      ],
      faq: [
        {
          q: '어떤 입력 형식을 지원하나요?',
          a: '21가지 오피스 형식: Word(.doc/.docx/.docm), PowerPoint(.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm), Excel(.xls/.xlsx/.xlsm/.xlsb), OpenDocument(.odt/.ods/.odp), RTF, EPUB, CSV, PDF.',
        },
        {
          q: '변환된 마크다운 형식은 어떤가요?',
          a: '제목(앵커 포함), 굵은 글씨/기울임/취소선, 인라인 코드, 코드 블록, 링크, 중첩 목록, 병합 셀 표, 인용, 각주/말미주, 발표자 노트까지 모두 보존합니다. 수식은 LaTeX로, 표는 마크다운 표로 변환됩니다.',
        },
        {
          q: '얼마나 빠르나요?',
          a: '14개 형식 벤치마크에서 다음으로 빠른 도구(52ms)보다 10배 빠른 중위 변환 속도 < 5ms/문서.',
        },
        {
          q: '중국어 지원이 좋은가요?',
          a: '완전히 지원합니다. 중·일·한 다국어 혼용도 올바르게 파싱하고 변환합니다.',
        },
        {
          q: '온라인 변환 도구 대비 장점은?',
          a: '완전 로컬, 외부 의존성 0개—프라이버시 걱정 無; LLM 블라인드 테스트로 품질 검증(81/100, 최고); 광속 처리, 대기열 없음.',
        },
        {
          q: '스캔 PDF를 지원하나요?',
          a: 'anydoc 자체는 OCR를 지원하지 않습니다. 스캔된 PDF는 Firecrawl Parse 호스티드 API로 OCR를 거쳐 동일한 마크다운 출력을 반환합니다.',
        },
      ],
    },
    ja: {
      title: '万能 to マークダウン変換',
      description:
        'Firecrawl anydoc エンジン駆動で、Word・PowerPoint・Excel・PDF・EPUB・RTF・CSV など21のオフィス文書を高品質な GitHub-Flavored Markdown に変換します。中位変換時間 < 5ms、全形式で構造を完璧に保存。',
      category: '生産性ツール',
      platform: 'Windows / macOS / Linux',
      tags: ['Markdown', 'PDF 変換', '文書変換', 'デスクトップアプリ'],
      features: [
        {
          title: '21の形式を全面対応',
          text: 'Word(.doc/.docx/.docm)、PowerPoint(.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm)、Excel(.xls/.xlsx/.xlsm/.xlsb)、OpenDocument(.odt/.ods/.odp)、RTF、EPUB、CSV、PDF—21の形式、複数の変換ライブラリの組み合わせ不要。',
        },
        {
          title: '高速変換',
          text: '純粋な Rust で ML モデルも外部サービスも不要。中位変換時間 < 5ms となext-best(52ms)の10倍速。',
        },
        {
          title: '完全な構造保存',
          text: '見出し（アンカー付き）、太字/イタリック/取り消し線、インラインコード、コードブロック、リンクと相互参照、中첩리스트、マージセル表、引用、脚注/末尾注、発表者ノートまで標準 Markdown に。',
        },
        {
          title: '数式 → LaTeX',
          text: 'Word/PowerPoint の OMML、OpenDocument/EPUB の MathML、RTF 数式を GitHub 数学記法（$...$ インライン、$$...$$ ブロック）に変換。',
        },
        {
          title: '形式間の一貫した出力',
          text: '全形式が共有ドキュメントモデルに解析され、単一 Markdown シリアライザーでレンダリング。2003年の .doc と最新 .pptx でもエスケープ・表・アンカー・脚注の挙動が完全一致。',
        },
      ],
      stats: [
        { label: '対応形式', sub: 'オフィス文書全面カバー', value: '21' },
        { label: '変換速度', sub: '中位時間', value: '< 5ms' },
        { label: '品質スコア', sub: 'LLM ブラインドテスト', value: '81/100' },
        { label: '外部依存', sub: '純粋な Rust', value: '0' },
      ],
      faq: [
        {
          q: 'どの入力形式に対応していますか？',
          a: '21のオフィス形式：Word(.doc/.docx/.docm)、PowerPoint(.ppt/.pps/.pot/.pptx/.pptm/.ppsx/.ppsm)、Excel(.xls/.xlsx/.xlsm/.xlsb)、OpenDocument(.odt/.ods/.odp)、RTF、EPUB、CSV、PDF。',
        },
        {
          q: '変換後の Markdown はどのような形式ですか？',
          a: '見出し（アンカー付き）、太字/イタリック/取りこし線、インラインコード、コードBlockSize、リンク、中첩リスト、マージセル表、引用、脚注/末尾注、発表者ノートまで保存。数式は LaTeX、表は Markdown 表に変換。',
        },
        {
          q: 'どのくらい速いですか？',
          a: '14形式ベンチマークで次点のツール(52ms)より10倍速の中位変換時間 < 5ms/文書。',
        },
        {
          q: '中国語の対応は良いですか？',
          a: '完全サポート。中国語・日本語・韓国語の多言語混在も正しく解析・変換します。',
        },
        {
          q: 'オンライン変換ツールとの違いは？',
          a: '完全ローカル、外部依存0—プライバシーリスクなし。LLM ブラインドテストで品質検証済み(81/100、最高)。超高速、待ち行列なし。',
        },
        {
          q: 'スキャン PDF は対応しますか？',
          a: 'anydoc 自体は OCR を行いません。スキャン済み PDF は Firecrawl Parse ホステッド API による OCR で同じ Markdown 出力を返します。',
        },
      ],
    },
  },

  'invest-platform': {
    en: {
      title: 'Macro Investment Decision Platform',
      description:
        "A macro investment research platform covering gold decisions, macro regime, global liquidity, and a weighted portfolio signal board. Data syncs automatically every trading day, turning scattered macro data into an actionable view.",
      category: 'Finance Platform',
      platform: 'Web · Browser',
      tags: ['Macro Analysis', 'Gold Decisions', 'Global Liquidity', 'Data Visualization', 'Knowledge Graph'],
      features: [
        {
          title: 'Portfolio signal board',
          text: 'Gold, liquidity, macro regime, and equity-cycle signals are weighted into a single composite score, so one page shows the market\'s overall lean.',
        },
        {
          title: 'Gold decision',
          text: 'Gold/USD correlation, two-factor pricing residuals, central-bank gold buying, and momentum indicators cross-check each other to answer whether gold is expensive and still worth buying.',
        },
        {
          title: 'Macro regime',
          text: 'Based on S&P500 and macro-regime backtests it identifies the current regime and flags risk anomalies, plus equity risk premium and style-rotation references.',
        },
        {
          title: 'Global liquidity',
          text: 'Balance sheets and net liquidity of the Fed, ECB, and BoJ, layered with SOFR funding rates, to track the global liquidity cycle.',
        },
        {
          title: 'Thematic analysis',
          text: 'Yield curve, inflation expectations, credit stress, cross-asset correlation, macro consensus, commodities, and leading indicators—six standalone pages you can dig into individually.',
        },
        {
          title: 'Automatic data sync',
          text: 'Standalone Python scripts pull from yfinance, FRED, and gold-api; GitHub Actions writes into Supabase automatically every trading day, with no manual updates.',
        },
      ],
      stats: [
        { label: 'Modules', sub: 'Signals / Indicators / Analysis', value: '12+' },
        { label: 'Knowledge topics', sub: 'Macro concept graph', value: '10' },
        { label: 'Data sources', sub: 'FRED / Yahoo / gold-api', value: '3' },
        { label: 'Sync frequency', sub: 'Automatic writes', value: 'Daily' },
      ],
      faq: [
        {
          q: 'Where does the data come from?',
          a: 'Mainly Yahoo Finance, FRED, and gold-api—standalone Python scripts in the sync/ folder fetch the data and write it into Supabase (PostgreSQL).',
        },
        {
          q: 'How often is the data updated?',
          a: 'GitHub Actions syncs automatically at 23:30 Beijing time on every trading day. You can also trigger it manually from the Actions page; run logs are kept for 14 days.',
        },
        {
          q: 'What modules does it include?',
          a: 'Portfolio signal board, macro regime, gold decision, global liquidity, commodities, leading indicators, yield curve, inflation expectations, credit stress, cross-asset correlation, macro consensus, equity risk premium & rotation, plus the knowledge graph.',
        },
        {
          q: 'What is the tech stack?',
          a: 'Astro + React + ECharts for the front end and SSR, Supabase for storage, standalone Python services for data sync, and GitHub Actions for CI/CD.',
        },
        {
          q: 'Do I need an account or a paid plan?',
          a: 'No. Every page is statically prerendered and chart data is served from JSON endpoints under /api/v1—it is free to use.',
        },
      ],
    },
    ko: {
      title: '거시 투자 의사결정 플랫폼',
      description:
        '황금 의사결정·거시 제도·글로벌 유동성·포트폴리오 신호 보드를 아우르는 거시 투자 분석 플랫폼입니다. 매 거래일 데이터를 자동 동기화해 흩어진 거시 데이터를 실행 가능한 투자 판단으로 만듭니다.',
      category: '재정 플랫폼',
      platform: 'Web · 브라우저',
      tags: ['거시 분석', '황금 의사결정', '글로벌 유동성', '데이터 시각화', '지식 그래프'],
      features: [
        {
          title: '포트폴리오 신호 보드',
          text: '황금·유동성·거시 제도·주식 사이클 신호를 가중치로 하나의 종합 점수로 합쳐 한 페이지에서 시장의 전체 방향을 한눈에 확인할 수 있습니다.',
        },
        {
          title: '황금 의사결정',
          text: '금값-달러 상관관계, 이원 요인 가격 평가 잔차, 중앙은행 금 매입, 모멘텀 지표를 교차 검증해 지금은 황금이 비싸고 살 만한지를 판단합니다.',
        },
        {
          title: '거시 제도',
          text: 'S&P500과 거시 제도 백테스트를 바탕으로 현재 제도를 식별하고 위험 이상을 표시하며 주식 위험 프리미엄과 스타일 로테이션 참고 자료를 제공합니다.',
        },
        {
          title: '글로벌 유동성',
          text: '연준·유럽중앙은행·일본은행의 자산부채표와 순유동성에 SOFR 자금 금리를 더해 글로벌 자금의 빠듯함을 추적합니다.',
        },
        {
          title: '테마별 분석',
          text: '수익률 곡선·인플레이션 기대·신용 스트레스·자산 간 연동·거시 일치도·대종상품·선행 지표를 독립 페이지로 분리해 각각 깊게 다룰 수 있습니다.',
        },
        {
          title: '데이터 자동 동기화',
          text: '독립 Python 스크립트가 yfinance·FRED·gold-api에 연결하고 GitHub Actions가 매 거래일 Supabase에 자동 기록하므로 수동 갱신이 필요 없습니다.',
        },
      ],
      stats: [
        { label: '기능 모듈', sub: '신호/지표/분석/지식', value: '12+' },
        { label: '지식 테마', sub: '거시 개념 그래프', value: '10' },
        { label: '데이터 소스', sub: 'FRED / Yahoo / gold-api', value: '3' },
        { label: '동기화 주기', sub: '자동 기록', value: '매 거래일' },
      ],
      faq: [
        {
          q: '데이터는 어디서 오나요?',
          a: '주로 Yahoo Finance·FRED·gold-api이며, sync/ 폴더의 독립 Python 스크립트가 수집해 Supabase(PostgreSQL)에 기록합니다.',
        },
        {
          q: '데이터는 얼마나 자주 갱신되나요?',
          a: 'GitHub Actions가 매 거래일 베이징 시간 23:30에 자동 동기화하며 Actions 페이지에서 수동 실행도 가능합니다. 실행 로그는 14일간 보관됩니다.',
        },
        {
          q: '어떤 기능 모듈이 있나요?',
          a: '포트폴리오 신호 보드, 거시 제도, 황금 의사결정, 글로벌 유동성, 대종상품, 선행 지표, 수익률 곡선, 인플레이션 기대, 신용 스트레스, 자산 간 연동, 거시 일치도, 주식 위험 프리미엄과 로테이션, 그리고 지식 그래프가 있습니다.',
        },
        {
          q: '기술 스택은 무엇인가요?',
          a: '프런트엔드와 서버 렌더링은 Astro + React + ECharts, 데이터는 Supabase 저장, 동기화 스크립트는 독립 Python 서비스, CI/CD는 GitHub Actions입니다.',
        },
        {
          q: '로그인이나 유료 구독이 필요한가요?',
          a: '필요 없습니다. 모든 페이지는 정적 프리렌더링되며 차트 데이터는 /api/v1 하단 JSON 인터페이스로 제공되어 무료로 이용할 수 있습니다.',
        },
      ],
    },
    ja: {
      title: 'マクロ投資意思決定プラットフォーム',
      description:
        '金の意思決定・マクロ体制・グローバル流動性・ポートフォリオ・シグナルボードを扱うマクロ投資分析プラットフォーム。データを毎取引日自動同期し、散らばったマクロデータを実行可能な投資判断にします。',
      category: 'ファイナンスプラットフォーム',
      platform: 'Web · ブラウザ',
      tags: ['マクロ分析', '金の意思決定', 'グローバル流動性', 'データ可視化', 'ナレッジグラフ'],
      features: [
        {
          title: 'ポートフォリオ・シグナルボード',
          text: '金・流動性・マクロ体制・株式サイクルのシグナルを加重して一つの総合スコアにまとめ、市場の全体方向を1ページで把握できます。',
        },
        {
          title: '金の意思決定',
          text: '金価格とドルの相関、二因子価格評価残差、中銀の金買い増し、モメンタム指標を交差検証し、金が割高か買いかを判断します。',
        },
        {
          title: 'マクロ体制',
          text: 'S&P500 とマクロ体制バックテストに基づいて現在の体制を特定しリスク異常を明示。株式リスクプレミアムとスタイルローテーションの参考も提供します。',
        },
        {
          title: 'グローバル流動性',
          text: 'FRB・ECB・日銀のバランスシートと純流動性に加え SOFR 資金金利を重ねて、世界の資金の緩み・縮みを追跡します。',
        },
        {
          title: 'テーマ別分析',
          text: 'イールドカーブ・インフレ期待・クレジットストレス・クロスアセット連動・マクロ一致度・コモディティ・先行指標を独立ページ化し、個別に掘り下げて検討できます。',
        },
        {
          title: 'データの自動同期',
          text: '独立の Python スクリプトが yfinance / FRED / gold-api に接続し、GitHub Actions が毎取引日 Supabase に自動書き込みするため手動更新は不要です。',
        },
      ],
      stats: [
        { label: '機能モジュール', sub: 'シグナル/指標/分析/知識', value: '12+' },
        { label: 'ナレッジテーマ', sub: 'マクロ概念グラフ', value: '10' },
        { label: 'データソース', sub: 'FRED / Yahoo / gold-api', value: '3' },
        { label: '同期頻度', sub: '自動書き込み', value: '毎取引日' },
      ],
      faq: [
        {
          q: 'データはどこから来ますか？',
          a: '主に Yahoo Finance・FRED・gold-api です。sync/ フォルダ内の独立 Python スクリプトが取得し、Supabase (PostgreSQL) へ書き込みます。',
        },
        {
          q: 'データはどのくらいの頻度で更新されますか？',
          a: 'GitHub Actions が毎取引日 北京時間 23:30 に自動同期します。Actions ページから手動実行も可能で、実行ログは 14 日間保存されます。',
        },
        {
          q: 'どのようなモジュールがありますか？',
          a: 'ポートフォリオ・シグナルボード、マクロ体制、金の意思決定、グローバル流動性、コモディティ、先行指標、イールドカーブ、インフレ期待、クレジットストレス、クロスアセット連動、マクロ一致度、株式リスクプレミアムとローテーション、それにナレッジグラフです。',
        },
        {
          q: 'テクスタックは何ですか？',
          a: 'フロントエンドとサーバーレンダリングは Astro + React + ECharts、データは Supabase、同期スクリプトは独立の Python サービス、CI/CD は GitHub Actions を使用しています。',
        },
        {
          q: 'ログインや有料課金は必要ですか？',
          a: '不要です。全ページは静的プリレンダリングされ、チャートデータは /api/v1 下の JSON エンドポイントから提供されるため無料で使えます。',
        },
      ],
    },
  },
};