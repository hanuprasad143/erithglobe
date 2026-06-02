// import { Metadata } from "next";

// // import BlogStandardArea from "@/components/blog/blog-standard-area";
// import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// // import ErithBlogArea from "@/components/blog/erith-blog";
// import ErithJobsDesc from "@/components/jobs/erith-jobs";

// export const metadata: Metadata = {
//   title: "Job-Details - Erith",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function BlogStandardPage() {
//   return (
//     <main>
//       {/* breadcrumb area start */}
//       <BreadcrumbOne
//         subtitle="Our Jobs"
//         title="Fuel Your Career with Erith.."
//       />
//       {/* breadcrumb area end */}

//       {/* blog standard area start */}
//       {/* <BlogStandardArea/> */}
//       <ErithJobsDesc />
//       {/* blog standard area end */}
//     </main>
//   );
// }

// // import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// // import JobsDetails from "@/components/blog/single/jobdesc-item";

// // const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

// // async function getJob(slug: string) {
// //   try {
// //     const res = await fetch(`${BASE_URL}/jobs/${slug}`, {
// //       cache: "no-store",
// //     });

// //     if (!res.ok) {
// //       return null;
// //     }

// //     return res.json();
// //   } catch (error) {
// //     console.error(error);
// //     return null;
// //   }
// // }

// // export default async function JobPage({
// //   params,
// // }: {
// //   params: { slug: string };
// // }) {
// //   const blog = await getJob(params.slug);

// //   if (!blog) {
// //     return <div>Job not found</div>;
// //   }

// //   return (
// //     <main>
// //       <BreadcrumbOne
// //         subtitle="Our Jobs"
// //         title={blog.title}
// //       />

// //       <JobsDetails blog={blog} />
// //     </main>
// //   );
// // }

import { Metadata } from "next";

import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ErithJobsDesc from "@/components/jobs/erith-jobs";

const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

async function getJob(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/jobs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const job = await getJob(params.slug);

  return {
    title: job?.title || "Job Details - Erith",
    icons: {
      icon: "/favicon.png",
    },
  };
}

export default async function JobPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = await getJob(params.slug);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <main>
      <BreadcrumbOne
        subtitle="Our Jobs"
        title="Fuel Your Career with Erith.."
      />

      <ErithJobsDesc blog={job} />
    </main>
  );
}
