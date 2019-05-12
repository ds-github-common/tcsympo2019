---
title: Slack Bot をサーバーレスで運用する時の、タイムアウト対策【小技】
tags: Slack serverless lambda Firebase cloudfunctions
author: saken649
slide: false
---
# はじめに

Slack Bot をサーバーレスで運用したい、という需要、それなりにあると思います。

ここで Slack Bot と呼んでいるのは、例えば、こういうのです。
https://github.com/saken649/NameThinking
https://github.com/saken649/NameThinkingLambda
`/ntcamel ユーザー名を取得する` と打ったら、`getUsername` と返してくれる、そんなのです。

これを行うには、[Slack API の Slash Commands](https://api.slack.com/slash-commands) という機能を使います。
普通に使う分には問題にはならないのですが、ことサーバーレスとなると、若干面倒な問題があります。

## 3 秒の壁

この Slash Commands ですが、Slack が Bot にリクエストを投げてから 3,000ms 以内、つまり **3 秒以内にレスポンスが返ってこないとタイムアウト** になります。

> This confirmation must be received by Slack within 3000 milliseconds of the original request being sent, otherwise a Timeout was reached will be displayed to the user.

cf. https://api.slack.com/slash-commands#responding_to_commands

そしてサーバーレスならではの事情として、どうしても **ランタイムを起動する時間が必要** という問題があります。
cf. [全部教えます！ サーバレスアプリのアンチパターン とチューニング](https://d0.awsstatic.com/events/jp/2017/summit/devday/D4T7-2.pdf)

↑の資料は Lambda の記述ですが、Lambda に限った話ではないでしょう。

この 3 秒には、もちろん **ランタイムの起動時間も含めて**、なので、実は意外と厳しいです。
コールドスタートしようものなら、3 秒はかなり厳しいです。というか無理では。。
例えば、上記紹介した NameThinking の場合だと、外部の API への問い合わせを行ったりしているので、コールドスタート踏んづけると 3 秒は無理です。
タイムアウト必至ですね。

## 3 秒経過後に POST 出来るか？

ただ、3 秒経った後に、Slack に POST する手段が無い訳ではありません。

> Back when you received the data payload after the command was invoked, there will have been a `response_url` field included. This URL can be used to send responses after the 3000ms window has closed.

cf. https://api.slack.com/slash-commands#responding_to_commands

Slack からの RequestBody に含まれる `response_url` は、3 秒経った後も使えるので、そこに対して POST すれば OK です。

タイムアウトするけど POST は受け付けてるので、結果、POST 出来ている、という例です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/e2dfbaf6-ba26-ad46-f729-b217590d5b4a.png)
なんか奇妙な状態ですね。

そして、動いてるとはいえタイムアウトなので、バッチリそういうログも残ります。画像は Firebase のログです。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/a5e8b390-cbbf-38c0-2e9f-004891a1be16.png)
アラートとか仕込んでるなら、アラート上がっちゃうかもしれません。
なので、タイムアウトさせないようにしないといけません。

# 本題：対策方法

- 3 秒以内に、レスポンスが返る必要がある
- でも、起動時間なども考えると、意外とシビア
- Slack への POST 自体は 3 秒経過後でも OK

タイムアウト対策を調べると、非同期処理で Lambda から別の Lambda 呼ぶ。。。とか割と出てくるのですが、実はそこまでしなくても出来ました。
**とりあえず、レスポンスを真っ先に返して、そのまま処理続ければ良さそう** です。
処理続けるのも、非同期処理とか不要でした。

## 実際対策した結果はこちら

![May-10-2019 01-24-47.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/d7312b1d-2d4c-58fb-b826-e91b0cb4e998.gif)

体感で 7 秒くらい掛かってそうですが、タイムアウトの表示はされませんね！

Firebase のログを見てみても、冒頭でお見せしたのとは違って、タイムアウトのログも残っていません。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/9870e4f6-e91e-4c59-24a2-de2170babf3b.png)

では、具体的にどのように対策したか、AWS Lambda の場合と、Cloud Functions for Firebase の場合とで、解説します。

## AWS Lambda の場合

Lambda 関数のハンドラーの第 ３ 引数に、コールバックを指定することが出来ます。
このコールバック、ざっくり言うと `呼び出し元にレスポンスを明示的に返す` ということが出来ます。
https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/nodejs-prog-model-handler.html#nodejs-prog-model-handler-callback

```javascript
exports.lambdaHandler = async (event, context, callback) => {
    callback(null, { statusCode: 418, body: JSON.stringify({ "text": "Are you a teapot?" })})
}
```

上記コードを記述した Lambda 関数を API Gateway 経由で API として呼び出した場合、API の呼び出し元に、HTTP Status が `418 I'm a teapot` 、ResponseBody が `Are you a teapot?` として返ってきます。

> Lambda 関数が同期的に呼び出された場合、コールバックでレスポンスの本文が返ります。

[他のサービスで AWS Lambda を使用する - AWS Lambda](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/lambda-services.html) を見るに、**API Gateway の場合は同期呼び出し** になるので、要は、**callback でもレスポンスを返せる** ということです。

そして重要なのが、**callback した後も、return されるまで処理は続行** されます。
こんな Lambda 関数があったとします。

