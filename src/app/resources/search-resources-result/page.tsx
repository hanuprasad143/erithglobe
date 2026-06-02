// // import Image from "next/image";
// // import Link from "next/link";
// // import DocumentCards from "@/components/search-results/documentscards";
// // import IndustryCard from "@/components/search-results/industriescards";
// // import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// // import CaseStudiesSearchResults from "@/components/search-results/case-studies";

// // const API_URL = "https://backend-test-yeyr.onrender.com/api";
// // const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// // export default async function SearchResultsPage({ searchParams }: any) {
// //   const query = searchParams?.query || "";
// //   const page = searchParams?.page || 1;

// //   type TabKey =
// //     | "results"
// //     | "resources"
// //     | "knowledge"
// //     | "industries"
// //     | "case-studies";

// //   const activeTab = (searchParams?.tab as TabKey) || "results";

// //   const tabs: { key: TabKey; label: string }[] = [
// //     { key: "results", label: "Results" },
// //     { key: "resources", label: "Resources" },
// //     { key: "knowledge", label: "Knowledge Center" },
// //     { key: "industries", label: "Industries" },
// //     { key: "case-studies", label: "Case Studies" },
// //   ];

// //   let data = {
// //     types: [],
// //     documents: [],
// //     industries: [],
// //     knowledgeCenter: [],
// //     caseStudies: [],
// //   };

// //   let industryPages: any[] = [];

// //   if (query) {
// //     try {
// //       const [searchRes, indRes] = await Promise.all([
// //         fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
// //           cache: "no-store",
// //         }),
// //         fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
// //           cache: "no-store",
// //         }),
// //       ]);

// //       data = await searchRes.json();
// //       industryPages = await indRes.json();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }

// //   data.caseStudies = data.caseStudies || [];

// //   const industriesWithImages = data.industries?.map((ind: any) => {
// //     const match = industryPages?.find((p: any) => p.slug === ind.slug);

// //     return {
// //       ...ind,
// //       banner_image: match?.banner_image || ind.banner_image,
// //       name: match?.banner_title || ind.name,
// //     };
// //   });

// //   const videosAndWebinars = (data.knowledgeCenter || []).filter(
// //     (item: any) =>
// //       item.category_type?.toLowerCase().includes("video") ||
// //       item.category_type?.toLowerCase().includes("webinar"),
// //   );

// //   const caseStudies = data.caseStudies;

// //   const counts: Record<TabKey, number> = {
// //     results:
// //       (data.documents?.length || 0) +
// //       (industriesWithImages?.length || 0) +
// //       (videosAndWebinars?.length || 0) +
// //       (caseStudies?.length || 0),
// //     resources: data.documents?.length || 0,
// //     knowledge: videosAndWebinars.length || 0,
// //     industries: industriesWithImages?.length || 0,
// //     "case-studies": caseStudies?.length || 0,
// //   };

// //   return (
// //     <div className="container">
// //       <h2 style={{ marginBottom: "20px" }}>
// //         Search Results for &quot;{query}&quot;
// //       </h2>

// //       <div className="row" style={{ marginBottom: "30px" }}>
// //         {tabs.map((tab) => (
// //           <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30">
// //             <Link
// //               href={`?query=${query}&tab=${tab.key}`}
// //               style={{
// //                 display: "block",
// //                 textAlign: "center",
// //                 padding: "10px",
// //                 borderRadius: "8px",
// //                 background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
// //                 color: activeTab === tab.key ? "#fff" : "#333",
// //                 fontWeight: "600",
// //               }}
// //             >
// //               {tab.label} ({counts[tab.key] || 0})
// //             </Link>
// //           </div>
// //         ))}
// //       </div>

// //       {/* RESOURCES */}
// //       {(activeTab === "resources" || activeTab === "results") &&
// //         data.documents?.length > 0 && (
// //           <>
// //             <h4 style={{ marginTop: "30px" }}>Resources</h4>
// //             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
// //           </>
// //         )}

// //       {/* INDUSTRIES */}
// //       {(activeTab === "industries" || activeTab === "results") &&
// //         industriesWithImages.length > 0 && (
// //           <>
// //             <h4 style={{ marginTop: "30px" }}>Industries</h4>
// //             <div className="row">
// //               {industriesWithImages.map((industry: any) => (
// //                 <IndustryCard key={industry.id} industry={industry} />
// //               ))}
// //             </div>
// //           </>
// //         )}

// //       {/* KNOWLEDGE CENTER */}
// //       {(activeTab === "knowledge" || activeTab === "results") &&
// //         videosAndWebinars.length > 0 && (
// //           <div className="row">
// //             <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>

// //             {videosAndWebinars.map((item: any) => (
// //               <WebinarsAndVideosSearchResults key={item.id} item={item} />
// //             ))}
// //           </div>
// //         )}

// //       {/* CASE STUDIES */}
// //       {(activeTab === "case-studies" || activeTab === "results") &&
// //         caseStudies.length > 0 && (
// //           <div className="row">
// //             <h4 style={{ marginTop: "30px" }}>Case Studies</h4>

// //             {caseStudies.map((item: any) => (
// //               <CaseStudiesSearchResults key={item.id} item={item} />
// //             ))}
// //           </div>
// //         )}

// //       {/* EMPTY STATE */}
// //       {!data.documents.length &&
// //         !data.industries.length &&
// //         !data.knowledgeCenter.length &&
// //         !data.caseStudies.length && <p>No results found.</p>}
// //     </div>
// //   );
// // }

