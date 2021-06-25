import Post from '~/types/post'
import dayjs from 'dayjs'
import Link from 'next/link'

type Props = {
  post: Post
}

// text-gray-700 => rgba(74, 85, 104, var(--text-opacity)) => #4a5568

const PostListItem = ({ post }: Props) => {
  return (
    <div className="postListItem">
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a>
          {/* 記事タイトル */}
          <div className="text-xl">{post.title}</div>

          <div className="flex flex-row text-gray-600 font-normal">
            {/* 作成日 */}
            <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
              {dayjs(post.date).format('YYYY/MM/DD')}
            </time>
            {/* カテゴリ */}
            <span className="ml-2">{post.category}</span>
          </div>

          {/* 概要 */}
          <div className="text-gray-600 font-normal">{post.excerpt}</div>
        </a>
      </Link>
    </div>
  )
}

export default PostListItem
