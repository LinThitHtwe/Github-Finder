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
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { CurrentPageType, GitHubUser } from "@/types/types";
import LoadingProfile from "./skeletons/LoadingProfile";
import { useAccountTypeSlice } from "@/store/accountTypeSlice";

const UserProfile = ({
  handleErrorNameSet,
  setCurrentTab,
}: {
  handleErrorNameSet: (errorName: string) => void;
  setCurrentTab: React.Dispatch<React.SetStateAction<CurrentPageType>>;
}) => {
  const username = useNameSlice((state) => state.username);
  const updateUserType = useAccountTypeSlice((state) => state.setIsUser);
  const { data, error, isLoading } = useQuery<GitHubUser, Error>(
    ["profile", username],
    () => fetchUserData(username),
  );
  if (error) {
    handleErrorNameSet(error.name);
  }

  data?.type == "User" ? updateUserType(true) : updateUserType(false);

  return (
    <div className="w-full  md:w-1/4 ">
      {data && (
        <>
          <div className=" z-10 mx-auto h-52 w-52 md:h-44 md:w-44  min-[914px]:h-52 min-[914px]:w-52">
            <Image
              alt={`${username} 's image`}
              src={`${data.avatar_url}`}
              width={400}
              quality={70}
              height={400}
              placeholder="empty"
              className="h-full w-full rounded-full object-cover drop-shadow-primary-lg transition-all duration-300 ease-in-out hover:scale-105"
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
              className={`${data.bio ? "block" : "hidden"} break-words text-text`}
            >
              {data.bio}
            </p>
            <Link
              href={`${data.html_url}`}
              target="_blank"
              aria-label={`View ${username} on github`}
              className=" mx-auto my-7 flex   items-center justify-center gap-2 rounded-3xl border border-primary/80  p-3 text-primary shadow-primary drop-shadow-primary-github transition-all duration-300 ease-in-out hover:border-primary hover:bg-soft-background min-[456px]:w-1/2 md:w-full "
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
                    aria-label={`${username}'s blog`}
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
                    href={`https://twitter.com/${data.twitter_username}`}
                    target="_blank"
                    aria-label={`${username}'s twitter`}
                    className="underline underline-offset-2 transition-all duration-300 ease-in-out hover:text-text"
                  >
                    {data.twitter_username}
                  </Link>
                </li>
              </ul>
              <ul className="my-8 list-none  lg:px-4">
                <li>
                  <button
                    aria-label="for repositories tab"
                    onClick={() => setCurrentTab("Repositories")}
                    className="li-tab-stats"
                  >
                    Repositories
                    <FontAwesomeIcon
                      icon={faBookBookmark}
                      className="text-text"
                    />
                    <span className="">{formatCount(data.public_repos)}</span>
                  </button>
                </li>
                <li>
                  <button
                    aria-label="for followers tab"
                    onClick={() => setCurrentTab("Followers")}
                    className="li-tab-stats"
                  >
                    Followers
                    <FontAwesomeIcon icon={faUsers} className="text-text" />
                    <span className="">{formatCount(data.followers)}</span>
                  </button>
                </li>
                <li>
                  <button
                    aria-label="for following tab"
                    onClick={() => setCurrentTab("Following")}
                    className="li-tab-stats"
                  >
                    Following
                    <FontAwesomeIcon icon={faUsers} className="text-text" />
                    <span className="">{formatCount(data.following)}</span>
                  </button>
                </li>

                <li className="mt-4 flex items-center gap-5 break-words ">
                  Joined Github{" "}
                  {formatDistanceToNow(new Date(data.created_at), {
                    addSuffix: true,
                  })}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {isLoading && <LoadingProfile />}
    </div>
  );
};

export default UserProfile;
