# サイトをデプロイする
ここまでで作成したサイトをFirebaseにデプロイしWeb公開します。

## Firebaseへログインする
1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
2. `firebase login` を実行する。
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

7. URLの上書き可否を聞かれたら`N`を入力する。
```bash
? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote .vuepress/dist/404.html
✔  Wrote .vuepress/dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

✔  Firebase initialization complete!

Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add
```

8. [Firebase console](https://console.firebase.google.com)（https://console.firebase.google.com）をブラウザで表示して、Googleアカウントでログインする。
![Image from Gyazo](https://i.gyazo.com/e56e14d15b660f2b61c4156b79307354.png)

9. **プロジェクトを追加**をクリックする。
