+++

+++
# VuePressプロジェクトの開始

## VuePressプロジェクトを作る

静的サイトジェネレーター`VuePress`を使ったプロジェクトを開始します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
2. 作業用フォルダを作る。

```bash
# jamstackフォルダを作る。
$ mkdir jamstack

# jamstackフォルダに移動する。
$ cd jamstack
```

::: tip <i class="fas fa-comments"></i> ヒント
フォルダ名は任意です。
:::

1. yarnでpackage.jsonを作成する。

```bash
# package.json
$ yarn init
yarn init v1.15.2
question name (jamstack):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private:
success Saved package.json
✨  Done in 8.24s.
```

::: tip <i class="fas fa-comments"></i> ヒント
対話形式で **package.json** の内容を確定します。ここでは全て空欄のままでも問題ありません。
:::

1. VuePressをインストールする。

```bash
# vuepressパッケージをdevDependenciesにインストールする。
$ yarn add -D vuepress@next

# フォルダ構成
# .
# ├── node_modules
# ├── package.json
# └── yarn.lock
```

以上でVuePressのプロジェクトが開始されます。

## ローカルサーバーを立ち上げる

上記の手順で作成したプロジェクトをローカルサーバーで立ち上げます。

1. 仮のMarkdownファイルを作成する。

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

1. **package.json** を編集する。

```json
// コマンド省略のために下記を追加する。
// 「vuepress dev」は、「yarn vuepress dev」と同意になる。
{
  "name": "jamstack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^0.14.11"
  },
  "scripts": {
    "dev": "vuepress dev",
    "build": "vuepress build",
    "eject": "vuepress eject"
  }
}
```

::: tip <i class="fas fa-comments"></i> ヒント
テキストファイルの編集はVisual Studio Codeなどのテキストエディタを使用します。
![Image from Gyazo](https://i.gyazo.com/1d9bef857344602d72e445cc3cfec41d.png)
:::

1. ローカルサーバーを立ち上げる。

```bash
# ローカルサーバーを立ち上げる。
$ yarn dev

DONE  [09:54:30] Build 6dd12b finished in 5298 ms!
> VuePress dev server listening at http://localhost:8080/
```

1. Webブラウザで `http://localhost:8080` を開く。
   ![Image from Gyazo](https://i.gyazo.com/43f740a3c079e2eddad1e59141da4de5.png)

README.mdのMarkdown記法 `# Hello VuePress` がHTMLに変換されていることがわかります。  
このページのコンテンツを充実させることでサイトの品質を上げていきます。

::: tip <i class="fas fa-comments"></i> ヒント
ローカルサーバーを停止する場合は、コマンドライン上で `Ctrl+c` （Macの場合：`⌘+c` ）を入力します。
:::

* test
* test
* test