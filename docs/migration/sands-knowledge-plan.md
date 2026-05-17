# sands-knowledge 移植プラン

このドキュメントは「cc-booster の AIカンパニーを sands-knowledge リポジトリに集約し、Mac とクラウドのどちらから起動した Claude も同じベン・同じ知識を参照できる状態」を実現するための作業計画書。

**読者**：sands-knowledge リポジトリで起動された新しい Claude Code on the web セッション（このプランを最初に読んで実行する）。

---

## 1. 背景と現状の課題

### 現状
- **Mac の cc-booster**（`/Users/sutoumasashi/cc-booster-v1-release/`）に AIカンパニー定義（manifest + CLAUDE.md）がある
- **GitHub の sutoumasa4/sands-re**（Public）に SANDS の Web サイト・財務ダッシュボード・物件データがある
- AI秘書「ベン」と分身AI社長、3部門（コンテンツ・ブランド・マーケティング）が cc-booster 側に存在

### 課題（このプランで解消する）

| ID | 課題 |
|---|---|
| A | AIカンパニー定義が Mac のローカルにしかなく、クラウドの Claude から見えない |
| B | sands-re 側に独自の `.claude/agents/` 4担当を作ってしまい、cc-booster の定義と二重化している |
| C | ノウハウ蓄積先が `~/cc-booster.../knowledge/` と `sands-re/docs/knowledge/` に分散 |
| D | Mac で起動したベンとクラウドで起動したベンが別人格になりうる |
| E | sands-re が Public のため、機密ノウハウを置けない |

---

## 2. 目標状態

```
[Private: sutoumasa4/sands-knowledge] ← 唯一の真実
├── CLAUDE.md                            ← cc-booster のルートCLAUDE.md（Phase 0-5）
├── company/
│   ├── company-manifest.json            ← AIカンパニー部門定義
│   └── purpose-mvv.md
├── knowledge/
│   ├── agents/
│   │   ├── secretary/core.md            ← AI秘書「ベン」コア
│   │   ├── bunshin/core.md              ← 分身AI社長コア
│   │   └── founder/profile.md           ← 創業者プロフィール
│   ├── onboarding/
│   │   ├── intake.md
│   │   ├── research.md
│   │   └── scorecard.md
│   ├── finance/                         ← 【新規】財務領域の日常運営ノウハウ
│   ├── web/                             ← 【新規】Webサイト領域のノウハウ
│   ├── property/                        ← 【新規】物件・運営領域のノウハウ
│   └── correspondence/                  ← 【新規】対外文書領域のノウハウ
├── secretary/  (CLAUDE.md, inbox/, todos/)
├── content/    (CLAUDE.md, drafts/)
├── branding/   (CLAUDE.md)
├── marketing/  (CLAUDE.md)
├── resources/
├── templates/
└── .claude/                             ← settings, agents 等

[Public: sutoumasa4/sands-re] ← 公開サイト専用に純化
├── index.html, company.html, ...        ← 公開Webサイト
├── members/                              ← 会員ページ（※公開問題は別途対処）
├── financial.html                       ← 財務ダッシュボード
└── CLAUDE.md                            ← 「ノウハウは sands-knowledge を参照」とだけ記載
```

---

## 3. 重要な事実：cc-booster 定義（manifest + ルートCLAUDE.md）

**新セッションは Mac の cc-booster ディレクトリの中身を直接読めない**ため、ここに転記する。
（実装時は、ユーザーが Mac から実物の cc-booster フォルダを sands-knowledge に push する前提なので、最終的にはそちらが正となる）

### 3-1. company/company-manifest.json（cc-booster 実機の内容）

