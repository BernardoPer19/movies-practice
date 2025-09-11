"use client";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import React from "react";

const MovieSearchList = () => {
  const { getSearchMovies } = useFetchSearch(1, "attack on titan");

  return (
    <div>
      {getSearchMovies.data?.results.map((mov) => (
        <div key={mov.id}>
          <p>{mov.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchList;
