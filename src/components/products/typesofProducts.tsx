// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import ErithTypesBottom from "@/app/(shop)/shop-details/_components/erith-types-bottom";

// import { useSearchParams } from "next/navigation";

// export default function Typesofproducts({ productId }: any) {
//   const [productTypes, setProductTypes] = useState<any[]>([]);
//   const [activeType, setActiveType] = useState<any>(null);

//   const [typeStyleHeading, setTypeStyleHeading] = useState<any>(null);

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const thumbRef = useRef<HTMLDivElement>(null);
//   const searchParams = useSearchParams();
// const typeId = searchParams.get("type");

//   /* FETCH PRODUCT TYPES BASED ON PRODUCT ID */
//   // useEffect(() => {
//   //   if (!productId) return;

//   //   fetch(`https://backend-test-yeyr.onrender.com/api/product-types?product_id=${productId}`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       // ensure only items matching this productId
//   //       const filtered = (data || []).filter(
//   //         (item: any) => Number(item.product_id) === Number(productId),
//   //       );
//   //       setProductTypes(filtered);
//   //       setActiveType(filtered[0] || null);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, [productId]);

//   useEffect(() => {
//   if (!productId) return;

//   fetch(`https://backend-test-yeyr.onrender.com/api/product-types?product_id=${productId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       const filtered = (data || []).filter(
//         (item: any) => Number(item.product_id) === Number(productId)
//       );

//       setProductTypes(filtered);

//       // ✅ AUTO SELECT TYPE
//       if (typeId) {
//         const selected = filtered.find(
//           (pt: any) => Number(pt.id) === Number(typeId)
//         );
//         setActiveType(selected || filtered[0]);
//       } else {
//         setActiveType(filtered[0]);
//       }
//     })
//     .catch((err) => console.log(err));
// }, [productId, typeId]);

//   useEffect(() => {
//     if (!productId) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         // ✅ find correct product by id
//         const product = (data || []).find(
//           (item: any) => Number(item.id) === Number(productId),
//         );

//         setTypeStyleHeading(product || null);
//       })
//       .catch((err) => console.log(err));
//   }, [productId]);

//   /* SCROLLBAR LOGIC */

//   useEffect(() => {
//     const container = scrollRef.current;
//     const thumb = thumbRef.current;

//     if (!container || !thumb) return;

//     const handleScroll = () => {
//       const scrollTop = container.scrollTop;
//       const scrollHeight = container.scrollHeight - container.clientHeight;

//       const trackHeight = 390 - 80;
//       const top = (scrollTop / scrollHeight) * trackHeight;

//       thumb.style.top = `${top}px`;
//     };

//     container.addEventListener("scroll", handleScroll);

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [productTypes]);

//   const visibleItems = productTypes;
//   const showScroll = visibleItems.length > 3;

//   if (!visibleItems.length) return null;

//   return (
//     <section className="tp-about-campus-info-area px-0 pt-30 pb-10 g-0">
//       <div className="container px-0">
//         <div className="row align-items-start">
//           {/* <h5
//             style={{
//               color: "#292929",
//               marginBottom: "20px",
//               fontSize: "40px",
//             }}
//           >
//             Types of Products
//           </h5> */}
//           {/* <hr
//             style={{
//               width: "100%",
//               border: "none",
//               borderTop: "1px solid #ddd",
//               margin: "10px 0",
//             }}
//           /> */}
//           <hr style={{ marginBottom: "25px" }} />
//           <h5
//             style={{
//               color: "#292929",
//               marginBottom: "25px",
//               fontSize: "25px",
//             }}
//           >
//             {typeStyleHeading?.type_style_title
//               ? `${typeStyleHeading.type_style_title}`
//               : "Types of Products"}
//           </h5>

//           {/* LEFT SIDE */}

