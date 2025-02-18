"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const pathname = usePathname();
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.path) as HTMLElement | null;
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = link.path;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#top" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full "></Image>
      </div>
      <nav
        className={`bg-white-900 text-gray-400 z-50 w-full fixed px-5 lg:px-[8%] ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="#top" className="text-2xl font-bold">
            Dheena <b className="text-blue-700">.</b>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
            } `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  activeSection === link.path
                    ? "text-blue-400"
                    : "text-gray-400"
                } hover:text-blue-400 transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button>
              <Image src={assets.moon_icon} alt="" className="w-6"></Image>
            </button>
            <Link
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
              href={"#contact"}
            >
              Contact{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="md:hidden text-gray-400 focus:outline-none"
          >
            <Image src={assets.menu_black} alt="" className="w-6"></Image>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block py-2 px-4 text-gray-600 hover:text-blue-400"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
