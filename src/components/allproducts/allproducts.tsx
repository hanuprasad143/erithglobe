// "use client";
// // import { GridSvg, ListSvg } from "@/components/svg";
// import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
// import usePagination from "@/hooks/use-pagination";
// import Pagination from "@/components/ui/pagination";
// import ShopItem from "@/components/shop/shop-item";
// import ShopListItem from "@/components/shop/shop-list-item";
// // import NiceSelect from "@/components/ui/nice-select";
// // import FooterSocial from "./footer-social";
// import { useState, useEffect } from "react";

// type Props = {
//   showVerticalLine?: boolean;
//   showHorizontalLine?: boolean;
// };

// export default function AllProducts({
//   showVerticalLine,
//   showHorizontalLine,
// }: Props) {
//   const columnStyle = {
//     borderRight: showVerticalLine ? "none" : "1px solid #ccc",
//   };

//   const horizontalStyle = {
//     borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
//   };

//   const [selectIndustry, setSelectIndustry] = useState<string[]>([]);
//   const [selectProduct, setSelectProduct] = useState<string[]>([]);
//   const [industries, setIndustries] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);

//   // ✅ FETCH DATA
//   useEffect(() => {
//     fetch("https://backend-test-yeyr.onrender.com/api/industries")
//       .then((res) => res.json())
//       .then(setIndustries);

//     fetch("https://backend-test-yeyr.onrender.com/api/products")
//       .then((res) => res.json())
//       .then(setProducts);
//   }, []);

//   // ✅ FILTER (SHOW ALL INITIALLY)
//   const filteredProducts = products.filter((item) => {
//     const industriesList = item.product_industries || [];

//     const matchIndustry =
//       selectIndustry.length > 0
//         ? selectIndustry.some((id) => industriesList.includes(Number(id)))
//         : true;

//     const matchProduct =
//       selectProduct.length > 0
//         ? selectProduct.includes(item.product_category)
//         : true;

//     return matchIndustry && matchProduct;
//   });

//   // ✅ PAGINATION (BASED ON FILTERED DATA)
//   const { currentItems, handlePageClick, pageCount } = usePagination(
//     filteredProducts,
//     9,
//   );

//   // ✅ RESET PAGE WHEN DATA LOADS
//   useEffect(() => {
//     handlePageClick({ selected: 0 });
//   }, [products]);

//   // ✅ RESET PAGE WHEN FILTER CHANGES
//   useEffect(() => {
//     handlePageClick({ selected: 0 });
//   }, [selectIndustry, selectProduct]);

//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//         ></div>
//         <div className="tp-breadcrumb__bg overlay">
//           <video autoPlay loop muted playsInline width={"100%"}>
//             <source src="/assets/videos/erith_.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h3 className="tp-breadcrumb__title color">All Products</h3>
//                   <span className="white">
//                     Explore our complete range of high-quality products designed
//                     to meet your needs
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-shop-grid-area pt-10">
//         <div className="container">
//           <p
//             style={{
//               fontSize: "40px",
//               color: "#292929",
//               lineHeight: "1.2",
//               marginTop: "30px",
//               fontWeight: "bold",
//             }}
//           >
//             Valves, Actuators and Controls
//           </p>
//           <hr style={{ marginTop: "40px" }} />

//           <div className="row">
//             <div
//               className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
//               style={columnStyle}
//             >
//               <ShopFilterSidebar
//                 onProductChnage={setSelectProduct}
//                 onIndustryChange={setSelectIndustry}
//               />
//             </div>

//             <div className="col-lg-9 order-1 order-lg-1">
//               <p style={horizontalStyle}>
//                 {selectProduct.length > 0 && (
//                   <>
//                     <span style={{ color: "#000" }}>Filters:- </span>
//                   </>
//                 )}

//                 {selectProduct.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Product Type:{" "}
//                     </span>
//                     {selectProduct.join(", ")}
//                     {"."}
//                   </>
//                 )}

//                 {selectIndustry.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Industry:{" "}
//                     </span>
//                     {selectIndustry
//                       .map((id) => {
//                         const ind = industries.find((i) => i.id === Number(id));
//                         return ind?.name;
//                       })
//                       .filter(Boolean)
//                       .join(", ")}
//                   </>
//                 )}
//               </p>

