import type { Metadata } from "next";
import "./globals.scss";
import { Jost, Crimson_Pro, Noto_Sans, Poppins } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar";

const outfit_bold = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-body",
});
// const outfit_heading = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--tp-ff-heading",
// });

const outfit_heading = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-heading",
});
const outfit_p = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-p",
});
const jost_primary = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-primary",
});
const crismon_secondary = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-secondary",
});

export const metadata: Metadata = {
  title: "Erith",
  description: "Erith Global",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}
      >
        {children}
        <SocialSidebar />
      </body>
    </html>
  );
}
