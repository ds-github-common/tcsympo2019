# コンテンツを作成する
VuePressの設定ファイルができたため、下記の手順でコンテンツを作成していきます。

## ホーム画面を作成する

1. [ローカルサーバーを立ち上げる](chapter1.html#ローカルサーバーを立ち上げる)で作成したREADME.mdをVisual Studio Codeで開き、`# Hello VuePress` を削除する。
1. ホーム画面用のコンテンツを記載してデータを保存する。
```md
---
home: true
heroText: Webマニュアル30分クッキング
tagline: 〜MarkdownにJAMStackを添えて〜
heroImage: 'https://www.jtca.org/image/jtcalogo.gif'
actionText: Get Started →
actionLink: /contents/
footer: TC Symposium 2019 | Copyright © Human Science co., ltd.
features:
  - title: Faster
    details: なぜデプロイ時にビルドしておけるものを都度ビルドされるまで待つのでしょうか？　最初の1バイトにかかる時間を最小化するのに、事前にビルドされCDNでホスティングされるファイルより優れたものはありません。
  - title: Cheaper
    details: どこにでも配信できるような規模のファイルしか持たない時に、問題となるのはいかに多くの場所で配信を行うかと言うことです。CDNはその際に最適なサービスで、そして大抵の場合はホスティングをスケールすることができます。
  - title: Easier
    details: サーバー・クライアント間の依存を減らし、処理を分割して行くことで、より開発とデバッグに集中することができます。また、CMSやサイトジェネレータの選択肢が拡大することで、コンテンツとマーケティングの二つのスタックをメンテナンスする必要性をなくすことができます。
---
```

![Image from Gyazo](https://i.gyazo.com/5e7915c60f4c53b687ab677747aa0a1b.png)

ホーム画面が表示されました。

## コンテンツページを追加する

1. プロジェクトのルートディレクトリに **contents** フォルダを作成する。
1. **contents** フォルダ内に **README.md** を作成する。

![Image from Gyazo](https://i.gyazo.com/e37996586c5252c51d0be529f7152f68.png)

3. **Visual Studio Code** で **README.md** を開き、Markdown記法でコンテンツを作成する。
::: tip <i class="fas fa-comments"></i> ヒント
ここでMarkdown記法を使って自由にコンテンツを作成しても差し支えありません。ただし、本手順ではまとまったMarkdown記法で書かれた記事をコピーすることで手短に表示の確認をします。  
**GitHub** の **README.md** や **Qiita** などは基本的にMarkdown記法で書かれていルため、主だった記事をコピーします。
:::
4. [Qiita](https://qiita.com/saken649/items/b70e462ae41614b72f77.md)のMarkdown本文を表示して全文をコピーする。

![Image from Gyazo](https://i.gyazo.com/0a4ad04d7bb977e4a8169a0dda9439d9.png)

::: tip <i class="fas fa-comments"></i> ヒント
上記のリンクの記事は一例です。任意で **Qiita** から記事を探し、右上の三点リーダー「`…`」をクリックして、 `Markdownで本文を見る` をクリックし、表示されたMarkdownをコピーしても問題ありません。
:::

5. **Visual Studio Code** で、手順2で作成したREADME.mdにペーストして、データを保存する。

![Image from Gyazo](https://i.gyazo.com/cedaac0a7aed8766469adabbdc85f2a5.png)
コンテンツ画面が表示されました。
