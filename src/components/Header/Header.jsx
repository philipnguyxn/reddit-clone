// Node Modules
import React from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/imgs/reddit-logo.svg";
import HomeButton from "../../assets/icons/HomeButton/HomeButton";
import DropdownButton from "../../assets/icons/DropdownButton/DropdownButton";

const Header = () => {
  return (
    <header
      className="h-16 w-full px-3 py-0 sticky inline-flex items-center
                 flex-grow-1 flex-row box-border bg-secondary border-b-1 
                 border-solid border-primary"
    >
      <span>
        <Logo />
      </span>
      <div className="flex items-center flex-grow-1 flex-row">
        <HomeButton slotProps={{
          className: "bg-icons"
        }}/>
        <div>Home</div>
        <DropdownButton />
      </div>
    </header>
  );
};

export default Header;
