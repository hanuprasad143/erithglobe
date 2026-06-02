"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TeamItem from "@/components/team/single/team-item";
import { leadership_data } from "@/data/team-data";

export default function LeadershipArea() {
  return (
    <section className="tp-leadership-area grey-bg pt-120 pb-100">
    <div className="tp-section text-center mb-40 wow fadeInUp" data-wow-delay=".5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
             <div className="tp-section text-center mb-55">
                <h3 className="tp-section-title">
                  {/* <span>
                    {" "}
                    Academic{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>{" "} */}
                  Our Team Members
                </h3>
                {/* <p>Focusing on high education with the best quality.</p> */}
              </div>
            
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}   // show 4 per line
          slidesPerGroup={4}  // move 4 per slide when clicking dots
          loop={true}         // loop back after last slide
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {leadership_data.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
  );
}
