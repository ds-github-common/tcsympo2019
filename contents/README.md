# はじめに

本サイトはTCシンポジウム2019で株式会社ヒューマンサイエンスが発表した「Webマニュアル30分クッキング」で作成したWebマニュアルのサンプルです。
本サイトで利用されているシステム構成は下記の通りです。

![Image from Gyazo](https://i.gyazo.com/2bcf75a8aefd32481e616a1d37ec92a9.png)

本サイトを再現するために必要な環境と手順をここに記載します。ご興味があれば、ここで紹介するシステム構成を使ってご自身独自のサイトを作成して公開してみてください。

## 環境準備
下記の環境を前提としてWebマニュアル作成の手順を説明します。

| 項目 | ツール名称 | バージョン |
| :---: | :---: | :---: |
| OS | Windows / Mac | 10 / 10.14 |
| テキストエディタ | Visual Studio Code | 1.34.0 |
| プログラム | node.js | 10.15.3 |
| パッケージ管理ツール | NPM / Yarn | 6.9.0 / 1.15.2 |
| ホスティングサービス | Firebase Tools | 6.9.2 |

### Visual Studio Codeのインストール
以下のサイトからインストーラーをダウンロードしてインストールしてください。

[Visual Studio Code 公式サイト](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

![Image from Gyazo](https://i.gyazo.com/6137f0858687850608986ece4dd95ffc.png)

### node.js/npmのインストール
1. 以下のサイトからインストーラーをダウンロードしてインストールする。

[node.js 公式サイト](https://nodejs.org/ja/)

![Image from Gyazo](https://i.gyazo.com/363a88bb6f155db780ef026c6a34ff71.png)

2. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
3. node.jsおよびnpmがインストールされたことを確認する。
```bash
# node.jsのバージョンを確認する。
$ node -v
v10.15.3

# npmのバージョンを確認する。
$ npm -v
6.9.0
```

::: tip <i class="fas fa-comments"></i> ヒント
実際に表示されるバージョン番号は上記と異なる場合があります。バージョン番号が表示されずエラーが発生する場合は、node.jsおよびnpmのインストールが失敗しています。もう一度インストールをしてください。
:::

### yarnのインストール

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. yarnをインストールする。
```bash
# npm経由でyarnをインストールする。
$ npm install -g yarn
```
3. yarnが正しくインストールされたことを確認する。
```bash
# yarnのバージョンを確認する。
$ yarn -v
1.15.2
```

::: warning <i class="fas fa-exclamation-circle"></i> 注意
* 実際に表示されるバージョン番号は上記と異なる場合があります。
* バージョン番号が表示されずエラーが発生する場合は、node.jsおよびnpmのインストールが失敗しています。もう一度インストールをしてください。
:::

### GitのインストールとGitHubのアカウント設定
下記のサイトを参考にしてください。

[今日からはじめるGitHub 〜 初心者がGitをインストールして、プルリクできるようになるまでを解説](https://employment.en-japan.com/engineerhub/entry/2017/01/31/110000)

::: tip <i class="fas fa-comments"></i> ヒント
「環境の構築（1） ローカル環境でGitを使えるようにする」〜「環境の構築（3） GitHubのアカウントを作成する」までを行なってください。
:::

### Firebase Toolsのインストール

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. Firebase Toolsをインストールする。
```bash
# firebase-toolsをインストールする。
$ npm install -g firebase-tools
```
3. Firebase Toolsが正しくインストールされたことを確認する。
```bash
# firebase-toolsのバージョンを確認する。
$ firebase --version
6.9.2
```

::: warning <i class="fas fa-exclamation-circle"></i> 注意
* `--version`のハイフンは2つです。
* 実際に表示されるバージョン番号は上記と異なる場合があります。
* バージョン番号が表示されずエラーが発生する場合は、Firebase Toolsのインストールが失敗しています。もう一度インストールをしてください。
:::

以上で環境構築は終了です。
