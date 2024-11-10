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
      <div className=" bg-neutral-900 flex flex-wrap justify-center p-5 text-white gap-20 md:h-[100vh] items-center">
       
          <img
            src={randomBook?.book_image}
            alt="Book cover"
            className="w-full h-full object-cover max-w-[300px] max-h-[500px]"
          />
        
        <ul className="text-center max-w-[400px]">
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
