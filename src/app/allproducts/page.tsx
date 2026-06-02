// import React from "react";
// import { Metadata } from "next";
// // import HeroAreaOne from "@/components/hero-area/hero-area-one";
// // import ServiceOne from "@/components/service/service-one";
// // import AboutOne from "@/components/about/about-one";
// // import CounterOne from "@/components/counter/counter-one";
// // import ProgramArea from "@/components/program/program-area";
// // import EventArea from "@/components/event/event-area";
// // import TestimonialOne from "@/components/testimonial/testimonial-one";
// // import BlogOne from "@/components/blog/blog-one";
// // import InstagramArea from "@/components/instagram/instagram-area";
// // import CtaOne from "@/components/cta/cta-one";
// // import TeamArea from "@/components/team/team-area";
// // import LeadershipArea from "@/app/(university)/university-leadership/_components/leadership-area";
// // import TestimonialTwo from "@/components/testimonial/testimonial-two";
// // import HeaderTopSection from "@/components/hero-area/header-top-section";
// // import ServicesStyle1 from "@/components/services/services-style1";
// // import AboutStyle1 from "@/components/about/about-erith";
// // import RequestCallStyle1 from "@/components/request/requeststyle";
// import ContactForm from "@/components/form/contact-form";
// // import PricingPage from "@/components/globe/erithWorld";
// import AllProducts from "@/components/allproducts/allproducts";
// // import Features from "@/components/feature/features"
// // import HeroSlider from "@/components/hero-area/hero-slider";
// // import BackToTop from "@/components/back-to-top";
// // import HeroAreaFive from "@/components/hero-area/hero-area-five";

// export const metadata: Metadata = {
//   title: "Erith Global all Products",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function AllProductsPage() {
//   return (
//     <main>
//       {/* <HeaderTopSection /> */}
//       {/* hero area start */}
//       <AllProducts />
//       {/* <HeroAreaOne /> */}
//       {/* <ServiceOne /> */}
//       {/* <HeroAreaFive/>

//    */}
//       {/* hero area end */}

//       {/* service area start */}
//       {/* <Features/> */}

//       {/* service area end */}
//       {/* <ServicesStyle1 />
//       <AboutStyle1 />
//       <PricingPage />
//       <EventArea />
//       <RequestCallStyle1 /> */}

//       {/* about area start */}
//       {/* <AboutOne /> */}
//       {/* about area end */}

//       {/* counter area start */}
//       {/* <CounterOne /> */}
//       {/* counter area end */}

//       {/* program area start */}
//       {/* <ProgramArea /> */}
//       {/* program area end */}

//       {/* event area start */}

//       {/* event area end */}

//       {/* testimonial area start */}
//       {/* <TestimonialOne/> */}
//       {/* testimonial area end */}
//       {/* <TestimonialTwo /> */}
//       {/* blog area start */}
//       {/* <BlogOne/> */}
//       {/* blog area end */}
//       {/* <TeamArea/> */}
//       {/* <LeadershipArea /> */}

//       {/* instagram area start */}
//       {/* <InstagramArea/> */}
//       {/* instagram area end */}

//       {/* cta area start */}
//       <ContactForm />
//       {/* <BackToTop/> */}

//       {/* <HeroSlider/> */}

//       {/* <CtaOne /> */}
//       {/* cta area end */}
//     </main>
//   );
// }

// code commented 30-05-2026

import { Suspense } from "react";
import { Metadata } from "next";
import ContactForm from "@/components/form/contact-form";
import AllProducts from "@/components/allproducts/allproducts";

export const metadata: Metadata = {
  title: "Erith Global all Products",
  icons: {
    icon: "/favicon.png",
  },
};

export default function AllProductsPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <AllProducts />
      </Suspense>
      <ContactForm />
    </main>
  );
}