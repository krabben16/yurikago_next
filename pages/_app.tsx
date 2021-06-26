import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import usePageview from '~/hooks/usePageview'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageview()
  return <Component {...pageProps} />
}
