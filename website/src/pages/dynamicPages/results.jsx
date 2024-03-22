import { useLocation, Link } from "react-router-dom";
import NavBar from "../../components/navbar";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";
import { Card } from "react-bootstrap";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  const { articles } = useContext(ArticlesContext);
  const fallBackImage = "https://demofree.sirv.com/nope-not-here.jpg?w=150";
  console.log(data);
  let content;

  switch (type) {
    case "movies":
      content = data?.response?.docs ? (
        <div className="flex flex-wrap">
          {data.response.docs.map((movie, index) => (
            <div key={index} className="w-1/3 p-4">
              <img
                src={
                  movie.multimedia?.[0]?.url
                    ? `https://www.nytimes.com/${movie.multimedia[0].url}`
                    : fallBackImage
                }
                alt={movie.title}
                className="w-full"
              />
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
              <Card style={{ width: "18rem" }} className="border-solid">
                <a href={article.web_url} target="_blank">
                  <Card.Img
                    variant="top"
                    src={
                      article.multimedia?.[0]?.url
                        ? `https://www.nytimes.com/${article.multimedia[0]?.url}`
                        : fallBackImage
                    }
                    alt={article.headline.main}
                  />
                </a>
                <Card.Body className="p-4">
                  <Card.Title className="font-bold text-lg">
                    {article.headline?.main}
                  </Card.Title>
                  <Card.Text className="text-sm">{article?.abstract}</Card.Text>
                </Card.Body>
              </Card>
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
                <Card.Img
                  variant="top"
                  src={book.book_image ? book.book_image : fallBackImage}
                  alt={book.title}
                  className="size-28"
                />
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
