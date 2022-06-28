// https://zenn.dev/thiragi/articles/555a644b35ebc1
// https://buildersbox.corp-sansan.com/entry/2021/05/28/110000
// https://zenn.dev/minguu42/articles/20211226-nextjs-storybook
module.exports = {
  extends: ["plugin:storybook/recommended", 'next', 'prettier'],
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
