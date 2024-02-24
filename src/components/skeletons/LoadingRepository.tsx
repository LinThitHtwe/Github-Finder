import React from "react";

const LoadingRepository = () => {
  return (
    <div className="mt-10 grid cursor-wait  gap-5  min-[550px]:grid-cols-2  lg:grid-cols-2 ">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="block max-h-40 min-h-40 w-full max-w-[88vw] animate-pulse  overflow-hidden rounded-xl border border-primary/10 bg-primary/5    p-[0.15rem] min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw]  md:max-h-36 md:min-h-36"
        >
          <div className=" flex h-full flex-col justify-between">
            <div>
              <div className="my-2 ml-2 block max-h-6 min-h-6 min-w-[90%] max-w-[90%] animate-pulse rounded-lg bg-primary/10"></div>
              <div className="my-2 ml-2 block max-h-6 min-h-6 min-w-[40%] max-w-[40%] animate-pulse rounded-lg bg-primary/10"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="my-2 ml-2 block max-h-6 min-h-6 min-w-[30%] max-w-[30%] animate-pulse rounded-lg bg-primary/10"></div>
              <div className="flex w-[25%] gap-0">
                <div className="my-2 ml-2 block max-h-6 min-h-6 min-w-[30%] max-w-[30%] animate-pulse rounded-lg bg-primary/10"></div>
                <div className="my-2 ml-2  block max-h-6 min-h-6 min-w-[30%] max-w-[30%] animate-pulse rounded-lg bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingRepository;
