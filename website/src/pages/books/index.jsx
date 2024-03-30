import { useState, useEffect } from "react";
import handleFetch from "../../utils/handleFetch";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import booksContext from "../../context/booksContext";
import { Link } from "react-router-dom";

const Books = () => {
  const [error, setError] = useState();
  const { books, setBooks } = useContext(booksContext);

  return (
    <div>
      <NavBar />
      <ul className="flex sm:flex-wrap gap-10 pt-[30px] pb-[30px] md:pl-[15vh] mt-[5rem]">
        {books?.map((book) => (
          <Link to={`/books/${book.primary_isbn10}`}>
            <li
              className="border bg-white text-black hover:scale-[1.05] transition-all duration-300 max-w-fit mx-auto"
              style={{ width: "18rem" }}
            >
              <img
                src={book.book_image}
                className="size-full"
                style={{ height: "auto", maxWidth: "100%" }}
              />
              <div className="">
                <h3 className="font-bold text-lg">{book.Title}</h3>
                <p>{book.description}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Books;
