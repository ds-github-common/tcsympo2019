# サイトをデプロイする
ここまでで作成したサイトをFirebaseにデプロイしWeb公開します。

## デプロイするデータをビルドする
デプロイ用にサイトを実ファイルにビルドします。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. `yarn build`を実行し、プロジェクトファイルをビルドします。
```bash
$ yarn build

yarn run v1.15.2
$ vuepress build

 WAIT  Extracting site metadata...
[4:42:27 PM] Compiling Client
[4:42:27 PM] Compiling Server
[4:42:34 PM] Compiled Server in 6s
[4:42:40 PM] Compiled Client in 13s
 WAIT  Rendering static HTML...

 DONE  Success! Generated static files in .vuepress/dist.

✨  Done in 16.10s.
```

.vupress/distフォルダが作成され、ビルド済みのデータが格納されます。

## Firebaseへログインする
デプロイ先のFirebaseにログインします。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
2. `firebase login` を実行して、firebaseにログインする。
```bash
$ firebase login
```
3. Firebaseから情報収拾の可否を聞かれたら`Y`か`n`を入力する。
```bash
? Allow Firebase to collect anonymous CLI usage and error reporting information? Yes

Visit this URL on any device to log in:
```

4. googleアカウント認証ページで任意のgooleアカウントを選択し、アクセスを**許可**する。
![Image from Gyazo](https://i.gyazo.com/f9cb8fd39491eb524dd7435bda1064af.png)

::: tip <i class="fas fa-comments"></i> ヒント
ログインに成功すると下記の画面が表示されます。
* Webブラウザ：  
![Image from Gyazo](https://i.gyazo.com/2a18eafcef7e3092e9615f23fc18690c.png)
* コマンドライン：  
```bash
✔  Success! Logged in as <your-email-address>
```
:::

## Firebaseプロジェクトを開始する
Firebaseのプロジェクトを開始します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. firebaseプロジェクトを初期化する。
```bash
# firebaseプロジェクトを初期化します。
$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:
```

4. サービスメニューから`Hosting` を選択します。
```bash
? Which Firebase CLI features do you want to set up for this folder? Press Space to
 select features, then Enter to confirm your choices.
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
❯◉ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
```
::: tip <i class="fas fa-comments"></i> ヒント
* 選択は▲/▼キーでメニューを選んでからスペースキーをクリックします。
* 決定はEnterキーをクリックします。
* mBaaSとしてFirebaseはWebサイトのホスティング以外にも、サーバーレスと呼ばれる構成を実現する多くの機能を提供しています。本手順では最小限の利用として`Hosting`のみを選択しています。
:::

5. `[create a new project]`を選択する。
```bash
? Select a default Firebase project for this directory:
❯ [create a new project]
  [don't setup a default project]
```

6. 公開用のフォルダを`.vuepress/dist`と入力する。
```bash
? What do you want to use as your public directory? (public) .vuepress/dist
```

7. 上書き可否を聞かれたら全て`N`を入力する。
```bash
? Configure as a single-page app (rewrite all urls to /index.html)? No
? File .vuepress/dist/404.html already exists. Overwrite? No
i  Skipping write of .vuepress/dist/404.html
? File .vuepress/dist/index.html already exists. Overwrite? No
i  Skipping write of .vuepress/dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add
```

8. [Firebase console](https://console.firebase.google.com)（https://console.firebase.google.com）をブラウザで表示して、Googleアカウントでログインする。
![Image from Gyazo](https://i.gyazo.com/e56e14d15b660f2b61c4156b79307354.png)

9. **プロジェクトを追加**をクリックする。
![Image from Gyazo](https://i.gyazo.com/5419ac078a6d9604722144e669ae9fbc.png)

10. 任意の**プロジェクト名**を入力し、**測定管理者間のデータ保護条項**にチェックを入れて、**プロジェクトを作成する**をクリックする。
![Image from Gyazo](https://i.gyazo.com/5e3212e9906943a51f46d4cb9182e3e6.png)

::: tip <i class="fas fa-comments"></i> ヒント
上記の画面で表示される**プロジェクトID**は、下記の手順で必要になります。
:::

11. プロジェクト準備完了の画面が表示されたら、**次へ**をクリックします。
![Image from Gyazo](https://i.gyazo.com/5c0df64cf28f00fa426fed095133cc6a.png)

## Firebaseにデプロイする
ビルドしたファイルをFirebaseにデプロイします。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
2. `firebase use --add`を実行し、使用するFirebaseプロジェクトを選択する。
```bash
$ firebase use --add

? Which project do you want to add?
❯ jamstack-xxxx
```

::: tip <i class="fas fa-comments"></i> ヒント
[Firebaseプロジェクトを開始する](#Firebaseプロジェクトを開始する)の手順10の**プロジェクトID**を選択してください。
:::

3. **alias**を聞かれたら、任意のエイリアスを設定する。
```bash
? What alias do you want to use for this project? (e.g. staging) hosting

Created alias hosting for jamstack-xxxx.
Now using alias hosting (jamstack-xxxx)
```

4. `firebase deploy`を実行し、Firebaseにデータをデプロイする。
```bash
$ firebase deploy

=== Deploying to 'jamstack-xxxx'...

i  deploying hosting
i  hosting[jamstack-xxxx]: beginning deploy...
i  hosting[jamstack-xxxx]: found 2 files in .vuepress/dist
✔  hosting[jamstack-xxxx]: file upload complete
i  hosting[jamstack-xxxx]: finalizing version...
✔  hosting[jamstack-xxxx]: version finalized
i  hosting[jamstack-xxxx]: releasing new version...
✔  hosting[jamstack-xxxx]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/jamstack-xxxx/overview
Hosting URL: https://jamstack-xxxx.firebaseapp.com
```

5. **Hosting URL:** の右側に表示されたURLをブラウザで表示する。
![Image from Gyazo](https://i.gyazo.com/5ff70da294133363ade70264b1505e35.png)

無事にWeb公開されたことが確認できます。
