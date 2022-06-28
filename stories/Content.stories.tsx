import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Content } from './Content'

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
`

export const ContentWithCodeBlock = Template.bind({})
ContentWithCodeBlock.args = {
  post: {
    ...post,
    content,
  },
}
