// import { RightArrowTwo } from "@/components/svg";
// import Link from "next/link";
// import HeroSection from "@/components/slider/Heroslider";

// type IProps = {
//   title?: string;
//   subtitle?: string;
//   admission?: boolean;
// };

// export default function AboutBanner(
//   {
//     // title = "About Us",
//     // subtitle = "We provide the best quality products.",
//     // admission,
//   }: IProps,
// ) {
//   return (
//     <>
//       <section
//         className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         {/* Background Image */}
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//         ></div>

//         {/* Content Section */}
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content">
//                 <div className="tp-breadcrumb__list inner-after">
//                   {/* {admission && <span className="white">Admission</span>}
//                   {title && <span className="white">{title}</span>}
//                   {subtitle && <span className="white">{subtitle}</span>} */}
//                   <h3 className="tp-breadcrumb__title color">About</h3>
//                   <span className="white ">
//                     At Erith, our business is helping our customers with their
//                     flow control requirements.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Optional Hero Section (if needed later) */}
//         {/* <HeroSection /> */}
//       </section>
//     </>
//   );
// }

type IProps = {
  banner_title?: string;
  banner_subtitle?: string;
  banner_image?: string;
};

export default function AboutBanner({
  banner_title = "About",
  banner_subtitle = "At Erith, our business is helping our customers with their flow control requirements.",
  banner_image = "/assets/img/live/ABOUT-ERITH.jpg",
}: IProps) {
  const banner = banner_image
    ? banner_image.startsWith("http")
      ? banner_image
      : `https://backend-test-yeyr.onrender.com/uploads/${banner_image}`
    : "/assets/img/live/ABOUT-ERITH.jpg";
  return (
    <>
      <section
        className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        {/* Background Image */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content Section */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  <h3
                    className="tp-breadcrumb__title color"
                    style={{ color: "#fecb00" }}
                  >
                    {banner_title}
                  </h3>
                  <span className="white">{banner_subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
