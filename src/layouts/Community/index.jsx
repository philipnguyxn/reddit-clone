// Node Modules
import React from "react";

// Icons
import { ReactComponent as User } from "../../assets/icons/user.svg";

const Community = ({ name }) => {
  return (
    <>
      <li className="w-full flex items-center mb-3">
        <span className="mr-1.5">
          <User />
        </span>
        <span>
          <h4>{name}</h4>
        </span>
      </li>
      <div
        className="w-full border-divider border-solid 
                  border-primary last:border-none mb-3"
      ></div>
    </>
  );
};

export default Community;
