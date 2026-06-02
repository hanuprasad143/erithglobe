"use client";

import { useState, useEffect } from "react";
import Pagination from "../ui/pagination";



type Download = {
  id: number;

  product_id: number;

  product_type: string;

  document_type?: string | null;

  language?: string | null;

  title?: string | null;

  file_url?: string | null;

  created_at?: string;
};

type Props = {
  documents: Download[];
  FILE_BASE: string;
};

export default function DocumentCards({ documents, FILE_BASE }: Props) {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;

  // ✅ PAGINATION (NO DEDUP — SHOW ALL DATA)
  const offset = currentPage * itemsPerPage;
  const visibleDocs = documents.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(documents.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  // ✅ RESET PAGE WHEN DATA CHANGES
  useEffect(() => {
    setCurrentPage(0);
  }, [documents]);

  return (
    <div>
      {/* GRID */}
      <div className="row" style={{ marginTop: "20px" }}>
        {visibleDocs.map((doc: Download, index: number) => {
          const fileUrl = doc.file_url?.startsWith("http")
            ? doc.file_url
            : `${FILE_BASE}/${doc.file_url}`;

          return (
            <div
              key={`${doc.id}_${doc.file_url}_${index}`} // ✅ UNIQUE KEY FIX
              className="col-lg-4 col-md-6 mb-30"
            >
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "12px",
                  padding: "24px",
                  height: "100%",
                  backgroundColor: "white",
                  transition: "box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => window.open(fileUrl, "_blank")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* TOP */}
                <div className="d-flex align-items-start mb-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "16px",
                    }}
                  >
                    <svg
                      // class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fecb00"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#292929",
                      }}
                    >
                      {doc.document_type}
                    </h5>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#333",
                        margin: 0,
                      }}
                    >
                      {doc.title}
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <button
                    style={{
                      backgroundColor: "#1d3a72",
                      color: "#fff",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      border: "none",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    View Document
                  </button>

                  <span
                    style={{
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {doc.language}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      {pageCount > 1 && (
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
      )}
      <hr />
    </div>
  );
}
