import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import handleFetch from "../utils/handleFetch"; // Ensure this is the correct path

const NavBar = () => {
  const apiKey = `S40TyD7zGe3HkXJZD4MiENxkBybALIxp`;
  const navigate = useNavigate();
  const [showArticlesDropdown, setShowArticlesDropdown] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);

  const categoryOptions = {
    articles: ["Science", "Technology", "Health"],
    books: [
      "Hardcover Fiction",
      "Hardcover Nonfiction",
      "Sports",
      "Science",
      "Travel",
      "Family",
      "Humor",
    ],
  };

  const performFetchAndNavigate = async (selectedOption, searchQuery) => {
    const urlMap = {
      articles: `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${searchQuery}")&api-key=${apiKey}`,
      books: `https://api.nytimes.com/svc/books/v3/lists/current/${searchQuery
        .replace(/\s+/g, "-")
        .toLowerCase()}.json?api-key=${apiKey}`,
    };

    const url = urlMap[selectedOption];
    if (!url) return;

    const [data, error] = await handleFetch(url);
    if (error) {
      console.error("Error fetching data: ", error);
      return;
    }

    if (data && (data.response?.docs?.length > 0 || data.results)) {
      navigate("/results", { state: { data, type: selectedOption } });
    } else {
      console.log("No data found for the given query.");
    }
  };

  return (
    <>
      <style>{`
        .dropdown-menu {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          padding: 10px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(85px, 1fr)); /* Adjust column width as needed */
          gap: 10px;
          z-index: 1;
        }
        .dropdown-item {
          background-color: transparent;
          border: none;
          color: black;
          text-align: left;
          padding: 5px;
          text-decoration: none;
          display: block;
          width: 80%;
        }
        .dropdown-item:hover {
          background-color: #f1f1f1;
        }
      `}</style>
      <nav className="flex bg-black text-white">
        <div>
          <img src={logo} alt="InfoTrove Logo" className="size-20" />
        </div>
        <ul className="flex gap-9 mx-auto max-w-fit absolute right-[250px] top-[30px] mr-[30%]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setShowArticlesDropdown(true)}
            onMouseLeave={() => setShowArticlesDropdown(false)}
          >
            <Link to="/articles">Articles</Link>{" "}
            {/* Updated path for Articles */}
            {showArticlesDropdown && (
              <div className="dropdown-menu">
                {categoryOptions.articles.map((article) => (
                  <button
                    key={article}
                    onClick={() => performFetchAndNavigate("articles", article)}
                    className="dropdown-item"
                  >
                    {article}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowBooksDropdown(true)}
            onMouseLeave={() => setShowBooksDropdown(false)}
          >
            <Link to="/books">Books</Link> {/* Updated path for Books */}
            {showBooksDropdown && (
              <div className="dropdown-menu">
                {categoryOptions.books.map((book) => (
                  <button
                    key={book}
                    onClick={() => performFetchAndNavigate("books", book)}
                    className="dropdown-item"
                  >
                    {book}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
