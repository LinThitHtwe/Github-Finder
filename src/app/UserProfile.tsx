"use client";
import { fetchUserData } from "@/api/fetchMethods";
import { useNameSlice } from "@/store/nameSlice";
import { formatCount } from "@/utils/formatCount";
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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const UserProfile = () => {
  const username = useNameSlice((state) => state.username);
  const { data } = useQuery("profile", () => fetchUserData(username));

  return (
    <div className="w-full  md:w-1/4 ">
      {data && (
        <>
          <div className=" z-10 mx-auto h-52 w-52 md:h-44 md:w-44  min-[914px]:h-52 min-[914px]:w-52">
            <Image
              alt="LinThit27"
              src={`${data.avatar_url}`}
              width={400}
              height={400}
              className="h-full w-full rounded-full object-cover drop-shadow-primary-lg"
            />
          </div>
          <div className="mt-8 px-1 lg:px-3 ">
            <h1 className="text-3xl font-bold tracking-tight text-text">
              {data.name}
            </h1>
            <p className=" mb-2  text-lg font-medium text-primary/80 ">
              @{data.login}
            </p>
            <p
              className={`${data.bio ? "block" : "hidden"} truncate text-text`}
            >
              {data.bio}
            </p>
            <Link
              href={`${data.html_url}`}
              target="_blank"
              className=" mx-auto my-7   flex items-center justify-center gap-2 rounded-3xl border border-primary/80 p-3 text-primary shadow-primary drop-shadow-primary-github transition-all duration-300 ease-in-out hover:border-primary hover:bg-soft-background min-[456px]:w-1/2 md:w-full "
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <span className="text-sm lg:text-base">View On Github</span>
            </Link>
            <div className="flex flex-col justify-evenly min-[617px]:flex-row min-[768px]:flex-col">
              <ul className=" mt-4 list-none  lg:px-4">
                <li
                  className={`${data.location ? "flex" : "hidden"} items-center gap-6`}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-xl text-text"
                  />
                  <span>{data.location}</span>
                </li>
                <li
                  className={`mt-4 ${data.company ? "flex" : "hidden"} items-center gap-3`}
                >
                  <FontAwesomeIcon
                    icon={faCity}
                    className="text-xl text-text"
                  />
                  <span>{data.company}</span>
                </li>
                <li
                  className={`mt-4 ${data.blog ? "flex" : "hidden"} items-center gap-5`}
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-xl text-text"
                  />
                  <Link
                    href={`${data.blog}`}
                    target="_blank"
                    className="truncate underline underline-offset-2 transition-all duration-300 ease-in-out hover:text-text"
                  >
                    {data.blog}
                  </Link>
                </li>
                <li
                  className={`mt-4 items-center gap-5 ${data.twitter_username ? "flex" : "hidden"}`}
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-xl text-text"
                  />
                  <Link
                    href={"/"}
                    target="_blank"
                    className="underline underline-offset-2 transition-all duration-300 ease-in-out hover:text-text"
                  >
                    {data.twitter_username}
                  </Link>
                </li>
              </ul>
              <ul className="my-8 list-none  lg:px-4">
                <li className="mt-4 flex items-center gap-5">
                  Repositories
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    className="text-text"
                  />
                  <span className="">{data.public_repos}</span>
                </li>
                <li className="mt-4 flex items-center gap-5">
                  Followers
                  <FontAwesomeIcon icon={faUsers} className="text-text" />
                  <span className="">{formatCount(data.followers)}</span>
                </li>
                <li className="mt-4 flex items-center gap-5">
                  Following
                  <FontAwesomeIcon icon={faUsers} className="text-text" />
                  <span className="">{formatCount(data.following)}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
