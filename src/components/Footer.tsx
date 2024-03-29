import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getYear } from "date-fns";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 flex h-40 flex-col items-center justify-center gap-6 bg-soft-background/80 text-primary">
      <h1 className="text-center text-base">Made With ❤️ and NextJs</h1>
      <div className="flex items-center gap-6 text-2xl transition-all  ease-in-out">
        <Link
          href={"https://github.com/LinThitHtwe/Github-Finder"}
          target="_blank"
          aria-label="My Github Repo"
          className="duration-500 hover:-translate-y-1 hover:text-[#f5f5f5]"
        >
          <FontAwesomeIcon className="" icon={faGithub} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/lin-thit-htwe-845b64294/"}
          target="_blank"
          aria-label="My Linkedin Account"
          className="duration-500 hover:-translate-y-1 hover:text-[#0077B5]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href={"https://www.instagram.com/linthit2745/"}
          target="_blank"
          aria-label="My Instagram Account"
          className="duration-500 hover:-translate-y-1 hover:text-[#d62976]"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <p className=" -mt-3 px-5 text-center text-sm text-primary/70 lg:w-full">
        {getYear(new Date())} Github Finder. All Rights reserved. Developed by{" "}
        <Link
          target="_blank"
          aria-label="My Github Account"
          href={`https://github.com/LinThitHtwe`}
          className="text-primary underline"
        >
          Lin Thit Htwe
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
