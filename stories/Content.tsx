import React from 'react'
import Post from '@/types/post'
import 'github-markdown-css'

interface ContentProps {
  post: Post
}

export const Content = ({ post }: ContentProps) => (
  <div
    className="py-3 markdown-body"
    dangerouslySetInnerHTML={{ __html: post.content || '' }}
  ></div>
)
