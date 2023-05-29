import ButtonGroup from "./blocks/ButtonGroup";
import Copy from "./blocks/Copy";
import Title from "./blocks/Title";

export default function RenderBlocks({ blocks, classNameButton, classNameTitle, titleSize }) {
  return (
    <>
      {blocks?.map((block, i) => {
        return (
          <Block
            classNameTitle={classNameTitle}
            classNameButton={classNameButton}
            titleSize={titleSize}
            block={block}
            key={i}
          ></Block>
        );
      })}
    </>
  );
}

function Block({ block, classNameTitle, classNameButton, titleSize }) {
  switch (block._type) {
    case "block.title":
      return <Title classNameTitle={classNameTitle} titleSize={titleSize} block={block} />;
    case "block.copy":
      return <Copy block={block} />;
    case "block.buttonGroup":
      return <ButtonGroup classNameButton={classNameButton} block={block} />;
    default:
      return null;
  }
}
