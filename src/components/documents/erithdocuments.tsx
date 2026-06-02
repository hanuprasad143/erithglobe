// "use client";

// import CounterOne from "../counter/counter-one";
// import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import Link from "next/link";

// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// import Pagination from "../ui/pagination";

// const navData = [
//   {
//     id: "home",
//     title: "Positioners Series 6P",
//     ariaControls: "home",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     title: "Retaining Cable Kit For Hand Wheel Chai..",
//     ariaControls: "profile",
//     isActive: true,
//   },
//   {
//     id: "contact",
//     title: "Quarter-Turn Valve Solutions for Reduci..",
//     ariaControls: "contact",
//     isActive: true,
//   },
// ];

// type IProps = {
//   title?: string;
//   subtitle?: string;
// };

// type Document = {
//   id: number;
//   title: string;
//   document_type: string;
//   product_type: string;
//   file_url: string;
//   created_at: string;
// };

// export default function ErithDocuments({
//   title = "Hello, how can we help?",
//   subtitle = "Learn more about how Erith can transform and help your company.",
// }: IProps) {
//   const [filters, setFilters] = useState({
//     category: "",
//     contentType: "",
//     industry: "",
//     sortBy: "",
//   });

//   const [productTypes, setProductTypes] = useState<string[]>([]);
//   const [documentTypes, setDocumentTypes] = useState<string[]>([]);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
//   const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const docsPerPage = 10;

