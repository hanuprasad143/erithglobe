import Link from "next/link";
// import Image from "next/image";
import ProgramSlider from "../slider/program-slider";
// import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
// import { RightSmArrowThree } from "../svg";

export default function Moreproducts() {
  return (
    <section className="program-area mb-20">
      <div className="container px-0">
        {/* <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
              <div className="tp-section text-center mb-55">
                <h3 className="tp-section-title">
                  <span>
                    {" "}
                    Academic{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>{" "}
                  Programs
                </h3>
                <p>Focusing on high education with the best quality.</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  color: "#fecb00",
                  marginBottom: "20px",
                  marginTop: "30px",
                  fontSize: "25px",
                }}
              >
                Our Portfolio
              </h5>
            </div>
            <p
              style={{
                fontSize: "40px",
                color: "#000",
                marginBottom: "16px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Looking for More Solutions?
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#000",
                marginBottom: "40px",
                justifyContent: "center",
                alignItems: "start",
                display: "flex",
              }}
            >
              Discover Our Range of Products Built for Your Industry&apos;s
              Challenges
            </p>

            <ProgramSlider />
          </div>
          <div className="col-12">
            <div className="tp-program-dot text-center"></div>
          </div>
          <div className="col-12">
            {/* <div className="tp-program-all text-end"> */}
            <div className="text-end">
              <p>
                {/* Explore the most appropriate promgram.​​ */}
                <Link className="event-read-more text-decoration-none" href="#">
                  View all Products → <span>{/* <RightSmArrowThree /> */}</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
