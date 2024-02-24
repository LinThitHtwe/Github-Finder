import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loading = () => {
  return (
    <div className="flex   h-screen items-center justify-center text-2xl text-text">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full  [animation-delay:-0.3s]">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="h-8 w-8 animate-bounce rounded-full  [animation-delay:-0.15s]">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="h-8 w-8 animate-bounce rounded-full ">
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};

export default Loading;
