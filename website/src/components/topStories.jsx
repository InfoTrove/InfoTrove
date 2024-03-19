const TopStories = ({ stories }) => {
  return (
    <div className="w-full m-auto">
      <div className="mt-20 flex overflow-x-auto space-x-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex-none relative text-black rounded-3xl"
          >
            <div className="w-96 h-auto relative">
              <img
                src={story.multimedia[0].url}
                alt={story.title}
                className="w-full h-auto object-cover rounded-t-3xl"
              />
              <div className="bg-white/75 dark:bg-darkBackground/75 rounded-b-3xl p-6">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold">
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

export default TopStories;
