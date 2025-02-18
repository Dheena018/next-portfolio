import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I am a Frontend Developer from coimbatore, India with 2+ years of
        experience in Leventis Software Solution Pvt .Ltd.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black duration-500 cursor-pointer hover:bg-lightHover hover:-translate-y-1"
          >
            <Image src={icon} alt={title} className="w-10"></Image>
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              {" "}
              Read More{" "}
              <Image
                src={assets.right_arrow}
                className="w-4"
                alt={title}
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
