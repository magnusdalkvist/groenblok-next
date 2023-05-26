import InstagramFeed from "../InstagramFeed";

export default function InstagramFeedComponent({ module }) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  const instafeedConfig = {
    get: "user",
    resolution: "low_resolution",
    accessToken,
    limit: 3,
  };
  return (
    <div className="">
      <h2 className="text-center">{module?.title}</h2>
      <InstagramFeed instafeedConfig={instafeedConfig} />
    </div>
  );
}
