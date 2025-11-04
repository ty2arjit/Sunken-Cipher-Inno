
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-sky-300/40 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center "
        >
          <Image
            src="/aps.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[3px] hidden md:block text-gray-300">
            Algorithmic and Programming Society
          </span>
        </a>
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/inno.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold -ml-[3px] hidden md:block text-gray-300">
            Innovision
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;