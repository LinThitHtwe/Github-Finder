import { checkResponseStatus } from "@/errors/checkResponseStatus";

export const fetchRepoData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
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
    `https://api.github.com/users/${username}/starred`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowersData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/followers`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};

export const fetchFollowingData = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/following`,
  );
  if (!response.ok) checkResponseStatus(response.status);
  const data = await response.json();
  return data;
};
