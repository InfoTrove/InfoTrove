import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import handleFetch from "../utils/handleFetch"; // Ensure this is the correct path
import downArrow from "../assets/downArrow.png";
import { forwardRef } from "react";
import { Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { gql, useApolloClient } from "@apollo/client";
const NavBar = forwardRef(({ scrollToTop }, ref) => {
  const apiKey = `S40TyD7zGe3HkXJZD4MiENxkBybALIxp`;
  const client = useApolloClient();
  const navigate = useNavigate();
  const [showArticlesDropdown, setShowArticlesDropdown] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);

  // GraphQL Queries
  const GET_ARTICLES_BY_SECTION = gql`
    query GetArticlesBySection($section: String!) {
      getArticleBySection(section: $section) {
        headline {
          main
        }
        abstract
        web_url
        multimedia {
          url
        }
      }
    }
  `;

  const GET_BOOKS_BY_CATEGORY = gql`
    query GetBooksByCategory($category: String!) {
      getBookByCategory(category: $category) {
        title
        primary_isbn10
        book_image
        description
      }
    }
  `;
  const categoryOptions = {
    articles: ["Technology", "Sports", "Science", "Health", "Travel", "World"],
    books: [
      "Hardcover Fiction",
      "Manga",
      "Hardcover Nonfiction",
      "Sports",
      "Science",
      "Travel",
      "Family",
      "Humor",
    ],
  };

  const performFetchAndNavigate = async (selectedOption, searchQuery) => {
    try {
      let data;
      if (selectedOption === "articles") {
        const result = await client.query({
          query: GET_ARTICLES_BY_SECTION,
          variables: { section: searchQuery },
        });
        data = result.data.getArticleBySection;
        console.log("🚀 ~ performFetchAndNavigate ~ data:", data);
      } else if (selectedOption === "books") {
        const result = await client.query({
          query: GET_BOOKS_BY_CATEGORY,
          variables: { category: searchQuery },
        });
        data = result.data.getBookByCategory;
        console.log("🚀 ~ performFetchAndNavigate ~ data:", data);
      }

      if (data && data.length > 0) {
        navigate("/results", { state: { data, type: selectedOption } });
      } else {
        console.log("No data found for the given query.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
        padding: 1em;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 2em;
        z-index: 1;
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s; /* Add visibility to the transition */
        border-radius: 0.375rem; /* Equivalent to sm-rounded in Tailwind */
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
          padding: 0.2em;
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
        <img
          src={logo}
          alt="InfoTrove Logo"
          className="size-20 cursor-pointer"
          onClick={scrollToTop}
        />

        <ul className=" ml-[15%] flex items-center justify-between gap-2 sm:ml-[39.5%]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setShowArticlesDropdown(true)}
            onMouseLeave={() => setShowArticlesDropdown(false)}
          >
            <p to="/articles" className="cursor-pointer">
              Articles
            </p>{" "}
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
            <p to="/books" className="cursor-pointer ">
              Books
            </p>{" "}
            {/* Updated path for Books */}
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
