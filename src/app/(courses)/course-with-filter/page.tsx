// import { Metadata } from "next";
// import CourseFilterBanner from "./_components/course-filter-banner";
// import CourseFilterProvider from "@/components/provider/course-filter-provider";
// import { all_courses } from "@/data/course-data";
// import CourseFilterArea from "./_components/course-filter-area";
// import BannerArea from "@/components/banner/banner-area";


// export const metadata: Metadata = {
//     title: "Course With Filter - Erith",
// }

// export default function CourseWithFilterPage() {
//     return (
//         <CourseFilterProvider initialCourses={all_courses}>

//             {/* course banner area start */}
//             <CourseFilterBanner/>
//             {/* course banner area end */}

//             {/* course filter area */}
//             <CourseFilterArea/>
//             {/* course filter area */}

//             {/* banner area start */}
//             <BannerArea/>
//             {/* banner area end */}

//         </CourseFilterProvider>
//     )
// }


// -----------******************* code commented on dated 30-05-2026 ******************------------------//


import { Suspense } from "react";
import { Metadata } from "next";
import CourseFilterBanner from "./_components/course-filter-banner";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import CourseFilterArea from "./_components/course-filter-area";
import BannerArea from "@/components/banner/banner-area";

export const metadata: Metadata = {
  title: "Course With Filter - Erith",
};

export default function CourseWithFilterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseFilterProvider initialCourses={all_courses}>
        <CourseFilterBanner />
        <CourseFilterArea />
        <BannerArea />
      </CourseFilterProvider>
    </Suspense>
  );
}