import Link from 'next/link'

const Nav = () => {
  return (
    <div className="py-3 d-flex align-items-center">
      <img
        className="rounded-circle"
        width="60"
        src={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_ID}.png`}
      />
      <Link href="/">
        <a className="ms-3 text-decoration-none text-reset fs-3">
          {process.env.NEXT_PUBLIC_SITE_NAME}
        </a>
      </Link>
    </div>
  )
}

export default Nav
