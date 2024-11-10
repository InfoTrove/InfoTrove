import { gql, useQuery } from "@apollo/client";
import TopStories from "../../components/topStories";
import NavBar from "../../components/navbar";
import { useState, useRef } from "react";
import Author from "../../components/author";
import Footer from "../../components/footer";

const GET_TOP_STORIES = gql`
  query GetTopStories($section: String!) {
    getTopStories(section: $section) {
      title
      abstract
      url
      multimedia {
        url
      }
    }
  }
`;

const Home = () => {
  const topStoriesRef = useRef(null);
  const navbarRef = useRef(null);
  const { data, loading, error } = useQuery(GET_TOP_STORIES, {
    variables: { section: "world" }, // Default section
  });

  const scrollToTopStories = () => {
    const yOffset = -100;
    const element = topStoriesRef.current;
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="animate-pulse text-3xl font-semibold text-gray-300">
            Loading...
          </h1>
          <div className="mt-4 h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
        </div>
      </div>
    );
  if (error) return <div>Error loading top stories: {error.message}</div>;

  return (
    <>
      <div className="bg-white ">
        <NavBar ref={navbarRef} scrollToTop={scrollToTopStories} />
        <TopStories stories={data.getTopStories} ref={topStoriesRef} />
        <Author />
        <Footer scrollToTop={scrollToTopStories} />
      </div>
    </>
  );
};

export default Home;
