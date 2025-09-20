"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock, Github, Chrome } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/profile",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8 border border-gray-700">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Bienvenido 👋</h1>
          <p className="text-gray-400 mt-2">Inicia sesión para continuar</p>
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
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

        {/* Email & Password */}
        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
