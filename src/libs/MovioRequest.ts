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


// https://api.themoviedb.org/3/movie/1208117?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES
export async function fetchSearchByID<T>(id: number): Promise<T> {
  const res = await fetch(
    `${API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=es-ES`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Error al llamar a TMDB: ${res.status}`);
  }
  return res.json();

}
