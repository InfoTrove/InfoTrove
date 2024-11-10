import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import BooksContext from "../../context/booksContext";
import NavBar from "../../components/navbar";

const BookDetail = () => {
  const { id } = useParams();
  const { books, loading: booksLoading } = useContext(BooksContext); // Assuming `loading` is provided by BooksContext
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!booksLoading) {
      // Run this only if `books` has finished loading
      const foundBook = books.find((book) => book.primary_isbn10 === id);
      setBook(foundBook);
      setLoading(false); // Stop loading after attempting to find the book
    }
  }, [books, booksLoading, id]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <h1 className="animate-pulse text-3xl font-semibold text-gray-300">
              Loading Book Details...
            </h1>
            <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
          </div>
        ) : !book ? (
          <div className="p-5 text-center">
            <h1 className="mb-6 text-3xl font-semibold text-gray-300">
              Book Not Found
            </h1>
            <p className="text-gray-500">
              The requested book could not be found. Please try another book.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="mt-6 rounded bg-blue-500 px-6 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-600"
            >
              Go Back
            </button>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-28">
            <div className="flex flex-col items-start gap-8 md:flex-row">
              <img
                src={book.book_image}
                alt={book.title}
                className="w-full max-w-xs rounded-lg shadow-lg md:w-auto"
              />
              <div className="flex-1">
                <h1 className="mb-6 text-4xl font-bold">{book.title}</h1>
                <h3 className="mb-2 text-xl font-semibold">Description</h3>
                <p className="mb-8">{book.description}</p>
                <h3 className="mb-2 text-xl font-semibold">Buy Links:</h3>
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
        )}
      </div>
    </div>
  );
};

export default BookDetail;
