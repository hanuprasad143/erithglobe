// "use client";

// import { useState, useEffect } from "react";
// import NiceSelect from "../ui/nice-select";

// type Download = {
//   id: number;
//   type_id: number;
//   title: string;
//   language: string;
//   file_url: string;
//   document_type: string;
// };

// type Props = {
//   downloads: Download[];
// };

// const BASE_URL = "https://backend-test-yeyr.onrender.com";

// export default function TypeDownloads({ typeId }: Props) {
//   const [downloads, setDownloads] = useState<Download[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedType, setSelectedType] = useState<string>("");
//   const [selectedLanguage, setSelectedLanguage] = useState<string>("");

//   /* =============================
//      FETCH DOWNLOADS
//   ============================== */
//   useEffect(() => {
//     if (!typeId) {
//       setDownloads([]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);

//     fetch(`${BASE_URL}/api/type-downloads/${typeId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("DOWNLOAD DATA:", data);

//         if (Array.isArray(data)) {
//           const formattedData: Download[] = data.map((d: any) => ({
//             id: d.id,
//             type_id: d.type_id,
//             title: d.title || "",
//             language: d.language || "",
//             document_type: d.document_type || "",
//             file_url: d.file_url
//               ? d.file_url.startsWith("/")
//                 ? d.file_url
//                 : "/" + d.file_url
//               : "",
//           }));

//           setDownloads(formattedData);
//         } else {
//           setDownloads([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Download fetch error:", err);
//         setDownloads([]);
//       })
//       .finally(() => setLoading(false));
//   }, [typeId]);

//   /* =============================
//      DYNAMIC DROPDOWN VALUES
//   ============================== */
//   const documentTypes = [
//     { value: "", label: "All Document Types" },
//     ...Array.from(
//       new Set(downloads.map((d) => d.document_type).filter(Boolean))
//     ).map((type) => ({
//       value: type,
//       label: type,
//     })),
//   ];

//   const languages = [
//     { value: "", label: "All Languages" },
//     ...Array.from(
//       new Set(downloads.map((d) => d.language).filter(Boolean))
//     ).map((lang) => ({
//       value: lang,
//       label: lang,
//     })),
//   ];

//   /* =============================
//      FILTER DOWNLOADS
//   ============================== */
//   const filteredDownloads = downloads.filter((d) => {
//     const typeMatch = selectedType ? d.document_type === selectedType : true;
//     const languageMatch = selectedLanguage ? d.language === selectedLanguage : true;
//     return typeMatch && languageMatch;
//   });

//   return (
//     <section className="tp-shop-service-area pb-30">
//       <div className="container px-0">
//         {/* FILTER DROPDOWNS */}
//         <div className="row mb-40">
//           <div className="col-lg-6 col-md-6 col-12 custom-select-box">
//             <NiceSelect
//               options={documentTypes}
//               defaultCurrent={0}
//               onChange={(item: any) => setSelectedType(item?.value || "")}
//               name="documentType"
//             />
//           </div>

//           <div className="col-lg-6 col-md-6 col-12 custom-select-box">
//             <NiceSelect
//               options={languages}
//               defaultCurrent={0}
//               onChange={(item: any) => setSelectedLanguage(item?.value || "")}
//               name="language"
//             />
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <div className="text-center py-5">
//             <p>Loading downloads...</p>
//           </div>
//         )}

//         {/* DOWNLOAD CARDS */}
//         {!loading && (
//           <div className="row">
//             {filteredDownloads.length === 0 ? (
//               <div className="text-center py-5">
//                 <p>No downloads available.</p>
//               </div>
//             ) : (
//               filteredDownloads.map((service) => (
//                 <div key={service.id} className="col-lg-4 col-md-6 mt-30 mb-30">
//                   <div
//                     style={{
//                       border: "1px solid #e5e5e5",
//                       borderRadius: "10px",
//                       padding: "24px",
//                       height: "100%",
//                       backgroundColor: "white",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow =
//                         "0 6px 18px rgba(0,0,0,0.12)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow = "none";
//                     }}
//                   >
//                     {/* HEADER */}
//                     <div className="d-flex align-items-start mb-3">
//                       <div
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           borderRadius: "6px",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           marginRight: "16px",
//                           fontSize: "20px",
//                         }}
//                       >
//                         📄
//                       </div>

//                       <div style={{ flex: 1 }}>
//                         <h5
//                           style={{
//                             color: "#000",
//                             fontSize: "15px",
//                             fontWeight: "600",
//                             marginBottom: "6px",
//                             textTransform: "capitalize",
//                           }}
//                         >
//                           {service.document_type}
//                         </h5>

//                         <p
//                           style={{
//                             color: "#333",
//                             fontSize: "13px",
//                             marginBottom: "0",
//                             lineHeight: "1.5",
//                           }}
//                         >
//                           {service.title}
//                         </p>
//                       </div>
//                     </div>

//                     {/* FOOTER */}
//                     <div className="d-flex align-items-center justify-content-between mt-4">
//                       <a
//                         href={`${BASE_URL}${service.file_url}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <button
//                           style={{
//                             backgroundColor: "#1d3a72",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "8px",
//                             padding: "8px 18px",
//                             fontSize: "13px",
//                             fontWeight: "600",
//                             cursor: "pointer",
//                           }}
//                         >
//                           Download
//                         </button>
//                       </a>

//                       <span
//                         style={{
//                           color: "#666",
//                           fontSize: "13px",
//                         }}
//                       >
//                         {service.language}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
