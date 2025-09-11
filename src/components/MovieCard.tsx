import { MoviesType } from "@/types/interfaces/movies";
import React from "react";

interface Props {
  movies: MoviesType;
}

const MovieCard = ({ movies }: Props) => {
  return (
    <div className="flex flex-wrap gap-5">
      {movies.results.map((movie) => (
        <div className="flex flex-col w-[300px]" key={movie.id}>
          <img
            className="w-fit"
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <p>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
