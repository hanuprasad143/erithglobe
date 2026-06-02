import Image from "next/image";
// import { Location } from "../svg";
// import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
// import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";

// import mission_thumb_3 from "@/assets/img/our-mission/Gala_night_group_photo.jpg";
// import ContactForm from "../form/contact-form";
// nav items
// const navItems = [
//   {
//     id: "home-tab",
//     target: "#home",
//     label: "Abu Dhabi - BR",
//     ariaControls: "home",
//     selected: true,
//   },
//   {
//     id: "profile-tab",
//     target: "#profile",
//     label: "Head Office",
//     ariaControls: "profile",
//     selected: false,
//   },
//   {
//     id: "contact-tab",
//     target: "#contact",
//     label: "Sharjah - BR",
//     ariaControls: "contact",
//     selected: false,
//   },
//   {
//     id: "Moscow-tab",
//     target: "#Moscow",
//     label: "Ras Al Khaimah Manufacturing Unit",
//     ariaControls: "Moscow",
//     selected: false,
//   },
//   {
//     id: "Campus-tab",
//     target: "#Campus",
//     label: "India",
//     ariaControls: "Campus",
//     selected: false,
//   },
// ];

// tab content data
// const tabContentData = [
//   {
//     id: "home",
//     label: "home-tab",
//     imgSrc: "/assets/img/live/banner-erith-1.png",
//     location: "Office No. 3, Plot #84, Mussafah M40 Abu Dhabi",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     label: "profile-tab",
//     imgSrc: "/assets/img/live/banner-erith-2.jpg",
//     location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     label: "contact-tab",
//     imgSrc: "/assets/img/live/banner-erith-3.jpg",
//     location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
//     isActive: false,
//   },
//   {
//     id: "Moscow",
//     label: "Moscow-tab",
//     imgSrc: "/assets/img/live/banner-erith-4.jpg",
//     location:
//       "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZRas Al Khaimah",
//     isActive: false,
//   },
//   {
//     id: "Campus",
//     label: "Campus-tab",
//     imgSrc: "/assets/img/live/banner-erith-5.jpg",
//     location:
//       "Old no. 76 New no. 120, Master Complex, Second Floor, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai, Tamil Nadu 600017.",
//     isActive: false,
//   },
// ];

