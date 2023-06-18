import React from "react";
import WorkflowHeader from "@/src/components/workflow/WorkflowHeader";
import Cards from "@/src/components/cards/Boards";

const Home = () => {
  return (
    <div className="grid grid-cols-auto-fit gap-4">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default Home;
