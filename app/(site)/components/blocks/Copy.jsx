import RenderPortableText from "../RenderPortableText";

export default function Copy({ block, classNameCopy }) {
  return <RenderPortableText classNameCopy={classNameCopy} content={block?.content} />;
}
