// lib/tmdb.ts
const API_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB<T>(endpoint: string, query = ""): Promise<T> {
  const res = await fetch(
    `${API_URL}${endpoint}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-EN${query}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Error al llamar a TMDB: ${res.status}`);
  }

  return res.json();
}


export async function fetchSearch<T>(page: number, movie: string): Promise<T> {
  const res = await fetch(
    `${API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=es-ES&query=${movie}&page=${page}`,
    {
      next: { revalidate: 3600 },
    }
  );


  if (!res.ok) {
    throw new Error(`Error al llamar a TMDB: ${res.status}`);
  }

  return res.json();

}


// services/movies.ts


