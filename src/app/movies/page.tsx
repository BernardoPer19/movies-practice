import MovieCard from "@/components/MovieCard";
import Search from "@/components/Search";
import { getPopularMovies } from "@/service/movies";

export default async function MoviesPage() {
  const movies = await getPopularMovies(1, "popular");

  return (
    <div className="m-auto w-[1280px]">
      <h1>Películas Populares</h1>
      <main >
        <MovieCard movies={movies} />
      </main>
    </div>
  );
}
