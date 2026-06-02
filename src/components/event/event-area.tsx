// import Link from "next/link";
// import Image from "next/image";
// import { RightArrow, RightArrowThree } from "../svg";
// // import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
// import { university_classic_event_data } from "@/data/event-data";
// import HoverImgItem from "./hover-img-item";
// import img1 from "@/assets/img/event/fire-protection.jpg";
// import img2 from "@/assets/img/event/fluid-handling.jpg";
// import img3 from "@/assets/img/event/sealing-solutions.jpg";

// const images = [img1, img2, img3];

// export default function EventArea() {
//   return (
//     <section className="event-area pl-15 pb-50">
//       <div className="container">
//         {/* Section Header */}
//         <div className="row align-items-end">
//           <div className="col-xl-5 col-md-8">
//             <div
//               className="tp-event-section mb-60 wow fadeInUp"
//               data-wow-delay=".2s"
//             >
//               <div className="tp-section">
//                 <h3 className="tp-section-2-title">
//                   Our Products{" "}
//                   {/* <span>
//                     Products{" "}
//                     <Image
//                       className="tp-underline-shape-3 wow bounceIn"
//                       data-wow-duration="1.5s"
//                       data-wow-delay=".4s"
//                       src={shape_line}
//                       alt="shape-line"
//                     />
//                   </span> */}
//                 </h3>
//               </div>
//             </div>
//           </div>

//           <div className="col-xl-7 col-md-4">
//             <div className="tp-event-btn text-md-end pr-15 mb-70">
//               <Link
//                 className="tp-btn "
//                 href="/allproducts"
//                 style={{
//                   borderRadius: "10px",
//                   padding: "8px 18px",
//                   fontSize: "13px",
//                 }}
//               >
//                 See More Products
//                 <span>
//                   <RightArrow />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Events List */}
//         <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
//           {university_classic_event_data.map((item, index) => (
//             <div key={item.id} className="tp-event-item">
//               <div className="row align-items-center">
//                 {/* Image Column */}
//                 <div className="col-md-2">
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
//                 </div>

//                 {/* Content Column */}
//                 <div className="col-md-9">
//                   <div className="tp-event-content">
//                     <h3 className="tp-event-title" style={{ fontSize: "25px" }}>
//                       <HoverImgItem title={item.title} />
//                     </h3>
//                     <div className="tp-event-info">
//                       <span>{item.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Arrow Column */}
//                 <div className="col-md-1">
//                   <div className="tp-event-arrow text-lg-end pr-15">
//                     <Link href="#">
//                       <span>
//                         <RightArrowThree />
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

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RightArrowThree } from "../svg";
import { university_classic_event_data } from "@/data/event-data";
import HoverImgItem from "./hover-img-item";

export default function EventArea() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCount = 3;
  const totalItems = university_classic_event_data.length;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + visibleCount;
        return next >= totalItems ? 0 : next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [totalItems, isHovered]);

  const visibleItems = university_classic_event_data.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section className="event-area  pb-50 ">
      <div className="container">
        {/* Header */}
        <div className="row align-items-end mb-15">
          <div className="col-xl-5 col-md-8">
            <h3 className="tp-section-2-title">Our Solutions</h3>
          </div>

          <div className="col-xl-7 col-md-4 text-md-end">
            <Link
              href="/about#industries"
              style={{
                backgroundColor: "#1d3a72",
                color: "#fff", // black text
                padding: "8px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
                fontSize: "12px",
              }}
            >
              See more Solutions
            </Link>
          </div>
        </div>

        {/* Animated List */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: -80 }} // start from LEFT
              animate={{ opacity: 1, x: 0 }} // center
              exit={{ opacity: 0, x: 80 }} // exit to RIGHT
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="tp-event-wrap"
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="tp-event-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover="hover"
                >
                  <div className="row align-items-center">
                    {/* Image */}
                    <div className="col-md-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="col-md-9">
                      <motion.h3
                        style={{ fontSize: "25px", cursor: "pointer" }}
                        variants={{
                          hover: { color: "#fecb00", x: 5 },
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* <HoverImgItem title={item.title} /> */}
                        <HoverImgItem title={item.title} link={item.linkText} />
                      </motion.h3>

                      <span>{item.location}</span>
                    </div>

                    {/* Arrow */}
                    <div className="col-md-1 text-lg-center">
                      <motion.div
                        variants={{
                          hover: {
                            x: 8,
                            color: "#fecb00",
                          },
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <RightArrowThree />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
