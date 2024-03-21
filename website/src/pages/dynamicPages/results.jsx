import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  console.log("data from resPage", data);
  console.log("for ->", type);
  console.log("search: in data");
  let content;
  const { articles } = useContext(ArticlesContext);

  // Handling "movies" type
  if (type === "movies" && data?.response?.docs) {
    content = (
      <div>
        <div className="flex flex-wrap">
          {data.response.docs.map((movie, index) => (
            <div key={index} className="w-1/3 p-4">
              {movie?.multimedia[1]?.url ? (
                articles?.map((article) => (
                  <img
                    src={
                      (`https://www.nytimes.com/${article.multimedia[0].url}`,
                      { cache: "force-cache" })
                    }
                    alt={movie.title}
                    className="w-full"
                  />
                ))
              ) : (
                <div>Image not available</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Handling "articles" type
  else if (type === "articles" && data?.response?.docs) {
    content = (
      <div>
        <div className="flex flex-wrap">
          {data.response.docs.map((article, index) => (
            <div key={index} className="w-1/3 p-4">
              <img
                src={
                  (`https://www.nytimes.com/${article?.multimedia[0]?.url}`,
                  { cache: "force-cache" })
                }
                alt={article.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Handling "books" type
  else if (type === "books" && data?.results?.books) {
    content = (
      <div>
        <div className="flex flex-wrap">
          {data.results.books.map((book, index) => (
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
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <>{content ? content : <div>No data found for {type}</div>}</>
    </div>
  );
};

export default ResPage;
