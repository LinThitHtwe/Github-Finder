import React from "react";

const LoadingFollow = () => {
  return Array.from({ length: 8 }).map((_, i) => (
    <div
      key={i}
      className="relative flex max-h-32 min-h-32 w-full max-w-[88vw] animate-pulse cursor-wait gap-4 overflow-hidden rounded-xl border border-primary/10 bg-primary/5 p-[0.15rem] min-[375px]:max-w-[90vw] min-[425px]:max-w-[92vw] md:max-h-28 md:min-h-28 "
    >
      <div className="flex items-center p-1">
        <div className="ml-2 block min-h-[75%]  min-w-[80px] max-w-[80px] animate-pulse rounded-lg bg-primary/10 lg:h-[90%]"></div>
      </div>
      <div className=" flex w-[60%]  flex-col  justify-center gap-2">
        <div
          className={`block max-h-5 min-h-5 min-w-[77%] max-w-[77%] animate-pulse rounded-lg bg-primary/10      lg:mr-16  `}
        ></div>

        <div className="block max-h-7 min-h-7 min-w-7 max-w-7 animate-pulse  rounded-full bg-primary/10 min-[490px]:hidden min-[550px]:block min-[932px]:hidden"></div>
      </div>
      <div className="absolute bottom-[37%] right-4 hidden  max-h-8 min-h-8 min-w-8 max-w-8  animate-pulse justify-end  gap-4 rounded-full bg-primary/10    min-[490px]:block min-[550px]:hidden min-[932px]:block xl:right-6"></div>
    </div>
  ));
};

export default LoadingFollow;
