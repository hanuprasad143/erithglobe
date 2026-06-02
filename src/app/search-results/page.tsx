// // import Image from "next/image";
// // import Link from "next/link";
// // import OffcanvasButton from "@/components/header/button/offcanvas-btn";
// // const API_URL = "https://backend-test-yeyr.onrender.com/api";
// // const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// // const getImageUrl = (path?: string) => {
// //   if (!path) return "/placeholder.png";
// //   if (path.startsWith("http")) return path;
// //   return `${IMAGE_BASE}/${path}`;
// // };

// // export default async function SearchResultsPage({ searchParams }: any) {
// //   const query = searchParams?.query || "";
// //   const page = searchParams?.page || 1;

// //   let data = {
// //     products: [],
// //     types: [],
// //     documents: [],
// //     industries: [],
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

// //   /* ================= MERGE INDUSTRIES ================= */
// //   const industriesWithImages = data.industries?.map((ind: any) => {
// //     const match = industryPages?.find((p: any) => p.slug === ind.slug);

// //     return {
// //       ...ind,
// //       banner_image: match?.banner_image || ind.banner_image,
// //       name: match?.banner_title || ind.name, // CMS priority
// //     };
// //   });

// //   return (
// //     <div className="container" style={{ padding: "40px 0" }}>
// //       {/* TITLE */}
// //       <h2 style={{ marginBottom: "20px" }}>Search Results for "{query}"</h2>
// // <div className="col-6 col-md-4 col-lg-2">
// //   <div className="tp-header-contact d-flex align-items-center justify-content-end">
// //     <div className="tp-header-btn d-none d-md-block">
// //       <Link
// //         href="/contact"
// //         style={{
// //           backgroundColor: "#1d3a72",
// //           color: "#fff",
// //           padding: "8px 18px",
// //           borderRadius: "10px",
// //           textDecoration: "none",
// //           fontWeight: "600",
// //           display: "inline-block",
// //           fontSize: "12px",
// //         }}
// //       >
// //         Request a Quote
// //       </Link>
// //     </div>
// //     <div className="tp-header-bar d-xl-none ml-30">
// //       <OffcanvasButton
// //         offcanvas_cls="offcanvas__2"
// //         offcanvas_menu_2={true}
// //       />
// //     </div>
// //   </div>
// // </div>

// //       {/* ================= PRODUCTS ================= */}
// //       {data.products?.length > 0 && (
// //         <>
// //           <h4>Products</h4>
// //           {data.products.map((p: any) => (
// //             <Link
// //               key={p.id}
// //               href={`/products/${p.slug}`}
// //               style={{
// //                 display: "flex",
// //                 gap: "15px",
// //                 padding: "12px 0",
// //                 borderBottom: "1px solid #eee",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   width: "60px",
// //                   height: "60px",
// //                   position: "relative",
// //                 }}
// //               >
// //                 <Image
// //                   src={getImageUrl(p.banner_image)}
// //                   alt={p.name}
// //                   fill
// //                   style={{ objectFit: "contain" }}
// //                 />
// //               </div>

// //               <div>
// //                 <h5 style={{ margin: 0 }}>{p.name}</h5>
// //               </div>
// //             </Link>
// //           ))}
// //         </>
// //       )}

// //       {/* ================= INDUSTRIES (CMS FIXED) ================= */}
// //       <div className="row">
// //         {industriesWithImages.map((industry: any) => (
// //           <div key={industry.id} className="col-lg-4 col-md-6 mb-30">
// //             <div
// //               style={{
// //                 position: "relative",
// //                 borderRadius: "12px",
// //                 overflow: "hidden",
// //                 height: "230px",
// //                 backgroundImage: `url(https://backend-test-yeyr.onrender.com/uploads/${industry.about_image})`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //               }}
// //             >
// //               {/* Overlay */}
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   top: 0,
// //                   left: 0,
// //                   right: 0,
// //                   bottom: 0,
// //                   background: "rgba(0, 0, 0, 0.6)",
// //                   padding: "24px 30px 30px 30px",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   justifyContent: "space-between",
// //                 }}
// //               >
// //                 {/* TOP CONTENT */}
// //                 <div>
// //                   <span
// //                     style={{
// //                       backgroundColor: "#1d3a72",
// //                       color: "#fff",
// //                       padding: "4px 14px",
// //                       borderRadius: "10px",
// //                       fontWeight: "600",
// //                       display: "inline-block",
// //                       fontSize: "13px",
// //                     }}
// //                   >
// //                     Industries
// //                   </span>

