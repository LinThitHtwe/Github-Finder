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
import { fetchRepoData } from "@/api/fetchMethods";
import { formatCount } from "@/utils/formatCount";
import { useNameSlice } from "../store/nameSlice";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Follow = ({ isFollowing }: { isFollowing: boolean }) => {
  const username = useNameSlice((state) => state.username);

  // const { data } = useQuery("repos", () => fetchRepoData(username));

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
    <div className="mt-10 grid gap-5  min-[550px]:grid-cols-2  lg:grid-cols-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          ref={(el) => (cardRefs.current[i] = el)}
          key={i}
          className="card relative max-h-40 min-h-40 w-full  max-w-[88vw] overflow-hidden rounded-xl border border-primary/10  bg-primary/5  p-[0.15rem] min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw]  md:max-h-28 md:min-h-28 "
        >
          <div className="inner flex h-full w-full gap-2 rounded-[0.6rem] bg-soft-background">
            <div className="flex items-center p-1">
              <div className="ml-2 h-[95%] w-full">
                {/* <Image
              alt="LinThit27"
              src={`${data.avatar_url}`}
              width={400}
              height={400}
              className="h-full w-full rounded-full object-cover drop-shadow-primary-lg"
            />  rounded-[0.35rem] */}
                <img
                  src="https://avatars.githubusercontent.com/u/106507721?v=4"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className=" flex  flex-col justify-center gap-2">
              <p className="text-xl font-semibold">Lin Thit Htwe</p>
              <div className=" flex w-fit cursor-pointer  items-center gap-1 border-b border-transparent text-sm text-primary/70 underline-offset-[3px] transition-all duration-300 ease-in-out hover:border-primary/60 hover:text-primary  ">
                @LinThit27
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <Link
            href={"/"}
            target="_blank"
            className="absolute bottom-[37%] right-6 flex justify-end gap-4 text-3xl transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <div className="blob"></div>
          <div className="fakeblob "></div>
        </div>
      ))}
    </div>
  );
};

export default Follow;
