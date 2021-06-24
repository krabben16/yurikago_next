import Head from 'next/head'
import cst from '~/lib/constants'
import { getAllPosts } from '~/lib/api'
import Post from '~/types/post'
import Layout from '~/components/layout'
import PostList from '~/components/organisms/postList'

type Props = {
  allPosts: Post[]
}

const IndexPage = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>
          トップページ | { cst.SITE_NAME }
        </title>
      </Head>
      <PostList posts={ allPosts } />
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'date',
    'category',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
