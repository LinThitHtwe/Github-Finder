"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faCodeFork,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faCircleDot, faStar } from "@fortawesome/free-regular-svg-icons";
import { useQuery } from "react-query";

const fetchGithubUserData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/SaingHmineTun/repos",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const formatCount = (count: number) => {
  if (count >= 1000) {
    const formattedCount = count / 1000;
    return formattedCount % 1 === 0
      ? formattedCount + "k"
      : formattedCount.toFixed(1) + "k";
  } else {
    return count.toString();
  }
};

export default function Home() {
  const { data } = useQuery("todos", fetchGithubUserData);

  return (
    <main className=" w-1/">
      <Navbar />
      <div className="flex  h-auto  flex-wrap gap-2 overflow-hidden  p-5 text-primary md:flex-nowrap md:gap-10 md:p-8 lg:p-10">
        <UserProfile />
        <div className="w-full md:w-3/4">
          <img
            src="https://github-contributions-api.deno.dev/sannlynnhtun-coding.svg?scheme=deeppurple&no-total=false&font-color=AB88E1"
            alt="LinThit27's Contribution Graph"
            width={800}
            height={400}
            className="mx-auto w-full"
          />

          <div className="mt-6 flex justify-evenly  border-b border-primary/50 pb-0">
            <button className="w-auto flex-1 border-b-4 border-text p-2 text-center font-medium ">
              Repositories
            </button>
            <button className="w-auto flex-1 border-b-4  border-transparent p-2 text-center font-medium transition-all duration-700  ease-in-out hover:border-primary ">
              Forked
            </button>
            <button className="w-auto flex-1  border-primary p-2 text-center font-medium ">
              Followers
            </button>
            <button className="w-auto flex-1  border-primary p-2 text-center font-medium ">
              Following
            </button>
            <button className="w-auto flex-1  border-primary p-2 text-center font-medium ">
              Stared
            </button>
          </div>
          <div className="mt-10 grid gap-5  min-[550px]:grid-cols-2  lg:grid-cols-2">
            {data &&
              data.length > 0 &&
              data
                .filter((repo: any) => repo.fork === false)
                .map((repo: any) => (
                  <div
                    key={repo.id}
                    className=" relative max-h-40  min-h-40 w-full max-w-[88vw] rounded-xl border  border-primary/10 bg-soft-background p-3 min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw]  md:max-h-36 md:min-h-36 "
                  >
                    <div className=" mx-3  flex items-center justify-between ">
                      <h4 className="  truncate text-2xl  font-semibold tracking-tight group-hover:z-10">
                        {repo.name}
                      </h4>
                      <Link
                        href={`${repo.html_url}`}
                        target="_blank"
                        className=""
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-lg text-text/20 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:text-text/80"
                        />
                      </Link>
                    </div>
                    <p className="mx-3 my-2 truncate text-sm text-primary/60">
                      {repo.description}
                    </p>
                    <div className="min absolute bottom-4 left-3 right-3  flex items-center justify-between  gap-2 px-3  text-sm min-[820px]:text-base  ">
                      <div className="flex items-center gap-2  font-semibold   text-primary  md:gap-1">
                        <FontAwesomeIcon icon={faCode} />
                        <span className="">{repo.language}</span>
                      </div>
                      <div className="flex flex-wrap items-center  gap-5 min-[500px]:gap-2 min-[1000px]:gap-6">
                        <div
                          className={` flex  items-center gap-1 font-medium text-primary`}
                        >
                          <FontAwesomeIcon icon={faStar} />
                          <span className="truncate">
                            {formatCount(repo.stargazers_count)}
                          </span>
                        </div>
                        <div
                          className={` flex items-center gap-1 font-medium text-primary `}
                        >
                          <FontAwesomeIcon icon={faCodeFork} />
                          <span>{formatCount(repo.forks)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
