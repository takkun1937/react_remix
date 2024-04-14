# react_remix

## 1. 構成

```shell-session
.
|-- app // ソースコード
|-- public // リソースファイル
|-- .gitignore // gitignore
|-- package.json // 依存関係構成・コマンド設定ファイル
|-- tsconfig.json // TypeScriptの設定ファイル
|-- vite.config.ts // Viteの設定ファイル
|-- .devcontainer.json // 開発環境構成ファイル
|-- Dockerfile // 開発環境コンテナ構成ファイル
|-- README.md
`-- docker-compose.yml // 開発環境コンテナ起動コマンド定義ファイル
```

## 2. 開発環境構築

### 2.1. 開発準備

1. 以下をインストール

   - [Visual Studio Code](https://code.visualstudio.com/download)
     - Visual Studio Code で「[Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)」の拡張機能をインストール
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. 本プロジェクトのルートディレクトリに移動し、以下のコマンドを実行する。

   ```shell-session
   $ docker compose up -d
   ```

3. VSCode のフッターメニュー(ステータスバー)の「リモートウィンドウを開きます」をクリックする。

4. メニューから「コンテナで再度開く」を選択する。

## 3. 実行方法

### 3.1. 実行方法

1. VSCode でリモート接続している状態で、以下のコマンドを実行する。

   ```shell-session
   $ npm run build
   $ npm start
   ```

## 4. リンク

- [React Remix プロジェクト作成参考リンク](https://remix.run/docs/en/main/tutorials/jokes)
- [ローカライズ処理](https://react.i18next.com/guides/quick-start)
- [Helmet（head タグ）](https://www.npmjs.com/package/react-helmet-async)
