import { checkResponseStatus } from "@/errors/checkResponseStatus";

export const fetchRepoData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=1000`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchUserData = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchStarredData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/starred?per_page=10000`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowersData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/followers?per_page=100000`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowingData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/following?per_page=100000`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};
