(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{255:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"自動ビルド・デプロイの仕組みを作る"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自動ビルド・デプロイの仕組みを作る","aria-hidden":"true"}},[s._v("#")]),s._v(" 自動ビルド・デプロイの仕組みを作る")]),s._v(" "),t("p",[s._v("Markdownを編集するたびに、HTMLのビルドとFirebaseへのデプロイを手動で行うのは手間がかかります。"),t("br"),s._v("\nここでは、CI（継続的インテグレーション）ツールを使って、Gitにプッシュしたタイミングで自動ビルドとデプロイを実現する方法を詳述します。")]),s._v(" "),t("h2",{attrs:{id:"firebaseのデプロイ用tokenを取得する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firebaseのデプロイ用tokenを取得する","aria-hidden":"true"}},[s._v("#")]),s._v(" Firebaseのデプロイ用TOKENを取得する")]),s._v(" "),t("p",[s._v("CIを使って自動でFirebaseにデプロイするためのデプロイ用TOKENを取得します。")]),s._v(" "),t("ol",[t("li",[s._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),s._v(" "),t("li",[s._v("本プロジェクトのルートフォルダに移動する。")]),s._v(" "),t("li",[s._v("下記のコマンドを実行する。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ firebase login:ci\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("ブラウザが立ち上がり、Googleアカウントのログイン画面が表示されます。")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("Googleアカウントでログインする。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/93986847e268821a9fc0571a92f4898d.png",alt:"Image from Gyazo"}})]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[t("i",{staticClass:"fas fa-comments"}),s._v(" ヒント")]),s._v(" "),t("p",[s._v("ログインに成功するとブラウザに下記が表示されます。\n"),t("img",{attrs:{src:"https://i.gyazo.com/79d0a3e5c0b5938047e93d95ae4c3c93.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("認証用TOKENを控える。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("✔  Success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Use this token to login on a CI server:\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下記のFirebase認証用TOKENを控えておく。")]),s._v("\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\nExample: firebase deploy --token "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FIREBASE_TOKEN")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[t("code",[s._v("firebase list")]),s._v("を実行して使用しているFirebaseプロジェクトIDを控える。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ firebase list\n+----------------------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        Name        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Project ID / Instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Permissions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jamstack "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      jamstack-xxxx    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    Owner    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[t("i",{staticClass:"fas fa-comments"}),s._v(" ヒント")]),s._v(" "),t("p",[s._v("上記の例では、"),t("code",[s._v("jamstack-xxxx")]),s._v("がプロジェクトIDに当たります。")])]),s._v(" "),t("h2",{attrs:{id:"circleciのセットアップ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circleciのセットアップ","aria-hidden":"true"}},[s._v("#")]),s._v(" CircleCIのセットアップ")]),s._v(" "),t("p",[s._v("CircleCIと本プロジェクトのGitHubリポジトリを連携します。")]),s._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CircleCI"),t("OutboundLink")],1),s._v("にアクセスする。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Sign Up")]),s._v("をクリックする。\n"),t("img",{attrs:{src:"https://i.gyazo.com/12c2c3340249782bb0eb970f811f463e.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Sign Up with GitHub")]),s._v("をクリックして、ご自身のアカウントでログインする。\n"),t("img",{attrs:{src:"https://i.gyazo.com/c6caab0b0a0a6f3a0ca409d29239d1a9.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("li",[t("p",[s._v("左ペインの"),t("code",[s._v("ADD PROJECTS")]),s._v("をクリックして、本プロジェクトのリポジトリの"),t("code",[s._v("Set Up Project")]),s._v("をクリックする。\n"),t("img",{attrs:{src:"https://i.gyazo.com/82a85100de35235f8c82470b1f276fdf.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Start building")]),s._v("をクリックする。\n"),t("img",{attrs:{src:"https://i.gyazo.com/821feaeea21e55c3c45c90d7a764c6b0.png",alt:"Image from Gyazo"}})])])]),s._v(" "),t("p",[t("code",[s._v("WORKFLOWS")]),s._v("タブが表示され、本プロジェクトのリポジトリが追加されます。")]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[s._v("本プロジェクトのリポジトリ名の右側にある"),t("img",{attrs:{src:"https://i.gyazo.com/a24872cdb3f7ce4f3da4b8b745600a22.png",alt:"Image from Gyazo"}}),s._v("をクリックする。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Environmental Vaiables")]),s._v("をクリックする。\n"),t("a",{attrs:{href:"https://gyazo.com/f18353040f5c9df1c12e29e10e08d0c4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/f18353040f5c9df1c12e29e10e08d0c4.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Add Variable")]),s._v("をクリックする。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Name")]),s._v("に"),t("code",[s._v("FIREBASE_TOKEN")]),s._v("と入力し、"),t("code",[s._v("Value")]),s._v("に"),t("a",{attrs:{href:"#firebase%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E7%94%A8token%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B"}},[s._v("Firebaseのデプロイ用TOKENを取得する")]),s._v("の手順5で控えたTOKENを入力する。\n"),t("img",{attrs:{src:"https://i.gyazo.com/8041f455ef4a8dbdcbb1ea8e164a6833.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Add Varibale")]),s._v("をクリックする。")])]),s._v(" "),t("li",[t("p",[s._v("再度"),t("code",[s._v("Add Variable")]),s._v("をクリックする。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Name")]),s._v("に"),t("code",[s._v("FIREBASE_PJ")]),s._v("と入力し、"),t("code",[s._v("Value")]),s._v("に"),t("a",{attrs:{href:"#firebase%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E7%94%A8token%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B"}},[s._v("Firebaseのデプロイ用TOKENを取得する")]),s._v("の手順6で控えたプロジェクトIDを入力する。\n"),t("img",{attrs:{src:"https://i.gyazo.com/aed3712cc26cc951a66fb338aacf8c7b.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Add Varibale")]),s._v("をクリックする。")])])]),s._v(" "),t("p",[s._v("以上でCircleCIと本プロジェクトのリポジトリが連携されました。")]),s._v(" "),t("h2",{attrs:{id:"circleciの設定ファイルを作成する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circleciの設定ファイルを作成する","aria-hidden":"true"}},[s._v("#")]),s._v(" CircleCIの設定ファイルを作成する")]),s._v(" "),t("p",[s._v("環境や、ビルド、デプロイなどの処理を、"),t("strong",[s._v("config.yml")]),s._v("ファイルに設定します。")]),s._v(" "),t("ol",[t("li",[s._v("コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。")]),s._v(" "),t("li",[s._v("本プロジェクトのルートフォルダに移動する。")]),s._v(" "),t("li",[t("strong",[s._v(".circleci")]),s._v("フォルダを作成し、その中に"),t("strong",[s._v("config.yml")]),s._v("を作成する。")]),s._v(" "),t("li",[t("strong",[s._v("config.yml")]),s._v("に下記の内容を記載する。")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working_directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ~/workspace\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("docker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.11")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/zoneinfo/Asia/Tokyo"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEPLOY_BRANCH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" checkout\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restore_cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" .Branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(' checksum "yarn.lock" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" .Branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn install\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn add firebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tools\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("save_cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_moduels\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("packages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" .Branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(' checksum "yarn.lock" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn build \n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_modules/.bin/firebase deploy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("only hosting "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('project "$FIREBASE_PJ" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('token "$FIREBASE_TOKEN"\n\n'),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflows")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_and_deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("CircleCIの設定ファイルをGitHubにプッシュします。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ステージングする。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# コミットする。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"circleci set"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# プッシュする。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[t("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CircleCI"),t("OutboundLink")],1),s._v("にアクセスして、"),t("code",[s._v("JOBS")]),s._v("タブの本プロジェクトの進捗を確認する。\n"),t("img",{attrs:{src:"https://i.gyazo.com/4ab979c4ed628efb91852ced572c14e1.png",alt:"Image from Gyazo"}})])]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[t("i",{staticClass:"fas fa-comments"}),s._v(" ヒント")]),s._v(" "),t("p",[s._v("masterリポジトリにプッシュされるたびに、自動でビルド・デプロイ処理が実行されます。\nジョブのステータスは"),t("code",[s._v("QUED")]),s._v("、"),t("code",[s._v("RUNNING")]),s._v("、"),t("code",[s._v("SUCCESS")]),s._v("、"),t("code",[s._v("FAILED")]),s._v("の４種類で表示されます。各ステータスの内容は下記のとおりです。"),t("br"),s._v(" "),t("code",[s._v("QUED")]),s._v("：GitHubへのプッシュをトリガーにして、CircliCIにジョブの実行を促しています。"),t("br"),s._v(" "),t("code",[s._v("RUNNING")]),s._v("：ビルド・デプロイを実行しています。"),t("br"),s._v(" "),t("code",[s._v("SUCCESS")]),s._v("：ビルド・デプロイに成功しました。"),t("br"),s._v(" "),t("code",[s._v("FAILED")]),s._v("：ビルド・デプロイに失敗しました。")])]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[s._v("ジョブステータスが"),t("code",[s._v("SUCCESS")]),s._v("になったら、デプロイに成功しています。")])]),s._v(" "),t("p",[s._v("Circle CIによる自動ビルド・デプロイの設定は以上です。以降は、コンテンツを編集した後、GitHubに変更箇所をプッシュするだけで自動で変更箇所が反映されたHTMLが公開されます。")])])},[],!1,null,null,null);a.default=e.exports}}]);