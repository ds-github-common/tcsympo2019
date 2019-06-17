(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{222:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"はじめに"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#はじめに","aria-hidden":"true"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),s("p",[t._v("本サイトはTCシンポジウム2019で株式会社ヒューマンサイエンスが発表した「Webマニュアル30分クッキング」で作成したWebマニュアルのサンプルです。\n本サイトで利用されているシステム構成は下記の通りです。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/2bcf75a8aefd32481e616a1d37ec92a9.png",alt:"Image from Gyazo"}})]),t._v(" "),s("p",[t._v("本サイトを再現するために必要な環境と手順をここに記載します。ご興味があれば、ここで紹介するシステム構成を使ってご自身独自のサイトを作成して公開してみてください。")]),t._v(" "),s("h2",{attrs:{id:"環境準備"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#環境準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 環境準備")]),t._v(" "),s("p",[t._v("下記の環境を前提としてWebマニュアル作成の手順を説明します。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("項目")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("ツール名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("バージョン")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("OS")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Windows / Mac")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("10 / 10.14")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("テキストエディタ")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Visual Studio Code")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1.34.0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("プログラム")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("node.js")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("10.15.3")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("パッケージ管理ツール")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NPM / Yarn")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("6.9.0 / 1.15.2")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("ホスティングサービス")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Firebase Tools")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("6.9.2")])])])]),t._v(" "),s("h3",{attrs:{id:"visual-studio-codeのインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-codeのインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" Visual Studio Codeのインストール")]),t._v(" "),s("p",[t._v("以下のサイトからインストーラーをダウンロードしてインストールしてください。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://azure.microsoft.com/ja-jp/products/visual-studio-code/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code 公式サイト"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/6137f0858687850608986ece4dd95ffc.png",alt:"Image from Gyazo"}})]),t._v(" "),s("h3",{attrs:{id:"node-js-npmのインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-npmのインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" node.js/npmのインストール")]),t._v(" "),s("ol",[s("li",[t._v("以下のサイトからインストーラーをダウンロードしてインストールする。")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://nodejs.org/ja/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js 公式サイト"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/363a88bb6f155db780ef026c6a34ff71.png",alt:"Image from Gyazo"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),t._v(" "),s("li",[t._v("node.jsおよびnpmがインストールされたことを確認する。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node.jsのバージョンを確認する。")]),t._v("\n$ node -v\nv10.15.3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npmのバージョンを確認する。")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n6.9.0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[s("i",{staticClass:"fas fa-comments"}),t._v(" ヒント")]),t._v(" "),s("p",[t._v("実際に表示されるバージョン番号は上記と異なる場合があります。バージョン番号が表示されずエラーが発生する場合は、node.jsおよびnpmのインストールが失敗しています。もう一度インストールをしてください。")])]),t._v(" "),s("h3",{attrs:{id:"yarnのインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarnのインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" yarnのインストール")]),t._v(" "),s("ol",[s("li",[t._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),t._v(" "),s("li",[t._v("yarnをインストールする。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm経由でyarnをインストールする。")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("yarnが正しくインストールされたことを確認する。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarnのバージョンを確認する。")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" -v\n1.15.2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[s("i",{staticClass:"fas fa-exclamation-circle"}),t._v(" 注意")]),t._v(" "),s("ul",[s("li",[t._v("実際に表示されるバージョン番号は上記と異なる場合があります。")]),t._v(" "),s("li",[t._v("バージョン番号が表示されずエラーが発生する場合は、node.jsおよびnpmのインストールが失敗しています。もう一度インストールをしてください。")])])]),t._v(" "),s("h3",{attrs:{id:"gitのインストールとgithubのアカウント設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitのインストールとgithubのアカウント設定","aria-hidden":"true"}},[t._v("#")]),t._v(" GitのインストールとGitHubのアカウント設定")]),t._v(" "),s("p",[t._v("下記のサイトを参考にしてください。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://employment.en-japan.com/engineerhub/entry/2017/01/31/110000",target:"_blank",rel:"noopener noreferrer"}},[t._v("今日からはじめるGitHub 〜 初心者がGitをインストールして、プルリクできるようになるまでを解説"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[s("i",{staticClass:"fas fa-comments"}),t._v(" ヒント")]),t._v(" "),s("p",[t._v("「環境の構築（1） ローカル環境でGitを使えるようにする」〜「環境の構築（3） GitHubのアカウントを作成する」までを行なってください。")])]),t._v(" "),s("h3",{attrs:{id:"firebase-toolsのインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firebase-toolsのインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" Firebase Toolsのインストール")]),t._v(" "),s("ol",[s("li",[t._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),t._v(" "),s("li",[t._v("Firebase Toolsをインストールする。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# firebase-toolsをインストールする。")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g firebase-tools\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Firebase Toolsが正しくインストールされたことを確認する。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# firebase-toolsのバージョンを確認する。")]),t._v("\n$ firebase --version\n6.9.2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[s("i",{staticClass:"fas fa-exclamation-circle"}),t._v(" 注意")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--version")]),t._v("のハイフンは2つです。")]),t._v(" "),s("li",[t._v("実際に表示されるバージョン番号は上記と異なる場合があります。")]),t._v(" "),s("li",[t._v("バージョン番号が表示されずエラーが発生する場合は、Firebase Toolsのインストールが失敗しています。もう一度インストールをしてください。")])])]),t._v(" "),s("p",[t._v("以上で環境構築は終了です。")])])},[],!1,null,null,null);a.default=n.exports}}]);