import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-center text-gray-400 text-5xl">
          Dheena <b className="text-blue-500">.</b>
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          deenatamilnathan@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy;2025 Dheena.All Rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
