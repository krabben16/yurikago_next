import Meta from '~/components/layout/meta'
import Nav from '~/components/layout/nav'
import Footer from '~/components/layout/footer'
import Main from '~/components/layout/main'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Nav />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
