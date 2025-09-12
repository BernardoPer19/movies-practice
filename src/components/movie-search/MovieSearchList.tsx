"use client";

import { useFetchSearch } from "@/hooks/useFetchSearch";
import Link from "next/link";
import Image from "next/image";

interface Props {
  searchTerm: string;
  page: number;
  onPageChange: (page: number) => void;
}

export default function MovieSearchList({
  searchTerm,
  page,
  onPageChange,
}: Props) {
  const { data, isLoading } = useFetchSearch(page, searchTerm);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {data?.results?.map((mov: any) => (
          <div className="w-64 cursor-pointer" key={mov.id}>
            {mov.overview !== "" ? (
              <Link href={`/movie/${mov.id}`}>
                <Image
                  className="w-fit rounded shadow-lg hover:scale-105 transition-transform"
                  src={`https://image.tmdb.org/t/p/w500${
                    mov.poster_path ?? ""
                  }`}
                  alt={mov.title}
                  width={300}
                  height={450}
                  priority
                />
                <p className="mt-1 text-center">{mov.title}</p>
              </Link>
            ) : (
              <div
                onClick={() =>
                  alert("No hay información disponible para esta película")
                }
                className="cursor-not-allowed opacity-50"
              >
                <Image
                  className="w-fit rounded shadow-lg"
                  src={`https://image.tmdb.org/t/p/w500${
                    mov.poster_path ?? ""
                  }`}
                  alt={mov.title}
                  width={300}
                  height={450}
                  priority
                />
                <p className="mt-1 text-center">{mov.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
