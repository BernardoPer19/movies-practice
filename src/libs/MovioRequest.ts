// lib/tmdb.ts
const API_URL = "https://api.themoviedb.org/3";
// `https://api.themoviedb.org/3/movie/popular?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&page=1`
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

// services/movies.ts