```javascript
exports.lambdaHandler = async (event, context, callback) => {
    try {
        callback(null, { statusCode: 418, body: JSON.stringify({ 'text': 'Are you a teapot?' })})

        console.log("I'm a teapot.")
        console.log('You are a teapot.')
        console.log('We are teapots!!!!')

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello teapot'
            })
        }
    } catch (err) {
        console.log(err)
        return err
    }
}
```

コレを動かすとこうなります。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/22f37750-2239-5e7b-8d85-c3ff094f052e.png)

`200 OK` ではなく、`418 I'm a teapot` が返ってきながら、`console.log()` も実行されているのがお分かり頂けるかと思います。

---

この **callback した後も、return されるまで処理は続行される** という性質を活かすと、以下のようなコードになります。

```javascript
exports.lambdaHandler = async (event, context, callback) => {
    // 何よりもまず Slack にレスポンスを返す
    callback(null, { statusCode: 200, body: ''})
    // 以降は普通に処理続行
    // some codes...

    return {
        statusCode: 200,
        body: JSON.stringify({})
    }
}
```

- 処理の冒頭で、`callback` でとりあえず `200 OK` を返しておく
- あとは、3 秒の壁を気にせず、処理を続行する
- return で返す ResponseBody は空にする

こんな流れになります。

3点目は別に好き好きではあるのですが、律儀に返すと、Slack も律儀に表示してくれちゃうので、注意が必要です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/d86220db-c275-5f08-02cb-cacd4c381fd1.png)

実際に、私が自作の Slack Bot で実装したコードはこちらです。
https://github.com/saken649/NameThinkingLambda/blob/master/name-thinking/app.js

## Cloud Functions for Firebase の場合

Cloud Functions for Firebase は Lambda に比べるとかなりライトな印象です。
[Express ベースで普通に動いちゃう](https://firebase.google.com/docs/functions/http-events?hl=ja) くらいなので、Express を少しでも触ったことがある方なら、すぐ取っ付けるのが特徴です。
ここでも、Express ベースで説明します。

Express も例によって、レスポンスを返してもなお、その後の処理を続行させることが出来ます。
https://expressjs.com/ja/4x/api.html#res.send

```javascript
const functions = require('firebase-functions')
const express = require('express')
const app = express()

app.get('/teapot', (req, res) => {
    res.status(418).send({ text: 'We are teapots.' })

    console.log('He is a teapot.')
    console.log("She isn't a teapot...")
    console.log("Ah? Coffee cup?")

    res.end()
})

exports.hello = functions.https.onRequest(app)
```

コレを動かすとこうなります。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/159578/3128e3e3-c55d-425b-403b-81879e8879aa.png)

こちらも `418 I'm a teapot` が返ってきながら、`console.log()` も実行されているのがお分かり頂けるかと思います。

---

こちらも **`res.status().send()` した後も処理が続行される** という性質を活かすと、以下のようなコードになります。

```javascript
const functions = require('firebase-functions')
const express = require('express')
const app = express()

app.get('/bot', (req, res) => {
    // 何よりもまず Slack にレスポンスを返す
    res.status(200).send()
    // 以降は普通に処理続行
    // some codes...

    res.end()
})

exports.slack = functions.https.onRequest(app)
```

- 処理の冒頭で、`res.status(200).send()` でとりあえず `200 OK` を返しておく
- あとは、3 秒の壁を気にせず、処理を続行する
- `res.end()` で明示的に終了する

[3 点目は公式マニュアルにそう書いてあります。](https://firebase.google.com/docs/functions/http-events?hl=ja)
> 重要: すべての HTTP 関数が正しく終了するようにしてください。関数を正しく終了することで、関数が長時間実行されて過剰な課金がされるということがなくなります。res.redirect()、res.send()、res.end() で HTTP 関数を終了します。

実際に、私が自作の Slack Bot で実装したコードはこちらです。[^1]
https://github.com/saken649/NameThinking/blob/master/functions/index.js
[^1]: Firebase 版が元ネタです。Lambda 版は、それを移植したものだったりします。

# ちなみに

どちらの例でも `200 OK` を返していましたが、厳密に言うなら、受け付けただけで処理は終わってないので `202 Accepted` を返すのが適切かもしれませんね。
https://developer.mozilla.org/ja/docs/Web/HTTP/Status/202

自分のコードも、202 に書き換えちゃいました。
ので、冒頭でお見せした Firebase のログでは、202 で残っています。

なお、問答無用で 200 番台を返すということは、裏を返すと、エラーが起きても 500 番台とか返せない、ということなので、その時の処理は、 `console.log()` の出し方などで、工夫してどうにかするしか無さそうです。
私の Bot は大したことない個人運用の Bot なので特に考えてませんでしたが、業務利用する Bot の場合は、ちゃんと考えた方が良さそうですね。

# おわりに

真っ先にレスポンス返して、非同期でもなくそのまま処理が続く、というのは裏技的な感じもするのですが。。。
ひとまず、このような形でシンプルに対策が取れるので、サーバーレスで運用している Slack Bot のタイムアウト対策に苦労されている方は、一度お試しください。
