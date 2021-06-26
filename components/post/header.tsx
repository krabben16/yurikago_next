import Post from '~/types/post'
import dayjs from 'dayjs'

type Props = {
  post: Post
}

const Header = ({ post }: Props) => {
  const formattedDate = {
    attribute: dayjs(post.date).format('YYYY-MM-DD'),
    innerText: dayjs(post.date).format('YYYY/MM/DD'),
  }
  return (
    <div className="py-3">
      {/* タイトル */}
      <h1>{post.title}</h1>

      {/* 作成日 */}
      <div>
        <span>Created:</span>
        <span className="ms-1"><time dateTime={formattedDate.attribute}>{formattedDate.innerText}</time></span>
      </div>

      {/* カテゴリ */}
      <div>
        <span>Category:</span>
        <span className="ms-1">{post.category}</span>
      </div>

      {/* タグ */}
      <div>
        <span>Tags:</span>
        <span className="ms-1">
          {post.tags.join(", ")}
        </span>
      </div>
    </div>
  )
}

export default Header
