// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
// import NavMenus from "./navbar/nav-menus";
// // import logo from "@/assets/img/logo/erith-white.png";
// import HeaderTopArea from "./header-top/header-top-area";
// import logo_black from "@/assets/img/logo/erith_global.png";
// import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
// // import SearchButton from "./button/search-button";
// import OffcanvasButton from "./button/offcanvas-btn";

// export default function HeaderOne() {
//   return (
//     <>
//       <header className="header-area tp-header-white p-relative">
//         {/* header top start*/}
//         <HeaderTopArea />
//         {/* header top end */}

//         <HeaderStickyWrapper>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
//                 <div className=" tp-header-logo">
//                   <Link href="/">
//                     <Image
//                       className="logo-1"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     />
//                     {/* <Image
//                       className="logo-2"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     /> */}
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xxl-8 col-xl-7 d-none d-xl-block ml-3">
//                 <div className="d-flex align-items-center">
//                   {/* nav menus start */}
//                   <div className="main-menu" style={{ marginLeft: "-20px" }}>
//                     <NavMenus />
//                   </div>
//                   {/* nav menus end */}

//                   {/* Search bar - placed after nav inside wider column */}
//                   <div
//                     style={{
//                       backgroundColor: "#f5f5f5",
//                       borderRadius: "10px",
//                       // padding: "2px 12px",
//                       // gap: "3px",
//                       paddingLeft: "15px",
//                       width: "300px",
//                       border: "1px solid #e0e0e0",
//                       display: "flex",
//                       alignItems: "center",
//                       marginLeft: "10px",
//                       flexShrink: 0,
//                       height: "43px",
//                     }}
//                   >
//                     <span style={{ fontSize: "13px", display: "flex" }}>
//                       <SearchSvg />
//                     </span>
//                     <input
//                       type="text"
//                       placeholder="Search"
//                       style={{
//                         border: "none",
//                         background: "transparent",
//                         outline: "none",
//                         fontSize: "13px",
//                         color: "#333",
//                         width: "100%",
//                         minWidth: 0,
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-contact d-flex align-items-center justify-content-end">
//                   {/* Search bar */}
//                   {/* <div className=" mr-3">
//                     <SearchButton icon={<SearchSvg />} />
//                   </div> */}

//                   {/* Contact Us button */}
//                   <div className="tp-header-btn d-none d-md-block ">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff", // black text
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       Request a Quote
//                     </Link>
//                   </div>

//                   {/* Mobile menu button */}
//                   <div className="tp-header-bar d-xl-none ml-30">
//                     <OffcanvasButton
//                       offcanvas_cls="offcanvas__2"
//                       offcanvas_menu_2={true}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </HeaderStickyWrapper>
//       </header>

//       {/* mobile offcanvas */}
//       <div id="offcanvas-sidebar" />
//       {/* mobile offcanvas */}

//       {/* cart mini sidebar */}
//       <div id="cart-mini-sidebar"></div>
//       {/* cart mini sidebar */}
//     </>
//   );
// }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
// import NavMenus from "./navbar/nav-menus";
// import HeaderTopArea from "./header-top/header-top-area";
// import logo_black from "@/assets/img/logo/erith_global.png";
// import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
// import OffcanvasButton from "./button/offcanvas-btn";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";

// type SearchResult = {
//   id: number;
//   name: string;
//   slug: string;
//   link?: string | null;
//   image:string;
// };

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // Debounced search
//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults([]);
//       setOpen(false);
//       return;
//     }

//     const fetchResults = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${API_URL}/search?q=${encodeURIComponent(query)}`
//         );
//         const data = await res.json();
//         setResults(data);
//         setOpen(true);
//       } catch {
//         setResults([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchResults();
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [query]);

