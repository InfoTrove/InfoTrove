import React, { useContext } from "react";
import getId from "../utils/getId";
// import books from context
const Author = ({}) => {
  //                        nameContext
  // const books = useContext(BooksContext);
  // multiply random decimal between 0-1 by books length and round it else null if books doesn't exist
  // const randomBook = books ? books[Math.floor(Math.random() * books.length)] : null;
  return (
    <>
      <style>
        {`
          .li-underline {
            border-bottom: 1px solid #FFFFFF; /* Adjust color as needed */
            margin-top : 0.8rem
          `}
      </style>
      <div className=" bg-black flex items-center p-[100px] text-white">
        <div className="w-[400px] h-[400px] border rounded-full mt-3 mb-3 overflow-hidden">
          <img
            // src = {randomBook.url/image}
            src="https://wallpapers.com/images/featured/goku-e2us8ym3rraxbnve.jpg"
            alt="Description"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="mr-[60%] ml-10 absolute left-[800px]">
          {/* {books?.map((book) => (
            <div data-name="home-books-container">
            <li key={book.title}>{book.title}</li>
            <li key={book.title}>{book.title}</li>
            <li key={book.title}>{book.title}</li>
            <li key={book.title}>{book.title}</li>
            <li key={book.title}>{book.title}</li>
            </div>
          ))} */}

          <li className="li-underline">BOOK</li>
          <li className="li-underline">BOOK</li>
          <li className="li-underline">BOOK</li>
          <li className="li-underline">BOOK</li>
          <li className="li-underline">BOOK</li>
        </ul>
      </div>
    </>
  );
};

export default Author;
