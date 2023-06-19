"use client";

import { useState } from "react";
import Avatar from "../avatar/Avatar";
import CardsIcon from "./CardsIcon";
import { BiDotsHorizontalRounded, BiLinkAlt, BiStar } from "react-icons/bi";
import CardLoading from "./CardLoading";
import Dropdown from "../dropdown/Dropdown";

const links = [
  { href: "/account-settings", label: "Share & Export" },
  { href: "/support", label: "Guide Me" },
  { href: "/license", label: "Rename" },
  { href: "/sign-out", label: "Duplicate" },
  { href: "/sign-out", label: "Move to..." },
  { href: "/sign-out", label: "Archive" },
  { href: "/sign-out", label: "Analytics" },
];

type CardsProps = {
  loading?: boolean;
};

const Cards = ({ loading }: CardsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopover = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return <CardLoading />;
  }

  return (
    <div
      onMouseOut={() => setIsOpen(false)}
      className="w-full md:max-w-sm relative min-h-[320px] overflow-hidden border rounded-lg flex flex-col justify-between transition hover:shadow-lg group cursor-pointer"
    >
      <div
        className="
        flex-1
        bg-cover
        bg-center
        bg-no-repeat
        w-full
        transition
        hover:opacity-80
        cursor-pointer
      "
      >
        <img
          src="https://images.tango.us/workflows/1f78b31c-08d9-470d-bd4d-640e510766e5/steps/d71afbff-bdd5-4f5d-ba12-d3b1639c6faa/3818f211-f0a6-41a1-9902-829127c3aac0.png?mark-x=648&mark-y=254&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yODAmaD0xMDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
          alt="Picture of the author"
          className="w-full object-cover"
        />
      </div>

      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        }  absolute inset-0 bg-indigo-800 bg-opacity-80 h-[calc(100%-9rem)] transition duration-500 w-full group-hover:opacity-100`}
      >
        <div className=" flex items-center absolute right-4 top-4">
          <Dropdown links={links}>
            <CardsIcon
              onClick={handlePopover}
              size={24}
              icon={BiDotsHorizontalRounded}
            />
          </Dropdown>
          <CardsIcon className="rotate-45" size={20} icon={BiLinkAlt} />
          <CardsIcon size={18} icon={BiStar} />
        </div>

        <div className="flex items-center justify-center h-full">
          <h1 className="text-white font-semibold text-gray-100 px-4 py-5 text-center">
            0 Steps . 0 Views
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between h-36 border-t px-4 py-5">
        <h1
          className="
          font-semibold
          text-md
          text-gray-100
          transition
          cursor-pointer
        "
        >
          Steps to Find Latest Updates on Qatar Takeover of Manchester United
        </h1>

        <div className="flex items-center justify-between">
          <span
            className="
            text-sm
            text-gray-500
            transition
            cursor-pointer
          "
          >
            8 hours ago
          </span>

          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="h-4 w-4 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
