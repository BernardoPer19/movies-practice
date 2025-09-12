"use client";

import { ChangeEvent, FormEvent } from "react";

interface Props {
  value: string; 
  onChange: (val: string) => void; 
  setQuery: (val: string) => void; 
}

export default function Search({ value, onChange, setQuery }: Props) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 m-4">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Busca una película..."
        className="border px-2 py-1"
      />
      <button
        type="submit"
        className="bg-red-700 px-3 py-2 rounded-md text-white"
      >
        Buscar
      </button>
    </form>
  );
}
