import { useLocation, Link } from "react-router-dom";
import NavBar from "../../components/navbar";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";
import { Card } from "react-bootstrap";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  const { articles } = useContext(ArticlesContext);
  let content;

  switch (type) {
    case "movies":
      content = data?.response?.docs ? (
        <div className="flex flex-wrap">
          {data.response.docs.map((movie, index) => (
            <div key={index} className="w-1/3 p-4">
              {movie?.multimedia[1]?.url && (
                <img
                  src={`https://www.nytimes.com/${movie.multimedia[0].url}`}
                  alt={movie.title}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>No movie data available.</div>
      );
      break;
    case "articles":
      content = data?.response?.docs ? (
        <div className="flex flex-wrap">
          {data.response.docs.map((article, index) => (
            <div key={index} className="w-1/3 p-4">
              {article?.multimedia[0]?.url && (
                <img
                  src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                  alt={article.headline.main}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>No article data available.</div>
      );
      break;
    case "books":
      content = data?.results?.books ? (
        <div className="flex flex-wrap">
          {data.results.books.map((book, index) => (
            <Link key={index} to={`/books/${book.primary_isbn10}`}>
              <Card style={{ width: "18rem" }} className="border-solid">
                <Card.Img variant="top" src={book.book_image} className="size-28" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div>No book data available.</div>
      );
      break;
    default:
      content = <div>No data found for {type}</div>;
  }

  return (
    <div>
      <NavBar />
      {content}
    </div>
  );
};

export default ResPage;