//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"></div>
//                 </div>
//               </div>

//               <div className="tab-content" id="myTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="home"
//                   role="tabpanel"
//                   aria-labelledby="home-tab"
//                 >
//                   <div className="row">
//                     {currentItems.map((product) => (
//                       <div key={product.id} className="col-lg-4 col-sm-6">
//                         <ShopItem item={product} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="tp-event-inner-pagination pb-10">
//                     <div className="tp-dashboard-pagination pt-20">
//                       <div className="tp-pagination ">
//                         <Pagination
//                           handlePageClick={handlePageClick}
//                           pageCount={pageCount}
//                           isCenter={true}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <h1 style={horizontalStyle}></h1>
//       </section>
//     </>
//   );
// }

// "use client";
// // import { GridSvg, ListSvg } from "@/components/svg";
// import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
// import usePagination from "@/hooks/use-pagination";
// import Pagination from "@/components/ui/pagination";
// import ShopItem from "@/components/shop/shop-item";
// import ProductTypeItem from "@/components/shop/product-types-items";
// import ShopListItem from "@/components/shop/shop-list-item";
// // import NiceSelect from "@/components/ui/nice-select";
// // import FooterSocial from "./footer-social";
// import { useState, useEffect } from "react";

// // ✅ NEW IMPORT (optional if you create service later)
// // import { fetchProductTypes } from "@/services/productTypes";

// type Props = {
//   showVerticalLine?: boolean;
//   showHorizontalLine?: boolean;
// };

// export default function AllProducts({
//   showVerticalLine,
//   showHorizontalLine,
// }: Props) {
//   const columnStyle = {
//     borderRight: showVerticalLine ? "none" : "1px solid #ccc",
//   };

//   const horizontalStyle = {
//     borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
//   };

//   const [selectIndustry, setSelectIndustry] = useState<string[]>([]);
//   const [selectProduct, setSelectProduct] = useState<string[]>([]);
//   const [industries, setIndustries] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);

//   // ✅ NEW STATE
//   const [productTypes, setProductTypes] = useState<any[]>([]);

//   // ✅ FETCH DATA
//   useEffect(() => {
//     fetch("https://backend-test-yeyr.onrender.com/api/industries")
//       .then((res) => res.json())
//       .then(setIndustries);

//     fetch("https://backend-test-yeyr.onrender.com/api/products")
//       .then((res) => res.json())
//       .then(setProducts);

//     // ✅ NEW FETCH
//     // fetch("https://backend-test-yeyr.onrender.com/api/product-types/product_type=Gaskets")
//     //   .then((res) => res.json())
//     //   .then(setProductTypes);
//     // ✅ NEW FETCH
//     fetch("https://backend-test-yeyr.onrender.com/api/product-types?product_type=Gaskets")
//       .then((res) => res.json())
//       .then(setProductTypes);
//   }, []);

//   // ✅ NEW MERGE LOGIC (DO NOT REMOVE ORIGINAL)
//   // const productsWithTypes = products.map((product) => {
//   //   const types = productTypes.filter((pt) => pt.product_id === product.id);

//   //   return {
//   //     ...product,
//   //     product_types: types,
//   //   };
//   // });

//   // const productsWithTypes = products.map((product) => {
//   //   const types = productTypes
//   //     .filter((pt) => pt.product_id === product.id)
//   //     .map((pt) => ({
//   //       ...pt,
//   //       product_slug: product.slug, // ✅ attach slug here
//   //     }));

//   //   return {
//   //     ...product,
//   //     product_types: types,
//   //   };
//   // });
//   const productsWithTypes = products.map((product) => {
//     const types = productTypes
//       .filter(
//         (pt) =>
//           pt.product_id === product.id &&
//           pt.product_type?.toLowerCase() === "gaskets", // ✅ FILTER HERE
//       )
//       .map((pt) => ({
//         ...pt,
//         product_slug: product.slug,
//       }));

//     return {
//       ...product,
//       product_types: types,
//     };
//   });

