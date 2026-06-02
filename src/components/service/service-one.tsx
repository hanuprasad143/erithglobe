import Link from "next/link";
import Image from "next/image";
import { RightArrowTwo } from "../svg";

// icons
import ser_icon_1 from "@/assets/img/icon/service/icon11.png";
import ser_icon_2 from "@/assets/img/icon/service/icon12.png";
import ser_icon_3 from "@/assets/img/icon/service/icon13.png";
import ser_icon_4 from "@/assets/img/icon/service/icon14.png";
// import ser_icon_5 from "@/assets/img/icon/service/icon5.png";
// import ser_icon_6 from "@/assets/img/icon/service/icon6.png";
// import ser_icon_7 from "@/assets/img/icon/service/icon7.png";
// import ser_icon_8 from "@/assets/img/icon/service/icon8.png";

// import ser_shape from "@/assets/img/shape/service/services-shape-1.png";

// background images
import bg1 from "@/assets/img/bg/plan/plan-4-bg-1.jpg";
import bg2 from "@/assets/img/bg/plan/plan-4-bg-1.jpg";
import bg3 from "@/assets/img/bg/plan/plan-4-bg-1.jpg";
import bg4 from "@/assets/img/bg/plan/plan-4-bg-1.jpg";

// service data
const service_data = [
  {
    id: 1,
    icon: ser_icon_1,
    title: "Innovation & Growth",
    text: "We drive innovation through research, advanced technologies, and sustainable practices that ensure business growth.",
    bg: bg1,
  },
  {
    id: 2,
    icon: ser_icon_2,
    title: "Global Partnerships",
    text: "We collaborate with organizations worldwide, creating long-term value through trusted global alliances.",
    bg: bg2,
  },
  {
    id: 3,
    icon: ser_icon_3,
    title: "Technology Solutions",
    text: "From cloud to AI, we deliver cutting-edge technology solutions that empower enterprises to scale efficiently.",
    bg: bg3,
  },
  {
    id: 4,
    icon: ser_icon_4,
    title: "Sustainability & Impact",
    text: "We integrate eco-friendly practices and responsible business strategies to create lasting positive impact for communities and the environment.",
    bg: bg4,
  },
];

export default function ServiceOne() {
  return (
    <section
      className="service-area tp-service-bg mt-125"
      // style={{ backgroundImage: `url(/assets/img/bg/services-bg1.png)` }}
    >
      <div className="container">
        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div
                className="tp-service-item text-start  wow fadeInUp"
                data-wow-delay={`.${item.id}s`}
              >
                {/* <div className="tp-service-wrap"   style={{ backgroundImage: `url(${item.bg.src})` }}> */}
                <div
                  className="tp-service-wrap"
                  // style={{ backgroundImage: `url(${item.bg.src})` }}
                >
                  <div className="tp-service-icon">
                    <span>
                      <Image src={item.icon} alt="service-icon" />
                    </span>
                  </div>
                  <h4
                    className="tp-service-title"
                    style={{ fontSize: "18px", color: "#292929" }}
                  >
                    <Link
                      href="#"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Link>
                  </h4>
                  <div className="tp-service-btn">
                    <Link href="#">
                      <span>
                        <RightArrowTwo />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tp-service-content">
                  <p
                    style={{ textAlign: "left", lineHeight: "1.3" }}
                    className="text-black"
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="tp-service-all text-center">
              <span className="text-black">
                Trusted by Leading Enterprises Worldwide{" "}
                <Link href="/university-about">
                  Best University <RightSmArrowTwo />
                </Link>
              </span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="tp-service-shape">
        <div
          className="tp-service-shape-1 wow bounceIn"
          data-wow-duration="1.5s"
          data-wow-delay=".4s"
        >
          <Image
            src={ser_shape}
            alt="service-shape"
          />
        </div>
      </div> */}
    </section>
  );
}
