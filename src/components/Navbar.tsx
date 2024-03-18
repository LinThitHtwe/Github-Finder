"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNameSlice } from "@/store/nameSlice";

const Navbar = () => {
  const username = useNameSlice((state) => state.username);
  const updateName = useNameSlice((state) => state.setName);
  const [searchUsername, setSearchUsername] = useState("");
  useEffect(() => {
    setSearchUsername(username);
  }, [username]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateName(searchUsername);
  };

  return (
    <nav className="flex items-center justify-between  px-6 py-5 sm:px-10 min-[756px]:px-6 min-[850px]:px-10">
      <Link
        href="/"
        aria-label="Github Finder"
        className=" bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-extrabold tracking-tighter text-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:from-[#c6adeb] hover:to-[#d65c5c] sm:text-3xl min-[756px]:text-4xl"
      >
        Github Finder
      </Link>
      <form
        onSubmit={handleSubmit}
        className=" relative overflow-hidden text-sm text-primary   drop-shadow-primary-lg transition-all duration-300 ease-in-out hover:drop-shadow-primary-search sm:text-2xl md:text-xl"
      >
        <FontAwesomeIcon
          className="absolute bottom-[32%] left-4 text-sm text-primary/70 md:text-lg"
          icon={faMagnifyingGlass}
        />
        <span
          className={`${searchUsername ? "" : "hidden"}`}
          onClick={() => setSearchUsername("")}
        >
          <FontAwesomeIcon
            className={`absolute bottom-[32%] right-[3.05rem] cursor-pointer text-base min-[640px]:right-[4rem] min-[768px]:right-[22%] `}
            icon={faXmark}
          />
        </span>

        <input
          type="text"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
          className="w-full  rounded-3xl bg-primary/10 py-[0.65rem] pl-12 pr-16 font-semibold outline-none placeholder:text-text/20 focus:bg-primary/[0.13]  sm:pr-24 md:w-auto md:pr-[8.1rem] "
          placeholder="Search Github Username"
        />
        <button
          aria-label="Search Github Username"
          type="submit"
          className="absolute bottom-0 right-0 top-0  w-fit rounded-3xl bg-primary text-center font-extrabold text-background/90 transition-all duration-500 ease-in-out hover:bg-[#b899e6]  md:w-1/5"
        >
          <span className="hidden  pb-1 text-[1.05rem] tracking-tight min-[768px]:inline-block">
            Search
          </span>
          <span className="flex justify-self-center min-[640px]:text-sm min-[768px]:hidden">
            <FontAwesomeIcon className="px-4 " icon={faMagnifyingGlass} />
          </span>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
