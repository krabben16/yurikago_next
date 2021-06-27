import Post from '~/types/post'
import 'github-markdown-css'

type Props = {
  post: Post
}

const Content = ({ post }: Props) => {
  return (
    <div
      className="py-3 markdown-body"
      dangerouslySetInnerHTML={{ __html: post.content }}
    ></div>
  )
}

export default Content
