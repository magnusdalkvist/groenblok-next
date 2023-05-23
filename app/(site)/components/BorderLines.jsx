export default function BorderLines({ children, className, side }) {
  switch (side) {
    case "right":
      return (
        <div className={className}>
          <div className="p-4 pt-8 relative">
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-darkGreen" />
            <div className="absolute right-0 bottom-0 top-0 w-[1px] bg-darkGreen" />
            <div className="absolute top-[13px] right-[-3px] h-[7px] w-[7px] bg-darkGreen" />
            {children}
          </div>
        </div>
      );
    case "center":
      return (
        <div className={className}>
          <div className="p-4 pt-8 relative">
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-darkGreen" />
            <div className="absolute right-0 bottom-0 top-0 w-[1px] bg-darkGreen" />
            <div className="absolute top-[13px] right-[-3px] h-[7px] w-[7px] bg-darkGreen" />
            <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-darkGreen" />
            <div className="absolute top-[13px] left-[-3px] h-[7px] w-[7px] bg-darkGreen" />
            {children}
          </div>
        </div>
      );
    default:
      return (
        <div className={className}>
          <div className="p-4 pt-8 relative">
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-darkGreen" />
            <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-darkGreen" />
            <div className="absolute top-[13px] left-[-3px] h-[7px] w-[7px] bg-darkGreen" />
            {children}
          </div>
        </div>
      );
  }
}
