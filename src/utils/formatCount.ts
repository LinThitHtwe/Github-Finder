export const formatCount = (count: number) => {
  if (count >= 1000) {
    const formattedCount = count / 1000;
    return formattedCount % 1 === 0
      ? formattedCount + "k"
      : formattedCount.toFixed(1) + "k";
  } else {
    return count.toString();
  }
};
