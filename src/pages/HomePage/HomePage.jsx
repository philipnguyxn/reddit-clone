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
      <main className="relative top-16 bg-primary w-full h-screen z-0">
        <div className="px-primary--x pt-primary--t grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <CreatePostSection />
            <PostSection />
          </div>
          <div className="content-start	justify-start block bg-secondary rounded">
            <CommunitySection />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
