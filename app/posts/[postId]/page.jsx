const URL = 'https://jsonplaceholder.typicode.com/posts'

const getPost = async (url, id) => {
  const res = await fetch(`${url}/${id}`)
  const data = await res.json()
  return data
}

export default async function Page ({ params }) {
  const postId = params.postId
  const post = await getPost(URL, postId)
  const { id, title, body } = post
  return (
    <div>
      <h1>{id} {title}</h1>
      <p>{body}</p>
    </div>
  )
}