```json
{
  "company_name": "合同会社SANDS",
  "purpose": "入居者・仲間・家族の幸せを礎に、横浜から挑戦し続ける不動産賃貸業で、人と暮らしの豊かさを創る。",
  "mission": "FY27までに60戸・利益率10%を達成し、SANDS一本での経営に向けた盤石な収益基盤と発信力を確立する。",
  "values": [
    "入居者ファースト：住む人の幸せが事業の根幹",
    "エンデュランス思考：100マイルを走り切る継続力で資産を長期的に育てる",
    "データ×熱量：財務データと入居者への想いを両立する"
  ],
  "owner": {
    "name": "須藤政志",
    "call_name": "まあしさん",
    "business": "不動産賃貸業（横浜市内・新築木造アパート5棟41戸）",
    "goal": "65歳で挑戦と幸福。家族・仲間・入居者の幸せが生き甲斐の源泉となる。"
  },
  "departments": [
    {
      "name": "secretary",
      "display_name": "秘書室",
      "role": "全社の窓口。まあしさんとの対話、タスク管理、物件分析サポート、意思決定の整理",
      "always_active": true,
      "reason": "常設"
    },
    {
      "name": "content",
      "display_name": "コンテンツ部",
      "role": "HP・ブログ・SNS・物件ストーリーの制作支援。SANDSの実績と想いを言語化する",
      "always_active": false,
      "reason": "発信力スコア8/20が最低。HP・SNS未整備という最大ボトルネックを解消するため"
    },
    {
      "name": "branding",
      "display_name": "ブランド部",
      "role": "SANDSブランドの可視化・ロゴ・名刺・プレゼン資料・物件ストーリー化。ブランドとしての一貫性を保つ",
      "always_active": false,
      "reason": "ブランド力スコア10/20。HPなしでウェブ上の存在感がゼロの状態を改善するため"
    },
    {
      "name": "marketing",
      "display_name": "マーケティング部",
      "role": "とちから会等のコミュニティへの情報発信・投資家向け発信・影響力拡大",
      "always_active": false,
      "reason": "影響力スコア12/20。スタディツアー30名実績はあるが、市場への影響力を組織的に高めるため"
    }
  ],
  "generated_from": {
    "intake": "knowledge/onboarding/intake.md",
    "research": "knowledge/onboarding/research.md",
    "scorecard": "knowledge/onboarding/scorecard.md"
  },
  "generated_at": "2026-04-24",
  "cc_booster_version": "1.0.0"
}
```

### 3-2. ルート CLAUDE.md の構造（Phase 0〜5）

cc-booster のルート CLAUDE.md は以下のフェーズ構造で動作する：

- **Phase 0**：環境セットアップ（OS判定・ZIPダウンロード）
- **Phase 1**：動的ゴールシーク型ヒアリング（最大15問・最小6問）
  - 固定2問（名前・理想の未来）→ ファイル確認 → AI記憶移植 → URL/リサーチ → 動的質問（最大6問）→ ペルソナ質問
- **Phase 2**：5軸採点（発信力・影響力・ブランド力・仕組み力・行動力 各20点）
- **Phase 3**：AIカンパニー自動構築（manifest + 部門フォルダ生成）
- **Phase 4**：日常運営モード（ベン経由で部門に振り分け）
- **Phase 5**：定期レビュー（毎週月曜）

**AI秘書の凸凹設計**：ユーザーのタイプを判定し、性格を真逆に設定。話し方はユーザーが選ぶ。

**現在のスコアカード（2026-04-24）**：発信力 8 / ブランド力 10 / 影響力 12 / 仕組み力 14 / 行動力 18 = 62/100

**重要な運用ルール**：
- `knowledge/` 配下のファイル編集は承認不要（自律実行OK）
- 外部公開コンテンツ・CLAUDE.md / settings.json の変更は必ずユーザーに確認
- いきなり成果物を作らない（AskUserQuestion でヒアリング → プラン → 実行）

---

## 4. 新セッション（sands-knowledge 側）でやるべき作業

ユーザーが Mac から cc-booster の中身を push し終わった前提で、以下を実施する。

### 4-1. 起動時の確認

1. リポジトリ内容を確認（`ls -la` で構造把握）
2. `CLAUDE.md` `company/company-manifest.json` `knowledge/agents/secretary/core.md` を読む
3. 自分が誰か（=AI秘書「ベン」）を理解する

### 4-2. 知識フォルダの新設

`knowledge/` 配下に以下を作成（sands-re 側からの移植内容を含める）：

| フォルダ | 内容 | 元ネタ |
|---|---|---|
| `knowledge/finance/` | 財務・銀行対応のノウハウ。`README.md` + 必要に応じて `banks.md` `methodology.md` | sands-re/docs/knowledge/finance/ |
| `knowledge/web/` | SANDS公式サイト（HTML/CSS/JS）の規約・パターン | sands-re/docs/knowledge/web/ |
| `knowledge/property/` | 物件運営・入居・設備のノウハウ | sands-re/docs/knowledge/property/ |
| `knowledge/correspondence/` | 対外文書・金融機関宛メールのトーン・定型 | sands-re/docs/knowledge/correspondence/ |

これらは **「部門」ではなく「ベンが参照する知識ベース」** として扱う。manifest の departments には追加しない。

### 4-3. sands-re との関係を CLAUDE.md に追記

sands-knowledge の CLAUDE.md（cc-booster ルートCLAUDE.md）の末尾あたりに以下のセクションを追加：

