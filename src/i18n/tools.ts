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
        'Turn anything—images, PDFs, screenshots, even handwritten notes—into structured Markdown with one click. A built-in OCR engine and AI layout restore make the output immediately usable.',
      category: 'Productivity Tools',
      platform: 'Windows / macOS / Linux',
      tags: ['OCR', 'Markdown', 'PDF Conversion', 'Image Recognition', 'Desktop App'],
      features: [
        {
          title: 'Any input',
          text: 'Images (PNG, JPG, HEIC…), PDF documents, screenshots, even photos of handwritten notes—anything with text is worth a try, no manual prepping required.',
        },
        {
          title: 'High-accuracy OCR',
          text: 'A deep-learning OCR engine tops 98% accuracy on Chinese text, and also handles Japanese, Korean, English, French and other major languages with human-entry quality.',
        },
        {
          title: 'Smart layout',
          text: 'Automatically detects headings, paragraphs, lists, code blocks, links, and quotes, then converts them into standard Markdown—ready to use with no second pass of editing.',
        },
        {
          title: 'Large-file handling',
          text: 'Smart memory management keeps even hundred-page PDFs running smoothly at roughly 2–5 pages per second. No more splitting files or waiting in anxiety.',
        },
        {
          title: 'Fully offline',
          text: 'All recognition and conversion happen locally—no internet, no processing queues. Unlimited runs and pages per job, with privacy and speed together.',
        },
        {
          title: 'Developer-friendly',
          text: 'CLI invocation lets you drop it seamlessly into build pipelines and automation scripts, making Markdown conversion part of your dev workflow.',
        },
      ],
      stats: [
        { label: 'OCR accuracy', sub: 'Chinese text', value: '98%+' },
        { label: 'Languages', sub: 'Multilingual', value: '10+' },
        { label: 'Speed', sub: 'Large PDF', value: '5 pg/s' },
        { label: 'Internet needed', sub: 'Fully offline', value: '0' },
      ],
      faq: [
        {
          q: 'Which input formats are supported?',
          a: 'Images (PNG, JPG, HEIC…), PDF documents, screenshots, even photos of handwritten notes—anything containing text is worth a try.',
        },
        {
          q: 'How is the resulting Markdown formatted?',
          a: 'It auto-detects structure like headings, paragraphs, lists, code blocks, links, and quotes, then converts them into correct standard Markdown.',
        },
        {
          q: 'Is Chinese recognition accurate?',
          a: 'A deep-learning OCR engine exceeds 98% accuracy on Chinese, and also supports major languages like Japanese, Korean, and English.',
        },
        {
          q: 'Can it handle large files?',
          a: 'Yes. Smart memory management keeps even large (hundred-page) PDFs running smoothly at about 2–5 pages per second.',
        },
        {
          q: 'How is it better than cloud OCR tools?',
          a: 'Fully local—no privacy worries; no internet needed, no queue waiting; unlimited runs and pages per job.',
        },
      ],
    },
    ko: {
      title: '만능 to 마크다운 변환기',
      description:
        '이미지·PDF·스크린샷·심지어 손글씨 메모까지—한 번의 클릭으로 구조화된 마크다운으로 변환합니다. 내장 OCR 엔진과 AI 레이아웃 복원으로 결과를 바로 사용할 수 있습니다.',
      category: '생산성 도구',
      platform: 'Windows / macOS / Linux',
      tags: ['OCR', 'Markdown', 'PDF 변환', '이미지 인식', '데스크톱 앱'],
      features: [
        {
          title: '모든 입력',
          text: '이미지(PNG·JPG·HEIC 등), PDF 문서, 스크린샷, 심지어 손글씨 메모 사진까지—글자가 포함된 것이라면 별도 정리 없이 변환을 시도해 보세요.',
        },
        {
          title: '고정밀 OCR',
          text: '딥러닝 OCR 엔진이 중국어에서 98% 이상 정확도를 자랑하며, 일본어·한국어·영어·프랑스어 등 주요 언어도 사람이 입력한 수준의 품질로 처리합니다.',
        },
        {
          title: '스마트 레이아웃',
          text: '제목 계층·문단·목록·코드 블록·링크·인용 등 구조를 자동 인식해 표준 마크다운으로 변환하므로 바로 사용 가능하며 재편집이 필요 없습니다.',
        },
        {
          title: '대용량 파일 처리',
          text: '지능형 메모리 관리로 수백 페이지 PDF도 초당 약 2~5페이지의 속도로 끊김 없이 처리됩니다. 파일 분할이나 대기 불안도 끝입니다.',
        },
        {
          title: '완전 오프라인',
          text: '모든 인식과 변환이 로컬에서 이루어져 인터넷이나 처리 대기열이 필요 없습니다. 횟수·페이지 제한 없이 프라이버시와 속도를 모두 챙깁니다.',
        },
        {
          title: '개발자 친화적',
          text: 'CLI 호출을 지원해 빌드 파이프라인과 자동화 스크립트에 매끄럽게 통합할 수 있어 마크다운 변환을 개발 워크플로의 일부로 만듭니다.',
        },
      ],
      stats: [
        { label: 'OCR 정확도', sub: '중국어 인식', value: '98%+' },
        { label: '지원 언어', sub: '다국어', value: '10+' },
        { label: '처리 속도', sub: '대형 PDF', value: '5 페이지/s' },
        { label: '인터넷 필요', sub: '완전 오프라인', value: '0' },
      ],
      faq: [
        {
          q: '어떤 입력 형식을 지원하나요?',
          a: '이미지(PNG·JPG·HEIC 등), PDF 문서, 스크린샷, 심지어 손글씨 메모 사진까지—글자가 포함된 것이라면 변환을 시도해 볼 수 있습니다.',
        },
        {
          q: '변환된 마크다운 형식은 어떤가요?',
          a: '제목 계층·문단·목록·코드 블록·링크·인용 등 구조를 자동 인식해 올바른 표준 마크다운 구문으로 변환합니다.',
        },
        {
          q: '중국어 인식이 정확한가요?',
          a: '딥러닝 OCR 엔진으로 중국어 인식 정확도가 98%를 넘으며, 일본어·한국어·영어 등 주요 언어도 지원합니다.',
        },
        {
          q: '대용량 파일을 처리할 수 있나요?',
          a: '가능합니다. 지능형 메모리 관리로 수백 페이지의 대형 PDF도 초당 약 2~5페이지의 속도로 끊김 없이 처리됩니다.',
        },
        {
          q: '클라우드 OCR 도구 대비 장점은?',
          a: '완전 로컬이라 프라이버시 걱정이 없고, 인터넷도 대기열도 필요 없으며, 횟수·페이지 제한 없는 처리가 가능합니다.',
        },
      ],
    },
    ja: {
      title: '万能 to マークダウン変換',
      description:
        '画像・PDF・スクリーンショット・さらには手書きメモまで——ワンクリックで構造化された Markdown に変換します。組み込みの OCR エンジンと AI レイアウト復元で、そのまま使える出力を実現。',
      category: '生産性ツール',
      platform: 'Windows / macOS / Linux',
      tags: ['OCR', 'Markdown', 'PDF 変換', '画像認識', 'デスクトップアプリ'],
      features: [
        {
          title: 'あらゆる入力',
          text: '画像（PNG・JPG・HEIC など）、PDF 文書、スクリーンショット、さらには手書きメモの写真まで——文字が含まれていれば手作業の下ごしらえなしで変換できます。',
        },
        {
          title: '高精度 OCR',
          text: '深層学習 OCR エンジンは中国語で98%以上の精度を誇り、日本語・韓国語・英語・フランス語など主要言語も人入力に匹敵する品質で処理します。',
        },
        {
          title: 'スマートレイアウト',
          text: '見出し階層・段落・リスト・コードブロック・リンク・引用などの構造を自動認識し、標準 Markdown に変換するため、そのまま使えて再編集は不要です。',
        },
        {
          title: '大容量ファイル処理',
          text: 'インテリジェントなメモリ管理で数百ページの PDF も秒間約2〜5ページの速度で滑らかに処理。ファイル分割や待機の不安ともおさらばです。',
        },
        {
          title: '完全オフライン',
          text: 'すべての認識と変換はローカルで完結し、インターネットも処理待ち行列も不要。回数・ページ数の制限なく、プライバシーと速度を両立します。',
        },
        {
          title: '開発者フレンドリ',
          text: 'CLI 呼び出しに対応し、ビルドパイプラインや自動化スクリプトにシームレスに統合できるため、Markdown 変換を開発ワークフローの一部にできます。',
        },
      ],
      stats: [
        { label: 'OCR 精度', sub: '中国語認識', value: '98%+' },
        { label: '対応言語', sub: '多言語', value: '10+' },
        { label: '処理速度', sub: '大型 PDF', value: '5 ページ/秒' },
        { label: '通信要件', sub: '完全オフライン', value: '0' },
      ],
      faq: [
        {
          q: 'どの入力形式に対応していますか？',
          a: '画像（PNG・JPG・HEIC など）、PDF 文書、スクリーンショット、さらには手書きメモの写真まで——文字が含まれていれば変換を試せます。',
        },
        {
          q: '変換後の Markdown はどのような形式ですか？',
          a: '見出し階層・段落・リスト・コードブロック・リンク・引用などの構造を自動認識し、正しい標準 Markdown 構文に変換します。',
        },
        {
          q: '中国語の認識は正確ですか？',
          a: '深層学習 OCR エンジンで中国語認識精度は98%以上。日本語・韓国語・英語などの主要言語にも対応しています。',
        },
        {
          q: '大容量ファイルは処理できますか？',
          a: '可能です。インテリジェントなメモリ管理で数百ページの大型 PDF も秒間約2〜5ページの速度で滑らかに処理されます。',
        },
        {
          q: 'クラウド OCR ツールとの違いは？',
          a: '完全ローカルなのでプライバシーの心配がなく、インターネットも待ち行列も不要。回数・ページ数の制限なく処理できます。',
        },
      ],
    },
  },

  'clipboard-manager': {
    en: {
      title: 'Smart Clipboard Manager',
      description:
        'Keep a history of every copy, with multi-dimensional search and quick paste for text, images, and rich text. Find whatever you copied, whenever you need it.',
      category: 'System Tools',
      platform: 'Windows / macOS',
      tags: ['Clipboard', 'History', 'Search', 'Multi-format'],
      features: [
        {
          title: 'Records every format',
          text: 'Plain text, rich text (with formatting), images, file paths—whatever you copy gets recorded. No need to worry about format; the system recognizes and stores it automatically.',
        },
        {
          title: 'History recall',
          text: 'Keeps the last 500 entries by default, with a customizable cap. Pin important items manually so they’re saved permanently and never lost.',
        },
        {
          title: 'Multi-dimensional search',
          text: 'Full-text search, time filtering, and format grouping. The shortcut Ctrl/Cmd + Shift + V summons the search panel instantly—find history in seconds.',
        },
        {
          title: 'Quick paste',
          text: 'Click a search result to paste directly, with drag-and-drop support. No more copy-then-paste hassle—efficiency you can see.',
        },
        {
          title: 'Privacy protection',
          text: 'All data is stored locally, never uploaded to the cloud. Sensitive content (like passwords) is auto-flagged and can be excluded from recording—double protection for safety and privacy.',
        },
        {
          title: 'Data migration',
          text: 'One-click export to JSON, with import supported too. Seamlessly migrate all history when switching computers or reinstalling—nothing lost.',
        },
      ],
      stats: [
        { label: 'History', sub: 'Customizable', value: '500+' },
        { label: 'Formats', sub: 'Text/Image/Rich', value: '4' },
        { label: 'Recall latency', sub: 'Shortcut response', value: '< 200ms' },
        { label: 'Cloud uploads', sub: 'Local only', value: '0' },
      ],
      faq: [
        {
          q: 'How long is clipboard history kept?',
          a: 'Customizable—500 entries by default. Important items can be pinned manually and saved permanently.',
        },
        {
          q: 'Which content formats are supported?',
          a: 'Plain text, rich text (with formatting), images, and file paths—whatever you copy gets recorded.',
        },
        {
          q: 'Is it private and secure?',
          a: 'All data is stored locally, never uploaded to the cloud. Sensitive content (like passwords) is auto-flagged and can be excluded from recording.',
        },
        {
          q: 'How do I search the history?',
          a: 'Full-text search, time filtering, and format grouping are supported. The shortcut Ctrl/Cmd + Shift + V summons the search panel instantly.',
        },
        {
          q: 'Does it support export and backup?',
          a: 'Yes—one-click export to JSON, with import also supported. Migrate all history seamlessly when switching computers.',
        },
      ],
    },
    ko: {
      title: '스마트 클립보드 관리자',
      description:
        '모든 복사를 기록하고, 텍스트·이미지·리치 텍스트를 위한 다차원 검색과 빠른 붙여넣기를 제공합니다. 복사한 내용을 언제든 다시 찾을 수 있습니다.',
      category: '시스템 도구',
      platform: 'Windows / macOS',
      tags: ['클립보드', '기록', '검색', '다중 형식'],
      features: [
        {
          title: '모든 형식 기록',
          text: '일반 텍스트, 서식 포함 리치 텍스트, 이미지, 파일 경로까지—복사한 것은 무엇이든 기록됩니다. 형식을 신경 쓸 필요 없이 시스템이 자동으로 인식해 분류 저장합니다.',
        },
        {
          title: '기록 복원',
          text: '기본적으로 최근 500개 항목을 보관하며 상한을 사용자 지정할 수 있습니다. 중요한 항목은 수동으로 고정해 영구 보관할 수 있습니다.',
        },
        {
          title: '다차원 검색',
          text: '전체 텍스트 검색, 시간 필터링, 형식별 분류를 지원합니다. 단축키 Ctrl/Cmd + Shift + V로 검색 패널을 즉시 불러와 기록을 몇 초 만에 찾습니다.',
        },
        {
          title: '빠른 붙여넣기',
          text: '검색 결과를 클릭하면 바로 붙여넣기되며 드래그 앤 드롭도 지원합니다. 복사 후 붙여넣기의 번거로움 없이 눈에 보이는 효율을 제공합니다.',
        },
        {
          title: '프라이버시 보호',
          text: '모든 데이터는 로컬에 저장되며 클라우드에 업로드되지 않습니다. 비밀번호 등 민감한 내용은 자동으로 표시되고 기록에서 제외할 수 있어 안전과 프라이버시를 모두 지킵니다.',
        },
        {
          title: '데이터 이전',
          text: '한 번의 클릭으로 JSON 내보내기를 지원하며 가져오기도 가능합니다. 컴퓨터 교체나 재설치 시 모든 기록을 끊김 없이 마이그레이션할 수 있습니다.',
        },
      ],
      stats: [
        { label: '기록', sub: '사용자 지정 가능', value: '500+' },
        { label: '지원 형식', sub: '텍스트/이미지/리치', value: '4' },
        { label: '호출 지연', sub: '단축키 응답', value: '< 200ms' },
        { label: '클라우드 업로드', sub: '로컬 전용', value: '0' },
      ],
      faq: [
        {
          q: '클립보드 기록은 얼마나 보관되나요?',
          a: '사용자 지정 가능하며 기본적으로 최근 500개 항목을 보관합니다. 중요한 항목은 수동으로 고정해 영구 보관할 수 있습니다.',
        },
        {
          q: '어떤 내용 형식을 지원하나요?',
          a: '일반 텍스트, 서식 포함 리치 텍스트, 이미지, 파일 경로까지—복사한 것은 무엇이든 기록됩니다.',
        },
        {
          q: '프라이버시는 안전한가요?',
          a: '모든 데이터는 로컬에 저장되며 클라우드에 업로드되지 않습니다. 비밀번호 등 민감한 내용은 자동으로 표시되고 기록에서 제외할 수 있습니다.',
        },
        {
          q: '기록을 어떻게 검색하나요?',
          a: '전체 텍스트 검색, 시간 필터링, 형식별 분류를 지원합니다. 단축키 Ctrl/Cmd + Shift + V로 검색 패널을 즉시 불러옵니다.',
        },
        {
          q: '내보내기와 백업을 지원하나요?',
          a: '네—한 번의 클릭으로 JSON 내보내기를 지원하며 가져오기도 가능합니다. 컴퓨터 교체 시 모든 기록을 끊김 없이 마이그레이션할 수 있습니다.',
        },
      ],
    },
    ja: {
      title: 'スマートクリップボード管理',
      description:
        'すべてのコピー履歴を記録し、テキスト・画像・リッチテキストを対象に多次元検索とクイックペーストを提供。コピーした内容をいつでも取り戻せます。',
      category: 'システムツール',
      platform: 'Windows / macOS',
      tags: ['クリップボード', '履歴', '検索', 'マルチフォーマット'],
      features: [
        {
          title: '全形式記録',
          text: 'プレーンテキスト、書式付きリッチテキスト、画像、ファイルパスまで——コピーしたものは何でも記録されます。形式を気にせず、システムが自動で認識し分類保存します。',
        },
        {
          title: '履歴の復元',
          text: 'デフォルトで直近500件を保持し、上限はカスタマイズ可能。重要な項目は手動で固定して永久に保存できます。',
        },
        {
          title: '多次元検索',
          text: '全文検索、時間フィルタ、形式別分類に対応。ショートカット Ctrl/Cmd + Shift + V で検索パネルを即座に呼び出し、数秒で履歴を発見できます。',
        },
        {
          title: 'クイックペースト',
          text: '検索結果をクリックするだけで直接ペーストでき、ドラッグ＆ドロップにも対応。コピーしてからペーストする手間を省き、目に見える効率を実現します。',
        },
        {
          title: 'プライバシー保護',
          text: 'すべてのデータはローカルに保存されクラウドにアップロードされません。パスワードなどの機微内容は自動でマークされ記録から除外できるため、安全とプライバシーを両立します。',
        },
        {
          title: 'データ移行',
          text: 'ワンクリックで JSON 出力に対応し、インポートも可能。PC の交換や再インストール時もすべての履歴をシームレスに移行でき、失われません。',
        },
      ],
      stats: [
        { label: '履歴', sub: 'カスタマイズ可', value: '500+' },
        { label: '対応形式', sub: 'テキスト/画像/リッチ', value: '4' },
        { label: '呼び出し遅延', sub: 'ショートカット応答', value: '< 200ms' },
        { label: 'クラウド送信', sub: 'ローカルのみ', value: '0' },
      ],
      faq: [
        {
          q: 'クリップボード履歴はどのくらい残りますか？',
          a: 'カスタマイズ可能で、デフォルトは直近500件を保持します。重要な項目は手動で固定して永久に保存できます。',
        },
        {
          q: 'どの内容形式に対応していますか？',
          a: 'プレーンテキスト、書式付きリッチテキスト、画像、ファイルパスまで——コピーしたものは何でも記録されます。',
        },
        {
          q: 'プライバシーは安全ですか？',
          a: 'すべてのデータはローカルに保存されクラウドにアップロードされません。パスワードなどの機微内容は自動でマークされ記録から除外できます。',
        },
        {
          q: '履歴をどう検索しますか？',
          a: '全文検索、時間フィルタ、形式別分類に対応。ショートカット Ctrl/Cmd + Shift + V で検索パネルを即座に呼び出せます。',
        },
        {
          q: 'エクスポートとバックアップに対応していますか？',
          a: '対応しています——ワンクリックで JSON 出力でき、インポートも可能。PC 交換時もすべての履歴をシームレスに移行できます。',
        },
      ],
    },
  },
};
