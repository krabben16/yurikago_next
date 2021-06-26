import Post from '~/types/post'

type Props = {
  post: Post
}

const Content = ({ post }: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: post.content }}
    ></div>
  )
}

export default Content
