// import Link from "next/link";
// // import Image from "next/image";
// import { UpArrowTwo } from "../svg";
// // import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
// // import { university_classic_event_data } from "@/data/event-data";
// import HoverImgItem from "../event/hover-img-item";
// // import img1 from "@/assets/img/event/fire-protection.jpg";
// // import img2 from "@/assets/img/event/fluid-handling.jpg";
// // import img3 from "@/assets/img/event/sealing-solutions.jpg";
// import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

// // const images = [img1, img2, img3];

// // const jobdescription=[
// //     title:st

// // ]

// const ErithJobsInfo = [
//   {
//     id: 1,
//     title: "Product Designer",
//     shortdesc:
//       "We're looking for a mid-level Product Designer to join our team",
//     image: "/assets/img/event/pinch_valves111.png",
//     linkText: "",
//   },
//   {
//     id: 2,
//     title: "Engineering Manager  ",
//     shortdesc:
//       "We're looking for a experienced engineering manager to join our team",
//     image: "/assets/img/event/metal_expanion_joints1.png",
//     linkText: "",
//   },
//   {
//     id: 3,
//     title: "Customer Success Manager",
//     shortdesc: "We're looking for a Customer success manager to join our team",
//     image: "/assets/img/event/remote_asset_monitoring1.png",
//     linkText: "",
//   },
// ];

// export default function ErithJobs() {
//   return (
//     <section className="event-area  pb-20">
//       <div className="container">
//         {/* Section Header */}
//         <div className="row">
//           <div className="col-12">
//             <div className="d-flex justify-content-between align-items-center mb-30">
//               <h2
//                 style={{
//                   fontSize: "25px",
//                   color: "#292929",
//                   marginBottom: "0",
//                 }}
//               >
//                 Begin Your Career Here
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Events List */}
//         <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
//           {ErithJobsInfo.map((item) => (
//             <div
//               key={item.id}
//               className="tp-event-item"
//               style={{ marginBottom: "0px" }}
//             >
//               <div className="row align-items-stretch">
//                 {/* Image Column */}
//                 {/* <div className="col-md-2">
//                   <div className="tp-event-list">
//                     <div className="tp-hover-reveal-bg-wrapper">
//                       <Image
//                         src={images[index % images.length]} // cycles through img1, img2, img3
//                         alt={item.title || "Event Image"}
//                         className="tp-hover-reveal-bg-img"
//                         width={400}
//                         height={400}
//                         priority
//                         style={{ borderRadius: "8px" }}
//                       />
//                     </div>
//                   </div>
//                 </div> */}

//                 {/* Content Column */}
//                 <div className="col-md-9">
//                   <div
//                     className="tp-event-content d-flex flex-column"
//                     // style={{ height: "40%" }}
//                   >
//                     {/* TOP → Title */}
//                     <h3 className="tp-event-title" style={{ fontSize: "18px" }}>
//                       <HoverImgItem title={item.title} />
//                     </h3>

//                     {/* CENTER → Location */}
//                     <div
//                       className="tp-event-info"
//                       style={{ marginTop: "auto", marginBottom: "auto" }}
//                     >
//                       <span>{item.shortdesc}</span>
//                     </div>

//                     {/* BOTTOM → View Link */}
//                     <div className="tp-header-btn d-none d-md-block mt-10">
//                       <p
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "#fff", // black text
//                           padding: "2px 12px",
//                           borderRadius: "10px",
//                           textDecoration: "none",
//                           fontWeight: "600",
//                           display: "inline-block",
//                           fontSize: "12px",
//                           marginRight: "10px",
//                           marginBottom: "0px",
//                         }}
//                       >
//                         {" "}
//                         <FaMapMarkerAlt
//                           size={12}
//                           style={{ marginRight: "10px" }}
//                         />
//                         100 % Remote
//                       </p>
//                       <p
//                         // href="/contact"
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "#fff", // black text
//                           padding: "2px 12px",
//                           borderRadius: "10px",
//                           textDecoration: "none",
//                           fontWeight: "600",
//                           display: "inline-block",
//                           fontSize: "12px",
//                           marginBottom: "0px",
//                         }}
//                       >
//                         <FaClock size={12} style={{ marginRight: "10px" }} />
//                         Full Time
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Arrow Column */}
//                 <div className="col-md-1 ms-auto d-flex align-items-end justify-content-end">
//                   <div className="tp-event-arrow">
//                     <Link href="/jobs">
//                       <span>
//                         <UpArrowTwo />
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { UpArrowTwo } from "../svg";
import HoverImgItem from "../event/hover-img-item";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

type JobType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  employment_type: string;
  place: string;
  tag: string;
};

export default function ErithJobs() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${BASE_URL}/jobs`);

      const data = await res.json();

      // ✅ FIX
      if (Array.isArray(data)) {
        setJobs(data);
      } else if (Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="event-area pb-20">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Begin Your Career Here
              </h2>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p>
              There are currently no open positions available. However, we are
              always interested in connecting with talented professionals
              passionate about engineering and industrial solutions.
            </p>
          ) : (
            jobs.map((item) => (
              <div
                key={item.id}
                className="tp-event-item"
                style={{ marginBottom: "0px" }}
              >
                <div className="row align-items-stretch">
                  {/* Content Column */}
                  <div className="col-md-9">
                    <div className="tp-event-content d-flex flex-column">
                      {/* TOP → Title */}
                      <h3
                        className="tp-event-title"
                        style={{ fontSize: "18px" }}
                      >
                        <HoverImgItem title={item.title} />
                      </h3>

                      {/* CENTER → Description */}
                      <div
                        className="tp-event-info"
                        style={{
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                      >
                        <span>{item.tag}</span>
                      </div>

                      {/* BOTTOM */}
                      <div className="tp-header-btn d-none d-md-block mt-10">
                        <p
                          style={{
                            backgroundColor: "#1d3a72",
                            color: "#fff",
                            padding: "2px 12px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontWeight: "600",
                            display: "inline-block",
                            fontSize: "12px",
                            marginRight: "10px",
                            marginBottom: "0px",
                          }}
                        >
                          <FaMapMarkerAlt
                            size={12}
                            style={{ marginRight: "10px" }}
                          />
                          {item.place || "Remote"}
                        </p>

                        <p
                          style={{
                            backgroundColor: "#1d3a72",
                            color: "#fff",
                            padding: "2px 12px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontWeight: "600",
                            display: "inline-block",
                            fontSize: "12px",
                            marginBottom: "0px",
                          }}
                        >
                          <FaClock size={12} style={{ marginRight: "10px" }} />
                          {item.employment_type || "Full Time"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Column */}
                  <div className="col-md-1 ms-auto d-flex align-items-end justify-content-end">
                    <div className="tp-event-arrow">
                      <Link href={`/jobs/${item.slug}`}>
                        <span>
                          <UpArrowTwo />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
