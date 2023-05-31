import clsx from "clsx";

export default function BorderLinesBox({ children, className }) {
  return (
    <div className="relative p-4">
      <div className="absolute left-0 right-[30%] top-4 h-[1px] bg-darkGreen" />
      <div className="absolute left-4 bottom-[30%] top-0 w-[1px] bg-darkGreen" />
      <div className="absolute left-4 -translate-x-[3px] -translate-y-[3px] h-[7px] w-[7px] bg-darkGreen" />
      <div className="absolute left-[30%] right-0 bottom-4 h-[1px] bg-darkGreen" />
      <div className="absolute right-4 bottom-0 top-[30%] w-[1px] bg-darkGreen" />
      <div className="absolute right-4 bottom-4 translate-x-[3px] translate-y-[3px] h-[7px] w-[7px] bg-darkGreen" />
      <div className={className}>{children}</div>
    </div>
  );
}
