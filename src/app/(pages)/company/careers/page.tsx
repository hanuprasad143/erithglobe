import { Metadata } from "next";

import CareersBanner from "@/components/about/banner/careers-banner";
import ErithCareersArea from "@/components/careers/erithcareers";

export const metadata: Metadata = {
  title: "Careers - Erith",
  icons: { icon: "/favicon.png" },
};

async function getAboutData() {
  try {
    const res = await fetch(
      "https://backend-test-yeyr.onrender.com/api/company-pages/careers",
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

export default async function CareersPage() {
  const aboutData = await getAboutData();

  return (
    <main>
      {/* <AboutBanner
        banner_title={aboutData?.banner_title || "About Us"}
        banner_subtitle={aboutData?.banner_subtitle || ""}
        banner_image={aboutData?.banner_image || "/assets/img/banner/about-banner.jpg"}
      /> */}
      <CareersBanner
        banner_title={aboutData?.banner_title}
        banner_subtitle={aboutData?.banner_subtitle}
        banner_image={aboutData?.banner_image} // ✅ e.g. "/uploads/Oil_andas.png"
      />
      <ErithCareersArea />
      {/* <ContactForm /> */}
    </main>
  );
}
