import RenderPortableText from "../RenderPortableText";

export default function Copy({ block, classNameCopy }) {
  return <RenderPortableText content={block?.content} />;
}
