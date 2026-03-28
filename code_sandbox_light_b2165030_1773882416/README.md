# WIN PARTNER 採用サイト

## プロジェクト概要

株式会社ウィンパートナー（WIN PARTNER）の採用サイトです。  
白ベース・黒文字のクリーンなデザインで、複数ページ構成の採用情報を提供します。  
共通ヘッダー・フッターは `js/common.js` で全ページに自動挿入されます。

---

## ページ構成 & エントリーポイント

| ページ | ファイル | 説明 |
|--------|----------|------|
| トップ | `index.html` | MV + 6つのカードメニュー + チーム写真エリア |
| 募集要項一覧 | `jobs.html` | 部門別・職種ボタンリスト |
| 募集要項詳細 | `job-detail.html?dept=XXX&pos=YYY` | URLパラメータで職種データを動的表示 |
| 福利厚生 | `benefits.html` | Internal System + All Benefit + Holiday グリッド |
| 教育・研修制度 | `education.html` | 研修プログラム一覧ページ |
| 働く環境 | `environment.html` | In Number統計 + Work Style + Office Gallery |

### job-detail.html のURLパラメータ対応表

| dept | pos | 職種名 |
|------|-----|--------|
| strategy | consultant | コンサルタント |
| strategy | expert | エキスパート |
| strategy | analyst | アナリスト |
| design | creative-director | クリエイティブディレクター |
| design | art-director | アートディレクター |
| design | web-designer | WEBデザイナー |
| content | copywriter | コピーライター |
| content | photographer | フォトグラファー |
| content | videographer | ビデオグラファー |
| tech | frontend | フロントエンドエンジニア |
| tech | backend | バックエンドエンジニア |
| tech | marketer | マーケター |
| admin | hr | 人事 |
| admin | finance | 経理・財務 |
| admin | general | 総務・法務 |

---

## ファイル構成

```
index.html          ← トップページ（カードメニュー）
jobs.html           ← 募集要項一覧（部門別）
job-detail.html     ← 募集要項詳細（URLパラメータで動的表示）
benefits.html       ← 福利厚生・社内制度
education.html      ← 教育・研修制度
css/
  common.css        ← 全ページ共通スタイル（変数・ヘッダー・フッター等）
js/
  common.js         ← 共通パーツ自動挿入（ヘッダー/Download/Contact/SNS/フッター）
README.md
```

---

## 共通パーツ（common.js が自動挿入）

すべてのページに以下の要素が自動で挿入されます：

- **ヘッダー**（固定）: `WIN PARTNER` ロゴ + `Download` / `Contact` ボタン
- **Download / Contact セクション**: ページ下部に2列で表示
- **SNS セクション**: YouTube / X / LINE の3列ボタン
- **フッター**（黒背景）: ロゴ・住所・5列ナビゲーション

各ページの HTML には `<div id="common-footer-anchor"></div>` を末尾に配置するだけで自動挿入されます。

---

## デザイン仕様

| 項目 | 仕様 |
|------|------|
| カラー | 白ベース `#ffffff` / 黒文字 `#111111` / グレー系アクセント |
| 英語フォント | Montserrat（Google Fonts） |
| 日本語フォント | Noto Sans JP（Google Fonts） |
| アニメーション | IntersectionObserver によるスクロールフェードイン |
| レスポンシブ | 960px / 768px / 480px ブレークポイント |

---

## 拡張方法

### 募集要項に職種を追加する
1. `jobs.html` の該当 `.dept-section` に `.job-btn` を追加
2. `job-detail.html` の `JOB_DATA` オブジェクトにキー `"dept_pos"` でデータを追加

### 新しい部門を追加する
1. `jobs.html` にコメント内テンプレートをコピーして追加
2. `job-detail.html` の `JOB_DATA` に対応データを追加

### 福利厚生カードを追加する
- `benefits.html` の `.benefit-cards-grid` 内に `.benefit-card` ブロックをコピーして追加

---

## 未実装・今後の実装候補

- [x] `environment.html` — 働く環境ページ ✅
- [x] `career.html` — キャリアアップページ ✅
- [x] `contact.html` — エントリーページ ✅
- [ ] `download.html` — 資料ダウンロードページ
- [ ] チーム写真・オフィス写真の実素材への差し替え
- [ ] SNSリンク（YouTube・X・LINE）の実URLへの変更
- [ ] 住所・電話番号の実情報への更新
- [ ] OGP（SNSシェア用メタタグ）の設定

---

©WIN PARTNER INC.
