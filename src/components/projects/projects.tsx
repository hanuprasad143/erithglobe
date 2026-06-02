"use client";

// import Image from "next/image";
// import { event_data } from "@/data/event-data";
// import usePagination from "@/hooks/use-pagination";
// import Pagination from "../ui/pagination";
import Link from "next/link";
// import { kids_event_data } from "@/data/event-data";
// import location_svg from "@/assets/img/icon/location.svg";
// import { RightArrow } from "../svg";
import CounterOne from "@/components/counter/counter-one";
import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "next/navigation"; // new
import { useRouter } from "next/navigation";
import ResourcesSearchBar from "../resources/resourcessearchbar";
import {
  FaFileAlt,
  // FaFilePdf,
} from "react-icons/fa";

// const navData = [
//   {
//     id: "home",
//     title: "Positioners Series 6P",
//     ariaControls: "home",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     title: "Retaining Cable Kit For Hand Wheel Chai..",
//     ariaControls: "profile",
//     isActive: true,
//   },
//   {
//     id: "contact",
//     title: "Quarter-Turn Valve Solutions for Reduci..",
//     ariaControls: "contact",
//     isActive: true,
//   },
// ];

const navData = [
  {
    id: "home",
    title: "Gaskets",
    ariaControls: "home",
    isActive: true,
    href: "/products/non-metallic-gaskets",
  },
  {
    id: "profile",
    title: "Expansion Joints",
    ariaControls: "profile",
    isActive: true,
    href: "/products/expansion-joint",
  },
  {
    id: "contact",
    title: "Oil & Gas",
    ariaControls: "contact",
    isActive: true,
    href: "/industries/oil-gas",
  },
  {
    id: "contact",
    title: "Data Center",
    ariaControls: "contact",
    isActive: true,
    href: "/industries/data-center",
  },
];

type SuccessStorieslist = {
  id: number;
  title: string | null;
  slug: string | null;

  category_type: string;

  product_type: string | null;

  sidebar_title: string | null;
  sidebar_desc: string | null;

  image: string | null;

  pdf_url: string | null;

  video_url: string | null;

  label: string | null;

  created_at: string;

  video_url_link: string | null;

  video_thumbnail_image: string | null;
};

type ProductType = {
  id: number;
  product_id: number;
  product_type: string;
  heading_style: string;
  name: string;
  description?: string | null;
  image?: string | null;
  short_description?: string | null;
  show_description?: boolean;
  show_specifications?: boolean;
  show_downloads?: boolean;
  show_features?: boolean;
  show_insights?: boolean;
};

