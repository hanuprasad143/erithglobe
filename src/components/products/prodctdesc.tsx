// "use client";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "next/navigation";
// // import NiceSelect from "@/components/ui/nice-select";
// // import Link from "next/link";
// import product2 from "@/assets/img/products/product2.png";
// // import product6 from "@/assets/img/products/product6.png";
// import Image from "next/image";
// // import Moreproducts from "./moreproducts";
// import Features from "./features";
// // import ErithProducts from "./erithproducts";
// import ServiceFour from "./downloads";
// import RelatedProducts from "@/app/(shop)/shop-details/_components/related-products";
// // import { event_data } from "@/data/event-data";
// // import usePagination from "@/hooks/use-pagination";
// import Link from "next/link";
// // import { NextArrowFour, PrevArrowFour } from "../svg";
// // import { IBookDT } from "@/types/book-d-t";
// // import ShopDetailsBottom from "./shop-details-bottom";
// // import ShopDetailsActions from "./shop-details-actions";

// // import ErithTypesBottom from "@/app/(shop)/shop-details/_components/erith-types-bottom";
// import Typesofproducts from "./typesofProducts";

// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// const results = [
//   { id: "home", title: "Description" },
//   { id: "profile", title: "Specifications" },
//   { id: "contact", title: "Downloads" },
//   { id: "features", title: "Features & Benefits" },
//   { id: "insights", title: "Product Insights" },
// ];
// // matches /products/[slug]

// // const applicationProcess = [
// //   {
// //     step: 1,
// //     title: "Size Range",
// //     description: `NPS 2 to 24 / DN 60 to 600`,
// //     // linkText: "Application Form",
// //     // linkHref: "/university-application-form",
// //   },
// //   {
// //     step: 2,
// //     title: "Body Materials",
// //     description: `Ductile Iron, Carbon Steel (WCB) CF8 Stainless Steel, CF8M Stainless Steel, CF3M Stainless Steel`,
// //   },
// //   {
// //     step: 3,
// //     title: "Maximum Allowable Operating Pressure",
// //     description: `240psi (16bar)`,
// //   },
// //   {
// //     step: 4,
// //     title: "Stem Materials",
// //     description: `304 Stainless Steel`,
// //   },
// //   {
// //     step: 5,
// //     title: "Body Style",
// //     description: `Wafer, Two-Piece Bolted`,
// //   },
// //   {
// //     step: 6,
// //     title: "Gate Materials",
// //     description: `304, 316, 317 Stainless Steel, SAF 2507, SAF 2205,17-4PH, Hastelloy® C, Monel®`,
// //   },
// //   {
// //     step: 7,
// //     title: "Seat Material Temperature Range",
// //     description: `
// // <ul>
// //   <li>Buna-N: -34 to 194°F (-36 to 90°C)</li>
// //   <li>EPDM: -65 to 248°F (-54 to 120°C)</li>
// //   <li>Viton®: -15 to 392°F (-26 to 200°C)</li>
// // </ul>
// // `,
// //   },
// //   {
// //     step: 8,
// //     title: "Design Standard",
// //     description: `MSS SP81`,
// //   },
// //   {
// //     step: 9,
// //     title: "Packing Maximum Temperature",
// //     description: `
// // <ul>
// //   <li>PTFE/Buna-N: 194°F (90°C)</li>
// //   <li>PTFE/Viton®: 392°F (200°C)</li>
// //   <li>PTFE/EPDM: 248°F (120°C)</li>
// // </ul>
// // `,
// //   },
// //   {
// //     step: 10,
// //     title: "Testing Standard",
// //     description: `MSS SP151`,
// //   },
// //   {
// //     step: 11,
// //     title: "Liner Maximum Temperature",
// //     description: `176°F (80°C)`,
// //   },
// //   {
// //     step: 12,
// //     title: "Certifications",
// //     description: `ATEX, CRN, PED, PE(S)R, TR CU, UA TR`,
// //   },
// //   {
// //     step: 13,
// //     title: "Face to Face",
// //     description: `MSS SP81`,
// //   },
// //   {
// //     step: 14,
// //     title: "Actuator Options",
// //     description: `Handwheel, Bevel Gear, Pneumatic, Hydraulic, Electric`,
// //   },
// // ];

