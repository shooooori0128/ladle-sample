# Ladle sample (Component catalog for React like Storybook)

## 起動

```sh
# ローカル起動
yarn ladle:serve

# ビルド
yarn ladle:build

# テスト実行
yarn snapshot-test
```

## メリデリ

- ビルドが早い（これに尽きる）
- ゼロコンフィグで動く
- CSF準拠なのでStorybookからの移行が楽
- playwrightとかはstorybook側でラップしているものではないので、変な問題とかに当たったりはしにくそう
- たまにHMRが動かない
- ViteでビルドしているのでNext.jsで動かしているプロダクトへの採用はちょっと考えちゃう

## 今後の予定

https://ladle.dev/docs/addons#storybook-interoperability

## MDX

https://ladle.dev/docs/mdx

## スナップショットテスト

公式にはスナップショットテストの例しか載ってないけど、普通にインタラクションテストも出来そう

https://ladle.dev/docs/visual-snapshots

## アドオン

https://ladle.dev/docs/addons

## アクセシリビリティ

https://ladle.dev/docs/a11y

## アクション

https://ladle.dev/docs/actions

## コントロール

https://ladle.dev/docs/controls

## ソース

https://ladle.dev/docs/source

## 参考

古い記事だけど、Storybookとの比較等をザッと知るには良さそう。

https://zenn.dev/occar421/scraps/c6de1cb1c0fc5f
