'use client'
import Link from 'next/link'

export default function PostCard ({ post }) {
  return (
    <div>
      <Link href={`posts/${post.id}`}>
      <h3>{`${post.id}. ${post.title}`}</h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={(e) => console.log(e)}>Click me!!!</button>
    </div>
  )
}
