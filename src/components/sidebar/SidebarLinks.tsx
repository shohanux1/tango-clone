"use client";

import Link from "next/link";
import React from "react";

type SidebarLinksProps = {
  title: string;
  icon: any;
  link: string;
  active?: boolean;
};

const SidebarLinks = ({
  title,
  icon: Icon,
  link,
  active,
}: SidebarLinksProps) => {
  return (
    // sidebar link component
    <Link
      className={`flex items-center gap-2  py-2 px-3 rounded-md hover:translate-x-1 transition mb-2
        ${
          active
            ? "bg-indigo-200/40 text-indigo-600"
            : "text-black/80 hover:bg-[#F6F6F6]"
        }
      `}
      href={link}
    >
      <Icon set="bulk" size={20} />
      <span className="text-sm">{title}</span>
    </Link>
  );
};

export default SidebarLinks;
