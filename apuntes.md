# Curso NextJs Fazt

## App router

Sistema de enrutamiento mediante carpetas, cada carpeta que esté dentro del app router será una ruta.

### page.jsx

Archivo que será detectado como la web de ese path (directorio)

### layout.jsx

Archivo que servirá de plantilla para los page.jsx.

### Anidamiento

Las carpetas que están dentro de otra servirán cmo rutas anidadas --> `/category/product`, Los layouts también heredaras los elementos que contenga un layout de orden superior.

### Link

Elemento para la navegación, que reemplza a `<a>`, ua que evita que la página reinicie. 

```jsx
Import Link from 'next/link'
<Link href='/'>Home</Link>
```

## Metadatos