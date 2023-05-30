import ButtonGroup from "./blocks/ButtonGroup";
import Copy from "./blocks/Copy";
import Title from "./blocks/Title";

export default function RenderBlocks({
  blocks,
  classNameButton,
  classNameTitle,
  classNameCopy,
  titleSize,
  buttonType,
}) {
  return (
    <>
      {blocks?.map((block, i) => {
        return (
          <Block
            classNameTitle={classNameTitle}
            classNameButton={classNameButton}
            classNameCopy={classNameCopy}
            titleSize={titleSize}
            buttonType={buttonType}
            block={block}
            key={i}
          ></Block>
        );
      })}
    </>
  );
}

function Block({ block, classNameTitle, classNameButton, titleSize, buttonType, classNameCopy }) {
  switch (block._type) {
    case "block.title":
      return <Title classNameTitle={classNameTitle} titleSize={titleSize} block={block} />;
    case "block.copy":
      return <Copy block={block} classNameCopy={classNameCopy} />;
    case "block.buttonGroup":
      return (
        <ButtonGroup classNameButton={classNameButton} buttonType={buttonType} block={block} />
      );
    default:
      return null;
  }
}
