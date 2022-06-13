// https://chocoby.com/blog/2021/02/26/husky-v5-lint-staged-prettier
// https://github.com/okonet/lint-staged#configuration

// '*': ['prettier --write'] を設定すると以下のエラーが発生した。
// × prettier --write:
// [error] No parser could be inferred for file: .husky\.gitignore
// [error] No parser could be inferred for file: .husky\pre-commit
// [error] No parser could be inferred for file: yarn.lock
// lint-staged.config.js 51ms
// package.json 6ms
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// husky - pre-commit hook exited with code 1 (error)

// yarn lint:eslint --fix ではエラーが発生しない。
// yarn.lock は .gitignore に含まれているのでリントの対象外
// .husky/ 以下のファイルはなぜエラーにならない？

// prettierは以下の形式をサポートしている。
// yarn lint:prettierのようにディレクトリ単位でリント対象をフィルタリングするとき、サポート外の形式のファイルはスキップしている？
// https://prettier.io/docs/en/index.html

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,yml,md}': ['prettier --write'],
}
