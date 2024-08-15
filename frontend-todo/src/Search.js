import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div class="relative z-0 m-5 mr-5 bg-white p-2 border rounded-2xl px-2">
      <input
        type="text"
        className="block py-2 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        id="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
