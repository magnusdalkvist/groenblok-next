import Button from "../Button";

export default function ButtonGroup({ block, classNameButton, buttonType, buttonWrapper }) {
  return (
    <div className={`flex gap-4 ${buttonWrapper}`}>
      {block?.buttons?.map((button, i) => {
        return (
          <Button className={classNameButton} key={i} type={buttonType} href={button?.link}>
            {button?.text}
          </Button>
        );
      })}
    </div>
  );
}