//   // ✅ CLEANED API CALL (removed duplicate fetch)
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [filtersRes, docsRes] = await Promise.all([
//   //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads/filters"),
//   //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads"),
//   //       ]);

//   //       const filtersData = await filtersRes.json();
//   //       const docsData = await docsRes.json();

//   //       setProductTypes(filtersData.productTypes || []);
//   //       setDocumentTypes(filtersData.documentTypes || []);
//   //       setDocuments(docsData || []);
//   //       setFilteredDocs(docsData || []);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const [filtersRes, docsRes, qualityRes] = await Promise.all([
//         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads/filters"),
//         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads"),
//         fetch("https://backend-test-yeyr.onrender.com/api/quality"),  // ✅ new
//       ]);

//       const filtersData = await filtersRes.json();
//       const docsData = await docsRes.json();
//       const qualityData = await qualityRes.json();  // ✅ new

//       const merged = [...(docsData || []), ...(qualityData || [])];  // ✅ merge both

//       setProductTypes(filtersData.productTypes || []);
//       setDocumentTypes(filtersData.documentTypes || []);
//       setDocuments(merged);      // ✅ merged
//       setFilteredDocs(merged);   // ✅ merged
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchData();
// }, []);

//   useEffect(() => {
//     let temp = [...documents];

//     if (filters.contentType) {
//       temp = temp.filter(
//         (doc) =>
//           doc.product_type?.trim().toLowerCase() ===
//           filters.contentType.trim().toLowerCase(),
//       );
//     }

//     if (filters.industry) {
//       temp = temp.filter(
//         (doc) =>
//           doc.document_type?.trim().toLowerCase() ===
//           filters.industry.trim().toLowerCase(),
//       );
//     }

//     if (filters.sortBy === "Asc") {
//       temp.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (filters.sortBy === "Desc") {
//       temp.sort((a, b) => b.title.localeCompare(a.title));
//     }

//     setFilteredDocs(temp);
//     setCurrentPage(0);
//   }, [filters, documents]);

//   const offset = currentPage * docsPerPage;
//   const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
//   const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

//   const handlePageClick = (event: { selected: number }) => {
//     setCurrentPage(event.selected);
//   };

//   const handleSelect = (id: number) => {
//     setSelectedDocs((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//   };

//   const handleSelectAll = () => {
//     const currentPageIds = currentDocs.map((doc) => doc.id);

//     const allSelectedOnPage = currentPageIds.every((id) =>
//       selectedDocs.includes(id),
//     );

//     if (allSelectedOnPage) {
//       setSelectedDocs((prev) =>
//         prev.filter((id) => !currentPageIds.includes(id)),
//       );
//     } else {
//       setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
//     }
//   };

//   const handleDownloadZip = async () => {
//     if (selectedDocs.length === 0) {
//       alert("Please select at least one document");
//       return;
//     }

//     const zip = new JSZip();

//     const selectedFiles = documents.filter((doc) =>
//       selectedDocs.includes(doc.id),
//     );

//     await Promise.all(
//       selectedFiles.map(async (doc) => {
//         const response = await fetch(
//           `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
//         );
//         const blob = await response.blob();
//         zip.file(doc.file_url, blob);
//       }),
//     );

//     const content = await zip.generateAsync({ type: "blob" });
//     saveAs(content, "documents.zip");
//   };

//   const handleSingleDownload = async (doc: any) => {
//     try {
//       const response = await fetch(
//         `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
//       );
//       const blob = await response.blob();
//       saveAs(blob, doc.file_url);
//     } catch (err) {
//       console.error("Download failed", err);
//     }
//   };

//   const selectedOnPage = currentDocs.filter((doc) =>
//     selectedDocs.includes(doc.id),
//   ).length;

//   const totalOnPage = currentDocs.length;
//   const totalFiles = filteredDocs.length;
//   return (
//     <>
//       {/* ----------- YOUR EXISTING UI (NO CHANGE) ----------- */}

//       <section
//         className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//         ></div>

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content text-center">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h2
//                     className="tp-breadcrumb__title color mb-10"
//                     style={{
//                       fontSize: "35px",
//                       lineHeight: "1.2",
//                       fontWeight: "5px",
//                     }}
//                   >
//                     {title}
//                   </h2>

//                   <p style={{ fontSize: "15px", color: "white" }}>{subtitle}</p>

//                   <div
//                     className="tp-leadership-search p-relative"
//                     style={{
//                       position: "relative",
//                       width: "700px",
//                       margin: "0 auto",
//                     }}
//                   >
//                     <div style={{ position: "relative" }}>
//                       <FaSearch
//                         style={{
//                           position: "absolute",
//                           left: "15px",
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                           color: "#888",
//                           fontSize: "16px",
//                           pointerEvents: "none",
//                         }}
//                       />

//                       <input
//                         type="text"
//                         placeholder="Search..."
//                         style={{
//                           width: "100%",
//                           height: "45px",
//                           paddingLeft: "45px",
//                           paddingRight: "15px",
//                           borderRadius: "6px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tp-campus-student-list d-flex justify-content-center mt-5">
//           <div className="d-flex align-items-center gap-1 flex-wrap">
//             <p
//               style={{
//                 fontSize: "18px",
//                 margin: 0,
//                 color: "white",
//                 marginRight: "5px",
//               }}
//             >
//               Featured Topics:
//             </p>

//             {navData.map((nav) => (
//               <li key={nav.id} className="nav-item">
//                 <Link
//                   className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
//                   href="/contact"
//                   style={{
//                     fontSize: "10px",
//                     padding: "4px 14px",
//                     borderRadius: "10px",
//                     marginRight: "6px",
//                   }}
//                 >
//                   {nav.title}
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CounterOne />

//       <div className="container" style={{ marginBottom: "20px" }}>
//         <div className="row align-center">
//           <div className="col-xl-12 col-lg-12">
//             <div className="row align-items-center mb-3 mt-30">
//               <div className="col-lg-9 col-md-8">
//                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                   {/* ✅ PRODUCT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "300px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.contentType}
//                     onChange={(e) =>
//                       setFilters({ ...filters, contentType: e.target.value })
//                     }
//                   >
//                     <option value="">Select a Product Type</option>

//                     {productTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>

//                   {/* ✅ DOCUMENT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.industry}
//                     onChange={(e) =>
//                       setFilters({ ...filters, industry: e.target.value })
//                     }
//                   >
//                     <option value="">Select an Document Type</option>

//                     {documentTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* RIGHT SIDE (UNCHANGED) */}
//               {/* <div className="col-lg-3 col-md-4 text-lg-end mt-2 mt-lg-0">
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     gap: "8px",
//                   }}
//                 >
//                   <p style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
//                     Show
//                   </p>

//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.sortBy}
//                     onChange={(e) =>
//                       setFilters({ ...filters, sortBy: e.target.value })
//                     }
//                   >
//                     <option value="">Sort By</option>
//                     <option value="Asc">Asc</option>
//                     <option value="Desc">Desc</option>
//                     <option value="Relevance">Relevance</option>
//                   </select>
//                 </div>
//               </div> */}
//             </div>

//             {/* FILTER TAGS (UNCHANGED) */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//                 {Object.entries(filters).map(
//                   ([key, value]) =>
//                     value && (
//                       <span
//                         key={key}
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "white",
//                           padding: "5px 10px",
//                           borderRadius: "6px",
//                           fontSize: "12px",
//                         }}
//                       >
//                         {value}
//                         <span
//                           onClick={() =>
//                             setFilters((prev) => ({ ...prev, [key]: "" }))
//                           }
//                           style={{ cursor: "pointer", marginLeft: "5px" }}
//                         >
//                           ✕
//                         </span>
//                       </span>
//                     ),
//                 )}
//               </div>

//               {Object.values(filters).some(Boolean) && (
//                 <button
//                   onClick={() =>
//                     setFilters({
//                       category: "",
//                       contentType: "",
//                       industry: "",
//                       sortBy: "",
//                     })
//                   }
//                   style={{
//                     marginLeft: "auto",
//                     background: "transparent",
//                     border: "none",
//                     color: "#1d3a72",
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                   }}
//                 >
//                   Clear all Filters
//                 </button>
//               )}
//               {/* <div className="mt-30">
//                 {documents.map((doc) => ( */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "5px",
//                   width: "100%",
//                   flexWrap: "wrap", // ✅ important
//                   gap: "10px",
//                 }}
//               >
//                 {/* LEFT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={
//                       currentDocs.length > 0 &&
//                       currentDocs.every((doc) => selectedDocs.includes(doc.id))
//                     }
//                     onChange={handleSelectAll}
//                   />
//                   <span style={{ fontSize: "13px" }}>Select All</span>

