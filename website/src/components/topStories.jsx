import { useRef } from "react";
// useRef created a Mutable Reference to a dom element . Making it intractable In React code
// When an Element is scrollable it gains scroll properties
// When scroll functions are invoked, they check the current scroll position
// The containerRef contains the mutable reference to the DOM element => scrollable container
// reference allows for manipulating its methods
// current in ref is current rendered Element
const TopStories = ({ stories }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 900;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 900;
    }
  };

  return (
    <>
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
      <div className="relative flex justify-center items-center hide-scrollbar bg-neutral-700">
        <button
          data-name="leftButton"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 hover:bg-red-700"
          onClick={scrollLeft}
        >
          {"<---"}
        </button>
        <div
          ref={containerRef}
          className="flex overflow-x-auto whitespace-nowrap max-w-[95%] py-3 hide-scrollbar relative"
        >
          <ul data-name="articleContainer" className="flex">
            {stories.map((story, index) => (
              <li
                className="relative inline-block bg-orange-500 w-96 m-8"
                key={index}
              >
                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white title-container">
                  {story.title}
                </div>
                <img
                  className="h-96 object-cover"
                  src={story.multimedia[0].url}
                  alt={story.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          data-name="rightButton"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 hover:bg-red-700"
          onClick={scrollRight}
        >
          {"--->"}
        </button>
      </div>
    </>
  );
};

export default TopStories;
