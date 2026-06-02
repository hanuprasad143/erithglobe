import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
// import HeaderSeven from "@/components/header/header-seven";
// import FooterFive from "@/components/footer/footer-five";
import FooterSeven from "@/components/footer/footer-seven";
// import HeaderTwo from "@/components/header/header-two";
import HeaderOne from "@/components/header/header-one";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      {/* <HeaderTwo/> */}
      <HeaderOne />
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
