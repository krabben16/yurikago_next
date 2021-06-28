import { DiscussionEmbed } from 'disqus-react'
import Post from '~/types/post'

type Props = {
  post: Post
}

const Comment = ({ post }: Props) => {
  const disqusConfig = {
    url: `${process.env.FRONT_URL}/posts/${post.slug}`,
    identifier: post.slug,
    title: post.title,
    language: 'ja',
  }
  return (
    <div className="py-3">
      <DiscussionEmbed
        shortname={process.env.DISQUS_SHORTNAME}
        config={disqusConfig}
      />
    </div>
  )
}

export default Comment
