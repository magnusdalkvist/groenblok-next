import InstagramFeed from "../InstagramFeed";

export default function InstagramFeedComponent({ module }) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  console.log(accessToken);

  const instafeedConfig = {
    get: "user",
    resolution: "low_resolution",
    accessToken,
    limit: 3,
  };
  return (
    <div className="py-20">
      <h2 className="text-center">{module?.title}</h2>
      <InstagramFeed instafeedConfig={instafeedConfig} />
    </div>
  );
}
