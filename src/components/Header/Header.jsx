// Node Modules
import React from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/imgs/redditLogo.svg";

// Components
import NavDropdown from "./components/NavDropdown/NavDropdown";

const Header = () => {
  return (
    <header
      className="h-16 w-full px-3 py-0 sticky inline-flex items-center
                flex-grow-1 flex-row box-border bg-secondary border-b-1 
                border-solid border-primary"
    >
      <span className="ml-12 mr-1.5">
        <Logo />
      </span>
      <NavDropdown />
    </header>
  );
};

export default Header;
