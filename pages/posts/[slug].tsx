import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '~/components/layout/layout'
import PostComment from '~/components/post/comment'
import PostContent from '~/components/post/content'
import PostHeader from '~/components/post/header'
import { getPostBySlug, getAllPosts } from '~/lib/api'
import markdownToHtml from '~/lib/markdown/markdownToHtml'
import { createArticleSchemaObject } from '~/lib/schema/article'
import { createBreadcrumbSchemaObject } from '~/lib/schema/breadcrumb'
import Breadcrumb from '~/types/breadcrumb'
import Post from '~/types/post'

type Props = {
  post: Post
}

const PostPage = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const breadcrumbs: Breadcrumb[] = [
    { name: 'トップページ', path: '/' },
    { name: post.title, path: `/posts/${post.slug}` },
  ]

  return (
    <Layout>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <Head>
            <title>
              {post.title} | {process.env.SITE_NAME}
            </title>
            <meta name="description" content={post.excerpt} />
            <meta
              property="og:title"
              content={`${post.title} | ${process.env.SITE_NAME}`}
            />
            <meta property="og:description" content={post.excerpt} />
            <meta property="og:type" content="article" />
            <meta
              property="og:url"
              content={`${process.env.FRONT_URL}/posts/${post.slug}`}
            />
            {/* 構造化マークアップ */}
            <script type="application/ld+json">
              {JSON.stringify(createBreadcrumbSchemaObject(breadcrumbs))}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(createArticleSchemaObject(post))}
            </script>
          </Head>
          <PostHeader post={post} />
          <PostContent post={post} />
          <PostComment post={post} />
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
