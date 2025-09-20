"use client";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import React from "react";

const MovieSearchList = () => {
  const { data } = useFetchSearch(1, "attack on titan");

  return (
    <div>
      {data?.results.map((mov) => (
        <div key={mov.id}>
          <p>{mov.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchList;
