// app/profile/page.tsx
import { getUserSessionServer } from "@/auth/actions/serverSession";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getUserSessionServer();

  if (!user) redirect("/auth/login");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-800/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 space-y-10 border border-gray-700">
        {/* Header con avatar */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={user.image || "/default-avatar.png"}
            alt={user.name || "User avatar"}
            width={120}
            height={120}
            className="rounded-full border-4 border-yellow-500 shadow-xl"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              {user.name || "Usuario"}
            </h1>
            <p className="text-gray-300 mt-1">{user.email}</p>
            {user.age && <p className="text-gray-400 mt-1">Edad: {user.age}</p>}
          </div>
        </div>

        {/* Estadísticas del usuario */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Tu actividad</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-6 rounded-2xl text-center hover:scale-105 transition">
              <p className="text-3xl font-bold text-yellow-400">
                {user.favorites?.length ?? 0}
              </p>
              <p className="text-gray-300 mt-1">Favoritos</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-2xl text-center hover:scale-105 transition">
              <p className="text-3xl font-bold text-green-400">
                {user.savedMovies?.length ?? 0}
              </p>
              <p className="text-gray-300 mt-1">Guardadas</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-2xl text-center hover:scale-105 transition">
              <p className="text-3xl font-bold text-blue-400">
                {user.comments?.length ?? 0}
              </p>
              <p className="text-gray-300 mt-1">Comentarios</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-2xl text-center hover:scale-105 transition">
              <p className="text-3xl font-bold text-purple-400">0</p>
              <p className="text-gray-300 mt-1">Vistas</p>
            </div>
          </div>
        </section>

        {/* Botones de acción */}
        <section className="flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-yellow-500 text-black py-3 rounded-2xl font-semibold hover:bg-yellow-400 transition shadow-lg">
            Editar Perfil
          </button>
          <form action="/api/auth/signout" method="post" className="flex-1">
            <button className="w-full bg-red-600 py-3 rounded-2xl font-semibold hover:bg-red-500 transition shadow-lg">
              Cerrar Sesión
            </button>
          </form>
        </section>

        {/* Favoritos en carrusel */}
        {user.favorites && user.favorites.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Películas Favoritas</h2>
            <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 py-2">
              {user.favorites.map((movie) => (
                <div
                  key={movie.movie_id}
                  className="min-w-[150px] relative flex-shrink-0"
                >
                  <Link href={`movies-search/${movie.movie_id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.movie_poster}`}
                    alt={movie.movie_name}
                    width={150}
                    height={225}
                    className="rounded-xl shadow-lg hover:scale-105 transition"
                  />
                  <p className="mt-1 text-center text-sm">{movie.movie_name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
