"use client";

import React, { useContext, useState } from "react";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import Avatar from "../avatar/Avatar";
import { SidebarContext } from "@/src/context/SidebarContext";
import Button from "../button/Button";
import WorkflowModal from "../modal/WorkflowModal";
import Dropdown from "../dropdown/Dropdown";

const links = [
  { href: "/profile", label: "Profile Settings" },
  { href: "/support", label: "Logout" },
];

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <WorkflowModal isOpen={isOpen} toggleModal={toggleModal} />
      <div className="flex items-center justify-between md:justify-end h-20 border-b px-4 w-full sticky top-0 bg-white z-[1]">
        <div className="flex items-center md:hidden">
          <button
            onClick={() => toggleSidebar()}
            className="flex items-center justify-center h-10 w-10 rounded-full text-2xl transition duration-200 hover:bg-slate-100"
          >
            <BiMenuAltLeft />
          </button>

          <button className="flex items-center justify-center h-10 w-10 rounded-full text-xl transition duration-200 hover:bg-slate-100">
            <BiSearch />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <Button onClick={toggleModal} variant="primary">
            New Workflow
          </Button>
          <Dropdown links={links}>
            <Avatar
              size="medium"
              alt="avatar"
              src="https://avatars.githubusercontent.com/u/25126281?v=4"
              className="cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
