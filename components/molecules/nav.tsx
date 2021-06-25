import Link from 'next/link'
import cst from '~/lib/constants'

const Nav = () => {
  return (
    <div className="py-4 nav flex flex-row">
      <img
        className="rounded-full h-12 w-12"
        src={`https://github.com/${cst.GITHUB_ID}.png`}
      />
      <Link href="/">
        <a className="ml-4 text-2xl my-auto">{cst.SITE_NAME}</a>
      </Link>
    </div>
  )
}

export default Nav
