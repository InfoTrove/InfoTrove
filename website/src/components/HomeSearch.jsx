import { useState } from "react";
import handleFetch from "../utils/handleFetch";
const SearchBar = () => {


// list of valid categories for books - https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp
// valid categories for articles - https://developer.nytimes.com/docs/articlesearch-product/1/overview
// movie - horror , action etc 
  let apiKey = `S40TyD7zGe3HkXJZD4MiENxkBybALIxp`;

  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [query, setQuery] = useState("");
  //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movies&api-key=yourkey article/movies

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    // Delay hiding the options a bit to allow click event to register on options
    setTimeout(() => {
      if (!query) {
        setIsActive(false);
      }
    }, 200);
  };

  const handleKeyDown = async (e) => {
    // Check if it's the Enter key
    if (e.key === "Enter") {
      // Check the selectedOption and query to decide which search logic to execute
      let url;
      if (selectedOption === "articles") {
        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${query}")&api-key=${apiKey}`;
      } else if (selectedOption === "books") {
        url = `https://api.nytimes.com/svc/books/v3/lists/current/${query}.json?api-key=${apiKey}`;
      } else if (selectedOption === "movies") {
        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=section_name:("Movies")&api-key=${apiKey}`;
      }
      if (url) {
        console.log(
          `searching for ${selectedOption} category : ${query} --> ${url} `
        );
        const [data, error] = await handleFetch(url);

        if (error) console.error("Error fetching data: ", error);
        if (data) console.log(data);
      }

      e.preventDefault();
    } else if (e.key === "Backspace" && query === "") {
      setSelectedOption("");
      setIsActive(true);
    }
  };

  return (
    <div>
      <input
        className="bg-neutral-700 w-96 rounded-full h-8 pl-4"
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
        <div className="flex">
          <button
            className="mx-2"
            onClick={() => setSelectedOption("articles")}
          >
            Articles
          </button>
          <button className="mx-2" onClick={() => setSelectedOption("movies")}>
            Movies
          </button>
          <button className="mx-2" onClick={() => setSelectedOption("books")}>
            Books
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
