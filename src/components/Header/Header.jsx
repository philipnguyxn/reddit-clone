// Node Modules
import React, { useState } from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/imgs/redditLogo.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as ExpandMore } from "../../assets/icons/expandMore.svg";
import { ReactComponent as ExpandLess } from "../../assets/icons/expandLess.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className="h-16 w-full px-3 py-0 sticky inline-flex items-center
                 flex-grow-1 flex-row box-border bg-secondary border-b-1 
                 border-solid border-primary"
    >
      <span>
        <Logo />
      </span>
      {!isActive ? (
        <div
          className="flex items-center flex-grow-1 flex-row hover:border-1 
                    hover:border-solid hover:border-primary hover:rounded"
        >
          <span className="h-header-buttons w-header-button">
            <Home />
          </span>

          <span className="font-bold mx-1.5">Home</span>
          <button
            className="h-header-buttons w-header-buttons border-0 bg-secondary"
            onClick={() => setIsActive(!isActive)}
          >
            <ExpandMore />
          </button>
        </div>
      ) : (
        <div
          className="block top-2 z-100 bg-secondary hover:border-1 
                    focus:border-solid focus:border-primary focus:rounded"
        >
          <div className="flex items-center flex-row">
            <span className="h-header-buttons w-header-button">
              <Home />
            </span>
            <span className="font-bold mx-1.5">Home</span>
            <button
              className="h-header-buttons w-header-buttons border-0 bg-secondary"
              onClick={() => setIsActive(!isActive)}
            >
              <ExpandLess />
            </button>
          </div>
          <div className="flex items-center flex-row">
            <span className="h-header-buttons w-header-button">
              <Add />
            </span>
            <span className="font-bold mx-1.5">Create Post</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
