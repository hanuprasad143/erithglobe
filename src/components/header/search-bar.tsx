// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { SearchSvg } from "../svg";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";

// type Product = { id: number; name: string; slug: string; link?: string | null };
// type ProductType = { id: number; name: string; product_slug: string; product_name: string };
// type Document = {
//   id: number;
//   title: string;
//   file_url: string;
//   document_type: string;
//   language: string;
//   product_name: string;
// };
// type SearchResults = { products: Product[]; types: ProductType[]; documents: Document[] };
// type FilterType = "all" | "products" | "types" | "documents";

// export default function SearchBar() {
//   const [query, setQuery] = useState<string>("");
//   const [filter, setFilter] = useState<FilterType>("all");
//   const [results, setResults] = useState<SearchResults>({ products: [], types: [], documents: [] });
//   const [loading, setLoading] = useState<boolean>(false);
//   const [open, setOpen] = useState<boolean>(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, []);

//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults({ products: [], types: [], documents: [] });
//       setOpen(false);
//       return;
//     }
//     const timer = setTimeout(async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${API_URL}/search?q=${encodeURIComponent(query)}&type=${filter}`
//         );
//         const data = await res.json();
//         setResults(data);
//         setOpen(true);
//       } catch {
//         setResults({ products: [], types: [], documents: [] });
//       } finally {
//         setLoading(false);
//       }
//     }, 300);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [query, filter]);

//   const totalResults =
//     (filter === "all" || filter === "products" ? results.products.length : 0) +
//     (filter === "all" || filter === "types" ? results.types.length : 0) +
//     (filter === "all" || filter === "documents" ? results.documents.length : 0);

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
//           placeholder="Search..."
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
//           <span style={{ fontSize: "11px", color: "#999", paddingRight: "10px" }}>
//             ...
//           </span>
//         )}
//       </div>

//       {/* Dropdown */}
//       {(open || query.trim() !== "") && (
//         <div
//           style={{
//             position: "absolute",
//             top: "48px",
//             left: 0,
//             width: "340px",
//             backgroundColor: "#fff",
//             border: "1px solid #e0e0e0",
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             zIndex: 9999,
//           }}
//         >
//           {/* Filter Tabs */}
//           <div
//             style={{
//               display: "flex",
//               gap: "6px",
//               padding: "10px 12px",
//               borderBottom: "1px solid #f0f0f0",
//               flexWrap: "wrap",
//             }}
//           >
//             {(["all", "products", "types", "documents"] as FilterType[]).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setFilter(tab)}
//                 style={{
//                   padding: "4px 12px",
//                   borderRadius: "20px",
//                   border: "1px solid",
//                   fontSize: "12px",
//                   cursor: "pointer",
//                   fontWeight: filter === tab ? "600" : "400",
//                   backgroundColor: filter === tab ? "#1d3a72" : "#f5f5f5",
//                   color: filter === tab ? "#fff" : "#555",
//                   borderColor: filter === tab ? "#1d3a72" : "#e0e0e0",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {tab === "types" ? "Product Types" : tab}
//               </button>
//             ))}
//           </div>

//           {/* Results */}
//           <div style={{ maxHeight: "320px", overflowY: "auto" }}>
//             {query.trim() === "" ? (
//               <div style={{ padding: "12px 15px", fontSize: "13px", color: "#999" }}>
//                 Type to search...
//               </div>
//             ) : totalResults === 0 && !loading ? (
//               <div style={{ padding: "12px 15px", fontSize: "13px", color: "#999" }}>
//                 No results found
//               </div>
//             ) : (
//               <div>
//                 {/* Products */}
//                 {(filter === "all" || filter === "products") && results.products.length > 0 && (
//                   <div>
//                     <div
//                       style={{
//                         padding: "8px 15px 4px",
//                         fontSize: "11px",
//                         fontWeight: "700",
//                         color: "#999",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Products
//                     </div>
//                     {results.products.map((product) => (
//                       <Link
//                         key={product.id}
//                         href={product.link ? product.link : `/products/${product.slug}`}
//                         target={product.link?.startsWith("http") ? "_blank" : "_self"}
//                         rel={product.link?.startsWith("http") ? "noopener noreferrer" : undefined}
//                         onClick={() => { setOpen(false); setQuery(""); }}
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "8px",
//                           padding: "9px 15px",
//                           fontSize: "13px",
//                           color: "#292929",
//                           textDecoration: "none",
//                           borderBottom: "1px solid #f9f9f9",
//                         }}
//                         onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
//                       >
//                         <span style={{ fontSize: "11px", color: "#1d3a72", fontWeight: "600" }}>P</span>
//                         {product.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Product Types */}
//                 {(filter === "all" || filter === "types") && results.types.length > 0 && (
//                   <div>
//                     <div
//                       style={{
//                         padding: "8px 15px 4px",
//                         fontSize: "11px",
//                         fontWeight: "700",
//                         color: "#999",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Product Types
//                     </div>
//                     {results.types.map((pt) => (
//                       <Link
//                         key={pt.id}
//                         href={`/products/${pt.product_slug}`}
//                         onClick={() => { setOpen(false); setQuery(""); }}
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "9px 15px",
//                           fontSize: "13px",
//                           color: "#292929",
//                           textDecoration: "none",
//                           borderBottom: "1px solid #f9f9f9",
//                         }}
//                         onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
//                       >
//                         <span>{pt.name}</span>
//                         <span style={{ fontSize: "11px", color: "#999" }}>
//                           {pt.product_name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Documents */}
//                 {(filter === "all" || filter === "documents") && results.documents.length > 0 && (
//                   <div>
//                     <div
//                       style={{
//                         padding: "8px 15px 4px",
//                         fontSize: "11px",
//                         fontWeight: "700",
//                         color: "#999",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Documents
//                     </div>
//                     {results.documents.map((doc) => (

