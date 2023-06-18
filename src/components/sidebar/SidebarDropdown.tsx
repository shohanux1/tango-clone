"use client";

import { Menu } from "@headlessui/react";
import Avatar from "../avatar/Avatar";
import { BiChevronDown, BiCheck } from "react-icons/bi";
import { Setting, TwoUsers, ShieldDone, Logout } from "react-iconly";
import DropdownLinks from "./DropdownLinks";

const submenuItems = [
  {
    icon: Setting,
    title: "Workspace Settings",
    link: "/workspace/create",
  },
  {
    icon: TwoUsers,
    title: "Invite Members",
    link: "/workspace/create",
  },
  {
    icon: ShieldDone,
    title: "Upgra to Pro",
    link: "/workspace/create",
  },
];

const SidebarDropdown = () => {
  return (
    <Menu>
      <Menu.Button
        className={
          "flex items-center justify-between gap-2 border-b w-full h-20  px-4"
        }
      >
        <div className="flex items-center gap-3">
          <Avatar
            size="small"
            alt="avatar"
            title="SW"
            className="cursor-pointer"
          />

          <span className="text-sm flex-1 font-medium">
            Shohanur's Workspace
          </span>
        </div>
        <BiChevronDown className="text-gray-100" size={20} />
      </Menu.Button>

      <Menu.Items>
        <div className="absolute top-24 left-3 text-xs font-medium border shadow px-4 py-3 rounded-md w-full bg-white">
          <h1 className=" text-gray-500 mb-4">Workspace Actions</h1>

          {submenuItems.map((item, index) => (
            <DropdownLinks
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          ))}

          <hr />
          <h1 className=" text-gray-500 py-3">shohanux@gmail.com</h1>
          <div
            className={
              "flex items-center justify-between h-fit rounded-md  w-full mb-3  text-gray-600 cursor-pointer"
            }
          >
            <Avatar
              size="small"
              alt="avatar"
              title="SW"
              className="cursor-pointer mr-2"
            />
            <span className="text-sm font-medium flex-1">
              Shohanur's Workspace
            </span>
            <span className="flex items-center justify-center text-2xl  h-8 w-8 transition rounded-full hover:bg-gray-100">
              <BiCheck />
            </span>
          </div>

          <hr className="py-3" />

          <DropdownLinks
            title="Sign Out"
            icon={Logout}
            link="/workspace/create"
          />
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default SidebarDropdown;
