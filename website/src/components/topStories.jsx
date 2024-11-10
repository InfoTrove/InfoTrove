import React, { forwardRef, useRef, useEffect, useState } from "react";

const TopStories = forwardRef(({ stories }, ref) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Default Scroll Position
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 900; // Adjust as needed
    }
  }, []);

  // Update Scroll Progress
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const scrollPercentage = (currentScroll / maxScrollLeft) * 100;
      setScrollProgress(scrollPercentage);
    }
  };

  return (
    <div ref={ref} className="mt-16">
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

      {/* Black Background Wrapper for Heading */}
      <div className="bg-neutral-700 pt-7">
        <h1 className="mt-4 text-center text-4xl font-bold text-white">
          Top Stories!
        </h1>
      </div>

      {/* Outer container for gradients and scrollable content */}
      <div className="relative bg-neutral-700">
        {/* Gradient overlays on the left and right sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-neutral-700"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-700"></div>

        {/* Scrollable section with progress indicator */}
        <div
          className="hide-scrollbar mx-auto flex max-w-[93%] overflow-x-auto whitespace-nowrap py-3 transition-all duration-300 "
          ref={containerRef}
          onScroll={handleScroll}
        >
          <ul data-name="articleContainer" className="flex">
            {stories?.map((story, index) => (
              <li
                className="relative m-8 inline-block w-96 bg-neutral-700 transition-all duration-300 hover:scale-[1.05]"
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
                    className="h-96 w-full rounded-md object-cover"
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

        {/* Scroll Progress Indicator */}
        <div className="b-2 relative mx-auto h-2 w-[50%] overflow-hidden rounded-full bg-gray-300 p-2 shadow-inner">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="p-3"> </div>
      </div>
    </div>
  );
});

export default TopStories;
