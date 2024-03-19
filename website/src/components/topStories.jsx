const TopStories = ({ stories }) => {
  return (
    <>
    <ul>
      {stories.map((story) => (
        <div className="flex" key={story.title}>
        <li className=" bg-white-500"key={story.title}>{story.title}</li>
        <img className = "border-solid border-4 border-light-blue-500 ..."key = {story.created_date}src={story.multimedia[0].url} alt={story.title} />
        </div>
      ))}
      <li>Stories</li>
      <li>Stories2</li>
      <li>Stories3</li>
      <li>Stories4</li>
    </ul>
    </>
  );
};

export default TopStories;
