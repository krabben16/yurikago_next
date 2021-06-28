const Footer = () => {
  return (
    <footer className="py-3 text-center">
      &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_OWNER}
      <br />
      This site uses Google Analytics.
    </footer>
  )
}

export default Footer
