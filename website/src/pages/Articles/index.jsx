import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer"
import handleFetch from "../../utils/handleFetch";
import ArticlesContext from "../../context/articlesContext";
import { useContext } from "react";

const Articles = () => {
  const { articles } = useContext(ArticlesContext);

  console.log(articles);
  if (!articles) return <>Loading!</>;

  return (
    <div>
      <NavBar />
      <ul className="flex flex-wrap gap-10 p-[50px]">
        {articles?.map((article, index) => (
          <li key={index} className="border-solid" style={{ width: "18rem" }}>
            <a href={`${article.web_url}`}>
              <img
                src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                alt={article.headline?.main || "Article image"}
                className="size-28 w-full"
                style={{ height: "auto", maxWidth: "100%" }}
              />
            </a>
            <div className="p-4">
              <div className="font-bold text-lg">{article.headline?.main}</div>
              <div className="text-sm">{article.abstract}</div>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Articles;