// // import Image from "next/image";
// // import Link from "next/link";
// // import DocumentCards from "@/components/search-results/documentscards";
// // import IndustryCard from "@/components/search-results/industriescards";
// // import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// // import CaseStudiesSearchResults from "@/components/search-results/case-studies";

// // const API_URL = "https://backend-test-yeyr.onrender.com/api";
// // const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// // export default async function SearchResultsPage({ searchParams }: any) {
// //   const query = searchParams?.query || "";
// //   const page = searchParams?.page || 1;

// //   type TabKey =
// //     | "results"
// //     | "resources"
// //     | "knowledge"
// //     | "industries"
// //     | "case-studies";

// //   const activeTab = (searchParams?.tab as TabKey) || "results";

// //   const tabs: { key: TabKey; label: string }[] = [
// //     { key: "results", label: "Results" },
// //     { key: "resources", label: "Resources" },
// //     { key: "knowledge", label: "Knowledge Center" },
// //     { key: "industries", label: "Industries" },
// //     { key: "case-studies", label: "Case Studies" },
// //   ];

// //   let data = {
// //     types: [],
// //     documents: [],
// //     industries: [],
// //     knowledgeCenter: [],
// //     caseStudies: [],
// //   };

// //   let industryPages: any[] = [];

// //   if (query) {
// //     try {
// //       const [searchRes, indRes] = await Promise.all([
// //         fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
// //           cache: "no-store",
// //         }),
// //         fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
// //           cache: "no-store",
// //         }),
// //       ]);

// //       const contentType1 = searchRes.headers.get("content-type") || "";
// //       const contentType2 = indRes.headers.get("content-type") || "";

// //       if (searchRes.ok && contentType1.includes("application/json")) {
// //         data = await searchRes.json();
// //       } else {
// //         console.error("Search API error:", searchRes.status, searchRes.statusText);
// //       }

// //       if (indRes.ok && contentType2.includes("application/json")) {
// //         industryPages = await indRes.json();
// //       } else {
// //         console.error("Industries API error:", indRes.status, indRes.statusText);
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }

// //   data.caseStudies = data.caseStudies || [];

// //   const industriesWithImages = data.industries?.map((ind: any) => {
// //     const match = industryPages?.find((p: any) => p.slug === ind.slug);

// //     return {
// //       ...ind,
// //       banner_image: match?.banner_image || ind.banner_image,
// //       name: match?.banner_title || ind.name,
// //     };
// //   });

// //   const videosAndWebinars = (data.knowledgeCenter || []).filter(
// //     (item: any) =>
// //       item.category_type?.toLowerCase().includes("video") ||
// //       item.category_type?.toLowerCase().includes("webinar"),
// //   );

// //   const caseStudies = data.caseStudies;

// //   const counts: Record<TabKey, number> = {
// //     results:
// //       (data.documents?.length || 0) +
// //       (industriesWithImages?.length || 0) +
// //       (videosAndWebinars?.length || 0) +
// //       (caseStudies?.length || 0),
// //     resources: data.documents?.length || 0,
// //     knowledge: videosAndWebinars.length || 0,
// //     industries: industriesWithImages?.length || 0,
// //     "case-studies": caseStudies?.length || 0,
// //   };

// //   return (
// //     <div className="container">
// //       <h2 style={{ marginBottom: "20px" }}>
// //         Search Results for &quot;{query}&quot;
// //       </h2>

// //       <div className="row" style={{ marginBottom: "30px" }}>
// //         {tabs.map((tab) => (
// //           <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30">
// //             <Link
// //               href={`?query=${query}&tab=${tab.key}`}
// //               style={{
// //                 display: "block",
// //                 textAlign: "center",
// //                 padding: "10px",
// //                 borderRadius: "8px",
// //                 background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
// //                 color: activeTab === tab.key ? "#fff" : "#333",
// //                 fontWeight: "600",
// //               }}
// //             >
// //               {tab.label} ({counts[tab.key] || 0})
// //             </Link>
// //           </div>
// //         ))}
// //       </div>

// //       {/* RESOURCES */}
// //       {activeTab === "resources" && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Resources</h4>
// //           {data.documents?.length > 0 ? (
// //             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
// //           ) : (
// //             <p>No results found.</p>
// //           )}
// //         </>
// //       )}
// //       {activeTab === "results" && data.documents?.length > 0 && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Resources</h4>
// //           <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
// //         </>
// //       )}

// //       {/* INDUSTRIES */}
// //       {activeTab === "industries" && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Industries</h4>
// //           {industriesWithImages.length > 0 ? (
// //             <div className="row">
// //               {industriesWithImages.map((industry: any) => (
// //                 <IndustryCard key={industry.id} industry={industry} />
// //               ))}
// //             </div>
// //           ) : (
// //             <p>No results found.</p>
// //           )}
// //         </>
// //       )}
// //       {activeTab === "results" && industriesWithImages.length > 0 && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Industries</h4>
// //           <div className="row">
// //             {industriesWithImages.map((industry: any) => (
// //               <IndustryCard key={industry.id} industry={industry} />
// //             ))}
// //           </div>
// //         </>
// //       )}

// //       {/* KNOWLEDGE CENTER */}
// //       {activeTab === "knowledge" && (
// //         <div className="row">
// //           <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>
// //           {videosAndWebinars.length > 0 ? (
// //             videosAndWebinars.map((item: any) => (
// //               <WebinarsAndVideosSearchResults key={item.id} item={item} />
// //             ))
// //           ) : (
// //             <p>No results found.</p>
// //           )}
// //         </div>
// //       )}
// //       {activeTab === "results" && videosAndWebinars.length > 0 && (
// //         <div className="row">
// //           <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>
// //           {videosAndWebinars.map((item: any) => (
// //             <WebinarsAndVideosSearchResults key={item.id} item={item} />
// //           ))}
// //         </div>
// //       )}

