"use client";

import React, { useState } from "react";
import Button from "../button/Button";
import FolderModal from "../modal/FolderModal";
import { usePathname } from "next/navigation";

const SubHeader = () => {
  const pathname = usePathname().split("/")[1];
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-3xl font-medium text-slate-700 capitalize">
          {pathname === "home" ? "Personal" : pathname}
        </h1>
        <Button onClick={toggleModal} variant="secondary">
          New Folder
        </Button>
        <FolderModal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default SubHeader;
