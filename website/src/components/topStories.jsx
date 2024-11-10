// useRef created a Mutable Reference to a dom element . Making it intractable In React code
// When an Element is scrollable it gains scroll properties
// When scroll functions are invoked, they check the current scroll position
// The containerRef contains the mutable reference to the DOM element => scrollable container
// reference allows for manipulating its methods
// current in ref is current rendered Element
import { Link } from "react-router-dom";
import React, { forwardRef, useEffect } from "react";
import { useRef } from "react";
const TopStories = forwardRef(({ stories }, ref) => {
  const containerRef = useRef(null);
  const scrollAmount = 895;
  // console.log(stories[0].multimedia[0].url, "testStoryImage");
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  //
  return (
    <div ref={ref}>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, Opera */
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .title-container {
            max-width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>
      <div className="hide-scrollbar relative mt-[5rem] flex items-center justify-center bg-neutral-700">
        <button
          data-name="leftButton"
          className="absolute left-5 top-1/2 -translate-y-1/2 transform hover:bg-neutral-600 z-10 bg-neutral-700"
          onClick={scrollLeft}
        >
          {"<---"}
        </button>
        <div
          ref={containerRef}
          className="hide-scrollbar relative mx-auto flex max-w-[93%] overflow-x-auto whitespace-nowrap py-3 transition-all duration-300 "
        >
          <ul data-name="articleContainer" className="mx-auto flex">
            {stories?.map((story, index) => (
              <li
                className="relative m-8 inline-block w-96 bg-neutral-700  transition-all duration-300 hover:scale-[1.05]"
                key={index}
              >
                <div className="title-container absolute bottom-0 left-0 rounded-sm bg-black bg-opacity-50 p-4 text-white">
                  {story.title}
                </div>
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Read Story!"
                >
                  <img
                    className="h-96 rounded-md object-cover"
                    src={
                      story.multimedia && story.multimedia[0]
                        ? story.multimedia[0].url
                        : "default-image-path.jpg"
                    }
                    alt={story.title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          data-name="rightButton"
          className="absolute right-5 top-1/2 -translate-y-1/2 transform hover:bg-neutral-600 bg-neutral-700"
          onClick={scrollRight}
        >
          {"--->"}
        </button>
      </div>
    </div>
  );
});

export default TopStories;
