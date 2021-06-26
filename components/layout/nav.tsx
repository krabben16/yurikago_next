import Link from 'next/link'
import cst from '~/lib/constants'

const Nav = () => {
  return (
    <div>
      <img src={`https://github.com/${cst.GITHUB_ID}.png`} />
      <Link href="/">
        <a>{cst.SITE_NAME}</a>
      </Link>
    </div>
  )
}

export default Nav
