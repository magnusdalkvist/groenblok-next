import InstagramFeed from "../InstagramFeed";

export default function InstagramFeedComponent({ module }) {
  return (
    <div className="">
      <h2 className="text-center">{module?.title}</h2>
      <InstagramFeed></InstagramFeed>
    </div>
  );
}
