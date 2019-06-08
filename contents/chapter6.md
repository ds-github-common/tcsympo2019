# 自動ビルド・デプロイの仕組みを作る

Markdownを編集するたびに、HTMLのビルドとFirebaseへのデプロイを手動で行うのは手間がかかります。  
ここでは、CI（Conitnuous Integreation）ツールを使って、Gitにプッシュしたタイミングで自動ビルドとデプロイを実現する方法を詳述します。

## CircleCIのセットアップ
CircleCIと本プロジェクトのGitHubリポジトリを連携します。

1. [CircleCI](https://circleci.com/)にアクセスする。

2. `Sign Up`をクリックする。
![Image from Gyazo](https://i.gyazo.com/12c2c3340249782bb0eb970f811f463e.png)

3. `Sign Up with GitHub`をクリックして、ご自身のアカウントでログインする。
![Image from Gyazo](https://i.gyazo.com/c6caab0b0a0a6f3a0ca409d29239d1a9.png)

4. 左ペインの`ADD PROJECTS`をクリックして、本プロジェクトのリポジトリの`Set Up Project`をクリックする。
![Image from Gyazo](https://i.gyazo.com/82a85100de35235f8c82470b1f276fdf.png)

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
