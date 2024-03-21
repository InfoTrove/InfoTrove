import { useLocation } from "react-router-dom";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  console.log(data);

  let content;

  // Handling "movies" type
  if (type === "movies" && data?.response?.docs) {
    content = (
      <div className="flex flex-wrap">
        {data.response.docs.map((movie, index) => (
          <div key={index} className="w-1/3 p-4">
            {movie?.multimedia[1]?.url ? (
              <img
                src={`https://${movie?.multimedia[0]?.url}`}
                alt={movie.title}
                className="w-full"
              />
            ) : (
              <div>Image not available</div>
            )}
          </div>
        ))}
      </div>
    );
  }
  // Handling "articles" type
  else if (type === "articles" && data?.response?.docs) {
    content = (
      <div className="flex flex-wrap">
        {data.response.docs.map((article, index) => (
          <div key={index} className="w-1/3 p-4">
            <img src={`https://${article?.multimedia[0]?.url}`} alt={article.title} />
          </div>
        ))}
      </div>
    );
  }
  // Handling "books" type
  else if (type === "books" && data?.results?.books) {
    content = (
      <div className="flex flex-wrap">
        {data.results.books.map((book, index) => (
          <div key={index} className="w-1/3 p-4">
            <img src={book?.book_image} alt="Book" className="w-full" />
          </div>
        ))}
      </div>
    );
  }

  return <>{content ? content : <div>No data found for {type}</div>}</>;
};

export default ResPage;