//           <div className="col-lg-4 col-12 mb-4 mb-lg-0">
//             <div className="row g-0">
//               <div className="col-11">
//                 <div
//                   ref={scrollRef}
//                   className="d-flex flex-column"
//                   style={{
//                     height: "390px",
//                     overflowY: showScroll ? "scroll" : "hidden",
//                     paddingRight: "10px",
//                     color: "#292929",
//                   }}
//                 >
//                   {visibleItems.map((item, index, arr) => (
//                     <div
//                       key={item.id}
//                       onClick={() => setActiveType(item)}
//                       className="tp-event-3-item d-flex align-items-center-stretch"
//                       style={{
//                         height: "120px", // height adjustment of card
//                         minHeight: "120px", // ensures consistent height
//                         flexShrink: 0,
//                         marginBottom: index !== arr.length - 1 ? "15px" : "0px",
//                         padding: 0,
//                         borderRadius: "10px",
//                         cursor: "pointer",
//                         background:
//                           activeType?.id === item.id
//                             ? "#eef2ff"
//                             : "transparent",
//                       }}
//                     >
//                       {/* TEXT */}

//                       <div
//                         className="tp-event-3-content d-flex flex-column justify-content-center"
//                         style={{
//                           flex: 1,
//                           paddingLeft: "15px",
//                           marginRight: "20px",
//                         }}
//                       >
//                         <h6 className="mb-1" style={{ fontSize: "18px" }}>
//                           {/* <Link href="#">{item.name}</Link> */}
//                           <h5 style={{ fontSize: "18px" }}>{item.name}</h5>
//                         </h6>

//                         <span
//                           className="text-muted small"
//                           style={{
//                             fontSize: "15px",
//                             lineHeight: "1.2",
//                           }}
//                         >
//                           {item.product_type}
//                         </span>
//                       </div>

//                       {/* IMAGE */}

//                       {/* <div
//                         className="tp-event-3-thumb position-relative"
//                         style={{
//                           width: "180px",
//                           minWidth: "180px",
//                           height: "130px",
//                           borderRadius: "10px",
//                           overflow: "hidden",
//                           background: "#f8f8f8",
//                         }}
//                       >
//                         <Image
//                           src={`https://backend-test-yeyr.onrender.com/uploads/${item.image}`}
//                           alt={item.name}
//                           fill
//                           sizes="120px"
//                           style={{
//                             objectFit: "cover",
//                             objectPosition: "center",
//                           }}
//                         />
//                       </div> */}
//                       <div
//                         className="tp-event-3-thumb position-relative w-100"
//                         style={{
//                           maxWidth: "180px",
//                           width: "100%",
//                           aspectRatio: "16/9", // keeps proper shape
//                           borderRadius: "10px",
//                           overflow: "hidden",
//                           background: "#f8f8f8",
//                         }}
//                       >
//                         <Image
//                           src={`https://backend-test-yeyr.onrender.com/uploads/${item.image}`}
//                           alt={item.name}
//                           fill
//                           sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 180px"
//                           style={{
//                             objectFit: "cover",
//                             objectPosition: "center",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* SCROLLBAR */}

//               {showScroll && (
//                 <div className="col-1 d-none d-lg-flex justify-content-center">
//                   <div
//                     style={{
//                       height: "390px",
//                       width: "8px",
//                       borderRadius: "10px",
//                       background:
//                         "linear-gradient(to bottom, #e0e0e0, #cfcfcf)",
//                       boxShadow: "inset 0 0 5px rgba(0,0,0,0.15)",
//                       position: "relative",
//                     }}
//                   >
//                     <div
//                       ref={thumbRef}
//                       style={{
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "80px",
//                         borderRadius: "10px",
//                         background: "linear-gradient(180deg, #1d3a72, #292929)",
//                         boxShadow: "0 0 8px rgba(29,58,114,0.6)",
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}

//           <div className="col-lg-8 col-12 pe-0">
//             {activeType && (
//               <div
//                 className="tp-event-3-item mb-4"
//                 style={{
//                   backgroundColor: "#f3f4f8",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <ErithTypesBottom product={activeType} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// commented date 26-05-2026 //
// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import ErithTypesBottom from "@/app/(shop)/shop-details/_components/erith-types-bottom";
// import { useSearchParams } from "next/navigation";

