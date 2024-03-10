"use client";

import { useQuery } from "react-query";
import { fetchStarredData } from "@/api/fetchMethods";
import { useNameSlice } from "../store/nameSlice";
import RepositoryCard from "./RepositoryCard";
import { useEffect, useState } from "react";
import { Repository } from "../types/types";
import PaginatedComponent from "./PaginationComponent";
import LoadingRepository from "./skeletons/LoadingRepository";

const StaredRepos = () => {
  const username = useNameSlice((state) => state.username);
  const { data, isLoading } = useQuery(["starred", username], () =>
    fetchStarredData(username),
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };
  useEffect(() => {
    setCurrentPage(0);
  }, [username]);

  return (
    <>
      {data && data.length > 0 && (
        <>
          <RepositoryCard
            data={data

              .sort(
                (a: Repository, b: Repository) =>
                  b.stargazers_count - a.stargazers_count,
              )
              .slice(currentPage * 10, (currentPage + 1) * 10)}
          />
          <PaginatedComponent
            dataArray={data}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
      {data && data.length == 0 && (
        <p className=" mt-5 text-lg font-medium sm:text-2xl">
          {username} has no starred reporitory
        </p>
      )}
      {isLoading && <LoadingRepository />}
    </>
  );
};

export default StaredRepos;