// ✅ NEW COMPONENT — image on left, content on right
function AboutErithInfo() {
  return (
    <section className="tp-about-campus-info-area pt-40 pb-30">
      <div className="container">
        <div className="row align-items-start">
          {/* Left image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="tp-about-campus-info-thumb">
              <Image
                src="/assets/img/about/mission.jpeg"
                alt="About Erith Info"
                width={700}
                height={450}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-about-campus-info-content">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                Our Mission & Vision
              </h3>
              <p style={{ lineHeight: 1.3 }} className="mb-4">
                At Erith, we are committed to delivering innovative industrial
                solutions that drive efficiency, safety, and sustainability
                across global industries. Our vision is to shape a future where
                engineering excellence and responsible practices work together
                to create lasting value for businesses, people, and the
                environment.
                <br /> Through advanced flow control technologies and a
                customer-centric approach, we empower industries to operate
                smarter, safer, and more sustainably—contributing to a better
                and more resilient world.
              </p>
              <ul className="list-unstyled mb-4 d-flex flex-wrap">
                <li className="w-50">✔ Safety</li>
                <li className="w-50">✔ Integrity</li>
                <li className="w-50">✔ Sustainability</li>
                <li className="w-50">✔ Innovation</li>
                <li className="w-50">✔ Empowerment</li>
                <li className="w-50">✔ Inspiration</li>
                <li className="w-50">✔ Respect</li>
              </ul>

              {/* <Link
                href="#"
                className="tp-btn mb-10"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Qualitypage() {
  return (
    <section className="tp-about-campus-info-area pt-40 pb-10">
      <div className="container">
        <div className="row align-items-start">
          {/* Left image */}

          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-about-campus-info-content">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                Our Quality Commitment
              </h3>
              <p style={{ lineHeight: 1.3 }} className="mb-4">
                {/* Quality is integrated into every stage of the manufacturing
                process, ensuring that all products meet stringent industry
                standards and customer requirements. From raw material
                verification to final inspection, each step is controlled with
                precision to maintain consistency, accuracy, and reliability. */}
                Quality is integrated into every stage of Erith’s manufacturing
                process, ensuring that all products meet stringent industry
                standards and customer requirements. From raw material
                verification to final inspection, each step is controlled with
                precision to maintain consistency, accuracy, and reliability.
              </p>
              {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
              {/* <Link
                href="/careers"
                className="tp-btn mb-10"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                View Careers
              </Link> */}
              <Link
                href="company/quality"
                className="tp-btn mb-10"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                View Certifications
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="tp-about-campus-info-thumb">
              <Image
                src="/assets/img/quality/quality.jpg"
                alt="About Erith Info"
                width={700}
                height={450}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
        {/* <hr style={{ marginBottom: "20px", marginTop: "25px" }} /> */}
      </div>
    </section>
  );
}

function Joinourteam() {
  return (
    <section className="tp-about-campus-info-area pt-40 pb-10">
      <div className="container">
        <div className="row align-items-start">
          {/* Left image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="tp-about-campus-info-thumb">
              <Image
                src="/assets/img/our-mission/Gala_night_group_photo.jpg"
                alt="About Erith Info"
                width={700}
                height={450}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-about-campus-info-content">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                Join our Team
              </h3>
              <p style={{ lineHeight: 1.3 }} className="mb-4">
                Erith’s extensively trained staff is knowledgeable in all
                aspects of flow control technology and provides personal
                attention to every customer. With years of hands-on industry
                experience, our team offers expert guidance in selecting,
                installing, and maintaining advanced flow control systems. We
                pride ourselves on delivering tailored solutions, prompt
                technical support, and a commitment to excellence that ensures
                optimal performance, reliability, and customer satisfaction in
                every project.
              </p>
              {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
              <Link
                href="/careers"
                className="tp-btn mb-10"
                style={{ borderRadius: "10px", padding: "8px 18px" }}
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
        <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
      </div>
    </section>
  );
}
export default function AboutErith() {
  return (
    <>
      <section className="tp-about-campus-info-area pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
            {/* Left image */}

            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                <h3
                  className="tp-about-campus-title mb-3"
                  style={{ color: "#1d3a72" }}
                >
                  {/* Who We Are */}
                  Our Capabilities
                </h3>

                {/* <h4
                  style={{ color: "#292929", fontSize: "25px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4> */}

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  {/* Erith Specialized Solutions, strategically located in Middle
                  East, is one of the region’s most advance engineering
                  solutions company providing high-end engineered products and
                  services to the distinguished customers in the Energy,
                  Chemicals, Nuclear, Metal & Mining and other vital sectors.
                  With a versatile workforce, covering over 64 countries in
                  Middle East & Africa, we help our strategic partners penetrate
                  into the niche applications in all significant industries. */}
                  Headquartered in the heart of the Middle East, with operations
                  across Canada and beyond, Erith is a trusted provider of
                  engineered solutions with over 25 years of industry
                  experience. We support mission-critical operations across Oil
                  & Gas, Power, Energy, Water, Nuclear, Mining, and Industrial
                  Manufacturing, backed by a global team committed to quality,
                  innovation, and performance.
                </p>
                {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
                {/* <Link
                  href="#"
                  className="tp-btn mb-10"
                  style={{ borderRadius: "10px", padding: "8px 18px" }}
                >
                  Overview
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src="/assets/img/about/about_erith.jpg"
                  alt="About Erith Info"
                  width={700}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEW SECTION BELOW */}
      <AboutErithInfo />
      <Qualitypage />
      <Joinourteam />

      {/* <ContactForm /> */}
    </>
  );
}
