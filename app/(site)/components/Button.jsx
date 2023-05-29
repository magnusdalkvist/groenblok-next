import clsx from "clsx";

export default function Button({ type = "default", className, children, href = "" }) {
  switch (type) {
    case "hero":
      return (
        <button className={clsx("button-hero", className)}>
          <a href={href}>{children}</a>
        </button>
      );
    case "trans":
      return (
        <button className={clsx("button-trans", className)}>
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
