import Post from '~/types/post'
import dayjs from 'dayjs'

type Props = {
  post: Post
}

const Header = ({ post }: Props) => {
  return (
    <div>
      {/* タイトル */}
      <h1>{post.title}</h1>

      {/* 作成日 */}
      <div>
        <span>Created:</span>
        <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
          {dayjs(post.date).format('YYYY/MM/DD')}
        </time>
      </div>

      {/* カテゴリ */}
      <div>
        <span>Category:</span>
        <span>{post.category}</span>
      </div>

      {/* タグ */}
      <div>
        <span>Tags:</span>
        {post.tags.map((tagName, k) => (
          <span key={k} className={k > 0 ? 'ml-2' : ''}>
            {tagName}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Header
