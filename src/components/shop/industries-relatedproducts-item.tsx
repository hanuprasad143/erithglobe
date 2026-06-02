"use client";

import Image from "next/image";
// import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";

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
  item: Product;
};
// type IProps = {
//   item: IBookDT;
// };

export default function IndustrieRelatedProductsItem({ item }: Props) {
  const imageSrc = item.banner_image
    ? item.banner_image.startsWith("http")
      ? item.banner_image
      : `https://backend-test-yeyr.onrender.com/uploads/${item.banner_image}`
    : "/placeholder.png";

  const detailsLink = item.link ? item.link : `/products/${item.slug}`;

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
              width: "100%",
              height: "150px",
              position: "relative",
              //   overflow: "hidden",
              //   borderRadius: "10px",
            }}
          >
            <Image
              src={imageSrc}
              // alt={item.title || item.name}
              alt={item.name}
              fill
              //   style={{
              //     objectFit: "cover",
              style={{
                objectFit: "contain", // or "cover" (see below)
              }}
              unoptimized
            />
          </div>
        </Link>

        <div className="tp-shop-product-content">
          <span className="product-category">{item.product_category}</span>
        </div>

        {/* Category */}
        {/* <div className="tp-shop-product-content">
          <span className="product-category">{item.name}</span>
        </div> */}

        {/* Title */}
        {/* <Link href={`/products/${item.id}`} className="product-title">
          {item.serial_number}
        </Link> */}
        {/* <Link href={detailsLink} className="product-title">
          {item.name || item.title}
          {item.name?.replace(/\-/g, "")}
        </Link> */}

        <Link
          href={detailsLink}
          className="product-title"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // ✅ limit to 2 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "40px", // ✅ keeps all cards equal
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
