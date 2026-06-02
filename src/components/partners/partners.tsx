"use client";

import { useState } from "react";
import Image from "next/image";
// import Link from "next/Link";

//  PARTNERS
const partners = [
  {
    name: "Partner 1",
    image: "/assets/img/partners/garlock.jpg",
    Link: "https://www.garlock.com/",
  },
  {
    name: "Partner 2",
    image: "/assets/img/partners/gpt.jpg",
    Link: "https://gptindustries.com/",
  },
  {
    name: "Partner 3",
    image: "/assets/img/partners/carpenter1.jpg",
    Link: "https://www.cp-ltd.co.uk/",
  },
  {
    name: "Partner 4",
    image: "/assets/img/partners/itw.jpg",
    Link: "https://www.itwtechnologies.com/",
  },
  {
    name: "Partner 5",
    image: "/assets/img/partners/genral.webp",
    Link: "https://general-rubber.com/",
  },
  {
    name: "Partner 6",
    image: "/assets/img/partners/protecfire-logo.png",
    Link: "https://www.protecfire.de/",
  },
  {
    name: "Partner 7",
    image: "/assets/img/partners/shootfire.png",
    Link: "https://vimalfire.com/",
  },
  {
    name: "Partner 8",
    image: "/assets/img/partners/psi.svg",
    Link: "https://psi-products.de/en/",
  },
  {
    name: "Partner 9",
    image: "/assets/img/partners/habonim.png",
    Link: "https://habonim.com/",
  },
  //   {
  //     name: "Partner 10",
  //     image: "/assets/img/partners/partner10.jpg",
  //     Link: "https://partner10.com",
  //   },
];

//  CUSTOMERS
const customers = [
  { name: "Partner 1", image: "/assets/img/partners/partner1.jpg" },
  { name: "Partner 2", image: "/assets/img/partners/partner2.jpg" },
  { name: "Partner 3", image: "/assets/img/partners/partner3.jpg" },
  { name: "Partner 4", image: "/assets/img/partners/partner4.jpg" },
  { name: "Partner 5", image: "/assets/img/partners/partner5.jpg" },
  { name: "Partner 6", image: "/assets/img/partners/partner6.jpg" },
  { name: "Partner 7", image: "/assets/img/partners/partner7.jpg" },
  { name: "Partner 8", image: "/assets/img/partners/partner8.jpg" },
  { name: "Partner 9", image: "/assets/img/partners/partner9.jpg" },
  { name: "Partner 10", image: "/assets/img/partners/partner10.jpg" },
  { name: "Partner 11", image: "/assets/img/partners/partner11.jpg" },
  { name: "Partner 12", image: "/assets/img/partners/partner12.jpg" },
  { name: "Partner 13", image: "/assets/img/partners/partner13.jpg" },
  { name: "Partner 14", image: "/assets/img/partners/partner14.jpg" },
  { name: "Partner 15", image: "/assets/img/partners/partner15.jpg" },
  { name: "Partner 16", image: "/assets/img/partners/partner16.jpg" },
  { name: "Partner 17", image: "/assets/img/partners/partner17.jpg" },
  { name: "Partner 18", image: "/assets/img/partners/partner18.jpg" },
  { name: "Partner 19", image: "/assets/img/partners/partner19.jpg" },
  { name: "Partner 20", image: "/assets/img/partners/partner20.jpg" },
  { name: "Partner 21", image: "/assets/img/partners/partner21.jpg" },
  { name: "Partner 22", image: "/assets/img/partners/partner22.jpg" },
  { name: "Partner 23", image: "/assets/img/partners/partner23.jpg" },
  { name: "Partner 24", image: "/assets/img/partners/partner24.jpg" },
  { name: "Partner 25", image: "/assets/img/partners/partner25.jpg" },
  { name: "Partner 26", image: "/assets/img/partners/partner26.jpg" },
  { name: "Partner 27", image: "/assets/img/partners/partner27.jpg" },
  { name: "Partner 28", image: "/assets/img/partners/partner28.jpg" },
  { name: "Partner 29", image: "/assets/img/partners/partner29.jpg" },
  { name: "Partner 30", image: "/assets/img/partners/partner30.jpg" },
  { name: "Partner 31", image: "/assets/img/partners/partner31.jpg" },
  { name: "Partner 32", image: "/assets/img/partners/partner32.jpg" },
  { name: "Partner 33", image: "/assets/img/partners/partner33.jpg" },
  { name: "Partner 34", image: "/assets/img/partners/partner34.jpg" },
  { name: "Partner 35", image: "/assets/img/partners/partner35.jpg" },
  { name: "Partner 36", image: "/assets/img/partners/partner36.jpg" },
];

export default function PartnersCustomersSection() {
  const [active, setActive] = useState<"partners" | "customers">("partners");

  const data = active === "customers" ? customers : partners;

  return (
    <div className="container mt-45 mb-40">
      <div className="row">
        <div className="col-lg-12 text-start mb-10 bottom-to-top">
          {/* <h5 style={{ color: "#fecb00", fontSize: "25px" }}>
              Our Portfolio
            </h5> */}
          {/* <p style={{ fontSize: "40px", color: "#1d3a72" }}>
            Trusted by Leading Industrial Companies
          </p> */}
          {/* <h1
           style={{ fontSize: "60px", color: "#1d3a72" }}
              >
               
                   Trusted by Industry Leaders
              </h1> */}

          <h3
            className="tp-about-campus-title mb-3"
            style={{ color: "#1d3a72" }}
          >
            {/* Who We Are */}
            Trusted by Industry Leaders
          </h3>
          <p style={{ textAlign: "left", lineHeight: "1.3" }}>
            Supporting major operations, EPCs, and industrial leaders across the
            region
          </p>
        </div>
      </div>
      <div style={{ textAlign: "start", marginBottom: "30px" }}>
        <button
          onClick={() => setActive("partners")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            marginRight: "10px",
            border: "none",
            background: active === "partners" ? "#1d3a72" : "#eee",
            color: active === "partners" ? "#fff" : "#333",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Partners
        </button>

        <button
          onClick={() => setActive("customers")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: active === "customers" ? "#1d3a72" : "#eee",
            color: active === "customers" ? "#fff" : "#333",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Customers
        </button>
      </div>

      <div className="row">
        {data.map((item) => {
          const hasLink = "Link" in item && item.Link;

          return (
            <div
              key={`${active}-${item.name}`}
              className="col-lg-2 col-md-4 col-6 mb-20"
            >
              <div
                style={{
                  border: "3px solid #eee",
                  borderRadius: "10px",
                  padding: "8px",
                  textAlign: "center",
                  height: "100%",
                  cursor: hasLink ? "pointer" : "default",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!hasLink) return;
                  e.currentTarget.style.boxShadow =
                    "0 3px 8px rgba(29,58,114,0.12)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  if (!hasLink) return;
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                    position: "relative",
                  }}
                >
                  {hasLink ? (
                    <a
                      href={item.Link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr style={{ marginTop: "35px", marginBottom: "70px" }} />
    </div>
  );
}
