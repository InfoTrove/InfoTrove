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
        <div className=" mt-28">
          <ul className="flex flex-wrap gap-7 mx-auto justify-center">
            {data.response.docs?.map((article, index) => (
              <li
                key={index}
                className="grid grid-rows-subgrid row-span-3 p-10 mb-10 max-w-[420px] bg-white text-black transition-all duration-300 hover:scale-[1.05]"
                style={{ width: "18rem" }}
              >
                <a
                  href={article.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read article!"
                >
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

                  <div className="p-4">
                    <div className="text-lg font-bold">
                      {article.headline?.main}
                    </div>
                    <p className="text-sm max-h-[120px] line-clamp-4">{article?.abstract}</p>
                  </div>
                </a>
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
        <section className="mt-28">
          <ul className="flex flex-wrap gap-7 mx-auto justify-center">
            {data.results.books.map((book, index) => (
             
                <li
                  className="grid grid-rows-subgrid row-span-3 p-10 mb-10 max-w-[420px] bg-white text-black transition-all duration-300 hover:scale-[1.05]"
                >
                <a
                key={index}
                href={`/books/${book.primary_isbn10}`}
                title="Buy book!"
              >
                  <img
                    src={book.book_image ? book.book_image : fallBackImage}
                    alt={book.title}
                  />
                  </a>
                    <span className="text-lg font-bold">{book.title}</span>

                    <span className="text-sm">
                      {book.description
                        ? book.description
                        : "No Description Available"}
                  </span>
                </li>
             
            ))}
          </ul>
          <Footer />
        </section>
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
