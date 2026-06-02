import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import ContactArea from "@/components/contact/contact-area";
// import ContactInfoArea from "@/components/contact/contact-info-area";
// import AboutCampus from "@/components/about/about-campus";
import ErithGallery from "@/components/gallery/gallery";

export const metadata: Metadata = {
  title: "Gallery - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbOne
        title="Inspirations"
        subtitle="Explore Our Work & Moments"
        color="color"
        pages={true}
      />
      {/* contact area start */}
      {/* <ContactArea /> */}
      {/* contact area end */}
      {/* <ContactInfoArea /> */}
      {/* 
      <AboutCampus /> */}
      {/* <div className="tp-map-area mb-50">
        <div className="tp-contact-map-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14539.849890984015!2d54.482767351645464!3d24.34779985307368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%203%2C%20Plot%20%2384%2C%20Mussafah%20M40%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1757593238170!5m2!1sen!2sin"
            width="600"
            height="450"
          ></iframe>
        </div>
      </div> */}

      <ErithGallery />

      {/* contact info area end */}

      {/* map area start */}

      {/* map area end */}
    </main>
  );
}
