import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grøn Blok",
  description:
    "Grøn Blok er en forening for unge mellem 15 og 30 år, der arbejder for et grønnere Danmark.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Cache-Control" content="public" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
