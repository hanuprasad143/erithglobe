// import Link from "next/link";
import Image from "next/image";
// import { RightArrow, RightArrowThree } from "../svg";
// import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import { university_classic_event_data } from "@/data/event-data";
import HoverImgItem from "./hover-img-item";
import img1 from "@/assets/img/event/fire-protection.jpg";
import img2 from "@/assets/img/event/fluid-handling.jpg";
import img3 from "@/assets/img/event/sealing-solutions.jpg";

const images = [img1, img2, img3];

export default function ErithInductriesEvents() {
  return (
    <section className="event-area pl-15 pb-50">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Recent Articles
              </h2>
              <a
                href="#"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Articles →
              </a>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
          {university_classic_event_data.map((item, index) => (
            <div key={item.id} className="tp-event-item">
              <div className="row align-items-start">
                {/* Image Column */}
                <div className="col-md-2">
                  <div className="tp-event-list">
                    <div className="tp-hover-reveal-bg-wrapper">
                      <Image
                        src={images[index % images.length]} // cycles through img1, img2, img3
                        alt={item.title || "Event Image"}
                        className="tp-hover-reveal-bg-img"
                        width={400}
                        height={400}
                        priority
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-md-9">
                  <div
                    className="tp-event-content d-flex flex-column"
                    style={{ height: "100%" }}
                  >
                    {/* TOP → Title */}
                    <h3 className="tp-event-title" style={{ fontSize: "25px" }}>
                      <HoverImgItem title={item.title} />
                    </h3>

                    {/* CENTER → Location */}
                    <div
                      className="tp-event-info"
                      style={{ marginTop: "auto", marginBottom: "auto" }}
                    >
                      <span>{item.location}</span>
                    </div>

                    {/* BOTTOM → View Link */}
                    <a
                      href="#"
                      style={{
                        color: "#292929",
                        textDecoration: "none",
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      View Detail Information →
                    </a>
                  </div>
                </div>

                {/* Arrow Column */}
                {/* <div className="col-md-1">
                  <div className="tp-event-arrow text-lg-end pr-15">
                    <Link href="#">
                      <span>
                        <RightArrowThree />
                      </span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
