import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoSearch } from "react-icons/go";

interface SearchProps {
  setQuery: (val: {}) => void;
}

const Search: React.FC<SearchProps> = ({ setQuery }) => {
  const { category } = useParams();
  const [search, setSearch] = useState<string>("");
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);

  const placeholders = [
    `Search ${category === "movie" ? "movies" : "TV series"}...`,
    "Find your favorite genres...",
    "Discover trending shows...",
    "Explore top-rated content...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    setQuery({ search });
    setSearch("");
  };

  return (
    <form
      className="flex flex-row items-center justify-center py-4 lg:py-6 transition-all duration-300"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="py-2 px-4 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] rounded-full border-2 border-gray-300 outline-none shadow-sm focus:border-[#00FF40] focus:shadow-md transition-all duration-300 text-gray-700 dark:bg-gray-800 dark:text-primary dark:focus:border-[#00FF40] dark:placeholder-gray-400"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder={placeholders[placeholderIndex]}
      />
      <button
        type="submit"
        className="ml-2 p-2 rounded-full bg-transparent text-[#00FF40] hover:bg-[#00FF40] hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
      >
        <GoSearch className="text-xl" />
      </button>
    </form>
  );
};

export default Search;
