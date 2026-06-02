"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RelatedProductsItem from "@/components/shop/related-products-item";

type Props = {
  currentProductId: number;
  subcategory_id: number;
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

export default function RelatedProducts({
  currentProductId,
  subcategory_id,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-test-yeyr.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        // 🔹 filter same subcategory and remove current product
        const filteredProducts = data.filter(
          (p: Product) =>
            p.subcategory_id === subcategory_id && p.id !== currentProductId,
        );

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [currentProductId, subcategory_id]);

  if (loading) {
    return (
      <section className="tp-product-related-area pt-30 pb-10">
        <div className="container text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="tp-product-related-area pt-30 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-4">
            <h5 style={{ color: "#fecb00", fontSize: "25px" }}>
              Our Portfolio
            </h5>
            {/* <p style={{ fontSize: "40px", color: "#292929",  }}>
              Looking for More Solutions?
            </p> */}
            <p
              style={{
                fontSize: "40px",
                color: "#292929",
                textAlign: "center",
                lineHeight: "1.2",
                maxWidth: "800px",
                margin: "0 auto",
                marginBottom: "16px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Looking for More Solutions?
            </p>
            <p
              style={{ fontSize: "18px", color: "#000", marginBottom: "40px" }}
            >
              Discover Our Range of Products Built for Your Industry&apos;s
              Challenges
            </p>
          </div>
        </div>

        <div className="row">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="col-lg-3 col-sm-6">
              <RelatedProductsItem item={item} />
            </div>
          ))}
        </div>

        <div className="col-12 text-end mt-4">
          <Link
            className="event-read-more text-decoration-none"
            href="/allproducts"
          >
            View all Products →
          </Link>
        </div>
        <hr style={{ marginBottom: "10px", marginTop: "25px" }} />
      </div>
    </section>
  );
}
