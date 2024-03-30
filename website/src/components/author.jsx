import React, { useContext } from "react";
import ArticlesContext from "../context/booksContext";
import { useState } from "react";

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
  const randomBook = booksArr
    ? booksArr[Math.floor(Math.random() * booksArr.length)]
    : null;
  return (
    <>
      <div className=" bg-neutral-900 flex flex-col items-center p-5 text-white md:flex-row md:items-center md:p-[200px]">
        <div className="w-80 h-80 border border-white rounded-full my-3 overflow-hidden md:w-[400px] md:h-[400px]">
          <img
            src={randomBook?.book_image}
            alt="Book cover"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="list-none p-0 text-center md:text-left md:absolute md:left-[50%] md:transform md:-translate-x-1/2 lg:left-3/4">
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
    </>
  );
};

export default Author;