// //                   <h3
// //                     style={{
// //                       color: "white",
// //                       fontSize: "15px",
// //                       fontWeight: "400",
// //                       lineHeight: "1.2",
// //                       marginTop: "12px",
// //                       marginBottom: "0",
// //                     }}
// //                   >
// //                     {industry.banner_title || industry.name}
// //                   </h3>
// //                 </div>

// //                 {/* BOTTOM BUTTON */}
// //                 <div>
// //                   <Link
// //                     className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
// //                     href={`/industries/${industry.slug}`}
// //                     style={{
// //                       fontSize: "13px",
// //                       fontWeight: "600",
// //                       padding: "6px 16px",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     Learn more
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {/* ================= TYPES ================= */}
// //       {data.types?.length > 0 && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Types</h4>

// //           {data.types.map((t: any) => (
// //             <Link
// //               key={t.id}
// //               href={`/products/${t.product_slug}?type=${t.id}`}
// //               style={{
// //                 display: "block",
// //                 padding: "10px 0",
// //                 borderBottom: "1px solid #eee",
// //               }}
// //             >
// //               {t.name}
// //             </Link>
// //           ))}
// //         </>
// //       )}

// //       {/* ================= DOCUMENTS ================= */}
// //       {data.documents?.length > 0 && (
// //         <>
// //           <h4 style={{ marginTop: "30px" }}>Documents</h4>

// //           {data.documents.map((d: any) => (
// //             <a
// //               key={d.id}
// //               href={d.file_url}
// //               target="_blank"
// //               style={{
// //                 display: "block",
// //                 padding: "10px 0",
// //                 borderBottom: "1px solid #eee",
// //               }}
// //             >
// //               {d.title}
// //             </a>
// //           ))}
// //         </>
// //       )}

// //       {/* ================= EMPTY STATE ================= */}
// //       {!data.products.length &&
// //         !data.types.length &&
// //         !data.documents.length &&
// //         !data.industries.length && <p>No results found.</p>}
// //     </div>
// //   );
// // }

// // import Image from "next/image";
// // import Link from "next/link";
// // // import OffcanvasButton from "@/components/header/button/offcanvas-btn";
// // import DocumentCards from "@/components/search-results/documentscards";
// // import SearchResultsProducts from "@/components/search-results/productscards";
// // import IndustryCard from "@/components/search-results/industriescards";
// // import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
// // import CaseStudiesSearchResults from "@/components/search-results/case-studies";

// // const API_URL = "https://backend-test-yeyr.onrender.com/api";
// // // const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";
// // const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// // // const getImageUrl = (path?: string) => {
// // //   if (!path) return "/placeholder.png";
// // //   if (path.startsWith("http")) return path;
// // //   return `${IMAGE_BASE}/${path}`;
// // // };

// // export default async function SearchResultsPage({ searchParams }: any) {
// //   const query = searchParams?.query || "";
// //   const page = searchParams?.page || 1;
// //   type TabKey =
// //     | "results"
// //     | "products"
// //     | "resources"
// //     | "knowledge"
// //     | "industries"
// //     | "case-studies";
// //   const activeTab = (searchParams?.tab as TabKey) || "results";
// //   const tabs: { key: TabKey; label: string }[] = [
// //     { key: "results", label: "Results" },
// //     { key: "products", label: "Products" },
// //     { key: "resources", label: "Resources" },
// //     { key: "knowledge", label: "Knowledge Center" },
// //     { key: "industries", label: "Industries" },
// //     { key: "case-studies", label: "Case Studies" },
// //   ];

