"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { similar_products_data } from "@/data/products-data";

const slider_options: SwiperOptions = {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
  breakpoints: {
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

export default function ProgramSlider() {
  return (
    <Swiper
      {...slider_options}
      modules={[Pagination]}
      className="swiper tp-program-active wow fadeInUp "
      data-wow-delay=".6s"
    >
      {similar_products_data.slice(0, 5).map((item) => (
        <SwiperSlide key={item.id} className="mb-30 ">
          <div
            className="program-card "
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "10px",
              // padding: "24px",
              height: "100%",
              backgroundColor: "white",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image */}
            <div className="tp-program-thumb fix ">
              <Link href="#">
                <Image
                  src={item.img}
                  alt="program-thumb"
                  width={350}
                  height={198}
                  style={{ height: "auto", margin: "0px" }}
                />
              </Link>
            </div>

            {/* Content */}
            {/* <div className="tp-program-content"> */}
            <div className="tp-program">
              {/* <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.6",
                  // marginBottom: "4px",
                  // justifyContent: "center",
                  // alignItems: "start",
                  // display: "flex",
                  color: "#1d3a72",
                }}
              ></p> */}

              {/* <p
                dangerouslySetInnerHTML={{ __html: item.serialno }}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.6",
                  color: "#fecb00",
                  marginTop: "0px",
                  textAlign: "center",
                }}
              ></p> */}

              <div className="tp-shop-product-content">
                <span className="product-category" style={{ fontSize: "15px" }}>
                  {item.description?.length > 18
                    ? item.description.slice(0, 18) + "..."
                    : item.description}
                </span>
              </div>
              {/* <Link href={`/shop-details/${item.id}`} className="product-title"> */}
              <Link
                href="#"
                className="product-title"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "#292929",
                  fontSize: "15px",
                }}
              >
                {item.serialno}
              </Link>
            </div>

            {/* Actions (hidden initially) */}
            <div className="program-actions" style={{ gap: "3px" }}>
              <Link href="../contact" className="program-btn inquire-btn">
                Inquire
              </Link>

              <Link href="#" className="program-btn details-btn">
                Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
