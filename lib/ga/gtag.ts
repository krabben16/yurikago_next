import cst from '~/lib/constants'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', cst.GA_TRACKING_ID, {
    page_path: url,
  })
}

type EventArgs = {
  action: string
  category: string
  label: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventArgs) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
