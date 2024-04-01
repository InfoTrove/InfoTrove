import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import BooksContext from "../../context/booksContext";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
const BookDetail = () => {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const navigate = useNavigate();
  const book = books.find((book) => book.primary_isbn10 === id);

  if (!book) {
    return (
      <div className="">
        <NavBar />
        <div className="text-center p-5 pt-20">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Book Not Found
          </h1>
          <p className="text-gray-600">
            The requested book could not be found. Please try another book.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-150 ease-in-out"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto px-4 py-28">
        <div className="flex gap-8 items-start">
          <img
            src={book.book_image}
            alt={book.title}
            className="shadow-lg rounded-lg max-w-xs"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-6">{book.title}</h1>
            <h3 className="text-xl font-semibold text-white mb-2">
              Description
            </h3>
            <p className="text-white mb-8">{book.description}</p>
            <h3 className="text-xl font-semibold text-white mb-2">
              Buy Links:
            </h3>
            <ul>
              {book.buy_links.map((link, index) => (
                <li key={index} className="mb-4">
                  <a
                    href={link.url}
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-150 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
