# Git/GitHubでデータを管理する
ここまで作ったファイルをGitにプッシュします。

## リモートリポジトリを作成する
1. [GitHub](https://github.com/)にアクセスしログインする。

2. **Repositries**の**New**ボタンをクリックする。

![Image from Gyazo](https://i.gyazo.com/2b0e3f8e1d7209b1de5120d4db891a77.png)

3. 任意の**Repository name**を入力して、**Create repository**をクリックする。

![Image from Gyazo](https://i.gyazo.com/031cf52a81ee09874a5ea7af184c0ab1.png)

4. コピーアイコンをクリックして、SSHアドレスをクリップボードにコピーする。

![Image from Gyazo](https://i.gyazo.com/4e7dbb19ff7fd5e05ce06e41b11cd4e4.png)

以上でリモートリポジトリが作成されました。

## ローカルリポジトリを作成する
1. コマンドラインツール（Windowsであればコマンドプロンプト、Macであればターミナル）を開く。
1. 本プロジェクトのルートフォルダに移動する。
1. gitプロジェクトを初期化する。
```bash
$ git init
# .
# ├── .git
# ├── .vuepress
# ├── README.md
# ├── contents
# ├── node_modules
# ├── package.json
# └── yarn.lock
```
::: warning <i class="fas fa-exclamation-circle"></i> 注意
`git init` は、必ず本プロジェクトのルートフォルダで実行してください。
:::

4. プロジェクトファイルをコミットする。
```bash
# プロジェクトファイルをステージングする。
$ git add .

# プロジェクトファイルをコミットする。
# ダブルクオーテーションの中はコミットメッセージです。
# 任意のメッセージで問題ありません。
$ git commit -m "first commit"
```

5. リモートリポジトリにコミットファイルをプッシュします。
```bash
# リモートリポジトリを登録します。
# 「git remote add origin 」以降は、「リモートリポジトリを作成する」の手順4でコピーした内容をペーストします。
$ git remote add origin git@github.com:username/jamstack.git

# コミットファイルをリモートリポジトリのmasterブランチにプッシュします。
$ git push origin master
Enumerating objects: 17835, done.
Counting objects: 100% (17835/17835), done.
Delta compression using up to 4 threads
Compressing objects: 100% (13987/13987), done.
Writing objects: 100% (17835/17835), 19.73 MiB | 1.62 MiB/s, done.
Total 17835 (delta 2930), reused 17835 (delta 2930)
remote: Resolving deltas: 100% (2930/2930), done.
To github.com:username/jamstack.git
 * [new branch]        master -> master
```

6. [GitHub](https://github.com/)上のリモートリポジトリにデータが格納されていることを格納する。
![Image from Gyazo](https://i.gyazo.com/39dc96ee70310debde3bdf7dfc30b5c4.png)

::: tip <i class="fas fa-comments"></i> ヒント
* GitHub上の表示が変わらない場合は、ページをリロードしてください。
* 一度Gitプロジェクトを作成した後は、**Visual Studio Code**上でGUI操作でデータのコミット、プッシュができます。
:::
