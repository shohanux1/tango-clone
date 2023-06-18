import React from "react";
import { Popover } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Avatar from "../avatar/Avatar";
import Link from "next/link";

type NavmenuProps = {
  children?: React.ReactNode;
};

const Navmenu = ({ children }: NavmenuProps) => {
  return (
    <Popover>
      <Popover.Button className="flex items-center justify-center gap-2 cursor-pointer outline-none">
        {children}
      </Popover.Button>

      <Popover.Panel className="absolute right-0 z-10">
        <div className="flex flex-col gap-2 text-gray-100 text-sm w-52 bg-white mt-3 rounded-md shadow border py-2">
          <Link
            className="px-4 transition py-1 hover:text-gray-700 hover:bg-gray-200"
            href="/profile"
          >
            Profile Settings
          </Link>
          <Link
            className="px-4 transition py-1 hover:text-gray-700 hover:bg-gray-200"
            href="/profile"
          >
            Logout
          </Link>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default Navmenu;