//                         key={doc.id}
//                         href={doc.file_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={() => { setOpen(false); setQuery(""); }}
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           padding: "9px 15px",
//                           fontSize: "13px",
//                           color: "#292929",
//                           textDecoration: "none",
//                           borderBottom: "1px solid #f9f9f9",
//                         }}
//                         onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
//                       >
//                         <span>{doc.title || doc.document_type}</span>
//                         <span style={{ fontSize: "11px", color: "#999" }}>
//                           {doc.product_name} {doc.language ? `· ${doc.language}` : ""}
//                         </span>
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ========================= perfect working code  starts =========================
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
// import { DocumentList } from "../document-list/documentlist";

// const API_URL = "https://backend-test-yeyr.onrender.com/api";
// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// /* ================= TYPES ================= */

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

// /* ================= HELPERS ================= */

// const getImageUrl = (path?: string) => {
//   if (!path) return "/placeholder.png";
//   if (path.startsWith("http")) return path;
//   return `${IMAGE_BASE}/${path.replace(/^\/+/, "")}`;
// };

// /* ================= COMPONENT ================= */

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResponse>({
//     products: [],
//     types: [],
//     documents: [],
//     industries: [],
//     knowledgeCenter: [],
//     caseStudies: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [placeholderIndex, setPlaceholderIndex] = useState(0);

//   const ref = useRef<HTMLDivElement>(null);

//   /* 🔹 Close dropdown on outside click */
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   /* 🔹 Debounced Search */
//   useEffect(() => {
//     if (!query.trim()) {
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

//     const timer = setTimeout(async () => {
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
//           knowledgeCenter: data.knowledgeCenter ?? [],
//           caseStudies: data.caseStudies ?? [],
//         });

//         setOpen(true);
//       } catch (err) {
//         console.error("Search error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [query]);

//   /* 🔹 Placeholder Rotation */
//   const placeholders = [
//     "Search products...",
//     "Search industries...",
//     "Search documents...",
//     "Search knowledge center...",
//     "Search case studies...",
//   ];

//   useEffect(() => {
//     if (query) return;

//     const interval = setInterval(() => {
//       setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [query]);

//   const hasResults =
//     results.products.length ||
//     results.documents.length ||
//     results.industries.length ||
//     results.knowledgeCenter.length ||
//     results.caseStudies.length;

//   /* ================= UI ================= */

//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "relative",
//         width: "300px",
//         marginLeft: "10px",
//       }}
//     >
//       {/* INPUT */}
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           borderRadius: "10px",
//           paddingLeft: "15px",
//           border: "1px solid #e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           height: "43px",
//         }}
//       >
//         <SearchSvg />

//         <input
//           type="text"
//           placeholder={query ? "Search..." : placeholders[placeholderIndex]}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{
//             border: "none",
//             background: "transparent",
//             outline: "none",
//             fontSize: "13px",
//             width: "100%",
//             paddingLeft: "8px",
//           }}
//         />

//         {loading && <span style={{ fontSize: "11px" }}>...</span>}
//       </div>

//       {/* DROPDOWN */}
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
//                       // href={`/products/${product.slug}`}
//                       // href={product.link || `/products/${product.slug}`}
//                       href={product.link ? product.link : `/products/${product.slug}`}
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

// ========================= perfect working code ends =========================

//** code date 12-05-2026 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchSvg } from "../svg";
import { DocumentList } from "../document-list/documentlist";

const API_URL = "https://backend-test-yeyr.onrender.com/api";
const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

/* ================= TYPES ================= */

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
  slug: string | null;
};

type KnowledgeCenter = {
  id: number;
  title: string;
  category_type: string;
  link?: string;
};

type SearchResponse = {
  products: Product[];
  types: ProductType[];
  documents: Document[];
  industries: Industry[];
  knowledgeCenter: KnowledgeCenter[];
  caseStudies: KnowledgeCenter[];
};

/* ================= HELPERS ================= */

const getImageUrl = (path?: string) => {
  if (!path) return "/placeholder.png";
  if (path.startsWith("http")) return path;
  return `${IMAGE_BASE}/${path.replace(/^\/+/, "")}`;
};

/* ================= COMPONENT ================= */

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<SearchResponse>({
    products: [],
    types: [],
    documents: [],
    industries: [],
    knowledgeCenter: [],
    caseStudies: [],
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  /* 🔹 Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* 🔹 Debounced Search */
  useEffect(() => {
    if (!query.trim()) {
      setResults({
        products: [],
        types: [],
        documents: [],
        industries: [],
        knowledgeCenter: [],
        caseStudies: [],
      });

      setOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `${API_URL}/search?q=${encodeURIComponent(query)}`,
        );

        const data: SearchResponse = await res.json();

        setResults({
          products: data.products ?? [],
          types: data.types ?? [],
          documents: data.documents ?? [],
          industries: data.industries ?? [],
          knowledgeCenter: data.knowledgeCenter ?? [],
          caseStudies: data.caseStudies ?? [],
        });

        setOpen(true);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /* 🔹 Placeholder Rotation */

  const placeholders = [
    "Search products...",
    "Search industries...",
    "Search documents...",
    "Search knowledge center...",
    "Search case studies...",
  ];

  useEffect(() => {
    if (query) return;

    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [query]);

  const hasResults =
    results.products.length ||
    results.documents.length ||
    results.industries.length ||
    results.knowledgeCenter.length ||
    results.caseStudies.length;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* INPUT */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          paddingLeft: "15px",
          border: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          height: "43px",
          width: "100%",
        }}
      >
        <SearchSvg />

        <input
          type="text"
          placeholder={query ? "Search..." : placeholders[placeholderIndex]}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            fontSize: "13px",
            width: "100%",
            paddingLeft: "8px",
          }}
        />

        {loading && <span style={{ fontSize: "11px" }}>...</span>}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="search-dropdown"
          style={{
            position: "absolute",
            top: "55px",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #e6e6e6",
            borderRadius: "14px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            zIndex: 9999,
            padding: "25px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {/* PRODUCTS */}
          {results.products.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                }}
              >
                Products
              </h4>

              {results.products.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="search-row"
                  style={{
                    borderBottom: "1px solid #eee",
                    paddingBottom: "15px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="left"
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      flex: 1,
                      minWidth: "250px",
                    }}
                  >
                    <div
                      className="img"
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                        borderRadius: "10px",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={getImageUrl(product.banner_image)}
                        alt={product.name}
                        fill
                      />
                    </div>

                    <div>
                      <p className="title">{product.name.replace(/-/g, " ")}</p>

                      <span className="subtitle">Product</span>
                    </div>
                  </div>

                  <div
                    className="right"
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link href="/contact" className="btn primary">
                      Inquire
                    </Link>

                    <Link
                      href={
                        product.link
                          ? product.link
                          : `/products/${product.slug}`
                      }
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* KNOWLEDGE CENTER */}
          {results.knowledgeCenter.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                }}
              >
                Knowledge Center
              </h4>

              {results.knowledgeCenter.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="search-row"
                  style={{
                    borderBottom: "1px solid #eee",
                    paddingBottom: "15px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p className="title">{item.title}</p>

                    <span className="subtitle">
                      {item.category_type || "Knowledge"}
                    </span>
                  </div>

                  <Link
                    href={item.link || "#"}
                    className="btn outline"
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* DOCUMENTS */}
          {results.documents.length > 0 && (
            <DocumentList documents={results.documents} />
          )}

          {/* INDUSTRIES */}
          {results.industries.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                }}
              >
                Industries
              </h4>

              {results.industries.slice(0, 2).map((industry) => (
                <div
                  key={industry.id}
                  className="search-row"
                  style={{
                    borderBottom: "1px solid #eee",
                    paddingBottom: "15px",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p className="title">{industry.slug}</p>

                    <span className="subtitle">Industry</span>
                  </div>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="btn outline"
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    Details
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* SEE ALL */}
          <Link
            href={`/search-results?query=${encodeURIComponent(query)}&page=1`}
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
          >
            See All Results →
          </Link>

          {/* EMPTY */}
          {!hasResults && (
            <div
              style={{
                padding: "12px 15px",
                fontSize: "13px",
                color: "#999",
              }}
            >
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

//** code date 12-05-2026 */
