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
      <ul className="">
        {books?.map((book) => (
          <Link to={`/books/${book.primary_isbn10}`}>
            <li
              key={book.primary_isbn10}
              className=" bg-white text-black transition-all duration-300 hover:scale-[1.05]"
              style={{ width: "18rem" }}
            >
              <img
                src={book.book_image}
              />
              <div className="">
                <h3 className="text-lg font-bold">{book.Title}</h3>
                <p>{book.description}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Books;
