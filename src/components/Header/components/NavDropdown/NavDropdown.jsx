// Node Modules
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";

// Assets
import { ReactComponent as Home } from "../../../../assets/icons/home.svg";
import { ReactComponent as ExpandMore } from "../../../../assets/icons/expandMore.svg";
import { ReactComponent as ExpandLess } from "../../../../assets/icons/expandLess.svg";
import { ReactComponent as Add } from "../../../../assets/icons/add.svg";

const NavDropdown = () => {
  const [isClicked, setisClicked] = useState(false);
  const { pathname } = useLocation();

  return (
    // Menu Bar
    <div
      className={`relative w-64 flex items-center flex-grow-1 flex-row mr-1.5
          ${
            !isClicked
              ? "hover:border-1 hover:border-solid hover:border-primary hover:rounded"
              : "border-x-1 border-t-1 border-b-0 border-solid border-primary rounded-t"
          }`}
      role="menubar"
    >
      <div className="flex items-center font-bold ml-1.5 text-icons">
        <span className="h-header-buttons w-header-buttons z-30">
          {pathname === "/" ? <Home /> : <Add />}
        </span>
        <h4 className="ml-1.5">{pathname === "/" ? "Home" : "Create Post"}</h4>
        <button
          className="absolute h-11 border-0 bg-secondary right-1.5
                    cursor-pointer border-none outline-none z-20"
          onClick={() => setisClicked(!isClicked)}
        >
          {!isClicked ? <ExpandMore /> : <ExpandLess />}
        </button>
      </div>
      <div
        className="absolute top-12 right-[1.2px] w-full z-10"
        aria-hidden={`${!isClicked ? "true" : "false"}`}
        role="menuitem"
      >
        {/* Menu Content */}
        <div
          className={`w-full h-nav-dropdown absolute border-b-1 border-x-1  
              border-solid border-primary border-t-0 rounded-b bg-secondary
              hover:bg-primary
              ${!isClicked ? "invisible opacity-0" : "visible opacity-1"}`}
        >
          <NavLink
            to={pathname === "/" ? "/submit" : "/"}
            className="flex items-center w-full bg-transparent font-bold mx-1.5 no-underline 
                        text-icons float-none text-left"
          >
            <span className="h-header-buttons w-header-buttons">
              {pathname !== "/" ? <Home /> : <Add />}
            </span>
            <h4 className="ml-1.5">
              {pathname !== "/" ? "Home" : "Create Post"}
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
