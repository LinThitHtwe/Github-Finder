import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBookBookmark,
  faCity,
  faGlobe,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoadingProfile = () => {
  return (
    <>
      <div className=" z-10 mx-auto h-52 w-52 cursor-wait md:h-44  md:w-44 min-[914px]:h-52 min-[914px]:w-52">
        <div className="block min-h-full min-w-full animate-pulse rounded-full bg-primary/10 object-cover drop-shadow-primary-lg backdrop-blur-md" />
      </div>
      <div className="mt-8 animate-pulse cursor-wait px-1 lg:px-3">
        <div className="   block max-h-6 min-h-6 max-w-[90%] rounded-lg bg-primary/10"></div>
        <div className="mb-2 mt-2 block max-h-6  min-h-6 min-w-[60%] max-w-[60%]  rounded-lg bg-primary/10"></div>
        <div
          className={` block max-h-32  min-h-32 min-w-full max-w-full  rounded-lg bg-primary/10 `}
        ></div>
        <div className=" mx-auto my-7 block max-h-10  min-h-10 min-w-[80%] max-w-[80%]  gap-2  rounded-3xl bg-primary/10      shadow-primary drop-shadow-primary-github  min-[456px]:w-1/2 md:w-full "></div>
        <div className="flex flex-col justify-evenly min-[617px]:flex-row min-[768px]:flex-col">
          <ul className=" mt-4 list-none  lg:px-4">
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[90%] max-w-[90%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[50%] max-w-[50%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[70%] max-w-[70%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[40%] max-w-[40%] rounded-lg bg-primary/10 `}
            ></li>
          </ul>
          <ul className="my-8 list-none  lg:px-4">
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[80%] max-w-[80%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[90%] max-w-[90%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[60%] max-w-[60%] rounded-lg bg-primary/10 `}
            ></li>
            <li
              className={`mt-2  block max-h-6  min-h-6 min-w-[70%] max-w-[70%] rounded-lg bg-primary/10 `}
            ></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoadingProfile;