// //       {/* CASE STUDIES */}
// //       {activeTab === "case-studies" && (
// //         <div className="row">
// //           <h4 style={{ marginTop: "30px" }}>Case Studies</h4>
// //           {caseStudies.length > 0 ? (
// //             caseStudies.map((item: any) => (
// //               <CaseStudiesSearchResults key={item.id} item={item} />
// //             ))
// //           ) : (
// //             <p>No results found.</p>
// //           )}
// //         </div>
// //       )}
// //       {activeTab === "results" && caseStudies.length > 0 && (
// //         <div className="row">
// //           <h4 style={{ marginTop: "30px" }}>Case Studies</h4>
// //           {caseStudies.map((item: any) => (
// //             <CaseStudiesSearchResults key={item.id} item={item} />
// //           ))}
// //         </div>
// //       )}

// //       {/* EMPTY STATE for Results tab */}
// //       {activeTab === "results" &&
// //         !data.documents.length &&
// //         !data.industries.length &&
// //         !data.knowledgeCenter.length &&
// //         !data.caseStudies.length && <p>No results found.</p>}
// //     </div>
// //   );
// // }

// // import Image from "next/image";
// import Link from "next/link";
// import DocumentCards from "@/components/search-results/documentscards";
// import IndustryCard from "@/components/search-results/industriescards";
// import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// // import CaseStudiesSearchResults from "@/components/search-results/case-studies";
// import CaseStudiesSearchResults from "@/components/search-results/search-case-studies";
// import ResourcesSearchBar from "@/components/resources/resourcessearchbar";
// import CounterOne from "@/components/counter/counter-one";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";
// const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// // const navData = [
// //   {
// //     id: "home",
// //     title: "Gaskets",
// //     ariaControls: "home",
// //     isActive: true,
// //     href: "/products/non-metallic-gaskets",
// //   },
// //   {
// //     id: "profile",
// //     title: "Expansion Joints",
// //     ariaControls: "profile",
// //     isActive: true,
// //     href: "/products/expansion-joint",
// //   },
// //   {
// //     id: "contact",
// //     title: "Oil & Gas",
// //     ariaControls: "contact",
// //     isActive: true,
// //     href: "/industries/oil-gas",
// //   },
// //   {
// //     id: "data Center",
// //     title: "Data Center",
// //     ariaControls: "contact",
// //     isActive: true,
// //     href: "/industries/data-center",
// //   },
// // ];

// // type IProps = {
// //   title?: string;
// //   subtitle?: string;
// //   // admission?: boolean;
// // };

// const navData = [
//   {
//     id: "gaskets",
//     title: "Gaskets",
//     ariaControls: "gaskets",
//     href: "/products/non-metallic-gaskets",
//   },
//   {
//     id: "expansion-joints",
//     title: "Expansion Joints",
//     ariaControls: "expansion-joints",
//     href: "/products/expansion-joint",
//   },
//   {
//     id: "oil-gas",
//     title: "Oil & Gas",
//     ariaControls: "oil-gas",
//     href: "/industries/oil-gas",
//   },
//   {
//     id: "data-center",
//     title: "Data Center",
//     ariaControls: "data-center",
//     href: "/industries/data-center",
//   },
// ];

// type Product = {
//   id: number;
//   name: string;
//   slug: string;
//   link?: string | null;
//   banner_image: string;
// };

// type ProductType = {
//   id: number;
//   name: string;
//   product_slug: string;
//   image: string;
// };

// type Document = {
//   id: number;
//   title: string;
//   file_url: string;
// };

// type Industry = {
//   id: number;
//   slug: string | null;
// };

// type KnowledgeCenter = {
//   id: number;
//   title: string;
//   category_type: string;
//   link?: string;
// };

// type SearchResponse = {
//   products: Product[];
//   types: ProductType[];
//   documents: Document[];
//   industries: Industry[];
//   knowledgeCenter: KnowledgeCenter[];
//   caseStudies: KnowledgeCenter[];
// };

// export default async function SearchResultsPage({ searchParams }: any) {
//   const query = searchParams?.query || "";
//   const page = searchParams?.page || 1;

//   type TabKey =
//     | "results"
//     | "resources"
//     | "knowledge"
//     | "industries"
//     | "case-studies";

//   const activeTab = (searchParams?.tab as TabKey) || "results";

//   const tabs: { key: TabKey; label: string }[] = [
//     { key: "results", label: "Results" },
//     { key: "resources", label: "Resources" },
//     { key: "knowledge", label: "Knowledge Center" },
//     { key: "industries", label: "Industries" },
//     { key: "case-studies", label: "Case Studies" },
//   ];

//   let data = {
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [],
//     caseStudies: [],
//   };

//   // let industryPages: any[] = [];

//   if (query) {
//     try {
//       const searchRes = await fetch(
//         `${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`,
//         { cache: "no-store" },
//       );

//       const contentType = searchRes.headers.get("content-type") || "";

//       if (searchRes.ok && contentType.includes("application/json")) {
//         data = await searchRes.json();
//       } else {
//         console.error(
//           "Search API error:",
//           searchRes.status,
//           searchRes.statusText,
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   data.caseStudies = data.caseStudies || [];

//   const industriesWithImages = data.industries?.map((ind: any) => ({
//     ...ind,
//     banner_image: ind.banner_image,
//     name: ind.name,
//   }));