```markdown
## 関連リポジトリ

### sutoumasa4/sands-re（Public）
- 役割：SANDS公式Webサイト・財務ダッシュボード・物件データの公開
- 編集が必要な場合：別途 sands-re リポジトリで Claude Code セッションを起動する
- 当リポジトリは「中身（ノウハウ・判断・対話）」、sands-re は「外向きの出力物」という分担
```

### 4-4. sands-re 側の整理依頼を docs/migration/sands-re-cleanup.md に書き残す

新セッション（sands-knowledge）から sands-re には直接触れないので、「次に sands-re セッションで何をやるか」を書き残す。内容例：

- `.claude/agents/finance.md` `web.md` `property.md` `correspondence.md` を削除
- `docs/knowledge/{finance,web,property,correspondence}/README.md` を削除
- `CLAUDE.md` を以下に書き換え：
  > このリポジトリは SANDS の公開Webサイト専用。AIカンパニー定義・ノウハウは sutoumasa4/sands-knowledge（Private）を参照。

---

## 5. ユーザー（須藤さん）にやってもらう作業

### 5-1. 新リポジトリ作成

GitHub Web UI で：
1. https://github.com/new
2. Repository name: `sands-knowledge`
3. Visibility: **Private**（必須）
4. Initialize this repository with: チェックなし（空のまま）
5. Create repository

### 5-2. Mac から初回 push

Mac のターミナルで以下を順に実行：

```bash
cd /Users/sutoumasashi/cc-booster-v1-release

# 既にgit管理されている場合はそのまま、なければ git init
git init 2>/dev/null

# .gitignore を確認・作成（resources の機密ファイル等を除外したい場合は調整）
cat > .gitignore <<'EOF'
.onboarding-status
.DS_Store
*.log
node_modules/
.env
EOF

git add .
git commit -m "Initial: cc-booster v1.0.0 を sands-knowledge へ移植"

# リモート追加（既にあれば set-url で上書き）
git remote add origin git@github.com:sutoumasa4/sands-knowledge.git 2>/dev/null || \
  git remote set-url origin git@github.com:sutoumasa4/sands-knowledge.git

git push -u origin main
```

push がうまくいかない場合（SSH鍵が無い等）は HTTPS で：
```bash
git remote set-url origin https://github.com/sutoumasa4/sands-knowledge.git
git push -u origin main
```

### 5-3. Claude Code on the web で sands-knowledge を指定して新セッション起動

1. https://claude.ai/code （または同等のエンドポイント）
2. 「リポジトリを選択」で `sutoumasa4/sands-knowledge` を選ぶ
3. 起動したセッションに「`docs/migration/sands-knowledge-plan.md` を読んで、4-1〜4-4 を実行して」と伝える
   （※このプランは sands-re 側にあるので、新セッションには本ドキュメントの内容を一度貼る必要がある。または手動で sands-knowledge にコピーする）

### 5-4. 完了後、このセッション（sands-re 側）に戻る

新セッションでの整理が終わったら、このセッション（sands-re 側）に戻って以下を依頼：
- sands-re 側の `.claude/agents/` `docs/knowledge/` の撤去
- `CLAUDE.md` の書き換え

---

## 6. 未解決の論点（要対処）

### 6-1. 「カシワ」とは誰か

ユーザーは「ベンとカシワ達」と表現したが、cc-booster の manifest には「カシワ」という名前がない。
**新セッションで `knowledge/agents/secretary/core.md` `knowledge/agents/bunshin/core.md` を読み、カシワに該当するキャラクターを特定する**こと。
特定できない場合はユーザーに直接確認する。

### 6-2. members/sands-data.js の公開問題

sands-re が Public で、`members/sands-data.js` 内の財務・物件詳細が誰でも取得可能な状態。
パスワード保護はUIだけで実効性なし。これは vault 移行とは別の緊急案件として対処が必要：
- 候補A：sands-re を Private 化（GitHub Pages は Pro 以上）
- 候補B：機密データを別 Private リポに退避、GitHub Actions で公開ビルド時に差し込む
- 候補C：API 経由配信
- 候補D：諦めて公開前提運用

このプランでは扱わないが、必ず別途扱うこと。

---

## 7. このセッション（sands-re 側）の現状

このプランを書いた時点で sands-re には以下が既に存在する（撤去予定）：

- `CLAUDE.md` — 4担当のローカル定義（撤去 or 書き換え）
- `.claude/agents/finance.md` `web.md` `property.md` `correspondence.md`（撤去）
- `docs/knowledge/finance/` `web/` `property/` `correspondence/` の README（撤去）

これらは新セッション側で再構築されるまで残しておいてよい。新セッションが完了したら撤去する。
