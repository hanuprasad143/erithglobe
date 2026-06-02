"use client";
import Image from "next/image";
// import { Location } from "../svg";
// import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
// import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";
// import ErithInductriesEvents from "../event/erith-industries-event";
import IndustriesProducts from "@/app/(shop)/shop-details/_components/industries-related-products";
import {
  FaFileAlt,
  // FaFilePdf,
} from "react-icons/fa";
import { useState, useEffect } from "react";

// import mission_thumb_3 from "@/assets/img/our-mission/Gala_night_group_photo.jpg";
// import ContactForm from "../form/contact-form";
// nav items
// const navItems = [
//   {
//     id: "home-tab",
//     target: "#home",
//     label: "Abu Dhabi - BR",
//     ariaControls: "home",
//     selected: true,
//   },
//   {
//     id: "profile-tab",
//     target: "#profile",
//     label: "Head Office",
//     ariaControls: "profile",
//     selected: false,
//   },
//   {
//     id: "contact-tab",
//     target: "#contact",
//     label: "Sharjah - BR",
//     ariaControls: "contact",
//     selected: false,
//   },
//   {
//     id: "Moscow-tab",
//     target: "#Moscow",
//     label: "Ras Al Khaimah Manufacturing Unit",
//     ariaControls: "Moscow",
//     selected: false,
//   },
//   {
//     id: "Campus-tab",
//     target: "#Campus",
//     label: "India",
//     ariaControls: "Campus",
//     selected: false,
//   },
// ];

// tab content data
// const tabContentData = [
//   {
//     id: "home",
//     label: "home-tab",
//     imgSrc: "/assets/img/live/banner-erith-1.png",
//     location: "Office No. 3, Plot #84, Mussafah M40 Abu Dhabi",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     label: "profile-tab",
//     imgSrc: "/assets/img/live/banner-erith-2.jpg",
//     location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     label: "contact-tab",
//     imgSrc: "/assets/img/live/banner-erith-3.jpg",
//     location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
//     isActive: false,
//   },
//   {
//     id: "Moscow",
//     label: "Moscow-tab",
//     imgSrc: "/assets/img/live/banner-erith-4.jpg",
//     location:
//       "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZRas Al Khaimah",
//     isActive: false,
//   },
//   {
//     id: "Campus",
//     label: "Campus-tab",
//     imgSrc: "/assets/img/live/banner-erith-5.jpg",
//     location:
//       "Old no. 76 New no. 120, Master Complex, Second Floor, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai, Tamil Nadu 600017.",
//     isActive: false,
//   },
// ];

// ✅ NEW COMPONENT — image on left, content on right

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

type Industry = {
  id: number;
  name: string;
  slug: string | null;
};

type IndustryData = {
  id: number;
  category_id: number | null;
  subcategory_id: number | null;
  slug: string | null;
  banner_title: string | null;
  banner_subtitle: string | null;
  banner_image: string | null;
  about_title: string | null;
  about_subtitle: string | null;
  about_description: string | null;
  about_image: string | null;
  created_at: string;
  industries?: Industry[];
};

type SuccessStory = {
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

type Props = {
  data: IndustryData;
};

export default function AboutIndustries({ data }: Props) {
  const aboutImage = data?.about_image
    ? data.about_image.startsWith("http")
      ? data.about_image
      : `https://backend-test-yeyr.onrender.com/uploads/${data.about_image}`
    : "/placeholder.jpg";
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    const category = "Success Stories";

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(category)}`,
    )
      .then((res) => res.json())
      .then(setSuccessStories);
  }, []);
  return (
    <>
      <section className="tp-about-campus-info-area pt-40 pb-30">
        <div className="container mb-30">
          <div className="row align-items-start">
            {/* Left image */}

            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title mb-3"
                  style={{ color: "#1d3a72", fontSize: "40px" }}
                >
                  {data.about_title}
                </h3>

                {/* <h4
                  style={{ color: "#292929", fontSize: "25px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4> */}

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  {/* Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency. */}
                  {data.about_subtitle}
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  {data.about_description}
                </p>
                {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
                {/* <Link
                  href="#"
                  className="tp-btn"
                  style={{ borderRadius: "10px", padding: "8px 18px" }}
                >
                  Overview
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src={aboutImage}
                  alt="About Erith Info"
                  width={700}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                {/* <Image
                  src={`https://backend-test-yeyr.onrender.com${data.about_image}`}
                  alt="about"
                  width={700}
                  height={450}
                /> */}
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: "10px", marginTop: "25px" }} />
        </div>

        {/* <IndustriesProducts
          currentProductId={data.id}
          subcategory_id={data.subcategory_id}
        /> */}
        {/* <IndustriesProducts industries={data.industries} /> */}
        <IndustriesProducts industries={data.industries ?? []} />

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
                    // backgroundImage: `url(${story.image})`,
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
                    {/* Top Content - Badge and Title */}
                    <div>
                      <span
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "#fff", // black text
                          padding: "4px 14px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "inline-block",
                          fontSize: "13px",
                        }}
                      >
                        {/* <FaFileAlt size={14} /> Case Study */}
                        <FaFileAlt size={14} />{" "}
                        {story.label || "Case Study"}{" "}
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

                    {/* Bottom Content - Button */}
                    <div>
                      {/* <Link
                        className="btn rectangle btn-light  mt-xs-10 btn-sm radius animation"
                        href="/knowledgecenter"
                        style={{
                          // padding: "8px",
                          fontSize: "13px",
                          fontWeight: "600",
                          padding: "6px 16px",
                          borderRadius: "10px",
                        }}
                      >
                        Learn more
                      </Link> */}
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
      </section>

      {/* ✅ NEW SECTION BELOW */}
      {/* <AboutErithInfo />
      <Joinourteam /> */}
      {/* <ContactForm /> */}
    </>
  );
}
