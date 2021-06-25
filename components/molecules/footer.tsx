import cst from '~/lib/constants'

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div>
        &copy; {new Date().getFullYear()} {cst.SITE_OWNER}, Built with Next.js
      </div>
      <div>This site uses Google Analytics.</div>
    </footer>
  )
}

export default Footer
