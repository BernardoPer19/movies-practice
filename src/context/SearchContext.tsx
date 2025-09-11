"use client";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ChildrenType {
  children: ReactNode;
}

interface ContextTypes {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ContextTypes | undefined>(undefined);

const SearchContextProvider = ({ children }: ChildrenType) => {
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const value = { query, setQuery };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const useSearchContext = () => {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error(
      "No se puede usar el context, asegurate que exista 'SearchContext' dentro un useContext, ademas mira si los estas usando xd"
    );
  }

  return searchContext;
};
