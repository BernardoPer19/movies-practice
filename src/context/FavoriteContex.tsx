"use client";
import { ResultMovies } from "@/types/interfaces/movies";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ChildrenType {
  children: ReactNode;
}

interface FavoritesType {
  favId: string;
  movieId: number;
  movieName: string;
  movieDate: string;
  moviePoster: string;
}

interface ContextTypes {
  favorites: FavoritesType[];
  setFavorites: React.Dispatch<SetStateAction<FavoritesType[]>>;
}

export const FavoriteContext = createContext<ContextTypes | undefined>(
  undefined
);

const FavoriteContextProvider = ({ children }: ChildrenType) => {
  const [favorites, setFavorites] = useState(() => {
    // lazy init, only runs in browser
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favorites") ?? "[]");
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: ResultMovies): void =>
    setFavorites((prev: FavoritesType[]) => [
      ...prev.filter((m: FavoritesType) => m.movieId !== movie.id),
      {
        favId: crypto.randomUUID(),
        movieId: movie.id,
        movieName: movie.title,
        movieDate: movie.release_date,
        moviePoster: movie.poster_path,
      } as FavoritesType,
    ]);

  const removeFavorite = (id: string) =>
    setFavorites((prev: FavoritesType[]) =>
      prev.filter((m: FavoritesType) => m.favId !== id)
    );

  const value = { favorites, setFavorites };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

export const useFavoriteContext = () => {
  const favoriteContext = useContext(FavoriteContext);
  if (!favoriteContext) {
    throw new Error(
      "No se puede usar el context, asegurate que exista 'FavoriteContext' dentro un useContext, ademas mira si los estas usando xd"
    );
  }

  return favoriteContext;
};
