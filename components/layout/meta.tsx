import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:image"
        content={`${process.env.FRONT_URL}/images/ogp.jpg`}
      />
      <meta property="og:site_name" content={process.env.SITE_NAME} />
      <meta property="og:locale" content="ja_JP" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
