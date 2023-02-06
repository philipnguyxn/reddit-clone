// Node Modules
import React from "react";

// Data
import communities from "../../../../data/communities";

// Icons
import { ReactComponent as User } from "../../../../assets/icons/user.svg";

const CommunitySection = () => {
  return (
    <div className="col-span-1 row-span-2 block bg-secondary rounded">
      <div className="mt-4">
        <span className="text-center">
          <h2>Communities</h2>
        </span>
      </div>
      {/* Community List */}
      <ul className="mt-6 px-5 grid grid-cols-1 grid-rows-1 gap-3 list-none">
        {communities.map((community) => (
          <li key={community.id}>
            <div className="flex items-center">
              <span className="mr-1.5">
                <User />
              </span>
              <span>
                <h4>{community.name}</h4>
              </span>
            </div>
            <div
              className="w-full border-divider border-solid 
                      border-primary last:border-none"
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunitySection;
