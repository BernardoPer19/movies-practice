This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

✅ Lista de Tareas SUUUPER completa para tu Wiki de Películas (Next.js)
🟢 Etapa 1 – Base React + Next

[x] Crear proyecto Next.js con TailwindCSS.
[x] Página Home con buscador y lista de películas populares (API fetch).
[x] Componente MovieCard con título, poster, año.
[] Input controlado para búsqueda.
[] Loading spinner y mensajes de error.
[]Paginación (siguiente/anterior).

🟡 Etapa 2 – Nivel Intermedio

[] Página dinámica /movie/[id] con detalle (sinopsis, rating, género).
[] Modal (Portal) para ver detalle sin salir de la lista.
[] Guardar favoritos en localStorage.
[] Página /favorites que muestra solo las guardadas.
[] Custom hook useMovies(query, page) para separar lógica de fetch.
[] Estado global con Context para manejar favoritos.
[] Añadir filtros: por género, año, rating.

🔵 Etapa 3 – Next.js Pro

[] Optimizar imágenes con next/image.
[] Metadata dinámica: cada película con su título en SEO.
[] Layout general con Header/Footer.
[] Layout anidado para /movie/[id].
[] loading.tsx y error.tsx para feedback de UI.
[] API Route /api/movies como proxy seguro a la API externa.
[] SSR para películas populares (carga inicial más rápida).
[] CSR para búsqueda (con estado del cliente).

🟣 Etapa 4 – Features Avanzadas

[] Infinite scroll en lugar de paginación.
[] Revalidación cada X segundos para populares (revalidate).
[] Autenticación con next-auth (login Google/GitHub).
[] Guardar favoritos en la cuenta del usuario autenticado (persistencia real).
[] Paralell/Intercepting routes: abrir /movie/[id] como modal sobre Home.
[] Dashboard de estadísticas (ej: películas más buscadas, favoritos más guardados).
[] Deploy en Vercel con SEO optimizado.