import Posts from '../page'
import { Suspense } from 'react'
const URL = 'https://jsonplaceholder.typicode.com/posts'

const getPost = async (url, id) => {
  const res = await fetch(`${url}/${id}`)
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return data
}

export default async function Page ({ params }) {
  const postId = params.postId
  const post = await getPost(URL, postId)
  const { id, title, body } = post
  return (
    <div>
      <Suspense fallback={
        <div>Cargando publicaciones ...</div>
      }>
      <Posts />
      </Suspense>
      <h1>{id} {title}</h1>
      <p>{body}</p>

      <h2>Otras publicaciones</h2>
    </div>
  )
}
