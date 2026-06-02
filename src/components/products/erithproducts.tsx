import Image from "next/image";
// import { Location } from "../svg";
// import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
// import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";
// import { RightSmArrowThree } from "../svg";

// const results = [
//   {
//     id: "home",
//     title: "Description",
//     ariaControls: "home",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     title: "Specifications",
//     ariaControls: "profile",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     title: "Downloads",
//     ariaControls: "contact",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     title: "Features & Benefits",
//     ariaControls: "contact",
//     isActive: false,
//   },
//   {
//     id: "contact",
//     title: "Product Insights",
//     ariaControls: "contact",
//     isActive: false,
//   },
// ];

// ✅ NEW COMPONENT — image on left, content on right
// function AboutErithInfo() {
//   return (
//     <section className="tp-about-campus-info-area pt-80 pb-80">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left image */}
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div className="tp-about-campus-info-thumb">
//               <Image
//                 src="/assets/img/about/erith_man.jpg"
//                 alt="About Erith Info"
//                 width={700}
//                 height={450}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Right content */}
//           <div className="col-lg-6">
//             <div className="tp-about-campus-info-content">
//               <h3 className="tp-about-campus-title mb-3">
//                 Our Mission & Vision
//               </h3>
//               <p className="mb-4">
//                 At Erith, our mission and vision center on inspiring change
//                 through responsibility, innovation, and excellence. We provide
//                 advanced industrial solutions that enhance efficiency, safety,
//                 and sustainability. By empowering industries with intelligent
//                 flow control technologies, we strive to lead global
//                 transformation toward a smarter, safer, and more sustainable
//                 future.
//               </p>
//               <ul className="list-unstyled mb-4 d-flex flex-wrap">
//                 <li className="w-50">✔ Responsibility</li>
//                 <li className="w-50">✔ Innovation</li>
//                 <li className="w-50">✔ Diversity</li>
//                 <li className="w-50">✔ Values</li>
//                 <li className="w-50">✔ Safety</li>
//                 <li className="w-50">✔ Empowering</li>
//                 <li className="w-50">✔ Inspirational</li>
//                 <li className="w-50">✔ Change</li>
//               </ul>

//               <Link href="#" className="tp-btn">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Joinourteam() {
//   return (
//     <section className="tp-about-campus-info-area pt-80 pb-80">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left image */}

//           {/* Right content */}
//           <div className="col-lg-6">
//             <div className="tp-about-campus-info-content">
//               <h3 className="tp-about-campus-title mb-3">Join our Team</h3>
//               <p className="mb-4">
//                 Erith’s extensively trained staff is knowledgeable in all
//                 aspects of flow control technology and provides personal
//                 attention to every customer. With years of hands-on industry
//                 experience, our team offers expert guidance in selecting,
//                 installing, and maintaining advanced flow control systems. We
//                 pride ourselves on delivering tailored solutions, prompt
//                 technical support, and a commitment to excellence that ensures
//                 optimal performance, reliability, and customer satisfaction in
//                 every project.
//               </p>
//               {/* <ul className="list-unstyled mb-4">
//                 <li>✔ Advanced engineering design</li>
//                 <li>✔ High-quality industrial components</li>
//                 <li>✔ On-time delivery and support</li>
//               </ul> */}
//               <Link href="#" className="tp-btn">
//                 View Careers
//               </Link>
//             </div>
//           </div>
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div className="tp-about-campus-info-thumb">
//               <Image
//                 src="/assets/img/our-mission/Gala_night_group_photo.jpg"
//                 alt="About Erith Info"
//                 width={700}
//                 height={450}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function ErithProducts() {
  return (
    <>
      <section className="tp-about-campus-info-area pt-30 pb-30">
        <div className="container">
          <h5
            style={{
              color: "#fecb00",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
            }}
          >
            Explore More Erith Insights
          </h5>
          <p
            style={{
              color: "#292929",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Learn Even More About How Erith’s Solutions Can Impact Your Business
          </p>

          <div className="row align-items-center">
            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                <h4 className="" style={{ color: "#292929", fontSize: "25px" }}>
                  Dependable Valve Solutions for Power Plants by Erith
                </h4>
                <h3
                  style={{
                    fontSize: "60px",
                    marginBottom: "20px",
                    marginTop: "50px",
                    color: "#1d3a72",
                  }}
                >
                  Power Industry
                </h3>
                <p style={{ marginBottom: "80px" }}>
                  Erith provides reliable valves and actuators for power
                  generation plants, ensuring uptime.
                </p>

                <div className="col-12">
                  <div className="text-start">
                    <p>
                      {/* Explore the most appropriate promgram.​​ */}
                      <Link
                        className="event-read-more text-decoration-none"
                        href="#"
                        style={{ fontSize: "15px" }}
                      >
                        Explore Our Power Valve Solutions →{" "}
                        <span>{/* <RightSmArrowThree /> */}</span>
                      </Link>
                    </p>
                  </div>
                </div>
                {/* <ul className="list-unstyled mb-4">
                <li>✔ Advanced engineering design</li>
                <li>✔ High-quality industrial components</li>
                <li>✔ On-time delivery and support</li>
              </ul> */}
                {/* <Link href="#" className="tp-btn">
                  Overview
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src="/assets/img/products/powerplant.Jpeg"
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
      {/* <AboutErithInfo />
      <Joinourteam /> */}
      {/* <ContactForm /> */}
    </>
  );
}
