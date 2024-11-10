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
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    if (booksArr && booksArr.length > 0) {
      // Set a random book once booksArr is available
      setRandomBook(booksArr[Math.floor(Math.random() * booksArr.length)]);
      setLoading(false); // Stop loading once randomBook is set
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

  return (
    <div className="flex h-screen items-center justify-center bg-neutral-900 text-white">
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 animate-pulse text-3xl font-semibold text-gray-300">
            Loading Author Details...
          </h1>
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-20 p-5 md:h-[100vh]">
          <img
            src={randomBook?.book_image}
            alt="Book cover"
            className="h-full max-h-[500px] w-full max-w-[300px] object-cover"
          />

          <ul className="max-w-[400px] text-center">
            <li className="border-b border-white pb-2 text-xl">
              Title: {randomBook?.title}
            </li>
            <li className="border-b border-white pb-2 text-xl">
              Author: {randomBook?.author}
            </li>
            <li className="border-b border-white pb-2 text-xl">
              Description: {randomBook?.description}
            </li>
            <li className="border-b border-white pb-2 text-3xl">
              Publisher: {randomBook?.publisher}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Author;