//   const videosAndWebinars = (data.knowledgeCenter || []).filter(
//     (item: any) =>
//       item.category_type?.toLowerCase().includes("video") ||
//       item.category_type?.toLowerCase().includes("webinar"),
//   );

//   const caseStudies = data.caseStudies;

//   const counts: Record<TabKey, number> = {
//     results:
//       (data.documents?.length || 0) +
//       (industriesWithImages?.length || 0) +
//       (videosAndWebinars?.length || 0) +
//       (caseStudies?.length || 0),
//     resources: data.documents?.length || 0,
//     knowledge: videosAndWebinars.length || 0,
//     industries: industriesWithImages?.length || 0,
//     "case-studies": caseStudies?.length || 0,
//   };

//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
//         style={{
//           height: "400px",
//           overflow: "visible", // ✅ IMPORTANT
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/Oil_and_gas.png)" }}
//         ></div>

//         <div className="container" style={{ padding: "0 15px" }}>
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content text-center">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h2
//                     className="tp-breadcrumb__title color mb-10"
//                     style={{
//                       fontSize: "clamp(22px, 4vw, 35px)", // ✅ responsive text
//                       lineHeight: "1.2",
//                       color: "#fecb00",
//                     }}
//                   >
//                     {/* {title} */}
//                     Hello, how can we help?
//                   </h2>

//                   <p style={{ fontSize: "14px", color: "white" }}>
//                     {/* {subtitle} */}
//                     Learn more about how Erith can transform and help your
//                     company.
//                   </p>

//                   <ResourcesSearchBar />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Featured Topics */}
//         <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
//           <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
//             <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
//               Featured Topics:
//             </p>

//             {/* {navData.map((nav) => (
//         <Link
//           key={nav.id}
//           href="/contact"
//           className="btn btn-light btn-sm"
//           style={{
//             fontSize: "11px",
//             padding: "4px 12px",
//             borderRadius: "8px",
//           }}
//         >
//           {nav.title}
//         </Link>
//       ))} */}
//             {navData.map((nav) => (
//               <Link
//                 key={nav.id}
//                 href={nav.href}
//                 className="btn btn-light btn-sm"
//                 style={{
//                   fontSize: "11px",
//                   padding: "4px 12px",
//                   borderRadius: "8px",
//                 }}
//               >
//                 {nav.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CounterOne />
//       <div className="container">
//         <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>
//           Search Results for &quot;{query}&quot;
//         </h2>

//         {/* <div className="row" style={{ marginBottom: "30px" }}>
//           {tabs.map((tab) => (
//             <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-20">
//               <Link
//                 href={`?query=${query}&tab=${tab.key}`}
//                 style={{
//                   display: "block",
//                   textAlign: "center",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
//                   color: activeTab === tab.key ? "#fff" : "#333",
//                   fontWeight: "600",
//                 }}
//               >
//                 {tab.label} ({counts[tab.key] || 0})
//               </Link>
//             </div>
//           ))}
//         </div> */}
//         <div
//           className="row"
//           style={{
//             marginBottom: "30px",
//           }}
//         >
//           {tabs.map((tab) => (
//             <div
//               key={tab.key}
//               className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-20 d-flex"
//             >
//               <Link
//                 href={`?query=${query}&tab=${tab.key}`}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textAlign: "center",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
//                   color: activeTab === tab.key ? "#fff" : "#333",
//                   fontWeight: "600",
//                   width: "100%",
//                   height: "100%", // makes all buttons equal height
//                   textDecoration: "none",
//                   lineHeight: "1.4",
//                 }}
//               >
//                 <span>
//                   {tab.label} ({counts[tab.key] || 0})
//                 </span>
//               </Link>
//             </div>
//           ))}
//         </div>
//         {/* RESOURCES */}
//         {activeTab === "resources" && (
//           <>
//             {/* <h4 style={{ marginTop: "30px" }}>Resources</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Resources
//                   </h2>
//                   <a
//                     href="/documents"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Resources →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {data.documents?.length > 0 ? (
//               <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//             ) : (
//               <p>No results found.</p>
//             )}
//           </>
//         )}
//         {activeTab === "results" && data.documents?.length > 0 && (
//           <>
//             {/* <h4 style={{ marginTop: "30px" }}>Resources</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Resources
//                   </h2>
//                   <a
//                     href="/documents"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Resources →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//           </>
//         )}

//         {/* INDUSTRIES */}
//         {activeTab === "industries" && (
//           <>
//             {/* <h4 style={{ marginTop: "30px" }}>Industries</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Industries
//                   </h2>
//                   <a
//                     href="/about#industries"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Industries →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {industriesWithImages.length > 0 ? (
//               <div className="row">
//                 {industriesWithImages.map((industry: any) => (
//                   <IndustryCard key={industry.id} industry={industry} />
//                 ))}
//               </div>
//             ) : (
//               <p>No results found.</p>
//             )}
//           </>
//         )}
//         {activeTab === "results" && industriesWithImages.length > 0 && (
//           <>
//             {/* <h4 style={{ marginTop: "30px" }}>Industries</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Industries
//                   </h2>
//                   <a
//                     href="/about#industries"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Industries →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               {industriesWithImages.map((industry: any) => (
//                 <IndustryCard key={industry.id} industry={industry} />
//               ))}
//             </div>
//           </>
//         )}

