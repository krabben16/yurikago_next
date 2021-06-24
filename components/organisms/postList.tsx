import Post from '~/types/post'
import PostListItem from '~/components/molecules/postListItem'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {posts.map((post) => (
        <PostListItem key={ post.slug } post={ post }/>
      ))}
    </div>
  )
}

export default PostList
