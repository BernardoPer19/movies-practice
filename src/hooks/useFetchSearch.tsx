"use client"
import { getMoviesSearch } from "@/service/movies";
import { useQuery } from "@tanstack/react-query";

export const useFetchSearch = (page: number, currentMovie: string) => {
  const getSearchMovies = useQuery({
    queryKey: ["moviesKey"],
    queryFn: () => getMoviesSearch(page, currentMovie),
  });

  return {getSearchMovies}
};
