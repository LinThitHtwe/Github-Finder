"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";
import { Repository } from "../types/types";
import { formatCount } from "@/utils/formatCount";

const RepositoryCard = ({ data }: { data: Repository[] }) => {
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

  return (
    <>
      <div className="mt-10 grid  gap-5  min-[550px]:grid-cols-2  lg:grid-cols-2 ">
        {data &&
          data.map((repo, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              key={repo.id}
              className="card relative max-h-40 min-h-40 w-full  max-w-[88vw] overflow-hidden rounded-xl border border-primary/10  bg-primary/5  p-[0.15rem] min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw]  md:max-h-36 md:min-h-36 "
            >
              <div className="inner h-full w-full rounded-[0.6rem] bg-soft-background p-2">
                <div className=" mx-3  flex items-center justify-between ">
                  <p
                    title={repo.name}
                    className="  w-[88%] truncate text-2xl  font-semibold tracking-tight group-hover:z-10"
                  >
                    {repo.name}
                  </p>
                  <Link
                    href={`${repo.html_url}`}
                    target="_blank"
                    className=""
                    aria-label="Open Github Repository"
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
                  <div className="flex flex-wrap items-center  gap-5 min-[500px]:gap-2 min-[1000px]:gap-4">
                    <Link
                      href={`${repo.html_url}/stargazers`}
                      target="_blank"
                      className={` flex items-center gap-1 font-medium text-primary transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text`}
                    >
                      <FontAwesomeIcon icon={faStar} />
                      <span className="truncate">
                        {formatCount(repo.stargazers_count)}
                      </span>
                    </Link>
                    <Link
                      href={`${repo.html_url}/forks`}
                      target="_blank"
                      className={` flex items-center gap-1 font-medium text-primary transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text`}
                    >
                      <FontAwesomeIcon icon={faCodeFork} />
                      <span>{formatCount(repo.forks)}</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blob "></div>
              <div className="fakeblob "></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RepositoryCard;
