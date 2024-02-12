import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-5 sm:px-10">
      <Link
        href="/"
        className=" bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:from-[#c6adeb] hover:to-[#d65c5c] sm:text-3xl md:text-4xl"
      >
        Github Finder
      </Link>
      <form className="drop-shadow-primary-lg relative overflow-hidden text-sm   text-primary sm:text-2xl md:text-xl">
        <FontAwesomeIcon
          className="absolute bottom-[30%] left-4 text-sm text-primary/70 md:text-lg"
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon
          className="absolute bottom-[30%] right-[3.05rem] text-base min-[640px]:right-[4rem] min-[768px]:right-[22%]"
          icon={faXmark}
        />
        <input
          type="text"
          className="w-full  rounded-3xl bg-primary/10 py-[0.65rem] pl-12 pr-16 font-semibold outline-none placeholder:text-text/20 focus:bg-primary/[0.13] sm:pr-24 md:w-auto md:pr-[8.1rem] "
          placeholder="Search Github Username"
        />
        <button className="absolute bottom-0 right-0 top-0  w-fit rounded-3xl bg-primary text-center font-extrabold text-background/90 transition-all duration-500 ease-in-out hover:bg-[#b899e6] hover:text-background md:w-1/5">
          <span className="hidden  pb-1 text-[1.05rem] tracking-tight min-[768px]:inline-block">
            Search
          </span>
          <span className="min-[768px]:hidden">
            <FontAwesomeIcon
              className="px-4 min-[768px]:hidden"
              icon={faMagnifyingGlass}
            />
          </span>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
