// https://chocoby.com/blog/2021/02/26/husky-v5-lint-staged-prettier
// https://github.com/okonet/lint-staged#configuration

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,yml,md}': ['prettier --write'],
}
