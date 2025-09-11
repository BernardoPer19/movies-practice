import { fetchFromTMDB } from "@/libs/MovioRequest";
import { MoviesType } from "@/types/interfaces/movies";

export async function getPopularMovies(page = 1, category: string): Promise<MoviesType> {
  return fetchFromTMDB<MoviesType>(`/movie/${category}`, `&page=${page}`);
}