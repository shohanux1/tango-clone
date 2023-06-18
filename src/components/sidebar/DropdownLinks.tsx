import Link from "next/link";
import { Menu } from "@headlessui/react";

type DropdownLinksProps = {
  icon?: any;
  title: string;
  link: string;
};

const DropdownLinks = ({ icon: Icon, title, link }: DropdownLinksProps) => {
  return (
    <Menu.Item>
      <Link
        href={link}
        className="flex items-center space-x-2 cursor-pointer mb-3"
      >
        <span>
          <Icon set="two-tone" size={16} />
        </span>
        <span>{title}</span>
      </Link>
    </Menu.Item>
  );
};

export default DropdownLinks;