//   // ✅ FILTER (SHOW ALL INITIALLY)
//   const filteredProducts = productsWithTypes.filter((item) => {
//     const industriesList = item.product_industries || [];

//     const matchIndustry =
//       selectIndustry.length > 0
//         ? selectIndustry.some((id) => industriesList.includes(Number(id)))
//         : true;

//     const matchProduct =
//       selectProduct.length > 0
//         ? selectProduct.includes(item.product_category)
//         : true;

//     return matchIndustry && matchProduct;
//   });

//   // ✅ PAGINATION (BASED ON FILTERED DATA)
//   const { currentItems, handlePageClick, pageCount } = usePagination(
//     filteredProducts,
//     9,
//   );

//   // ✅ RESET PAGE WHEN DATA LOADS
//   useEffect(() => {
//     handlePageClick({ selected: 0 });
//   }, [products]);

//   // ✅ RESET PAGE WHEN FILTER CHANGES
//   useEffect(() => {
//     handlePageClick({ selected: 0 });
//   }, [selectIndustry, selectProduct]);

//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg "
//           style={{
//             backgroundImage: "url(/assets/img/industries/oil_and_gas.png)",
//           }}
//         ></div>
//         <div className="tp-breadcrumb__bg overlay">
//           <video autoPlay loop muted playsInline width={"100%"}>
//             <source src="/assets/videos/erith_.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h3
//                     className="tp-breadcrumb__title color"
//                     style={{ color: "#fecb00" }}
//                   >
//                     Portfolio
//                   </h3>
//                   <span className="white">
//                     {/* Explore our complete range of high-quality products designed
//                     to meet your needs */}
//                     We partner with world-leading manufacturers to bring you the
//                     most trusted solutions across sealing flow control,
//                     isolation and safety.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-shop-grid-area pt-10">
//         <div className="container">
//           <p
//             style={{
//               fontSize: "40px",
//               color: "#292929",
//               lineHeight: "1.2",
//               marginTop: "30px",
//               // fontWeight: "bold",
//             }}
//           >
//             Products built for demanding environments
//           </p>
//           <hr style={{ marginTop: "40px" }} />

//           <div className="row">
//             <div
//               className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
//               style={columnStyle}
//             >
//               <ShopFilterSidebar
//                 onProductChnage={setSelectProduct}
//                 onIndustryChange={setSelectIndustry}
//               />
//             </div>

//             <div className="col-lg-9 order-1 order-lg-1">
//               <p style={horizontalStyle}>
//                 {selectProduct.length > 0 && (
//                   <>
//                     <span style={{ color: "#000" }}>Filters:- </span>
//                   </>
//                 )}

//                 {selectProduct.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Product Type:{" "}
//                     </span>
//                     {selectProduct.join(", ")}
//                     {"."}
//                   </>
//                 )}

//                 {selectIndustry.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Industry:{" "}
//                     </span>
//                     {selectIndustry
//                       .map((id) => {
//                         const ind = industries.find((i) => i.id === Number(id));
//                         return ind?.name;
//                       })
//                       .filter(Boolean)
//                       .join(", ")}
//                   </>
//                 )}
//               </p>

//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"></div>
//                 </div>
//               </div>

//               <div className="tab-content" id="myTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="home"
//                   role="tabpanel"
//                   aria-labelledby="home-tab"
//                 >
//                   {/* <div className="row">
//                     {currentItems.map((product) => (
//                       <div key={product.id} className="col-lg-4 col-sm-6">
//                         <ShopItem item={product} />
//                       </div>
//                     ))}
//                     {product.product_types?.map((pt) => (
//                       <div key={pt.id} className="col-lg-4 col-sm-6">
//                         <ProductTypeItem item={pt} />
//                       </div>
//                     ))}
//                   </div> */}
//                   <div className="row">
//                     {currentItems.map((product) => (
//                       <>
//                         <div key={product.id} className="col-lg-4 col-sm-6">
//                           <ShopItem item={product} />
//                         </div>

