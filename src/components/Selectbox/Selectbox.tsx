import React from "react";
import { Popover } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Options from "./Options";

const SelectBox = () => {
  return (
    <Popover>
      <div>
        <Popover.Button className="inline-flex w-36 justify-between rounded-md border border-gray-300 px-4 text-gray-100 py-2 text-sm focus:ring-2 focus:ring-indigo-200 focus:border-primary hover:bg-opacity-30 ">
          Role
          <BiChevronDown
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Popover.Button>
      </div>

      <Popover.Panel className="absolute max-w-sm w-full right-6 z-10">
        <div className="w-96 bg-white mt-3 rounded-md py-3 shadow-md border">
          <Options
            title="Creator (Admin)"
            description="Can create and edit workflows, and manage workspace members."
            active={true}
          />
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default SelectBox;
