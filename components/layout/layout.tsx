import Meta from '~/components/layout/meta'
import Nav from '~/components/layout/nav'
import Footer from '~/components/layout/footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