// export default function Typesofproducts({ productId }: any) {
//   const [productTypes, setProductTypes] = useState<any[]>([]);
//   const [activeType, setActiveType] = useState<any>(null);
//   const [typeStyleHeading, setTypeStyleHeading] = useState<any>(null);

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const thumbRef = useRef<HTMLDivElement>(null);

//   // ✅ NEW REF FOR AUTO SCROLL
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const searchParams = useSearchParams();
//   const typeId = searchParams.get("type");

//   /* FETCH PRODUCT TYPES */
//   useEffect(() => {
//     if (!productId) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/product-types?product_id=${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = (data || []).filter(
//           (item: any) => Number(item.product_id) === Number(productId),
//         );

//         setProductTypes(filtered);

//         if (typeId) {
//           const selected = filtered.find(
//             (pt: any) => Number(pt.id) === Number(typeId),
//           );
//           setActiveType(selected || filtered[0]);
//         } else {
//           setActiveType(filtered[0]);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, [productId, typeId]);

//   /* FETCH PRODUCT (for heading) */
//   useEffect(() => {
//     if (!productId) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         const product = (data || []).find(
//           (item: any) => Number(item.id) === Number(productId),
//         );

//         setTypeStyleHeading(product || null);
//       })
//       .catch((err) => console.log(err));
//   }, [productId]);

//   /* ✅ AUTO SCROLL TO TYPES SECTION */
//   useEffect(() => {
//     if (typeId && sectionRef.current) {
//       setTimeout(() => {
//         sectionRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 300); // small delay to ensure render
//     }
//   }, [typeId, productTypes]);

//   /* SCROLLBAR LOGIC */
//   useEffect(() => {
//     const container = scrollRef.current;
//     const thumb = thumbRef.current;

//     if (!container || !thumb) return;

//     const handleScroll = () => {
//       const scrollTop = container.scrollTop;
//       const scrollHeight = container.scrollHeight - container.clientHeight;

//       const trackHeight = 390 - 80;
//       const top = (scrollTop / scrollHeight) * trackHeight;

//       thumb.style.top = `${top}px`;
//     };

//     container.addEventListener("scroll", handleScroll);

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [productTypes]);

//   const visibleItems = productTypes;
//   const showScroll = visibleItems.length > 3;

//   if (!visibleItems.length) return null;

//   return (
//     <section
//       ref={sectionRef} // ✅ IMPORTANT
//       className="tp-about-campus-info-area px-0 pt-30 pb-10 g-0"
//     >
//       <div className="container px-0">
//         <div className="row align-items-start">
//           <hr style={{ marginBottom: "25px" }} />

//           <h5
//             style={{
//               color: "#292929",
//               marginBottom: "25px",
//               fontSize: "25px",
//             }}
//           >
//             {typeStyleHeading?.type_style_title
//               ? `${typeStyleHeading.type_style_title}`
//               : "Types of Products"}
//           </h5>

//           {/* LEFT SIDE */}
//           <div className="col-lg-4 col-12 mb-4 mb-lg-0">
//             <div className="row g-0">
//               <div className="col-11">
//                 <div
//                   ref={scrollRef}
//                   className="d-flex flex-column"
//                   style={{
//                     height: "390px",
//                     overflowY: showScroll ? "scroll" : "hidden",
//                     paddingRight: "10px",
//                     color: "#292929",
//                   }}
//                 >
//                   {visibleItems.map((item, index, arr) => (
//                     <div
//                       key={item.id}
//                       onClick={() => setActiveType(item)}
//                       className="tp-event-3-item d-flex align-items-center-stretch"
//                       style={{
//                         height: "120px",
//                         minHeight: "120px",
//                         flexShrink: 0,
//                         marginBottom: index !== arr.length - 1 ? "15px" : "0px",
//                         padding: 0,
//                         borderRadius: "10px",
//                         cursor: "pointer",
//                         background:
//                           activeType?.id === item.id
//                             ? "#eef2ff"
//                             : "transparent",
//                       }}
//                     >
//                       <div
//                         className="tp-event-3-content d-flex flex-column justify-content-center"
//                         style={{
//                           flex: 1,
//                           paddingLeft: "15px",
//                           marginRight: "20px",
//                         }}
//                       >
//                         <div className="mb-1" style={{ fontSize: "18px" }}>
//                           <h5 style={{ fontSize: "18px" }}>{item.name}</h5>
//                         </div>

