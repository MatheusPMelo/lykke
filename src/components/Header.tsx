import React, { FC, useState } from "react";
import * as Menubar from "@radix-ui/react-menubar";

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
// Item de menu
const MenuItem: FC<IMenuItems> = ({ name, path }) => (
  <Menubar.Trigger
    onClick={() => (window.location.href = path)}
    className="text-white opacity-50 duration-300 hover:opacity-100 hover:-translate-y-1"
  >
    {name}
  </Menubar.Trigger>
);

// Botão de contato
const BtnContact: FC<IMenuItems> = ({ name, path }) => (
  <Menubar.Trigger
    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium text-base duration-300 hover:scale-110"
    onClick={() => (window.location.href = path)}
  >
    {name}
  </Menubar.Trigger>
);

const Header: React.FC = () => {
  return (
    <Menubar.Root className="container mx-auto px-4 flex justify-between items-center py-4">
      <a href="/">
        <img src={Logo} className="w-32 h-auto" />
      </a>
      <div className="flex gap-x-4">
        <Menubar.Menu>
          {menuItems &&
            menuItems.map((item) => (
              <MenuItem key={item.name} name={item.name} path={item.path} />
            ))}
        </Menubar.Menu>
      </div>
      <div>
        <Menubar.Menu>
          <BtnContact path="/contact" name="CONTACT US" />
        </Menubar.Menu>
      </div>
    </Menubar.Root>
  );
};

export default Header;
