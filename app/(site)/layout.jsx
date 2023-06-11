import "../globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";
import { getSanitySettings } from "../../sanity/fragments/sanity-utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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

  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="da">
      <body className={inter.className}>
        <Header module={sanitySettings.headerTemplate.modules[0]} session={session} />
        <main className="flex-1">{children}</main>
        <Footer module={sanitySettings.footerTemplate.modules[0]} />
      </body>
    </html>
  );
}
