# まなびランド

小学生向け学習アプリをまとめて公開する、GitHub Pages用の入口サイトです。アプリ本体は含めず、用意したHTMLを一覧へ追加できる構成です。

## アプリを追加する方法

1. 用意したHTMLと必要な画像・CSS・JavaScriptを `site/apps` に入れます。
2. `site/assets/apps.js` の `window.MANABI_APPS` にアプリ情報を追加します。

```js
window.MANABI_APPS = [
  {
    title: "たし算チャレンジ",
    description: "20までの かずを たそう",
    subject: "math",
    grade: "1年生〜",
    icon: "＋",
    href: "apps/tashizan.html",
    color: "card-yellow",
  },
];
```

`subject` には `math`、`japanese`、`science`、`social`、`english`、`music`、`programming`、`other` が使えます。複数の教科を登録すると、ホーム画面へ教科フィルターが自動表示されます。

カード色は `card-yellow`、`card-blue`、`card-coral`、`card-green`、`card-purple` から選べます。省略した場合は順番に自動設定されます。

## GitHub Pagesで公開

このフォルダをGitHubリポジトリの `main` ブランチへ置き、リポジトリの Settings → Pages → Source で **GitHub Actions** を選択します。以後、`main` へ反映するたびに `.github/workflows/pages.yml` が `site` フォルダを公開します。

ローカル確認では `site/index.html` をブラウザで開きます。
