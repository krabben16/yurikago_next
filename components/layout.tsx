import Meta from './meta'
import Nav from './molecules/nav'
import Footer from './molecules/footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="container max-w-screen-md px-4 prose">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
