// https://chocoby.com/blog/2021/02/26/husky-v5-lint-staged-prettier
// https://github.com/okonet/lint-staged#configuration

// '*': ['prettier --write'] だと以下のエラーが発生する。
// × prettier --write:
// [error] No parser could be inferred for file: .husky\.gitignore
// [error] No parser could be inferred for file: .husky\pre-commit
// [error] No parser could be inferred for file: yarn.lock
// lint-staged.config.js 51ms
// package.json 6ms
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// husky - pre-commit hook exited with code 1 (error)

// yarn lint:fix ではエラーが発生しない。
// yarn.lock は .gitignore に含まれていないのでリントの対象外
// .husky/ 以下のファイルはなぜエラーにならない？
// 拡張子がないファイルはリントされない？

module.exports = {
  '*.{js,jsx,ts,tsx,json,md}': ['prettier --write'],
}
