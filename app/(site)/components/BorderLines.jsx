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
  innerStyle = "",
}) {
  const topLinePadding = paddingTop || "pt-4";
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
          <div className={`${topLinePadding} relative h-full`}>
            <div className={`absolute left-0 ${posRight} ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute right-0 bottom-0 ${sidelineHeight} w-[1px] ${lineColor}`} />
            <div
              className={`absolute ${posTopBlock} right-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`}
            />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "center":
      return (
        <div className={className}>
          <div className={`${topLinePadding} relative h-full`}>
            <div className={`absolute left-0 right-0 ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute right-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[13px] right-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`} />
            <div className={`absolute left-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[13px] left-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`} />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "split":
      return (
        <div className={className}>
          <div className="relative h-full">
            <div className={`absolute right-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div
              className={`absolute top-[102px] right-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`}
            />
            <div className={`absolute left-0 bottom-0 top-0 w-[1px] ${lineColor}`} />
            <div className={`absolute top-[77px] left-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`} />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "hero":
      return (
        <div className={className}>
          <div className={`relative h-full`}>
            <div className={`absolute left-0 right-0 ${posTop} h-[2px] ${lineColor} z-10`} />
            <div className={`absolute right-[40px] bottom-[70%] top-0 w-[2px] ${lineColor} z-10`} />
            <div
              className={`absolute top-[14px] right-[37px] h-[7px] w-[7px] z-10 ${lineColor} z-10`}
            />
            <div className={`absolute left-[40px] bottom-[20%] top-0 w-[2px] ${lineColor} z-10`} />
            <div
              className={`absolute top-[14px] left-[37px] h-[7px] w-[7px] z-10 ${lineColor} z-10`}
            />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "left":
      return (
        <div className={className}>
          <div className={`${topLinePadding} relative h-full`}>
            <div className={`absolute ${posLeft} right-0 ${posTop} h-[1px] ${lineColor}`} />
            <div
              className={`absolute left-0 ${posBottom} ${sidelineHeight} w-[1px] ${lineColor}`}
            />
            <div
              className={`absolute ${posTopBlock} left-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`}
            />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "line":
      return (
        <div className={className}>
          <div className={`relative`}>
            <div className={`absolute left-0 right-0 ${posTop} h-[1px] ${lineColor}`} />
            <div className={`absolute top-[13px] left-[-3px] h-[7px] w-[7px] z-10 ${lineColor}`} />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    case "line-down":
      return (
        <div className={className}>
          <div className={`relative`}>
            <div
              className={`absolute top-[13px] left-[-3px] h-[7px] w-[7px] z-10 ${lineColor} z-10`}
            />
            <div className={`absolute left-[5px] bottom-0 top-0 w-[1px] ${lineColor} z-10`} />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
    default:
      return (
        <div className={className}>
          <div className={`${topLinePadding} relative h-full`}>
            <div className={`absolute left-0 right-0 top-4 h-[1px] ${lineColor}`} />
            <div className={innerStyle}>{children}</div>
          </div>
        </div>
      );
  }
}
