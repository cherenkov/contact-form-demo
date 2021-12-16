# お問合せフォームのデモ

## 内容

- 入力、確認、完了画面
- バリデーション

## Screenshot

<img src="https://user-images.githubusercontent.com/30701/146385381-dc6b59da-778d-441b-8bbb-a1fe6be93f41.png" width="300">

## 使用技術

- Vite
- React
  - React Router
  - React Hook Form (Validation)
- TypeScript
- Tailwind CSS
  - daisyUI
- Firebase(v9, modular)
  - Firebase Hosting
  - Firebase Functions
    - Trigger Email
  - Cloud Firestore
- ESLint
- Prettier
- E2E test: Cypress

## セットアップ

`yarn`

## 動作確認手順

`yarn dev --host`

`http://localhost:3000/` にアクセス

`--host` をつけると同一ネットワークにいる端末から IP アドレスでアクセスできる。`npm i`, `npm run dev --host`でもよい。

入力-確認-完了の流れだけを確認する場合は、以上で可能。

Firebase Functions でメール送信する場合は、下記のデプロイ準備と Firebase Hosting, Functions, Trigger Email の設定が別途必要。

## デプロイ準備

.env.local.example を元に .env.local を作成して環境変数を埋める。今回は VITE_FIREBASE_DATABASEURL は使っていないので空でよい。

```
VITE_FIREBASE_APIKEY=
VITE_FIREBASE_AUTHDOMAIN=
VITE_FIREBASE_DATABASEURL=
VITE_FIREBASE_PROJECTID=
VITE_FIREBASE_STORAGEBUCKET=
VITE_FIREBASE_MESSAGINGSENDERID=
VITE_FIREBASE_APPID=
VITE_FIREBASE_MEASUREMENTID=
```

## デプロイ

`firebase deploy`

## テスト方法

E2E テストの Cypress によるコードが `cypress/integration/form-actions.spec.js` に格納されている。

https://github.com/cherenkov/contact-form-demo/issues/3 こちらにテスト実行中の動画があり。

1. GUI の Cypress をインストール。
2. `yarn dev` を実行してローカルサーバの `http://localhost:3000/` にアクセスして入力画面が表示できる状態にする。
3. このリポジトリを読み込む。
4. INTEGRATION TESTS に form-actions.spec.js があるのでクリックするとテストが始まる。

## 参考リンク集

- vite-react-ts-tailwind-starter このスターターをベースに組みました。
  - https://github.com/TeXmeijin/vite-react-ts-tailwind-firebase-starter
- バリデーション、フォームで入力された値の取り回し Context のアイデア
  - https://dev.classmethod.jp/articles/react-beginners-tried-to-create-a-modern-web-form-with-material-ui-and-react-hook-form/
- firebase function でメール送信の参考
  - https://qiita.com/ryo2132/items/7cdd6c86dd418095f74a#1-2-firebase%E3%81%AE%E8%A8%AD%E5%AE%9A
- Trigger Email のアイデア
  - https://zenn.dev/ryo_kawamata/articles/firebase-trigger-email
- react のファイル構成は考えすぎない
  - https://ja.reactjs.org/docs/faq-structure.html#dont-overthink-it
