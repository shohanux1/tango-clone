"use client";

import { Fragment } from "react";
import { Menu } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  links: {
    href: string;
    label: string;
  }[];
};

const Dropdown = ({ children, links }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>{children}</Menu.Button>
      <Menu.Items
        className={
          "bg-white border absolute right-0 shadow-md rounded-md flex flex-col w-52 py-4"
        }
      >
        {links.map((link) => (
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? "bg-gray-200 text-black" : "bg-white text-black"
                } px-4 py-2 text-sm text-gray-100`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
