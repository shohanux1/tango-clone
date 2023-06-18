import Navbar from "@/src/components/navbar/Navbar";
import Sidebar from "@/src/components/sidebar/Sidebar";
import WorkflowHeader from "@/src/components/workflow/WorkflowHeader";
import { type } from "os";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <div className="sticky top-0 h-screen z-30">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 ">
        <Navbar />
        <WorkflowHeader />
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
