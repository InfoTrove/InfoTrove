const TopStories = ({ stories }) => {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 flex overflow-x-auto space-x-4">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex-none relative text-black rounded-3xl"
          >
            <div className="w-80 h-96 relative">
              <img
                src={story.multimedia[0].url}
                alt={story.title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 w-full p-4 bg-white/60 dark:bg-darkBackground/60 rounded-b-3xl">
                <p className="text-xl md:text-2xl font-semibold truncate">
                  {story.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// <>
//   <ul className="flex overflow-x-auto">
//     {stories.map((story, index) => (
//       <div key={index}>
//         <li className=" bg-orange-500 " key={index}>
//           {story.title}
//         </li>
//         <img
//           className=" border-red-400 size-[100% ]"
//           key={story.created_date}
//           src={story.multimedia[0].url}
//           alt={story.title}
//         />
//       </div>
//     ))}
//   </ul>
// </>
export default TopStories;
