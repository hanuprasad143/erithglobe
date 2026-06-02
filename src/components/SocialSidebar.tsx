"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaShareAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialSidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="social-sidebar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="share-icon" style={{ backgroundColor: "#fecb00" }}>
        <FaShareAlt />
      </div>

      {/* <ul className={`social-icons ${isHovered ? "show" : ""}`}>
        <li>
          <Link
            href="https://wa.me/916382197589" // replace with your WhatsApp number
            target="_blank"
            aria-label="WhatsApp"
            className="whatsapp"
          >
            <FaWhatsapp />
          </Link>
        </li>
        <li>
          <li>
            <Link
              href="https://www.linkedin.com/company/erith-global/"
              target="_blank"
              aria-label="LinkedIn"
              className="linkedin"
            >
              <FaLinkedinIn />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.youtube.com/@erithme2020"
              target="_blank"
              aria-label="Youtube"
              className="youtube"
            >
              <FaYoutube />
            </Link>
          </li>
          <Link
            href="https://www.instagram.com/erithgroup/"
            target="_blank"
            aria-label="Instagram"
            className="instagram"
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/Erithgroupme"
            target="_blank"
            aria-label="Twitter"
            className="twitter"
          >
            <FaTwitter />
          </Link>
        </li>
      </ul> */}

      <ul className={`social-icons ${isHovered ? "show" : ""}`}>
        <li>
          <Link
            href="https://wa.me/916382197589"
            target="_blank"
            aria-label="WhatsApp"
            className="whatsapp"
          >
            <FaWhatsapp />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.linkedin.com/company/erith-global/"
            target="_blank"
            aria-label="LinkedIn"
            className="linkedin"
          >
            <FaLinkedinIn />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.youtube.com/@erithme2020"
            target="_blank"
            aria-label="Youtube"
            className="youtube"
          >
            <FaYoutube />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.instagram.com/erithgroup/"
            target="_blank"
            aria-label="Instagram"
            className="instagram"
          >
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
