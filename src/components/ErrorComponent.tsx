import { error } from "@/errors/constant";
import React from "react";

const ErrorComponent = ({ errorName }: { errorName: string }) => {
  const renderComponent = () => {
    switch (errorName) {
      case error.notFound:
        return (
          <>
            <p className="text-center text-3xl font-semibold text-primary">
              Opps, Username not found
            </p>
            <img
              src="notFound.svg"
              className="block h-[60%] w-[60%]"
              alt="User Not Found"
            />
          </>
        );
      case error.tooManyRequest:
        return (
          <>
            <p className="text-center text-3xl font-semibold text-primary">
              Sorry • ᴖ • , Too many request
            </p>
            <img
              src="tooManyReq.svg"
              className="block h-[60%] w-[60%]"
              alt="Too Many Request"
            />
          </>
        );
      case error.somethingWentWrong:
      default:
        return (
          <>
            <p className="text-center text-3xl font-semibold text-primary">
              Something went wrong • ᴖ •
            </p>
            <img
              src="somethingWentWrong.svg"
              className="block h-[60%] w-[60%]"
              alt="Something Went Wrong"
            />
          </>
        );
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      {renderComponent()}
    </div>
  );
};

export default ErrorComponent;
