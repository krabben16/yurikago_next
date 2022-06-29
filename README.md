# develop

```
cp .env.dist .env.local
yarn install
yarn dev
```

# VRT

```
yarn storycap
yarn regression
```

※ S3 バケットに書き込みできる AWS アカウントのクレデンシャルを読み込む必要がある

## 「ベースコミットに対応するスクリーンショットが S3 上に存在しない場合

※ この方法はベースコミット = develop ブランチの HEAD である場合のみ有効

1. クライアント ID と S3 バケット名を regconfig.json に設定
2. git checkout develop
3. yarn storycap && yarn regression

# dependency

**dashboard**

https://github.com/krabben16/yurikago-next/issues/23

**PR todo**

https://github.com/krabben16/yurikago-next/pulls?q=is%3Apr+is%3Aopen+-label%3Awontfix+

**PR wontfix**

https://github.com/krabben16/yurikago-next/pulls?q=is%3Aopen+is%3Apr+label%3Awontfix
