// Node Modules
import React from "react";

// Icons
import { ReactComponent as ArrowUpward } from "../../../../assets/icons/arrowUpward.svg";
import { ReactComponent as ArrowDownward } from "../../../../assets/icons/arrowDownward.svg";
import { ReactComponent as UserPost } from "../../../../assets/icons/userPost.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/comment.svg";

const PostSection = () => {
  return (
    <>
      <div className="bg-secondary rounded flex flex-row">
        {/* Likes Section */}
        <div className="bg-likes-section w-likes-section p-likes-section">
          <div className="flex items-center flex-col">
            <button className="border-none cursor-pointer">
              <ArrowUpward />
            </button>
            <span className="font-bold">12</span>
            <button className="border-none cursor-pointer">
              <ArrowDownward />
            </button>
          </div>
        </div>
        {/* Posts */}
        <div className="relative p-post w-full">
          {/* Avatar + Created Time & user */}
          <div className="flex items-center mb-3">
            <span className="fill-primary mr-1 h-6">
              <UserPost />
            </span>
            <p>Posted by username 6 hours ago</p>
          </div>
          {/* Content */}
          <div className="relative left-content">
            <h2 className="mb-1">Title</h2>
            <p className="mb-2">Description</p>
          </div>
          {/* Divider */}
          <div
            className="w-full h-0 border-divider
                      border-solid border-primary mb-3"
          ></div>
          {/* Comments */}
          <button
            className="flex items-center border-none bg-secondary 
                      relative left-content cursor-pointer"
          >
            <Comment />
            <p className="font-primary font-bold ml-1">6.1k comments</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostSection;
