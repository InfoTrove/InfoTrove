import { useState } from "react";
import handleFetch from "../utils/handleFetch";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const apiKey = `S40TyD7zGe3HkXJZD4MiENxkBybALIxp`;
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [query, setQuery] = useState("");

  const categoryOptions = {
    movies: ["horror", "Action", "Comedy"],
    articles: ["Politics", "Technology", "Health"],
    books: ["Fiction", "Non-Fiction", "Biographies", "Science"],
  };

  const performSearch = async (searchQuery) => {
    const urlMap = {
      articles: `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${searchQuery}")&api-key=${apiKey}`,
      books: `https://api.nytimes.com/svc/books/v3/lists/current/${searchQuery}.json?api-key=${apiKey}`,
      movies: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&fq=section_name:("Movies")&api-key=${apiKey}`,
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

  const handleInputChange = (e) => setQuery(e.target.value);
  const handleInputFocus = () => setIsActive(true);
  const handleInputBlur = () =>
    setTimeout(() => !query && setIsActive(false), 200);
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && query) {
      e.preventDefault();
      await performSearch(query);
    } else if (e.key === "Backspace" && !query) {
      setSelectedOption("");
      setIsActive(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  const handleSubOptionChange = async (option) => {
    await performSearch(option);
    setIsActive(false);
  };

  return (
    <>
      <div>
        <input
          className="bg-neutral-700 w-96 rounded-full h-8 pl-4 focus:outline-none text-white"
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={
            selectedOption
              ? `Search Category in ${selectedOption}...`
              : "Select Category"
          }
        />
        {isActive && !selectedOption && (
          <div className="flex flex-wrap justify-center">
            {["articles", "movies", "books"].map((option) => (
              <button
                key={option}
                className="text-white bg-blue-500 hover:bg-red-700 text-sm font-bold py-2 px-4 rounded m-1"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {selectedOption && (
          <div className="flex flex-wrap justify-center">
            {categoryOptions[selectedOption]?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSubOptionChange(option)}
                className="text-white bg-green-500 hover:bg-red-700 text-sm font-bold py-2 px-4 rounded m-1"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      <style>
        {`
          @media screen and (max-width: 768px) {
            .search-bar input {
              width: calc(100% - 2rem); /* Adjust input width on small screens */
              margin: 0.5rem; /* Adjust margin */
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchBar;
