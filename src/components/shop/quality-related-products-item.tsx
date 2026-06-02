"use client";

import Image from "next/image";
// import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";

type ProductType = {
  id: number;
  product_id: number;
  product_type: string;
  name: string;
  description?: string;
  short_description?: string;
  image?: string;
  product_slug?: string;
};

type IProps = {
  item: ProductType;
};

const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

export default function QualityRelatedProductsItem({ item }: IProps) {
  const imageSrc = item.image
    ? item.image.startsWith("http")
      ? item.image
      : `${IMAGE_BASE}/${item.image}`
    : "/placeholder.png";

  // ✅ FIX: dynamic link (NO hardcode)
  //   const detailsLink = `/products/mettalic-gaskets/${item.product_slug || item.id}`;
  const detailsLink = `/products/mettalic-gaskets?type=${item.id}`;
  // const detailsLink = `/products/${item.product_slug}?type=${item.id}`;

  return (
    <div className="tp-shop-product-item text-center mb-50 d-flex">
      <div
        className="tp-shop-product-card d-flex flex-column"
        style={{ borderRadius: "10px", width: "100%" }}
      >
        {/* Product Image */}
        <Link href={detailsLink} className="product-image">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "150px",
            }}
          >
            <Image
              src={imageSrc}
              alt={item.name}
              fill
              style={{
                objectFit: "contain",
              }}
              unoptimized
            />
          </div>
        </Link>

        <div className="tp-shop-product-content">
          <span className="product-category">{item.product_type}</span>
        </div>

        <Link
          href={detailsLink}
          className="product-title"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "40px",
            lineHeight: "20px",
          }}
        >
          {item.name?.replace(/\-/g, "")}
        </Link>

        {/* Buttons */}
        <div className="product-btn-wrapper">
          <Link
            href="/contact"
            className="product-btn-primary"
            style={{
              backgroundColor: "#1d3a72",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Inquire
          </Link>

          <Link
            href={detailsLink}
            className="product-btn-secondary"
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
