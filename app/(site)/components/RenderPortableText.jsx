import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function RenderPortableText({ content, color }) {
  const textColor = color || "text-darkGreen";

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => (
        <Image
          width={value.asset.metadata.dimensions.width}
          height={value.asset.metadata.dimensions.height}
          src={value.asset.url}
        />
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className={`list-[square] ${color} mb-2`}>{children}</li>,
      numbered: ({ children }) => <li className={`list-decimal ${color} mb-2`}>{children}</li>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={content} components={myPortableTextComponents} />;
}
