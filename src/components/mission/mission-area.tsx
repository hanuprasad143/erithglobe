import Image from "next/image";
import Link from "next/link";
// import mission_thumb_1 from "@/assets/img/our-mission/thumb11.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/bearings.png";
import mission_thumb_3 from "@/assets/img/our-mission/Gala_night_group_photo.jpg";
// import ContactForm from "@/components/form/contact-form";

// import mission_thumb_2 from "@/assets/img/our-mission/mission-item-2.jpg";
// import mission_thumb_3 from "@/assets/img/our-mission/mission-item-3.jpg";
// import { RightArrowTwo } from "../svg";
import { RightSmArrowThree } from "../svg";

const missionData = [
  {
    id: 1,
    title: "Our Values",
    description: [
      "Responsibility",
      "Innovation",
      "Diversity",
      "Values",
      "Safety",
      "Empowering",
      "Inspirational",
      "Change",
    ],
  },
  // You can add more items here
  // {
  //   id: 2,
  //   title: "Scholarship",
  //   description: [
  //     "Encouraging behaviours which encompass originality",
  //     "Problem-solving in all that we do",
  //   ],
  //   imgSrc: mission_thumb_2,
  // },
  // {
  //   id: 3,
  //   title: "Community",
  //   description: [
  //     "Building meaningful connections",
  //     "Working together for a better future",
  //   ],
  //   imgSrc: mission_thumb_3,
  // },
];

type IProps = {
  top_cls?: string;
};

export default function MissionArea({ top_cls = "grey-bg pt-30" }: IProps) {
  return (
    <section className={`tp-our-mission-area ${top_cls}`}>
      <div
        className="tp-about-bg-main"
        data-background="assets/img/about/about/about-bg.png"
        style={{ backgroundImage: "url(/assets/img/about/about/about-bg.png)" }}
      ></div>

      <div className="container">
        {/* <div className="container-fluid p-0 mb-50 ">
          <div
            className="tp-about-banner-bg"
            data-background="assets/img/about/about/about-thumb1.jpg"
            style={{
              backgroundImage: "url(/assets/img/about/about/about-thumb1.jpg)",
            }}
          >
            <div className="row g-0">
              <div className="col-xl-6 col-lg-12"></div>
              <div className="col-xl-6 col-lg-12">
                <div className="tp-about-banner-content p-relative">
                  <span className="span" style={{ backgroundColor: "#1d3a72" }}>
                    Our Journey
                  </span>
                  <p>
                    With years of expertise in the oil & gas sector
                    <br /> we deliver reliable products and solutions <br /> Our
                    commitment to quality
                    <br /> and safety ensures solutions <br /> that keep your
                    operations running smoothly.
                  </p>
                  {/* <Link href="#">Explore <span><RightArrowTwo clr="currentColor"/></span></Link> */}
        {/* <div className="tp-about-banner-content-year">
                    <span>5</span>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-4">
            <div className="tp-our-mission-thumb" data-wow-delay=".3s ">
              <Image
                src={mission_thumb_2}
                alt="mission-img"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-8">
            <div
              className="tp-our-mission-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="tp-our-mission-heading">
                <h3 className="tp-our-mission-title">Our Products</h3>
                <p>
                  Our modular product line of valves, actuators and accessories
                  offer the best compatibility, economy and quality performance
                  in the flow control industry.
                </p>
              </div>
              <div className="tp-program-all text-start">
                <p>
                  <Link href="#">
                    View all Products{" "}
                    <span>
                      <RightSmArrowThree />
                    </span>
                  </Link>
                </p>
              </div>

              {/* Mission Items */}
              {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
                    i !== missionData.length - 1 ? "mb-20" : ""
                  }`}
                >
                  {/* <div className="tp-our-mission-item-content">
                    <h4 className="tp-our-mission-item-title">{item.title}</h4>
                    <ul className="list-disc pl-5">
                      {item.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Optional Image for Each Item */}
                  {/* <div className="tp-our-mission-item-thumb">
                    <div className={`tp-our-mission-item-thumb-${item.id}`}>
                      <Image src={item.imgSrc} alt={item.title} style={{ height: "auto" }} />
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Image */}

          {/* Right Content */}
          <div className="col-lg-8">
            <div
              className="tp-our-mission-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="tp-our-mission-heading">
                <h3 className="tp-our-mission-title">Join Our Team</h3>
                <p>
                  Eriths extensively trained staff is knowledgeable in all
                  aspects of flow control technology and provide personal
                  attention to every customer.
                </p>
              </div>
              <div className="tp-program-all text-start">
                <p>
                  <Link href="#">
                    View Careers{" "}
                    <span>
                      <RightSmArrowThree />
                    </span>
                  </Link>
                </p>
              </div>

              {/* Mission Items */}
              {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
                    i !== missionData.length - 1 ? "mb-20" : ""
                  }`}
                >
                  {/* <div className="tp-our-mission-item-content">
                    <h4 className="tp-our-mission-item-title">{item.title}</h4>
                    <ul className="list-disc pl-5">
                      {item.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Optional Image for Each Item */}
                  {/* <div className="tp-our-mission-item-thumb">
                    <div className={`tp-our-mission-item-thumb-${item.id}`}>
                      <Image src={item.imgSrc} alt={item.title} style={{ height: "auto" }} />
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-our-mission-thumb" data-wow-delay=".3s ">
              <Image
                src={mission_thumb_3}
                alt="mission-img"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
          {/* <ContactForm/> */}
        </div>
      </div>
    </section>
  );
}
