"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  const navLinks = [
    { name: "Home", path: "#top" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full "></Image>
      </div>
      <nav
        className={`bg-white-900 text-gray-400 z-50 w-full fixed px-5 lg:px-[8%] ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="#top" className="text-2xl font-bold dark:text-gray-200">
            Dheena <b className="text-blue-700">.</b>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
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
            <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt=""
                className="w-6"
              />
            </button>
            <Link
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 text-gray-700 border border-gray-500 rounded-full ml-4 dark:border-white/50 dark:text-white"
              href={"#contact"}
            >
              Contact
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="arrow-icon"
                className="w-3"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="md:hidden text-gray-400 focus:outline-none"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            ></Image>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block py-2 px-4 text-gray-600 hover:text-blue-400 dark:text-white"
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
