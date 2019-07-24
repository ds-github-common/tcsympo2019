# 自動ビルド・デプロイの仕組みを作る

Markdownを編集するたびに、HTMLのビルドとFirebaseへのデプロイを手動で行うのは手間がかかります。  
ここでは、CI（継続的インテグレーション）ツールを使って、Gitにプッシュしたタイミングで自動ビルドとデプロイを実現する方法を詳述します。

## Firebaseのデプロイ用TOKENを取得する
CIを使って自動でFirebaseにデプロイするためのデプロイ用TOKENを取得します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. 下記のコマンドを実行する。
```bash
$ firebase login:ci
```

  ブラウザが立ち上がり、Googleアカウントのログイン画面が表示されます。

4. Googleアカウントでログインします。

![Image from Gyazo](https://i.gyazo.com/93986847e268821a9fc0571a92f4898d.png)

::: tip <i class="fas fa-comments"></i> ヒント
ログインに成功するとブラウザに下記が表示されます。
![Image from Gyazo](https://i.gyazo.com/79d0a3e5c0b5938047e93d95ae4c3c93.png)
:::

5. 認証用TOKENを控える。

```bash
✔  Success! Use this token to login on a CI server:

# 下記のFirebase認証用TOKENを控えておく。
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Example: firebase deploy --token "$FIREBASE_TOKEN"
```

6. `firebase list`を実行して使用しているFirebaseプロジェクトIDを控える。
```bash
$ firebase list
+----------------------------------------------------------+
|        Name        | Project ID / Instance | Permissions |
+----------------------------------------------------------+
| jamstack (current) |      jamstack-xxxx    |    Owner    |
+----------------------------------------------------------+
```

::: tip <i class="fas fa-comments"></i> ヒント
上記の例では、`jamstack-xxxxx`がプロジェクトIDに当たります。
:::

## CircleCIのセットアップ
CircleCIと本プロジェクトのGitHubリポジトリを連携します。

1. [CircleCI](https://circleci.com/)にアクセスする。

2. `Sign Up`をクリックする。
![Image from Gyazo](https://i.gyazo.com/12c2c3340249782bb0eb970f811f463e.png)

3. `Sign Up with GitHub`をクリックして、ご自身のアカウントでログインする。
![Image from Gyazo](https://i.gyazo.com/c6caab0b0a0a6f3a0ca409d29239d1a9.png)

4. 左ペインの`ADD PROJECTS`をクリックして、本プロジェクトのリポジトリの`Set Up Project`をクリックする。
![Image from Gyazo](https://i.gyazo.com/82a85100de35235f8c82470b1f276fdf.png)

5. `Start building`をクリックする。
![Image from Gyazo](https://i.gyazo.com/821feaeea21e55c3c45c90d7a764c6b0.png)

`WORKFLOWS`タブが表示され、本プロジェクトのリポジトリが追加されます。

6. 本プロジェクトのリポジトリ名の右側にある![Image from Gyazo](https://i.gyazo.com/a24872cdb3f7ce4f3da4b8b745600a22.png)をクリックする。

7. `Add Variable`をクリックする。
8. `Name`に`FIREBASE_TOKEN`と入力し、`Value`に[Firebaseのデプロイ用TOKENを取得する](#firebaseのデプロイ用tokenを取得する)の手順5で控えたTOKENを入力する。
![Image from Gyazo](https://i.gyazo.com/8041f455ef4a8dbdcbb1ea8e164a6833.png)
9. `Add Varibale`をクリックする。
10. 再度`Add Variable`をクリックする。
11. `Name`に`FIREBASE_PJ`と入力し、`Value`に[Firebaseのデプロイ用TOKENを取得する](#firebaseのデプロイ用tokenを取得する)の手順6で控えたプロジェクトIDを入力する。
![Image from Gyazo](https://i.gyazo.com/aed3712cc26cc951a66fb338aacf8c7b.png)
9. `Add Varibale`をクリックする。

以上でCircleCIと本プロジェクトのリポジトリが連携されました。

## CircleCIの設定ファイルを作成する

環境や、ビルド、デプロイなどの処理を、**config.yml**ファイルに設定します。

1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. **.circleci**フォルダを作成し、その中に**config.yml**を作成する。
1. **config.yml**に下記の内容を記載する。

```yml
version: 2
jobs:
  build:
    working_directory: ~/workspace
    docker:
      - image: node:9.11
        environment:
          TZ: "/usr/share/zoneinfo/Asia/Tokyo"
          DEPLOY_BRANCH: master

    steps:
      - checkout

      - restore_cache:
          keys:
            - yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}
            - yarn-packages-{{ .Branch }}
            - yarn-packages-

      - run:
          command: yarn install

      - run:
          command: yarn add firebase-tools

      - save_cache:
          paths:
            - node_moduels
          key: yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}

      - run:
          command: yarn build 

      - run:
          command: node_modules/.bin/firebase deploy --only hosting --project "$FIREBASE_PJ" --token "$FIREBASE_TOKEN"

workflows:
  version: 2
  build_and_deploy:
    jobs:
      - build
```

5. CircleCIの設定ファイルをGitHubにプッシュします。
```bash
# ステージングする。
$ git add .

# コミットする。
$ git commit -m "circleci set"

# プッシュする。
$ git push origin master
```

6. [CircleCI](https://circleci.com/)にアクセスして、`JOBS`タブの本プロジェクトの進捗を確認する。
![Image from Gyazo](https://i.gyazo.com/4ab979c4ed628efb91852ced572c14e1.png)

::: tip <i class="fas fa-comments"></i> ヒント
masterリポジトリにプッシュされるたびに、自動でビルド・デプロイ処理が実行されます。
ジョブのステータスは`QUED`、`RUNNING`、`SUCCESS`、`FAILED`の４種類で表示されます。各ステータスの内容は下記のとおりです。  
`QUED`：GitHubへのプッシュをトリガーにして、CircliCIにジョブの実行を促しています。  
`RUNNING`：ビルド・デプロイを実行しています。  
`SUCCESS`：ビルド・デプロイに成功しました。  
`FAILED`：ビルド・デプロイに失敗しました。  
:::

7. ジョブステータスが`SUCCESS`になったら、デプロイに成功しています。

Circle CIによる自動ビルド・デプロイの設定は以上です。以降は、コンテンツを編集した後、GitHubに変更箇所をプッシュするだけで自動で変更箇所が反映されたHTMLが公開されます。
