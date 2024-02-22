export const fetchRepoData = async (username: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchUserData = async (username: string) => {
  try {
    const response = await fetch(`https://api.githuxb.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchStarredData = async (username: string) => {
  try {
    const response = await fetch(
      `https://api.githuxb.com/users/${username}/sttarred`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
