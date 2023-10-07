import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "./layout/Dropdown";
import Card from "./layout/Card";
import SearchBar from "./SearchBar";

const Body = ({ loading, posts }) => {
  let countriesData = posts;
  const [country, setCountries] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");

  const filterCountries = country.filter((country) =>
    searchField
      ? country.name.common
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );
  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <SearchBar
            apiData={posts}
            search={(e) => setSearchField(e.target.value)}
          />
          <div>
            <DropDown searchByRegion={(e) => setRegion(e.target.value)} />
          </div>
        </div>
        <div className="home__grid">
          <Card countries={filterCountries} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Body;
