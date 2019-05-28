# config.jsの更新
VuePressの設定ファイル **config.js** を更新します。

::: tip <i class="fas fa-comments"></i> ヒント
VuePressのホット・リロード機能により、「[ローカルサーバーを立ち上げる](chapter1.html#ローカルサーバーを立ち上げる)」の手順３でローカルサーバーを立ち上げた状態で、config.jsを修正すると自動で `localhost:8080` に反映されます。ローカルサーバーを停止している場合は、`yarn dev` を実行したうえで、下記の手順を実行してください。
:::

## config.jsの作成
1. プロジェクトのルートフォルダに **.vuepress** フォルダを作る。
1. **.vuepress** フォルダ内に **config.js** を作成する。
::: tip <i class="fas fa-comments"></i> ヒント
Visual Studio Code上でフォルダやファイルの作成ができます。

![Image from Gyazo](https://i.gyazo.com/b473cacfa51a56a8dd00a8bf052da14c.png)
:::

::: warning <i class="fas fa-exclamation-circle"></i> 注意
ドット「.」から始まるフォルダやファイルは、不可視ファイルと呼ばれ、OSの設定によってはエクスプローラーやファインダーからは見えないことがあります。ただしVisual Studio Codeの **EXPLORER** であれば標準設定のまま見ることができます。
:::

## config.jsの編集

### ヘッダーロゴを追加する
**config.js** に下記を追加する。

```javascript
module.exports = {
  themeConfig: {
    // logoのイメージファイルを参照させます。
    logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg'
  }
}
```

![Image from Gyazo](https://i.gyazo.com/321958ecd44757019e15e1f0f2a384fc.png)

::: tip <i class="fas fa-comments"></i> ヒント
上記の記入例では弊社ヒューマンサイエンスのロゴを参照しています。
インターネット上のリンクではなく、ローカルのイメージファイルを参照したい場合は、**.vuepress/public** フォルダを作成して、その中にイメージファイルを格納します。例えば **.vuepress/public/hoge.png** を参照したい場合は、**config.js** に `logo: 'hoge.png'` と記入します。
:::

### ナビゲーションメニューを追加する
**config.js** に下記を追加する。

```javascript
/*
module.exports = {
  themeConfig: {
    // logoのイメージファイルを参照させます。
    logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg'*/,

    // ナビゲーションにコンテンツに加える内容を追加させます。
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/contents/' }
    ]
    /*
  }
}*/
```

![Image from Gyazo](https://i.gyazo.com/d9e04fd6d557b13223efad083bf1cf7b.png)

::: tip <i class="fas fa-comments"></i> ヒント
* `logo: xxxx` の末尾にカンマ `,` を追加してください。
* 任意でナゲーションにメニューを追加できます。
:::

### サイドメニューを追加する
**config.js** に下記を追加する。

```javascript
/*
module.exports = {
  themeConfig: {
    // logoのイメージファイルを参照させます。
    logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg',

    // ナビゲーションにコンテンツに加える内容を追加させます。
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/contents/' }
    ]*/,

    // サイドバーを追加します。
    sidebar: [
      '/',
      '/contents/'
    ],
    // ヘディングタイトルを自動でサイドメニューに表示させます。
    displayAllHeaders: true,

    // h2までをサイドメニューに表示させます。
    sidebarDepth: 2
    /*
  }
}*/
```

::: tip <i class="fas fa-comments"></i> ヒント
* `nav: [xxxx]` の末尾にカンマ `,` を追加してください。
* 任意でサイドバーにメニューを追加してください。
* 現時点ではまだ画面上の表示は変わりません。
:::