// // const tabContentData = [
// //   {
// //     id: "home",
// //     imgSrc: "/assets/img/products/product2.png",
// //     title: "Housing & Dining",
// //   },
// // ];

// // type IProps = {
// //   product: IBookDT;
// // };

// // const images = [product2, product6];

// export default function ProductDesc() {
//   // function handleSearch(item: { value: string; label: string }) {
//   //   console.log(item);
//   // }
//   // const { currentItems } = usePagination(event_data, 10);

//   const [activeTab, setActiveTab] = useState("home");
//   // const { category, title, image, short_desc } = product || {};

//   // const visibleItems = currentItems.slice(5);
//   // const showScroll = visibleItems.length > 3;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const params = useParams();
//   const slug = params?.slug;

//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     if (!slug) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/products/${slug}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((err) => console.log(err));
//   }, [slug]);

//   if (!data?.product) return null;

//   const {
//     product,
//     description,
//     specifications,
//     downloads,
//     features,
//     insights,
//   } = data;

//   const banner =
//     product?.banner_image && product.banner_image.startsWith("http")
//       ? product.banner_image
//       : `${IMAGE_BASE}/${product?.banner_image}`;

//   const images = banner ? [banner] : [product2];
//   // const documentTypes = [
//   //   { value: "", label: "Select a Document Type" },
//   //   { value: "all", label: "All" },
//   //   ...Array.from(new Set(downloads.map((d: any) => d.title))).map((type) => ({
//   //     value: type,
//   //     label: type,
//   //   })),
//   // ];

//   // const languages = [
//   //   { value: "", label: "Select Language" },
//   //   ...Array.from(new Set(downloads.map((d: any) => d.language))).map(
//   //     (lang) => ({
//   //       value: lang,
//   //       label: lang,
//   //     }),
//   //   ),
//   // ];
//   return (
//     <>
//       <section
//         className="tp-shop-banner p-relative pt-0 pb-10 px-0"
//         style={{ minHeight: "400px" }} // changed from fixed height
//       >
//         <div
//           className="tp-breadcrumb__bg"
//           style={{ backgroundColor: "#f3f4f8" }}
//         ></div>

//         <div className="tp-shop-banner-space p-relative fix">
//           <div className="container">
//             <div className="row align-items-center">
//               {/* TEXT */}
//               <div className="col-lg-6 text-center text-lg-start">
//                 <div className="tp-shop-banner-content">
//                   <h4
//                     style={{
//                       color: "#292929",
//                       fontWeight: "bold",
//                       // marginTop: "10px",
//                       // paddingTop: "30px",
//                       fontSize: "25px",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     {product.product_category}
//                   </h4>

//                   {/* <h3
//                     style={{
//                       color: "#fecb00",
//                       fontSize: "40px",
//                       fontWeight: "bold",
//                       marginBottom:"10px"
//                     }}
//                     className="tp-shop-banner-title display-6 display-lg-1"
//                   >
//                     {product.name}
//                   </h3> */}
//                   <h3
//                     style={{
//                       color: "#fecb00",
//                       fontSize: "40px",
//                       fontWeight: "bold",
//                       marginBottom: "10px",
//                     }}
//                     className="tp-shop-banner-title display-6 display-lg-1"
//                   >
//                     {product.name?.replace(/\-/g, "")}
//                   </h3>

//                   <p
//                     style={{ color: "#000", fontSize: "18px" }}
//                     className="px-2 px-lg-0"
//                   >
//                     {product.short_description}
//                   </p>

//                   <div
//                     className="tp-header-btn d-none d-md-block"
//                     style={{ position: "absolute", bottom: "0" }}
//                   >
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "6px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         display: "inline-block",
//                         marginTop: "20px",
//                         marginBottom: "10px",
//                         fontSize: "13px",
//                       }}
//                     >
//                       Request Quote
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* IMAGE */}
//               {/* <div className="col-lg-7 text-center mt-4 mt-lg-0">
//               <div className="tp-shop-banner-thumb">
//                 <Image
//                   src={images[currentIndex]}
//                   alt="shop-banner-img"
//                   style={{
//                     height: "auto",
//                     maxWidth: "100%",
//                   }}
//                   priority
//                 />Z
//               </div>
//             </div> */}
//               <div className="col-lg-6 text-center mt-4 mt-lg-0 pt-20 ">
//                 <div
//                   style={{
//                     height: "350px", // ✅ Standard height
//                     position: "relative",
//                     // marginTop: "20px", // ✅ space above image
//                   }}
//                 >
//                   <Image
//                     src={images[currentIndex]}
//                     alt="shop-banner-img"
//                     fill
//                     style={{
//                       objectFit: "contain", // keeps full image visible
//                     }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ARROWS */}
//         {/* <div
//           className="tp-campus-life-arrow d-flex justify-content-start mt-0"
//           style={{
//             position: "absolute",
//             left: "230px", // aligns with container padding
//             bottom: "20px",
//             gap: "0px",
//             zIndex: 5,
//           }}
//         >
//           <div className="tp-campus-prev pointer" onClick={handlePrev}>
//             <span>
//               <PrevArrowFour />
//             </span>
//           </div>

