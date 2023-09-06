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
      className={`${active === link.title ? "text-rose-600" : "text-secondary"}
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
      className={`${styles.paddingX} sticky top-0 z-50 flex justify-between items-center px-4 py-2 bg-primary bg-opacity-50 backdrop-filter backdrop-blur-lg 
       
      `}
    >
      {/* <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden "
        color="green"
      /> */}
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
          <AcmeLogo />
          <p className="font-bold text-inherit">
            Jibran K.
            <span className="hidden sm:block">
              AI-ML Engineer | Front/Back-end Developer
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
      />
      <NavbarMenu className=" rounded-md py-1">
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={index} className="px-4 py-2 text-gray-700">
            {renderLink(link, index)}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbarr;
