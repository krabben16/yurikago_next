import cst from '~/lib/constants'

const Footer = () => {
  return (
    <footer className="py-5 text-center">
      &copy; {new Date().getFullYear()} {cst.SITE_OWNER}
      <br />
      This site uses Google Analytics.
    </footer>
  )
}

export default Footer
