// "use client";
// import { useMemo, useState, useEffect } from "react";
// import React from "react";
// import KnowledgeCenterFilterCategory from "../filter/knowledgefiltercategory";
// import successstories from "@/data/knowledge-center-data";
// import {
//   FaBook,
//   FaFileAlt,
//   FaLightbulb,
//   FaPlay,
//   FaVideo,
//   FaFlag,
// } from "react-icons/fa";

// type Props = {
//   onKnowledgeCenterFilterCategory: (category: string | null) => void;
// };

// export default function KnowledgeFilterSidebar({
//   onKnowledgeCenterFilterCategory,
// }: Props) {
//   /* ----------------------------------
//      UNIQUE CATEGORIES
//   ---------------------------------- */
//   const categories = useMemo(
//     () => Array.from(new Set(successstories.map((s) => s.category))),
//     [],
//   );

//   const [categoryIndex, setCategoryIndex] = useState(0);
//   const activeCategory = categories[categoryIndex];

//   /* ----------------------------------
//      ONE STORY PER CATEGORY
//   ---------------------------------- */
//   const currentStory = useMemo(() => {
//     return successstories.find((item) => item.category === activeCategory);
//   }, [activeCategory]);

//   /* ----------------------------------
//      ICON MAPPER (stored file style)
//   ---------------------------------- */
//   const renderIcon = (icon?: string) => {
//     switch (icon) {
//       case "bulb":
//         return <FaLightbulb size={16} />;
//       case "video":
//         return <FaVideo size={16} />;
//       case "play":
//         return <FaPlay size={16} />;
//       case "book":
//         return <FaBook size={16} />;
//       case "file":
//       default:
//         return <FaFileAlt size={16} />;
//     }
//   };

//   /* ----------------------------------
//      CATEGORY NAVIGATION
//   ---------------------------------- */
//   const handleNext = () => {
//     setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
//   };

//   /* ----------------------------------
//      AUTO CHANGE CATEGORY (5s)
//   ---------------------------------- */
//   useEffect(() => {
//     const timer = setInterval(handleNext, 5000);
//     return () => clearInterval(timer);
//   }, [categories.length]);

//   if (!currentStory) return null;

//   return (
//     <div className="tp-shop-grid-sidebar">
//       <div className="container">
//         <div className="row">
//           {/* HEADER */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: "10px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <FaFlag size={12} color="#fecb00" />
//               <h3 style={{ fontSize: "12px", margin: 0 }}>Featured</h3>
//             </div>

//             <div style={{ display: "flex", gap: "10px" }}>
//               <span
//                 style={{ cursor: "pointer", fontSize: "18px" }}
//                 onClick={handlePrev}
//               >
//                 ←
//               </span>
//               <span
//                 style={{ cursor: "pointer", fontSize: "18px" }}
//                 onClick={handleNext}
//               >
//                 →
//               </span>
//             </div>
//           </div>

//           {/* SINGLE CARD */}
//           <div className="col-lg-12 mb-3">
//             <div
//               style={{
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 height: "180px",
//                 backgroundImage: `url(${currentStory.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />

//             <div style={{ marginTop: "8px" }}>
//               <span
//                 style={{
//                   color: "#fecb00",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "6px",
//                 }}
//               >
//                 {renderIcon(currentStory.icon)}
//                 <div style={{ color: "#292929" }}>{currentStory.category}</div>
//               </span>

//               <h3
//                 style={{
//                   color: "#292929",
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   lineHeight: "1.3",
//                   marginTop: "8px",
//                 }}
//               >
//                 {currentStory.title}
//               </h3>

//               <p
//                 className="tp-shop-widget-title"
//                 style={{
//                   fontSize: "12px",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 {currentStory.description?.substring(0, 100)}...
//                 <a
//                   className="event-read-more text-decoration-none"
//                   href="#"
//                   style={{
//                     // color: "#fecb00",
//                     textDecoration: "none",
//                     fontSize: "12px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginTop: "10px",
//                   }}
//                 >
//                   Learn More →
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FILTER */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Filter By</h3>
//         <KnowledgeCenterFilterCategory
//           onChange={onKnowledgeCenterFilterCategory}
//         />
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useMemo, useState, useEffect } from "react";
// import React from "react";
// import KnowledgeCenterFilterCategory from "../filter/knowledgefiltercategory";
// // import successstories from "@/data/knowledge-center-data";
// import Link from "next/link";
// import {
//   FaBook,
//   FaFileAlt,
//   FaLightbulb,
//   FaPlay,
//   FaVideo,
//   FaFlag,
// } from "react-icons/fa";

