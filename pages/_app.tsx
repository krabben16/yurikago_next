import { AppProps } from 'next/app'
import '~/styles/index.css'
import usePageview from '~/hooks/usePageview'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageview()
  return <Component {...pageProps} />
}
