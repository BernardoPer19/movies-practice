"use client";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="flex gap-2 m-4" action="">
        <input type="text" className="border" onChange={handleInputChange} />

        <button className="bg-red-700 px-3 py-2 rounded-md">Buscar</button>
      </form>
    </div>
  );
};

export default Search;
