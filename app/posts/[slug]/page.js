import Post from '@/components/Post'
import React from 'react'

async function PostSlug({ params }) {
    return (
      <>
        <Post params={params} />
      </>
    )
  }

export default PostSlug