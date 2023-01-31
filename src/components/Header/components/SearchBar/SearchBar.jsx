// Node Modules
import React from "react";

// Icons
import { ReactComponent as Search } from "../../../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="w-search-bar bg-field ml-1.5 rounded-full 
                    border-1 border-solid border-primary
                  hover:border-field-hover">
      <form action="/search/" role="search" className="flex items-center w-full">
        <span className="fill-primary mx-3 h-header-buttons w-header-buttons">
          <Search />
        </span>
        <input
          type="text"
          className="w-full bg-field border-none focus:outline-none text-base 
                  text-primary mr-1.5"
          placeholder="Search Reddit"
        />
      </form>
    </div>
  );
};

export default SearchBar;
