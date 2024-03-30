import { useLocation, Link } from "react-router-dom";
import NavBar from "../../components/navbar";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import Footer from "../../components/footer";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  const { articles } = useContext(ArticlesContext);
  const fallBackImage = "https://demofree.sirv.com/nope-not-here.jpg?w=150";
  console.log(data);
  let content;

  switch (type) {
    case "articles":
      content = data?.response?.docs ? (
        <div className="mt-[5rem]">
          <ul className="flex flex-wrap gap-10 pt-[30px] pb-[30px] md:pl-[15vh]">
            {data.response.docs?.map((article, index) => (
              <li
                key={index}
                className="border bg-white text-black hover:scale-[1.05] transition-all duration-300"
                style={{ width: "18rem" }}
              >
                <Link to={article.web_url}>
                  <img
                    src={
                      article.multimedia?.[0]?.url
                        ? `https://www.nytimes.com/${article.multimedia[0]?.url}`
                        : fallBackImage
                    }
                    alt={article.headline.main}
                    className="size-28 w-full"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                </Link>
                <div className="p-4">
                  <div className="font-bold text-lg">
                    {article.headline?.main}
                  </div>
                  <div className="text-sm">{article?.abstract}</div>
                </div>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      ) : (
        <div>No article data available.</div>
      );
      break;

    case "books":
      content = data?.results?.books ? (
        <div className="mt-[5rem]">
          <ul className="flex sm:flex-wrap gap-10 pt-[30px] pb-[30px] md:pl-[15vh]">
            {data.results.books.map((book, index) => (
              <Link key={index} to={`/books/${book.primary_isbn10}`}>
                <li
                  className="border bg-white text-black hover:scale-[1.05] transition-all duration-300 max-w-fit mx-auto"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={book.book_image ? book.book_image : fallBackImage}
                    alt={book.title}
                    className="size-full"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                  <div className="p-4">
                    <div className="font-bold text-lg">{book.title}</div>
                    <div className="text-sm">
                      {book.description
                        ? book.description
                        : "No Description Available"}
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <Footer />
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
