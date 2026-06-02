import React from "react";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";

export default function HeaderTopArea() {
  return (
    <div
      className="tp-header-top grey-bg"
      style={{
        backgroundColor: "#f3f4f8",
        position: "relative",
        zIndex: 100, // ✅ FIX: prevents overlay blocking
      }}
    >
      <div className="container">
        <div className="row container">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center">
              <div className="tp-header-info-item">
                <Link
                  href="/about"
                  style={{ color: "#292929", fontWeight: 400 }}
                >
                  About
                </Link>
              </div>

              <div className="tp-header-info-item">
                <Link
                  href="/contact"
                  style={{ color: "#292929", fontWeight: 400 }}
                >
                  Contact Us
                </Link>
              </div>

              <div className="tp-header-info-item">
                <Link
                  href="/careers"
                  style={{ color: "#292929", fontWeight: 400 }}
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-end align-items-center ms-lg-5">
              {/* Phone */}
              {/* <div className="tp-header-info-item d-none d-md-block">
                <a
                  href="tel:+97172662628"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#292929",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  + 971 7266 2628
                </a>
              </div> */}
              <div className="tp-header-info-item d-none d-xl-flex">
                <a
                  href="tel:+97172662628"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#292929",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  <FaPhone style={{ transform: "scaleX(-1)" }} />+ 971 7 266 2628
                </a>
              </div>

              {/* Email */}
              <div className="tp-header-info-item">
                <a
                  href="mailto:info@erithme.com?subject=Enquiry&body=Hello%20Erith%20Team,"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#292929",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  <FaEnvelope
                    style={{
                      background:
                        "linear-gradient(135deg, #EA4335 50%, #ffffff 50%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  info@erithme.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="tp-header-info-item">
                <a
                  href="https://ae.linkedin.com/company/erith-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#292929",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  <FaLinkedin style={{ color: "#0A66C2" }} />
                  LinkedIn
                </a>
              </div>

              {/* YouTube */}
              <div className="tp-header-info-item">
                <a
                  href="https://www.youtube.com/@erithme2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#292929",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  <FaYoutube style={{ color: "#FF0000" }} />
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