//                         {product.product_types?.map((pt) => (
//                           <div key={pt.id} className="col-lg-4 col-sm-6">
//                             <ProductTypeItem item={pt} />
//                           </div>
//                         ))}
//                       </>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="tp-event-inner-pagination pb-10">
//                     <div className="tp-dashboard-pagination pt-20">
//                       <div className="tp-pagination ">
//                         <Pagination
//                           handlePageClick={handlePageClick}
//                           pageCount={pageCount}
//                           isCenter={true}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <h1 style={horizontalStyle}></h1>
//       </section>
//     </>
//   );
// }  code commented on 09-05-2026

// "use client";

// import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
// import usePagination from "@/hooks/use-pagination";
// import Pagination from "@/components/ui/pagination";
// import ShopItem from "@/components/shop/shop-item";
// import { useState, useEffect, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// type Props = {
//   showVerticalLine?: boolean;
//   showHorizontalLine?: boolean;
// };

// // slug helpers
// const toSlug = (text: string) =>
//   text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// const fromSlug = (text: string) =>
//   text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// export default function AllProducts({
//   showVerticalLine,
//   showHorizontalLine,
// }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [, startTransition] = useTransition();

//   const columnStyle = {
//     borderRight: showVerticalLine ? "none" : "1px solid #ccc",
//   };

//   const horizontalStyle = {
//     borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
//   };

//   // =========================
//   // READ URL PARAMS — slugs
//   // =========================
//   // URL shape: ?Product Type=isolation-joints&Industry=oil-and-gas&page=1
//   const selectedProductSlugs  = searchParams.getAll("Product Type");
//   const selectedIndustrySlugs = searchParams.getAll("Industry");
//   const currentPage           = Number(searchParams.get("page") ?? "1") - 1;

//   // =========================
//   // FETCH DATA
//   // =========================
//   const [industries, setIndustries] = useState<any[]>([]);
//   const [products, setProducts]     = useState<any[]>([]);

//   useEffect(() => {
//     fetch("https://backend-test-yeyr.onrender.com/api/industries")
//       .then((res) => res.json())
//       .then(setIndustries);

//     fetch("https://backend-test-yeyr.onrender.com/api/products")
//       .then((res) => res.json())
//       .then(setProducts);
//   }, []);

//   // =========================
//   // FILTER PRODUCTS
//   // =========================
//   const filteredProducts = products.filter((item) => {
//     const industriesList: number[] = item.product_industries || [];

//     const matchIndustry =
//       selectedIndustrySlugs.length > 0
//         ? selectedIndustrySlugs.some((slug) => {
//             const ind = industries.find((i) => toSlug(i.name) === slug);
//             return ind ? industriesList.includes(ind.id) : false;
//           })
//         : true;

//     const matchProduct =
//       selectedProductSlugs.length > 0
//         ? selectedProductSlugs.includes(toSlug(item.product_category))
//         : true;

//     return matchIndustry && matchProduct;
//   });

//   // =========================
//   // PAGINATION
//   // =========================
//   const { currentItems, handlePageClick, pageCount } = usePagination(
//     filteredProducts,
//     9,
//   );

//   useEffect(() => {
//     handlePageClick({ selected: currentPage });
//   }, [
//     products,
//     selectedProductSlugs.join(","),
//     selectedIndustrySlugs.join(","),
//   ]);

//   function handlePaginationClick(event: { selected: number }) {
//     handlePageClick(event);

//     const params = new URLSearchParams();

//     // 1st: Product Type
//     searchParams
//       .getAll("Product Type")
//       .forEach((v) => params.append("Product Type", v));

//     // 2nd: Industry
//     searchParams
//       .getAll("Industry")
//       .forEach((v) => params.append("Industry", v));

//     // 3rd: page always last
//     params.append("page", String(event.selected + 1));

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   // =========================
//   // RESET ALL FILTERS
//   // =========================
//   function handleReset() {
//     startTransition(() => {
//       router.push(pathname, { scroll: false });
//     });
//   }

//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-160 p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{
//             backgroundImage: "url(/assets/img/industries/oil_and_gas.png)",
//           }}
//         ></div>