//           <div className="tp-campus-next pointer" onClick={handleNext}>
//             <span>
//               <NextArrowFour />
//             </span>
//           </div>
//         </div> */}
//       </section>
//       <section className="tp-campus-student-area white">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               {/* TABS */}
//               <div
//                 className="tp-campus-student-list justify-content-start justify-content-md-start px-0"
//                 style={{
//                   paddingLeft: 10,
//                   marginLeft: 10,
//                   marginBottom: 30,
//                   marginTop: 30,
//                 }}
//               >
//                 <div className="align-items-start">
//                   <ul className="nav nav-tabs" style={{ paddingLeft: 0 }}>
//                     {results
//                       .filter((nav) => {
//                         if (nav.id === "home" && !product?.show_description)
//                           return false;
//                         if (
//                           nav.id === "profile" &&
//                           !product?.show_specifications
//                         )
//                           return false;
//                         if (nav.id === "contact" && !product?.show_downloads)
//                           return false;

//                         if (nav.id === "insights" && !product?.show_insights)
//                           return false;
//                         if (nav.id === "features" && !product?.show_features)
//                           return false;
//                         return true;
//                       })
//                       .map((nav) => (
//                         <li key={nav.title} className="nav-item">
//                           <button
//                             className={`nav-link ${
//                               activeTab === nav.id ? "active" : ""
//                             }`}
//                             onClick={() => setActiveTab(nav.id)}
//                             style={{
//                               fontSize: "15px",
//                               color: activeTab === nav.id ? "#fff" : "#000",
//                               padding: "8px 18px",
//                               backgroundColor:
//                                 activeTab === nav.id ? "#1d3a72" : "#f5f5f5",
//                               border:
//                                 activeTab === nav.id
//                                   ? "2px solid #1d3a72"
//                                   : "1px solid #ccc",
//                               borderRadius: "10px",
//                               transition: "all 0.2s ease",
//                               marginRight: "10px",
//                             }}
//                             type="button"
//                           >
//                             {nav.title}
//                           </button>
//                         </li>
//                       ))}
//                   </ul>
//                 </div>
//               </div>

//               <div
//                 id="down"
//                 className="tp-campus-student-box pb-10 wow fadeInUp"
//                 data-wow-delay=".3s"
//               >
//                 <div className="container">
//                   {/* DESCRIPTION ONLY */}
//                   {activeTab === "home" &&
//                     product?.show_description &&
//                     description && (
//                       <div
//                         className="row align-items-start"
//                         style={{ marginBottom: "40px" }}
//                       >
//                         <div className="col-lg-6 col-md-12">
//                           <div className="tp-about-campus-info-content">
//                             <h5
//                               style={{
//                                 color: "#292929",
//                                 marginBottom: "30px",
//                                 fontSize: "25px",
//                                 lineHeight: "1.2",
//                               }}
//                             >
//                               {description.title}
//                             </h5>
//                             <p
//                               style={{
//                                 fontSize: "18px",
//                                 color: "#292929",
//                                 fontWeight: "bold",
//                               }}
//                             >
//                               {description.subtitle}
//                             </p>

//                             <p
//                               className="mb-4"
//                               style={{
//                                 lineHeight: 1.3,
//                                 color: "#292929",
//                                 fontSize: "15px",
//                               }}
//                             >
//                               {description.content}
//                             </p>

//                             <p
//                               style={{
//                                 // fontSize: "15px",
//                                 color: "#292929",
//                                 lineHeight: "1.3",
//                               }}
//                             ></p>
//                           </div>
//                         </div>