// type Props = {
//   data: any[];
//   onKnowledgeCenterFilterCategory: (category: string | null) => void;
// };
// const getCategoryPath = (category: string) => {
//   switch (category) {
//     // case "Success Stories":
//     //   return "successstories";
//     case "Webinars":
//       return "webinars";
//     case "Videos":
//       return "videos";
//     // case "Application Guides":
//     //   return "application-guides";
//     // case "Published Papers":
//     //   return "published-papers";
//     default:
//       return "webinars";
//   }
// };

// export default function KnowledgeFilterSidebar({
//   data,
//   onKnowledgeCenterFilterCategory,
// }: Props) {
//   /* ----------------------------------
//      UNIQUE CATEGORIES
//   ---------------------------------- */
//   const categories = useMemo(
//     () => Array.from(new Set(data.map((s) => s.category_type))),
//     [data],
//   );

//   const [categoryIndex, setCategoryIndex] = useState(0);
//   const activeCategory = categories[categoryIndex];

//   /* ----------------------------------
//      ONE STORY PER CATEGORY
//   ---------------------------------- */
//   const currentStory = useMemo(() => {
//     return data.find((item) => item.category_type === activeCategory);
//   }, [activeCategory, data]);

//   /* ----------------------------------
//      ICON MAPPER (stored file style)
//   ---------------------------------- */
//   // const renderIcon = (icon?: string) => {
//   //   switch (icon) {
//   //     case "bulb":
//   //       return <FaLightbulb size={16} />;
//   //     case "video":
//   //       return <FaVideo size={16} />;
//   //     case "play":
//   //       return <FaPlay size={16} />;
//   //     case "book":
//   //       return <FaBook size={16} />;
//   //     case "file":
//   //     default:
//   //       return <FaFileAlt size={16} />;
//   //   }
//   // };

//   const getCategoryIcon = (category?: string) => {
//     switch (category) {
//       case "Success Stories":
//         return <FaFileAlt size={16} />;
//       case "Webinars":
//         return <FaPlay size={16} />;
//       case "Videos":
//         return <FaVideo size={16} />;
//       case "Application Guides":
//         return <FaLightbulb size={16} />;
//       case "Published Papers":
//         return <FaBook size={16} />;
//       default:
//         return <FaFileAlt size={16} />;
//     }
//   };

//   /* ----------------------------------
//      CATEGORY NAVIGATION
//   ---------------------------------- */
//   const handleNext = () => {
//     setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
//   };

//   /* ----------------------------------
//      AUTO CHANGE CATEGORY (5s)
//   ---------------------------------- */
//   useEffect(() => {
//     const timer = setInterval(handleNext, 5000);
//     return () => clearInterval(timer);
//   }, [categories.length]);

//   if (!currentStory) return null;

//   return (
//     <div className="tp-shop-grid-sidebar">
//       <div className="container">
//         <div className="row">
//           {/* HEADER */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: "10px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <FaFlag size={12} color="#fecb00" />
//               <h3 style={{ fontSize: "12px", margin: 0 }}>Featured</h3>
//             </div>

//             <div style={{ display: "flex", gap: "10px" }}>
//               <span
//                 style={{ cursor: "pointer", fontSize: "18px" }}
//                 onClick={handlePrev}
//               >
//                 ←
//               </span>
//               <span
//                 style={{ cursor: "pointer", fontSize: "18px" }}
//                 onClick={handleNext}
//               >
//                 →
//               </span>
//             </div>
//           </div>

//           {/* SINGLE CARD */}
//           <div className="col-lg-12 mb-3">
//             <div
//               style={{
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 height: "180px",
//                 // backgroundImage: `url(${currentStory.image})`,
//                 backgroundImage: `url(https://backend-test-yeyr.onrender.com${currentStory.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />

//             <div style={{ marginTop: "8px" }}>
//               <span
//                 style={{
//                   color: "#fecb00",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "6px",
//                 }}
//               >
//                 {/* {renderIcon(currentStory.icon)} */}
//                 {getCategoryIcon(currentStory.category_type)}
//                 <div style={{ color: "#292929" }}>
//                   {currentStory.category_type}
//                 </div>
//               </span>

//               <h3
//                 style={{
//                   color: "#292929",
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   lineHeight: "1.3",
//                   marginTop: "8px",
//                 }}
//               >
//                 {currentStory.title}
//               </h3>

//               <p
//                 className="tp-shop-widget-title"
//                 style={{
//                   fontSize: "12px",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 {currentStory.description?.substring(0, 100)}...
//                 {/* <a
//                   className="event-read-more text-decoration-none"
//                   href="#"
//                   style={{
//                     // color: "#fecb00",
//                     textDecoration: "none",
//                     fontSize: "12px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginTop: "10px",
//                   }}
//                 >
//                   Learn More →
//                 </a> */}
//                 <Link
//                   className="event-read-more text-decoration-none"
//                   href={`/knowledgecenter/${getCategoryPath(
//                     currentStory.category_type,
//                   )}/${currentStory.slug}`}
//                   style={{
//                     textDecoration: "none",
//                     fontSize: "12px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginTop: "10px",
//                   }}
//                 >
//                   Learn More →
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FILTER */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Filter By</h3>
//         <KnowledgeCenterFilterCategory
//           onChange={onKnowledgeCenterFilterCategory}
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import { useMemo, useState, useEffect } from "react";
import React from "react";
import KnowledgeCenterFilterCategory from "../filter/knowledgefiltercategory";
import Link from "next/link";
import {
  FaBook,
  FaFileAlt,
  FaLightbulb,
  FaPlay,
  FaVideo,
  FaFlag,
} from "react-icons/fa";