//         {/* <div className="tp-breadcrumb__bg overlay">
//           <video autoPlay loop muted playsInline width={"100%"}>
//             <source src="/assets/videos/erith_.mp4" type="video/mp4" />
//           </video>
//         </div> */}

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h3
//                     className="tp-breadcrumb__title color"
//                     style={{ color: "#fecb00" }}
//                   >
//                     Portfolio
//                   </h3>
//                   <span className="white">
//                     We partner with world-leading manufacturers to bring you the
//                     most trusted solutions across sealing flow control,
//                     isolation and safety.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-shop-grid-area pt-10">
//         <div className="container">
//           <p
//             style={{
//               fontSize: "40px",
//               color: "#292929",
//               lineHeight: "1.2",
//               marginTop: "30px",
//             }}
//           >
//             Products built for demanding environments
//           </p>

//           <hr style={{ marginTop: "40px" }} />

//           <div className="row">
//             {/* SIDEBAR */}
//             <div
//               className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
//               style={columnStyle}
//             >
//               <ShopFilterSidebar
//                 industries={industries}
//                 onReset={handleReset}
//               />
//             </div>

//             {/* PRODUCTS */}
//             <div className="col-lg-9 order-1 order-lg-1">
//               <p style={horizontalStyle}>
//                 {(selectedProductSlugs.length > 0 ||
//                   selectedIndustrySlugs.length > 0) && (
//                   <span style={{ color: "#000" }}>Filters:- </span>
//                 )}

//                 {selectedProductSlugs.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Product Type:{" "}
//                     </span>
//                     {selectedProductSlugs.map(fromSlug).join(", ")}.
//                   </>
//                 )}

//                 {selectedIndustrySlugs.length > 0 && (
//                   <>
//                     {" "}
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Industry:{" "}
//                     </span>
//                     {selectedIndustrySlugs.map(fromSlug).join(", ")}
//                   </>
//                 )}
//               </p>

//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"></div>
//                 </div>
//               </div>

//               <div className="tab-content" id="myTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="home"
//                   role="tabpanel"
//                   aria-labelledby="home-tab"
//                 >
//                   <div className="row">
//                     {currentItems.map((product) => (
//                       <div key={product.id} className="col-lg-4 col-sm-6">
//                         <ShopItem item={product} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* PAGINATION */}
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="tp-event-inner-pagination pb-10">
//                     <div className="tp-dashboard-pagination pt-20">
//                       <div className="tp-pagination">
//                         <Pagination
//                           handlePageClick={handlePaginationClick}
//                           pageCount={pageCount}
//                           isCenter={true}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 style={horizontalStyle}></h1>
//       </section>
//     </>
//   );
// }

// code commented date on 27-05-2026 //
// "use client";

// import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
// import usePagination from "@/hooks/use-pagination";
// import Pagination from "@/components/ui/pagination";
// import ShopItem from "@/components/shop/shop-item";
// import { useState, useEffect, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// type Props = {
//   showVerticalLine?: boolean;
//   showHorizontalLine?: boolean;
// };

// const toSlug = (text: string) =>
//   text
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "");

// const fromSlug = (text: string) =>
//   text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// export default function AllProducts({
//   showVerticalLine,
//   showHorizontalLine,
// }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [, startTransition] = useTransition();

//   const columnStyle = {
//     borderRight: showVerticalLine ? "none" : "1px solid #ccc",
//   };

//   const horizontalStyle = {
//     borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
//   };

//   // =========================
//   // READ URL PARAMS — slugs
//   // =========================
//   const selectedProductSlugs = searchParams.getAll("Product Type");
//   const selectedIndustrySlugs = searchParams.getAll("Industry");
//   const currentPage = Number(searchParams.get("page") ?? "1") - 1;

//   // =========================
//   // FETCH DATA
//   // =========================
//   const [industries, setIndustries] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("https://backend-test-yeyr.onrender.com/api/industries")
//       .then((res) => res.json())
//       .then(setIndustries);

//     fetch("https://backend-test-yeyr.onrender.com/api/products")
//       .then((res) => res.json())
//       .then(setProducts);
//   }, []);

//   // =========================
//   // FILTER PRODUCTS
//   // =========================
//   const filteredProducts = products.filter((item) => {
//     const industriesList: number[] = item.product_industries || [];

