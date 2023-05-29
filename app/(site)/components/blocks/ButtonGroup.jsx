import Button from "../Button";

export default function ButtonGroup({ block, classNameButton }) {
  return (
    <div className="flex gap-4">
      {block?.buttons?.map((button, i) => {
        return (
          <Button className={classNameButton} key={i} type="hero" href={button?.link}>
            {button?.text}
          </Button>
        );
      })}
    </div>
  );
}
