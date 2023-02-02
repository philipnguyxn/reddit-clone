// Node Modules
import React from "react";

// Componets
import Header from "../../components/Header/Header";
import PostSection from "./components/PostSection/PostSection";
import CreatePostSection from "./components/CreatePostSection/CreatePostSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="relative top-16 bg-primary w-full z-0">
        <div className="px-primary--x pt-primary--t">
          <div className="grid grid-cols-4 grid-rows-2">
            <CreatePostSection />
            <CommunitySection />
            <PostSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
