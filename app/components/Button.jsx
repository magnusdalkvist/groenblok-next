import clsx from "clsx";

export default function Button({ type = "default", className = "px-4 py-1", children, href = "" }) {
  switch (type) {
    case "shadow":
      return (
        <button className={clsx("button-shadow", className)}>
          <a href={href}>{children}</a>
        </button>
      );
    case "block":
      return (
        <button href={href} className={clsx("button-block", className)}>
          <a href={href}>{children}</a>
        </button>
      );
    default:
      return (
        <button href={href} className={clsx(className)}>
          <a href={href}>{children}</a>
        </button>
      );
  }
}
