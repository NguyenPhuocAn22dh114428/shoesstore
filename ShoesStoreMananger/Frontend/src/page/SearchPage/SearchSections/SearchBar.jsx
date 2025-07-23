import React from "react";
import { searchbar } from "../../../assets/icons";

const SearchBar = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[34px] text-3xl font-semibold font-montserrat mb-2">
        Search Result
      </h1>
      <div className="relative w-full mb-7">
        <input
          type="text"
          placeholder="Enter Search..."
          className="w-full h-12 bg-gray-100 pl-12 pr-4 py-2 rounded-lg shadow-sm "
        />
        <img
          src={searchbar}
          alt="search icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
