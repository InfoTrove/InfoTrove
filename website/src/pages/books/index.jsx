import { useState, useEffect } from "react";
import handleFetch from "../../utils/handleFetch";
import NavBar from "../../components/navbar";
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
      <ul className="flex flex-wrap gap-10 p-[50px]">
        {books?.map((book) => (
          <Link to={`/books/${book.primary_isbn10}`}>
            <Card style={{ width: "18rem" }} className="border-solid">
              <Card.Img
                variant="top"
                src={book.book_image}
                className="size-28"
              />
              <Card.Body>
                <Card.Title>{book.Title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Books;
