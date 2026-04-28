# SANDS HP

合同会社SANDS 公式サイト

## フォルダ構成

```
hp-project/
├── index.html          ← メインページ
├── assets/
│   ├── css/style.css   ← スタイル
│   └── js/main.js      ← スクロール等
└── docs/
    ├── index.html      ← パスワード保護の資料DLページ
    └── files/          ← PDFファイルをここに置く
        ├── sands-company-profile.pdf
        ├── sands-property-profile.pdf
        └── sands-personal-profile.pdf
```

## パスワードの変更方法

`docs/index.html` の以下の行を書き換えるだけ:
```js
const CORRECT_PASSWORD = 'sands2026';  // ← ここを変更
```

## GitHub Pages への公開手順

1. GitHubで `sands-re` リポジトリを作成（Public）
2. このフォルダをpush
3. Settings → Pages → Source: `main` ブランチの `/ (root)` を選択
4. `https://<ユーザー名>.github.io/sands-re/` で公開される

## 独自ドメイン設定（お名前ドットコム）

1. GitHub Pages の Custom domain に `sands-re.co.jp` を入力して Save
2. お名前ドットコムの DNS 設定で A レコードを追加:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. 反映まで最大48時間（通常は数時間）

## PDFのアップロード

`docs/files/` フォルダに以下を入れる:
- `sands-company-profile.pdf` ← 法人プロフィール
- `sands-property-profile.pdf` ← 物件プロフィール
- `sands-personal-profile.pdf` ← 個人プロフィール
