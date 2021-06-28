declare namespace NodeJS {
  interface ProcessEnv {
    readonly FRONT_URL: string
    readonly GITHUB_ID: string
    readonly GITHUB_URL: string
    readonly ARTICLE_AUTHOR: string
    readonly ARTICLE_ORGANIZATION: string
    readonly SITE_OWNER: string
    readonly SITE_NAME: string
    readonly DISQUS_SHORTNAME: string
    readonly GA_TRACKING_ID: string
  }
}
