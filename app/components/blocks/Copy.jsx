import RenderPortableText from "../RenderPortableText";

export default function Copy({ block }) {
  return <RenderPortableText content={block?.content} />;
}
