"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-500 transition"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
