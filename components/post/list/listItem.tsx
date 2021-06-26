import Post from '~/types/post'
import dayjs from 'dayjs'
import Link from 'next/link'

type Props = {
  post: Post
}

const ListItem = ({ post }: Props) => {
  const formattedDate = {
    attribute: dayjs(post.date).format('YYYY-MM-DD'),
    innerText: dayjs(post.date).format('YYYY/MM/DD'),
  }
  return (
    <div className="py-3">
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a className="text-decoration-none text-reset">
          {/* 記事タイトル */}
          <div className="fw-bold fs-5">{post.title}</div>

          <div className="text-muted">
            {/* 作成日 */}
            <span><time dateTime={formattedDate.attribute}>{formattedDate.innerText}</time></span>
            {/* カテゴリ */}
            <span className="ms-1">{post.category}</span>
          </div>

          {/* 概要 */}
          <div className="text-muted">{post.excerpt}</div>
        </a>
      </Link>
    </div>
  )
}

export default ListItem
