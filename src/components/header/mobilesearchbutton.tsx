// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { SearchSvg } from "../svg";

// export default function MobileSearchButton() {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (open && inputRef.current) inputRef.current.focus();
//   }, [open]);

//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "Escape") { setOpen(false); setQuery(""); }
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes tp-mob-slide-down {
//           from { transform: translateY(-100%); opacity: 0; }
//           to   { transform: translateY(0);     opacity: 1; }
//         }
//         .tp-mob-search-overlay {
//           position: fixed;
//           top: 0; left: 0; width: 100%;
//           z-index: 9999;
//           background: #fff;
//           padding: 14px 20px;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.14);
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           animation: tp-mob-slide-down 0.22s ease;
//         }
//         .tp-mob-search-inner {
//           flex: 1;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           background: #f5f5f5;
//           border: 1px solid #1d3a72;
//           border-radius: 10px;
//           padding: 0 14px;
//           height: 44px;
//           box-shadow: 0 0 0 3px rgba(29,58,114,0.1);
//         }
//         .tp-mob-search-inner input {
//           flex: 1;
//           border: none;
//           outline: none;
//           font-size: 15px;
//           color: #333;
//           background: transparent;
//         }
//         .tp-mob-search-close {
//           cursor: pointer;
//           font-size: 20px;
//           color: #666;
//           background: none;
//           border: none;
//           padding: 0 4px;
//           flex-shrink: 0;
//         }
//       `}</style>

//       {/* Icon button */}
//       <button
//         aria-label="Open search"
//         onClick={() => setOpen(true)}
//         style={{
//           background: "none",
//           border: "none",
//           cursor: "pointer",
//           padding: "6px",
//           color: "#1d3a72",
//           display: "flex",
//           alignItems: "center",
//           marginRight: "4px",
//         }}
//       >
//         <SearchSvg />
//       </button>

//       {/* Full-width slide-down overlay */}
//       {open && (
//         <div className="tp-mob-search-overlay" ref={overlayRef}>
//           <div className="tp-mob-search-inner">
//             <span style={{ display: "flex", flexShrink: 0 }}>
//               <SearchSvg />
//             </span>
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Search products…"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>
//           <button
//             className="tp-mob-search-close"
//             onClick={() => { setOpen(false); setQuery(""); }}
//           >
//             ✕
//           </button>
//         </div>
//       )}
//     </>
//   );
// }