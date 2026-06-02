"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import product2 from "@/assets/img/products/product2.png";
import product6 from "@/assets/img/products/product6.png";
import { NextArrowFour, PrevArrowFour } from "../svg";

const images = [product2, product6];

export default function BreadcrumbTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="tp-shop-banner p-relative pt-0 pb-10 px-0"
      style={{ minHeight: "400px" }} // changed from fixed height
    >
      <div
        className="tp-breadcrumb__bg"
        style={{ backgroundColor: "#f3f4f8" }}
      ></div>

      <div className="tp-shop-banner-space p-relative fix">
        <div className="container">
          <div className="row align-items-center">
            {/* TEXT */}
            <div className="col-lg-5 text-center text-lg-start">
              <div className="tp-shop-banner-content">
                <h4
                  style={{
                    color: "#292929",
                    fontWeight: "bold",
                    // marginTop: "10px",
                    // paddingTop: "30px",
                    fontSize: "25px",
                  }}
                >
                  Bidirectional Knife Gate Valve
                </h4>

                <h3
                  style={{
                    color: "#fecb00",
                    fontSize: "60px",
                    fontWeight: "bold",
                  }}
                  className="tp-shop-banner-title display-6 display-lg-1"
                >
                  Series 755
                </h3>

                <p
                  style={{ color: "#000", fontSize: "18px" }}
                  className="px-2 px-lg-0"
                >
                  Durable Bidirectional Valve with Field-Replaceable Liner for
                  Abrasive Industrial Applications
                </p>

                <div className="tp-header-btn d-none d-md-block">
                  <Link
                    href="/contact"
                    style={{
                      backgroundColor: "#1d3a72",
                      color: "#fff",
                      padding: "6px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      display: "inline-block",
                      marginTop: "20px",
                      marginBottom: "10px",
                      fontSize: "13px",
                    }}
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            {/* <div className="col-lg-7 text-center mt-4 mt-lg-0">
              <div className="tp-shop-banner-thumb">
                <Image
                  src={images[currentIndex]}
                  alt="shop-banner-img"
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                  }}
                  priority
                />
              </div>
            </div> */}
            <div className="col-lg-7 text-center mt-4 mt-lg-0">
              <div
                style={{
                  height: "350px", // ✅ Standard height
                  position: "relative",
                }}
              >
                <Image
                  src={images[currentIndex]}
                  alt="shop-banner-img"
                  fill
                  style={{
                    objectFit: "contain", // keeps full image visible
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARROWS */}
      <div
        className="tp-campus-life-arrow d-flex justify-content-start mt-0"
        style={{
          position: "absolute",
          left: "230px", // aligns with container padding
          bottom: "20px",
          gap: "0px",
          zIndex: 5,
        }}
      >
        <div className="tp-campus-prev pointer" onClick={handlePrev}>
          <span>
            <PrevArrowFour />
          </span>
        </div>

        <div className="tp-campus-next pointer" onClick={handleNext}>
          <span>
            <NextArrowFour />
          </span>
        </div>
      </div>
    </section>
  );
}
