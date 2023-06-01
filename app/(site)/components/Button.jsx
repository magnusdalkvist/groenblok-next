import clsx from "clsx";

export default function Button({ type = "default", className, children, href = "" }) {
  switch (type) {
    case "hero":
      return (
        <a href={href} className={clsx("button-hero", className)}>
          {children}
        </a>
      );
    case "trans":
      return (
        <a href={href} className={clsx("button-trans", className)}>
          {children}
        </a>
      );
    case "trans-light":
      return (
        <a href={href} className={clsx("button-trans-light", className)}>
          {children}
        </a>
      );
    case "block":
      return (
        <a href={href} className={clsx("button-block", className)}>
          {children}
        </a>
      );
    default:
      return (
        <a href={href} className={clsx(className)}>
          {children}
        </a>
      );
  }
}
