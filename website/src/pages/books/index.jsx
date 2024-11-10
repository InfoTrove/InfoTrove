import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useContext } from "react";
import booksContext from "../../context/booksContext";
import { Link } from "react-router-dom";

const Books = () => {
  const { books, setBooks } = useContext(booksContext);

  return (
    <div>
      <NavBar />
      <ul className="mt-[5rem] flex gap-10 pb-[30px] pt-[30px] sm:flex-wrap md:pl-[15vh]">
        {books?.map((book) => (
          <Link to={`/books/${book.primary_isbn10}`}>
            <li
              key={book.primary_isbn10}
              className="mx-auto max-w-fit border bg-white text-black transition-all duration-300 hover:scale-[1.05]"
              style={{ width: "18rem" }}
            >
              <img
                src={book.book_image}
                className="size-full"
                style={{ height: "auto", maxWidth: "100%" }}
              />
              <div className="">
                <h3 className="text-lg font-bold">{book.Title}</h3>
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
