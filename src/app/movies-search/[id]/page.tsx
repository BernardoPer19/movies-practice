import { getMoviesSearchByID } from "@/service/movies";
import React from "react";
import { ResultMovies } from "@/types/interfaces/movies";
import FavoriteButton from "@/components/ui/FavoriteButton";
import Image from "next/image";
// import FavoriteButton from '@/components/movie-search/FavoriteButton';

interface Props {
  params: Promise<{ id: string }>;
}

const MoviePage = async ({ params }: Props) => {
  try {
    const { id } = await params; // conservamos la promesa
    const movie: ResultMovies = await getMoviesSearchByID(Number(id));

    if (process.env.NODE_ENV === "development") {
      console.log("Movie fetched:", movie);
    }

    if (!movie) {
      return (
        <div className="flex items-center justify-center h-screen text-red-500 font-bold text-xl">
          Película no encontrada
        </div>
      );
    }

    return (
      <main className="">
        <div className="min-h-screen  text-white p-6  md:p-12 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto rounded-xl ">
          {/* Poster */}
          {movie.poster_path && (
            <div className="md:w-1/3 flex justify-center items-start">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
                loading="lazy"
                width={380}
                height={380}
              />
            </div>
          )}

          {/* Info de la película */}
          <div className="md:w-2/3 flex flex-col justify-start gap-4 overflow-y-auto max-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              {movie.title}
            </h1>

            <p className="text-gray-100 leading-relaxed text-lg">
              {movie.overview}
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
              {movie.release_date && (
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-gray-200 font-semibold">
                  Estreno: {movie.release_date}
                </span>
              )}
              {movie.vote_average && (
                <span className="bg-yellow-500 px-3 py-1 rounded-lg font-bold text-gray-900 flex items-center gap-1">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
              )}
              {movie.popularity && (
                <span className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-gray-900">
                  Popularidad: {Math.round(movie.popularity)}
                </span>
              )}

              <span>
                <FavoriteButton movie={movie} />
              </span>
            </div>

            {movie.genre_ids && movie.genre_ids.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genre_ids.map((genre) => (
                  <span
                    key={genre}
                    className="bg-blue-600 px-2 py-1 rounded-md text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error: any) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-bold text-xl p-4">
        Ocurrió un error al cargar la película: {error.message}
      </div>
    );
  }
};

export default MoviePage;
