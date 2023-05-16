import "../globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grøn Blok",
  description:
    "Grøn Blok er en forening for unge mellem 15 og 30 år, der arbejder for et grønnere Danmark.",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const referer = headersList.get("referer");
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