//                   {/* CLEAR FILTERS */}
//                   {Object.values(filters).some(Boolean) && (
//                     <button
//                       onClick={() =>
//                         setFilters({
//                           category: "",
//                           contentType: "",
//                           industry: "",
//                           sortBy: "",
//                         })
//                       }
//                       style={{
//                         background: "transparent",
//                         border: "none",
//                         color: "#1d3a72",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Clear Filters
//                     </button>
//                   )}
//                 </div>

//                 {/* CENTER */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "15px",
//                     justifyContent: "center",
//                     flex: 1,
//                     flexWrap: "wrap", // ✅ wrap on small screens
//                     textAlign: "center",
//                   }}
//                 >
//                   <span style={{ fontSize: "13px", color: "#333" }}>
//                     {selectedOnPage}/{totalOnPage} selected Documents
//                   </span>

//                   <span style={{ fontSize: "13px", color: "#666" }}>
//                     A total of:{" "}
//                     <span style={{ color: "#fecb00", fontWeight: 600 }}>
//                       {totalFiles}
//                     </span>{" "}
//                     Resources found
//                   </span>
//                 </div>

//                 {/* RIGHT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     width: "auto",
//                   }}
//                 >
//                   {selectedDocs.length > 0 && (
//                     <div
//                       onClick={handleDownloadZip}
//                       style={{
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <p style={{ margin: 0, fontSize: "13px" }}>
//                         Download Selected ({selectedDocs.length})
//                       </p>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="22"
//                         height="22"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                           stroke="#fecb00"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "1px",
//                   backgroundColor: "#e5e5e5",
//                 }}
//               ></div>
//             </div>
//             <div className="row mt-30">
//               {currentDocs.map((doc) => (
//                 <div key={doc.id} className="col-lg-12 mb-10">
//                   {/* ✅ CHECKBOX OUTSIDE CARD */}
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                       type="checkbox"
//                       checked={selectedDocs.includes(doc.id)}
//                       onChange={() => handleSelect(doc.id)}
//                       style={{ marginRight: "10px" }}
//                     />

