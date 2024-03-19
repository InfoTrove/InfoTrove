import TopStories from "../../components/topStories";
import NavBar from "../../components/navbar";
import handleFetch from "../../utils/handleFetch";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesProvider from "../../context/articlesProvider";
import Author from "../../components/author";
const Home = () => {
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState();

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`,
        { cache: "force-cache" }
      );
      if (data) setData(data.results), console.log(data);
      if (error) console.log(error);
    };
    doFetch();
  }, []);

  return (
    <>
    
    <div className=" bg-white ">
      <ArticlesProvider />
      <NavBar />
      <TopStories stories={data} />
      <Author />
    </div>
    </>
  );
};

export default Home;
