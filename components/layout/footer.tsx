import cst from '~/lib/constants'

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      &copy; {new Date().getFullYear()} {cst.SITE_OWNER}, Built with Next.js<br />
      This site uses Google Analytics.
    </footer>
  )
}

export default Footer
