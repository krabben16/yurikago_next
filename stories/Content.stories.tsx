import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Content from '@/components/post/content'

export default {
  title: 'Prod/Content',
  component: Content,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Content>

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />

// TODO: getPostBySlugを実行した際に発生するエラーを解消する
// ModuleNotFoundError: Module not found: Error: Can't resolve 'fs'
const post = {
  slug: '26',
  title: 'TypeScript+@nuxt/test-utilsでE2Eテストを実行する',
  date: '2021-02-19T00:00:00.000Z',
  excerpt:
    '@nuxt/test-utilsを利用したE2EテストのテストケースをTypeScriptで記述する方法を調べました。',
  tags: ['Chromium', 'TypeScript', 'Jest', 'Playwright'],
  published: true,
}

const content = `
<div class="container" style="max-width: 800px;"><div class="py-3 d-flex align-items-center"><img class="rounded-circle" width="60" src="https://gyazo.com/f9796cb6495069a239407bf0e3d5c447.png"><a class="ms-3 text-decoration-none text-reset fs-3" href="/">Yurikago Blog</a></div><main><div class="py-3"><time class="text-muted" datetime="2021-02-19">2021/02/19</time><h1>TypeScript+@nuxt/test-utilsでE2Eテストを実行する</h1></div><div class="py-3 markdown-body"><p>@nuxt/test-utils を利用した E2E テストのテストケースを TypeScript で記述する方法を調べました。</p>
<h2>検証環境</h2>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">  </span><span style="color: #CE9178">"devDependencies"</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"@babel/core"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^7.12.16"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"@babel/preset-env"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^7.12.16"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"@nuxt/test-utils"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^0.1.3"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"@types/jest"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^26.0.20"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"babel-jest"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^26.6.3"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"jest"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^26.6.3"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"playwright"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^1.8.1"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"ts-jest"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^26.5.1"</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"typescript"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^4.1.5"</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #CE9178">"dependencies"</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">"nuxt"</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">"^2.15.0"</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span></code></pre>
<p><a href="https://github.com/krabben16/sandbox-circleci-nuxt-test-utils" target="_blank" rel="nofollow noopener noreferrer">sandbox-circleci-nuxt-test-utils</a></p>
<h2>テストケースを作成する</h2>
<p>ドキュメントの <a href="https://test-utils.nuxtjs.org/api-reference/browser-testing" target="_blank" rel="nofollow noopener noreferrer">Testing in a browser</a> を參考にテストケースを作成しました。テストの流れは以下です。</p>
<ol>
<li><code>setupTest</code> でテスト対象の Nuxt アプリケーション、ブラウザ（デフォルトだと Chromium）を起動する。</li>
<li><code>test</code> でトップページに遷移し、CSS セレクタ (.title) から取得した要素の innerText が "fixture" と一致するかテストする。</li>
</ol>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #6A9955">// test/e2e/index.spec.ts</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">setupTest</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">createPage</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">'@nuxt/test-utils'</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">describe</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">'Browser'</span><span style="color: #D4D4D4">, () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #DCDCAA">setupTest</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">browser:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #DCDCAA">test</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">'test/fixture/pages/index.vue'</span><span style="color: #D4D4D4">, </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">page</span><span style="color: #D4D4D4"> = </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createPage</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">'/'</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">actual</span><span style="color: #D4D4D4"> = </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">innerText</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">'.title'</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">expected</span><span style="color: #D4D4D4"> = </span><span style="color: #CE9178">'fixture'</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #DCDCAA">expect</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">actual</span><span style="color: #D4D4D4">).</span><span style="color: #DCDCAA">toEqual</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">expected</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"><span style="color: #D4D4D4">})</span></span></code></pre>
<h2>テスト対象のアプリケーションを作成</h2>
<p>@nuxt/test-utils はデフォルトだと test/fixture/nuxt.config.js を参照して Nuxt アプリケーションを起動します。sandbox では <a href="https://github.com/krabben16/sandbox-circleci-nuxt-test-utils/tree/main/test/fixture" target="_blank" rel="nofollow noopener noreferrer">test/fixture</a> 以下に Nuxt プロジェクトを作成しました。</p>
<h2>テスト実行環境を作成</h2>
<p>テストを実行する環境によって発生する問題を回避するため Docker コンテナを作成します。@nuxt/test-utils の内部では Playwright (API でブラウザを操作する Node ライブラリ) が動いており、Playwright 公式によって Docker イメージが作成されています。今回は <a href="https://playwright.dev/docs/docker" target="_blank" rel="nofollow noopener noreferrer">このイメージ</a> を利用します。</p>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">// infra/playwright/Dockerfile</span></span>
<span class="line"><span style="color: #569CD6">FROM</span><span style="color: #D4D4D4"> mcr.microsoft.com/playwright:bionic</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">RUN</span><span style="color: #D4D4D4"> apt-get update</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">ENV</span><span style="color: #D4D4D4"> PROJECT_ROOT=/var/www/playwright</span></span>
<span class="line"><span style="color: #569CD6">WORKDIR</span><span style="color: #D4D4D4"> $PROJECT_ROOT</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">COPY</span><span style="color: #D4D4D4"> package.json .</span></span>
<span class="line"><span style="color: #569CD6">COPY</span><span style="color: #D4D4D4"> yarn.lock .</span></span>
<span class="line"><span style="color: #569CD6">RUN</span><span style="color: #D4D4D4"> yarn install</span></span></code></pre>
<h2>テストを実行</h2>
<p>コンテナを作成後、コンテナに入って <code>yarn test</code> を実行します。</p>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">docker-compose </span><span style="color: #DCDCAA">exec</span><span style="color: #D4D4D4"> playwright bash</span></span></code></pre>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">yarn </span><span style="color: #DCDCAA">test</span></span></code></pre>
<h2>実行結果</h2>
<pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">yarn run v1.22.5
$ jest test/e2e
  console.info
    Using components loader to optimize imports

      at node_modules/@nuxt/components/dist/index.js:167:15

  console.info
    Discovered Components: test/fixture/.nuxt/8sgi4095/components/readme.md

      at node_modules/@nuxt/components/dist/index.js:230:13

 PASS  test/e2e/index.spec.ts (22.76 s)
  Browser
    √ setup nuxt (18427 ms)
    √ test/fixture/pages/index.vue (955 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        22.895 s
Ran all test suites matching /test\\e2e/i.
Done in 25.17s.</span></span></code></pre>
<p>テストが無事にパスしました 👏</p>
</div><div class="py-3"><div id="disqus_thread"><iframe id="dsq-app8678" name="dsq-app8678" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&amp;f=yurikago-blog&amp;t_i=26&amp;t_u=https%3A%2F%2Fwww.yurikago-blog.com%2Fposts%2F26&amp;t_e=TypeScript%2B%40nuxt%2Ftest-utils%E3%81%A7E2E%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B&amp;t_d=TypeScript%2B%40nuxt%2Ftest-utils%E3%81%A7E2E%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B&amp;t_t=TypeScript%2B%40nuxt%2Ftest-utils%E3%81%A7E2E%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B&amp;s_o=default&amp;l=ja#version=cfefa856cbcd7efb87102e7242c9a829" style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 394px !important;" horizontalscrolling="no" verticalscrolling="no"></iframe></div></div></main><footer class="py-3 text-center">© 2022 This site uses Google Analytics.</footer></div>
`

export const ContentWithCodeBlock = Template.bind({})
ContentWithCodeBlock.args = {
  post: {
    ...post,
    content,
  },
}
