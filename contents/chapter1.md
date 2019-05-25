# VuePressプロジェクトの開始

静的サイトジェネレーター`VuePress`を使ったプロジェクトを開始します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開きます。
2. 作業用フォルダを作ります。
```bash
# sampleフォルダを作る。
$ mkdir sample

# sampleフォルダに移動する。
$ cd sample
```

3. yarnを初期化する。
```bash
# package.json
$ yarn init
```

::: tip <i class="fas fa-comments"></i> ヒント
対話形式で`package.json`の内容を確定します。ここでは全て空欄のままでも問題ありません。
:::

4. VuePressをインストールする。
```bash
# vuepressパッケージをdevDependenciesにインストールする。
$ yarn add -D vuepress

# フォルダ構成
# .
# ├── node_modules
# ├── package.json
# └── yarn.lock
```

5. 仮のMarkdownファイルを作成する。
```bash
# README.mdを作成する。
$ echo '# Hello VuePress' > README.md

# フォルダ構成
# .
# ├── README.md
# ├── node_modules
# ├── package.json
# └── yarn.lock
```
6. ローカルサーバーを立ち上げる。
```bash
# yarnコマンドでローカルサーバーを立ち上げる。
$ yarn vuepress dev
```

7. Webブラウザで`localhost:8080`を開く。
   