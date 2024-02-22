import { Dispatch, SetStateAction, useState } from "react";
import ReactPaginate from "react-paginate";
import { GitHubFollow, Repository } from "./types/types";

type Props = {
  dataArray: Repository[] | GitHubFollow[];
  handlePageChange: ({ selected }: { selected: number }) => void;
  itemsPerPage?: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const PaginatedComponent = ({
  dataArray,
  handlePageChange,
  itemsPerPage = 10,
  //setCurrentPage
}: Props) => {
  const exampleData = Array.from({ length: 400 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  // const itemsPerPage = 10;
  const pageCount = Math.ceil(exampleData.length / itemsPerPage);
  const currentItems = exampleData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  //   const handlePageChange = (selected) => {
  //     console.log("eee--", selected);
  //     setCurrentPage(selected.selected);
  //   };

  return (
    <>
      {/* Render the pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        breakLinkClassName="block tracking-wider"
        breakClassName="transation-all p-1 border-b-2 border-transparent text-center  duration-300 ease-in-out hover:text-text hover:-translate-y-1"
        pageClassName=" transation-all p-1 border-b-2 border-transparent text-center  duration-300 ease-in-out hover:text-text hover:-translate-y-1 w-[6%]"
        containerClassName={
          " flex justify-around w-full mr-10 items-center  col-span-2 mt-8 font-semibold text-primary"
        }
        pageLinkClassName=" block backdrop-blur-2xl"
        activeClassName={
          "p-1 text-center border-primary/70 border-b-[3px]  font-semibold text-primary  hover:border-text"
        }
        previousClassName={
          "border-b-2 border-transparent text-primary tracking-wider transation-all duration-300 ease-in-out backdrop-blur-xl hover:-translate-y-1 hover:text-text hover:border-text/80"
        }
        disabledClassName={
          "text-primary/20 cursor-not-allowed hover:border-transparent hover:translate-y-0"
        }
        disabledLinkClassName="block cursor-not-allowed"
        nextClassName="border-b-2 text-primary tracking-wider border-transparent transation-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text  hover:border-text/80"
      />
    </>
  );
};

export default PaginatedComponent;
