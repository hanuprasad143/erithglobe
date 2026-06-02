import Image from "next/image";
import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";

type IProps = {
  item: IBookDT;
};

const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

export default function ShopItem({ item }: IProps) {
  const imageSrc = item.banner_image
    ? item.banner_image.startsWith("http")
      ? item.banner_image
      : `${IMAGE_BASE}/${item.banner_image}`
    : "/placeholder.png";

  // Use slug for product page link
  const detailsLink = item.link ? item.link : `/products/${item.slug}`;

  return (
    // <div className="tp-shop-product-item text-center mb-50">
    <div className="tp-shop-product-item text-center mb-50 d-flex">
      {/* <div className="tp-shop-product-card" style={{ borderRadius: "10px" }}> */}
      <div
        className="tp-shop-product-card d-flex flex-column"
        style={{
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Link href={detailsLink} className="product-image">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "150px", // 🔥 FIXED HEIGHT (same for all)
            }}
          >
            <Image
              src={imageSrc}
              alt={item.name || item.title}
              fill
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

        {/* <div className="product-btn-wrapper"> */}
        <div className="product-btn-wrapper mt-auto">
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
