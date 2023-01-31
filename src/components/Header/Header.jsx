// Node Modules
import React from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/imgs/redditLogo.svg";

// Components
import NavDropdown from "./components/NavDropdown/NavDropdown";
import SearchBar from "./components/SearchBar/SearchBar";

const Header = () => {
  return (
    <header
      className="h-16 w-full px-3 py-0 fixed flex items-center
                flex-grow-1 flex-row box-border bg-secondary border-b-1 
                border-solid border-primary"
    >
      <span className="ml-12">
        <Logo />
      </span>
      <NavDropdown />
      <SearchBar />
    </header>
  );
};

export default Header;