// //   let data = {
// //     products: [],
// //     types: [],
// //     documents: [],
// //     industries: [],
// //     knowledgeCenter: [],
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

// //   const industriesWithImages = data.industries?.map((ind: any) => {
// //     const match = industryPages?.find((p: any) => p.slug === ind.slug);

// //     return {
// //       ...ind,
// //       banner_image: match?.banner_image || ind.banner_image,
// //       name: match?.banner_title || ind.name,
// //     };
// //   });

// //   const videosAndWebinars = data.knowledgeCenter.filter(
// //     (item: any) =>
// //       item.category_type?.toLowerCase().includes("video") ||
// //       item.category_type?.toLowerCase().includes("webinar"),
// //   );

// //   const caseStudies = data.knowledgeCenter.filter(
// //     (item: any) =>
// //       item.category_type?.toLowerCase().includes("success") ||
// //       item.category_type?.toLowerCase().includes("case"),
// //   );

// //   const counts: Record<TabKey, number> = {
// //     results:
// //       (data.products?.length || 0) +
// //       (data.types?.length || 0) +
// //       (data.documents?.length || 0) +
// //       (data.industries?.length || 0) +
// //       (data.knowledgeCenter?.length || 0),

// //     products: data.products?.length || 0,
// //     resources: data.documents?.length || 0,

// //     // ✅ ONLY videos + webinars
// //     knowledge: videosAndWebinars.length || 0,

// //     industries: data.industries?.length || 0,

// //     // ✅ ONLY success stories
// //     "case-studies": caseStudies.length || 0,
// //   };

// //   return (
// //     <div className="container">
// //       <h2 style={{ marginBottom: "20px" }}>Search Results for "{query}"</h2>
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

// //       {/* ================= PRODUCTS ================= */}

// //       {(activeTab === "products" || activeTab === "results") &&
// //         data.products?.length > 0 && (
// //           <>
// //             <h4>Products</h4>

// //             <div className="row">
// //               {data.products.map((p: any) => (
// //                 <div key={p.id} className="col-lg-3 col-md-6">
// //                   <SearchResultsProducts item={p} />
// //                 </div>
// //               ))}
// //             </div>
// //           </>
// //         )}

// //       {/* ================= Resources ================= */}
// //       {(activeTab === "resources" || activeTab === "results") &&
// //         data.documents?.length > 0 && (
// //           <>
// //             <h4 style={{ marginTop: "30px" }}>Resources</h4>

// //             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
// //           </>
// //         )}

// //       {/* ================= INDUSTRIES ================= */}
// //       {/* {(activeTab === "industries" || activeTab === "results") && (
// //         <div className="row">
// //           <h4 style={{ marginTop: "30px" }}>Industries</h4>
// //           {industriesWithImages.map((industry: any) => (
// //             <IndustryCard key={industry.id} industry={industry} />
// //           ))}
// //         </div>
// //       )} */}

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

// //       {(activeTab === "knowledge" || activeTab === "results") &&
// //         videosAndWebinars.length > 0 && (
// //           <div className="row">
// //             <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4>

// //             {videosAndWebinars.map((item: any) => (
// //               <WebinarsAndVideosSearchResults key={item.id} item={item} />
// //             ))}
// //           </div>
// //         )}

// //       {(activeTab === "case-studies" || activeTab === "results") &&
// //         caseStudies.length > 0 && (
// //           <div className="row">
// //             <h4 style={{ marginTop: "30px" }}>Case Studies</h4>

// //             {caseStudies.map((item: any) => (
// //               <CaseStudiesSearchResults key={item.id} item={item} />
// //             ))}
// //           </div>
// //         )}

