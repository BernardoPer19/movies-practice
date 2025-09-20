"use server"

import { getUserSessionServer } from "@/auth/actions/serverSession"
import { redirect } from 'next/navigation';

import { cookies } from "next/headers"
import prisma from '@/libs/prisma';
import { revalidatePath } from "next/cache";
import { MoviesType, ResultMovies } from "@/types/interfaces/movies";

export const addFavorite2 = async (movieId: number) => {

    const cookieStore = await cookies()
    const current = JSON.parse(cookieStore.get("favorites")?.value ?? "[]")

    if (!current.includes(movieId)) current.push(movieId);
    cookieStore.set("favorites", JSON.stringify(current));

}


export const addFavorite = async (
    movie: Pick<ResultMovies, "id" | "title" | "poster_path">
) => {
    const user = await getUserSessionServer();

    if (!user?.id) return { error: "No estás logueado" };
    if (!movie.id) return { error: "Falta el id de la película" };

    try {
        const exists = await prisma.favoriteMovie.findFirst({
            where: { user_id: user.id, movie_id: movie.id }
        });
        if (exists) return { message: "Ya está en favoritos" };

        const favorite = await prisma.favoriteMovie.create({
            data: {
                user_id: user.id,
                movie_name: movie.title,
                movie_poster: movie.poster_path,
                movie_id: movie.id,
            },
        });

        revalidatePath(`/movies-search/${movie.id}`);
        return { favorite };
    } catch (error) {
        console.error("Error al añadir favorito:", error);
        return { error: "Error añadiendo a favoritos" };
    }
};

export const isFavorite = async ( movieId: Pick<ResultMovies, "id">): Promise<any> => {
    const user = await getUserSessionServer();

    if (!user?.id) return { error: "No estás logueado" };
    



}