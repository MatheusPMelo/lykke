import React, { FC } from "react";

import Logo from "../assets/img/logo.png";

const menuItems = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "SERVICES",
    path: "/services",
  },
  {
    name: "TEAM",
    path: "/team",
  },
  {
    name: "BLOG",
    path: "/blog",
  },
];

interface IMenuItems {
  name: string;
  path: string;
}

const MenuItem: FC<IMenuItems> = ({ name, path }) => (
  <li>
    <a
      className="text-white opacity-50 transition-all duration-300 hover:opacity-100"
      href={path}
    >
      {name}
    </a>
  </li>
);

const BtnContact: FC<IMenuItems> = ({ name, path }) => (
  <a
    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium text-base"
    href={path}
  >
    {name}
  </a>
);
const Header: React.FC = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center py-4">
      <a href="/">
        <img src={Logo} className="w-32 h-auto" />
      </a>
      <ul className="flex lg:gap-x-8 xl:gap-x-16">
        {menuItems &&
          menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} path={item.path} />
          ))}
      </ul>
      <BtnContact path="/contact" name="CONTACT US" />
    </div>
  );
};

export default Header;
