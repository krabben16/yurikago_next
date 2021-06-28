import PostListItem from '~/components/post/list/listItem'
import Post from '~/types/post'

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
