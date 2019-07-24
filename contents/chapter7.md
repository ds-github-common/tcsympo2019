# VuePressを拡張する

## 検索ボックスの位置を変更する
VuePressのオリジナルのレイアウト・機能でも十分な品質を提供されていますが、オリジナルサイトを構築する場合はある程度レイアウトや機能を拡張する必要があります。ここでは拡張の例として検索ボックスの位置をデフォルトから変更します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. 下記のコマンドを実行する。
```bash
$ vuepress eject

DONE  Copied default theme into /Users/yonekurayuuki/jamstack/.vuepress/theme.
```

4. `.vuepress/theme`フォルダの`Navbar.vue`ファイルをVisual Studio Codeで開く。
5. `<NavLinks class="can-hide"/>`と書かれた行を`<AlgoliaSearchBox`の上の行に移動する。

6. `.search-box`と書かれた行の下行に`margin-left 0.8rem`を追加する。
```js
  .search-box
    margin-left 0.8rem //この行を追加する。
    flex: 0 0 auto
```

7. GitHubにデータをプッシュする。
8. 公開サイト上の検索ボックスの位置が右端に変更されていることを確認する。
![Image from Gyazo](https://i.gyazo.com/4ac99e4e177b8e08eb89da15d58fdd08.png)

::: tip <i class="fas fa-comments"></i> ヒント
VuePressはVue.jsと呼ばれるJavaScriptフレームワークを利用して作成されています。VuePressのレイアウトや機能を拡張する場合は、Vue.jsの知識が必要になります。
Vue.jsについて詳しく知りたい場合は下記をご参照ください。  
https://jp.vuejs.org/v2/guide/index.html
:::

## デザインを変更する
スタイルシートを拡張して自由にデザインを変更できます。

1. `.vuepress`フォルダ内に`style.styl`ファイルを作成する。
1. `style.styl`ファイルをVisual Studio Codeで開く。
1. 下記のコードを記載して保存する。
```stylus
.navbar
  background-color blue
  color blue
```
::: tip <i class="fas fa-comments"></i> ヒント
style.stylは、Stylus記法と呼ばれる拡張CSSを使用します。
Stylus記法の知識がない場合、通常のCSSでも表現できます。
:::

4. GitHubにデータをプッシュする。

5. ヘッダー部分の色が変更されていることを確認する。
![Image from Gyazo](https://i.gyazo.com/559f16d7acd63060fd239d658c6c64b1.png)

## その他の拡張の可能性
ここでは詳細を避けますが、VuePressを使ったドキュメントサイトはさらに多様な拡張が可能です。
下記に主だった拡張の選択肢を羅列します。

### 全文検索エンジンの設定
VuePressの標準設定では、検索ボックスはタイトル部分しか検索できません。Webマニュアルとして公開するためには、最低限全文検索の仕組みを実装する必要があります。
幸いなことにVuePressは標準でAlgolia Searchと呼ばれるSaaSを利用するように設計されています。
ここでは詳細を避けますが、Algoliaを利用すれば、高速な全文検索機能を実現できます。

### PWAの設定
PWAはGoogleが提唱したWebサイトをモバイルアプリのように動作させるための仕組みです。最近はAndroidだけでなくiOSにも対応されているため、ほぼ全てのスマートフォンで活用できます。
PWAを利用することで、Webサイト全体をクライアント端末側にインストールできます。VuePressを使って生成したHTMLはSPA機能によって十分に高速化できていますが、PWAは端末上にインストールしたファイル群を表示するために更なる高速化を期待できます。
また、Firebase上のコンテンツを更新した場合、PWAサイトを見ているユーザーにサイトの更新を促すようなメッセージを表示されることもできます。
VuePressはPWA化の仕組みも標準で持っているため、簡易にPWA化を実現できます。

### Markdown記法の拡張
標準のMarkdownを拡張し、絵文字や、FontAwesomeなどのアイコン、数式、UML、グラフなどを表現できます。VuePressのMarkdown記法拡張用の各種プラグインがすでに多くの開発者の手による提供されているため、プラグインを導入すれば簡易にMarkdownの表現を拡張できます。

### CSSフレームワークの導入
[デザインを変更する](#デザインを変更する)で説明したように、VuePressではStylus記法でデザインを拡張できますが、簡易に高品質なデザインを実現するためにCSSフレームワークを利用することもできます。  
tailwindcssと呼ばれるCSSフレームワークなどを使うことで、下記のように複雑なコンポーネントを簡易に実装できます。

<div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>

### アクセス解析ツールの導入
Googleアナリティクスなどのアクセス解析ツールも専用のプラグインをインストールすることで簡単に導入できます。

## JAMStackシステムの導入支援、拡張サポート
株式会社ヒューマンサイエンスでは、JAMStackを利用した高速で、かつ低価格のWebマニュアル制作基盤構築のお手伝いをしております。
ご要件に応じてご提供するシステム基盤を拡張することもできます。  
ご興味ございましたら弊社[お問い合わせフォーム](https://www.science.co.jp/contact/index.html)で`お問い合わせ内容`を`その他`に選択し、「**JAMStack**」や「**Markdown**」、「**GitHub**」等と記載したうえで、ぜひお問い合わせください。
