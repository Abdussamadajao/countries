import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ search, searchByRegion }) => {
  return (
    <form className="search">
      <AiOutlineSearch className="search__icon" />
      <input
        type="text"
        className="search__input"
        placeholder="Search for a country..."
        onChange={search}
      />
    </form>
  );
};

export default SearchBar;