//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "relative",
//         width: "300px",
//         marginLeft: "10px",
//         flexShrink: 0,
//       }}
//     >
//       {/* Input */}
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           borderRadius: "10px",
//           paddingLeft: "15px",
//           width: "100%",
//           border: "1px solid #e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           height: "43px",
//         }}
//       >
//         <span style={{ fontSize: "13px", display: "flex" }}>
//           <SearchSvg />
//         </span>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{
//             border: "none",
//             background: "transparent",
//             outline: "none",
//             fontSize: "13px",
//             color: "#333",
//             width: "100%",
//             minWidth: 0,
//             paddingLeft: "8px",
//           }}
//         />
//         {loading && (
//           <span
//             style={{ fontSize: "11px", color: "#999", paddingRight: "10px" }}
//           >
//             ...
//           </span>
//         )}
//       </div>

//       {/* Dropdown Results */}
//       {open && (
//         <div
//           style={{
//             position: "absolute",
//             top: "48px",
//             left: 0,
//             width: "100%",
//             backgroundColor: "#fff",
//             border: "1px solid #e0e0e0",
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             zIndex: 9999,
//             maxHeight: "300px",
//             overflowY: "auto",
//           }}
//         >
//           {results.length === 0 ? (
//             <div
//               style={{ padding: "12px 15px", fontSize: "13px", color: "#999" }}
//             >
//               No products found
//             </div>
//           ) : (
//             results.map((product) => (
//               <Link
//                 key={product.id}
//                 href={product.link ? product.link : `/products/${product.slug}`}
//                 target={product.link?.startsWith("http") ? "_blank" : "_self"}
//                 rel={
//                   product.link?.startsWith("http")
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 onClick={() => {
//                   setOpen(false);
//                   setQuery("");
//                 }}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   padding: "9px 15px",
//                   fontSize: "13px",
//                   color: "#292929",
//                   textDecoration: "none",
//                   borderBottom: "1px solid #f9f9f9",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = "#f5f5f5";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = "#fff";
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "11px",
//                     color: "#1d3a72",
//                     fontWeight: "600",
//                   }}
//                 >
//                   P
//                 </span>
//                 {product.image}
//               </Link>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function HeaderOne() {
//   return (
//     <>
//       <header className="header-area tp-header-white p-relative">
//         <HeaderTopArea />
//         <HeaderStickyWrapper>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-logo">
//                   <Link href="/">
//                     <Image
//                       className="logo-1"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xxl-8 col-xl-7 d-none d-xl-block ml-3">
//                 <div className="d-flex align-items-center">
//                   <div className="main-menu" style={{ marginLeft: "-20px" }}>
//                     <NavMenus />
//                   </div>
//                   <SearchBar />
//                 </div>
//               </div>
//               <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-contact d-flex align-items-center justify-content-end">
//                   <div className="tp-header-btn d-none d-md-block">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       Request a Quote
//                     </Link>
//                   </div>
//                   <div className="tp-header-bar d-xl-none ml-30">
//                     <OffcanvasButton
//                       offcanvas_cls="offcanvas__2"
//                       offcanvas_menu_2={true}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </HeaderStickyWrapper>
//       </header>
//       <div id="offcanvas-sidebar" />
//       <div id="cart-mini-sidebar"></div>
//     </>
//   );
// }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
// import NavMenus from "./navbar/nav-menus";
// import HeaderTopArea from "./header-top/header-top-area";
// import logo_black from "@/assets/img/logo/erith_global.png";
// import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
// import OffcanvasButton from "./button/offcanvas-btn";
// import { DocumentList } from "../document-list/documentlist";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";

// /* ✅ TYPES */
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

// type SearchResponse = {
//   products: Product[];
//   types: ProductType[];
//   documents: Document[];
// };

// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// const getImageUrl = (path?: string) => {
//   if (!path) return "/placeholder.png";

//   if (path.startsWith("http")) return path;

//   return `${IMAGE_BASE}/${path.replace(/^\/+/, "")}`;
// };

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResponse>({
//     products: [],
//     types: [],
//     documents: [],
//   });
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // Debounced search
//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults({ products: [], types: [], documents: [] });
//       setOpen(false);
//       return;
//     }

//     const fetchResults = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${API_URL}/search?q=${encodeURIComponent(query)}`,
//         );
//         const data: SearchResponse = await res.json();
//         setResults(data);
//         setOpen(true);
//       } catch {
//         setResults({ products: [], types: [], documents: [] });
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(fetchResults, 300);
//     return () => clearTimeout(timer);
//   }, [query]);

//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "relative",
//         width: "300px",
//         marginLeft: "10px",
//         flexShrink: 0,
//       }}
//     >
//       {/* Input */}
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           borderRadius: "10px",
//           paddingLeft: "15px",
//           width: "100%",
//           border: "1px solid #e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           height: "43px",
//         }}
//       >
//         <span style={{ fontSize: "13px", display: "flex" }}>
//           <SearchSvg />
//         </span>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{
//             border: "none",
//             background: "transparent",
//             outline: "none",
//             fontSize: "13px",
//             color: "#333",
//             width: "100%",
//             minWidth: 0,
//             paddingLeft: "8px",
//           }}
//         />
//         {loading && (
//           <span
//             style={{ fontSize: "11px", color: "#999", paddingRight: "10px" }}
//           >
//             ...
//           </span>
//         )}
//       </div>

//       {/* Dropdown */}
//       {open && (
//         <div
//           className="search-dropdown"
//           style={{
//             position: "absolute",
//             top: "48px",
//             left: 0,
//             width: "100%",
//             maxWidth: "720px",
//             backgroundColor: "#fff",
//             border: "1px solid #e0e0e0",
//             borderRadius: "12px",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
//             zIndex: 9999,
//             maxHeight: "420px",
//             overflowY: "auto",
//           }}
//         >
//           {/* PRODUCTS */}
//           <div className="section">
//             <h4 className="section-title">Products</h4>

//             {results.products.slice(0, 2).map((product) => (
//               <div key={product.id} className="search-row">
//                 {/* LEFT */}
//                 <div className="left">
//                   <div className="img">
//                     <Image
//                       src={getImageUrl(product.banner_image)}
//                       alt={product.name}
//                       fill
//                     />
//                   </div>

//                   <div>
//                     <p className="title">{product.name}</p>
//                     <span className="subtitle">Product</span>
//                   </div>
//                 </div>

//                 {/* RIGHT */}
//                 <div className="right">
//                   <Link href={`/contact`} className="btn primary">
//                     Inquire
//                   </Link>
//                   <Link
//                     href={`/products/${product.slug}`}
//                     className="btn outline"
//                   >
//                     Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TYPES */}
//           {/* <div className="section">
//             <h4 className="section-title">Types</h4>

//             {results.types.slice(0, 2).map((type) => (
//               <div key={type.id} className="search-row">

//                 <div className="left">
//                   <div className="img">
//                     <Image
//                       src={getImageUrl(type.image)}
//                       alt={type.name}
//                       fill
//                     />
//                   </div>

//                   <div>
//                     <p className="title">{type.name}</p>
//                     <span className="subtitle">Type</span>
//                   </div>
//                 </div>

//                 <div className="right">
//                   <Link
//                     href={`/products/${type.product_slug}?type=${type.id}`}
//                     className="btn primary"
//                     onClick={() => {
//                       setOpen(false);
//                       setQuery("");
//                     }}
//                   >
//                     View
//                   </Link>

//                   <Link
//                     href={`/products/${type.product_slug}`}
//                     className="btn outline"
//                   >
//                     Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div> */}

//           {/* DOCUMENTS */}
//           {/* <div className="section">
//             <h4 className="section-title">Documents</h4>

//             {results.documents.slice(0, 2).map((doc) => (
//               <div key={doc.id} className="search-row">
//                 <div className="left">
//                   <span className="icon">📄</span>
//                   <div>
//                     <p className="title">{doc.title}</p>
//                     <span className="subtitle">PDF</span>
//                   </div>
//                 </div>

//                 <div className="right">
//                   <a
//                     href={doc.file_url}
//                     target="_blank"
//                     className="btn outline"
//                   >
//                     Download
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div> */}

//           {results.documents.length > 0 && (
//             <DocumentList documents={results.documents} />
//           )}

//           <div className="section">
//             <h4 className="section-title">Resources</h4>

//             {results.types.slice(0, 2).map((type) => (
//               <div key={type.id} className="search-row">
//                 <div className="left">
//                   <span className="icon">🌐</span>
//                   <div>
//                     <p className="title">{type.name}</p>
//                     <span className="subtitle">Category</span>
//                   </div>
//                 </div>

//                 <div className="right">
//                   <Link
//                     href={`/products/${type.product_slug}`}
//                     className="btn outline"
//                   >
//                     Discover
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <div className="see-all">
//             <Link href={`/search?q=${query}`}>See All Results →</Link>
//           </div> */}
//           <Link
//             href={`/search-results?query=${encodeURIComponent(query)}&page=1`}
//           >
//             See All Results →
//           </Link>

//           {/* EMPTY */}
//           {results.products.length === 0 &&
//             results.types.length === 0 &&
//             results.documents.length === 0 && (
//               <div
//                 style={{
//                   padding: "12px 15px",
//                   fontSize: "13px",
//                   color: "#999",
//                 }}
//               >
//                 No results found
//               </div>
//             )}
//         </div>
//       )}
//     </div>
//   );
// }

// /* HEADER (UNCHANGED) */
// export default function HeaderOne() {
//   return (
//     <>
//       <header className="header-area tp-header-white p-relative">
//         <HeaderTopArea />
//         <HeaderStickyWrapper>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-logo">
//                   <Link href="/">
//                     <Image
//                       className="logo-1"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     />
//                   </Link>
//                 </div>
//               </div>

//               <div className="col-xxl-8 col-xl-7 d-none d-xl-block ml-3">
//                 <div className="d-flex align-items-center">
//                   <div className="main-menu" style={{ marginLeft: "-20px" }}>
//                     <NavMenus />
//                   </div>
//                   <SearchBar />
//                 </div>
//               </div>

//               <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-contact d-flex align-items-center justify-content-end">
//                   <div className="tp-header-btn d-none d-md-block">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       Request a Quote
//                     </Link>
//                   </div>

//                   <div className="tp-header-bar d-xl-none ml-30">
//                     <OffcanvasButton
//                       offcanvas_cls="offcanvas__2"
//                       offcanvas_menu_2={true}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </HeaderStickyWrapper>
//       </header>

//       <div id="offcanvas-sidebar" />
//       <div id="cart-mini-sidebar"></div>
//     </>
//   );
// }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
// import NavMenus from "./navbar/nav-menus";
// import HeaderTopArea from "./header-top/header-top-area";
// import logo_black from "@/assets/img/logo/erith_global.png";
// import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
// import OffcanvasButton from "./button/offcanvas-btn";
// import { DocumentList } from "../document-list/documentlist";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";

// /* ✅ TYPES */
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
//   category_id: number | null;
//   subcategory_id: number | null;
//   slug: string | null;

//   banner_title: string | null;
//   banner_subtitle: string | null;
//   banner_image: string | null;

//   about_title: string | null;
//   about_subtitle: string | null;
//   about_description: string | null;
//   about_image: string | null;

//   created_at: string;
// };

// type knowledgeCenter = {
//   id: number;
//   item: string;
//   title: string;
//   category_type: string; // e.g. "Videos and Webinars"
//   product_type?: string | null;
//   sidebar_title?: string | null;
//   sidebar_desc?: string | null;
//   image?: string | null;
//   pdf_url?: string | null;
//   video_url?: string | null;
//   video_url_link?: string | null;
//   video_thumbnail_image?: string | null;
//   label?: string | null;
//   created_at?: string;
//   // frontend extras
//   link?: string;
//   source?: string;
// };

// type SearchResponse = {
//   products: Product[];
//   types: ProductType[];
//   documents: Document[];
//   industries: Industry[];
//   knowledgeCenter: knowledgeCenter[];
//   caseStudies: knowledgeCenter[]; //20-04-2026
// };

// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// const getImageUrl = (path?: string) => {
//   if (!path) return "/placeholder.png";
//   if (path.startsWith("http")) return path;
//   return `${IMAGE_BASE}/${path.replace(/^\/+/, "")}`;
// };

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResponse>({
//     products: [],
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [], // ✅ NEW
//     caseStudies: [],
//   });
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // Debounced search
//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults({
//         products: [],
//         types: [],
//         documents: [],
//         industries: [],
//         knowledgeCenter: [],
//         caseStudies: [],
//       });
//       setOpen(false);
//       return;
//     }

//     const fetchResults = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${API_URL}/search?q=${encodeURIComponent(query)}`,
//         );
//         const data: SearchResponse = await res.json();
//         setResults({
//           products: data.products ?? [],
//           types: data.types ?? [],
//           documents: data.documents ?? [],
//           industries: data.industries ?? [],
//           // knowledgeCenter: data.knowledgeCenter ?? [],
//           knowledgeCenter: data.knowledgeCenter ?? [],
//           caseStudies: data.caseStudies ?? [],
//         });
//         setOpen(true);
//       } catch {
//         setResults({
//           products: [],
//           types: [],
//           documents: [],
//           industries: [],
//           knowledgeCenter: [],
//           caseStudies: [],
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(fetchResults, 300);
//     return () => clearTimeout(timer);
//   }, [query]);
//   // const hasResults =
//   //   results.products.length > 0 ||
//   //   results.types.length > 0 ||
//   //   results.documents.length > 0 ||
//   //   results.industries.length > 0 ||
//   //   results.knowledgeCenter.length > 0; // ✅ FIXED

//   const hasResults =
//     results.products.length > 0 ||
//     results.types.length > 0 ||
//     results.documents.length > 0 ||
//     results.industries.length > 0 ||
//     results.knowledgeCenter.length > 0 ||
//     results.caseStudies.length > 0; // ✅ ADD THIS

//   // const slugify = (text = ""): string =>
//   //   text
//   //     .toLowerCase()
//   //     .replace(/&/g, "")
//   //     .replace(/[^a-z0-9]+/g, "-")
//   //     .replace(/-+/g, "-")
//   //     .replace(/(^-|-$)/g, "");

//   const placeholders = [
//     "Search products...",
//     "Search industries...",
//     "Search documents...",
//     "Search knowledge center...",
//     "Search case studies...",
//   ];

//   const [placeholderIndex, setPlaceholderIndex] = useState(0);

//   useEffect(() => {
//     if (query) return; // stop rotating when typing

//     const interval = setInterval(() => {
//       setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
//     }, 3000); // change every 2 seconds

//     return () => clearInterval(interval);
//   }, [query]);

//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "relative",
//         width: "300px",
//         marginLeft: "10px",
//         flexShrink: 0,
//       }}
//     >
//       {/* Input */}
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           borderRadius: "10px",
//           paddingLeft: "15px",
//           width: "100%",
//           border: "1px solid #e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           height: "43px",
//         }}
//       >
//         <span style={{ fontSize: "13px", display: "flex" }}>
//           <SearchSvg />
//         </span>
//         <input
//           type="text"
//           // placeholder="Search products..."
//           placeholder={query ? "Search..." : placeholders[placeholderIndex]}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{
//             border: "none",
//             background: "transparent",
//             outline: "none",
//             fontSize: "13px",
//             color: "#333",
//             width: "100%",
//             minWidth: 0,
//             paddingLeft: "8px",
//           }}
//         />
//         {loading && (
//           <span
//             style={{ fontSize: "11px", color: "#999", paddingRight: "10px" }}
//           >
//             ...
//           </span>
//         )}
//       </div>

//       {/* Dropdown */}

//       {open && (
//         <div
//           className="search-dropdown"
//           style={{
//             // position: "absolute",
//             // top: "48px",
//             // left: 0,
//             // width: "100%",
//             // maxWidth: "720px",
//             // backgroundColor: "#fff",
//             // border: "1px solid #e0e0e0",
//             // borderRadius: "12px",
//             // boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
//             // zIndex: 9999,
//             // maxHeight: "420px",
//             // overflowY: "auto",
//             position: "absolute",
//             top: "55px",
//             left: "-20%",
//             transform: "translateX(-50%)",
//             width: "900px", // wider like image
//             backgroundColor: "#fff",
//             border: "1px solid #e6e6e6",
//             borderRadius: "14px",
//             boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
//             zIndex: 9999,
//             padding: "25px",
//           }}
//         >
//           {/* PRODUCTS */}
//           {results.products.length > 0 && (
//             <div className="section">
//               <h4
//                 className="section-title"
//                 style={{ color: "#292929", fontSize: "18px" }}
//               >
//                 Products
//               </h4>
//               {results.products.slice(0, 2).map((product) => (
//                 <div
//                   key={product.id}
//                   className="search-row"
//                   style={{ borderBottom: "1px solid #eee" }}
//                 >
//                   <div className="left">
//                     <div className="img">
//                       <Image
//                         src={getImageUrl(product.banner_image)}
//                         alt={product.name}
//                         fill
//                       />
//                     </div>
//                     <div>
//                       {/* <p className="title">{product.name}</p> */}
//                       <p className="title">{product.name.replace(/-/g, " ")}</p>
//                       <span className="subtitle">Product</span>
//                     </div>
//                   </div>
//                   <div className="right">
//                     <Link href={`/contact`} className="btn primary">
//                       Inquire
//                     </Link>
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="btn outline"
//                       onClick={() => {
//                         setOpen(false);
//                         setQuery("");
//                       }}
//                     >
//                       Details
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/*knowledge Center*/}
//           {results.knowledgeCenter.length > 0 && (
//             <div className="section">
//               <h4
//                 className="section-title"
//                 style={{ color: "#292929", fontSize: "18px" }}
//               >
//                 Knowledge Center
//               </h4>

//               {results.knowledgeCenter.slice(0, 2).map((item) => (
//                 <div
//                   key={item.id}
//                   className="search-row"
//                   style={{ borderBottom: "1px solid #eee" }}
//                 >
//                   {/* LEFT */}
//                   <div className="left">
//                     <div>
//                       <p className="title">{item.title}</p>
//                       <span className="subtitle">
//                         {item.category_type || "Knowledge"}
//                       </span>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div className="right">
//                     {/* <Link href={`/contact`} className="btn primary">
//                       Inquire
//                     </Link> */}
//                     <Link
//                       href={item.link || "#"} // ✅ fallback
//                       className="btn outline"
//                       onClick={() => {
//                         setOpen(false);
//                         setQuery("");
//                       }}
//                     >
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* CASE STUDIES */}
//           {results.caseStudies.length > 0 && (
//             <div className="section">
//               <h4
//                 className="section-title"
//                 style={{ color: "#292929", fontSize: "18px" }}
//               >
//                 Case Studies
//               </h4>

//               {results.caseStudies.slice(0, 2).map((item) => (
//                 <div
//                   key={item.id}
//                   className="search-row"
//                   style={{ borderBottom: "1px solid #eee" }}
//                 >
//                   {/* LEFT */}
//                   <div className="left">
//                     <div>
//                       <p className="title">{item.title}</p>
//                       <span className="subtitle">
//                         {/* {item.category_type || "Case Study"} */}
//                         Case Studies
//                       </span>
//                     </div>
//                   </div>

//                   {/* RIGHT */}
//                   <div className="right">
//                     {/* <Link href={`/contact`} className="btn primary">
//                       Inquire
//                     </Link> */}

//                     <Link
//                       href={item.link || "#"}
//                       className="btn outline"
//                       onClick={() => {
//                         setOpen(false);
//                         setQuery("");
//                       }}
//                     >
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* DOCUMENTS */}
//           {results.documents.length > 0 && (
//             <DocumentList documents={results.documents} />
//           )}

//           {/* RESOURCES / TYPES */}
//           {/* {results.types.length > 0 && (
//             <div className="section">
//               <h4 className="section-title">Resources</h4>
//               {results.types.slice(0, 2).map((type) => (
//                 <div key={type.id} className="search-row">
//                   <div className="left">
//                     <span className="icon">🌐</span>
//                     <div>
//                       <p className="title">{type.name}</p>
//                       <span className="subtitle">Category</span>
//                     </div>
//                   </div>
//                   <div className="right">
//                     <Link
//                       href={`/products/${type.product_slug}`}
//                       className="btn outline"
//                       onClick={() => {
//                         setOpen(false);
//                         setQuery("");
//                       }}
//                     >
//                       Discover
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )} */}

