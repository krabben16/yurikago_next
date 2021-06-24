import Post from '~/types/post'
import dayjs from 'dayjs'

type Props = {
  post: Post
}

const PostHeader = ({ post }: Props) => {
  return (
    <div>
      {/* タイトル */}
      <h1 className="text-4xl">{ post.title }</h1>

      {/* 作成日 */}
      <div className="flex flex-row">
        <span className="mr-2">Created:</span>
        <time dateTime={ dayjs(post.date).format('YYYY-MM-DD') }>{ dayjs(post.date).format('YYYY/MM/DD') }</time>
      </div>

      {/* カテゴリ */}
      <div className="flex flex-row">
        <span className="mr-2">Category:</span>
        <span>
          { post.category }
        </span>
      </div>

      {/* タグ */}
      <div className="flex flex-row">
        <span className="mr-2">Tags:</span>
        {post.tags.map((tagName, k) => (
          <span key={ k } className={ k > 0 ? "ml-2" : "" }>
            { tagName }
          </span>
        ))}
      </div>
    </div>
  )
}

export default PostHeader
