// Node Modules
import React, { useState } from "react";

// Icons
import { ReactComponent as User } from "../../../assets/icons/user.svg";
import { ReactComponent as ExpandMore } from "../../../assets/icons/expandMore.svg";
import { ReactComponent as ExpandLess } from "../../../assets/icons/expandLess.svg";

const UserSetting = () => {
  const [expandIsClicked, setExpandIsClicked] = useState(false);
  const [switchIsClicked, setSwitchIsClicked] = useState(false);

  return (
    // Menu Bar
    <div
      className={`relative w-64 flex items-center flex-grow-1 flex-row
        ${
          !expandIsClicked
            ? "hover:border-1 hover:border-solid hover:border-primary hover:rounded"
            : "border-x-1 border-t-1 border-b-0 border-solid border-primary rounded-t"
        }`}
      role="menubar"
    >
      <div className="flex items-center font-bold ml-1.5 text-icons">
        <span className="h-header-buttons w-header-buttons z-30">
          <User />
        </span>
        <h4 className="ml-1.5">Username</h4>
        <button
          className="absolute h-11 border-0 bg-secondary right-1.5
                    cursor-pointer border-none outline-none z-20"
          onClick={() => setExpandIsClicked(!expandIsClicked)}
        >
          {!expandIsClicked ? <ExpandMore /> : <ExpandLess />}
        </button>
      </div>
      <div
        className="absolute top-12 right-[1.2px] w-full z-10 menu"
        aria-hidden={`${!expandIsClicked ? "true" : "false"}`}
        role="menuitem"
      >
        {/* Menu Content */}
        <div
          className={`w-full h-nav-dropdown absolute border-b-1 border-x-1  
              border-solid border-primary border-t-0 rounded-b bg-secondary
              hover:bg-primary
              ${
                !expandIsClicked ? "invisible opacity-0" : "visible opacity-1"
              }`}
        >
          <div
            className="flex items-center w-full h-header-buttons bg-transparent font-bold px-1.5 no-underline 
                    text-icons float-none text-left"
          >
            <h4 className="ml-14">Dark Mode</h4>
            {/* Dark Mode Switch */}
            <label
              className="h-switch w-switch flex items-center ml-10 relative"
              role="switch"
            >
              <input
                className="opacity-0 w-0 h-0 peer"
                type="checkbox"
                onChange={() => setSwitchIsClicked(!switchIsClicked)}
              />
              <span
                className="cursor-pointer duration-300 bg-switch absolute 
                          inset-0 rounded-full peer-checked:bg-switch-checked"
              >
                <span
                  className={`absolute w-switch-knot h-switch-knot
                              rounded-xl bg-secondary duration-300 left-1 bottom-1
                              ${
                                switchIsClicked && "translate-x-swtich-knot"
                              }`}
                ></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
