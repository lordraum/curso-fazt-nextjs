import PostCard from '@/components/post_card'

const URL = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  /* await new Promise((resolve) => setTimeout(resolve, 3000)) */
  return data
}

export default async function Posts () {
  const posts = await getPosts(URL)
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  )
}
