import Link from 'next/link'
import cst from '~/lib/constants'

const Nav = () => {
  return (
    <div className="py-5 d-flex align-items-center">
      <a href={cst.GITHUB_URL} target="_blank">
        <img
          className="rounded-circle"
          width="60"
          src={`https://github.com/${cst.GITHUB_ID}.png`}
        />
      </a>
      <Link href="/">
        <a className="ms-3 text-decoration-none text-reset fs-3">
          {cst.SITE_NAME}
        </a>
      </Link>
    </div>
  )
}

export default Nav
