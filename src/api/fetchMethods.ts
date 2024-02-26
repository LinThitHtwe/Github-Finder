import { checkResponseStatus } from "@/errors/checkResponseStatus";

const BASEURL = "https://api.github.com/users";
const BASEQUERY = "per_page=150";

export const fetchRepoData = async (username: string) => {
  const response = await fetch(`${BASEURL}/${username}/repos?${BASEQUERY}`);
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchUserData = async (username: string) => {
  const response = await fetch(`${BASEURL}/${username}`);
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchStarredData = async (username: string) => {
  const response = await fetch(
    `${BASEURL}/${username}/starred?per_page=${BASEQUERY}`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowersData = async (username: string) => {
  const response = await fetch(`${BASEURL}/${username}/followers?${BASEQUERY}`);
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowingData = async (username: string) => {
  const response = await fetch(`${BASEURL}/${username}/following?${BASEQUERY}`);
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};
