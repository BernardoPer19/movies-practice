import { getPopularMovies } from "@/service/movies";

export default async function MoviesPage() {

  const movies = await getPopularMovies(1, "popular");

  return (
    <div className="m-auto w-[1280px]">
      <h1>Películas Populares</h1>
      <main className="flex flex-wrap gap-5">
        {movies.results.map((movie) => (
          <div className="flex flex-col w-[300px]" key={movie.id}>
            <img
            className="w-fit"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <p>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}
