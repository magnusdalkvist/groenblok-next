export default function BorderLines({
  children,
  className,
  side,
  color,
  top,
  bottom,
  left,
  right,
  topBlock,
  paddingTop,
  sideline,
}) {
  const topLinePadding = paddingTop || "pt-8";
  const lineColor = color || "bg-darkGreen";
  const posTop = top || "top-4";
  const posTopBlock = topBlock || "top-[13px]";
  const posBottom = bottom || "bottom-0";
  const posLeft = left || "left-0";
  const posRight = right || "right-0";
  const sidelineHeight = sideline || "top-0";

  switch (side) {
    case "right":
      return (
        <div className={className}>
          <div className={`p-4 ${topLinePadding} relative`}>
            <div className={`absolute left-0 ${posRight} ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute right-0 bottom-0 ${sidelineHeight} w-[1px] ${lineColor}`} />
            <div className={`absolute ${posTopBlock} right-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            {children}
          </div>
        </div>
      );
    case "center":
      return (
        <div className={className}>
          <div className={`p-4 ${topLinePadding} relative`}>
            <div className={`absolute left-0 right-0 ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute right-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[13px] right-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            <div className={`absolute left-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[13px] left-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            {children}
          </div>
        </div>
      );
    case "split":
      return (
        <div className={className}>
          <div className="p-4 relative">
            <div className={`absolute right-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[102px] right-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            <div className={`absolute left-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[77px] left-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            {children}
          </div>
        </div>
      );
    case "hero":
      return (
        <div className={className}>
          <div className={`relative`}>
            <div className={`absolute left-0 right-0 ${posTop} h-[1px] ${lineColor} z-10`} />
            <div
              className={`absolute right-[40px] bottom-[70%] top-[-70px] w-[1px] ${lineColor} z-10`}
            />
            <div className={`absolute top-[13px] right-[37px] h-[7px] w-[7px] ${lineColor} z-10`} />
            <div
              className={`absolute left-[40px] bottom-[20%] top-[-70px] w-[1px] ${lineColor} z-10`}
            />
            <div className={`absolute top-[13px] left-[37px] h-[7px] w-[7px] ${lineColor} z-10`} />
            {children}
          </div>
        </div>
      );
    case "left":
      return (
        <div className={className}>
          <div className={`p-4 ${topLinePadding} relative`}>
            <div className={`absolute ${posLeft} right-0 ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute left-0 bottom-0 ${sidelineHeight} w-[1px] ${lineColor}`} />
            <div className={`absolute ${posTopBlock} left-[-3px] h-[7px] w-[7px] ${lineColor}`} />
            {children}
          </div>
        </div>
      );
    default:
      return (
        <div className={className}>
          <div className={`p-4 ${topLinePadding} relative`}>
            <div className="absolute left-0 right-0 top-4 h-[1px] bg-darkGreen" />
            {children}
          </div>
        </div>
      );
  }
}
