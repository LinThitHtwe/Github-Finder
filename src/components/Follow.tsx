"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCode,
  faCodeFork,
  faLink,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useQuery } from "react-query";
import {
  fetchFollowersData,
  fetchFollowingData,
  fetchRepoData,
} from "@/api/fetchMethods";
import { formatCount } from "@/utils/formatCount";
import { useNameSlice } from "../store/nameSlice";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GitHubFollow } from "../types/types";
import PaginatedComponent from "./PaginationComponent";
import LoadingFollow from "./skeletons/LoadingFollow";

const Follow = ({ isFollowing }: { isFollowing: boolean }) => {
  const username = useNameSlice((state) => state.username);

  const updateName = useNameSlice((state) => state.setName);
  const { data, isLoading } = useQuery(
    isFollowing ? ["following", username] : ["followers", username],
    () =>
      isFollowing ? fetchFollowingData(username) : fetchFollowersData(username),
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      cardRefs.current.forEach((cardRef) => {
        if (cardRef) {
          const blob = cardRef.querySelector(".blob") as HTMLElement | null;
          const fblob = cardRef.querySelector(
            ".fakeblob",
          ) as HTMLElement | null;

          if (blob && fblob) {
            const rec = fblob.getBoundingClientRect();
            blob.style.opacity = "1";

            blob.animate(
              [
                {
                  transform: `translate(${
                    ev.clientX - rec.left - rec.width / 2
                  }px,${ev.clientY - rec.top - rec.height / 2}px)`,
                },
              ],
              {
                duration: 300,
                fill: "forwards",
              },
            );
          }
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cardRefs]);
  const handleOnClickName = (username: string) => {
    updateName(username);
  };
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [username]);
  return (
    <>
      <div className="mt-10 grid gap-5  min-[550px]:grid-cols-2 ">
        {data && data.length == 0 && (
          <p className="col-span-2 mt-2 text-lg font-medium sm:text-2xl">
            {isFollowing
              ? `${username} has no following `
              : `${username} has no follower`}
          </p>
        )}
        {data &&
          data.length > 0 &&
          data
            .slice(currentPage * 10, (currentPage + 1) * 10)
            .map((user: GitHubFollow, index: number) => (
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                key={user.id}
                className="card relative max-h-32 min-h-32 w-full  max-w-[88vw] overflow-hidden rounded-xl border border-primary/10  bg-primary/5  p-[0.15rem] min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw]  md:max-h-28 md:min-h-28 "
              >
                <div className="inner flex h-full w-full  max-w-full gap-2 rounded-[0.6rem] bg-soft-background">
                  <div className="flex items-center p-1">
                    <div className="ml-2  h-[75%] min-w-[80px] max-w-[80px] overflow-hidden  rounded-lg lg:h-[90%]">
                      <Image
                        alt={`${user.login}`}
                        src={`${user.avatar_url}`}
                        className="h-full w-full  object-cover transition-all duration-300 ease-in-out hover:scale-110"
                        width={100}
                        height={100}
                        quality={65}
                        placeholder="empty"
                      />
                    </div>
                  </div>
                  <div className=" flex  flex-col justify-center gap-2">
                    <button
                      title={user.login}
                      aria-label={`Search ${user.login}`}
                      onClick={() => handleOnClickName(user.login)}
                      className={`block break-all text-start  text-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-text   lg:mr-16  `}
                    >
                      {user.login}
                    </button>

                    <Link
                      href={`${user.html_url}`}
                      target="_blank"
                      aria-label={`${user.login}'s account on Github`}
                      className="   flex gap-4 text-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text min-[490px]:hidden min-[550px]:flex min-[932px]:hidden"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                  <Link
                    href={`${user.html_url}`}
                    target="_blank"
                    aria-label={`${user.login}'s account on Github`}
                    className="absolute bottom-[37%] right-4  hidden justify-end gap-4 text-3xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text min-[490px]:flex min-[550px]:hidden min-[932px]:flex xl:right-6"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </div>

                <div className="blob "></div>
                <div className="fakeblob "></div>
              </div>
            ))}

        {isLoading && <LoadingFollow />}
      </div>

      {data && data.length > 0 && (
        <PaginatedComponent
          dataArray={data}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Follow;
