import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import BooksContext from "../../context/booksContext";
import NavBar from "../../components/navbar";
const BookDetail = () => {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const navigate = useNavigate();
  const book = books.find((book) => book.primary_isbn10 === id);

  if (!book) {
    return (
      <div className="">
        <NavBar />
        <div className="p-5 pt-20 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-gray-800">
            Book Not Found
          </h1>
          <p className="text-gray-600">
            The requested book could not be found. Please try another book.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 rounded bg-blue-500 px-6 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-600"
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
        <div className="flex items-start gap-8">
          <img
            src={book.book_image}
            alt={book.title}
            className="max-w-xs rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="mb-6 text-4xl font-bold text-white">{book.title}</h1>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Description
            </h3>
            <p className="mb-8 text-white">{book.description}</p>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Buy Links:
            </h3>
            <ul>
              {book.buy_links.map((link, index) => (
                <li key={index} className="mb-4">
                  <a
                    href={link.url}
                    className="inline-flex items-center justify-center rounded bg-blue-500 px-6 py-3 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-600"
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
