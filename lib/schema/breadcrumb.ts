import cst from '~/lib/constants'
import Breadcrumb from "~/types/breadcrumb"

/**
 * パンくずの構造化データを作成する
 * https://developers.google.com/search/docs/data-types/breadcrumb?hl=ja
 */
export const createBreadcrumbSchemaObject = (breadcrumbs: Breadcrumb[]) => {
  const itemList = breadcrumbs.map((v, k) => {
    return {
      '@type': 'ListItem',
      'position': k + 1,
      'name': v.name,
      'item': cst.FRONT_URL + v.path,
    }
  })

  return {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemList,
  }
}
