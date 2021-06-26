import Post from '~/types/post'
import 'prism-themes/themes/prism-vsc-dark-plus.css'

type Props = {
  post: Post
}

const Content = ({ post }: Props) => {
  return <div className="py-4" dangerouslySetInnerHTML={{ __html: post.content }}></div>
}

export default Content
