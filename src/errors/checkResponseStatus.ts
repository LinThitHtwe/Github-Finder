import { error } from "./constant";

const itemNotFoundError = () => {
  let err = new Error("USER NOT FOUND");
  err.name = error.notFound;
  return err;
};

const tooManyRequestError = () => {
  let err = new Error("TOO MANY REQUEST");
  err.name = error.tooManyRequest;
  return err;
};

const serverError = () => {
  let err = new Error("SERVER ERROR");
  err.name = error.somethingWentWrong;
  return err;
};

export const checkResponseStatus = (status: number) => {
  switch (status) {
    case 404:
      throw itemNotFoundError();
    case 429:
    case 403:
      throw tooManyRequestError();
    default:
      throw serverError();
  }
};
