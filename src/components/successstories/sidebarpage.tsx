"use client";

import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Sidebar({ pdf_url }: { pdf_url: string }) {
  return (
    <div className="side sticky">
      <h5 className="share">SHARE</h5>

      <div className="icons">
        {[FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp].map((Icon, i) => (
          <div key={i} className="icon-box">
            <Icon />
          </div>
        ))}
      </div>

      <p className="desc">
        The evolution of Erith, powered by its people, providing continued
        success to our customers.
        <br />
        <br />
        Read their stories and see how Erith can transform and help your
        company.
      </p>

      <a
        href={`https://backend-test-yeyr.onrender.com${pdf_url}`}
        target="_blank"
        className="download"
      >
        Download
      </a>

      <style jsx>{`
        .sticky {
          position: sticky;
          top: 100px; /* 👈 controls stick position */
        }

        .side {
          padding-left: 20px;
        }

        .share {
          color: #1d3a72;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .icons {
          display: flex;
          gap: 8px;
          margin-bottom: 15px;
        }

        .icon-box {
          width: 35px;
          height: 35px;
          background: #1d3a72;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .desc {
          font-size: 13px;
          color: #555;
          margin-bottom: 20px;
        }

        .download {
          background: #1d3a72;
          color: white;
          padding: 10px 20px;
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