//                         <span
//                           className="text-muted small"
//                           style={{
//                             fontSize: "15px",
//                             lineHeight: "1.2",
//                           }}
//                         >
//                           {item.product_type}
//                         </span>
//                       </div>

//                       <div
//                         className="tp-event-3-thumb position-relative w-100"
//                         style={{
//                           maxWidth: "180px",
//                           width: "100%",
//                           aspectRatio: "16/9",
//                           borderRadius: "10px",
//                           overflow: "hidden",
//                           background: "#f8f8f8",
//                         }}
//                       >
//                         <Image
//                           src={`https://backend-test-yeyr.onrender.com/uploads/${item.image}`}
//                           alt={item.name}
//                           fill
//                           sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 180px"
//                           style={{
//                             objectFit: "cover",
//                             objectPosition: "center",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* SCROLLBAR */}
//               {showScroll && (
//                 <div className="col-1 d-none d-lg-flex justify-content-center">
//                   <div
//                     style={{
//                       height: "390px",
//                       width: "8px",
//                       borderRadius: "10px",
//                       background:
//                         "linear-gradient(to bottom, #e0e0e0, #cfcfcf)",
//                       boxShadow: "inset 0 0 5px rgba(0,0,0,0.15)",
//                       position: "relative",
//                     }}
//                   >
//                     <div
//                       ref={thumbRef}
//                       style={{
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "80px",
//                         borderRadius: "10px",
//                         background: "linear-gradient(180deg, #1d3a72, #292929)",
//                         boxShadow: "0 0 8px rgba(29,58,114,0.6)",
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="col-lg-8 col-12 pe-0">
//             {activeType && (
//               <div
//                 className="tp-event-3-item mb-4"
//                 style={{
//                   backgroundColor: "#f3f4f8",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <ErithTypesBottom product={activeType} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// commented code date 26-05-2026 //

// "use client";

// import { useState, useEffect, useRef } from "react";
// // import Link from "next/link";
// import Image from "next/image";
// import ErithTypesBottom from "@/app/(shop)/shop-details/_components/erith-types-bottom";
// import { useSearchParams } from "next/navigation";

// export default function Typesofproducts({ productId }: any) {
//   const [productTypes, setProductTypes] = useState<any[]>([]);
//   const [activeType, setActiveType] = useState<any>(null);
//   const [typeStyleHeading, setTypeStyleHeading] = useState<any>(null);

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const thumbRef = useRef<HTMLDivElement>(null);

//   // ✅ NEW REF FOR AUTO SCROLL
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const searchParams = useSearchParams();
//   const typeId = searchParams.get("type");

//   /* FETCH PRODUCT TYPES */
//   useEffect(() => {
//     if (!productId) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/product-types?product_id=${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = (data || []).filter(
//           (item: any) => Number(item.product_id) === Number(productId),
//         );

//         setProductTypes(filtered);

//         if (typeId) {
//           const selected = filtered.find(
//             (pt: any) => Number(pt.id) === Number(typeId),
//           );
//           setActiveType(selected || filtered[0]);
//         } else {
//           setActiveType(filtered[0]);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, [productId, typeId]);

//   /* FETCH PRODUCT (for heading) */
//   useEffect(() => {
//     if (!productId) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         const product = (data || []).find(
//           (item: any) => Number(item.id) === Number(productId),
//         );

