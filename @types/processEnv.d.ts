declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_FRONT_URL: string
    readonly NEXT_PUBLIC_GITHUB_ID: string
    readonly NEXT_PUBLIC_GITHUB_URL: string
    readonly NEXT_PUBLIC_ARTICLE_ORGANIZATION: string
    readonly NEXT_PUBLIC_SITE_NAME: string
    readonly NEXT_PUBLIC_DISQUS_SHORTNAME: string
    readonly NEXT_PUBLIC_GA_TRACKING_ID: string
  }
}
