// // import { Metadata } from "next";
// // // import AboutBanner from "@/components/about/banner/about-banner";
// // // import ResourceBanner from "@/components/resources/resource-banner";
// // // import TutorArea from "@/components/tutor/tutor-area";
// // // import CounterSix from "@/components/counter/counter-six";
// // // import MissionArea from "@/components/mission/mission-area";
// // // import TeamArea from "@/components/team/team-area";
// // // import BrandArea from "@/components/brand/brand-area";
// // // import HeroAreaOne from "@/components/hero-area/hero-area-one";
// // // import HeaderTopArea from "@/components/header/header-top/header-top-area";
// // // import FooterSeven from "@/components/footer/footer-seven";
// // // import AboutTwo from "@/components/about/about-two";
// // // import AboutCampus from "@/components/about/about-campus";
// // // import Abouterith from "@/components/about/erith-aboutpage";
// // // import ContactForm from "@/components/form/contact-form";
// // import KnowledgeCenterBanner from "@/components/knowledgecenter/knowledge-center-banner";
// // export const metadata: Metadata = {
// //   title: "Knowledge Center - Erith ",
// //   icons: {
// //     icon: "/favicon.png",
// //   },
// // };

// // export default function AboutPage() {
// //   return (
// //     <main>
// //       {/* <ResourceBanner /> */}
// //       <KnowledgeCenterBanner />
// //     </main>
// //   );
// // }

// import { Metadata } from "next";
// import KnowledgeCenterBanner from "@/components/knowledgecenter/knowledge-center-banner";
// export const metadata: Metadata = {
//   title: "Knowledge Center - Erith ",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function AboutPage() {
//   return (
//     <main>
//       {/* <ResourceBanner /> */}
//       <KnowledgeCenterBanner />
//     </main>
//   );
// }


// -----------******************* code commented on dated 30-05-2026 ******************------------------//

import { Suspense } from "react";
import { Metadata } from "next";
import KnowledgeCenterBanner from "@/components/knowledgecenter/knowledge-center-banner";

export const metadata: Metadata = {
  title: "Knowledge Center - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <KnowledgeCenterBanner />
      </Suspense>
    </main>
  );
}