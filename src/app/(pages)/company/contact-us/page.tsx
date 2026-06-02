import { Metadata } from "next";
import CareersBanner from "@/components/about/banner/careers-banner";
import ContactForm from "@/components/form/contact-form";
import ContactInfoArea from "@/components/contact/contact-info-area";
import AboutCampus from "@/components/about/about-campus";
export const metadata: Metadata = {
  title: "Contact- Us - Erith",
  icons: { icon: "/favicon.png" },
};

async function getAboutData() {
  try {
    const res = await fetch(
      "https://backend-test-yeyr.onrender.com/api/company-pages/contact-us",
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
      <CareersBanner
        banner_title={aboutData?.banner_title}
        banner_subtitle={aboutData?.banner_subtitle}
        banner_image={aboutData?.banner_image} // ✅ e.g. "/uploads/Oil_andas.png"
      />
      {/* <ErithCareersArea /> */}
      {/* <ContactForm /> */}
      <section className="tp-contact-area tp-contact-p fix p-relative pt-10 ">
        <div className="tp-contact-shape-2"></div>
        <div className="container">
          <div
            className="tp-about-wrap mb-60 wow fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="tp-contact-wrap p-relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInfoArea />
      <AboutCampus />
    </main>
  );
}
