import Link from "next/link";
import React from "react";

type OptionsProps = {
  active?: boolean;
  title: string;
  description: string;
};

const Options = ({ active, title, description }: OptionsProps) => {
  return (
    <Link
      href={"/"}
      className={`px-4 block py-2 mb-2 ${active ? "bg-slate-200" : "bg-white"}`}
    >
      <h1 className="text-sm font-medium text-gray-700 w-full">{title}</h1>
      <p className="text-xs text-gray-500 mt-1 font-normal w-full">
        {description}
      </p>
    </Link>
  );
};

export default Options;
