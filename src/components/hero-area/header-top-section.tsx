"use client";

import React from "react";
import Link from "next/link";
import "@/assets/css/HeaderTopSection.css";

const HeaderTopSection = () => {
  return (
    <div className="header-top-section-2">
      <div className="container-fluid">
        <div className="header-top-wrapper-2">
          {/* Left Section */}
          <div className="header-left">
            <ul className="list-icon">
              <li>
                <i className="fa-regular fa-location-dot"></i>
                55 Street, 2nd Block, Malborne Australis
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <Link href="mailto:Support@example.com">
                  Support@example.com
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume"></i>
                <Link href="tel:+16336547896">+163 3654 7896</Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Icons */}
          <div className="social-icon">
            <Link href="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopSection;
