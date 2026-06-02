"use client";

import Image from "next/image";
import Link from "next/link";

type QualityItem = {
  id: number;
  document_type: string;
  pdf_name: string;
  file_url: string;
  image: string;
  title: string;
};

type IProps = {
  item?: QualityItem;
};

const BASE_URL = "https://backend-test-yeyr.onrender.com/uploads";

export default function QualityCard({ item }: IProps) {
  // ✅ SAFETY (prevents crash)
  if (!item) return null;

  const imageSrc = item.image
    ? `${BASE_URL}/${item.image}`
    : "/placeholder.png";

  const pdfLink = item.file_url ? `${BASE_URL}/${item.file_url}` : "#";

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfLink);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${item.file_url || "file"}.pdf`; // ✅ file name
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    // <div className="tp-shop-product-item text-center mb-50 d-flex">
    //   <div
    //     className="tp-shop-product-card d-flex flex-column"
    //     style={{ borderRadius: "10px", width: "100%" }}
    //   >
    //     {/* IMAGE */}
    //     <div
    //       style={{
    //         position: "relative",
    //         width: "100%",
    //         height: "150px",
    //       }}
    //     >
    //       <Image
    //         src={imageSrc}
    //         alt={item.pdf_name}
    //         fill
    //         style={{ objectFit: "cover",paddingTop:"10px" }}
    //         unoptimized
    //       />
    //     </div>

    //     {/* TYPE */}
    //     <div className="tp-shop-product-content">
    //       <span className="product-category">{item.document_type}</span>
    //     </div>

    //     {/* TITLE */}
    //     {/* <h4
    //       className=""
    //       style={{
    //       display: "-webkit-box",
    //         WebkitLineClamp: 2, // ✅ limit to 2 lines
    //         WebkitBoxOrient: "vertical",
    //         overflow: "hidden",
    //         textOverflow: "ellipsis",
    //         minHeight: "40px", // ✅ keeps all cards equal
    //         lineHeight: "20px",
    //       }}
    //     >
    //       {item.pdf_name}
    //     </h4> */}

    //     <Link
    //       href={"#"}
    //       className="product-title"
    //       style={{
    //         display: "-webkit-box",
    //         WebkitLineClamp: 2, // ✅ limit to 2 lines
    //         WebkitBoxOrient: "vertical",
    //         overflow: "hidden",
    //         textOverflow: "ellipsis",
    //         minHeight: "40px", // ✅ keeps all cards equal
    //         lineHeight: "20px",
    //       }}
    //     >
    //       {item.pdf_name?.replace(/\-/g, "")}
    //     </Link>

    //     {/* BUTTONS */}
    //     <div className="product-btn-wrapper mt-auto">
    //       {/* <a
    //         href={pdfLink}
    //         target="_blank"
    //         className="product-btn-primary"
    //         style={{
    //           backgroundColor: "#1d3a72",
    //           color: "#fff",
    //           padding: "8px 18px",
    //           borderRadius: "10px",
    //           fontWeight: "600",
    //         }}
    //       >
    //         Download
    //       </a> */}
    //       {/* <a
    //         href={pdfLink}
    //         download={item.pdf_name || "file.pdf"} // ✅ forces download
    //         className="product-btn-primary"
    //         style={{
    //           backgroundColor: "#1d3a72",
    //           color: "#fff",
    //           padding: "8px 18px",
    //           borderRadius: "10px",
    //           fontWeight: "600",
    //         }}
    //       >
    //         Download
    //       </a> */}

    //       <button
    //         onClick={handleDownload}
    //         className="product-btn-primary"
    //         style={{
    //           backgroundColor: "#1d3a72",
    //           color: "#fff",
    //           padding: "8px 18px",
    //           borderRadius: "10px",
    //           fontWeight: "600",
    //           border: "none",
    //           cursor: "pointer",
    //         }}
    //       >
    //         Download
    //       </button>

    //       <a
    //         href={pdfLink}
    //         target="_blank"
    //         className="product-btn-secondary"
    //         style={{
    //           padding: "8px 18px",
    //           borderRadius: "10px",
    //           fontWeight: "600",
    //         }}
    //       >
    //         View
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="tp-shop-product-item text-center mb-50 d-flex">
      <div
        className="tp-shop-product-card d-flex flex-column"
        style={{ borderRadius: "10px", width: "100%" }}
      >
        {/* Product Image */}
        <Link href={pdfLink} className="product-image">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "150px",
            }}
          >
            <Image
              src={imageSrc}
              alt={item.pdf_name}
              fill
              style={{
                objectFit: "contain",
              }}
              unoptimized
            />
          </div>
        </Link>

        <div className="tp-shop-product-content">
          <span className="product-category">{item.document_type}</span>
        </div>

        <Link
          href={pdfLink}
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
          {item.title?.replace(/\,/g, "")}
        </Link>

        {/* Buttons */}
        <div className="product-btn-wrapper">
          {/* <Link
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
          </Link> */}
          <button
            onClick={handleDownload}
            className="product-btn-primary"
            style={{
              backgroundColor: "#1d3a72",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "10px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download
          </button>
          {/* 
          <Link
            href={"#"}
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
          </Link> */}
          <a
            href={pdfLink}
            target="_blank"
            className="product-btn-secondary"
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
