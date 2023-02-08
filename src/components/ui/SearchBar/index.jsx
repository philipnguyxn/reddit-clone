// Node Modules
import React, { useState } from "react";

// Icons
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import { ReactComponent as Cancel } from "../../../assets/icons/cancel.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Runs when the users press enter or search icon is clicked
   */
  const handleSubmit = () => {};

  return (
    <div
      className="w-search-bar bg-field mr-1.5 px-6 rounded-full 
                border-1 border-solid border-primary
              hover:border-field-hover"
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex items-center w-full"
      >
        <button className="bg-field border-none w-header-buttons h-header-buttons mr-1">
          <span className="fill-primary h-header-buttons w-header-buttons">
            <Search />
          </span>
        </button>
        <input
          type="text"
          className={`w-full bg-field border-none focus:outline-none text-base 
          text-primary ${searchTerm && "text-black"}`}
          placeholder="Search Reddit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="bg-field border-none w-header-buttons h-header-buttons">
            <span className="fill-primary h-header-buttons w-header-buttons">
              <Cancel />
            </span>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
