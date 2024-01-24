import { Quote } from "@/src/types";

const getRandomQuote = (arr: Omit<Quote, "size">[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

export default getRandomQuote;
