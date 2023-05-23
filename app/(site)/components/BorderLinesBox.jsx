export default function BorderLinesBox({ children, className }) {
  return (
    <div className={className}>
      <div className=" relative">
        <div className="absolute left-0 right-[30%] top-4 h-[1px] bg-darkGreen" />
        <div className="absolute left-0 bottom-[30%] top-0 w-[1px] bg-darkGreen" />
        <div className="absolute top-[13px] left-[-3px] h-[7px] w-[7px] bg-darkGreen" />
        {children}
        <div className="absolute left-[30%] right-0 bottom-4 h-[1px] bg-darkGreen" />
        <div className="absolute right-0 bottom-0 top-[30%] w-[1px] bg-darkGreen" />
        <div className="absolute bottom-[13px] right-[-3px] h-[7px] w-[7px] bg-darkGreen" />
      </div>
    </div>
  );
}
