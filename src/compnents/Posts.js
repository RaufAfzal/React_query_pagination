import React from 'react'

const Posts = ({post}) => {
  return (
    <article>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
        <p> Post ID: {post.id} </p>

    </article>
  )
}

export default Posts
