// import React, { useState } from "react";
// import PriceFilter from "./price-filter";
// import FilterCategory from "./filter-category";
// // import FilterAges from "./filter-ages";
// // import FilterAuthor from "./filter-author";
// import FilterLanguage from "./filter-language";
// // import TorqueFilter from "./torque-filter";

// type Props = {
//   onProductChnage: (sizes: string[]) => void;
//   onSizeChange: (sizes: string[]) => void;
//   onPressureChange: (sizes: string[]) => void;
//   onTorqueChange: (sizes: string[]) => void;
//   onIndustryChange: (sizes: string[]) => void;
// };

// export default function ShopFilterSidebar({
//   onProductChnage,
//   // onSizeChange,
//   // onPressureChange,
//   // onTorqueChange,
//   onIndustryChange,
// }: Props) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="tp-shop-grid-sidebar mr-10">
//       {/* Price Filter */}
//       <div className="tp-shop-widget mb-35">
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <h3 className="tp-shop-widget-title no-border">Filter</h3>
//           <PriceFilter />
//         </div>
//       </div>

//       {/* Product Type */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Product Type</h3>
//         <FilterCategory onChange={onProductChnage} />
//       </div>

//       {/* Size */}
//       {/* <div className="tp-shop-widget mb-50">
//         <h3 className="tp-shop-widget-title">Size</h3>
//         <FilterAges onChange={onSizeChange} />
//       </div> */}

//       {/* Pressure */}
//       {/* <div className="tp-shop-widget mb-50">
//         <h3 className="tp-shop-widget-title">
//           Maximum Allowable Pressure Rating
//         </h3>
//         <FilterAuthor onChange={onPressureChange} />
//       </div> */}

//       {/* Torque */}
//       {/* <div className="tp-shop-widget mb-50">
//         <h3 className="tp-shop-widget-title">Torque</h3>
//         <TorqueFilter onChange={onTorqueChange} />
//       </div> */}

//       {/* Industry */}
//       <div className="tp-shop-widget mb-50">
//         <h3
//           className="tp-shop-widget-title tp-widget-toggle"
//           onClick={() => setOpen(!open)}
//         >
//           Industry
//           {/* <span className={`tp-widget-arrow ${open ? "open" : ""}`}>▼</span> */}
//         </h3>

//         {open && (
//           <div className="tp-widget-content">
//             <FilterLanguage onChange={onIndustryChange} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import FilterCategory from "./filter-category";
// import FilterLanguage from "./filter-language";

// type Props = {
//   onProductChnage: (sizes: string[]) => void;
//   onIndustryChange: (sizes: string[]) => void;

//   selectedProducts: string[];
//   selectedIndustries: string[];

//   onReset: () => void;
// };

// export default function ShopFilterSidebar({
//   onProductChnage,
//   onIndustryChange,
//   selectedProducts,
//   selectedIndustries,
//   onReset,
// }: Props) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="tp-shop-grid-sidebar mr-10">
//       {/* FILTER HEADER */}
//       <div className="tp-shop-widget mb-35">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3 className="tp-shop-widget-title no-border">Filter</h3>

//           <button
//             onClick={() => {
//               // clear filters
//               onProductChnage([]);
//               onIndustryChange([]);

//               // clear url + reset
//               onReset();

//               // reload page
//               window.location.href = "/allproducts";
//             }}
//             style={{
//               border: "none",
//               background: "transparent",
//               color: "#292929",
//               cursor: "pointer",
//               fontSize: "14px",
//               fontWeight: 600,
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* PRODUCT TYPE */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Product Type</h3>

//         <FilterCategory
//           selected={selectedProducts}
//           onChange={onProductChnage}
//         />
//       </div>

//       {/* INDUSTRY */}
//       <div className="tp-shop-widget mb-50">
//         <h3
//           className="tp-shop-widget-title tp-widget-toggle"
//           onClick={() => setOpen(!open)}
//         >
//           Industry
//         </h3>

//         {open && (
//           <div className="tp-widget-content">
//             <FilterLanguage
//               selected={selectedIndustries}
//               onChange={onIndustryChange}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import FilterCategory from "./filter-category";
// import FilterLanguage from "./filter-language";

// type Props = {
//   onProductChanage: (sizes: string[]) => void;
//   onIndustryChange: (sizes: string[]) => void;

//   selectedProducts: string[];
//   selectedIndustries: string[];

//   onReset: () => void;
// };

// export default function ShopFilterSidebar({
//   onProductChanage,
//   onIndustryChange,
//   selectedProducts,
//   selectedIndustries,
//   onReset,
// }: Props) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="tp-shop-grid-sidebar mr-10">
//       <div className="tp-shop-widget mb-35">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3 className="tp-shop-widget-title no-border">Filter</h3>

//           <button
//             onClick={() => {
//               onProductChanage([]);
//               onIndustryChange([]);
//               onReset();

