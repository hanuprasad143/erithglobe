import MainProvider from "@/components/provider/main-provider";
// import HeaderTwo from "@/components/header/header-two";
import { Metadata } from "next";
import BackToTop from "@/components/back-to-top";
import FooterSeven from "@/components/footer/footer-seven";
import HeaderOne from "@/components/header/header-one";

export const metadata: Metadata = {
  title: "Search Results-Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* <HeaderSeven inner={true} /> */}
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterSeven />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
