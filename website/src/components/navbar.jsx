import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import handleFetch from "../utils/handleFetch"; // Ensure this is the correct path
import downArrow from "../assets/downArrow.png";
import { forwardRef } from "react";
import { Dropdown } from "react-bootstrap";
import { motion } from 'framer-motion' 

const NavBar = forwardRef(({scrollToTop}, ref) => {
  const apiKey = `S40TyD7zGe3HkXJZD4MiENxkBybALIxp`;
  const navigate = useNavigate();
  const [showArticlesDropdown, setShowArticlesDropdown] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);

  const categoryOptions = {
    articles: ["Science", "Technology", "Health", "Travel"],  
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
    <div className="bg-black">
      <style>{`
      .navbar-fixed {
        position: fixed;
        top: 0px; /* Retain the original top offset */
        right: 0; /* Ensure the navbar extends to the right edge of the viewport */
        left: 0; /* Stretch navbar across the full width to manage internal alignment */
        z-index: 10; /* Keep navbar above other content */
      }
      .dropdown-menu {
        visibility: hidden; /* Start hidden */
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
        position: absolute;
        background-color: #f9f9f9;
        padding: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        z-index: 1;
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s; /* Add visibility to the transition */
      }
      
      .dropdown-menu.show {
        visibility: visible; /* Make visible */
        opacity: 1;
        transform: translateY(0) scale(1); /* Move to final position and scale to full size */
  transition-delay: 0s; /* Apply transition delay to 0s when showing */
      }
        .dropdown-item {
          background-color: transparent;
          border: none;
          color: black;
          text-align: left;
          padding: 5px;
          text-decoration: none;
          display: block;
          width: 100%;
        }
        .dropdown-item:hover {
          background-color: #e2e2e2;
          transform: translateX(5px);
          border-radius: 8px;
        }
      `}</style>

      <nav
        ref={ref}
        className="navbar-fixed flex bg-black text-white opacity-85"
      >
        <div>
          <img
            src={logo}
            alt="InfoTrove Logo"
            className="size-20 cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
        <ul className="flex gap-9 mx-auto max-w-fit items-center">
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
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 300, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
                className={`dropdown-menu ${
                  showArticlesDropdown ? "show" : ""
                }`}
              >
                {categoryOptions.articles.map((article) => (
                  <button
                    key={article}
                    onClick={() => performFetchAndNavigate("articles", article)}
                    className="dropdown-item"
                  >
                    {article}
                  </button>
                ))}
              </motion.div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowBooksDropdown(true)}
            onMouseLeave={() => setShowBooksDropdown(false)}
          >
            <Link to="/books">Book</Link> {/* Updated path for Books */}
            {showBooksDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 300, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
                className={`dropdown-menu ${showBooksDropdown ? "show" : ""}`}
              >
                {categoryOptions.books.map((book) => (
                  <button
                    key={book}
                    onClick={() => performFetchAndNavigate("books", book)}
                    className="dropdown-item"
                  >
                    {book}
                  </button>
                ))}
              </motion.div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default NavBar;
