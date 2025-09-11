"use client";
import { useSearchContext } from "@/context/SearchContext";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import React from "react";

const MovieSearchList = () => {
  const { query, setQuery } = useSearchContext();

  const { getSearchMovies } = useFetchSearch(1, "batman");

  return (
    <div>
      {
        <div className="flex flex-wrap gap-5">
          {getSearchMovies.data?.results?.map((mov) => (
            <div className="w-64" key={mov.id}>
              <img
                className="w-fit"
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                alt={mov.title}
              />
              <p>{mov.title}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default MovieSearchList;
