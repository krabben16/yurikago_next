import cst from '~/lib/constants'
import Post from '~/types/post'

/**
 * 記事の構造化データを作成する
 * https://developers.google.com/search/docs/data-types/article?hl=ja
 * https://developers.google.com/search/docs/data-types/logo?hl=ja
 */
export const createArticleSchemaObject = (post: Post) => {
  return {
    '@context': 'http://schema.org',
    '@type': 'Article',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${cst.FRONT_URL}/posts/${post.slug}`,
    },
    'headline': post.title,
    'image': [`${cst.FRONT_URL}/images/schema/16x9.jpg`],
    'datePublished': post.date,
    'dateModified': post.date,
    'author': {
      '@type': 'Person',
      'name': cst.ARTICLE_AUTHOR,
    },
    'publisher': {
      '@type': 'Organization',
      'name': cst.ARTICLE_ORGANIZATION,
      'logo': {
        '@type': 'ImageObject',
        'url': `${cst.FRONT_URL}/images/schema/logo.jpg`,
      },
    },
  }
}