//     const matchIndustry =
//       selectedIndustrySlugs.length > 0
//         ? selectedIndustrySlugs.some((slug) => {
//             const ind = industries.find((i) => toSlug(i.name) === slug);
//             return ind ? industriesList.includes(ind.id) : false;
//           })
//         : true;

//     const matchProduct =
//       selectedProductSlugs.length > 0
//         ? selectedProductSlugs.includes(toSlug(item.product_category))
//         : true;

//     return matchIndustry && matchProduct;
//   });

//   // =========================
//   // PAGINATION
//   // =========================
//   const { currentItems, handlePageClick, pageCount } = usePagination(
//     filteredProducts,
//     9,
//   );

//   useEffect(() => {
//     handlePageClick({ selected: currentPage });
//   }, [
//     products,
//     selectedProductSlugs.join(","),
//     selectedIndustrySlugs.join(","),
//   ]);

//   function handlePaginationClick(event: { selected: number }) {
//     handlePageClick(event);
//     const params = new URLSearchParams();

//     searchParams
//       .getAll("Product Type")
//       .forEach((v) => params.append("Product Type", v));

//     searchParams
//       .getAll("Industry")
//       .forEach((v) => params.append("Industry", v));

//     params.append("page", String(event.selected + 1));

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   // =========================
//   // RESET ALL FILTERS
//   // =========================
//   function handleReset() {
//     startTransition(() => {
//       router.push(pathname, { scroll: false });
//     });
//   }

//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-160 p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{
//             backgroundImage: "url(/assets/img/industries/oil_and_gas.png)",
//           }}
//         ></div>

//         {/* <div className="tp-breadcrumb__bg overlay">
//           <video autoPlay loop muted playsInline width={"100%"}>
//             <source src="/assets/videos/erith_.mp4" type="video/mp4" />
//           </video>
//         </div> */}

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h3
//                     className="tp-breadcrumb__title color"
//                     style={{ color: "#fecb00" }}
//                   >
//                     Portfolio
//                   </h3>
//                   <span className="white">
//                     We partner with world-leading manufacturers to bring you the
//                     most trusted solutions across sealing flow control,
//                     isolation and safety.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-shop-grid-area pt-10">
//         <div className="container">
//           <p
//             style={{
//               fontSize: "40px",
//               color: "#292929",
//               lineHeight: "1.2",
//               marginTop: "30px",
//             }}
//           >
//             Products built for demanding environments
//           </p>

//           <hr style={{ marginTop: "40px" }} />

//           <div className="row">
//             {/* SIDEBAR */}
//             {/* <div
//               className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
//               style={columnStyle}
//             > */}
//             <div
//               className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12"
//               style={columnStyle}
//             >
//               <ShopFilterSidebar
//                 industries={industries}
//                 onReset={handleReset}
//               />
//             </div>

//             {/* PRODUCTS */}
//             {/* <div className="col-lg-9 order-1 order-lg-1"> */}
//             <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-12">
//               <p style={horizontalStyle}>
//                 {(selectedProductSlugs.length > 0 ||
//                   selectedIndustrySlugs.length > 0) && (
//                   <span style={{ color: "#000" }}>Filters:- </span>
//                 )}

//                 {selectedProductSlugs.length > 0 && (
//                   <>
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Product Type:{" "}
//                     </span>
//                     {selectedProductSlugs.map(fromSlug).join(", ")}.
//                   </>
//                 )}

//                 {selectedIndustrySlugs.length > 0 && (
//                   <>
//                     {" "}
//                     <span style={{ color: "#000", fontWeight: "bold" }}>
//                       Industry:{" "}
//                     </span>
//                     {selectedIndustrySlugs.map(fromSlug).join(", ")}
//                   </>
//                 )}
//               </p>

//               <div className="row">
//                 <div className="col-lg-8">
//                   <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"></div>
//                 </div>
//               </div>

