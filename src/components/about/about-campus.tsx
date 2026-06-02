"use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Location } from "../svg";
// import Link from "next/link";

import {
  // FaFileAlt,
  // FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";

// ==============================
// NAV ITEMS
// ==============================
// const navItems = [
//   {
//     id: "home-tab",
//     target: "#home",
//     label: "Abu Dhabi - BR",
//     ariaControls: "home",
//   },
//   {
//     id: "profile-tab",
//     target: "#profile",
//     label: "Head Office",
//     ariaControls: "profile",
//   },
//   {
//     id: "contact-tab",
//     target: "#contact",
//     label: "Sharjah - BR",
//     ariaControls: "contact",
//   },
//   {
//     id: "Moscow-tab",
//     target: "#Moscow",
//     label: "Ras Al Khaimah Manufacturing Unit",
//     ariaControls: "Moscow",
//   },
//   {
//     id: "Campus-tab",
//     target: "#Campus",
//     label: "India",
//     ariaControls: "Campus",
//   },
// ];

const ApplicationGuides = [
  {
    id: 1,
    title:
      "Our global headquarters in Dubai serves as the central hub for operations, partnerships, and engineering solutions across the Middle East and Africa.",
    image: "/assets/img/live/head.jpeg",
    label: "Dubai HQ",
    map: "https://www.google.com/maps/place/ERITH+Dubai/@25.10127,55.179012,16z/data=!4m6!3m5!1s0x3e5f6b00363bf22b:0x457ca99cecb965c4!8m2!3d25.1012702!4d55.1790116!16s%2Fg%2F11sc2_9rf5?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    title:
      "Our Ras Al Khaimah facility supports manufacturing, assembly, and specialized industrial solutions tailored for critical applications and regional requirements.",
    image: "/assets/img/live/banner-erith-1.png",
    label: "Ras Al Khaimah",
    map: "https://www.google.com/maps/place/Erith+Industries+-+FZ+LLC+Ras+Al-Khaimah/@25.6853382,55.8036064,17z/data=!3m1!4b1!4m6!3m5!1s0x3ef60b4a4eb30065:0x9436c607451066d5!8m2!3d25.6853382!4d55.8036064!16s%2Fg%2F11q47zx962?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  {
    id: 3,
    title:
      "Our India branch supports engineering, technical coordination, and operational activities, enabling efficient project execution and regional support capabilities.",
    image: "/assets/img/live/banner-erith-5.jpg",
    label: "India",
    map: "https://www.google.com/maps/place/Erith+engineering+solutions+LLP/@13.0423996,80.2349489,17z/data=!4m6!3m5!1s0x3a5267c8044affed:0xd789b42b2f6cacc0!8m2!3d13.0423996!4d80.2349489!16s%2Fg%2F11v418qvpx!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    title:
      "Our Canada operations strengthen international collaboration and support global sourcing, technical coordination, and customer engagement across North America.",
    image: "/assets/img/live/banner-erith-4.jpg",
    label: "Canada",
    map: "https://www.google.com/maps/place/ERITH+Dubai/@25.10127,55.179012,16z/data=!4m6!3m5!1s0x3e5f6b00363bf22b:0x457ca99cecb965c4!8m2!3d25.1012702!4d55.1790116!16s%2Fg%2F11sc2_9rf5?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
];
// ==============================
// TAB CONTENT
// ==============================
// const tabContentData = [
//   {
//     id: "home",
//     tabId: "home-tab",
//     imgSrc: "/assets/img/live/banner-erith-1.png",
//     location: "Office No. 3, Plot #84, Mussafah M40 Abu Dhabi",
//   },
//   {
//     id: "profile",
//     tabId: "profile-tab",
//     imgSrc: "/assets/img/live/banner-erith-2.jpg",
//     location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
//   },
//   {
//     id: "contact",
//     tabId: "contact-tab",
//     imgSrc: "/assets/img/live/banner-erith-3.jpg",
//     location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
//   },
//   {
//     id: "Moscow",
//     tabId: "Moscow-tab",
//     imgSrc: "/assets/img/live/banner-erith-4.jpg",
//     location:
//       "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZ Ras Al Khaimah",
//   },
//   {
//     id: "Campus",
//     tabId: "Campus-tab",
//     imgSrc: "/assets/img/live/banner-erith-5.jpg",
//     location:
//       "Old no. 76 New no. 120, Master Complex, Second Floor, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai, Tamil Nadu 600017.",
//   },
// ];

// ==============================
// COMPONENT
// ==============================
export default function AboutCampus() {
  // const [active, setActive] = useState<string>(navItems[0].id);

  return (
    <section
      className="tp-about-campus-area p-relative pb-20 pe-0 ps-0 px-0"
      id="nearby-locations"
    >
      <div className="container">
        <div className="row" style={{ paddingTop: 20 }}>
          <h3 className="tp-about-campus-title" style={{ color: "#1d3a72" }}>
            Branches
          </h3>
          <p
            className="mb-4"
            style={{
              lineHeight: 1.3,
              color: "#292929",
            }}
          >
            With a growing international presence, Erith operates across key
            regions to provide localized support, engineering expertise, and
            reliable industrial solutions for global industries.
          </p>
          {ApplicationGuides.slice(0, 4).map((story) => (
            <div key={story.id} className="col-lg-3 col-md-6 mb-30">
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "230px",
                  backgroundImage: `url(${story.image})`, // unchanged
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
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                      }}
                    >
                      <FaMapMarkerAlt size={14} />
                      {story.label || "Application Guide"}
                    </span>

                    <h3
                      style={{
                        color: "white",
                        fontSize: "12px", // unchanged
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
                    <a
                      onClick={() => window.open(story.map, "_blank")}
                      className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "6px 16px",
                        borderRadius: "10px",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* LEFT SIDE */}
          {/* <div className="col-lg-4">
            <div
              className="tp-about-campus-tab wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title"
                  style={{ color: "#1d3a72" }}
                >
                  Branches
                </h3>
         
                <ul className="tp-shop-widget" role="tablist">
                  {navItems.map((item) => (
                    <li className="nav-item" role="presentation" key={item.id}>
                      <button
                        className={`nav-link ${
                          active === item.id ? "active" : ""
                        }`}
                        type="button"
                        role="tab"
                        aria-selected={active === item.id}
                        onClick={() => setActive(item.id)}
                        style={{
                        
                          fontWeight: active === item.id ? "bold" : "normal",
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                  }}
                >
                  Erith Specialized Solutions, based in the Middle East,
                  provides advanced engineering products and services across
                  vital sectors. With a diverse presence in 64 countries, we
                  empower partners to excel in niche industrial applications.
                </p>
              </div>
            </div>
          </div> */}

          {/* RIGHT SIDE */}
          {/* <div className="col-lg-8">
            <div className="tab-content wow fadeInUp" data-wow-delay=".5s">
              {tabContentData.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    active === tab.tabId ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="tp-about-campus-box p-relative">
                    <div className="tp-about-campus-thumb"> */}
          {/* <Image
                        src={tab.imgSrc}
                        alt={tab.id}
                        width={718}
                        height={482}
                        style={{ height: "auto" }}
                      /> */}
          {/* <Image
                        src={tab.imgSrc}
                        alt={tab.id}
                        width={718}
                        height={350}
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div> */}
          {/* 
                    <div
                      className="tp-about-campus-content d-flex justify-content-between"
                      style={{ background: "transparent", zIndex: 2 }}
                    >
                      <div className="tp-about-campus-location">
                        <span style={{ color: "#fff", borderColor: "#ffff" }}>
                          <Location />
                        </span>
                        <a style={{ color: "#fff" }} href="#">
                          {tab.location}
                        </a>
                      </div> */}
          {/* 
                      <div
                        className="tp-about-campus-btn"
                        style={{ borderRadius: "10px" }}
                      > */}
          {/* <Link
                          className="tp-btn"
                          style={{
                            color: "#fff",
                            borderColor: "#fff",
                            fontSize: "13px",
                          }}
                          href="#"
                        >
                          Find out More
                        </Link> */}
          {/* <Link
                          className="btn rectangle btn-light mt-md-15 mt-xs-10 btn-md radius animation custom-hover-border"
                          href="/contact"
                          style={{
                            borderRadius: "10px",
                            // marginLeft: "10px",
                            fontSize: "13px",
                          }}
                        >
                          Find out More
                        </Link> */}
          {/* </div>
                    </div>
                  </div> */}
          {/* </div>
              ))} */}
          {/* </div>
          </div> */}
        </div>
        {/* <div className="tp-map-area mb-30 mt-20">
          <div className="tp-contact-map-content"> */}
        {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14539.849890984015!2d54.482767351645464!3d24.34779985307368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%203%2C%20Plot%20%2384%2C%20Mussafah%20M40%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1757593238170!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ borderRadius: "10px" }}
            ></iframe> */}

        <iframe
          style={{
            // padding: "2px 12px",
            borderRadius: "10px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.017462887846!2d55.179011599999995!3d25.101270199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b00363bf22b%3A0x457ca99cecb965c4!2sERITH%20Dubai!5e0!3m2!1sen!2sin!4v1778309186525!5m2!1sen!2sin"
          width={"100%"}
        ></iframe>
        {/* </div>
        </div> */}
      </div>
    </section>
  );
}
