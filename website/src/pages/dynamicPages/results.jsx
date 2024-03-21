import { useLocation } from "react-router-dom";

const ResPage = () => {
  const location = useLocation();
  const { data, type } = location.state || {};
  console.log(data);
  //console.log("data", data.response.docs[1].multimedia[0].url); articles
  // console.log('data', data.response.docs) movies
  let content;

  // Handling "movies" type
  if (type === "movies" && data?.response?.docs) {
    content = data.response.docs.map((movie, index) => (
      <div key={index}>Movie Img: {movie?.multimedia[0]?.url}</div>
    ));
  }

  // Handling "articles" type
  else if (type === "articles" && data?.response?.docs) {
    content = data.response.docs.map((article, index) => (
      <div key={index}>Article Img: {article?.multimedia[0]?.url}</div>
    ));
  }

  // Handling "books" type
  else if (type === "books" && data?.results?.books) {
    content = data.results.books.map((book, index) => (
      <div key={index}>Book Img: {book?.book_image}</div>
    ));
  }

  return <>{content ? content : <div>No data found for {type}</div>}</>;
};

export default ResPage;