//               <div className="tab-content" id="myTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="home"
//                   role="tabpanel"
//                   aria-labelledby="home-tab"
//                 >
//                   <div className="row">
//                     {currentItems.map((product) => (
//                       // <div key={product.id} className="col-lg-4 col-sm-6">
//                       <div
//                         key={product.id}
//                         className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
//                       >
//                         <ShopItem item={product} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* PAGINATION */}
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="tp-event-inner-pagination pb-10">
//                     <div className="tp-dashboard-pagination pt-20">
//                       <div className="tp-pagination">
//                         <Pagination
//                           handlePageClick={handlePaginationClick}
//                           pageCount={pageCount}
//                           isCenter={true}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 style={horizontalStyle}></h1>
//       </section>
//     </>
//   );
// }

// code commented date on 27-05-2026 //

"use client";

import ShopFilterSidebar from "@/app/(shop)/shop-grid/_components/filter/shop-filter-sidebar";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import ShopItem from "@/components/shop/shop-item";
import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { IBookDT } from "@/types/book-d-t";

type Props = {
  showVerticalLine?: boolean;
  showHorizontalLine?: boolean;
};

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const fromSlug = (text: string) =>
  text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

type Industry = {
  id: number;
  category_id: number | null;
  subcategory_id: number | null;
  slug: string | null;
  banner_title: string | null;
  banner_subtitle: string | null;
  banner_image: string;
  about_title: string | null;
  about_subtitle: string | null;
  about_description: string | null;
  about_image: string | null;
  created_at: string;
  industries?: unknown[];
  name: string;
};

type Product = {
  id: number;
  title: string;
  category: string;
  img: string;
  subcategory_id: number;
  name: string;
  slug: string;
  serial_number?: string | null;
  short_description?: string | null;
  banner_image: string;
  has_types?: boolean;
  show_description?: boolean;
  show_specifications?: boolean;
  show_downloads?: boolean;
  show_features?: boolean;
  show_insights?: boolean;
  link?: string;
  show_in_navbar?: boolean;
  product_category?: string | null;
  menu_order?: number;
  type_style_title?: string | null;
  product_industries: number[];
  serial_number_display?: string;
  product_category_display?: string;
  icon?: "bulb" | "video" | "play" | "book" | "file";
  price?: number;
  tag?: string;
  image?: string;
  stock?: number;
  short_desc?: string;
  description?: string;
  date?: string;
};

