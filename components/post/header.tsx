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
      {/* 作成日 */}
      <time className="text-muted" dateTime={formattedDate.attribute}>
        {formattedDate.innerText}
      </time>

      {/* タイトル */}
      <h1>{post.title}</h1>
    </div>
  )
}

export default Header