//           {/* ✅ INDUSTRIES - NEW SECTION */}
//           {results.industries.length > 0 && (
//             <div className="section">
//               <h4
//                 className="section-title"
//                 style={{ color: "#292929", fontSize: "18px" }}
//               >
//                 Industries
//               </h4>
//               {results.industries.slice(0, 2).map((industry) => (
//                 <div
//                   key={industry.id}
//                   className="search-row"
//                   style={{ borderBottom: "1px solid #eee" }}
//                 >
//                   <div className="left">
//                     <span className="icon">🏭</span>
//                     <div>
//                       <p className="title">{industry.slug}</p>
//                       <span className="subtitle">Industry</span>
//                     </div>
//                   </div>
//                   <div className="right">
//                     <Link
//                       href={`/industries/${industry.slug}`}
//                       className="btn outline"
//                       onClick={() => {
//                         setOpen(false);
//                         setQuery("");
//                       }}
//                     >
//                       Details
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* SEE ALL */}
//           <Link
//             href={`/search-results?query=${encodeURIComponent(query)}&page=1`}
//             onClick={() => {
//               setOpen(false);
//               setQuery("");
//             }}
//           >
//             See All Results →
//           </Link>

//           {/* EMPTY */}
//           {!hasResults && (
//             <div
//               style={{ padding: "12px 15px", fontSize: "13px", color: "#999" }}
//             >
//               No results found
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// /* HEADER */
// export default function HeaderOne() {
//   return (
//     <>
//       <header className="header-area tp-header-white p-relative">
//         <HeaderTopArea />
//         <HeaderStickyWrapper>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-logo">
//                   <Link href="/">
//                     <Image
//                       className="logo-1"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     />
//                   </Link>
//                 </div>
//               </div>

