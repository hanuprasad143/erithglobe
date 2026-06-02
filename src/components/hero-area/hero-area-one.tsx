// "use client";
// // import Link from "next/link";
// import React from "react";
// // import { EffectFade } from "swiper/modules";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { SwiperOptions } from "swiper/types";
// // import { RightArrow } from "../svg";
// // import HeroSection from "@/components/slider/Heroslider";

// const heroSliderData = [
//   {
//     id: 1,
//     subtitle:
//       "From gaskets to valves and expansion systems—engineered for performance, safety, and reliability.",
//     title: "Sealing, Isolation & Flow Control Solutions",
//     video: "/assets/videos/erith_company.mp4",
//   },
//   {
//     id: 2,
//     subtitle: "Be a part of our history",
//     title: "Education to Create the Future.",
//     video: "/assets/videos/hero-video2.mp4",
//   },
//   {
//     id: 3,
//     subtitle: "Be a part of our history",
//     title: "Discipline to Create the Future.",
//     video: "/assets/videos/hero-video3.mp4",
//   },
// ];

// // const slider_options: SwiperOptions = {
// //   slidesPerView: 1,
// //   effect: "fade",
// //   autoplay: {
// //     delay: 3500,
// //   },
// //   pagination: {
// //     el: ".tp-program-dot",
// //     clickable: true,
// //   },
// // };

// export default function HeroAreaOne() {
//   return (
//     <section
//       className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
//       style={{ height: "500px" }}
//     >
//       {/* <div
//         className="tp-breadcrumb__bg overlay"
//         style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//       ></div> */}
//       <div className="tp-breadcrumb__bg overlay">
//         <video autoPlay loop muted playsInline width={"100%"}>
//           <source src="https://www.logojech.in/prasad/erith_video.mp4" type="video/mp4" />
//         </video>
//       </div>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-sm-12">
//             <div className="tp-breadcrumb__content text-center">
//               <div className="tp-breadcrumb__list inner-after">
//                 <h3
//                   className="tp-breadcrumb__title color"
//                   style={{ fontSize: "60px", marginBottom: "5px",color:"#fecb00" }}
//                 >
//                   {heroSliderData[0].title}
//                 </h3>
//                 <div className="container text-center">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8 col-md-10">
//                       <p
//                         style={{
//                           fontSize: "25px",
//                           fontWeight: 400,
//                           color: "#fff",
//                           lineHeight: "1.5",
//                         }}
//                       >
//                         {heroSliderData[0].subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";

const heroSliderData = [
  {
    id: 1,
    subtitle:
      "From gaskets to valves and expansion systems, engineered for performance, safety, and reliability.",
    title: "Sealing, Isolation & Flow Control Solutions",
  },
];

export default function HeroAreaOne() {
  return (
    <section className="hero-area">
      {/* Background */}
      <div className="hero-bg">
        <video autoPlay loop muted playsInline>
          <source
            src="https://www.logojech.in/prasad/erith_video.mp4"
            type="video/mp4"
          />
        </video>

        {/* 🔥 Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">{heroSliderData[0].title}</h1>

        <p className="hero-subtitle">{heroSliderData[0].subtitle}</p>
        {/* <div className="tp-header-btn d-none d-md-block">
          <Link
            href="/contact"
            style={{
              backgroundColor: "#1d3a72",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
              fontSize: "12px",
            }}
          >
            Request a Quote
          </Link>
        </div> */}
        <div>
          <Link
            className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
            href={"/allproducts"} // ✅ IMPORTANT
            style={{
              fontSize: "13px",
              fontWeight: "600",
              padding: "6px 16px",
              borderRadius: "10px",
            }}
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-area {
          height: 400px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .hero-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* 🔥 Overlay */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.4)
          );
        }

        /* Content */
        .hero-content {
          text-align: center;
          padding: 0 20px;
          max-width: 900px;

          /* Keep same style across screens */
          transform: scale(1);
          transform-origin: center;
        }

        /* Title */
        .hero-title {
          font-size: 40px;
          color: #fecb00;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: 20px;
          color: #fff;
          line-height: 1.5;
        }

        /* 🔥 Scaling for smaller screens */
        @media (max-width: 991px) {
          .hero-content {
            transform: scale(0.8);
          }
        }

        @media (max-width: 576px) {
          .hero-content {
            transform: scale(0.6);
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
