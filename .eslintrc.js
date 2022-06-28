// https://zenn.dev/thiragi/articles/555a644b35ebc1
// https://buildersbox.corp-sansan.com/entry/2021/05/28/110000
module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
