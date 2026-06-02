import { Metadata } from "next";

// import BlogStandardArea from "@/components/blog/blog-standard-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import ErithBlogArea from "@/components/blog/erith-blog"
import ErithCareersArea from "@/components/careers/erithcareers";

export const metadata: Metadata = {
  title: "Careers-Details - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function CareersStandardPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne
        subtitle="Careers"
        title="Be a part of our mission"
        description="We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility. "
      />
      {/* breadcrumb area end */}

      {/* blog standard area start */}
      {/* <BlogStandardArea/> */}
      <ErithCareersArea />
      {/* blog standard area end */}
    </main>
  );
}
