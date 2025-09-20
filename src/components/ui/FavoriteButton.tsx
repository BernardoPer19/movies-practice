"use client";

import { addFavorite } from "@/app/actions/favorites";
import { ResultMovies } from "@/types/interfaces/movies";
import React, {  useState } from "react";

interface FavoriteButtonProps {
  movie: Pick<ResultMovies, "id" | "title" | "poster_path">;
  initialIsFavorite?: boolean; // se puede pasar desde el servidor
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  movie,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await addFavorite(movie);
      if (res.error) {
        console.error(res.error);
      } else {
        setIsFavorite(!isFavorite); // alterna corazón lleno/vacío
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full font-semibold
        transition-transform transform hover:scale-105
        ${
          isFavorite
            ? "bg-red-500 text-white shadow-lg"
            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
        }
      `}
    >
      {isFavorite ? "❤️ Favorito" : "🤍 Agregar"}
    </button>
  );
};

export default FavoriteButton;
