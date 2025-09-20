import React from "react";
import Link from "next/link";
import LogoutButton from "../../auth/components/LogoutButton";
import { getUserSessionServer } from "@/auth/actions/serverSession";

const Navbar = async () => {
  const user = await getUserSessionServer();
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between mb-8">
      <div className="text-2xl font-bold tracking-wide">🎥 MovieApp</div>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-red-400 transition">
          Home
        </Link>
        <Link href="/movies-search" className="hover:text-red-400 transition">
          Movies
        </Link>
        <Link href="/favorites" className="hover:text-red-400 transition">
          Favorites
        </Link>
      </div>

      {/* Right Side (Search + Auth) */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Auth */}
        {!user ? (
          <div className="flex gap-3">
            <Link
              href="/auth/login"
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="relative">
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition">
              Profile ▼
            </button>
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 bg-gray-800 rounded shadow-lg w-40">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-700 transition"
              >
                My Account
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-700 transition"
              >
                Settings
              </Link>
              <LogoutButton  />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
