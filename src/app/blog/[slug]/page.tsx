import { Metadata } from "next";

// import BlogStandardArea from "@/components/blog/blog-standard-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ErithBlogArea from "@/components/blog/erith-blog";

export const metadata: Metadata = {
  title: "Blog-Details - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function BlogStandardPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne subtitle="Our Blog" title="Industry insights and latest updates." />
      {/* breadcrumb area end */}

      {/* blog standard area start */}
      {/* <BlogStandardArea/> */}
      <ErithBlogArea />
      {/* blog standard area end */}
    </main>
  );
}
