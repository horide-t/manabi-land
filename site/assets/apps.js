// ここに、用意した学習アプリを登録します。
// HTMLファイルは site/apps フォルダへ入れてください。
//
// 記入例：
// {
//   title: "たし算チャレンジ",
//   description: "20までの かずを たそう",
//   subject: "math",
//   grade: "1年生〜",
//   icon: "＋",
//   href: "apps/tashizan.html",
//   color: "card-yellow",
// },

window.MANABI_APPS = [
  {
    title: "かずトレ",
    description: "1〜3年生の計算を テンポよくれんしゅう",
    subject: "math",
    grade: "1〜3年生",
    icon: "＋",
    href: "apps/math-flashcards.html",
    color: "card-yellow",
  },
  {
    title: "漢字よみフラッシュカード",
    description: "学年・学期をえらんで 漢字のよみをれんしゅう",
    subject: "japanese",
    grade: "1〜6年生",
    icon: "漢",
    href: "apps/漢字よみフラッシュカード_JSON表示なし.html",
    color: "card-coral",
  },
  {
    title: "ことばクエスト",
    description: "英語の質問と答えを 声とカードでれんしゅう",
    subject: "english",
    grade: "3〜6年生",
    icon: "Aa",
    href: "apps/kotoba-quest-offline.html",
    color: "card-blue",
  },
  {
    title: "歴史カード",
    description: "ふりがな付きカードで 日本の歴史を学ぼう",
    subject: "social",
    grade: "小・中学生",
    icon: "城",
    href: "apps/rekishi flashcards.html",
    color: "card-green",
  },
  {
    title: "音符よみフラッシュカード",
    description: "ト音記号の音を 見て・聴いて・答えよう",
    subject: "music",
    grade: "小学生〜",
    icon: "♪",
    href: "apps/music-flashcards.html",
    color: "card-purple",
  },
];
