"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="scrolling-text">
        <span>
          ERITH GLOBAL &nbsp; • &nbsp; ERITH GLOBAL &nbsp; • &nbsp; ERITH GLOBAL
          &nbsp; • &nbsp; ERITH GLOBAL &nbsp; • &nbsp; ERITH GLOBAL &nbsp; •
          &nbsp; ERITH GLOBAL &nbsp; • &nbsp;
        </span>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .scrolling-text {
          position: absolute;
          bottom: 10px;
          width: 200%;
          overflow: hidden;
          white-space: nowrap;
          text-align: center;
          z-index: 2;
          mix-blend-mode: lighten;
        }

        .scrolling-text span {
          display: inline-block;
          font-family: "Poppins", sans-serif;
          font-size: 6rem;
          font-weight: 900;
          letter-spacing: 8px;
          color: transparent;
          -webkit-text-stroke: 2px grey;
          -webkit-background-clip: text;
          background-clip: text;
          background: none;
          animation: scrollText 50s linear infinite;
          line-height: 1.2;
        }

        @keyframes scrollText {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .scrolling-text span {
            font-size: 3rem;
            letter-spacing: 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
