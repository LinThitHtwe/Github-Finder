"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useQuery, useQueryClient } from "react-query";
import { fetchRepoData } from "@/api/fetchMethods";
import { formatCount } from "@/utils/formatCount";
import { useNameSlice } from "../store/nameSlice";
import { useEffect, useState } from "react";
import Repositories from "./Repositories";

export default function Home() {
  const username = useNameSlice((state) => state.username);
  const queryClient = useQueryClient();
  const { data } = useQuery("repos", () => fetchRepoData(username));

  useEffect(() => {
    queryClient.invalidateQueries("all");
  }, [username]);

  const [currentTab, setCurrentTab] = useState("Forks");

  const renderTabContent = () => {
    switch (currentTab) {
      case "Repositories":
        return <Repositories isForked={false} />;
      case "Forks":
        return <Repositories isForked={true} />;
    }
  };

  return (
    <main className=" w-1/">
      <Navbar />
      <div className="flex  h-auto  flex-wrap gap-2 overflow-hidden  p-5 text-primary md:flex-nowrap md:gap-10 md:p-8 lg:p-10">
        <UserProfile />

        <div className="w-full md:w-3/4">
          <img
            // src={`https://github-contributions-api.deno.dev/${username}.svg?scheme=deeppurple&no-total=false&font-color=AB88E1`}
            src={""}
            alt={`${username}'s Contribution Graph`}
            width={800}
            height={400}
            className="mx-auto w-full"
          />

          <div className="mt-6 flex justify-evenly overflow-x-auto  border-b border-primary/50 pb-0">
            <button
              onClick={() => setCurrentTab("Repositories")}
              className="w-auto flex-1 border-b-4 border-text p-2 text-center font-medium "
            >
              Repositories
            </button>
            <button
              onClick={() => setCurrentTab("Forks")}
              className="w-auto flex-1 border-b-4  border-transparent p-2 text-center font-medium transition-all duration-700  ease-in-out hover:border-primary "
            >
              Forks
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
          {renderTabContent()}
        </div>
      </div>
      <Footer />
    </main>
  );
}