//         setTypeStyleHeading(product || null);
//       })
//       .catch((err) => console.log(err));
//   }, [productId]);

//   /* ✅ AUTO SCROLL TO TYPES SECTION */
//   useEffect(() => {
//     if (typeId && sectionRef.current) {
//       setTimeout(() => {
//         sectionRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 300); // small delay to ensure render
//     }
//   }, [typeId, productTypes]);

//   /* SCROLLBAR LOGIC */
//   useEffect(() => {
//     const container = scrollRef.current;
//     const thumb = thumbRef.current;

//     if (!container || !thumb) return;

//     const handleScroll = () => {
//       const scrollTop = container.scrollTop;
//       const scrollHeight = container.scrollHeight - container.clientHeight;

//       const trackHeight = 390 - 80;
//       const top = (scrollTop / scrollHeight) * trackHeight;

//       thumb.style.top = `${top}px`;
//     };

//     container.addEventListener("scroll", handleScroll);

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [productTypes]);

//   const visibleItems = productTypes;
//   const showScroll = visibleItems.length > 3;

//   if (!visibleItems.length) return null;

//   return (
//     <section
//       ref={sectionRef}
//       className="tp-about-campus-info-area px-0 pt-30 pb-10 g-0"
//     >
//       <div className="container px-0">
//         <div className="row align-items-start">
//           <hr style={{ marginBottom: "25px" }} />

//           <h5
//             style={{
//               color: "#292929",
//               marginBottom: "25px",
//               fontSize: "25px",
//             }}
//           >
//             {typeStyleHeading?.type_style_title
//               ? `${typeStyleHeading.type_style_title}`
//               : "Types of Products"}
//           </h5>

//           {/* LEFT SIDE */}
//           <div className="col-lg-4 col-12 mb-4 mb-lg-0">
//             <div className="row g-0">
//               <div className="col-11">
//                 <div
//                   ref={scrollRef}
//                   className="d-flex flex-column"
//                   style={{
//                     height: "390px",
//                     overflowY: showScroll ? "scroll" : "hidden",
//                     paddingRight: "10px",
//                     color: "#292929",
//                   }}
//                 >
//                   {visibleItems.map((item, index, arr) => (
//                     <div
//                       key={item.id}
//                       onClick={() => setActiveType(item)}
//                       className="tp-event-3-item d-flex align-items-center-stretch"
//                       style={{
//                         height: "120px",
//                         minHeight: "120px",
//                         flexShrink: 0,
//                         marginBottom: index !== arr.length - 1 ? "15px" : "0px",
//                         padding: 0,
//                         borderRadius: "10px",
//                         cursor: "pointer",
//                         background:
//                           activeType?.id === item.id
//                             ? "#eef2ff"
//                             : "transparent",
//                         flexWrap: "nowrap",
//                         flexDirection: "row",
//                       }}
//                     >
//                       <div
//                         className="tp-event-3-content d-flex flex-column justify-content-center"
//                         style={{
//                           flex: 1,
//                           paddingLeft: "15px",
//                           marginRight: "20px",
//                           minWidth: 0,
//                         }}
//                       >
//                         <div className="mb-1" style={{ fontSize: "18px" }}>
//                           <h5 style={{ fontSize: "18px" }}>{item.name}</h5>
//                         </div>

//                         <span
//                           className="text-muted small"
//                           style={{
//                             fontSize: "15px",
//                             lineHeight: "1.2",
//                           }}
//                         >
//                           {item.product_type}
//                         </span>
//                       </div>

