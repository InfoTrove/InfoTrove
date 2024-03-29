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
    // changed from showing a loading!! return to this
    return (
      <div>
        <NavBar />
        <div className="text-center p-5">
          <h1 className="text-xl underline mb-4">Book Not Found</h1>
          <p>
            The requested book could not be found. Please try another Book.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-between p-5">
        <div className="flex-1">
          <div>
            <h1 className="underline text-2xl mb-4">Title : {book.title}</h1>
          </div>
          <div>
            <h3 className="underline text-xl mb-2">Description</h3>
            <p className="underline mb-4">{book.description}</p>
          </div>
          <div>
            <h3 className="underline text-xl mb-2">Buy Links:</h3>
            <ul>
              {book.buy_links.map((link, index) => (
                <li key={index} className="mb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href={link.url} className="underline">
                      {link.name}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <img src={book.book_image} alt={book.title} className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
