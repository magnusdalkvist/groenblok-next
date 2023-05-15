import ButtonGroup from "./blocks/ButtonGroup";
import Copy from "./blocks/Copy";
import Title from "./blocks/Title";

export default function RenderBlocks({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        return <Block block={block} key={i}></Block>;
      })}
    </>
  );
}

function Block({ block }) {
  switch (block._type) {
    case "block.title":
      return <Title block={block} />;
    case "block.copy":
      return <Copy block={block} />;
    case "block.buttonGroup":
      return <ButtonGroup block={block} />;
    default:
      return null;
  }
}