//                     {/* YOUR CARD (UNCHANGED STYLES) */}
//                     <div
//                       style={{
//                         border: "1px solid #e5e5e5",
//                         borderRadius: "12px",
//                         padding: "10px",
//                         backgroundColor: "white",
//                         transition: "box-shadow 0.3s ease",
//                         cursor: "pointer",
//                         width: "100%",
//                       }}
//                       onClick={() => {
//                         window.open(
//                           `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
//                           "_blank",
//                         );
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.boxShadow =
//                           "0 6px 18px rgba(0,0,0,0.12)";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "1";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.boxShadow = "none";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "0";
//                       }}
//                     >
//                       {/* FULL ROW */}
//                       <div className="d-flex align-items-center justify-content-between">
//                         {/* LEFT SIDE */}
//                         <div className="d-flex align-items-center">
//                           {/* ICON */}
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               borderRadius: "6px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               marginRight: "16px",
//                               flexShrink: 0,
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke="#fecb00"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
//                               />
//                             </svg>
//                           </div>

//                           {/* TEXT */}
//                           <div>
//                             <h5
//                               style={{
//                                 color: "#292929",
//                                 fontSize: "12px",
//                                 fontWeight: "600",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               {doc.document_type}
//                             </h5>

//                             <p
//                               style={{
//                                 color: "#333",
//                                 fontSize: "12px",
//                                 margin: 0,
//                               }}
//                             >
//                               {doc.title}
//                             </p>
//                           </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                           }}
//                         >
//                           {/* DATE */}
//                           <span
//                             style={{
//                               color: "#666",
//                               fontSize: "14px",
//                             }}
//                           >
//                             {new Date(doc.created_at).toLocaleDateString(
//                               "en-IN",
//                             )}
//                           </span>

//                           {/* DOWNLOAD ICON */}
//                           {/* <div
//                             className="download-icon"
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                             }}
//                           > */}
//                           <div
//                             className="download-icon"
//                             onClick={(e) => {
//                               e.stopPropagation(); // ✅ VERY IMPORTANT (prevents card click)
//                               handleSingleDownload(doc);
//                             }}
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                               cursor: "pointer", // ✅ show clickable
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="20"
//                               height="20"
//                               fill="#1d3a72"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                                 stroke="#fecb00"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="tp-event-inner-pagination pb-10">
//                   <div className="tp-dashboard-pagination pt-20">
//                     <div className="tp-pagination ">
//                       <Pagination
//                         handlePageClick={handlePageClick}
//                         pageCount={pageCount}
//                         isCenter={true}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import CounterOne from "../counter/counter-one";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

import JSZip from "jszip";
import { saveAs } from "file-saver";

import Pagination from "../ui/pagination";

import { useSearchParams } from "next/navigation"; // new

const navData = [
  {
    id: "home",
    title: "Positioners Series 6P",
    ariaControls: "home",
    isActive: true,
  },
  {
    id: "profile",
    title: "Retaining Cable Kit For Hand Wheel Chai..",
    ariaControls: "profile",
    isActive: true,
  },
  {
    id: "contact",
    title: "Quarter-Turn Valve Solutions for Reduci..",
    ariaControls: "contact",
    isActive: true,
  },
];

type IProps = {
  title?: string;
  subtitle?: string;
};

type Document = {
  id: number | string;
  title: string;
  document_type: string;
  product_type: string;
  file_url: string;
  created_at: string;
};

