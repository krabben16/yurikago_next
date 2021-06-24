import Post from '~/types/post'

type Props = {
  post: Post
}

const PostContent = ({ post }: Props) => {
  return (
    <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }}></div>
  )
}

export default PostContent
