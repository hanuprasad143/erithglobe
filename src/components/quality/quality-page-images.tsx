// import Image from "next/image";
// import ab_img_1 from "@/assets/img/about/4/new/img1.jpg";
// import ab_img_2 from "@/assets/img/about/4/new/img2.jpg";
// import ab_img_3 from "@/assets/img/about/4/new/img3.jpg";
// import ab_img_4 from "@/assets/img/about/4/new/img4.jpg";
// import ab_img_5 from "@/assets/img/about/4/new/img5.jpg";
// import ab_img_6 from "@/assets/img/about/4/new/img6.jpg";
// import ab_img_7 from "@/assets/img/about/4/new/img7.jpg";
// import ab_img_8 from "@/assets/img/about/4/new/img8.jpg";
// import ab_img_9 from "@/assets/img/about/4/new/img9.jpg";
// import Link from "next/link";
// import { useState } from "react";

// const thumbs = [
//   { id: 1, img: ab_img_1, title: "Chemical", slug: "chemical-processing" },
//   { id: 2, img: ab_img_2, title: "Data Center", slug: "data-center" },
//   {
//     id: 3,
//     img: ab_img_3,
//     title: "Fertilizer & Cement",
//     slug: "fertilizer-cement",
//   },
//   {
//     id: 4,
//     img: ab_img_4,
//     title: "Food, Pharma & Beverage",
//     slug: "food-pharma-beverage",
//   },
//   {
//     id: 5,
//     img: ab_img_5,
//     title: "Future Energy",
//     slug: "future-energy-hydrogen",
//   },
//   { id: 6, img: ab_img_6, title: "Infrastructure", slug: "infrastructure" },
//   { id: 7, img: ab_img_7, title: "Marine", slug: "marine" },

//   { id: 8, img: ab_img_8, title: "Mining", slug: "mining" },
//   { id: 9, img: ab_img_9, title: "Nuclear", slug: "nuclear" },
//   // { id: 10, img: ab_img_5, title: "Oil & Gas", slug: "oil-gas" },
//   // { id: 11, img: ab_img_12, title: "Paper & Pulp", slug: "paper-pulp" },
//   // { id: 12, img: ab_img_9, title: "Petro Chemical", slug: "petrochemical" },

//   // {
//   //   id: 13,
//   //   img: ab_img_8,
//   //   title: "Power Generation",
//   //   slug: "power-generation",
//   // },

//   // {
//   //   id: 14,
//   //   img: ab_img_15,
//   //   title: "Steel Manufacturing",
//   //   slug: "steel-manufacturing",
//   // },

//   // {
//   //   id: 15,
//   //   img: ab_img_13,
//   //   title: "Water Management",
//   //   slug: "water-management",
//   // },

//   // { id: 2, img: ab_img_6, title: "Power Generation" },
//   // { id: 3, img: ab_img_7, title: "Petro Chemical" },
//   // { id: 4, img: ab_img_8, title: "Nuclear" },
//   // { id: 5, img: ab_img_9, title: "Marine" },
//   // { id: 6, img: ab_img_10, title: "Paper & Pulp" },
//   // { id: 7, img: ab_img_11, title: "Water Management" },
//   // { id: 8, img: ab_img_12, title: "Food, Pharma & Beverage" },
//   // { id: 9, img: ab_img_13, title: "Steel Manufacturing" },
//   // { id: 10, img: ab_img_14, title: "Chemical" },
//   // { id: 11, img: ab_img_15, title: "Future Energy" },
//   // { id: 12, img: ab_img_16, title: "Infrastructure" },
//   // { id: 13, img: ab_img_17, title: "Mining" },
// ];

