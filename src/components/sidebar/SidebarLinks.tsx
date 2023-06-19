"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/src/context/SidebarContext";

type SidebarLinksProps = {
  title: string;
  icon: any;
  link: string;
  active?: any;
  className?: string;
};

const SidebarLinks = ({
  title,
  icon: Icon,
  link,
  className,
}: SidebarLinksProps) => {
  const pathname = usePathname();
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <Link
      onClick={toggleSidebar}
      className={`flex items-center gap-2  py-2 px-3 rounded-md hover:translate-x-1 transition mb-2
        ${
          pathname === link
            ? "bg-indigo-200/40 text-indigo-600"
            : "text-gray-700 hover:bg-[#F6F6F6]"
        }
        ${className}
      `}
      href={link}
    >
      <Icon set="two-tone" size={20} />
      <span className="text-sm">{title}</span>
    </Link>
  );
};

export default SidebarLinks;
