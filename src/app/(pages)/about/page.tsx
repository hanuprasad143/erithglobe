import { Metadata } from "next";
import AboutBanner from "@/components/about/banner/about-banner";
// import TutorArea from "@/components/tutor/tutor-area";
// import CounterSix from "@/components/counter/counter-six";
// import MissionArea from "@/components/mission/mission-area";
// import TeamArea from "@/components/team/team-area";
// import BrandArea from "@/components/brand/brand-area";
// import HeroAreaOne from "@/components/hero-area/hero-area-one";
// import HeaderTopArea from "@/components/header/header-top/header-top-area";
// import FooterSeven from "@/components/footer/footer-seven";
import AboutTwo from "@/components/about/about-two";
// import AboutCampus from "@/components/about/about-campus";
import Abouterith from "@/components/about/erith-aboutpage";
import ContactForm from "@/components/form/contact-form";
export const metadata: Metadata = {
  title: "About - Erith ",
  icons: {
    icon: "/favicon.png",
  },
};

async function getAboutData() {
  try {
    const res = await fetch(
      "https://backend-test-yeyr.onrender.com/api/company-pages/about-us",
      {
        cache: "no-store",
      },
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch about data:", error);
    return null;
  }
}

export default async function AboutPage() {
  const aboutData = await getAboutData();
  return (
    <main>
      {/* <HeaderTopArea />  */}

      <AboutBanner
        banner_title={aboutData?.banner_title}
        banner_subtitle={aboutData?.banner_subtitle}
        banner_image={aboutData?.banner_image} // ✅ e.g. "/uploads/Oil_andas.png"
      />
      <Abouterith />
      {/* <AboutTwo spacing="pt-90 pb-90" /> */}
      <div id="industries">
        <AboutTwo spacing="pt-90 pb-90" />
      </div>
      <ContactForm />

      {/* about banner area start */}

      {/* about banner area end */}

      {/* tutor area start */}
      {/* <TutorArea /> */}
      {/* tutor area end */}

      {/* counter area start */}
      {/* <CounterSix/> */}
      {/* counter area end */}

      {/* mission area start */}

      {/* <MissionArea top_cls="" /> */}

      {/* mission area end */}
      {/* <HeroSlider/> */}

      {/* team area start */}
      {/* <TeamArea/> */}
      {/* team area end */}
      {/* <ContactArea /> */}
      {/* brand area start */}
      {/* <BrandArea/> */}
      {/* brand area end */}
      {/* <FooterSeven/> */}
    </main>
  );
}