//                         {/* <div className="col-lg-6 col-md-12">
//                           <div className="tp-campus-student-content">
//                             <Image
//                               src={`${IMAGE_BASE}/${description.image}`}
//                               alt="Product"
//                               width={1201}
//                               height={580}
//                               style={{ height: "auto", width: "100%" }}
//                             />
//                           </div>
//                         </div> */}
//                         <div className="col-lg-6 col-md-12">
//                           <div
//                             className="tp-campus-student-content"
//                             // style={{ background: "#f5f5f5" }}
//                           >
//                             <Image
//                               src={`${IMAGE_BASE}/${description.image}`}
//                               alt="Product"
//                               width={1201}
//                               height={580}
//                               style={{
//                                 width: "100%",
//                                 height: "300px",
//                                 objectFit: "contain",
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                   {/* SPECIFICATIONS ONLY */}
//                   {activeTab === "profile" && product?.show_specifications && (
//                     <div
//                       className="container mt-5"
//                       style={{
//                         paddingTop: "0",
//                         paddingBottom: "30px", // 🔥 remove bottom space
//                       }}
//                     >
//                       <h5
//                         style={{
//                           color: "#292929",
//                           marginTop: "0",
//                           marginBottom: "30px", // 🔥 no gap below heading
//                           lineHeight: "1.2",
//                           fontSize: "25px",
//                         }}
//                       >
//                         Specifications
//                       </h5>

//                       <div
//                         className="row"
//                         style={{
//                           rowGap: "5px",
//                           alignItems: "stretch",
//                           marginTop: "0",
//                           marginBottom: "0",
//                           paddingTop: "0",
//                           paddingBottom: "0",
//                         }}
//                       >
//                         {specifications?.map((step: any) => (
//                           <div
//                             key={step.id}
//                             className="col-lg-6 col-md-6 d-flex"
//                           >
//                             <div
//                               className="tp-apply-process-box h-70"
//                               style={{
//                                 padding: "4px 5px",
//                                 width: "100%",
//                                 marginTop: "0",
//                                 marginBottom: "0",
//                                 borderTop: "none",
//                               }}
//                             >
//                               <h4
//                                 style={{
//                                   fontSize: "15px",
//                                   color: "#292929",
//                                 }}
//                               >
//                                 {step.title}
//                               </h4>

//                               <p
//                                 style={{
//                                   fontSize: "14px",
//                                 }}
//                               >
//                                 {step.value}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* downloads ONLY */}
//                   {activeTab === "contact" && product?.show_downloads && (
//                     <div className="tp-leadership-select row">
//                       <ServiceFour downloads={downloads} />
//                     </div>
//                   )}

//                   {activeTab === "features" && product?.show_features && (
//                     <div id="features">
//                       <Features features={features} />
//                     </div>
//                   )}
//                   {activeTab === "insights" && product?.show_insights && (
//                     <div className="row">
//                       {insights?.map((item: any) => (
//                         <div key={item.id} className="col-lg-6 mb-4">
//                           <h5>{item.title}</h5>
//                           <p>{item.content}</p>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {/* EVERYTHING BELOW REMAINS UNTOUCHED */}
//                   {product?.has_types === 1 && (
//                     <Typesofproducts productId={product.id} />
//                   )}

//                   {/* <Moreproducts /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <RelatedProducts/> */}
//         <RelatedProducts
//           currentProductId={product.id}
//           subcategory_id={product.subcategory_id}
//         />
//         {/* <ErithProducts /> */}
//       </section>
//     </>
//   );
// }

// code commented on date 29-05-2026

"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import product2 from "@/assets/img/products/product2.png";
import Image from "next/image";
import Features from "./features";
import ServiceFour from "./downloads";
import RelatedProducts from "@/app/(shop)/shop-details/_components/related-products";
import Link from "next/link";
import Typesofproducts from "./typesofProducts";

const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

const results = [
  { id: "home", title: "Description" },
  { id: "profile", title: "Specifications" },
  { id: "contact", title: "Downloads" },
  { id: "features", title: "Features & Benefits" },
  { id: "insights", title: "Product Insights" },
];

type Specification = {
  id: number;
  product_id: number;
  title?: string | null;
  value?: string | null;
  created_at?: string;
};

type Feature = {
  id: number;
  product_id: number;
  feature?: string | null;
  created_at?: string;
};

