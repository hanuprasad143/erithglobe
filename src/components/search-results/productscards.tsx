"use client";

import Image from "next/image";
import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import Pagination from "../ui/pagination";

type IProps = {
  item: IBookDT;
};

// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

export default function SearchResultsProducts({ item }: IProps) {
  const imageSrc = item.banner_image
    ? item.banner_image.startsWith("http")
      ? item.banner_image
      : `https://backend-test-yeyr.onrender.com/uploads/${item.banner_image}`
    : "/placeholder.png";

  // Use slug for product page link
  const detailsLink = item.link ? item.link : `/products/${item.slug}`;

  //   const [currentPage, setCurrentPage] = useState(0);

  //   const itemsPerPage = 9;

  //   // ✅ PAGINATION (NO DEDUP — SHOW ALL DATA)
  //   const offset = currentPage * itemsPerPage;
  //   const visibleDocs = documents.slice(offset, offset + itemsPerPage);
  //   const pageCount = Math.ceil(documents.length / itemsPerPage);

  //   const handlePageClick = (event: { selected: number }) => {
  //     setCurrentPage(event.selected);
  //   };

  //   // ✅ RESET PAGE WHEN DATA CHANGES
  //   useEffect(() => {
  //     setCurrentPage(0);
  //   }, [documents]);

  return (
    <div className="tp-shop-product-item text-center mb-10 d-flex">
      <div
        className="tp-shop-product-card"
        style={{ borderRadius: "10px", width: "100%" }}
      >
        {/* Product Image */}
        <Link href={detailsLink} className="product-image">
          <div
            style={{
              width: "100%",
              height: "150px",
              position: "relative",
              // overflow: "hidden",
              // borderRadius: "10px",
            }}
          >
            <Image
              src={imageSrc}
              alt={item.title || item.name}
              fill
              style={{
                objectFit: "contain",
              }}
              unoptimized
            />
          </div>
        </Link>

        {/* Category */}
        <div className="tp-shop-product-content">
          <span className="product-category">{item.product_category}</span>
        </div>

        {/* Title */}
        {/* <Link href={detailsLink} className="product-title">
          {item.serial_number}
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
      {/* {pageCount > 1 && (
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-dashboard-pagination pt-20">
              <div className="tp-pagination">
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={pageCount}
                  isCenter={true}
                />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
