import TopStories from "../../components/topStories";
import NavBar from "../../components/navbar";
import handleFetch from "../../utils/handleFetch";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesProvider from "../../context/articlesProvider";

const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`
      );
      if (data) setData(data.results)
      if (error) console.log(error);
    };
    doFetch();
  }, []);

  return (
    <div className=" bg-white">
      <ArticlesProvider/>
      <NavBar/>
      <TopStories stories ={data} />
    </div>
  );
};

export default Home;
