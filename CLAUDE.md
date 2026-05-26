# SANDS リポジトリ — Claude 運用ルール

## このリポジトリの役割

**SANDS の公開Webサイト専用**。
- `index.html` `company.html` `news.html` `properties.html` `contact.html` `financial.html` — 公開ページ
- `members/` — 会員ページ（パスワード保護UI）
- `assets/` — 公開アセット
- `docs/files/` — 公開PDF

## AIカンパニー定義・ノウハウは別リポジトリ

AI秘書「ベン」の定義、分身AI社長、部門構成、業務ノウハウ（財務・物件・対外文書等）は **`sutoumasa4/sands-knowledge`（Private）** に集約されている。

このセッション（sands-re）では、AIカンパニーの定義やノウハウは持たない。Webサイトの編集に必要な情報があれば、ユーザーから sands-knowledge の該当箇所を提示してもらうか、別途 sands-knowledge セッションで作業して結果をこちらに反映する。

## このセッションでやってよいこと

- 公開HTMLの編集（デザイン崩れ修正、リンク追加、文言修正等）
- 公開アセットの追加・差し替え
- 公開PDFの差し替え
- `members/` のUI修正

## このセッションでやってはいけないこと

- 機密情報（銀行とのやり取り、内部財務詳細、個人情報）をこのリポジトリに書き込むこと
- AIカンパニー定義（`.claude/agents/` 等）をこのリポジトリに作ること
- ノウハウ蓄積を `docs/knowledge/` 等にこちら側で行うこと

## ブランチ運用

- 開発ブランチ：`claude/<task-slug>-<id>`（セッション起動時に指定される）
- `main` への直接コミット禁止
- ユーザーが明示的に依頼するまで PR は作らない

## 既知の課題

- `members/sands-data.js` `members/data/*.js` がクライアントサイドのパスワードUIだけで保護されており、URL直叩きで誰でも取得可能。要対処。