type KnowledgeItem = {
  id: number;
  title?: string | null;
  slug?: string | null;
  category_type: string;
  product_type?: string | null;
  sidebar_title?: string | null;
  sidebar_desc?: string | null;
  image?: string | null;
  pdf_url?: string | null;
  video_url?: string | null;
  label?: string | null;
  created_at?: string;
  video_url_link?: string | null;
  video_thumbnail_image?: string | null;
};

type Props = {
  data: KnowledgeItem[];
  onKnowledgeCenterFilterCategory: (category: string | null) => void;
};

const getCategoryPath = (category: string) => {
  switch (category) {
    case "Webinars":
      return "webinars";
    case "Videos":
      return "videos";
    default:
      return "webinars";
  }
};

export default function KnowledgeFilterSidebar({
  data,
  onKnowledgeCenterFilterCategory,
}: Props) {
  /* ----------------------------------
     ALLOWED CATEGORIES
  ---------------------------------- */
  const allowedCategories = ["Videos", "Webinars"];

  /* ----------------------------------
     FILTERED DATA
  ---------------------------------- */
  const filteredData = useMemo(
    () => data.filter((item) => allowedCategories.includes(item.category_type)),
    [data],
  );

  /* ----------------------------------
     UNIQUE CATEGORIES
  ---------------------------------- */
  const categories = useMemo(
    () => Array.from(new Set(filteredData.map((s) => s.category_type))),
    [filteredData],
  );

  const [categoryIndex, setCategoryIndex] = useState(0);
  const activeCategory = categories[categoryIndex];

  /* ----------------------------------
     ONE STORY PER CATEGORY
  ---------------------------------- */
  const currentStory = useMemo(() => {
    return filteredData.find((item) => item.category_type === activeCategory);
  }, [activeCategory, filteredData]);

  /* ----------------------------------
     ICON MAPPER
  ---------------------------------- */
  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "Success Stories":
        return <FaFileAlt size={16} />;
      case "Webinars":
        return <FaPlay size={16} />;
      case "Videos":
        return <FaVideo size={16} />;
      case "Application Guides":
        return <FaLightbulb size={16} />;
      case "Published Papers":
        return <FaBook size={16} />;
      default:
        return <FaFileAlt size={16} />;
    }
  };

  /* ----------------------------------
     CATEGORY NAVIGATION
  ---------------------------------- */
  const handleNext = () => {
    setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  /* ----------------------------------
     AUTO CHANGE CATEGORY (5s)
  ---------------------------------- */
  useEffect(() => {
    if (!categories.length) return;

    const timer = setInterval(() => {
      setCategoryIndex((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [categories.length]);

  if (!currentStory) return null;

  return (
    <div className="tp-shop-grid-sidebar">
      <div className="container">
        <div className="row">
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaFlag size={12} color="#fecb00" />
              <h3 style={{ fontSize: "12px", margin: 0 }}>Featured</h3>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <span
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={handlePrev}
              >
                ←
              </span>
              <span
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={handleNext}
              >
                →
              </span>
            </div>
          </div>

          {/* SINGLE CARD */}
          <div className="col-lg-12 mb-3">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "180px",
                backgroundImage: `url(https://backend-test-yeyr.onrender.com${currentStory.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div style={{ marginTop: "8px" }}>
              <span
                style={{
                  color: "#fecb00",
                  fontSize: "15px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {getCategoryIcon(currentStory.category_type)}
                <div style={{ color: "#292929" }}>
                  {currentStory.category_type}
                </div>
              </span>

              <h3
                style={{
                  color: "#292929",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginTop: "8px",
                }}
              >
                {currentStory.title}
              </h3>

              <p
                className="tp-shop-widget-title"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.2",
                }}
              >
                {currentStory.sidebar_desc?.substring(0, 100)}...
                <Link
                  className="event-read-more text-decoration-none"
                  href={`/knowledgecenter/${getCategoryPath(
                    currentStory.category_type,
                  )}/${currentStory.slug}`}
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                  }}
                >
                  Learn More →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Filter By</h3>
        <KnowledgeCenterFilterCategory
          onChange={onKnowledgeCenterFilterCategory}
        />
      </div>
    </div>
  );
}
