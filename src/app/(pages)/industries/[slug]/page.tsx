// import { Metadata } from "next";
// // import AboutBanner from "@/components/about/banner/about-banner";
// // import TutorArea from "@/components/tutor/tutor-area";
// // import CounterSix from "@/components/counter/counter-six";
// // import MissionArea from "@/components/mission/mission-area";
// // import TeamArea from "@/components/team/team-area";
// // import BrandArea from "@/components/brand/brand-area";
// // import HeroAreaOne from "@/components/hero-area/hero-area-one";
// // import HeaderTopArea from "@/components/header/header-top/header-top-area";
// // import FooterSeven from "@/components/footer/footer-seven";
// // import AboutTwo from "@/components/about/about-two";
// // import AboutCampus from "@/components/about/about-campus";
// // import Abouterith from "@/components/about/erith-aboutpage";
// import ContactForm from "@/components/form/contact-form";
// import IndustriesBanner from "@/components/industries/banner/industries-banner";
// import AboutIndustries from "@/components/industries/about-industries";
// export const metadata: Metadata = {
//   title: "Industries - Erith ",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function IndustriesPage() {
//   return (
//     <main>
//       {/* <HeaderTopArea />  */}

//       {/* about banner area start */}
//       <IndustriesBanner />
//       {/* about banner area end */}
//       <AboutIndustries />

//       {/* tutor area start */}
//       {/* <TutorArea /> */}
//       {/* tutor area end */}

//       {/* counter area start */}
//       {/* <CounterSix/> */}
//       {/* counter area end */}

//       {/* mission area start */}
//       {/* <AboutTwo spacing="pt-90 pb-90" /> */}
//       <ContactForm />
//       {/* <MissionArea top_cls="" /> */}

//       {/* mission area end */}
//       {/* <HeroSlider/> */}

//       {/* team area start */}
//       {/* <TeamArea/> */}
//       {/* team area end */}
//       {/* <ContactArea /> */}
//       {/* brand area start */}
//       {/* <BrandArea/> */}
//       {/* brand area end */}
//       {/* <FooterSeven/> */}
//     </main>
//   );
// }

import { Metadata } from "next";
import IndustriesBanner from "@/components/industries/banner/industries-banner";
import AboutIndustries from "@/components/industries/about-industries";
import ContactForm from "@/components/form/contact-form";

const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

type PageProps = {
  params: {
    slug: string;
  };
};

/* ===============================
   ✅ SEO (Dynamic)
================================ */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(`${BASE_URL}/industry-pages/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Industry - Erith",
    };
  }

  const data = await res.json();

  return {
    title: data?.banner_title || "Industry - Erith",
    description: data?.about_description?.slice(0, 150),
    icons: {
      icon: "/favicon.png",
    },
  };
}

/* ===============================
   ✅ PAGE
================================ */
export default async function IndustryDetailPage({ params }: PageProps) {
  const res = await fetch(`${BASE_URL}/industry-pages/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-10 text-center text-red-500">❌ Page not found</div>
    );
  }

  const data = await res.json();

  return (
    <main>
      {/* 🔥 Banner */}
      <IndustriesBanner data={data} />

      {/* 🔥 About */}
      <AboutIndustries data={data} />

      {/* 🔥 Contact */}
      <ContactForm />
    </main>
  );
}
