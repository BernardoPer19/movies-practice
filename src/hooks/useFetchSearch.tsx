"use client";
import { getMoviesSearch } from "@/service/movies";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useFetchSearch = (page: number, currentMovie: string) => {
  return useQuery({
    queryKey: ["movies", currentMovie, page],
    queryFn: () => getMoviesSearch(page, currentMovie),
    placeholderData: keepPreviousData, 
    staleTime: 1000 * 60 * 5,
  });
};
