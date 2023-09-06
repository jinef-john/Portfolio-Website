import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

import { useState, useEffect } from "react";
// import {Link}  from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbarr = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLink = (link, index) => (
    <Link
      key={index}
      color="bg-green-700"
      href={`#${link.id}`}
      className={`${active === link.title ? "text-white" : "text-secondary"}
        hover:text-white transition-colors duration-300 cursor-pointer
        `}
      onClick={() => {
        setActive(link.title);
        window.scrollTo(0, 0);
      }}
    >
      {link.title}
    </Link>
  );

  return (
    <Navbar
      className={` sm:p-2 
         sticky top-0 z-50 flex justify-around items-center px-6 py-2 bg-primary bg-opacity-50 backdrop-filter backdrop-blur-lg max-w-7xl mx-auto  `}
    >
      <NavbarBrand>
        <Link
          color="foreground"
          href="#"
          className="text-white"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div
            className="text-white font-bold
          "
          >
            <AcmeLogo />
          </div>
          <p className="font-bold md:text-xl text-inherit flex ">
            Jibran K. &nbsp;
            <span
              className="hidden sm:block
            text-emerald-400 text-md font-bold
            "
            >
              AI-ML Engineer | Web Developer
            </span>
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>{renderLink(link, index)}</NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-green-600"
        icon={isMenuOpen ? close : menu}
      />

      <NavbarMenu className="w-3/5  ml-auto rounded-md p-2">
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={index} className="px-2 py-1 text-gray-700">
            {renderLink(link, index)}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbarr;
