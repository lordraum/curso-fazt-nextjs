import Link from 'next/link'

const links = [
  {
    path: '/',
    pageName: 'Home'
  },
  {
    path: '/about',
    pageName: 'About'
  },
  {
    path: '/tienda',
    pageName: 'Tienda'
  }
]

export default function NavBar () {
  return (
    <nav>
    <ul>
      <li>
        {
        links.map(({ path, pageName }) =>
          <Link key={pageName} href={path}>{pageName}</Link>
        )
        }
      </li>
    </ul>
  </nav>

  )
}
