import React from "react";
import HeaderOne from "@/components/header/header-one";
// import FooterOne from "@/components/footer/footer-one";
// import FooterTwo from "@/components/footer/footer-two";
// import FooterThree from "@/components/footer/footer-three";
// import FooterFour from "@/components/footer/footer-four";
// import FooterFive from "@/components/footer/footer-five";
// import FooterSix from "@/components/footer/footer-six";
import FooterSeven from "@/components/footer/footer-seven";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      {/* <FooterOne/>
      <FooterTwo/> */}
      {/* <FooterThree/> */}
      {/* <FooterFour/> */}
      {/* <FooterOne/>
      <FooterTwo/> */}
      {/* <FooterThree/> */}
      {/* <FooterFour/>
      <FooterFive/> */}
      {/* <FooterSix/> */}
      <FooterSeven />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
    </MainProvider>
  );
}
