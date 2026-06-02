// import { Metadata } from "next";
// // import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import AllProjects from "@/components/projects/projects";

// export const metadata: Metadata = {
//   title: "Projects - Erith",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function EventPage() {
//   return (
//     <main>
//       {/* breadcrumb area start */}
//       {/* <BreadcrumbOne
//         title="Our Insightful Projects"
//         subtitle="All Projects"
//         color="color"
//         pages={true}
//       /> */}
//       {/* breadcrumb area end */}

//       {/* event area start */}

//       <AllProjects />
//       {/* event area end */}
//     </main>
//   );
// }


// -----------******************* code commented on dated 30-05-2026 ******************------------------//



import { Suspense } from "react";
import { Metadata } from "next";
import AllProjects from "@/components/projects/projects";

export const metadata: Metadata = {
  title: "Projects - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function EventPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <AllProjects />
      </Suspense>
    </main>
  );
}