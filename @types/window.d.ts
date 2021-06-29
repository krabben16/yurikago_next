// https://panda-program.com/posts/nextjs-google-analytics/#window%E3%81%8B%E3%82%89ga%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%92%E4%BD%BF%E3%81%86%E3%81%9F%E3%82%81%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%82%92%E6%9B%B8%E3%81%8F

type Params = {
  page_title?: string
  page_location?: string
  page_path?: string
  send_page_view?: boolean
}

interface Window {
  // pageview
  gtag(type: 'config', googleAnalyticsId: string, params: Params)
}
