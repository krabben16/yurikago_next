import Meta from '~/components/meta'
import Nav from '~/components/molecules/nav'
import Footer from '~/components/molecules/footer'

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
