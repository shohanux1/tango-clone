import React from "react";
import { Popover } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Options from "./Options";

const Selectbox = () => {
  return (
    <Popover>
      <Popover.Button>
        <div className="flex flex-col items-start">
          <label
            className="text-sm font-medium text-gray-700 mb-1.5"
            htmlFor="options-menu"
          >
            Role
          </label>
          <span
            className="
          flex
          items-center
          justify-between
          gap-2
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          transition
          duration-200
          bg-white
          hover:bg-gray-200
          text-gray-600
          border
          border-gray-300
          cursor-pointer
        "
            id="options-menu"
          >
            Creator (Admin)
            <BiChevronDown className="text-gray-100" size={20} />
          </span>
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute max-w-sm w-full right-0 z-10">
        <div className="w-96 bg-white mt-3 rounded-md py-3 shadow-md border">
          <Options
            title="Creator (Admin)"
            description="Can create and edit workflows, and manage workspace members."
            active
          />
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default Selectbox;