// const bigStyle = {
//   position: "relative",
//   width: "100%",
//   height: "100%",
//   minHeight: "460px", // 🔥 controls full height
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const smallStyle = {
//   position: "relative",
//   width: "100%",
//   height: "220px",
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const bottomStyle = {
//   position: "relative",
//   width: "100%",
//   height: "200px",
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const overlayStyle = {
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   padding: "10px",
//   background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
//   color: "#fff",
//   textAlign: "center",
// };
// export default function QualityPage() {
//   const [showPDF, setShowPDF] = useState(false);
//   return (
//     <section className="about-area white-bg pt-0 pb-0 mt-5">
//       <div className="container">
//         {/* <h3
//           className="tp-about-campus-title mb-3"
//           style={{ marginBottom: "30px", color: "#1d3a72", fontSize: "40px" }}
//         >
//           Products, Machinery & Engineers in Action
//         </h3> */}
//         {/* <h2
//           style={{
//             fontSize: "25px",
//             color: "#292929",
//             marginBottom: "10px",
//           }}
//         >
//           PRECISION IN EVERY PACKAGE
//         </h2> */}
//         <div className="row">
//           <div className="col-lg-12 mb-4">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "start",
//                 flexWrap: "wrap",
//               }}
//             >
//               <h2 style={{ fontSize: "25px", color: "#292929" }}>
//                 PRECISION IN EVERY PACKAGE
//               </h2>
//             </div>
//           </div>
//         </div>
//         <h4 style={{ color: "#292929", fontSize: "18px" }} className="mb-4">
//           OUR MANUFACTURING EXCELLENCE UNVEILED
//         </h4>
//         <p className="mb-2" style={{ lineHeight: 1.2, color: "#292929" }}>
//           At Erith Industries, our commitment to excellence extends to every
//           aspect of our operations, including the meticulous packaging of our
//           products. Each package is a testament to our dedication to quality and
//           precision.
//         </p>
//         <p>
//           Our state-of-the-art manufacturing facility employs cutting-edge
//           packaging technology, ensuring that every product reaches you in opti-
//           mal condition. From securing fragile components to preserving the
//           integrity of intricate machinery, our packaging process is a seamless
//           blend of efficiency and care. We understand that the journey of our
//           products continues beyond our facility, and our packaging reflects our
//           promise to deliver excellence at every stage.
//         </p>

//         <div className="row align-items-stretch">
//           {/* Left large image */}
//           {/* <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 d-flex">
//             <div className="tp-about-big-img flex-fill position-relative">
//               <Image
//                 src={thumbs[0].img}
//                 alt="Main Image"
//                 className="img-fluid rounded shadow-sm"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//               <div className="image-overlay">
//                 <span>{thumbs[0].title}</span>
//               </div>
//             </div>
//           </div> */}

//           {/* Right grid - 3 images per row */}
//           <div className="container">
//             <div className="row g-3">
//               {/* TOP SECTION */}
//               <div className="col-lg-12">
//                 <div className="row g-3 align-items-stretch">
//                   {/* IMAGE 1 (LEFT BIG) */}
//                   <div className="col-lg-3">
//                     <Link
//                       href={`/industries/${thumbs[0]?.slug}`}
//                       className="d-block h-100"
//                     >
//                       <div style={bigStyle}>
//                         <Image
//                           src={thumbs[0]?.img}
//                           alt="img1"
//                           fill
//                           style={{ objectFit: "cover" }}
//                         />
//                         <div style={overlayStyle}>{thumbs[0]?.title}</div>
//                       </div>
//                     </Link>
//                   </div>

//                   {/* MIDDLE 4 IMAGES (2x2) */}
//                   <div className="col-lg-6">
//                     <div className="row g-3 h-100">
//                       {[1, 2, 3, 4].map((i, index) => {
//                         const thumb = thumbs[i];
//                         return (
//                           <div key={thumb?.id} className="col-6">
//                             <Link
//                               href={`/industries/${thumb?.slug}`}
//                               className="d-block h-100"
//                             >
//                               <div style={smallStyle}>
//                                 <Image
//                                   src={thumb?.img}
//                                   alt={`img${i}`}
//                                   fill
//                                   style={{ objectFit: "cover" }}
//                                 />
//                                 <div style={overlayStyle}>{thumb?.title}</div>
//                               </div>
//                             </Link>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* IMAGE 6 (RIGHT BIG) */}
//                   <div className="col-lg-3">
//                     <Link
//                       href={`/industries/${thumbs[5]?.slug}`}
//                       className="d-block h-100"
//                     >
//                       <div style={bigStyle}>
//                         <Image
//                           src={thumbs[5]?.img}
//                           alt="img6"
//                           fill
//                           style={{ objectFit: "cover" }}
//                         />
//                         <div style={overlayStyle}>{thumbs[5]?.title}</div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* BOTTOM ROW (3 IMAGES) */}
//               <div className="col-lg-12">
//                 <div className="row g-3">
//                   {thumbs.slice(6, 9).map((thumb) => (
//                     <div key={thumb.id} className="col-lg-4">
//                       <Link
//                         href={`/industries/${thumb.slug}`}
//                         className="d-block"
//                       >
//                         <div style={bottomStyle}>
//                           <Image
//                             src={thumb.img}
//                             alt={`img-${thumb.id}`}
//                             fill
//                             style={{ objectFit: "cover" }}
//                           />
//                           <div style={overlayStyle}>{thumb.title}</div>
//                         </div>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import ab_img_1 from "@/assets/img/about/4/new/img1.jpg";
// import ab_img_2 from "@/assets/img/about/4/new/img2.jpg";
// import ab_img_3 from "@/assets/img/about/4/new/img3.jpg";
// import ab_img_4 from "@/assets/img/about/4/new/img4.jpg";
// import ab_img_5 from "@/assets/img/about/4/new/img5.jpg";
// import ab_img_6 from "@/assets/img/about/4/new/img6.jpg";
// import ab_img_7 from "@/assets/img/about/4/new/img7.jpg";
// import ab_img_8 from "@/assets/img/about/4/new/img8.jpg";
// import ab_img_9 from "@/assets/img/about/4/new/img9.jpg";
// import Link from "next/link";

// const thumbs = [
//   { id: 1, img: ab_img_1, title: "Chemical", slug: "chemical-processing" },
//   { id: 2, img: ab_img_2, title: "Data Center", slug: "data-center" },
//   { id: 3, img: ab_img_3, title: "Fertilizer & Cement", slug: "fertilizer-cement" },
//   { id: 4, img: ab_img_4, title: "Food, Pharma & Beverage", slug: "food-pharma-beverage" },
//   { id: 5, img: ab_img_5, title: "Future Energy", slug: "future-energy-hydrogen" },
//   { id: 6, img: ab_img_6, title: "Infrastructure", slug: "infrastructure" },
//   { id: 7, img: ab_img_7, title: "Marine", slug: "marine" },
//   { id: 8, img: ab_img_8, title: "Mining", slug: "mining" },
//   { id: 9, img: ab_img_9, title: "Nuclear", slug: "nuclear" },
// ];

// const bigStyle = {
//   position: "relative",
//   width: "100%",
//   height: "100%",
//   minHeight: "460px",
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const smallStyle = {
//   position: "relative",
//   width: "100%",
//   height: "220px",
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const bottomStyle = {
//   position: "relative",
//   width: "100%",
//   height: "200px",
//   borderRadius: "12px",
//   overflow: "hidden",
// };

// const overlayStyle = {
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   padding: "10px",
//   background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
//   color: "#fff",
//   textAlign: "center",
// };

// export default function QualityPage() {
//   return (
//     <section className="about-area white-bg pt-0 pb-0 mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 mb-4">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "start",
//                 flexWrap: "wrap",
//               }}
//             >
//               <h2 style={{ fontSize: "25px", color: "#292929" }}>
//                 PRECISION IN EVERY PACKAGE
//               </h2>
//             </div>
//           </div>
//         </div>
//         <h4 style={{ color: "#292929", fontSize: "18px" }} className="mb-4">
//           OUR MANUFACTURING EXCELLENCE UNVEILED
//         </h4>
//         <p className="mb-2" style={{ lineHeight: 1.2, color: "#292929" }}>
//           At Erith Industries, our commitment to excellence extends to every
//           aspect of our operations, including the meticulous packaging of our
//           products. Each package is a testament to our dedication to quality and
//           precision.
//         </p>
//         <p>
//           Our state-of-the-art manufacturing facility employs cutting-edge
//           packaging technology, ensuring that every product reaches you in opti-
//           mal condition. From securing fragile components to preserving the
//           integrity of intricate machinery, our packaging process is a seamless
//           blend of efficiency and care. We understand that the journey of our
//           products continues beyond our facility, and our packaging reflects our
//           promise to deliver excellence at every stage.
//         </p>

//         <div className="row align-items-stretch">
//           <div className="container">
//             <div className="row g-3">

//               {/* TOP SECTION */}
//               <div className="col-lg-12">
//                 <div className="row g-3 align-items-stretch">

//                   {/* IMAGE 1 (LEFT BIG) */}
//                   <div className="col-12 col-lg-3">
//                     <Link href={`/industries/${thumbs[0]?.slug}`} className="d-block h-100">
//                       <div style={bigStyle}>
//                         <Image
//                           src={thumbs[0]?.img}
//                           alt="img1"
//                           fill
//                           sizes="(max-width: 992px) 100vw, 25vw"
//                           style={{ objectFit: "cover" }}
//                         />
//                         <div style={overlayStyle}>{thumbs[0]?.title}</div>
//                       </div>
//                     </Link>
//                   </div>

//                   {/* MIDDLE 4 IMAGES (2x2) */}
//                   <div className="col-12 col-lg-6">
//                     <div className="row g-3 h-100">
//                       {[1, 2, 3, 4].map((i) => {
//                         const thumb = thumbs[i];
//                         return (
//                           <div key={thumb?.id} className="col-6">
//                             <Link href={`/industries/${thumb?.slug}`} className="d-block h-100">
//                               <div style={smallStyle}>
//                                 <Image
//                                   src={thumb?.img}
//                                   alt={`img${i}`}
//                                   fill
//                                   sizes="(max-width: 992px) 50vw, 12vw"
//                                   style={{ objectFit: "cover" }}
//                                 />
//                                 <div style={overlayStyle}>{thumb?.title}</div>
//                               </div>
//                             </Link>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* IMAGE 6 (RIGHT BIG) */}
//                   <div className="col-12 col-lg-3">
//                     <Link href={`/industries/${thumbs[5]?.slug}`} className="d-block h-100">
//                       <div style={bigStyle}>
//                         <Image
//                           src={thumbs[5]?.img}
//                           alt="img6"
//                           fill
//                           sizes="(max-width: 992px) 100vw, 25vw"
//                           style={{ objectFit: "cover" }}
//                         />
//                         <div style={overlayStyle}>{thumbs[5]?.title}</div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* BOTTOM ROW (3 IMAGES) */}
//               <div className="col-lg-12">
//                 <div className="row g-3">
//                   {thumbs.slice(6, 9).map((thumb) => (
//                     <div key={thumb.id} className="col-12 col-sm-6 col-lg-4">
//                       <Link href={`/industries/${thumb.slug}`} className="d-block">
//                         <div style={bottomStyle}>
//                           <Image
//                             src={thumb.img}
//                             alt={`img-${thumb.id}`}
//                             fill
//                             sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
//                             style={{ objectFit: "cover" }}
//                           />
//                           <div style={overlayStyle}>{thumb.title}</div>
//                         </div>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//         <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
//       </div>
//     </section>
//   );
// }
// import Image from "next/image";
// import ab_img_1 from "@/assets/img/about/4/new/img1.jpg";
// import ab_img_2 from "@/assets/img/about/4/new/img2.jpg";
// import ab_img_3 from "@/assets/img/about/4/new/img3.jpg";
// import ab_img_4 from "@/assets/img/about/4/new/img4.jpg";
// import ab_img_5 from "@/assets/img/about/4/new/img5.jpg";
// import ab_img_6 from "@/assets/img/about/4/new/img6.jpg";
// import ab_img_7 from "@/assets/img/about/4/new/img7.jpg";
// import ab_img_8 from "@/assets/img/about/4/new/img8.jpg";
// import ab_img_9 from "@/assets/img/about/4/new/img9.jpg";
// import Link from "next/link";

// const thumbs = [
//   { id: 1, img: ab_img_1, title: "Chemical", slug: "chemical-processing" },
//   { id: 2, img: ab_img_2, title: "Data Center", slug: "data-center" },
//   { id: 3, img: ab_img_3, title: "Fertilizer & Cement", slug: "fertilizer-cement" },
//   { id: 4, img: ab_img_4, title: "Food, Pharma & Beverage", slug: "food-pharma-beverage" },
//   { id: 5, img: ab_img_5, title: "Future Energy", slug: "future-energy-hydrogen" },
//   { id: 6, img: ab_img_6, title: "Infrastructure", slug: "infrastructure" },
//   { id: 7, img: ab_img_7, title: "Marine", slug: "marine" },
//   { id: 8, img: ab_img_8, title: "Mining", slug: "mining" },
//   { id: 9, img: ab_img_9, title: "Nuclear", slug: "nuclear" },
// ];

// const overlayStyle: React.CSSProperties = {
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   padding: "10px",
//   background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
//   color: "#fff",
//   textAlign: "center",
// };

// export default function QualityPage() {
//   return (
//     <section className="about-area white-bg pt-0 pb-0 mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 mb-4">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "start",
//                 flexWrap: "wrap",
//               }}
//             >
//               <h2 style={{ fontSize: "25px", color: "#292929" }}>
//                 PRECISION IN EVERY PACKAGE
//               </h2>
//             </div>
//           </div>
//         </div>
//         <h4 style={{ color: "#292929", fontSize: "18px" }} className="mb-4">
//           OUR MANUFACTURING EXCELLENCE UNVEILED
//         </h4>
//         <p className="mb-2" style={{ lineHeight: 1.2, color: "#292929" }}>
//           At Erith Industries, our commitment to excellence extends to every
//           aspect of our operations, including the meticulous packaging of our
//           products. Each package is a testament to our dedication to quality and
//           precision.
//         </p>
//         <p>
//           Our state-of-the-art manufacturing facility employs cutting-edge
//           packaging technology, ensuring that every product reaches you in
//           optimal condition. From securing fragile components to preserving the
//           integrity of intricate machinery, our packaging process is a seamless
//           blend of efficiency and care. We understand that the journey of our
//           products continues beyond our facility, and our packaging reflects our
//           promise to deliver excellence at every stage.
//         </p>

//         <div className="row align-items-stretch">
//           <div className="container">
//             <div className="row g-3">

//               {/* TOP SECTION */}
//               <div className="col-lg-12">
//                 <div className="row g-3 align-items-stretch">

//                   {/* IMAGE 1 (LEFT BIG) */}
//                   <div className="col-12 col-lg-3">
//                     <div className="d-block">
//                       <div style={{ position: "relative", width: "100%", height: "460px", borderRadius: "12px", overflow: "hidden" }}>
//                         <Image
//                           src={thumbs[0]?.img}
//                           alt="img1"
//                           width={0}
//                           height={0}
//                           sizes="(max-width: 992px) 100vw, 25vw"
//                           style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
//                         />
//                         {/* <div style={overlayStyle}>{thumbs[0]?.title}</div> */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* MIDDLE 4 IMAGES (2x2) */}
//                   <div className="col-12 col-lg-6">
//                     <div className="row g-3">
//                       {[1, 2, 3, 4].map((i) => {
//                         const thumb = thumbs[i];
//                         return (
//                           <div key={thumb?.id} className="col-6">
//                             <div className="d-block">
//                               <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
//                                 <Image
//                                   src={thumb?.img}
//                                   alt={`img${i}`}
//                                   width={0}
//                                   height={0}
//                                   sizes="(max-width: 992px) 50vw, 12vw"
//                                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                 />
//                                 {/* <div style={overlayStyle}>{thumb?.title}</div> */}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* IMAGE 6 (RIGHT BIG) */}
//                   <div className="col-12 col-lg-3">
//                     <div className="d-block">
//                       <div style={{ position: "relative", width: "100%", height: "460px", borderRadius: "12px", overflow: "hidden" }}>
//                         <Image
//                           src={thumbs[5]?.img}
//                           alt="img6"
//                           width={0}
//                           height={0}
//                           sizes="(max-width: 992px) 100vw, 25vw"
//                           style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
//                         />
//                         {/* <div style={overlayStyle}>{thumbs[5]?.title}</div> */}
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>

//               {/* BOTTOM ROW (3 IMAGES) */}
//               <div className="col-lg-12">
//                 <div className="row g-3">
//                   {thumbs.slice(6, 9).map((thumb) => (
//                     <div key={thumb.id} className="col-12 col-sm-4 col-lg-4">
//                       <div className="d-block">
//                         <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden" }}>
//                           <Image
//                             src={thumb.img}
//                             alt={`img-${thumb.id}`}
//                             width={0}
//                             height={0}
//                             sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
//                             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                           />
//                           {/* <div style={overlayStyle}>{thumb.title}</div> */}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//         <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import ab_img_1 from "@/assets/img/about/4/new/img1.jpg";
import ab_img_2 from "@/assets/img/about/4/new/img2.jpg";
import ab_img_3 from "@/assets/img/about/4/new/img3.jpg";
import ab_img_4 from "@/assets/img/about/4/new/img4.jpg";
import ab_img_5 from "@/assets/img/about/4/new/img5.jpg";
import ab_img_6 from "@/assets/img/about/4/new/img6.jpg";
import ab_img_7 from "@/assets/img/about/4/new/img7.jpg";
import ab_img_8 from "@/assets/img/about/4/new/img8.jpg";
import ab_img_9 from "@/assets/img/about/4/new/img9.jpg";
import ab_img_10 from "@/assets/img/about/4/new/machine1.jpg";
import ab_img_11 from "@/assets/img/about/4/new/machine2.jpg";
import ab_img_12 from "@/assets/img/about/4/new/machine3.jpg";
import ab_img_13 from "@/assets/img/about/4/new/machine4.jpg";
import ab_img_14 from "@/assets/img/about/4/new/machine5.jpg";
import ab_img_15 from "@/assets/img/about/4/new/machine6.jpg";

// import Link from "next/link";

const thumbs = [
  { id: 1, img: ab_img_1, title: "Chemical", slug: "chemical-processing" },
  { id: 2, img: ab_img_2, title: "Data Center", slug: "data-center" },
  {
    id: 3,
    img: ab_img_3,
    title: "Fertilizer & Cement",
    slug: "fertilizer-cement",
  },
  {
    id: 4,
    img: ab_img_4,
    title: "Food, Pharma & Beverage",
    slug: "food-pharma-beverage",
  },
  {
    id: 5,
    img: ab_img_5,
    title: "Future Energy",
    slug: "future-energy-hydrogen",
  },
  { id: 6, img: ab_img_6, title: "Infrastructure", slug: "infrastructure" },
  { id: 7, img: ab_img_7, title: "Marine", slug: "marine" },
  { id: 8, img: ab_img_8, title: "Mining", slug: "mining" },
  { id: 9, img: ab_img_9, title: "Nuclear", slug: "nuclear" },
  {
    id: 10,
    img: ab_img_10,
    title: "SPW VERTICAL WINDING MACHINE PX500D",
    desc: "Automatic numerical control Spiral winding machine. Can generate windings from ½” to 12” with or without inner ring. PX500D has updated many main parts like PLC, touch screen, servo driver, and welding control parts, the program is also updated. PX500D has improved a lot in production speed, machine steadiness, welding quality, and gasket finish. PX500D is the most popular and important machine for spiral wound gasket manufacturing.",
  },

  {
    id: 11,
    img: ab_img_11,
    title: "CLICKER PRESS TO PUNCH FLAT GASKETS FROM SHEETS",
    desc: "Machine is used to punch smaller sizes of Fibre, rubber. PTFE gaskets as per different size of dies/punches. It helps in mass production when very small gaskets are difficult to be managed on the faster cutting machine.",
  },
  {
    id: 12,
    img: ab_img_12,
    title: "KAMMPROFILE MACHINE",
    desc: "A CNC machine with variable speed and feed control, designed for high-precision machining operations.It efficiently produces outer rings, inner rings, and kammprofile gaskets (500–4000 mm) with accurate grooving, chamfering, and profiling in a single setup.",
  },
  {
    id: 13,
    img: ab_img_13,
    title: "LASER MARKING MACHINE",
    desc: "Precise marking solutions for metallic gaskets and solid metal gaskets.Faster turn around with quick results.",
  },
  {
    id: 14,
    img: ab_img_14,
    title: "SPW HORIZONTAL WINDING MACHINE FOR LARGE DIAMETERS PX2500C-3",
    desc: "PX2500C-3 Semi-automatic horizontal winder is improved version of previous model, its size controlling, spot welding function, machine strength to manufacture SPW size up to 4 mts in diameter. To make the operating more convenient for the operator, the new version machine uses 8 supporting stands to support the gasket. And the new version machine moves the HMI screen on left top of the machine, this arrangement allow the worker operating the machine easier.",
  },
  {
    id: 15,
    img: ab_img_15,
    title: "SMALL LATHE MACHINE",
    desc: "This machine is used to groove smaller outer and inner rings.It is also used to make tools and punches.",
  },
];

// const overlayStyle: React.CSSProperties = {
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   padding: "10px",
//   background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
//   color: "#fff",
//   textAlign: "center",
// };

const SIDE_HEIGHT = 460;
const HALF_HEIGHT = SIDE_HEIGHT / 2 - 6; // subtract half the gap (12px/2)

const selectedThumbs = [thumbs[1], thumbs[4], thumbs[3], thumbs[6]];

export default function QualityPage() {
  return (
    <section className="about-area white-bg pt-0 pb-0 mt-0">
      <div className="container">
        {/* HEADING */}
        {/* <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ fontSize: "25px", color: "#292929" }}>
                PRECISION IN EVERY PACKAGE
              </h2>
            </div>
          </div>
        </div>
        <h4 style={{ color: "#292929", fontSize: "18px" }} className="mb-4">
          OUR MANUFACTURING EXCELLENCE UNVEILED
        </h4>
        <p className="mb-2" style={{ lineHeight: 1.2, color: "#292929" }}>
          At Erith Industries, our commitment to excellence extends to every
          aspect of our operations, including the meticulous packaging of our
          products. Each package is a testament to our dedication to quality and
          precision.
        </p>
        <p>
          Our state-of-the-art manufacturing facility employs cutting-edge
          packaging technology, ensuring that every product reaches you in
          optimal condition. From securing fragile components to preserving the
          integrity of intricate machinery, our packaging process is a seamless
          blend of efficiency and care. We understand that the journey of our
          products continues beyond our facility, and our packaging reflects our
          promise to deliver excellence at every stage.
        </p> */}

        <div className="tp-about-campus-info-content">
          <h5
            style={{
              color: "#292929",
              marginBottom: "30px",
              fontSize: "25px",
              lineHeight: "1.2",
            }}
          >
            PRECISION IN EVERY PACKAGE
          </h5>
          <p
            style={{
              fontSize: "18px",
              color: "#292929",
              fontWeight: "bold",
            }}
          >
            OUR MANUFACTURING EXCELLENCE UNVEILED
          </p>

          <p
            className="mb-4"
            style={{
              lineHeight: 1.3,
              color: "#292929",
              fontSize: "15px",
            }}
          >
            At Erith Industries, our commitment to excellence extends to every
            aspect of our operations, including the meticulous packaging of our
            products. Each package is a testament to our dedication to quality
            and precision.
            <br />
            Our state-of-the-art manufacturing facility employs cutting-edge
            packaging technology, ensuring that every product reaches you in
            optimal condition. From securing fragile components to preserving
            the integrity of intricate machinery, our packaging process is a
            seamless blend of efficiency and care. We understand that the
            journey of our products continues beyond our facility, and our
            packaging reflects our promise to deliver excellence at every stage.
          </p>

          <p
            style={{
              // fontSize: "15px",
              color: "#292929",
              lineHeight: "1.3",
            }}
          ></p>
        </div>

        {/* ── FIRST GRID ── */}
        <div className="row align-items-stretch">
          <div className="container">
            <div className="row g-3">
              {/* TOP SECTION */}
              <div className="col-lg-12">
                <div className="row g-3 align-items-stretch">
                  {/* IMAGE 1 (LEFT BIG) */}
                  <div className="col-12 col-lg-3">
                    <div
                      // href={`/industries/${thumbs[0]?.slug}`}
                      className="d-block"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: `${SIDE_HEIGHT}px`,
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={thumbs[0]?.img}
                          alt="img1"
                          width={0}
                          height={0}
                          sizes="(max-width: 992px) 100vw, 25vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                        {/* <div style={overlayStyle}>{thumbs[0]?.title}</div> */}
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE 4 IMAGES (2x2) */}
                  <div className="col-12 col-lg-6">
                    <div className="row g-3">
                      {selectedThumbs.map((thumb, index) => (
                        <div key={index} className="col-6">
                          <div className="d-block">
                            <div
                              style={{
                                position: "relative",
                                width: "100%",
                                height: "220px",
                                borderRadius: "12px",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                src={thumb?.img}
                                alt={thumb?.title}
                                width={0}
                                height={0}
                                sizes="(max-width: 992px) 50vw, 12vw"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IMAGE 6 (RIGHT BIG) */}
                  <div className="col-12 col-lg-3">
                    <div
                      // href={`/industries/${thumbs[5]?.slug}`}
                      className="d-block"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: `${SIDE_HEIGHT}px`,
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={thumbs[5]?.img}
                          alt="img6"
                          width={0}
                          height={0}
                          sizes="(max-width: 992px) 100vw, 25vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                        {/* <div style={overlayStyle}>{thumbs[5]?.title}</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW (3 IMAGES) */}
              {/* <div className="col-lg-12">
                <div className="row g-3">
                  {thumbs.slice(6, 9).map((thumb) => (
                    <div key={thumb.id} className="col-12 col-sm-4 col-lg-4">
                      <div
                        href={`/industries/${thumb.slug}`}
                        className="d-block"
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "200px",
                            borderRadius: "12px",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={thumb.img}
                            alt={`img-${thumb.id}`}
                            width={0}
                            height={0}
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <div style={overlayStyle}>{thumb.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "20px", marginTop: "25px" }} />

        {/* ── SECOND GRID HEADING ── */}
        {/* <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ fontSize: "25px", color: "#292929" }}>
                MACHINERY MASTERY
              </h2>
            </div>
          </div>
        </div>

        <h4 style={{ color: "#292929", fontSize: "18px" }} className="mb-4">
          CRAFTING EXCELLENCE AT ERITH INDUSTRIES
        </h4>
        <p className="mb-2" style={{ lineHeight: 1.2, color: "#292929" }}>
          Erith Industries’ cutting-edge machinery embodies precision and
          efficiency, showcasing our commitment to excellence. The ZUND Cutter
          ensures automated precision in gasket crafting, while the SPW PX500D
          and PX2500C-3 enhance spiral winding capabilities. The CLICKER PRESS
          streamlines mass production of smaller gaskets. Our KAMMPROFILE
          MACHINE, a pinnacle of computerized precision, crafts outer rings,
          inner rings, and Kammprofile gaskets. The Small Lathe and Laser
          Marking Machine complement these, handling intricate tasks swiftly.
          This comprehensive suite positions Erith Industries as a beacon of
          manufacturing excellence, meeting industry demands with precision and
          speed.
        </p> */}

        <div className="tp-about-campus-info-content">
          <h5
            style={{
              color: "#292929",
              marginBottom: "30px",
              fontSize: "25px",
              lineHeight: "1.2",
            }}
          >
            MACHINERY MASTERY
          </h5>
          <p
            style={{
              fontSize: "18px",
              color: "#292929",
              fontWeight: "bold",
            }}
          >
            CRAFTING EXCELLENCE AT ERITH INDUSTRIES
          </p>

          <p
            className="mb-4"
            style={{
              lineHeight: 1.3,
              color: "#292929",
              fontSize: "15px",
            }}
          >
            Erith Industries’ cutting-edge machinery embodies precision and
            efficiency, showcasing our commitment to excellence. The ZUND Cutter
            ensures automated precision in gasket crafting, while the SPW PX500D
            and PX2500C-3 enhance spiral winding capabilities. The CLICKER PRESS
            streamlines mass production of smaller gaskets. Our KAMMPROFILE
            MACHINE, a pinnacle of computerized precision, crafts outer rings,
            inner rings, and Kammprofile gaskets. The Small Lathe and Laser
            Marking Machine complement these, handling intricate tasks swiftly.
            This comprehensive suite positions Erith Industries as a beacon of
            manufacturing excellence, meeting industry demands with precision
            and speed.
          </p>

          <p
            style={{
              // fontSize: "15px",
              color: "#292929",
              lineHeight: "1.3",
            }}
          ></p>
        </div>

        {/* ── SECOND GRID ──
            [ img1 (full height) ] [ video (half) ] [ img2 (full height) ]
            [ img1 (full height) ] [ img3 | img4 (half) ] [ img2 (full height) ]
            [ img5 (50%) ] [ img6 (50%) ]
        */}
        {/* ── SECOND GRID ── */}
        {/* ── SECOND GRID ── */}
        {/* ══════════════════════════════════
    SECOND GRID — Machine images
══════════════════════════════════ */}
        <div className="row g-3 pt-10">
          {/* LEFT BIG — machine1 */}
          <div className="col-12 col-lg-3">
            <div className="img-card" style={{ height: `${SIDE_HEIGHT}px` }}>
              <Image
                src={thumbs[9].img}
                alt={thumbs[9].title}
                width={0}
                height={0}
                sizes="(max-width: 992px) 100vw, 25vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* <div className="img-overlay">{thumbs[9].title}
                {thumbs[9].desc}
              </div> */}
              <div className="img-overlay">
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fecb00",
                  }}
                >
                  {thumbs[9].title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.85,
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {thumbs[9].desc}
                </p>
              </div>
            </div>
          </div>

          {/* CENTER — video top + machine3 | machine4 bottom */}
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              {/* Video — no overlay needed */}
              {/* <div className="col-12">
        <div style={{ borderRadius: "12px", overflow: "hidden", background: "#000", height: `${HALF_HEIGHT}px` }}>
          <video
            src="/assets/img/about/4/new/machine_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div> */}
              {/* Video — with hover overlay */}
              <div className="col-12">
                <div
                  className="img-card"
                  style={{ background: "#000", height: `${HALF_HEIGHT}px` }}
                >
                  <video
                    src="/assets/img/about/4/new/machine_video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="img-overlay">Our Manufacturing Process</div>

                  <div className="img-overlay">
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#fecb00",
                        textAlign: "initial",
                      }}
                    >
                      GASKET CUTTING MACHINE- ZUND
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        opacity: 0.85,
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Zund cutter for gasket cutting applications and
                      requirements. The cutting systems and soft- ware combine
                      to form an unbeatable solution that fits seamlessly into
                      our production pro- cess with automated cutting, powerful,
                      and future-proof cutting technology
                    </p>
                  </div>
                </div>
              </div>

              {/* machine3 */}
              <div className="col-6">
                <div
                  className="img-card"
                  style={{ height: `${HALF_HEIGHT}px` }}
                >
                  <Image
                    src={thumbs[11].img}
                    alt={thumbs[11].title}
                    width={0}
                    height={0}
                    sizes="(max-width: 992px) 50vw, 12vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                  {/* <div className="img-overlay">{thumbs[11].title}</div> */}

                  <div className="img-overlay">
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#fecb00",
                        textAlign: "left",
                      }}
                    >
                      {thumbs[11].title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        opacity: 0.85,
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      {thumbs[11].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* machine4 */}
              <div className="col-6">
                <div
                  className="img-card"
                  style={{ height: `${HALF_HEIGHT}px` }}
                >
                  <Image
                    src={thumbs[12].img}
                    alt={thumbs[12].title}
                    width={0}
                    height={0}
                    sizes="(max-width: 992px) 50vw, 12vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                  {/* <div className="img-overlay">{thumbs[12].title}</div> */}
                  <div className="img-overlay">
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#fecb00",
                        textAlign: "left",
                      }}
                    >
                      {thumbs[12].title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        opacity: 0.85,
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      {thumbs[12].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BIG — machine2 */}
          <div className="col-12 col-lg-3">
            <div className="img-card" style={{ height: `${SIDE_HEIGHT}px` }}>
              <Image
                src={thumbs[10].img}
                alt={thumbs[10].title}
                width={0}
                height={0}
                sizes="(max-width: 992px) 100vw, 25vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* <div className="img-overlay">{thumbs[10].title}</div> */}
              <div className="img-overlay">
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fecb00",
                    textAlign: "left",
                  }}
                >
                  {thumbs[10].title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.85,
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {thumbs[10].desc}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — machine5 | machine6 */}
          <div className="col-12 col-sm-6">
            <div
              className="img-card"
              style={{ height: `${SIDE_HEIGHT / 2 + 50}px` }}
            >
              <Image
                src={thumbs[13].img}
                alt={thumbs[13].title}
                width={0}
                height={0}
                sizes="(max-width: 576px) 100vw, 50vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* <div className="img-overlay">{thumbs[13].title}</div> */}
              <div className="img-overlay">
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fecb00",
                    textAlign: "left",
                  }}
                >
                  {thumbs[13].title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.85,
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {thumbs[13].desc}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div
              className="img-card"
              style={{ height: `${SIDE_HEIGHT / 2 + 50}px` }}
            >
              <Image
                src={thumbs[14].img}
                alt={thumbs[14].title}
                width={0}
                height={0}
                sizes="(max-width: 576px) 100vw, 50vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* <div className="img-overlay">{thumbs[14].title}</div> */}

              <div className="img-overlay">
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fecb00",
                    textAlign: "left",
                  }}
                >
                  {thumbs[14].title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    opacity: 0.85,
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {thumbs[14].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
      </div>
      <style>{`
  .img-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px 8px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    gap: 4px;
  }
  .img-card:hover .img-overlay {
    opacity: 1;
  }
  .img-overlay p {
    margin: 0;
    line-height: 1.2;
  }
  .img-overlay p:first-child {
    font-weight: 600;
    font-size: 13px;
  }
  .img-overlay p:last-child {
    font-size: 11px;
    opacity: 0.85;
    line-height: 1.1;
  }
`}</style>
    </section>
  );
}
