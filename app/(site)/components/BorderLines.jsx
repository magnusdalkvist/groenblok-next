export default function BorderLines({ children, className, side }) {
  switch (side) {
    case "right":
      return (
        <div className={className}>
          <div className="p-4 pt-8 relative">
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-black" />
            <div className="absolute right-0 bottom-0 top-0 w-[1px] bg-black" />
            <div className="absolute top-[14px] right-[-2px] h-[5px] w-[5px] bg-black" />
            {children}
          </div>
        </div>
      );
    default:
      return (
        <div className={className}>
          <div className="p-4 pt-8 relative">
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-black" />
            <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-black" />
            <div className="absolute top-[14px] left-[-2px] h-[5px] w-[5px] bg-black" />
            {children}
          </div>
        </div>
      );
  }
}
