// Node Modules
import React from "react";

// Data
import communities from "../../../../data/communities";

// Icons
import { ReactComponent as User } from "../../../../assets/icons/user.svg";

const CommunitySection = () => {
  return (
    <>
      <div className="mt-4">
        <span className="text-center">
          <h2>Communities</h2>
        </span>
      </div>
      {/* Community List */}
      <ul className="mt-6 px-5 list-none">
        {communities.map((community) => (
          <>
            <li key={community.id} className="w-full flex items-center mb-3">
              <span className="mr-1.5">
                <User />
              </span>
              <span>
                <h4>{community.name}</h4>
              </span>
            </li>
            <div
              className="w-full border-divider border-solid 
                  border-primary last:border-none mb-3"
            ></div>
          </>
        ))}
      </ul>
    </>
  );
};

export default CommunitySection;