// //       {!data.products.length &&
// //         !data.types.length &&
// //         !data.documents.length &&
// //         !data.industries.length && <p>No results found.</p>}
// //     </div>
// //   );
// // }

// import Image from "next/image";
// import Link from "next/link";
// import DocumentCards from "@/components/search-results/documentscards";
// import SearchResultsProducts from "@/components/search-results/productscards";
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
//     | "products"
//     | "resources"
//     | "knowledge"
//     | "industries"
//     | "case-studies";

//   const activeTab = (searchParams?.tab as TabKey) || "results";

//   const tabs: { key: TabKey; label: string }[] = [
//     { key: "results", label: "Results" },
//     { key: "products", label: "Products" },
//     { key: "resources", label: "Resources" },
//     { key: "knowledge", label: "Knowledge Center" },
//     { key: "industries", label: "Industries" },
//     { key: "case-studies", label: "Case Studies" },
//   ];

//   let data = {
//     products: [],
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [],
//     caseStudies: [],
//   };

//   let industryPages: any[] = [];

//   // if (query) {
//   //   try {
//   //     const [searchRes, indRes] = await Promise.all([
//   //       fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
//   //         cache: "no-store",
//   //       }),
//   //       fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
//   //         cache: "no-store",
//   //       }),
//   //     ]);

//   //     data = await searchRes.json();
//   //     industryPages = await indRes.json();
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }

//   if (query) {
//     try {
//       const [searchRes, indRes] = await Promise.all([
//         fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
//           cache: "no-store",
//         }),

//         /*
// 🚨🚨🚨 CRITICAL - DO NOT DELETE 🚨🚨🚨

// INDUSTRIES API URL:
// ${API_URL}/industries-pages?q=${encodeURIComponent(query)}

// FETCH CALL:
// fetch(`${API_URL}/industries-pages?q=${encodeURIComponent(query)}`, {
//   cache: "no-store",
// });
// */
//         fetch(`${API_URL}/industries?q=${encodeURIComponent(query)}`, {
//           cache: "no-store",
//         }),
//       ]);

//       // ✅ SAFE JSON PARSE FIX (NO FUNCTIONAL CHANGE)
//       const searchText = await searchRes.text();
//       const indText = await indRes.text();

//       try {
//         data = JSON.parse(searchText);
//       } catch (e) {
//         console.error("❌ Search API not returning JSON:", searchText);
//       }

//       try {
//         industryPages = JSON.parse(indText);
//       } catch (e) {
//         console.error("❌ Industries API not returning JSON:", indText);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   // FIX 1: safe fallback (IMPORTANT)
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
//       (data.products?.length || 0) +
//       // (data.types?.length || 0) +
//       (data.documents?.length || 0) +
//       (data.industries?.length || 0) +
//       (data.knowledgeCenter?.length || 0) +
//       (data.caseStudies?.length || 0),

//     products: data.products?.length || 0,
//     resources: data.documents?.length || 0,
//     knowledge: videosAndWebinars.length || 0,
//     industries: data.industries?.length || 0,

//     // FIX 2: safe + correct count
//     "case-studies": data.caseStudies?.length || 0,
//   };

//   return (
//     <div className="container">
//       <h2 style={{ marginBottom: "20px" }}>
//         Search Results for &quot;{query}&quot;
//       </h2>

//       {/* <div className="row" style={{ marginBottom: "30px" }}>
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
//       </div> */}

//       <div className="row" style={{ marginBottom: "30px" }}>
//         {tabs.map((tab) => (
//           <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30 d-flex">
//             <Link
//               href={`?query=${query}&tab=${tab.key}`}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 background: activeTab === tab.key ? "#1d3a72" : "#f5f5f5",
//                 color: activeTab === tab.key ? "#fff" : "#333",
//                 fontWeight: "600",
//                 width: "100%",
//                 height: "100%",
//                 lineHeight: "1.4",
//               }}
//             >
//               {tab.label} ({counts[tab.key] || 0})
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* PRODUCTS */}
//       {/* {(activeTab === "products" || activeTab === "results") &&
//         data.products?.length > 0 && (
//           <>

