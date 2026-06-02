// "use client";
// import usePagination from "@/hooks/use-pagination";
// // import BlogSidebarArea from "../blog/sidebar/blog-sidebar-area";
// import { Job_desc_data } from "@/data/jobs-data";
// import ErithJobDescArea from "../blog/sidebar/jobs-sidebar-area";
// // import Pagination from "../ui/pagination";
// import {
//   BlogQuoteItemOne,
//   BlogQuoteItemTwo,
// } from "../blog/single/blog-quote-item";
// // import BlogStandardItem from "../blog/single/blog-standard-item";
// import JobsDetails from "../blog/single/jobdesc-item";

// export default function ErithJobsDesc() {
//   const { currentItems } = usePagination(Job_desc_data, 5);
//   return (
//     <section className="tp-blog-standard-area p-relative pt-40 pb-120">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="tp-postbox-wrapper">
//               {currentItems
//                 .slice(0, 1)
//                 .map((blog) =>
//                   blog.postboxQuote1 ? (
//                     <BlogQuoteItemOne key={blog.id} blog={blog} />
//                   ) : blog.postboxQuote2 ? (
//                     <BlogQuoteItemTwo key={blog.id} blog={blog} />
//                   ) : (
//                     <JobsDetails key={blog.id} blog={blog} />
//                   ),
//                 )}
//             </div>

//             {/* <div className="tp-event-inner-pagination tp-postbox-item-pagination">
//               <div className="tp-dashboard-pagination">
//                 <div className="tp-pagination">
//                   <Pagination
//                     handlePageClick={handlePageClick}
//                     pageCount={pageCount}
//                     isCenter={true}
//                   />
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           <div className="col-lg-4">
//             {/* blog sidebar area */}
//             <ErithJobDescArea />
//             {/* blog sidebar area */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import ErithJobDescArea from "../blog/sidebar/jobs-sidebar-area";
import JobsDetails from "../blog/single/jobdesc-item";


type Job = {
  id: number;
  title: string;
  slug: string;
  tag?: string | null;
  date?: string | null;
  place?: string | null;
  description?: string | null;
  responsibilities?: string[] | null;
  qualifications?: string[] | null;
  skills?: string[] | null;
  employment_type?: string | null;
  experience?: string | null;
  role?: string | null;
  map_url?: string | null;
  image?: string | null;
  status?: "active" | "inactive";
  created_at?: string;
  updated_at?: string;
  industry?: string | null;
  email?: string | null;
};

type Props = {
  blog: Job;
};

export default function ErithJobsDesc({ blog }: Props) {
  return (
    <section className="tp-blog-standard-area p-relative pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper">
              <JobsDetails blog={blog} />
            </div>
          </div>

          <div className="col-lg-4">
            <ErithJobDescArea blog={blog} />
          </div>
        </div>
      </div>
    </section>
  );
}