type Insight = {
  id: number;
  product_id: number;
  title?: string | null;
  content?: string | null;
  created_at?: string;
};

type Download = {
  id: number;
  product_id: number;
  product_type: string;
  document_type?: string | null;
  language?: string | null;
  title?: string | null;
  file_url?: string | null;
  created_at?: string;
};

type Description = {
  id: number;
  product_id: number;
  title?: string | null;
  subtitle?: string | null;
  content?: string | null;
  image?: string | null;
  show_explore?: boolean;
  product_slug?: string | null;
  created_at?: string;
};

type Product = {
  id: number;
  subcategory_id: number;
  name: string;
  slug: string;
  serial_number?: string | null;
  short_description?: string | null;
  banner_image?: string | null;
  has_types?: boolean | number;
  show_description?: boolean;
  show_specifications?: boolean;
  show_downloads?: boolean;
  show_features?: boolean;
  show_insights?: boolean;
  link?: string | null;
  show_in_navbar?: boolean;
  product_category?: string | null;
  menu_order?: number;
  type_style_title?: string | null;
};

type ProductData = {
  product: Product;
  description: Description;
  specifications: Specification[];
  downloads: Download[];
  features: Feature[];
  insights: Insight[];
};

export default function ProductDesc() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentIndex] = useState(0); // Fix 1 & 2: removed setCurrentIndex, handlePrev, handleNext (unused)

  const params = useParams();
  const slug = params?.slug;

  const [data, setData] = useState<ProductData | null>(null); // Fix 3: replaced any with ProductData

  useEffect(() => {
    if (!slug) return;

    fetch(`https://backend-test-yeyr.onrender.com/api/products/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!data?.product) return null;

  const {
    product,
    description,
    specifications,
    downloads,
    features,
    insights,
  } = data;

  const banner =
    product?.banner_image && product.banner_image.startsWith("http")
      ? product.banner_image
      : `${IMAGE_BASE}/${product?.banner_image}`;

  const images = banner ? [banner] : [product2];

  return (
    <>
      <section
        className="tp-shop-banner p-relative pt-0 pb-10 px-0"
        style={{ minHeight: "400px" }}
      >
        <div
          className="tp-breadcrumb__bg"
          style={{ backgroundColor: "#f3f4f8" }}
        ></div>

        <div className="tp-shop-banner-space p-relative fix">
          <div className="container">
            <div className="row align-items-center">
              {/* TEXT */}
              <div className="col-lg-6 text-center text-lg-start">
                <div className="tp-shop-banner-content">
                  <h4
                    style={{
                      color: "#292929",
                      fontWeight: "bold",
                      fontSize: "25px",
                      marginBottom: "10px",
                    }}
                  >
                    {product.product_category}
                  </h4>

                  <h3
                    style={{
                      color: "#fecb00",
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                    className="tp-shop-banner-title display-6 display-lg-1"
                  >
                    {product.name?.replace(/\-/g, "")}
                  </h3>

                  <p
                    style={{ color: "#000", fontSize: "18px" }}
                    className="px-2 px-lg-0"
                  >
                    {product.short_description}
                  </p>

                  <div
                    className="tp-header-btn d-none d-md-block"
                    style={{ position: "absolute", bottom: "0" }}
                  >
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "6px 18px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        display: "inline-block",
                        marginTop: "20px",
                        marginBottom: "10px",
                        fontSize: "13px",
                      }}
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="col-lg-6 text-center mt-4 mt-lg-0 pt-20 ">
                <div
                  style={{
                    height: "350px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={images[currentIndex]}
                    alt="shop-banner-img"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-campus-student-area white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* TABS */}
              <div
                className="tp-campus-student-list justify-content-start justify-content-md-start px-0"
                style={{
                  paddingLeft: 10,
                  marginLeft: 10,
                  marginBottom: 30,
                  marginTop: 30,
                }}
              >
                <div className="align-items-start">
                  <ul className="nav nav-tabs" style={{ paddingLeft: 0 }}>
                    {results
                      .filter((nav) => {
                        if (nav.id === "home" && !product?.show_description)
                          return false;
                        if (
                          nav.id === "profile" &&
                          !product?.show_specifications
                        )
                          return false;
                        if (nav.id === "contact" && !product?.show_downloads)
                          return false;
                        if (nav.id === "insights" && !product?.show_insights)
                          return false;
                        if (nav.id === "features" && !product?.show_features)
                          return false;
                        return true;
                      })
                      .map((nav) => (
                        <li key={nav.title} className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab === nav.id ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(nav.id)}
                            style={{
                              fontSize: "15px",
                              color: activeTab === nav.id ? "#fff" : "#000",
                              padding: "8px 18px",
                              backgroundColor:
                                activeTab === nav.id ? "#1d3a72" : "#f5f5f5",
                              border:
                                activeTab === nav.id
                                  ? "2px solid #1d3a72"
                                  : "1px solid #ccc",
                              borderRadius: "10px",
                              transition: "all 0.2s ease",
                              marginRight: "10px",
                            }}
                            type="button"
                          >
                            {nav.title}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div
                id="down"
                className="tp-campus-student-box pb-10 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="container">
                  {/* DESCRIPTION ONLY */}
                  {activeTab === "home" &&
                    product?.show_description &&
                    description && (
                      <div
                        className="row align-items-start"
                        style={{ marginBottom: "40px" }}
                      >
                        <div className="col-lg-6 col-md-12">
                          <div className="tp-about-campus-info-content">
                            <h5
                              style={{
                                color: "#292929",
                                marginBottom: "30px",
                                fontSize: "25px",
                                lineHeight: "1.2",
                              }}
                            >
                              {description.title}
                            </h5>
                            <p
                              style={{
                                fontSize: "18px",
                                color: "#292929",
                                fontWeight: "bold",
                              }}
                            >
                              {description.subtitle}
                            </p>

                            <p
                              className="mb-4"
                              style={{
                                lineHeight: 1.3,
                                color: "#292929",
                                fontSize: "15px",
                              }}
                            >
                              {description.content}
                            </p>

                            <p
                              style={{
                                color: "#292929",
                                lineHeight: "1.3",
                              }}
                            ></p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="tp-campus-student-content">
                            <Image
                              src={`${IMAGE_BASE}/${description.image}`}
                              alt="Product"
                              width={1201}
                              height={580}
                              style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  {/* SPECIFICATIONS ONLY */}
                  {activeTab === "profile" && product?.show_specifications && (
                    <div
                      className="container mt-5"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "30px",
                      }}
                    >
                      <h5
                        style={{
                          color: "#292929",
                          marginTop: "0",
                          marginBottom: "30px",
                          lineHeight: "1.2",
                          fontSize: "25px",
                        }}
                      >
                        Specifications
                      </h5>

                      <div
                        className="row"
                        style={{
                          rowGap: "5px",
                          alignItems: "stretch",
                          marginTop: "0",
                          marginBottom: "0",
                          paddingTop: "0",
                          paddingBottom: "0",
                        }}
                      >
                        {specifications?.map(
                          (
                            step: Specification, // Fix 4: replaced any with Specification
                          ) => (
                            <div
                              key={step.id}
                              className="col-lg-6 col-md-6 d-flex"
                            >
                              <div
                                className="tp-apply-process-box h-70"
                                style={{
                                  padding: "4px 5px",
                                  width: "100%",
                                  marginTop: "0",
                                  marginBottom: "0",
                                  borderTop: "none",
                                }}
                              >
                                <h4
                                  style={{
                                    fontSize: "15px",
                                    color: "#292929",
                                  }}
                                >
                                  {step.title}
                                </h4>

                                <p
                                  style={{
                                    fontSize: "14px",
                                  }}
                                >
                                  {step.value}
                                </p>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* DOWNLOADS ONLY */}
                  {activeTab === "contact" && product?.show_downloads && (
                    <div className="tp-leadership-select row">
                      <ServiceFour downloads={downloads} />
                    </div>
                  )}

                  {activeTab === "features" && product?.show_features && (
                    <div id="features">
                      <Features features={features} />
                    </div>
                  )}

                  {activeTab === "insights" && product?.show_insights && (
                    <div className="row">
                      {insights?.map(
                        (
                          item: Insight, // Fix 5: replaced any with Insight
                        ) => (
                          <div key={item.id} className="col-lg-6 mb-4">
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                          </div>
                        ),
                      )}
                    </div>
                  )}

                  {product?.has_types === 1 && (
                    <Typesofproducts productId={product.id} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts
          currentProductId={product.id}
          subcategory_id={product.subcategory_id}
        />
      </section>
    </>
  );
}
