// "use client";

// import React from "react";
// import { FiSearch } from "react-icons/fi";

// const SearchBar = () => {
//   return (
//     <div className="search-wrapper">
//       <div className="search-box">
//         <FiSearch className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search"
//           aria-label="Search"
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
// import { SearchSvg } from "../svg";
import { DocumentList } from "../document-list/documentlist";
import { FaSearch } from "react-icons/fa";

const API_URL = "https://backend-test-yeyr.onrender.com/api";
// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

/* ================= TYPES ================= */

type Product = {
  id: number;
  name: string;
  slug: string;
  link?: string | null;
  banner_image: string;
};

type ProductType = {
  id: number;
  name: string;
  product_slug: string;
  image: string;
};

type Document = {
  id: number;
  product_id: number;
  product_type: string;
  document_type?: string | null;
  language?: string | null;
  title?: string | null;
  file_url?: string | null;
  created_at?: string;
};

type Industry = {
  id: number;
  slug: string | null;
};

type KnowledgeCenter = {
  id: number;
  title: string;
  category_type: string;
  link?: string;
};

type SearchResponse = {
  products: Product[];
  types: ProductType[];
  documents: Document[];
  industries: Industry[];
  knowledgeCenter: KnowledgeCenter[];
  caseStudies: KnowledgeCenter[];
};

/* ================= HELPERS ================= */

// const getImageUrl = (path?: string) => {
//   if (!path) return "/placeholder.png";
//   if (path.startsWith("http")) return path;
//   return `${IMAGE_BASE}/${path.replace(/^\/+/, "")}`;
// };

/* ================= COMPONENT ================= */

