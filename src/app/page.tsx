"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import { useQueryClient } from "react-query";
import { useNameSlice } from "../store/nameSlice";
import { useEffect, useState } from "react";
import Repositories from "../components/Repositories";
import Follow from "../components/Follow";
import StaredRepos from "../components/StaredRepos";
import ErrorComponent from "@/components/ErrorComponent";
import { CurrentPageType } from "@/types/types";
import { useAccountTypeSlice } from "@/store/accountTypeSlice";

export default function Home() {
  const username = useNameSlice((state) => state.username);
  const isUser = useAccountTypeSlice((state) => state.isUser);
  const queryClient = useQueryClient();
  const [errorName, setErrorName] = useState<string | null>(null);

  useEffect(() => {
    const refetchAll = async () => {
      await queryClient.refetchQueries();
    };
    setErrorName(null);

    refetchAll();
  }, [username]);

  const handleErrorNameSet = (errorName: string) => setErrorName(errorName);

  const [currentTab, setCurrentTab] = useState<CurrentPageType>("Repositories");
  const renderTabContent = () => {
    switch (currentTab) {
      case "Repositories":
        return <Repositories isForked={false} />;
      case "Forks":
        return <Repositories isForked={true} />;
      case "Following":
        return <Follow isFollowing={true} />;
      case "Followers":
        return <Follow isFollowing={false} />;
      case "Starred":
        return <StaredRepos />;
    }
  };

  const activeClass = (activeTab: string) => {
    if (currentTab == activeTab) return "border-text text-text";
    return "border-transparent ";
  };

  return (
    <main className="h-auto w-full  ">
      <Navbar />
      {!errorName && (
        <div className="flex  h-auto  flex-wrap gap-2 overflow-hidden  p-5 text-primary md:flex-nowrap md:gap-10 md:p-8 lg:p-10">
          <UserProfile
            handleErrorNameSet={handleErrorNameSet}
            setCurrentTab={setCurrentTab}
          />

          <div className=" w-full md:w-3/4">
            {isUser && (
              <img
                src={`https://github-contributions-api.deno.dev/${username}.svg?scheme=deeppurple&no-total=false&font-color=AB88E1`}
                alt={`${username}'s Contribution Graph`}
                width={800}
                height={400}
                className="mx-auto w-full"
              />
            )}

            <div className="mt-6 flex justify-evenly overflow-x-auto border-b  border-primary/30 pb-0 ">
              <button
                onClick={() => setCurrentTab("Repositories")}
                className={`ml-32 w-auto flex-1 border-b-4 ${activeClass("Repositories")} rounded-t-2xl p-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-soft-background min-[330px]:ml-24 min-[375px]:ml-16 min-[400px]:ml-10 min-[450px]:ml-0`}
              >
                Repositories
              </button>
              <button
                onClick={() => setCurrentTab("Forks")}
                className={`w-auto flex-1 border-b-4 ${activeClass("Forks")} rounded-t-2xl p-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-soft-background`}
              >
                Forks
              </button>
              <button
                onClick={() => setCurrentTab("Following")}
                className={`w-auto flex-1 border-b-4 ${activeClass("Following")} rounded-t-2xl p-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-soft-background`}
              >
                Following
              </button>
              <button
                onClick={() => setCurrentTab("Followers")}
                className={`w-auto flex-1 border-b-4 ${activeClass("Followers")} rounded-t-2xl p-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-soft-background`}
              >
                Followers
              </button>

              <button
                onClick={() => setCurrentTab("Starred")}
                className={`w-auto flex-1 border-b-4 ${activeClass("Starred")} rounded-t-2xl p-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-soft-background`}
              >
                Stared
              </button>
            </div>
            {renderTabContent()}
          </div>
        </div>
      )}
      {errorName && <ErrorComponent errorName={errorName} />}
      <Footer />
    </main>
  );
}
