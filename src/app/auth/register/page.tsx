"use client";

import { useTransition } from "react";
import { registerUser } from "@/app/actions/auth";
import { Mail, Lock, User, Github, Chrome } from "lucide-react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await registerUser(formData);
      } catch (err: any) {
        alert(err.message || "Error en el registro");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8 border border-gray-700">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Crear cuenta ✨</h1>
          <p className="text-gray-400 mt-2">Regístrate para continuar</p>
        </div>

        {/* Social buttons */}
        <div className="flex  gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            <Chrome size={20} /> Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
          >
            <Github size={20} /> GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <span className="h-px w-1/2 bg-gray-800"></span>
          <span className="text-sm">o con</span>
          <span className="h-px w-1/2 bg-gray-800"></span>
        </div>
        {/* Form */}
        <form action={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {isPending ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
  );
}
