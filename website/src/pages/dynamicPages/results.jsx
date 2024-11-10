import { useLocation} from "react-router-dom";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  const fallBackImage = "https://demofree.sirv.com/nope-not-here.jpg?w=150";
  let content;

  switch (type) {
    case "articles":
      content = data?.response?.docs ? (
        <div className="mt-[5rem]">
          <ul className="flex flex-wrap gap-10 pb-[30px] pt-[30px] md:pl-[15vh]">
            {data.response.docs?.map((article, index) => (
              <li
                key={index}
                className="border bg-white text-black transition-all duration-300 hover:scale-[1.05]"
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
                    className="w-full size-28"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />

                  <div className="p-4">
                    <div className="text-lg font-bold">
                      {article.headline?.main}
                    </div>
                    <div className="text-sm">{article?.abstract}</div>
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
        <div className="mt-[5rem]">
          <ul className="flex gap-10 pb-[30px] pt-[30px] sm:flex-wrap md:pl-[15vh]">
            {data.results.books.map((book, index) => (
              <a
                key={index}
                href={`/books/${book.primary_isbn10}`}
                title="Buy book!"
              >
                <li
                  className="mx-auto max-w-fit border bg-white text-black transition-all duration-300 hover:scale-[1.05]"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={book.book_image ? book.book_image : fallBackImage}
                    alt={book.title}
                    className="size-full"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                  <div className="p-4">
                    <div className="text-lg font-bold">{book.title}</div>
                    <div className="text-sm">
                      {book.description
                        ? book.description
                        : "No Description Available"}
                    </div>
                  </div>
                </li>
              </a>
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
