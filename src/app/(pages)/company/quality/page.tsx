import { Metadata } from "next";
// import AboutBanner from "@/components/about/banner/about-banner";
// import AboutTwo from "@/components/about/about-two";
// import Abouterith from "@/components/about/erith-aboutpage";
import ErithQualityInfo from "@/components/quality/erith-qualitypage";
import ContactForm from "@/components/form/contact-form";
import QualityBanner from "@/components/about/banner/quality-banner";

export const metadata: Metadata = {
  title: "Quality - Erith",
  icons: { icon: "/favicon.png" },
};

async function getAboutData() {
  try {
    const res = await fetch(
      "https://backend-test-yeyr.onrender.com/api/company-pages/quality",
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
      {/* <AboutBanner
        banner_title={aboutData?.banner_title || "About Us"}
        banner_subtitle={aboutData?.banner_subtitle || ""}
        banner_image={aboutData?.banner_image || "/assets/img/banner/about-banner.jpg"}
      /> */}
      <QualityBanner
        banner_title={aboutData?.banner_title}
        banner_subtitle={aboutData?.banner_subtitle}
        banner_image={aboutData?.banner_image} // ✅ e.g. "/uploads/Oil_andas.png"
      />

      <ErithQualityInfo />

      <ContactForm />
    </main>
  );
}
