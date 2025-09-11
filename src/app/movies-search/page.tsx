"use client";
import MovieSearchList from "@/components/movie-search/MovieSearchList";
import Search from "@/components/Search";
import SearchContextProvider from "@/context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const MovieSeachPage = () => {
  const queryClient = new QueryClient();
  return (
    <main className=" w-[1280px] m-auto">
      <SearchContextProvider>
        <QueryClientProvider client={queryClient}>
          <>
            <Search />
            <MovieSearchList />
          </>
        </QueryClientProvider>
      </SearchContextProvider>
    </main>
  );
};

export default MovieSeachPage;