//               window.location.href = "/allproducts";
//             }}
//             style={{
//               border: "none",
//               background: "transparent",
//               color: "#292929",
//               cursor: "pointer",
//               fontSize: "14px",
//               fontWeight: 600,
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* PRODUCT TYPE */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Product Type</h3>

//         <FilterCategory
//           selected={selectedProducts}
//           onChange={onProductChanage}
//         />
//       </div>

//       {/* INDUSTRY */}
//       <div className="tp-shop-widget mb-50">
//         <h3
//           className="tp-shop-widget-title tp-widget-toggle"
//           onClick={() => setOpen(!open)}
//         >
//           Industry
//         </h3>

//         {open && (
//           <div className="tp-widget-content">
//             <FilterLanguage
//               selected={selectedIndustries}
//               onChange={onIndustryChange}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import FilterCategory from "./filter-category";
// import FilterLanguage from "./filter-language";

// type Props = {
//   onProductChnage: (sizes: string[]) => void;
//   onIndustryChange: (sizes: string[]) => void;

//   selectedProducts: string[];
//   selectedIndustries: string[];

//   industries: any[];

//   onReset: () => void;
// };

// export default function ShopFilterSidebar({
//   onProductChnage,
//   onIndustryChange,
//   selectedProducts,
//   selectedIndustries,
//   industries,
//   onReset,
// }: Props) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="tp-shop-grid-sidebar mr-10">

//       <div className="tp-shop-widget mb-35">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3 className="tp-shop-widget-title no-border">
//             Filter
//           </h3>

//           <button
//             onClick={onReset}
//             style={{
//               border: "none",
//               background: "transparent",
//               color: "#292929",
//               cursor: "pointer",
//               fontSize: "14px",
//               fontWeight: 600,
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">
//           Product Type
//         </h3>

//         <FilterCategory
//           selected={selectedProducts}
//           onChange={onProductChnage}
//         />
//       </div>

//       <div className="tp-shop-widget mb-50">
//         <h3
//           className="tp-shop-widget-title tp-widget-toggle"
//           onClick={() => setOpen(!open)}
//         >
//           Industry
//         </h3>

//         {open && (
//           <div className="tp-widget-content">
//             <FilterLanguage
//               selected={selectedIndustries}
//               onChange={onIndustryChange}
//               industries={industries}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// claude code dated 09-05-2026

// "use client";

// import React, { useState } from "react";
// import FilterCategory from "./filter-category";
// // import FilterLanguage from "./filter-language";
// import FilterIndustry from "./filter-language";

// // Props reduced to only what sidebar itself needs

// type Industry = {
//   id: number;
//   name: string;
//   slug?: string | null;
// };

// type Props = {
//   industries: Industry[];
//   onReset: () => void;
// };

// export default function ShopFilterSidebar({ industries, onReset }: Props) {
//   void industries
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="tp-shop-grid-sidebar mr-10">
//       <div className="tp-shop-widget mb-35">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3 className="tp-shop-widget-title no-border">Filter</h3>

//           <button
//             onClick={onReset}
//             style={{
//               border: "none",
//               background: "transparent",
//               color: "#292929",
//               cursor: "pointer",
//               fontSize: "14px",
//               fontWeight: 600,
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Product Type — FilterCategory reads/writes URL itself */}
//       <div className="tp-shop-widget">
//         <h3 className="tp-shop-widget-title">Product Type</h3>
//         <FilterCategory />
//       </div>

//       {/* Industry — FilterLanguage reads/writes URL itself */}
//       <div className="tp-shop-widget mb-50">
//         <h3
//           className="tp-shop-widget-title tp-widget-toggle"
//           onClick={() => setOpen(!open)}
//           style={{ cursor: "pointer" }}
//         >
//           Industry
//         </h3>

//         {open && (
//           <div className="tp-widget-content">
//             {/* <FilterLanguage industries={industries} /> */}
//             <FilterIndustry />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import FilterCategory from "./filter-category";
import FilterIndustry from "./filter-language";

type Props = {
  onReset: () => void;
};

export default function ShopFilterSidebar({ onReset }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="tp-shop-grid-sidebar mr-10">
      <div className="tp-shop-widget mb-35">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="tp-shop-widget-title no-border">Filter</h3>

          <button
            onClick={onReset}
            style={{
              border: "none",
              background: "transparent",
              color: "#292929",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Product Type — FilterCategory reads/writes URL itself */}
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Product Type</h3>
        <FilterCategory />
      </div>

      {/* Industry — FilterIndustry reads/writes URL itself */}
      <div className="tp-shop-widget mb-50">
        <h3
          className="tp-shop-widget-title tp-widget-toggle"
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
        >
          Industry
        </h3>

        {open && (
          <div className="tp-widget-content">
            <FilterIndustry />
          </div>
        )}
      </div>
    </div>
  );
}