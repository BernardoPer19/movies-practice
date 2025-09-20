"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from '@/components/Search';
import MovieSearchList from '@/components/movie-search/MovieSearchList';


const queryClient = new QueryClient();

export default function MovieSearchPage() {
  const [query, setQuery] = useState("batman");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  return (
    <main className="max-w-6xl mx-auto px-4">
      <QueryClientProvider client={queryClient}>
        <Search
          value={searchTerm}
          onChange={setSearchTerm}
          setQuery={setQuery}
        />
        <MovieSearchList
          searchTerm={query}
          page={page}
          onPageChange={setPage}
        />
      </QueryClientProvider>
    </main>
  );
}
