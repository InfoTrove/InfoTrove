import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import handleFetch from "../../utils/handleFetch";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";


const Articles = () => {
  const { articles } = useContext(ArticlesContext);

  console.log(articles);
  // if (!articles) return <>Loading!</>;

  return (
    <div>
  <NavBar />
  <ul className="flex flex-wrap gap-10 p-[50px]">
    {articles?.map((article, index) => (
      <li key={index} className="border-solid" style={{ width: "18rem" }}> {/* Mimic Card styling */}
        <a href={`${article.web_url}`}>
          <img
            src={`https://www.nytimes.com/${article.multimedia[0].url}`}
            alt={article.headline?.main || "Article image"}
            className="size-28 w-full" // Adjust className to control the image size and make it responsive
            style={{ height: 'auto', maxWidth: '100%' }} // Ensure the image fits within the container
          />
        </a>
        <div className="p-4"> {/* Mimic Card.Body styling */}
          <div className="font-bold text-lg">{article.headline?.main}</div> {/* Mimic Card.Title */}
          <div className="text-sm">{article.abstract}</div> {/* Mimic Card.Text */}
        </div>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Articles;
