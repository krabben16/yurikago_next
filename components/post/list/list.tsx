import Post from '~/types/post'
import PostListItem from '~/components/post/list/listItem'

type Props = {
  posts: Post[]
}

const List = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default List
