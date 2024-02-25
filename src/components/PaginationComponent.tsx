import ReactPaginate from "react-paginate";
import { GitHubFollow, Repository } from "../types/types";

type Props = {
  currentPage: number;
  dataArray: Repository[] | GitHubFollow[];
  handlePageChange: ({ selected }: { selected: number }) => void;
  itemsPerPage?: number;
};

const PaginatedComponent = ({
  currentPage,
  dataArray,
  handlePageChange,
  itemsPerPage = 10,
}: Props) => {
  const pageCount = Math.ceil(dataArray.length / itemsPerPage);

  return (
    <>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          breakLinkClassName="block tracking-wider"
          breakClassName="transation-all p-1 border-b-2 border-transparent text-center  duration-300 ease-in-out hover:text-text hover:-translate-y-1"
          pageClassName=" transation-all p-1  text-center  duration-300 ease-in-out hover:text-text  hover:-translate-y-1 w-[6%]"
          containerClassName={
            " flex  flex-warp justify-around w-full mr-10 items-center  col-span-2 mt-8 font-semibold text-primary"
          }
          pageLinkClassName=" block backdrop-blur-2xl"
          activeClassName={
            "p-1 text-center border-primary  border-b-[3px]  font-semibold text-primary  hover:border-text"
          }
          previousClassName={`${currentPage == 0 ? "" : "border-b-2 text-primary tracking-wider border-transparent transation-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text  hover:border-text/80"}`}
          disabledClassName={
            "text-primary/20 cursor-not-allowed hover:border-transparent hover:text-text-primary/20 hover:translate-y-0"
          }
          disabledLinkClassName="block cursor-not-allowed hover:text-text-primary/20 "
          nextClassName={`${currentPage == pageCount - 1 ? "" : "border-b-2 text-primary tracking-wider border-transparent transation-all duration-300 ease-in-out hover:-translate-y-1 hover:text-text  hover:border-text/80"}`}
        />
      )}
    </>
  );
};

export default PaginatedComponent;
