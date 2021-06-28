import Link from 'next/link'

const Nav = () => {
  return (
    <div className="py-3 d-flex align-items-center">
      <a href={process.env.GITHUB_URL} target="_blank">
        <img
          className="rounded-circle"
          width="60"
          src={`https://github.com/${process.env.GITHUB_ID}.png`}
        />
      </a>
      <Link href="/">
        <a className="ms-3 text-decoration-none text-reset fs-3">
          {process.env.SITE_NAME}
        </a>
      </Link>
    </div>
  )
}

export default Nav