//                       <div
//                         className="tp-event-3-thumb position-relative"
//                         style={{
//                           width: "clamp(80px, 25vw, 180px)",
//                           maxWidth: "clamp(80px, 25vw, 180px)",
//                           alignSelf: "stretch",
//                           borderRadius: "10px",
//                           overflow: "hidden",
//                           background: "#f8f8f8",
//                           flexShrink: 0,
//                         }}
//                       >
//                         <Image
//                           src={`https://backend-test-yeyr.onrender.com/uploads/${item.image}`}
//                           alt={item.name}
//                           fill
//                           sizes="(max-width: 576px) 25vw, (max-width: 768px) 25vw, 180px"
//                           style={{
//                             objectFit: "contain",
//                             objectPosition: "top",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* SCROLLBAR */}
//               {showScroll && (
//                 <div className="col-1 d-none d-lg-flex justify-content-center">
//                   <div
//                     style={{
//                       height: "390px",
//                       width: "8px",
//                       borderRadius: "10px",
//                       background:
//                         "linear-gradient(to bottom, #e0e0e0, #cfcfcf)",
//                       boxShadow: "inset 0 0 5px rgba(0,0,0,0.15)",
//                       position: "relative",
//                     }}
//                   >
//                     <div
//                       ref={thumbRef}
//                       style={{
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "80px",
//                         borderRadius: "10px",
//                         background: "linear-gradient(180deg, #1d3a72, #292929)",
//                         boxShadow: "0 0 8px rgba(29,58,114,0.6)",
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="col-lg-8 col-12 pe-0">
//             {activeType && (
//               <div
//                 className="tp-event-3-item mb-4"
//                 style={{
//                   backgroundColor: "#f3f4f8",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <ErithTypesBottom product={activeType} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ErithTypesBottom from "@/app/(shop)/shop-details/_components/erith-types-bottom";
import { useSearchParams } from "next/navigation";

// Fix 1: removed unused `import Link from "next/link"`

type ProductType = {
  id: number;
  product_id: number;
  product_type: string;
  heading_style: string;
  name: string;
  description?: string | null;
  image?: string | null;
  short_description?: string | null;
  show_description?: boolean;
  show_specifications?: boolean;
  show_downloads?: boolean;
  show_features?: boolean;
  show_insights?: boolean;
  subcategory_id: number;
  slug: string;
  serial_number?: string | null;
  has_types?: boolean;
  link?: string | null;
  show_in_navbar?: boolean;
  product_category?: string | null;
  menu_order?: number;
  type_style_title?: string | null;
};

type ProductStyleHeading = {
  id: number;
  type_style_title?: string | null;
};

type TypesofproductsProps = {
  productId: number | string;
};

