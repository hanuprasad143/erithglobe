// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import IndustrieRelatedProductsItem from "@/components/shop/industries-relatedproducts-item";

// type Props = {
//   currentProductId: number;
//   subcategory_id: number;
// };

// export default function IndustriesProducts({
//   currentProductId,
//   subcategory_id,
// }: Props) {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://backend-test-yeyr.onrender.com/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // 🔹 filter same subcategory and remove current product
//         const filteredProducts = data.filter(
//           (p: any) =>
//             p.subcategory_id === subcategory_id && p.id !== currentProductId,
//         );

//         setProducts(filteredProducts);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch products:", err);
//         setLoading(false);
//       });
//   }, [currentProductId, subcategory_id]);

//   if (loading) {
//     return (
//       <section className="tp-product-related-area pt-30 pb-10">
//         <div className="container text-center">
//           <p>Loading products...</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="tp-product-related-area pt-30 pb-10">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center mb-4">
//             <h5 style={{ color: "#fecb00", fontSize: "25px" }}>
//               Our Portfolio
//             </h5>
//             <p style={{ fontSize: "40px", color: "#000" }}>
//               Looking for More Solutions?
//             </p>
//             <p
//               style={{ fontSize: "18px", color: "#000", marginBottom: "40px" }}
//             >
//               Discover Our Range of Products Built for Your Industry&apos;s
//               Challenges
//             </p>
//           </div>
//         </div>

//         <div className="row">
//           {products.slice(0, 4).map((item) => (
//             <div key={item.id} className="col-lg-3 col-sm-6">
//               <IndustrieRelatedProductsItem item={item} />
//             </div>
//           ))}
//         </div>

//         <div className="col-12 text-end mt-4">
//           <Link
//             className="event-read-more text-decoration-none"
//             href="/allproducts"
//           >
//             View all Products →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import IndustrieRelatedProductsItem from "@/components/shop/industries-relatedproducts-item";

type Industry = {
  id: number;
  name: string;
  slug: string | null;
};

type Product = {
  id: number;
  subcategory_id: number;
  name: string;
  slug: string;
  serial_number?: string | null;
  short_description?: string | null;
  banner_image?: string | null;
  has_types?: boolean;
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
  product_industries: number[];
};

type Props = {
  industries: Industry[];
};

export default function IndustriesProducts({ industries }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!industries || !industries.length) {
      setLoading(false);
      return;
    }

    const industryIds = industries.map((i) => i.id); // [5, 6, 14, 8, 4, 9]

    fetch("https://backend-test-yeyr.onrender.com/api/products")
      .then((res) => res.json())
      .then((allProducts: Product[]) => {
        const filtered = allProducts.filter((product) =>
          // keep product if any of its product_industries match our industryIds
          product.product_industries?.some((id: number) =>
            industryIds.includes(id),
          ),
        );

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [industries]);

  if (loading) {
    return (
      <section className="tp-product-related-area pt-30 pb-10">
        <div className="container text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="tp-product-related-area pb-10">
      <div className="container">
        <div className="row mb-30">
          <div className="col-lg-12 mb-4">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between", // ✅ left & right
                alignItems: "center",
                flexWrap: "wrap", // ✅ responsive
              }}
            >
              {/* Left Text */}
              {/* <p
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  margin: 0,
                }}
              >
                Erith’s Comprehensive Solutions for Diverse Industrial
                Applications
              </p> */}
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Erith’s Comprehensive Solutions
              </h2>

              {/* <Link
                href={`/allproducts?${industries
                  .map((item) => `Industry=${encodeURIComponent(item.name)}`)
                  .join("&")}&page=1`}
                className="event-read-more text-decoration-none"
                style={{
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                View all Products →
              </Link> */}
              <Link
                href={`/allproducts?${industries
                  .map(
                    (item) =>
                      `Industry=${item.name
                        .toLowerCase()
                        .replace(/&/g, "and")
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")}`,
                  )
                  .join("&")}&page=1`}
                className="event-read-more text-decoration-none"
                style={{
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                View all Products →
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {products.slice(0, 8).map((item) => (
            <div key={item.id} className="col-lg-3 col-sm-6">
              <IndustrieRelatedProductsItem item={item} />
            </div>
          ))}
          <hr style={{ marginBottom: "10px", marginTop: "25px" }} />
        </div>
      </div>
    </section>
  );
}