//               <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                 Products
//                 </h2>
//                 <a
//                   href="/allproducts"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Products →
//                 </a>
//               </div>
//             </div>
//           </div>
//             <div className="row">
//               {data.products.map((p: any) => (
//                 <div key={p.id} className="col-lg-3 col-md-6">
//                   <SearchResultsProducts item={p} />
//                 </div>
//               ))}
//             </div>
//           </>
//         )} */}

//       {activeTab === "products" && (
//         <div className="row">
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Products
//                 </h2>
//                 <a
//                   href="/allproducts"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Products →
//                 </a>
//               </div>
//             </div>
//           </div>

//           {data.products && data.products.length > 0 ? (
//             <div className="row">
//               {data.products.map((p: any) => (
//                 <div key={p.id} className="col-lg-3 col-md-6">
//                   <SearchResultsProducts item={p} />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No results found.</p>
//           )}
//         </div>
//       )}

//       {activeTab === "results" && data.products?.length > 0 && (
//         <div className="row">
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Products
//                 </h2>
//                 <a
//                   href="/allproducts"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Products →
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* <div className="row"> */}
//           {data.products.map((p: any) => (
//             <div key={p.id} className="col-lg-3 col-md-6">
//               <SearchResultsProducts item={p} />
//             </div>
//           ))}
//           {/* </div> */}
//         </div>
//       )}

//       {/* RESOURCES */}
//       {/* {(activeTab === "resources" || activeTab === "results") &&
//         data.documents?.length > 0 && (
//           <>

//               <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                 Resources
//                 </h2>
//                 <a
//                   href="/documents"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Resources →
//                 </a>
//               </div>
//             </div>
//           </div>
//             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//           </>
//         )} */}
//       {activeTab === "resources" && (
//         <>
//           {/* <h4 style={{ marginTop: "30px" }}>Resources</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Resources
//                 </h2>
//                 <a
//                   href="/documents"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Resources →
//                 </a>
//               </div>
//             </div>
//           </div>
//           {data.documents?.length > 0 ? (
//             <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//           ) : (
//             <p>No results found.</p>
//           )}
//         </>
//       )}
//       {activeTab === "results" && data.documents?.length > 0 && (
//         <>
//           {/* <h4 style={{ marginTop: "30px" }}>Resources</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Resources
//                 </h2>
//                 <a
//                   href="/documents"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Resources →
//                 </a>
//               </div>
//             </div>
//           </div>
//           <DocumentCards documents={data.documents} FILE_BASE={FILE_BASE} />
//         </>
//       )}

//       {/* INDUSTRIES */}
//       {/* {(activeTab === "industries" || activeTab === "results") &&
//         industriesWithImages.length > 0 && (
//           <>

//                  <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                 Industries
//                 </h2>
//                 <a
//                   href="/about#industries"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Industries →
//                 </a>
//               </div>
//             </div>
//           </div>
//             <div className="row">
//               {industriesWithImages.map((industry: any) => (
//                 <IndustryCard key={industry.id} industry={industry} />
//               ))}
//             </div>
//           </>
//         )} */}

