// Node Modules
import React from "react";

// Componets
import Header from "../../components/Header/Header";
import PostSection from "./components/PostSection/PostSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="relative top-16 bg-primary w-full z-0">
        <PostSection />
      </main>
    </>
  );
};

export default HomePage;
