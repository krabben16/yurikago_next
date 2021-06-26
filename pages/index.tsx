import Head from 'next/head'
import cst from '~/lib/constants'
import { getAllPosts } from '~/lib/api'
import Post from '~/types/post'
import Layout from '~/components/layout/layout'
import PostList from '~/components/post/list/list'
import { createBreadcrumbSchemaObject } from '~/lib/schema/breadcrumb'
import Breadcrumb from '~/types/breadcrumb'

type Props = {
  allPosts: Post[]
}

const IndexPage = ({ allPosts }: Props) => {
  const breadcrumbs: Breadcrumb[] = [{ name: 'トップページ', path: '/' }]

  return (
    <Layout>
      <Head>
        <title>トップページ | {cst.SITE_NAME}</title>
        <meta
          name="description"
          content={`${cst.SITE_OWNER}の技術ブログです。`}
        />
        <meta property="og:title" content={`トップページ | ${cst.SITE_NAME}`} />
        <meta
          property="og:description"
          content={`${cst.SITE_OWNER}の技術ブログです。`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`${cst.FRONT_URL}/`} />
        {/* 構造化マークアップ */}
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchemaObject(breadcrumbs))}
        </script>
      </Head>
      <PostList posts={allPosts} />
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'category', 'excerpt'])

  return {
    props: { allPosts },
  }
}
