import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 sm:px-10">
      <Link
        href="/"
        className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:from-[#c6adeb] hover:to-[#d65c5c] sm:text-3xl md:text-4xl"
      >
        Github Finder
      </Link>
      <div className="flex items-center gap-6 text-xl text-primary sm:gap-8 sm:text-2xl">
        <Link
          href="#"
          className="transition-all duration-500 ease-out hover:-translate-y-1 hover:text-[#c6adeb]"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="#"
          className="transition-all duration-500 ease-out hover:-translate-y-1 hover:text-[#c6adeb]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
