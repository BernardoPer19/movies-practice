import { fetchFromTMDB, fetchSearch, fetchSearchByID } from "@/libs/MovioRequest";
import { MoviesType, ResultMovies } from "@/types/interfaces/movies";

export async function getPopularMovies(page = 1, category: string): Promise<MoviesType> {
  return fetchFromTMDB<MoviesType>(`/movie/${category}`, `&page=${page}`);
}

export async function getMoviesSearch(page: number, movie: string): Promise<MoviesType> {
  return fetchSearch<MoviesType>(page, movie)
}


export async function getMoviesSearchByID(id: number): Promise<ResultMovies> {
  return fetchSearchByID<ResultMovies>(id)
}




