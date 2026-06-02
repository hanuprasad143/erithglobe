"use client";

// import { RightArrowTwo } from "@/components/svg";
// import Link from "next/link";
// import HeroSection from "@/components/slider/Heroslider";
import {
  FaBook,
  // FaDatabase,
  FaFileInvoice,
  // FaItunesNote,
  FaLightbulb,
  // FaTv,
  // FaVideo,
  FaFileAlt,
  // FaFilePdf,
} from "react-icons/fa";
import CounterOne from "../counter/counter-one";
import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { LocationFour, HomeSvg } from "../svg";
import Link from "next/link";
import ResourcesSearchBar from "./resourcessearchbar";

const contactInfoData = [
  {
    icon: <FaBook color="#fecb00 " />,
    title: "Product Brochures",
    href: "/documents?document_type=Product Brochure",
  },
  {
    icon: <FaLightbulb color="#fecb00" />,
    title: "Case Studies",
    href: "./projects",
  },
  {
    icon: <FaFileInvoice color="#fecb00 " />,
    title: "Technical Data Sheet",
    href: "./documents",
  },
  {
    icon: <FaFileInvoice color="#fecb00 " />,
    title: "Webinars",
    href: "/knowledgecenter/webinars",
  },
  // {
  //   icon: <FaTv color="#fecb00 " />,
  //   title: "Webinars",
  //   href: "/knowledgecenter/webinars",
  // },
  // {
  //   icon: <FaFileInvoice color="#fecb00 " />,
  //   title: "Sales Data Sheet",
  //   href: "/knowledgecenter",
  // },
  // {
  //   icon: <FaVideo color="#fecb00 " />,
  //   title: "Videos",
  //   href: "/knowledgecenter",
  // },
  // {
  //   icon: <FaDatabase color="#fecb00" />,
  //   title: "Software",
  //   href: "/knowledgecenter",
  // },
];

// const recentDocuments = [
//   {
//     id: 1,
//     type: "Technical Sales Manual",
//     title: "Series 70 Electric Actuators",
//     language: "English",
//   },
//   {
//     id: 2,
//     type: "IOM Manual",
//     title: "Linear Position Sensor Series KCA",
//     language: "English",
//   },
//   {
//     id: 3,
//     type: "Sales Data Sheet",
//     title: "Knife Gate Valve Pneumatic Actuator Series KCS/KCT",
//     language: "English",
//   },
//   {
//     id: 4,
//     type: "Sales Data Sheet",
//     title: "Series 5Cs Valve Status Monitor",
//     language: "English",
//   },
//   {
//     id: 5,
//     type: "IOM Manual",
//     title: "Valve Status Monitor Series 5CS",
//     language: "English",
//   },
//   {
//     id: 6,
//     type: "IOM Manual",
//     title: "Valve Status Monitors Series 50 OM-EN-US",
//     language: "English",
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

// const successStories = [
//   {
//     id: 1,
//     title:
//       "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
//     image: "/assets/img/resources/pic1.jpg",
//   },
//   {
//     id: 2,
//     title:
//       "Isolation and Control Valve Solution Enables Accurate Flow Measurement to Provide Public Drinking Water",
//     image: "/assets/img/resources/pic1.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "S19 Rotary Control Valve Excels in Gas Metering Custody Transfer Application",
//     image: "/assets/img/resources/pic1.jpg",
//   },
// ];

// const ApplicationGuides = [
//   {
//     id: 1,
//     title:
//       "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
//     image: "/assets/img/resources/pic2.jpg",
//   },
//   {
//     id: 2,
//     title:
//       "Isolation and Control Valve Solution Enables Accurate Flow Measurement to Provide Public Drinking Water",
//     image: "/assets/img/resources/pic2.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "S19 Rotary Control Valve Excels in Gas Metering Custody Transfer Application",
//     image: "/assets/img/resources/pic2.jpg",
//   },
// ];

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

type IProps = {
  title?: string;
  subtitle?: string;
  // admission?: boolean;
};

type Document = {
  id: number;
  title: string;
  document_type: string;
  product_type: string;
  file_url: string;
  created_at: string;
  language: string;
};

