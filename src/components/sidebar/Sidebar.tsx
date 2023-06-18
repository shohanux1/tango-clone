"use client";

import React, { useContext } from "react";

//Components
import Input from "../input/Input";
import Button from "../button/Button";
import SidebarDropdown from "./SidebarDropdown";
import SidebarLinks from "./SidebarLinks";
import InviteModal from "../modal/InviteModal";

//Icons
import { BiSearch, BiPlus } from "react-icons/bi";
import { User, Folder, Star, People, Bookmark } from "react-iconly";

//Context
import { SidebarContext } from "@/src/context/SidebarContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "flex" : "-translate-x-full"
        } fixed flex-col inset-0 transition duration-300 md:flex md:flex-col md:translate-x-0 md:relative w-72 z-[5] border-r bg-white h-full`}
      >
        <div className="relative w-full mb-6 z-30">
          <SidebarDropdown />
        </div>

        <div
          className="
          px-4
          mb-4
        "
        >
          <Input className="w-full " icon={BiSearch} placeholder="Search" />
        </div>

        <div className="flex flex-col justify-between h-full px-4 pb-6">
          <div>
            <h1 className="text-xs font-medium text-gray-100 uppercase mb-2 ml-2">
              Main
            </h1>
            <SidebarLinks active title="Personal" icon={User} link="/home" />
            <SidebarLinks title="Shared with me" icon={Folder} link="/shared" />
            <SidebarLinks title="Starred" icon={Star} link="/starred" />
            <SidebarLinks title="Shared Workspace" icon={People} link="/team" />

            <hr className="my-3 border-gray-200" />
            <SidebarLinks title="Archived" icon={Bookmark} link="/archived" />
          </div>

          <div>
            <Button
              onClick={toggleModal}
              className="w-full"
              variant="secondary"
            >
              Invite Members
              <BiPlus size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div
        onClick={toggleSidebar}
        className={`${
          isSidebarOpen ? "fixed" : "hidden"
        } inset-0 bg-black bg-opacity-40 transition-opacity md:hidden z-[3]`}
      ></div>

      <InviteModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Sidebar;
