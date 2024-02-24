"use client";

import { useQuery } from "react-query";
import { fetchRepoData } from "@/api/fetchMethods";
import { useNameSlice } from "../store/nameSlice";
import RepositoryCard from "./RepositoryCard";
import PaginatedComponent from "./PaginationComponent";
import { useEffect, useState } from "react";
import { Repository } from "../types/types";
import LoadingRepository from "./skeletons/LoadingRepository";

const Repositories = ({ isForked }: { isForked: boolean }) => {
  const username = useNameSlice((state) => state.username);
  const { data, isLoading } = useQuery(["repos", username], () =>
    fetchRepoData(username),
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [isForked]);
  return (
    <>
      {data && data.length > 0 && (
        <RepositoryCard
          data={data
            .filter((repo: Repository) => repo.fork === isForked)
            .sort(
              (a: Repository, b: Repository) =>
                b.stargazers_count - a.stargazers_count,
            )
            .slice(currentPage * 10, (currentPage + 1) * 10)}
        />
      )}
      {isLoading && <LoadingRepository />}

      {data && data.length > 0 && (
        <PaginatedComponent
          dataArray={data.filter((repo: Repository) => repo.fork === isForked)}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Repositories;