import Post from '~/types/post'
import PostListItem from '~/components/molecules/postListItem'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default PostList
