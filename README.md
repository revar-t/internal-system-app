# internal-system-app

## ドキュメント

- [Git 運用方針](docs/git.md)

## 開発環境

### バックエンド

- PHP 8.4
- Laravel 12
- Laravel Sail (Docker)

### フロントエンド

- Blade
- 将来的に React + TypeScript

### データベース

- MySQL (Sail コンテナ内)

### 認証

- Laravel Breeze

### バージョン管理

- GitHub

## セットアップ手順（Sail 前提）

### 1. リポジトリのクローン

```bash
git clone https://github.com/revar-t/internal-system-app.git
cd internal-system-app
```

### 2. Sail 用 Docker コンテナの起動

```bash
./vendor/bin/sail up -d
```

### 3. PHP パッケージのインストール

```bash
./vendor/bin/sail composer install
```

### 4. Node.js パッケージのインストール

```bash
./vendor/bin/sail npm install
```

### 5. 環境設定ファイルの作成

```bash
cp .env.example .env
```

- `.env` を開いてデータベース設定などを確認・変更
  - DB 接続設定部分のコメントアウトを解除
  - ユーザー名・パスワードなどを適切に設定

### 6. アプリキーの生成

```bash
./vendor/bin/sail artisan key:generate
```

### 7. データベースマイグレーション

```bash
./vendor/bin/sail artisan migrate
```

### 8. フロントエンドビルド

```bash
./vendor/bin/sail npm run dev
```

### 9. アプリにアクセス

- ブラウザで [http://localhost](http://localhost) にアクセス

---

## 補足

- Laravel Breeze が導入済みなので、ログイン・登録機能はすぐ利用可能
- 将来的に React + TypeScript を導入する場合は `resources/js` を React 化予定
- GitHub 上では `develop` ブランチで作業 → 安定後に `main` へマージ
- Sail を使うことで Docker 上で PHP・MySQL 環境が統一されるため、チーム開発でも環境差を防げる
- **エラーが出た場合は、エラーコードやログをコピーして ChatGPT に相談すると解決のヒントがもらえます**
