import Link from 'next/link'

export default function RootLayout () {
  return (
    <nav>
      <lu>
        <li>
          <Link href='/tienda'>Tienda</Link>
          <Link href='/tienda/categorias'>Categorias</Link>
          <Link href='/tienda/categorias/laptop'>Laptop</Link>
        </li>
      </lu>
    </nav>
  )
}