//               <div className="col-xxl-8 col-xl-7 d-none d-xl-block ml-3">
//                 <div className="d-flex align-items-center">
//                   <div className="main-menu" style={{ marginLeft: "-20px" }}>
//                     <NavMenus />
//                   </div>
//                   <SearchBar />
//                 </div>
//               </div>

//               <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-contact d-flex align-items-center justify-content-end">
//                   <div className="tp-header-btn d-none d-md-block">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       Request a Quote
//                     </Link>
//                   </div>
//                   <div className="tp-header-bar d-xl-none ml-30">
//                     <OffcanvasButton
//                       offcanvas_cls="offcanvas__2"
//                       offcanvas_menu_2={true}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </HeaderStickyWrapper>
//       </header>

//       <div id="offcanvas-sidebar" />
//       <div id="cart-mini-sidebar"></div>
//     </>
//   );
// }

/* commented date 29-04-2026 */

// ========================= perfect working code starts  =========================
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// import NavMenus from "./navbar/nav-menus";
// import HeaderTopArea from "./header-top/header-top-area";
// import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
// import OffcanvasButton from "./button/offcanvas-btn";
// import SearchBar from "./search-bar";

// import logo_black from "@/assets/img/logo/erith_global.png";

// export default function HeaderOne() {
//   return (
//     <>
//       <header className="header-area tp-header-white p-relative">
//         <HeaderTopArea />

