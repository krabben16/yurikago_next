import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '~/components/layout'
import PostContent from '~/components/atoms/postContent'
import PostHeader from '~/components/molecules/postHeader'
import PostComment from '~/components/molecules/postComment'
import { getPostBySlug, getAllPosts } from '~/lib/api'
import markdownToHtml from '~/lib/markdownToHtml'
import cst from '~/lib/constants'
import Post from '~/types/post'
import 'prism-themes/themes/prism-vsc-dark-plus.css'

type Props = {
  post: Post
}

const PostPage = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <Head>
            <title>
              { post.title } | { cst.SITE_NAME }
            </title>
          </Head>
          <PostHeader post={ post } />
          <PostContent post={ post } />
          <PostComment post={ post } />
        </>
      )}
    </Layout>
  )
}

export default PostPage

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'category',
    'tags',
    'content',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
