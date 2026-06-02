"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import QualityRelatedProductsItem from "../shop/quality-related-products-item";
import QualityPage from "./quality-page-images";
// import TeamAreaThree from "../team/team-area-three";
import QualityCard from "../shop/quality-certifications-item";

interface ProductItem {
  id: number;
  name: string;
  slug?: string;
  image?: string;
  product_slug?: string;
  product_type?: string;
}

type qualitydatalist = {
  id: number;
  document_type: string;
  pdf_name: string;
  pdf_file: string | null;
  file_url: string;
  image: string;
  title: string;
  created_at: string;
  updated_at: string;
};
export default function ErithQualityInfo() {
  const [data, setData] = useState<ProductItem[]>([]);
  const [qualityData, setQualityData] = useState<qualitydatalist[]>([]);

  /* PRODUCTS API */
  useEffect(() => {
    fetch("https://backend-test-yeyr.onrender.com/api/product-types/product/40")
      .then((res) => res.json())
      .then((result) => {
        const typesData = result?.types || result?.data || result || [];

        const formattedData = typesData.map((item: ProductItem) => ({
          ...item,
          product_slug:
            item.product_slug ||
            item.name
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, ""),
        }));

        setData(formattedData);
      })
      .catch((err) => console.error(err));
  }, []);

  /* QUALITY API */
  useEffect(() => {
    fetch("https://backend-test-yeyr.onrender.com/api/quality")
      .then((res) => res.json())
      .then((data) => {
        const finalData = data?.data || data || [];
        setQualityData(Array.isArray(finalData) ? finalData : []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* TOP SECTION */}
      <section className="tp-about-campus-info-area pt-40 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title mb-3"
                  style={{ color: "#1d3a72" }}
                >
                  Erith Industries
                </h3>

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  Our Manufacturing Facility (UAE) - Where Innovation Meets
                  Industrial Excellence
                </h4>

                <p
                  className="mb-4"
                  style={{ lineHeight: 1.3, color: "#292929" }}
                >
                  Erith Industries in Ras Al-Khaimah, UAE, produces a wide range
                  of Seals and Gaskets, including Ring Joints.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src="/assets/img/quality/quality.jpg"
                alt="About"
                width={700}
                height={450}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          {/* <hr /> */}
        </div>
      </section>

      {/* <TeamAreaThree /> */}

      {/* ✅ QUALITY DOCUMENTS SECTION */}
      <section className="mb-30 mt-10">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12 mb-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  flexWrap: "wrap",
                }}
              >
                <h2 style={{ fontSize: "25px", color: "#292929" }}>
                  Certifications
                </h2>
              </div>
            </div>
          </div>
          <p className="mb-4" style={{ lineHeight: 1.3, color: "#292929" }}>
            At Erith, quality is not an afterthought—it is embedded in every
            product and solution we deliver. Our certifications reflect our
            commitment to international standards, operational excellence, and
            continuous improvement.
          </p> */}

          <div className="tp-about-campus-info-content">
            <h5
              style={{
                color: "#292929",
                marginBottom: "30px",
                fontSize: "25px",
                lineHeight: "1.2",
              }}
            >
              Certifications
            </h5>
            {/* <p
              style={{
                fontSize: "18px",
                color: "#292929",
                fontWeight: "bold",
              }}
            >
              {description.subtitle}
            </p> */}

            <p
              className="mb-4"
              style={{
                lineHeight: 1.3,
                color: "#292929",
                fontSize: "15px",
              }}
            >
              At Erith, quality is not an afterthought—it is embedded in every
              product and solution we deliver. Our certifications reflect our
              commitment to international standards, operational excellence, and
              continuous improvement.
            </p>

            <p
              style={{
                // fontSize: "15px",
                color: "#292929",
                lineHeight: "1.3",
              }}
            ></p>
          </div>

          <div className="row">
            {qualityData.map((item, index) => {
              if (!item) return null;

              return (
                <div key={item.id || index} className="col-lg-3 col-md-6">
                  <QualityCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QualityPage />

      {/* PRODUCTS SECTION */}
      <section
        className="pt-20 pb-40"
        id="erith-products-offerings"
        style={{ scrollMarginTop: "120px" }} // Adjust this value based on your header height for home page purpose using
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 mb-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h2 style={{ fontSize: "25px", color: "#292929" }}>
                  Erith Industries’s offerings
                </h2>

                <Link
                  href="/allproducts"
                  className="event-read-more text-decoration-none"
                  style={{ fontWeight: "600" }}
                >
                  View all Products →
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {data.map((item) => {
              const mappedItem = {
                ...item,
                product_id: item.id,
                product_slug: item.product_slug,
                product_type: item.product_type || "",
              };

              return (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <QualityRelatedProductsItem item={mappedItem} />
                </div>
              );
            })}
          </div>

          <hr />
        </div>
      </section>
    </>
  );
}