export default function ResourceBanner({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
  // admission,
}: IProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [successStories, setSuccessStories] = useState<SuccessStorieslist[]>(
    [],
  );
  const [applicationGuides, setApplicationGuides] = useState<
    SuccessStorieslist[]
  >([]);

  // useEffect(() => {
  //   fetch("https://backend-test-yeyr.onrender.com/api/successstories")
  //     .then((res) => res.json())
  //     .then(setSuccessStories);
  // }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://backend-test-yeyr.onrender.com/api/successstories?category_type=Success%20Stories",
  //   )
  //     .then((res) => res.json())
  //     .then(setSuccessStories)
  //     .catch(console.error);
  // }, []);
  useEffect(() => {
    const category = "Success Stories";

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(category)}`,
    )
      .then((res) => res.json())
      .then(setSuccessStories);
  }, []);

  useEffect(() => {
    const category = "Webinars";

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(category)}`,
    )
      .then((res) => res.json())
      .then(setApplicationGuides);
  }, []);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(
          "https://backend-test-yeyr.onrender.com/api/product-downloads",
        );
        const data = await res.json();

        const sorted = data.sort(
          (a: Document, b: Document) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );

        setDocuments(sorted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDocs();
  }, []);

  // commented code dated 29-05-2026 //
  // const handleDownload = async (doc: Document) => {
  //   try {
  //     const response = await fetch(
  //       `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
  //     );
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = doc.file_url;
  //     a.click();
  //   } catch (err) {
  //     console.error("Download failed", err);
  //   }
  // };

  // commented code dated 29-05-2026 //

  const [documents, setDocuments] = useState<Document[]>([]);
  return (
    <>
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
            backgroundImage: "url(/assets/img/banner/Marine_banner.png)",
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

      {/* Main Content Container */}
      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row align-center">
          <div className="col-xl-12 col-lg-12">
            {/* Recommended Categories Section */}
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-12">
                <h2
                  style={{
                    fontSize: "25px",
                    color: "#292929",
                    marginBottom: "30px",
                  }}
                >
                  Recommended Categories
                </h2>
              </div>

              {contactInfoData.map((item, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-20"
                >
                  <Link
                    href={item.href}
                    className="tp-contact-info-item w-100 d-flex justify-content-between align-items-center"
                    style={{
                      padding: "5px 4px",
                      minHeight: "48px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      backgroundColor:
                        hoveredIndex === index ? "#f5f5f5" : "transparent",
                      textDecoration: "none",
                      borderRadius: "10px",
                      height: "100%",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="tp-contact-info d-flex align-items-center"
                      style={{
                        gap: "15px",
                        padding: "18px 20px",
                        flex: 1,
                        minWidth: "0",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </span>

                      <h4
                        className="tp-contact-info-title mb-0"
                        style={{
                          color: "#292929",
                          fontSize: "15px",
                          lineHeight: "1.4",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Right Arrow */}
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#fecb00",
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform:
                          hoveredIndex === index
                            ? "translateX(4px)"
                            : "translateX(0)",
                        transition: "all 0.3s ease",
                        marginRight: "15px",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Recent Documents Section */}
            <div className="row" style={{ marginTop: "20px" }}>
              {/* 🔍 SEARCH BAR */}
              {/* <div className="col-12 mb-4">
                <input
                  type="text"
                  placeholder="Search documents..."
                  style={{
                    width: "420px",
                    padding: "10px 14px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </div> */}

              {/* HEADER */}
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-30">
                  <h2
                    style={{
                      fontSize: "25px",
                      color: "#292929",
                      marginBottom: "0",
                    }}
                  >
                    Recent Documents
                  </h2>
                  <a
                    href="/documents"
                    style={{
                      color: "#292929",
                      textDecoration: "none",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View All Documents →
                  </a>
                </div>
              </div>

              {/* DOCUMENT CARDS */}
              {documents.slice(0, 6).map((doc) => (
                <div
                  key={doc.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30"
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
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onClick={() => {
                      window.open(
                        `https://backend-test-yeyr.onrender.com/uploads/${doc.file_url}`,
                        "_blank",
                      );
                    }}
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
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          aria-hidden="true"
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

                      <div style={{ flex: 1, minWidth: "0" }}>
                        <h5
                          style={{
                            color: "#292929",
                            fontSize: "15px",
                            fontWeight: "600",
                            marginBottom: "6px",
                          }}
                        >
                          {doc.document_type}
                        </h5>

                        <p
                          style={{
                            color: "#333",
                            fontSize: "13px",
                            marginBottom: "0",
                            lineHeight: "1.5",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {doc.title}
                        </p>
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className="d-flex align-items-center justify-content-between mt-4"
                      style={{
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "#fff",
                          padding: "8px 18px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "inline-block",
                          fontSize: "13px",
                          border: "none",
                        }}
                      >
                        View Document
                      </button>

                      <span
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          marginTop: "5px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {doc.language}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Case Studies
              </h2>
              <a
                href="/projects"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Case Studies →
              </a>
            </div>
          </div>

          {/* Success Story Cards */}
          {successStories.slice(0, 3).map((story) => (
            <div key={story.id} className="col-lg-4 col-md-6 mb-30">
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "230px",
                  backgroundImage: `url(https://backend-test-yeyr.onrender.com${story.image})`, // ✅ FIXED
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
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "13px",
                      }}
                    >
                      <FaFileAlt size={14} /> {story.label || "Case Study"}{" "}
                      {/* ✅ dynamic */}
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
                      href={`/knowledgecenter/successstories/${story.slug}`} // ✅ IMPORTANT
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

      {/* applicationGuides */}
      <div className="container" style={{ marginBottom: "80px" }}>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Webinars
              </h2>

              <a
                href="/knowledgecenter/webinars"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Webinars →
              </a>
            </div>
          </div>

          {/* Webinar Cards */}
          {applicationGuides.slice(0, 3).map((story) => (
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
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "13px",
                      }}
                    >
                      <FaFileAlt size={14} /> {story.label || "Webinar"}
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
                      href={`/knowledgecenter/webinars/${story.slug}`}
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
    </>
  );
}
