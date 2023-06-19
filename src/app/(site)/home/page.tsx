import React from "react";
import Cards from "@/src/components/cards/Cards";

const Home = () => {
  return (
    <div className="grid grid-cols-auto-fit gap-4">
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default Home;
