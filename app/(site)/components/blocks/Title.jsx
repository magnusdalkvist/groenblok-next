export default function Title({ block, classNameTitle, titleSize }) {
  const Tag = titleSize || "h1";

  return <Tag className={classNameTitle}>{block.text}</Tag>;
}
