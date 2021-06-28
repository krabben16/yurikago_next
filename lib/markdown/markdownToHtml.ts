// https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript
import shiki from '@stefanprobst/remark-shiki'
import remark from 'remark'
import links from 'remark-external-links'
import gfm from 'remark-gfm'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(links)
    .use(gfm)
    .use(shiki, { theme: 'dark-plus' })
    .use(html)
    .process(markdown)
  return result.toString()
}
