import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function RenderPortableText({ content, color, classNameCopy, preview = false }) {
  const textColor = color || "text-darkGreen";

  const myPortableTextComponents = {
    block: {
      normal: ({ children }) => {
        if (children[0].length == 0) {
          return <br></br>;
        }
        return <p className={`${textColor} ${classNameCopy} leading-6`}>{children}</p>;
      },
    },
    types: {
      image: ({ value }) => (
        <Image
          width={value.asset.metadata.dimensions.width}
          height={value.asset.metadata.dimensions.height}
          src={value.asset.url}
        />
      ),
      span: ({ children }) => <span className={`${textColor}`}>{children}</span>,
      paragraph: ({ children }) => <p className={`${textColor}`}>{children}</p>,
    },
    listItem: {
      bullet: ({ children }) => <li className={`list-[square] ${textColor} mb-2`}>{children}</li>,
      numbered: ({ children }) => <li className={`list-decimal ${textColor} mb-2`}>{children}</li>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <a href={value.href} rel={rel} className="hover:underline">
            {children}
          </a>
        );
      },
    },
  };

  const previewComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <p
            className={`${textColor} ${classNameCopy} leading-6 overflow-hidden whitespace-nowrap text-ellipsis`}
          >
            {children}
          </p>
        );
      },
    },
  };

  if (preview) {
    return <PortableText value={content[0]} components={previewComponents} />;
  }

  return <PortableText value={content} components={myPortableTextComponents} />;
}