export default function ResourcesSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse>({
    products: [],
    types: [],
    documents: [],
    industries: [],
    knowledgeCenter: [],
    caseStudies: [],
  });

  const [loading, setLoading] = useState(false);
  void loading;
  const [open, setOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  /* 🔹 Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* 🔹 Debounced Search */
  useEffect(() => {
    if (!query.trim()) {
      setResults({
        products: [],
        types: [],
        documents: [],
        industries: [],
        knowledgeCenter: [],
        caseStudies: [],
      });
      setOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_URL}/search?q=${encodeURIComponent(query)}`,
        );
        const data: SearchResponse = await res.json();

        setResults({
          products: data.products ?? [],
          types: data.types ?? [],
          documents: data.documents ?? [],
          industries: data.industries ?? [],
          knowledgeCenter: data.knowledgeCenter ?? [],
          caseStudies: data.caseStudies ?? [],
        });

        setOpen(true);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /* 🔹 Placeholder Rotation */
  // const placeholders = [
  //   "Search products...",
  //   "Search industries...",
  //   "Search documents...",
  //   "Search knowledge center...",
  //   "Search case studies...",
  // ];

  const placeholders = [
    "Search industries...",
    "Search documents...",
    "Search knowledge center...",
    "Search case studies...",
  ];

  useEffect(() => {
    if (query) return;

    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [query]);

  const hasResults =
    results.products.length ||
    results.documents.length ||
    results.industries.length ||
    results.knowledgeCenter.length ||
    results.caseStudies.length;

  /* ================= UI ================= */

  // const [dropdownStyle, setDropdownStyle] = useState<any>({});
  const [dropdownStyle, setDropdownStyle] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  void dropdownStyle;
  useEffect(() => {
    const GAP = 12;

    const updatePosition = () => {
      requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        setDropdownStyle({
          top: rect.bottom + GAP, // ✅ better than rect.top + height
          left: rect.left,
          width: rect.width,
        });
      });
    };

    if (open) {
      updatePosition();

      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    // ✅ VERY IMPORTANT (missing in your code)
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  return (
    <div
      className="tp-leadership-search p-relative"
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "700px",
        margin: "20px auto 0",
        padding: "0 10px",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Search Icon */}
        <FaSearch
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
            fontSize: "16px",
            pointerEvents: "none",
          }}
        />

        {/* Input */}
        <input
          type="text"
          placeholder={query ? "Search..." : placeholders[placeholderIndex]}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            height: "45px",
            paddingLeft: "40px", // space for icon
            paddingRight: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          // className="search-dropdown"
          // style={{
          //   position: "absolute",
          //   top: "55px",
          //   left: 0,
          //   width: "100%", // 👈 same as input
          //   maxWidth: "700px",
          //   backgroundColor: "#fff",
          //   border: "1px solid #e6e6e6",
          //   borderRadius: "12px",
          //   boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          //   zIndex: 9999,
          //   padding: "15px",
          //   maxHeight: "60vh", // 👈 mobile scroll fix
          //   overflowY: "auto",
          // }}

          className="search-dropdown"
          style={{
            position: "absolute",
            top: "55px",

            left:
              typeof window !== "undefined"
                ? window.innerWidth >= 1400
                  ? "460px"
                  : window.innerWidth >= 1200
                    ? "380px"
                    : window.innerWidth >= 992
                      ? "290px"
                      : "0"
                : "0",

            width:
              typeof window !== "undefined"
                ? window.innerWidth >= 1400
                  ? "calc(100% - 460px)"
                  : window.innerWidth >= 1200
                    ? "calc(100% - 380px)"
                    : window.innerWidth >= 992
                      ? "calc(100% - 290px)"
                      : "100%"
                : "100%",

            maxWidth: "700px",
            backgroundColor: "#fff",
            border: "1px solid #e6e6e6",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            zIndex: 9999,
            padding: "15px",
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {/* PRODUCTS */}
          {/* {results.products.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{ color: "#292929", fontSize: "18px",textAlign: "left" }}
              >
                Products
              </h4>
              {results.products.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="search-row"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <div className="left">
                    <div className="img">
                      <Image
                        src={getImageUrl(product.banner_image)}
                        alt={product.name}
                        fill
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
       
                      <p className="title">{product.name.replace(/-/g, " ")}</p>
                      <span className="subtitle">Product</span>
                    </div>
                  </div>
                  <div className="right">
                    <Link href={`/contact`} className="btn primary">
                      Inquire
                    </Link>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )} */}

          {/*knowledge Center*/}
          {results.knowledgeCenter.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Knowledge Center
              </h4>

              {results.knowledgeCenter.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="search-row"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  {/* LEFT */}
                  <div className="left">
                    <div style={{ textAlign: "left" }}>
                      <p className="title">{item.title}</p>
                      <span className="subtitle">
                        {item.category_type || "Knowledge"}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="right">
                    {/* <Link href={`/contact`} className="btn primary">
                      Inquire
                    </Link> */}
                    <Link
                      href={item.link || "#"} // ✅ fallback
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CASE STUDIES */}
          {results.caseStudies.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Case Studies
              </h4>

              {results.caseStudies.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="search-row"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  {/* LEFT */}
                  <div className="left">
                    <div style={{ textAlign: "left" }}>
                      <p className="title">{item.title}</p>
                      <span className="subtitle">
                        {/* {item.category_type || "Case Study"} */}
                        Case Studies
                      </span>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="right">
                    {/* <Link href={`/contact`} className="btn primary">
                      Inquire
                    </Link> */}

                    <Link
                      href={item.link || "#"}
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DOCUMENTS */}
          {results.documents.length > 0 && (
            <DocumentList documents={results.documents} />
          )}

          {/* RESOURCES / TYPES */}
          {/* {results.types.length > 0 && (
            <div className="section">
              <h4 className="section-title">Resources</h4>
              {results.types.slice(0, 2).map((type) => (
                <div key={type.id} className="search-row">
                  <div className="left">
                    <span className="icon">🌐</span>
                    <div>
                      <p className="title">{type.name}</p>
                      <span className="subtitle">Category</span>
                    </div>
                  </div>
                  <div className="right">
                    <Link
                      href={`/products/${type.product_slug}`}
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      Discover
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )} */}

          {/* ✅ INDUSTRIES - NEW SECTION */}
          {results.industries.length > 0 && (
            <div className="section">
              <h4
                className="section-title"
                style={{
                  color: "#292929",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Industries
              </h4>
              {results.industries.slice(0, 2).map((industry) => (
                <div
                  key={industry.id}
                  className="search-row"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <div className="left">
                    <span className="icon">🏭</span>
                    <div style={{ textAlign: "left" }}>
                      <p className="title">{industry.slug}</p>
                      <span className="subtitle">Industry</span>
                    </div>
                  </div>
                  <div className="right">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="btn outline"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SEE ALL */}
          <Link
            href={`/resources/search-resources-result?query=${encodeURIComponent(query)}&page=1`}
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
          >
            See All Results →
          </Link>

          {/* EMPTY */}
          {!hasResults && (
            <div
              style={{
                padding: "12px 15px",
                fontSize: "13px",
                color: "#999",
                textAlign: "left",
              }}
            >
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
