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
      <ul>
        {articles?.map((article) => (
          <li>
            <div>
              <a href={`${article.web_url}`}>
                <img
                  src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                  alt=""
                />
              </a>
            </div>
            <div>{article.abstract}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
