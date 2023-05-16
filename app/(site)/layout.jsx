import "../globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";
import { getSanitySettings } from "../../sanity/fragments/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grøn Blok",
  description:
    "Grøn Blok er en forening for unge mellem 15 og 30 år, der arbejder for et grønnere Danmark.",
};

export default async function RootLayout({ children }) {
  const sanitySettings = await getSanitySettings();
  const headersList = headers();
  const referer = headersList.get("referer");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header module={sanitySettings.headerTemplate.modules[0]} />
        {children}
        <Footer module={sanitySettings.footerTemplate.modules[0]} />
      </body>
    </html>
  );
}