export default function ErithDocuments({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
}: IProps) {
  const [filters, setFilters] = useState({
    category: "",
    contentType: "",
    industry: "",
    sortBy: "",
  });

  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [documentTypes, setDocumentTypes] = useState<string[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
  // const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
  const [selectedDocs, setSelectedDocs] = useState<(number | string)[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const docsPerPage = 10;

  const searchParams = useSearchParams();

  // ✅ CLEANED API CALL (removed duplicate fetch)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [filtersRes, docsRes] = await Promise.all([
  //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads/filters"),
  //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads"),
  //       ]);

  //       const filtersData = await filtersRes.json();
  //       const docsData = await docsRes.json();

  //       setProductTypes(filtersData.productTypes || []);
  //       setDocumentTypes(filtersData.documentTypes || []);
  //       setDocuments(docsData || []);
  //       setFilteredDocs(docsData || []);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [filtersRes, docsRes, qualityRes] = await Promise.all([
  //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads/filters"),
  //         fetch("https://backend-test-yeyr.onrender.com/api/product-downloads"),
  //         fetch("https://backend-test-yeyr.onrender.com/api/quality"), // ✅ new
  //       ]);

  //       const filtersData = await filtersRes.json();
  //       const docsData = await docsRes.json();
  //       const qualityData = await qualityRes.json(); // ✅ new

  //       const merged = [...(docsData || []), ...(qualityData || [])]; // ✅ merge both

  //       setProductTypes(filtersData.productTypes || []);
  //       setDocumentTypes(filtersData.documentTypes || []);
  //       setDocuments(merged); // ✅ merged
  //       setFilteredDocs(merged); // ✅ merged
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const docTypeFromURL = searchParams.get("document_type");

    if (docTypeFromURL) {
      setFilters((prev) => ({
        ...prev,
        industry: docTypeFromURL, // 👈 maps to document_type filter
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [filtersRes, docsRes, qualityRes] = await Promise.all([
          fetch(
            "https://backend-test-yeyr.onrender.com/api/product-downloads/filters",
          ),
          fetch("https://backend-test-yeyr.onrender.com/api/product-downloads"),
          fetch("https://backend-test-yeyr.onrender.com/api/quality"),
        ]);

        const filtersData = await filtersRes.json();
        const docsData = ((await docsRes.json()) || []).map((d: Document) => ({
          ...d,
          id: `prod_${d.id}`, // ✅ "prod_17"
        }));
        const qualityData = ((await qualityRes.json()) || []).map(
          (d: Document) => ({
            ...d,
            id: `qual_${d.id}`, // ✅ "qual_17"
          }),
        );

        // const merged = [...docsData, ...qualityData];
        const merged = [...docsData, ...qualityData];

        // ✅ Remove duplicates by id right here
        const uniqueMerged = Array.from(
          new Map(merged.map((doc) => [String(doc.id), doc])).values(),
        );

        setDocuments(uniqueMerged);
        setFilteredDocs(uniqueMerged);

        setProductTypes(filtersData.productTypes || []);
        setDocumentTypes(filtersData.documentTypes || []);
        setDocuments(merged);
        setFilteredDocs(merged);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...documents];

    if (filters.contentType) {
      temp = temp.filter(
        (doc) =>
          doc.product_type?.trim().toLowerCase() ===
          filters.contentType.trim().toLowerCase(),
      );
    }

    if (filters.industry) {
      temp = temp.filter(
        (doc) =>
          doc.document_type?.trim().toLowerCase() ===
          filters.industry.trim().toLowerCase(),
      );
    }

    if (filters.sortBy === "Asc") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filters.sortBy === "Desc") {
      temp.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredDocs(temp);
    setCurrentPage(0);
  }, [filters, documents]);

  const offset = currentPage * docsPerPage;
  const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
  const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  // const handleSelect = (id: number) => {
  //   setSelectedDocs((prev) =>
  //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
  //   );
  // };
  const handleSelect = (id: number | string) => {
    setSelectedDocs((prev) =>
      prev.map(String).includes(String(id))
        ? prev.filter((item) => String(item) !== String(id))
        : [...prev, id],
    );
  };
  // const handleSelectAll = () => {
  //   const currentPageIds = currentDocs.map((doc) => doc.id);

  //   const allSelectedOnPage = currentPageIds.every((id) =>
  //     selectedDocs.includes(id),
  //   );

  //   if (allSelectedOnPage) {
  //     setSelectedDocs((prev) =>
  //       prev.filter((id) => !currentPageIds.includes(id)),
  //     );
  //   } else {
  //     setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
  //   }
  // };

  const handleSelectAll = () => {
    const currentPageIds = currentDocs.map((doc) => doc.id);

    const allSelectedOnPage = currentPageIds.every(
      (id) => selectedDocs.map(String).includes(String(id)), // ✅ fix
    );

    if (allSelectedOnPage) {
      setSelectedDocs(
        (prev) =>
          prev.filter((id) => !currentPageIds.map(String).includes(String(id))), // ✅ fix
      );
    } else {
      // setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
      setSelectedDocs((prev) =>
        Array.from(new Set([...prev, ...currentPageIds])),
      );
    }
  };

  //   const handleDownloadZip = async () => {
  //     if (selectedDocs.length === 0) {
  //       alert("Please select at least one document");
  //       return;
  //     }

  //     const zip = new JSZip();

  //     // const selectedFiles = documents.filter((doc) =>
  //     //   selectedDocs.includes(doc.id),
  //     // );
  //     const selectedFiles = documents.filter((doc) =>
  //   selectedDocs.map(String).includes(String(doc.id)),
  // );

  //     await Promise.all(
  //       selectedFiles.map(async (doc) => {
  //         const response = await fetch(
  //           `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
  //         );
  //         const blob = await response.blob();
  //         zip.file(doc.file_url, blob);
  //       }),
  //     );

  //     const content = await zip.generateAsync({ type: "blob" });
  //     saveAs(content, "documents.zip");
  //   };

  //   const handleDownloadZip = async () => {
  //     if (selectedDocs.length === 0) {
  //       alert("Please select at least one document");
  //       return;
  //     }
  // //  console.log("selectedDocs:", selectedDocs);

  //     const zip = new JSZip();

  //     const selectedFiles = filteredDocs.filter(
  //       (
  //         doc, // ✅ filteredDocs not documents
  //       ) => selectedDocs.map(String).includes(String(doc.id)),
  //     );

  //       console.log("COUNT:", selectedFiles.length);
  //   console.log("IDS:", selectedFiles.map(f => f.id));
  //   console.log("FILES:", selectedFiles.map(f => f.file_url));

  //     await Promise.all(
  //       selectedFiles.map(async (doc) => {
  //         const response = await fetch(
  //           `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
  //         );
  //         const blob = await response.blob();
  //         zip.file(doc.file_url, blob);
  //       }),
  //     );

  //     const content = await zip.generateAsync({ type: "blob" });
  //     saveAs(content, "documents.zip");
  //   };

  const handleDownloadZip = async () => {
    if (selectedDocs.length === 0) {
      alert("Please select at least one document");
      return;
    }

    const zip = new JSZip();

    // ✅ Deduplicate filteredDocs by id first, then filter selected
    const uniqueDocs = Array.from(
      new Map(filteredDocs.map((doc) => [String(doc.id), doc])).values(),
    );

    const selectedFiles = uniqueDocs.filter((doc) =>
      selectedDocs.map(String).includes(String(doc.id)),
    );

    console.log("COUNT:", selectedFiles.length);
    console.log(
      "IDS:",
      selectedFiles.map((f) => f.id),
    );
    console.log(
      "FILES:",
      selectedFiles.map((f) => f.file_url),
    );

    await Promise.all(
      selectedFiles.map(async (doc) => {
        const response = await fetch(
          `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
        );
        const blob = await response.blob();
        zip.file(doc.file_url, blob);
      }),
    );

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "documents.zip");
  };

  const handleSingleDownload = async (doc: Document) => {
    try {
      const response = await fetch(
        `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
      );
      const blob = await response.blob();
      saveAs(blob, doc.file_url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  // const selectedOnPage = currentDocs.filter((doc) =>
  //   selectedDocs.includes(doc.id),
  // ).length;
  //   const selectedOnPage = currentDocs.filter((doc) =>
  //   selectedDocs.map(String).includes(String(doc.id)),
  // ).length;

  const selectedOnPage = currentDocs.filter(
    (doc) => selectedDocs.map(String).includes(String(doc.id)), // ✅
  ).length;

  const totalOnPage = currentDocs.length;
  const totalFiles = filteredDocs.length;
  return (
    <>
      <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        {/* <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div> */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: "url(/assets/img/banner/Petrochemical_banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "35px",
                      lineHeight: "1.2",
                      fontWeight: "5px",
                    }}
                  >
                    {title}
                  </h2>

                  <p style={{ fontSize: "15px", color: "white" }}>{subtitle}</p>

                  <div
                    className="tp-leadership-search p-relative"
                    style={{
                      position: "relative",
                      width: "700px",
                      margin: "0 auto",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <FaSearch
                        style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#888",
                          fontSize: "16px",
                          pointerEvents: "none",
                        }}
                      />

                      <input
                        type="text"
                        placeholder="Search..."
                        style={{
                          width: "100%",
                          height: "45px",
                          paddingLeft: "45px",
                          paddingRight: "15px",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-campus-student-list d-flex justify-content-center mt-5">
          <div className="d-flex align-items-center gap-1 flex-wrap">
            <p
              style={{
                fontSize: "18px",
                margin: 0,
                color: "white",
                marginRight: "5px",
              }}
            >
              Featured Topics:
            </p>

            {navData.map((nav) => (
              <li key={nav.id} className="nav-item">
                <Link
                  className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
                  href="/contact"
                  style={{
                    fontSize: "10px",
                    padding: "4px 14px",
                    borderRadius: "10px",
                    marginRight: "6px",
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </section>

      <CounterOne />

      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row align-center">
          <div className="col-xl-12 col-lg-12">
            <div className="row align-items-center mb-3 mt-30">
              <div className="col-lg-9 col-md-8">
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {/* ✅ PRODUCT TYPE (Dynamic only logic changed) */}
                  <select
                    className="form-select"
                    style={{
                      maxWidth: "300px",
                      height: "35px",
                      fontSize: "12px",
                    }}
                    value={filters.contentType}
                    onChange={(e) =>
                      setFilters({ ...filters, contentType: e.target.value })
                    }
                  >
                    <option value="">Select a Product Type</option>

                    {productTypes.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  {/* ✅ DOCUMENT TYPE (Dynamic only logic changed) */}
                  <select
                    className="form-select"
                    style={{
                      maxWidth: "250px",
                      height: "35px",
                      fontSize: "12px",
                    }}
                    value={filters.industry}
                    onChange={(e) =>
                      setFilters({ ...filters, industry: e.target.value })
                    }
                  >
                    <option value="">Select an Document Type</option>

                    {documentTypes.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* RIGHT SIDE (UNCHANGED) */}
              {/* <div className="col-lg-3 col-md-4 text-lg-end mt-2 mt-lg-0">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "8px",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
                    Show
                  </p>

                  <select
                    className="form-select"
                    style={{
                      maxWidth: "250px",
                      height: "35px",
                      fontSize: "12px",
                    }}
                    value={filters.sortBy}
                    onChange={(e) =>
                      setFilters({ ...filters, sortBy: e.target.value })
                    }
                  >
                    <option value="">Sort By</option>
                    <option value="Asc">Asc</option>
                    <option value="Desc">Desc</option>
                    <option value="Relevance">Relevance</option>
                  </select>
                </div>
              </div> */}
            </div>

            {/* FILTER TAGS (UNCHANGED) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {Object.entries(filters).map(
                  ([key, value]) =>
                    value && (
                      <span
                        key={key}
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                        }}
                      >
                        {value}
                        <span
                          onClick={() =>
                            setFilters((prev) => ({ ...prev, [key]: "" }))
                          }
                          style={{ cursor: "pointer", marginLeft: "5px" }}
                        >
                          ✕
                        </span>
                      </span>
                    ),
                )}
              </div>

              {Object.values(filters).some(Boolean) && (
                // <button
                //   onClick={() =>
                //     setFilters({
                //       category: "",
                //       contentType: "",
                //       industry: "",
                //       sortBy: "",
                //     })
                //   }
                //   style={{
                //     marginLeft: "auto",
                //     background: "transparent",
                //     border: "none",
                //     color: "#1d3a72",
                //     fontSize: "12px",
                //     fontWeight: 600,
                //     cursor: "pointer",
                //   }}
                // >
                //   Clear all Filters
                // </button>
                <button
                  onClick={() => {
                    setFilters({
                      category: "",
                      contentType: "",
                      industry: "",
                      sortBy: "",
                    });
                    setSelectedDocs([]); // ✅ clears all selections too
                  }}
                  style={{
                    marginLeft: "auto",
                    background: "transparent",
                    border: "none",
                    color: "#1d3a72",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Reset All
                </button>
              )}
              {/* <div className="mt-30">
                {documents.map((doc) => ( */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  width: "100%",
                  flexWrap: "wrap", // ✅ important
                  gap: "10px",
                }}
              >
                {/* LEFT */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={
                      currentDocs.length > 0 &&
                      // currentDocs.every((doc) => selectedDocs.includes(doc.id))
                      currentDocs.every((doc) =>
                        selectedDocs.map(String).includes(String(doc.id)),
                      )
                    }
                    onChange={handleSelectAll}
                  />
                  <span style={{ fontSize: "13px" }}>Select All</span>
                  <button
                    onClick={() => {
                      setFilters({
                        category: "",
                        contentType: "",
                        industry: "",
                        sortBy: "",
                      });
                      setSelectedDocs([]); // ✅ clears all selections too
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#1d3a72",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    | Reset All
                  </button>

                  {/* CLEAR FILTERS */}
                  {Object.values(filters).some(Boolean) && (
                    <button
                      onClick={() =>
                        setFilters({
                          category: "",
                          contentType: "",
                          industry: "",
                          sortBy: "",
                        })
                      }
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#1d3a72",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>

                {/* CENTER */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    justifyContent: "center",
                    flex: 1,
                    flexWrap: "wrap", // ✅ wrap on small screens
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "#333" }}>
                    {selectedOnPage}/{totalOnPage} selected Documents
                  </span>

                  <span style={{ fontSize: "13px", color: "#666" }}>
                    A total of:{" "}
                    <span style={{ color: "#fecb00", fontWeight: 600 }}>
                      {totalFiles}
                    </span>{" "}
                    Resources found
                  </span>
                </div>

                {/* RIGHT */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "auto",
                  }}
                >
                  {selectedDocs.length > 0 && (
                    <div
                      onClick={handleDownloadZip}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <p style={{ margin: 0, fontSize: "13px" }}>
                        Download Selected ({selectedDocs.length})
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                          stroke="#fecb00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#e5e5e5",
                }}
              ></div>
            </div>
            <div className="row mt-30">
              {currentDocs.map((doc) => (
                <div key={doc.id} className="col-lg-12 mb-10">
                  {/* ✅ CHECKBOX OUTSIDE CARD */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      // checked={selectedDocs.includes(doc.id)}
                      checked={selectedDocs
                        .map(String)
                        .includes(String(doc.id))}
                      onChange={() => handleSelect(doc.id)}
                      style={{ marginRight: "10px" }}
                    />

                    {/* YOUR CARD (UNCHANGED STYLES) */}
                    <div
                      style={{
                        border: "1px solid #e5e5e5",
                        borderRadius: "12px",
                        padding: "10px",
                        backgroundColor: "white",
                        transition: "box-shadow 0.3s ease",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={() => {
                        window.open(
                          `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
                          "_blank",
                        );
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 6px 18px rgba(0,0,0,0.12)";
                        const icon = e.currentTarget.querySelector(
                          ".download-icon",
                        ) as HTMLElement;
                        if (icon) icon.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        const icon = e.currentTarget.querySelector(
                          ".download-icon",
                        ) as HTMLElement;
                        if (icon) icon.style.opacity = "0";
                      }}
                    >
                      {/* FULL ROW */}
                      <div className="d-flex align-items-center justify-content-between">
                        {/* LEFT SIDE */}
                        <div className="d-flex align-items-center">
                          {/* ICON */}
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "6px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "16px",
                              flexShrink: 0,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="#fecb00"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                              />
                            </svg>
                          </div>

                          {/* TEXT */}
                          <div>
                            <h5
                              style={{
                                color: "#292929",
                                fontSize: "12px",
                                fontWeight: "600",
                                marginBottom: "4px",
                              }}
                            >
                              {doc.document_type}
                            </h5>

                            <p
                              style={{
                                color: "#333",
                                fontSize: "12px",
                                margin: 0,
                              }}
                            >
                              {doc.title}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          {/* DATE */}
                          <span
                            style={{
                              color: "#666",
                              fontSize: "14px",
                            }}
                          >
                            {new Date(doc.created_at).toLocaleDateString(
                              "en-IN",
                            )}
                          </span>

                          {/* DOWNLOAD ICON */}
                          {/* <div
                            className="download-icon"
                            style={{
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                            }}
                          > */}
                          <div
                            className="download-icon"
                            onClick={(e) => {
                              e.stopPropagation(); // ✅ VERY IMPORTANT (prevents card click)
                              handleSingleDownload(doc);
                            }}
                            style={{
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              cursor: "pointer", // ✅ show clickable
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#1d3a72"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                                stroke="#fecb00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-event-inner-pagination pb-10">
                  <div className="tp-dashboard-pagination pt-20">
                    <div className="tp-pagination ">
                      <Pagination
                        handlePageClick={handlePageClick}
                        pageCount={pageCount}
                        isCenter={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