export default function Typesofproducts({ productId }: TypesofproductsProps) {
  // Fix 2: replaced any prop type
  const [productTypes, setProductTypes] = useState<ProductType[]>([]); // Fix 3: replaced any[]
  const [activeType, setActiveType] = useState<ProductType | null>(null); // Fix 4: replaced any
  const [typeStyleHeading, setTypeStyleHeading] =
    useState<ProductStyleHeading | null>(null); // Fix 5: replaced any

  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const typeId = searchParams.get("type");

  /* FETCH PRODUCT TYPES */
  useEffect(() => {
    if (!productId) return;

    fetch(
      `https://backend-test-yeyr.onrender.com/api/product-types?product_id=${productId}`,
    )
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        // Fix 6: replaced any in .then callback
        const filtered = (data || []).filter(
          (item) => Number(item.product_id) === Number(productId),
        );

        setProductTypes(filtered);

        if (typeId) {
          const selected = filtered.find(
            (pt) => Number(pt.id) === Number(typeId),
          );
          setActiveType(selected || filtered[0]);
        } else {
          setActiveType(filtered[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [productId, typeId]);

  /* FETCH PRODUCT (for heading) */
  useEffect(() => {
    if (!productId) return;

    fetch(`https://backend-test-yeyr.onrender.com/api/products`)
      .then((res) => res.json())
      .then((data: ProductStyleHeading[]) => {
        // Fix 7: replaced any in .then callback
        const product = (data || []).find(
          (item) => Number(item.id) === Number(productId),
        );

        setTypeStyleHeading(product || null);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  /* AUTO SCROLL TO TYPES SECTION */
  useEffect(() => {
    if (typeId && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [typeId, productTypes]);

  /* SCROLLBAR LOGIC */
  useEffect(() => {
    const container = scrollRef.current;
    const thumb = thumbRef.current;

    if (!container || !thumb) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;

      const trackHeight = 390 - 80;
      const top = (scrollTop / scrollHeight) * trackHeight;

      thumb.style.top = `${top}px`;
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [productTypes]);

  const visibleItems = productTypes;
  const showScroll = visibleItems.length > 3;

  if (!visibleItems.length) return null;

  return (
    <section
      ref={sectionRef}
      className="tp-about-campus-info-area px-0 pt-30 pb-10 g-0"
    >
      <div className="container px-0">
        <div className="row align-items-start">
          <hr style={{ marginBottom: "25px" }} />

          <h5
            style={{
              color: "#292929",
              marginBottom: "25px",
              fontSize: "25px",
            }}
          >
            {typeStyleHeading?.type_style_title
              ? `${typeStyleHeading.type_style_title}`
              : "Types of Products"}
          </h5>

          {/* LEFT SIDE */}
          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="row g-0">
              <div className="col-11">
                <div
                  ref={scrollRef}
                  className="d-flex flex-column"
                  style={{
                    height: "390px",
                    overflowY: showScroll ? "scroll" : "hidden",
                    paddingRight: "10px",
                    color: "#292929",
                  }}
                >
                  {visibleItems.map((item, index, arr) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveType(item)}
                      className="tp-event-3-item d-flex align-items-center-stretch"
                      style={{
                        height: "120px",
                        minHeight: "120px",
                        flexShrink: 0,
                        marginBottom: index !== arr.length - 1 ? "15px" : "0px",
                        padding: 0,
                        borderRadius: "10px",
                        cursor: "pointer",
                        background:
                          activeType?.id === item.id
                            ? "#eef2ff"
                            : "transparent",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        className="tp-event-3-content d-flex flex-column justify-content-center"
                        style={{
                          flex: 1,
                          paddingLeft: "15px",
                          marginRight: "20px",
                          minWidth: 0,
                        }}
                      >
                        <div className="mb-1" style={{ fontSize: "18px" }}>
                          <h5 style={{ fontSize: "18px" }}>{item.name}</h5>
                        </div>

                        <span
                          className="text-muted small"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.2",
                          }}
                        >
                          {item.product_type}
                        </span>
                      </div>

                      <div
                        className="tp-event-3-thumb position-relative"
                        style={{
                          width: "clamp(80px, 25vw, 180px)",
                          maxWidth: "clamp(80px, 25vw, 180px)",
                          alignSelf: "stretch",
                          borderRadius: "10px",
                          overflow: "hidden",
                          background: "#f8f8f8",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={`https://backend-test-yeyr.onrender.com/uploads/${item.image}`}
                          alt={item.name}
                          fill
                          sizes="(max-width: 576px) 25vw, (max-width: 768px) 25vw, 180px"
                          style={{
                            objectFit: "contain",
                            objectPosition: "top",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SCROLLBAR */}
              {showScroll && (
                <div className="col-1 d-none d-lg-flex justify-content-center">
                  <div
                    style={{
                      height: "390px",
                      width: "8px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(to bottom, #e0e0e0, #cfcfcf)",
                      boxShadow: "inset 0 0 5px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                  >
                    <div
                      ref={thumbRef}
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "80px",
                        borderRadius: "10px",
                        background: "linear-gradient(180deg, #1d3a72, #292929)",
                        boxShadow: "0 0 8px rgba(29,58,114,0.6)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8 col-12 pe-0">
            {activeType && (
              <div
                className="tp-event-3-item mb-4"
                style={{
                  backgroundColor: "#f3f4f8",
                  borderRadius: "10px",
                }}
              >
                <ErithTypesBottom product={activeType} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
