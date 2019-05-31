(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{174:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("p",[s._v("ここまでで作成したサイトをFirebaseにデプロイしWeb公開します。")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),e("ol",{attrs:{start:"8"}},[e("li",[e("p",[e("a",{attrs:{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Firebase console"),e("OutboundLink")],1),s._v("（https://console.firebase.google.com）に移動して、Googleアカウントでログインする。\n"),e("img",{attrs:{src:"https://i.gyazo.com/e56e14d15b660f2b61c4156b79307354.png",alt:"Image from Gyazo"}})])]),s._v(" "),e("li")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"サイトをデプロイする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#サイトをデプロイする","aria-hidden":"true"}},[this._v("#")]),this._v(" サイトをデプロイする")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"firebaseへログインする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebaseへログインする","aria-hidden":"true"}},[this._v("#")]),this._v(" Firebaseへログインする")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),this._v(" "),t("li",[t("code",[this._v("firebase login")]),this._v(" を実行する。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ firebase login\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Firebaseから情報収拾の可否を聞かれたら"),t("code",[this._v("Y")]),this._v("か"),t("code",[this._v("n")]),this._v("を入力する。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("? Allow Firebase to collect anonymous CLI usage and error reporting information? Yes\n\nVisit this URL on any device to log in:\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("googleアカウント認証ページで任意のgooleアカウントを選択し、アクセスを"),t("strong",[this._v("許可")]),this._v("する。\n"),t("img",{attrs:{src:"https://i.gyazo.com/2d3ae1a941da118c1aaba1b85f25c843.png",alt:"Image from Gyazo"}})])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[e("i",{staticClass:"fas fa-comments"}),s._v(" ヒント")]),s._v(" "),e("p",[s._v("ログインに成功すると下記の画面が表示されます。")]),s._v(" "),e("ul",[e("li",[s._v("Webブラウザ："),e("br"),s._v(" "),e("img",{attrs:{src:"https://i.gyazo.com/2a18eafcef7e3092e9615f23fc18690c.png",alt:"Image from Gyazo"}})]),s._v(" "),e("li",[s._v("コマンドライン：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("✔  Success"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Logged "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" as "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-email-address"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"firebaseプロジェクトを開始する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebaseプロジェクトを開始する","aria-hidden":"true"}},[this._v("#")]),this._v(" Firebaseプロジェクトを開始する")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),this._v(" "),t("li",[this._v("本プロジェクトのルートフォルダに移動する。")]),this._v(" "),t("li",[this._v("firebaseプロジェクトを初期化する。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# firebaseプロジェクトを初期化します。")]),s._v("\n$ firebase init\n\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######## #### ########  ######## ########     ###     ######  ########")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######    ##  ########  ######   ########  #########  ######  ######")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##        ##  ##    ##  ##       ##     ## ##     ##       ## ##")]),s._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##       #### ##     ## ######## ########  ##     ##  ######  ########")]),s._v("\n\nYou're about to initialize a Firebase project "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" this directory:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("サービスメニューから"),t("code",[this._v("Hosting")]),this._v(" を選択します。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("? Which Firebase CLI features "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you want to "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" up "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this folder? Press Space to\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" Enter to confirm your choices.\n ◯ Database: Deploy Firebase Realtime Database Rules\n ◯ Firestore: Deploy rules and create indexes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Firestore\n ◯ Functions: Configure and deploy Cloud Functions\n❯◉ Hosting: Configure and deploy Firebase Hosting sites\n ◯ Storage: Deploy Cloud Storage security rules\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[e("i",{staticClass:"fas fa-comments"}),s._v(" ヒント")]),s._v(" "),e("ul",[e("li",[s._v("選択は▲/▼キーでメニューを選んでからスペースキーをクリックします。")]),s._v(" "),e("li",[s._v("決定はEnterキーをクリックします。")]),s._v(" "),e("li",[s._v("mBaaSとしてFirebaseはWebサイトのホスティング以外にも、サーバーレスと呼ばれる構成を実現する多くの機能を提供しています。本手順では最小限の利用として"),e("code",[s._v("Hosting")]),s._v("のみを選択しています。")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"5"}},[t("li",[t("code",[this._v("[create a new project]")]),this._v("を選択する。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("? Select a default Firebase project "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this directory:\n❯ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("create a new project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("don't setup a default project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("公開用のフォルダを"),t("code",[this._v(".vuepress/dist")]),this._v("と入力する。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("? What "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you want to use as your public directory? "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" .vuepress/dist\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"7"}},[t("li",[this._v("URLの上書き可否を聞かれたら"),t("code",[this._v("N")]),this._v("を入力する。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("? Configure as a single-page app "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rewrite all urls to /index.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? No\n✔  Wrote .vuepress/dist/404.html\n✔  Wrote .vuepress/dist/index.html\n\ni  Writing configuration info to firebase.json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ni  Writing project information to .firebaserc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ni  Writing gitignore "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" to .gitignore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n✔  Firebase initialization complete"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nProject creation is only available from the Firebase Console\nPlease visit https://console.firebase.google.com to create a new project, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" run firebase use --add\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])}],!1,null,null,null);t.default=n.exports}}]);