import TopStories from "../../components/topStories";
import NavBar from "../../components/navbar";
import handleFetch from "../../utils/handleFetch";
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Author from "../../components/author";
import Footer from "../../components/footer";
const Home = () => {
  const navbarRef = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`,
        { cache: "force-cache" }
      );
      if (data) setData(data.results), console.log("top Stories", data);
      if (error) console.log(error);
    };
    doFetch();
  }, []);
  return (
    <>
      <div className=" bg-white ">
        <NavBar ref={navbarRef} />
        <TopStories stories={data} />
        <Author />
        <Footer
          scrollToTop={() =>
            navbarRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </>
  );
};

export default Home;