//         <HeaderStickyWrapper>
//           <div className="container">
//             <div className="row align-items-center">

//               {/* LOGO */}
//               <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-logo">
//                   <Link href="/">
//                     <Image
//                       className="logo-1"
//                       src={logo_black}
//                       alt="logo"
//                       priority
//                     />
//                   </Link>
//                 </div>
//               </div>

//               {/* MENU + SEARCH */}
//               <div className="col-xxl-8 col-xl-7 d-none d-xl-block ml-3">
//                 <div className="d-flex align-items-center">

//                   {/* NAV MENU (Server Component) */}
//                   <div className="main-menu" style={{ marginLeft: "-20px" }}>
//                     <NavMenus />
//                   </div>

//                   {/* SEARCH BAR (Client Component) */}
//                   <SearchBar />

//                 </div>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
//                 <div className="tp-header-contact d-flex align-items-center justify-content-end">

//                   {/* BUTTON */}
//                   <div className="tp-header-btn d-none d-md-block">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       Request a Quote
//                     </Link>
//                   </div>

//                   {/* MOBILE MENU */}
//                   <div className="tp-header-bar d-xl-none ml-30">
//                     <OffcanvasButton
//                       offcanvas_cls="offcanvas__2"
//                       offcanvas_menu_2={true}
//                     />
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </HeaderStickyWrapper>
//       </header>

