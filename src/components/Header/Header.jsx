// Node Modules
import React from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/imgs/redditLogo.svg";

// Components
import NavDropdown from "./components/NavDropdown/NavDropdown";
import SearchBar from "./components/SearchBar/SearchBar";
import UserSetting from "./components/UserSetting/UserSetting";

const Header = () => {
  return (
    <header
      className="h-16 w-full px-14 fixed z-50 flex items-center
                flex-grow-1 flex-row box-border bg-secondary border-b-1 
                border-solid border-primary"
    >
      <span className="mr-1.5">
        <Logo />
      </span>
      <NavDropdown />
      <SearchBar />
      <UserSetting />
    </header>
  );
};

export default Header;
