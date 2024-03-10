import Link from 'next/link'

export default function RootLayout ({ children }) {
  return (
    <main>
    <nav>
      <lu>
        <li>
          <Link href='/tienda'>Tienda</Link>
          <Link href='/tienda/categorias'>Categorias</Link>
          <Link href='/tienda/categorias/laptop'>Laptop</Link>

        </li>
      </lu>
    </nav>
    {children}
    </main>
  )
}
