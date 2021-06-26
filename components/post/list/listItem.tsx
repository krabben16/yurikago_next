import Post from '~/types/post'
import dayjs from 'dayjs'
import Link from 'next/link'

type Props = {
  post: Post
}

const ListItem = ({ post }: Props) => {
  return (
    <div>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a>
          {/* 記事タイトル */}
          <div>{post.title}</div>

          <div>
            {/* 作成日 */}
            <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
              {dayjs(post.date).format('YYYY/MM/DD')}
            </time>
            {/* カテゴリ */}
            <span>{post.category}</span>
          </div>

          {/* 概要 */}
          <div>{post.excerpt}</div>
        </a>
      </Link>
    </div>
  )
}

export default ListItem