//       {/* SIDEBARS */}
//       <div id="offcanvas-sidebar" />
//       <div id="cart-mini-sidebar"></div>
//     </>
//   );
// }

// ========================= perfect working code ends =========================

// ========================= HEADER ONE =========================
//** code date 12-05-2026 */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavMenus from "./navbar/nav-menus";
import HeaderTopArea from "./header-top/header-top-area";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";
import SearchBar from "./search-bar";
import { SearchSvg } from "../svg";

import logo_black from "@/assets/img/logo/erith_global.png";

export default function HeaderOne() {
  return (
    <>
      <header className="header-area tp-header-white p-relative">
        <HeaderTopArea />

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              {/* LOGO */}
              <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* MENU */}
              <div className="col-xxl-7 col-xl-6 d-none d-xl-block">
                <div className="main-menu" style={{ marginLeft: "-20px" }}>
                  <NavMenus />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-xxl-3 col-xl-4 col-lg-9 col-md-8 col-6">
                <div
                  className="tp-header-contact d-flex align-items-center justify-content-end"
                  style={{
                    gap: "12px",
                  }}
                >
                  {/* DESKTOP SEARCH */}
                  <div
                    className="d-none d-xxl-block"
                    style={{
                      width: "300px",
                      flexShrink: 0,
                    }}
                  >
                    <SearchBar />
                  </div>

                  {/* MOBILE/TABLET/LAPTOP SEARCH ICON */}
                  <div className="d-xxl-none">
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#mobileSearchBar"
                      aria-expanded="false"
                      aria-controls="mobileSearchBar"
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <SearchSvg />
                    </button>
                  </div>

                  {/* REQUEST QUOTE */}
                  <div className="tp-header-btn d-none d-md-block">
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Request a Quote
                    </Link>
                  </div>

                  {/* MOBILE MENU */}
                  <div className="tp-header-bar d-xl-none">
                    <OffcanvasButton
                      offcanvas_cls="offcanvas__2"
                      offcanvas_menu_2={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE/TABLET/LAPTOP SEARCH */}
            <div id="mobileSearchBar" className="collapse d-xxl-none">
              <div
                style={{
                  width: "100%",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                <SearchBar />
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* SIDEBARS */}
      <div id="offcanvas-sidebar" />
      <div id="cart-mini-sidebar"></div>
    </>
  );
}

//** code date 12-05-2026 */