export default function AllProducts({
  showVerticalLine,
  showHorizontalLine,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const columnStyle = {
    borderRight: showVerticalLine ? "none" : "1px solid #ccc",
  };

  const horizontalStyle = {
    borderBottom: showHorizontalLine ? "none" : "1px solid #ccc",
  };

  // =========================
  // READ URL PARAMS — slugs
  // =========================
  const selectedProductSlugs = searchParams.getAll("Product Type");
  const selectedIndustrySlugs = searchParams.getAll("Industry");
  const currentPage = Number(searchParams.get("page") ?? "1") - 1;

  // =========================
  // FETCH DATA
  // =========================
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch("https://backend-test-yeyr.onrender.com/api/industries")
      .then((res) => res.json())
      .then(setIndustries);

    fetch("https://backend-test-yeyr.onrender.com/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  // =========================
  // FILTER PRODUCTS
  // =========================
  const filteredProducts = products.filter((item) => {
    const industriesList: number[] = item.product_industries || [];

    const matchIndustry =
      selectedIndustrySlugs.length > 0
        ? selectedIndustrySlugs.some((slug) => {
            const ind = industries.find((i) => toSlug(i.name) === slug);
            return ind ? industriesList.includes(ind.id) : false;
          })
        : true;

    const matchProduct =
      selectedProductSlugs.length > 0
        ? // ? selectedProductSlugs.includes(toSlug(item.product_category))
          selectedProductSlugs.includes(toSlug(item.product_category || ""))
        : true;

    return matchIndustry && matchProduct;
  });

  // =========================
  // PAGINATION
  // =========================
  const { currentItems, handlePageClick, pageCount } = usePagination(
    filteredProducts,
    9,
  );

  useEffect(() => {
    handlePageClick({ selected: currentPage });
  }, [
    products,
    selectedProductSlugs.join(","),
    selectedIndustrySlugs.join(","),
  ]);

  function handlePaginationClick(event: { selected: number }) {
    handlePageClick(event);
    const params = new URLSearchParams();

    searchParams
      .getAll("Product Type")
      .forEach((v) => params.append("Product Type", v));

    searchParams
      .getAll("Industry")
      .forEach((v) => params.append("Industry", v));

    params.append("page", String(event.selected + 1));

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  // =========================
  // RESET ALL FILTERS
  // =========================
  function handleReset() {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  }

  return (
    <>
      <section
        className="tp-breadcrumb__area pt-160 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: "url(/assets/img/industries/oil_and_gas.png)",
          }}
        ></div>

        {/* <div className="tp-breadcrumb__bg overlay">
          <video autoPlay loop muted playsInline width={"100%"}>
            <source src="/assets/videos/erith_.mp4" type="video/mp4" />
          </video>
        </div> */}

        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  <h3
                    className="tp-breadcrumb__title color"
                    style={{ color: "#fecb00" }}
                  >
                    Portfolio
                  </h3>
                  <span className="white">
                    We partner with world-leading manufacturers to bring you the
                    most trusted solutions across sealing flow control,
                    isolation and safety.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-shop-grid-area pt-10">
        <div className="container">
          <p
            style={{
              fontSize: "40px",
              color: "#292929",
              lineHeight: "1.2",
              marginTop: "30px",
            }}
          >
            Products built for demanding environments
          </p>

          <hr style={{ marginTop: "40px" }} />

          <div className="row">
            {/* FILTER TOGGLE BUTTON — visible only below 760px */}
            <div className="col-12 d-block d-md-none mb-3">
              <button
                onClick={() => setShowFilter((prev) => !prev)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  fontSize: "15px",
                  color: "#292929",
                  cursor: "pointer",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "600" }}>
                  {showFilter ? "Hide Filters" : "Show Filters"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                    transform: showFilter ? "rotate(180deg)" : "rotate(0deg)",
                    fontSize: "18px",
                  }}
                >
                  ▼
                </span>
              </button>
            </div>

            {/* SIDEBAR */}
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12"
              style={{
                ...columnStyle,
                display: undefined,
              }}
            >
              {/* <div className="d-none d-md-block">
                <ShopFilterSidebar
                  industries={industries}
                  onReset={handleReset}
                />
              </div> */}
              {/* Mobile: show/hide based on toggle */}
              {/* <div className="d-block d-md-none">
                {showFilter && (
                  <ShopFilterSidebar
                    industries={industries}
                    onReset={handleReset}
                  />
                )}
              </div> */}
              <div className="d-none d-md-block">
                <ShopFilterSidebar onReset={handleReset} />
              </div>
              {/* Mobile: show/hide based on toggle */}
              <div className="d-block d-md-none">
                {showFilter && <ShopFilterSidebar onReset={handleReset} />}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-12">
              <p style={horizontalStyle}>
                {(selectedProductSlugs.length > 0 ||
                  selectedIndustrySlugs.length > 0) && (
                  <span style={{ color: "#000" }}>Filters:- </span>
                )}

                {selectedProductSlugs.length > 0 && (
                  <>
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Product Type:{" "}
                    </span>
                    {selectedProductSlugs.map(fromSlug).join(", ")}.
                  </>
                )}

                {selectedIndustrySlugs.length > 0 && (
                  <>
                    {" "}
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                      Industry:{" "}
                    </span>
                    {selectedIndustrySlugs.map(fromSlug).join(", ")}
                  </>
                )}
              </p>

              <div className="row">
                <div className="col-lg-8">
                  <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"></div>
                </div>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    {currentItems.map((product) => (
                      <div
                        key={product.id}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                      >
                        {/* <ShopItem item={product} /> */}
                        <ShopItem item={product as unknown as IBookDT} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PAGINATION */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="tp-event-inner-pagination pb-10">
                    <div className="tp-dashboard-pagination pt-20">
                      <div className="tp-pagination">
                        <Pagination
                          handlePageClick={handlePaginationClick}
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

        <h1 style={horizontalStyle}></h1>
      </section>
    </>
  );
}