//         {/* KNOWLEDGE CENTER */}
//         {activeTab === "knowledge" && (
//           <div className="row">
//             {/* <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Webinars & Videos
//                   </h2>
//                   <a
//                     href="/knowledgecenter"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Webinars & Videos →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {videosAndWebinars.length > 0 ? (
//               videosAndWebinars.map((item: any) => (
//                 <WebinarsAndVideosSearchResults key={item.id} item={item} />
//               ))
//             ) : (
//               <p>No results found.</p>
//             )}
//           </div>
//         )}
//         {activeTab === "results" && videosAndWebinars.length > 0 && (
//           <div className="row">
//             {/* <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Webinars & Videos
//                   </h2>
//                   <a
//                     href="/knowledgecenter"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Webinars & Videos →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {videosAndWebinars.map((item: any) => (
//               <WebinarsAndVideosSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )}

//         {/* CASE STUDIES */}
//         {activeTab === "case-studies" && (
//           <div className="row">
//             {/* <h4 style={{ marginTop: "30px" }}>Case Studies</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Case Studies
//                   </h2>
//                   <a
//                     href="/projects"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Case Studies →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {caseStudies.length > 0 ? (
//               caseStudies.map((item: any) => (
//                 <CaseStudiesSearchResults key={item.id} item={item} />
//               ))
//             ) : (
//               <p>No results found.</p>
//             )}
//           </div>
//         )}
//         {activeTab === "results" && caseStudies.length > 0 && (
//           <div className="row">
//             {/* <h4 style={{ marginTop: "30px" }}>Case Studies</h4> */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-flex justify-content-between align-items-center mb-30">
//                   <h2
//                     style={{
//                       fontSize: "25px",
//                       color: "#292929",
//                       marginBottom: "0",
//                     }}
//                   >
//                     Case Studies
//                   </h2>
//                   <a
//                     href="/projects"
//                     style={{
//                       color: "#292929",
//                       textDecoration: "none",
//                       fontSize: "15px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     View All Case Studies →
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {caseStudies.map((item: any) => (
//               <CaseStudiesSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )}

//         {/* EMPTY STATE for Results tab */}
//         {activeTab === "results" &&
//           !data.documents.length &&
//           !data.industries.length &&
//           !data.knowledgeCenter.length &&
//           !data.caseStudies.length && <p>No results found.</p>}
//       </div>
//     </>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import DocumentCards from "@/components/search-results/documentscards";
// import IndustryCard from "@/components/search-results/industriescards";
// import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// import CaseStudiesSearchResults from "@/components/search-results/case-studies";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";
// const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// export default async function SearchResultsPage({ searchParams }: any) {
//   const query = searchParams?.query || "";
//   const page = searchParams?.page || 1;

//   type TabKey =
//     | "results"
//     | "resources"
//     | "knowledge"
//     | "industries"
//     | "case-studies";

//   const activeTab = (searchParams?.tab as TabKey) || "results";

//   const tabs: { key: TabKey; label: string }[] = [
//     { key: "results", label: "Results" },
//     { key: "resources", label: "Resources" },
//     { key: "knowledge", label: "Knowledge Center" },
//     { key: "industries", label: "Industries" },
//     { key: "case-studies", label: "Case Studies" },
//   ];

//   let data = {
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [],
//     caseStudies: [],
//   };

//   let industryPages: any[] = [];

//   if (query) {
//     try {
//       const [searchRes, indRes] = await Promise.all([
//         fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
//           cache: "no-store",
//         }),
//         fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
//           cache: "no-store",
//         }),
//       ]);

//       data = await searchRes.json();
//       industryPages = await indRes.json();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   data.caseStudies = data.caseStudies || [];

//   const industriesWithImages = data.industries?.map((ind: any) => {
//     const match = industryPages?.find((p: any) => p.slug === ind.slug);

//     return {
//       ...ind,
//       banner_image: match?.banner_image || ind.banner_image,
//       name: match?.banner_title || ind.name,
//     };
//   });

//   const videosAndWebinars = (data.knowledgeCenter || []).filter(
//     (item: any) =>
//       item.category_type?.toLowerCase().includes("video") ||
//       item.category_type?.toLowerCase().includes("webinar"),
//   );

//   const caseStudies = data.caseStudies;

//   const counts: Record<TabKey, number> = {
//     results:
//       (data.documents?.length || 0) +
//       (industriesWithImages?.length || 0) +
//       (videosAndWebinars?.length || 0) +
//       (caseStudies?.length || 0),
//     resources: data.documents?.length || 0,
//     knowledge: videosAndWebinars.length || 0,
//     industries: industriesWithImages?.length || 0,
//     "case-studies": caseStudies?.length || 0,
//   };

//   return (
//     <div className="container">
//       <h2 style={{ marginBottom: "20px" }}>
//         Search Results for &quot;{query}&quot;
//       </h2>

//       <div className="row" style={{ marginBottom: "30px" }}>
//         {tabs.map((tab) => (
//           <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30">
//             <Link
//               href={`?query=${query}&tab=${tab.key}`}
//               style={{
//                 display: "block",
//                 textAlign: "center",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
//                 color: activeTab === tab.key ? "#fff" : "#333",
//                 fontWeight: "600",
//               }}
//             >
//               {tab.label} ({counts[tab.key] || 0})
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* RESOURCES */}
//       {(activeTab === "resources" || activeTab === "results") &&
//         data.documents?.length > 0 && (
//           <>
//             <h4 style={{ marginTop: "30px" }}>Resources</h4>
//             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//           </>
//         )}

//       {/* INDUSTRIES */}
//       {(activeTab === "industries" || activeTab === "results") &&
//         industriesWithImages.length > 0 && (
//           <>
//             <h4 style={{ marginTop: "30px" }}>Industries</h4>
//             <div className="row">
//               {industriesWithImages.map((industry: any) => (
//                 <IndustryCard key={industry.id} industry={industry} />
//               ))}
//             </div>
//           </>
//         )}

//       {/* KNOWLEDGE CENTER */}
//       {(activeTab === "knowledge" || activeTab === "results") &&
//         videosAndWebinars.length > 0 && (
//           <div className="row">
//             <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>

//             {videosAndWebinars.map((item: any) => (
//               <WebinarsAndVideosSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )}

//       {/* CASE STUDIES */}
//       {(activeTab === "case-studies" || activeTab === "results") &&
//         caseStudies.length > 0 && (
//           <div className="row">
//             <h4 style={{ marginTop: "30px" }}>Case Studies</h4>

//             {caseStudies.map((item: any) => (
//               <CaseStudiesSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )}

//       {/* EMPTY STATE */}
//       {!data.documents.length &&
//         !data.industries.length &&
//         !data.knowledgeCenter.length &&
//         !data.caseStudies.length && <p>No results found.</p>}
//     </div>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import DocumentCards from "@/components/search-results/documentscards";
// import IndustryCard from "@/components/search-results/industriescards";
// import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// import CaseStudiesSearchResults from "@/components/search-results/case-studies";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";
// const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// export default async function SearchResultsPage({ searchParams }: any) {
//   const query = searchParams?.query || "";
//   const page = searchParams?.page || 1;

//   type TabKey =
//     | "results"
//     | "resources"
//     | "knowledge"
//     | "industries"
//     | "case-studies";

//   const activeTab = (searchParams?.tab as TabKey) || "results";

//   const tabs: { key: TabKey; label: string }[] = [
//     { key: "results", label: "Results" },
//     { key: "resources", label: "Resources" },
//     { key: "knowledge", label: "Knowledge Center" },
//     { key: "industries", label: "Industries" },
//     { key: "case-studies", label: "Case Studies" },
//   ];

//   let data = {
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [],
//     caseStudies: [],
//   };

//   let industryPages: any[] = [];

//   if (query) {
//     try {
//       const [searchRes, indRes] = await Promise.all([
//         fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
//           cache: "no-store",
//         }),
//         fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
//           cache: "no-store",
//         }),
//       ]);

//       const contentType1 = searchRes.headers.get("content-type") || "";
//       const contentType2 = indRes.headers.get("content-type") || "";

//       if (searchRes.ok && contentType1.includes("application/json")) {
//         data = await searchRes.json();
//       } else {
//         console.error("Search API error:", searchRes.status, searchRes.statusText);
//       }

//       if (indRes.ok && contentType2.includes("application/json")) {
//         industryPages = await indRes.json();
//       } else {
//         console.error("Industries API error:", indRes.status, indRes.statusText);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   data.caseStudies = data.caseStudies || [];

//   const industriesWithImages = data.industries?.map((ind: any) => {
//     const match = industryPages?.find((p: any) => p.slug === ind.slug);

//     return {
//       ...ind,
//       banner_image: match?.banner_image || ind.banner_image,
//       name: match?.banner_title || ind.name,
//     };
//   });

//   const videosAndWebinars = (data.knowledgeCenter || []).filter(
//     (item: any) =>
//       item.category_type?.toLowerCase().includes("video") ||
//       item.category_type?.toLowerCase().includes("webinar"),
//   );

//   const caseStudies = data.caseStudies;

//   const counts: Record<TabKey, number> = {
//     results:
//       (data.documents?.length || 0) +
//       (industriesWithImages?.length || 0) +
//       (videosAndWebinars?.length || 0) +
//       (caseStudies?.length || 0),
//     resources: data.documents?.length || 0,
//     knowledge: videosAndWebinars.length || 0,
//     industries: industriesWithImages?.length || 0,
//     "case-studies": caseStudies?.length || 0,
//   };

//   return (
//     <div className="container">
//       <h2 style={{ marginBottom: "20px" }}>
//         Search Results for &quot;{query}&quot;
//       </h2>

//       <div className="row" style={{ marginBottom: "30px" }}>
//         {tabs.map((tab) => (
//           <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30">
//             <Link
//               href={`?query=${query}&tab=${tab.key}`}
//               style={{
//                 display: "block",
//                 textAlign: "center",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
//                 color: activeTab === tab.key ? "#fff" : "#333",
//                 fontWeight: "600",
//               }}
//             >
//               {tab.label} ({counts[tab.key] || 0})
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* RESOURCES */}
//       {activeTab === "resources" && (
//         <>
//           <h4 style={{ marginTop: "30px" }}>Resources</h4>
//           {data.documents?.length > 0 ? (
//             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//           ) : (
//             <p>No results found.</p>
//           )}
//         </>
//       )}
//       {activeTab === "results" && data.documents?.length > 0 && (
//         <>
//           <h4 style={{ marginTop: "30px" }}>Resources</h4>
//           <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//         </>
//       )}

//       {/* INDUSTRIES */}
//       {activeTab === "industries" && (
//         <>
//           <h4 style={{ marginTop: "30px" }}>Industries</h4>
//           {industriesWithImages.length > 0 ? (
//             <div className="row">
//               {industriesWithImages.map((industry: any) => (
//                 <IndustryCard key={industry.id} industry={industry} />
//               ))}
//             </div>
//           ) : (
//             <p>No results found.</p>
//           )}
//         </>
//       )}
//       {activeTab === "results" && industriesWithImages.length > 0 && (
//         <>
//           <h4 style={{ marginTop: "30px" }}>Industries</h4>
//           <div className="row">
//             {industriesWithImages.map((industry: any) => (
//               <IndustryCard key={industry.id} industry={industry} />
//             ))}
//           </div>
//         </>
//       )}

//       {/* KNOWLEDGE CENTER */}
//       {activeTab === "knowledge" && (
//         <div className="row">
//           <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>
//           {videosAndWebinars.length > 0 ? (
//             videosAndWebinars.map((item: any) => (
//               <WebinarsAndVideosSearchResults key={item.id} item={item} />
//             ))
//           ) : (
//             <p>No results found.</p>
//           )}
//         </div>
//       )}
//       {activeTab === "results" && videosAndWebinars.length > 0 && (
//         <div className="row">
//           <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>
//           {videosAndWebinars.map((item: any) => (
//             <WebinarsAndVideosSearchResults key={item.id} item={item} />
//           ))}
//         </div>
//       )}

//       {/* CASE STUDIES */}
//       {activeTab === "case-studies" && (
//         <div className="row">
//           <h4 style={{ marginTop: "30px" }}>Case Studies</h4>
//           {caseStudies.length > 0 ? (
//             caseStudies.map((item: any) => (
//               <CaseStudiesSearchResults key={item.id} item={item} />
//             ))
//           ) : (
//             <p>No results found.</p>
//           )}
//         </div>
//       )}
//       {activeTab === "results" && caseStudies.length > 0 && (
//         <div className="row">
//           <h4 style={{ marginTop: "30px" }}>Case Studies</h4>
//           {caseStudies.map((item: any) => (
//             <CaseStudiesSearchResults key={item.id} item={item} />
//           ))}
//         </div>
//       )}

//       {/* EMPTY STATE for Results tab */}
//       {activeTab === "results" &&
//         !data.documents.length &&
//         !data.industries.length &&
//         !data.knowledgeCenter.length &&
//         !data.caseStudies.length && <p>No results found.</p>}
//     </div>
//   );
// }

// code commented on dated 29-05-2026

// import Image from "next/image";
import Link from "next/link";
import DocumentCards from "@/components/search-results/documentscards";
import IndustryCard from "@/components/search-results/industriescards";
import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// import CaseStudiesSearchResults from "@/components/search-results/case-studies";
import CaseStudiesSearchResults from "@/components/search-results/search-case-studies";
import ResourcesSearchBar from "@/components/resources/resourcessearchbar";
import CounterOne from "@/components/counter/counter-one";

const API_URL = "https://backend-test-yeyr.onrender.com/api";
const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

const navData = [
  {
    id: "gaskets",
    title: "Gaskets",
    ariaControls: "gaskets",
    href: "/products/non-metallic-gaskets",
  },
  {
    id: "expansion-joints",
    title: "Expansion Joints",
    ariaControls: "expansion-joints",
    href: "/products/expansion-joint",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    ariaControls: "oil-gas",
    href: "/industries/oil-gas",
  },
  {
    id: "data-center",
    title: "Data Center",
    ariaControls: "data-center",
    href: "/industries/data-center",
  },
];

type Product = {
  id: number;
  name: string;
  slug: string;
  link?: string | null;
  banner_image: string;
};

type ProductType = {
  id: number;
  name: string;
  product_slug: string;
  image: string;
};

type Document = {
  id: number;
  product_id: number;
  product_type: string;
  document_type?: string | null;
  language?: string | null;
  title?: string | null;
  file_url?: string | null;
  created_at?: string;
};

type Industry = {
  id: number;
  category_id: number | null;
  subcategory_id: number | null;
  slug: string | null;
  banner_title: string | null;
  banner_subtitle: string | null;
  banner_image: string | null;
  about_title: string | null;
  about_subtitle: string | null;
  about_description: string | null;
  about_image: string | null;
  created_at: string;
  industries?: unknown[];
  name: string;
};

type KnowledgeCenter = {
  id: number;
  title: string | null;
  slug: string | null;
  category_type: string;
  product_type: string | null;
  sidebar_title: string | null;
  sidebar_desc: string | null;
  image: string | null;
  pdf_url: string | null;
  video_url: string | null;
  label: string | null;
  created_at: string;
  video_url_link: string | null;
  video_thumbnail_image: string | null;
};

type SearchResponse = {
  products: Product[];
  types: ProductType[];
  documents: Document[];
  industries: Industry[];
  knowledgeCenter: KnowledgeCenter[];
  caseStudies: KnowledgeCenter[];
};

type SearchParams = {
  query?: string;
  page?: number;
  tab?: string;
};

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;

  type TabKey =
    | "results"
    | "resources"
    | "knowledge"
    | "industries"
    | "case-studies";

  const activeTab = (searchParams?.tab as TabKey) || "results";

  const tabs: { key: TabKey; label: string }[] = [
    { key: "results", label: "Results" },
    { key: "resources", label: "Resources" },
    { key: "knowledge", label: "Knowledge Center" },
    { key: "industries", label: "Industries" },
    { key: "case-studies", label: "Case Studies" },
  ];

  let data: SearchResponse = {
    products: [],
    types: [],
    documents: [],
    industries: [],
    knowledgeCenter: [],
    caseStudies: [],
  };

  if (query) {
    try {
      const searchRes = await fetch(
        `${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`,
        { cache: "no-store" },
      );

      const contentType = searchRes.headers.get("content-type") || "";

      if (searchRes.ok && contentType.includes("application/json")) {
        data = await searchRes.json();
      } else {
        console.error(
          "Search API error:",
          searchRes.status,
          searchRes.statusText,
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  data.caseStudies = data.caseStudies || [];

  const industriesWithImages: Industry[] = data.industries?.map(
    (ind: Industry) => ({
      ...ind,
      // banner_image: ind.banner_image,
      // name: ind.name,
    }),
  );

  const videosAndWebinars: KnowledgeCenter[] = (
    data.knowledgeCenter || []
  ).filter(
    (item: KnowledgeCenter) =>
      item.category_type?.toLowerCase().includes("video") ||
      item.category_type?.toLowerCase().includes("webinar"),
  );

  const caseStudies: KnowledgeCenter[] = data.caseStudies;

  const counts: Record<TabKey, number> = {
    results:
      (data.documents?.length || 0) +
      (industriesWithImages?.length || 0) +
      (videosAndWebinars?.length || 0) +
      (caseStudies?.length || 0),
    resources: data.documents?.length || 0,
    knowledge: videosAndWebinars.length || 0,
    industries: industriesWithImages?.length || 0,
    "case-studies": caseStudies?.length || 0,
  };

  return (
    <>
      <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{
          height: "400px",
          overflow: "visible", // ✅ IMPORTANT
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/Oil_and_gas.png)" }}
        ></div>

        <div className="container" style={{ padding: "0 15px" }}>
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "clamp(22px, 4vw, 35px)",
                      lineHeight: "1.2",
                      color: "#fecb00",
                    }}
                  >
                    Hello, how can we help?
                  </h2>

                  <p style={{ fontSize: "14px", color: "white" }}>
                    Learn more about how Erith can transform and help your
                    company.
                  </p>

                  <ResourcesSearchBar />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
              Featured Topics:
            </p>

            {navData.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                className="btn btn-light btn-sm"
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "8px",
                }}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CounterOne />
      <div className="container">
        <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>
          Search Results for &quot;{query}&quot;
        </h2>

        <div
          className="row"
          style={{
            marginBottom: "30px",
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-20 d-flex"
            >
              <Link
                href={`?query=${query}&tab=${tab.key}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "10px",
                  borderRadius: "8px",
                  background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
                  color: activeTab === tab.key ? "#fff" : "#333",
                  fontWeight: "600",
                  width: "100%",
                  height: "100%",
                  textDecoration: "none",
                  lineHeight: "1.4",
                }}
              >
                <span>
                  {tab.label} ({counts[tab.key] || 0})
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* RESOURCES */}
        {activeTab === "resources" && (
          <>
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
                    Resources
                  </h2>
                  <a
                    href="/documents"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Resources →
                  </a>
                </div>
              </div>
            </div>
            {data.documents?.length > 0 ? (
              <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
            ) : (
              <p>No results found.</p>
            )}
          </>
        )}
        {activeTab === "results" && data.documents?.length > 0 && (
          <>
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
                    Resources
                  </h2>
                  <a
                    href="/documents"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Resources →
                  </a>
                </div>
              </div>
            </div>
            <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
          </>
        )}

        {/* INDUSTRIES */}
        {activeTab === "industries" && (
          <>
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
                    Industries
                  </h2>
                  <a
                    href="/about#industries"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Industries →
                  </a>
                </div>
              </div>
            </div>
            {industriesWithImages.length > 0 ? (
              <div className="row">
                {industriesWithImages.map((industry: Industry) => (
                  <IndustryCard key={industry.id} industry={industry} />
                ))}
              </div>
            ) : (
              <p>No results found.</p>
            )}
          </>
        )}
        {activeTab === "results" && industriesWithImages.length > 0 && (
          <>
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
                    Industries
                  </h2>
                  <a
                    href="/about#industries"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Industries →
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              {industriesWithImages.map((industry: Industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </>
        )}

        {/* KNOWLEDGE CENTER */}
        {activeTab === "knowledge" && (
          <div className="row">
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
                    Webinars & Videos
                  </h2>
                  <a
                    href="/knowledgecenter"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Webinars & Videos →
                  </a>
                </div>
              </div>
            </div>
            {videosAndWebinars.length > 0 ? (
              videosAndWebinars.map((item: KnowledgeCenter) => (
                <WebinarsAndVideosSearchResults key={item.id} item={item} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
        {activeTab === "results" && videosAndWebinars.length > 0 && (
          <div className="row">
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
                    Webinars & Videos
                  </h2>
                  <a
                    href="/knowledgecenter"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Webinars & Videos →
                  </a>
                </div>
              </div>
            </div>
            {videosAndWebinars.map((item: KnowledgeCenter) => (
              <WebinarsAndVideosSearchResults key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* CASE STUDIES */}
        {activeTab === "case-studies" && (
          <div className="row">
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
                    Case Studies
                  </h2>
                  <a
                    href="/projects"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Case Studies →
                  </a>
                </div>
              </div>
            </div>
            {caseStudies.length > 0 ? (
              caseStudies.map((item: KnowledgeCenter) => (
                <CaseStudiesSearchResults key={item.id} item={item} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
        {activeTab === "results" && caseStudies.length > 0 && (
          <div className="row">
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
                    Case Studies
                  </h2>
                  <a
                    href="/projects"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Case Studies →
                  </a>
                </div>
              </div>
            </div>
            {caseStudies.map((item: KnowledgeCenter) => (
              <CaseStudiesSearchResults key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* EMPTY STATE for Results tab */}
        {activeTab === "results" &&
          !data.documents.length &&
          !data.industries.length &&
          !data.knowledgeCenter.length &&
          !data.caseStudies.length && <p>No results found.</p>}
      </div>
    </>
  );
}
