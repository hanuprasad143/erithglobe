import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";
import AboutCampus from "@/components/about/about-campus";

export const metadata: Metadata = {
  title: "Contact - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* contact area start */}
      <ContactArea />
      {/* contact area end */}

      <AboutCampus />
      <ContactInfoArea />

      {/* contact info area start */}

      {/* contact info area end */}

      {/* map area start */}

      {/* map area end */}
    </main>
  );
}
