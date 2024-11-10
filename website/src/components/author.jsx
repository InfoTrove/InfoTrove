import React, { useContext, useEffect, useState } from "react";
import ArticlesContext from "../context/booksContext";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}

const Author = () => {
  const context = useContext(ArticlesContext);
  const booksArr = context.books;
  const [loading, setLoading] = useState(true);
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    if (booksArr && booksArr.length > 0) {
      setRandomBook(booksArr[Math.floor(Math.random() * booksArr.length)]);
      setLoading(false);
    }
  }, [booksArr]);

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-white transition-all duration-500 ease-in-out">
        <h1 className="mb-4 animate-pulse text-3xl font-semibold text-gray-300">
          Loading Author Details...
        </h1>
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
      </div>
    );
  }
  console.log(randomBook);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 p-4 pb-0 text-white">
      <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
        Book Of The Day!
      </h1>
      <div className="flex flex-col items-center gap-10 p-5 md:flex-row md:gap-5 lg:gap-10">
        <img
          src={randomBook?.book_image}
          alt="Book cover"
          className="h-full max-h-[300px] w-full max-w-[200px] object-cover md:max-h-[400px] md:max-w-[250px] lg:max-h-[500px] lg:max-w-[300px]"
        />

        <ul className="max-w-[400px] space-y-4 text-center md:space-y-2">
          <li className="border-b border-white pb-2 text-lg md:text-xl">
            Title: {randomBook?.title ? randomBook?.title : "Unavailable"}
          </li>
          <li className="border-b border-white p-2 text-lg md:text-xl">
            Author: {randomBook?.author ? randomBook?.author : "Unavailable"}
          </li>
          <li className="border-b border-white p-2 text-lg md:text-xl">
            Description:{" "}
            {randomBook?.description ? randomBook?.description : "N/A"}
          </li>
          <li className="border-b border-white p-2 text-xl md:text-2xl">
            Publisher: {randomBook?.publisher ? randomBook?.publisher : "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
