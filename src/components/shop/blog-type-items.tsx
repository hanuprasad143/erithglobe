// "use client";

// import Image from "next/image";
// import { IBookDT } from "@/types/book-d-t";
// import Link from "next/link";

// type IProps = {
//   item: IBookDT;
// };

// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

// export default function BlogItemCard({ item }: IProps) {
//   const imageSrc = item.img
//     ? `https://backend-test-yeyr.onrender.com${item.img}`
//     : "/placeholder.png";
//   // Use slug for product page link
//   const detailsLink = item.link ? item.link : `/products/${item.slug}`;

//   return (
//     <div className="tp-shop-product-item text-center mb-2 d-flex">
//       <div
//         className="tp-shop-product-card"
//         style={{ borderRadius: "10px", width: "100%" }}
//       >
//         {/* Product Image */}
//         <Link href={detailsLink} className="product-image">
//           <div
//             style={{
//               width: "100%",
//               height: "150px",
//               position: "relative",
//               // overflow: "hidden",
//               // borderRadius: "10px",
//             }}
//           >
//             <Image
//               src={imageSrc}
//               alt={item.title || item.name}
//               fill
//               style={{
//                 objectFit: "contain",
//               }}
//               unoptimized
//             />
//           </div>
//         </Link>

//         {/* Title */}
//         {/* <Link href={detailsLink} className="product-title">
//           {item.serial_number}
//         </Link> */}
//         <Link
//           href={detailsLink}
//           className="product-title"
//           style={{
//             display: "-webkit-box",
//             WebkitLineClamp: 2, // ✅ limit to 2 lines
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             minHeight: "40px", // ✅ keeps all cards equal
//             lineHeight: "20px",
//             marginTop: "10px",
//           }}
//         >
//           {item.title?.replace(/\-/g, "")}
//         </Link>

//         {/* Category */}
//         <div className="tp-shop-product-content">
//           <span className="product-category">{item.date}</span>
//         </div>

//         {/* Buttons */}
//         <div className="product-btn-wrapper">
//           <Link
//             href={`/blog/${item.slug}`}
//             className="product-btn-primary"
//             style={{
//               backgroundColor: "#1d3a72",
//               color: "#fff",
//               padding: "8px 18px",
//               borderRadius: "10px",
//               textDecoration: "none",
//               fontWeight: "600",
//               display: "inline-block",
//             }}
//           >
//             Read more
//           </Link>

//           {/* <Link
//             href={detailsLink}
//             className="product-btn-secondary"
//             style={{
//               padding: "8px 18px",
//               borderRadius: "10px",
//               textDecoration: "none",
//               fontWeight: "600",
//               display: "inline-block",
//             }}
//           >
//             Details
//           </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

type BlogItem = {
  id: number;
  title: string;
  slug: string | null;
  description?: string | null;
  img?: string | null;
  date?: string | null;
  is_top_post?: number;
  top_position?: number | null;
  created_at?: string;
  link?: string | null;
};

type IProps = {
  item: BlogItem;
};

export default function BlogItemCard({ item }: IProps) {
  const imageSrc = item.img
    ? `https://backend-test-yeyr.onrender.com${item.img}`
    : "/placeholder.png";

  // ✅ FIXED → always blog route
  const detailsLink = `/blog/${item.slug}`;

  return (
    <div className="tp-shop-product-item text-center mb-2 d-flex">
      <div
        className="tp-shop-product-card"
        style={{ borderRadius: "10px", width: "100%" }}
      >
        {/* Image */}
        <Link href={detailsLink} className="product-image">
          <div
            style={{
              width: "100%",
              height: "150px",
              position: "relative",
            }}
          >
            <Image
              src={imageSrc}
              alt={item.title}
              fill
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </Link>

        {/* Title */}
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
            marginTop: "10px",
          }}
        >
          {item.title}
        </Link>

        {/* Date */}
        <div className="tp-shop-product-content">
          <span className="product-category">{item.date}</span>
        </div>

        {/* Button */}
        <div className="product-btn-wrapper">
          <Link
            href={detailsLink}
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
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
