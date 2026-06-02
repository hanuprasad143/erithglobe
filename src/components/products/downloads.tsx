"use client";

import { useState } from "react";
// import NiceSelect from "@/ui/NiceSelect";
import NiceSelect from "../ui/nice-select";

type Download = {
  id: number;
  product_id?: number;
  product_type?: string;
  title?: string | null;
  description?: string | null;
  language?: string | null;
  file_url?: string | null;
  document_type?: string | null;
  created_at?: string;
};

type Props = {
  downloads: Download[];
};

const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

export default function ServiceFour({ downloads }: Props) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  /* =============================
     DYNAMIC DROPDOWN VALUES
  ============================== */

  const documentTypes = [
    { value: "", label: "Select a Document Type" },
    { value: "all", label: "All" },
    // ...Array.from(new Set(downloads.map((d) => d.document_type))).map(
    ...Array.from(new Set(downloads.map((d) => d.document_type ?? "")))
      .filter(Boolean)
      .map((type) => ({
        value: type,
        label: type,
      })),
  ];

  const languages = [
    { value: "", label: "Select Language" },
    // ...Array.from(new Set(downloads.map((d) => d.language))).map((lang) => ({
    ...Array.from(new Set(downloads.map((d) => d.language ?? "")))
      .filter(Boolean)
      .map((lang) => ({
        value: lang,
        label: lang,
      })),
  ];

  /* =============================
     FILTER DOWNLOADS
  ============================== */

  const filteredDownloads = downloads.filter((d) => {
    const typeMatch =
      selectedType === "" ||
      selectedType === "all" ||
      d.document_type === selectedType;

    const languageMatch =
      selectedLanguage === "" || d.language === selectedLanguage;

    return typeMatch && languageMatch;
  });

  return (
    <section className="tp-shop-service-area pb-30">
      <div className="container px-0">
        {/* =============================
           FILTERS
        ============================== */}

        <div className="row mb-40">
          <div className="col-lg-6 col-md-6 col-12 custom-select-box">
            <NiceSelect
              options={documentTypes}
              defaultCurrent={0}
              onChange={(item) => setSelectedType(item.value)}
              name="documentType"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-12 custom-select-box">
            <NiceSelect
              options={languages}
              defaultCurrent={0}
              onChange={(item) => setSelectedLanguage(item.value)}
              name="language"
            />
          </div>
        </div>

        {/* =============================
           DOWNLOAD CARDS
        ============================== */}

        <div className="row">
          {filteredDownloads.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mt-30 mb-30">
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "10px",
                  padding: "24px",
                  height: "100%",
                  backgroundColor: "white",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
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
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fecb00"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                      />
                    </svg>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "600",
                        marginBottom: "6px",
                      }}
                    >
                      {service.document_type}
                    </h5>

                    <p
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        marginBottom: "0",
                        lineHeight: "1.5",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {service.title}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start justify-content-between mt-4">
                  <a href={`${IMAGE_BASE}/${service.file_url}`} target="_blank">
                    <button
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        padding: "8px 18px",
                        fontSize: "13px",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginLeft: "50px",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      Download
                    </button>
                  </a>

                  <span
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      marginRight: "100px",
                      marginTop: "5px",
                    }}
                  >
                    {service.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
