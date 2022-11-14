import React from 'react'
import { useQuery } from '@apollo/client'

import Post from './Post'
import Loader from './Loader'

import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'

type Props = {
  // Optional topic prop
  topic?: string
}

function Feed({ topic }: Props) {
  // Query for all posts or posts by topic
  const { data, loading } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      })

  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic

  if (!posts || loading) return <Loader size={100} />

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