//       {activeTab === "industries" && (
//         <>
//           {/* <h4 style={{ marginTop: "30px" }}>Industries</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Industries
//                 </h2>
//                 <a
//                   href="/about#industries"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Industries →
//                 </a>
//               </div>
//             </div>
//           </div>
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
//           {/* <h4 style={{ marginTop: "30px" }}>Industries</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Industries
//                 </h2>
//                 <a
//                   href="/about#industries"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Industries →
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {industriesWithImages.map((industry: any) => (
//               <IndustryCard key={industry.id} industry={industry} />
//             ))}
//           </div>
//         </>
//       )}

//       {/* KNOWLEDGE CENTER */}
//       {/* {(activeTab === "knowledge" || activeTab === "results") &&
//         videosAndWebinars.length > 0 && (
//           <div className="row">

//                 <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Webinars & Videos
//                 </h2>
//                 <a
//                   href="/knowledgecenter"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Webinars & Videos →
//                 </a>
//               </div>
//             </div>
//           </div>

//             {videosAndWebinars.map((item: any) => (
//               <WebinarsAndVideosSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )} */}

//       {activeTab === "knowledge" && (
//         <div className="row">
//           {/* <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Webinars & Videos
//                 </h2>
//                 <a
//                   href="/knowledgecenter"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Webinars & Videos →
//                 </a>
//               </div>
//             </div>
//           </div>
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
//           {/* <h4 style={{ marginTop: "30px" }}>Webinars & Videos</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Webinars & Videos
//                 </h2>
//                 <a
//                   href="/knowledgecenter"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Webinars & Videos →
//                 </a>
//               </div>
//             </div>
//           </div>
//           {videosAndWebinars.map((item: any) => (
//             <WebinarsAndVideosSearchResults key={item.id} item={item} />
//           ))}
//         </div>
//       )}

//       {/* CASE STUDIES (FIXED ONLY LOGIC) */}
//       {/* {(activeTab === "case-studies" || activeTab === "results") &&
//         caseStudies.length > 0 && (
//           <div className="row">

//               <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Case Studies
//                 </h2>
//                 <a
//                   href="/projects"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Case Studies →
//                 </a>
//               </div>
//             </div>
//           </div>

//             {caseStudies.map((item: any) => (
//               <CaseStudiesSearchResults key={item.id} item={item} />
//             ))}
//           </div>
//         )} */}

//       {activeTab === "case-studies" && (
//         <div className="row">
//           {/* <h4 style={{ marginTop: "30px" }}>Case Studies</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Case Studies
//                 </h2>
//                 <a
//                   href="/projects"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Case Studies →
//                 </a>
//               </div>
//             </div>
//           </div>
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
//           {/* <h4 style={{ marginTop: "30px" }}>Case Studies</h4> */}
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center mb-30">
//                 <h2
//                   style={{
//                     fontSize: "25px",
//                     color: "#292929",
//                     marginBottom: "0",
//                   }}
//                 >
//                   Case Studies
//                 </h2>
//                 <a
//                   href="/projects"
//                   style={{
//                     color: "#292929",
//                     textDecoration: "none",
//                     fontSize: "15px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   View All Case Studies →
//                 </a>
//               </div>
//             </div>
//           </div>
//           {caseStudies.map((item: any) => (
//             <CaseStudiesSearchResults key={item.id} item={item} />
//           ))}
//         </div>
//       )}

//       {/* EMPTY STATE */}
//       {!data.products.length &&
//         !data.types.length &&
//         !data.documents.length &&
//         !data.industries.length &&
//         !data.knowledgeCenter.length &&
//         !data.caseStudies.length && <p>No results found.</p>}
//     </div>
//   );
// }

// [all commented-out code blocks preserved as-is — omitted here for brevity]

import Link from "next/link";
import DocumentCards from "@/components/search-results/documentscards";
import SearchResultsProducts from "@/components/search-results/productscards";
import IndustryCard from "@/components/search-results/industriescards";
import WebinarsAndVideosSearchResults from "@/components/search-results/webinarsandvideosresults";
import CaseStudiesSearchResults from "@/components/search-results/case-studies";

const API_URL = "https://backend-test-yeyr.onrender.com/api";
const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

type Product = {
  id: number;
  title: string;
  category: string;
  subcategory_id: number;
  name: string;
  banner_image: string;
  slug: string;
  serial_number: string;
  product_category: string;
  link?: string;
  img: string;
  icon?: "bulb" | "video" | "play" | "book" | "file";
  price?: number;
  tag?: string;
  image?: string;
  stock?: number;
  short_desc?: string;
  description?: string;
  additional_info?: {
    bookType?: string;
    publisher?: string;
    language?: string;
    paperback?: number;
    isbn?: string;
    published?: string;
  };
  date?: string;
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

type IndustryPage = {
  slug: string;
  banner_image: string;
  banner_title: string;
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
    | "products"
    | "resources"
    | "knowledge"
    | "industries"
    | "case-studies";

  const activeTab = (searchParams?.tab as TabKey) || "results";

  const tabs: { key: TabKey; label: string }[] = [
    { key: "results", label: "Results" },
    { key: "products", label: "Products" },
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

  let industryPages: IndustryPage[] = [];

  if (query) {
    try {
      const [searchRes, indRes] = await Promise.all([
        fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&page=${page}`, {
          cache: "no-store",
        }),
        fetch(`${API_URL}/industries?q=${encodeURIComponent(query)}`, {
          cache: "no-store",
        }),
      ]);

      const searchText = await searchRes.text();
      const indText = await indRes.text();

      try {
        data = JSON.parse(searchText);
      } catch (e) {
        console.error("❌ Search API not returning JSON:", searchText);
      }

      try {
        industryPages = JSON.parse(indText);
      } catch (e) {
        console.error("❌ Industries API not returning JSON:", indText);
      }
    } catch (err) {
      console.log(err);
    }
  }

  data.caseStudies = data.caseStudies || [];

  const industriesWithImages: Industry[] = data.industries?.map(
    (ind: Industry) => {
      const match = industryPages?.find(
        (p: IndustryPage) => p.slug === ind.slug,
      );
      return {
        ...ind,
        banner_image: match?.banner_image || ind.banner_image,
        name: match?.banner_title || ind.name,
      };
    },
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
      (data.products?.length || 0) +
      (data.documents?.length || 0) +
      (data.industries?.length || 0) +
      (data.knowledgeCenter?.length || 0) +
      (data.caseStudies?.length || 0),
    products: data.products?.length || 0,
    resources: data.documents?.length || 0,
    knowledge: videosAndWebinars.length || 0,
    industries: data.industries?.length || 0,
    "case-studies": data.caseStudies?.length || 0,
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>
        Search Results for &quot;{query}&quot;
      </h2>

      <div className="row" style={{ marginBottom: "30px" }}>
        {tabs.map((tab) => (
          <div key={tab.key} className="col-6 col-md-4 col-lg-2 mb-30 d-flex">
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
                lineHeight: "1.4",
              }}
            >
              {tab.label} ({counts[tab.key] || 0})
            </Link>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      {activeTab === "products" && (
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
                  Products
                </h2>
                <a
                  href="/allproducts"
                  style={{
                    color: "#292929",
                    textDecoration: "none",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  View All Products →
                </a>
              </div>
            </div>
          </div>

          {data.products && data.products.length > 0 ? (
            <div className="row">
              {data.products.map((p: Product) => (
                <div key={p.id} className="col-lg-3 col-md-6">
                  <SearchResultsProducts item={p} />
                </div>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}

      {activeTab === "results" && data.products?.length > 0 && (
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
                  Products
                </h2>
                <a
                  href="/allproducts"
                  style={{
                    color: "#292929",
                    textDecoration: "none",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  View All Products →
                </a>
              </div>
            </div>
          </div>

          {data.products.map((p: Product) => (
            <div key={p.id} className="col-lg-3 col-md-6">
              <SearchResultsProducts item={p} />
            </div>
          ))}
        </div>
      )}

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

      {/* EMPTY STATE */}
      {!data.products.length &&
        !data.types.length &&
        !data.documents.length &&
        !data.industries.length &&
        !data.knowledgeCenter.length &&
        !data.caseStudies.length && <p>No results found.</p>}
    </div>
  );
}