type IProps = {
  title?: string;
  subtitle?: string;
};
export default function AllProjects({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
}: IProps) {
  // const { currentItems } = usePagination(event_data, 6);
  const [successStories, setSuccessStories] = useState<SuccessStorieslist[]>(
    [],
  );

  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    product_type: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://backend-test-yeyr.onrender.com/api/successstories/product-types",
    )
      .then((res) => res.json())
      .then((data) => {
        const types = data.map((item: ProductType) => item.product_type);
        setProductTypes(types);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const product = searchParams.get("product_type") || "";

    setFilters({
      product_type: product,
    });
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    params.append("category_type", "Success Stories");

    if (filters.product_type) {
      params.append("product_type", filters.product_type);
    }

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories?${params.toString()}`,
    )
      .then((res) => res.json())
      .then(setSuccessStories)
      .catch((err) => console.error(err));
  }, [filters.product_type]); // 👈 better dependency

  // useEffect(() => {
  //   const category = "Success Stories";

  //   fetch(
  //     `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(category)}`,
  //   )
  //     .then((res) => res.json())
  //     .then(setSuccessStories);
  // }, []);

  return (
    <>
      {/* Events Section */}

      {/* <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
    

        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage:
              "url(/assets/img/banner/Chemical_Processing_banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "35px",
                      lineHeight: "1.2",
                      fontWeight: "5px",
                      color: "#fecb00",
                    }}
                  >
                    {title}
                  </h2>

                  <p style={{ fontSize: "15px", color: "white" }}>{subtitle}</p>

                  <div
                    className="tp-leadership-search p-relative"
                    style={{
                      position: "relative",
                      width: "700px",
                      margin: "0 auto",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <FaSearch
                        style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#888",
                          fontSize: "16px",
                          pointerEvents: "none",
                        }}
                      />

                      <input
                        type="text"
                        placeholder="Search..."
                        style={{
                          width: "100%",
                          height: "45px",
                          paddingLeft: "45px",
                          paddingRight: "15px",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-campus-student-list d-flex justify-content-center mt-5">
          <div className="d-flex align-items-center gap-1 flex-wrap">
            <p
              style={{
                fontSize: "18px",
                margin: 0,
                color: "white",
                marginRight: "5px",
              }}
            >
              Featured Topics:
            </p>

            {navData.map((nav) => (
              <li key={nav.id} className="nav-item">
                <Link
                  className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
                  href="/contact"
                  style={{
                    fontSize: "10px",
                    padding: "4px 14px",
                    borderRadius: "10px",
                    marginRight: "6px",
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </section> */}

      <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{
          height: "400px",
          overflow: "visible", // ✅ IMPORTANT
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div> */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage:
              "url(/assets/img/banner/Chemical_Processing_banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container" style={{ padding: "0 15px" }}>
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "clamp(22px, 4vw, 35px)", // ✅ responsive text
                      lineHeight: "1.2",
                    }}
                  >
                    {title}
                  </h2>

                  <p style={{ fontSize: "14px", color: "white" }}>{subtitle}</p>

                  <ResourcesSearchBar />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
              Featured Topics:
            </p>

            {/* {navData.map((nav) => (
        <Link
          key={nav.id}
          href="/contact"
          className="btn btn-light btn-sm"
          style={{
            fontSize: "11px",
            padding: "4px 12px",
            borderRadius: "8px",
          }}
        >
          {nav.title}
        </Link>
      ))} */}
            {navData.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href} // ✅ use dynamic href
                className="btn btn-light btn-sm"
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "8px",
                }}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CounterOne />

      <div className="container px-0 pt-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-lg-4 col-md-6 mb-30 row">
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {/* ✅ PRODUCT TYPE (Dynamic only logic changed) */}
                  <select
                    className="form-select"
                    value={filters.product_type}
                    onChange={(e) => {
                      const value = e.target.value;

                      setFilters({ product_type: value });

                      const params = new URLSearchParams(
                        searchParams.toString(),
                      );

                      if (value) {
                        params.set("product_type", value);
                      } else {
                        params.delete("product_type");
                      }

                      router.push(`/projects?${params.toString()}`);
                    }}
                  >
                    <option value="">Select Case Study Type</option>

                    {productTypes.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filters.product_type && (
                <div style={{ marginBottom: "10px" }}>
                  <button
                    type="button"
                    style={{
                      background: "#1d3a72",
                      color: "#fff",
                      border: "none",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // clear filter
                      setFilters({ product_type: "" });

                      const params = new URLSearchParams(
                        searchParams.toString(),
                      );
                      params.delete("product_type");

                      router.push(`/projects?${params.toString()}`);
                    }}
                  >
                    {filters.product_type}

                    {/* ❌ icon */}
                    <span
                      style={{
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {successStories.map((story) => (
              <div key={story.id} className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "230px",
                    backgroundImage: `url(https://backend-test-yeyr.onrender.com${story.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                      padding: "24px 30px 30px 30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Top Content */}
                    <div>
                      <span
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "#fff",
                          padding: "4px 14px",
                          borderRadius: "10px",
                          fontWeight: "600",
                          display: "inline-block",
                          fontSize: "13px",
                        }}
                      >
                        <FaFileAlt size={14} /> {story.label || "Case Study"}
                      </span>

                      <h3
                        style={{
                          color: "white",
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "1.2",
                          marginTop: "12px",
                          marginBottom: "0",
                        }}
                      >
                        {story.title}
                      </h3>
                    </div>

                    {/* Bottom Button */}
                    <div>
                      <Link
                        className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
                        href={`/knowledgecenter/successstories/${story.slug}`}
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          padding: "6px 16px",
                          borderRadius: "10px",
                        }}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
