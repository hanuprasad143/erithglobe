// // // "use client";
// // // import Image from "next/image";
// // // import { useState } from "react";
// // // import Slider from "react-slick";
// // // // import star_img from "@/assets/img/our-mission/star.png";
// // // // import shape from "@/assets/img/our-mission/thumb-2-shape.jpg";

// // // // years
// // // const about_years = [
// // //   "ISO 14001 : 2015",
// // //   "ISO 9001 : 2015",
// // //   "ISO 45001 : 2018",

// // // ];

// // // // slider data
// // // const slider_data = [
// // //   {
// // //     id: 1,
// // //     image: "/assets/img/our-mission/thumb-2.jpg",
// // //     title: "15 New <br/> Courses Added",
// // //     description:
// // //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// // //   },
// // //   {
// // //     id: 2,
// // //     image: "/assets/img/our-mission/thumb-3.jpg",
// // //     title: "8 New <br/> Courses Added",
// // //     description:
// // //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// // //   },
// // //   {
// // //     id: 3,
// // //     image: "/assets/img/our-mission/thumb-4.jpg",
// // //     title: "10 New <br/> Courses Added",
// // //     description:
// // //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// // //   },
// // //   {
// // //     id: 4,
// // //     image: "/assets/img/our-mission/thumb-3.jpg",
// // //     title: "8 New <br/> Courses Added",
// // //     description:
// // //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// // //   },
// // //   {
// // //     id: 5,
// // //     image: "/assets/img/our-mission/thumb-2.jpg",
// // //     title: "15 New <br/> Courses Added",
// // //     description:
// // //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// // //   },
// // // ];

// // // // nav options
// // // const slider_nav_options = {
// // //   slidesToShow: 3,
// // //   slidesToScroll: 1,
// // //   arrows: false,
// // //   centerMode: true,
// // //   focusOnSelect: true,
// // //   responsive: [
// // //     {
// // //       breakpoint: 576,
// // //       settings: {
// // //         slidesToShow: 3,
// // //       },
// // //     },
// // //   ],
// // // };
// // // // main slider options
// // // const slider_options = {
// // //   slidesToShow: 1,
// // //   slidesToScroll: 1,
// // //   arrows: false,
// // //   fade: true,
// // // };

// // // export default function AboutThree() {
// // //   const [slider1, setSlider1] = useState<Slider | null>(null);
// // //   const [slider2, setSlider2] = useState<Slider | null>(null);
// // //   return (
// // //     <section className="tp-about-year-area tp-about-year-bg p-relative  pb-95 mb-30">
// // //       {/* <div className="tp-about-year-shape pt-0 mt-0">
// // //         <div className="shape-1">
// // //           <Image src={star_img} alt="star" />
// // //         </div>
// // //         <div className="shape-2">
// // //           <Image src={shape} alt="shape" />
// // //         </div>
// // //       </div> */}
// // //       <div className="tp-about-year-plr tp-about-year-nav" style={{ marginTop: "0", paddingTop: "0" }}>
// // //         <Slider
// // //           {...slider_nav_options}
// // //           asNavFor={slider2 as Slider}
// // //           ref={(slider) => setSlider1(slider)}
// // //           className="slider slider-nav"
// // //         >
// // //           {about_years.map((item) => (
// // //             <div key={item}>
// // //               <h3
// // //                 className="tp-about-year-nav-title"
// // //                 style={{ fontSize: "60px", letterSpacing: "1px", }}
// // //               >
// // //                 {item}
// // //               </h3>
// // //             </div>
// // //           ))}
// // //         </Slider>
// // //       </div>
// // //       <div className="tp-about-year-box">
// // //         <div className="container">
// // //           <div className="row align-items-center">
// // //             <Slider
// // //               {...slider_options}
// // //               asNavFor={slider1 as Slider}
// // //               ref={(slider) => setSlider2(slider)}
// // //               className="slider slider-for"
// // //             >
// // //               {slider_data.map((item) => (
// // //                 <div key={item.id} className="tp-about-year-inner">
// // //                   <div className="row align-items-center">
// // //                     <div className="col-lg-6">
// // //                       <div className="tp-about-year-thumb">
// // //                         <Image
// // //                           src={item.image}
// // //                           alt="year-img"
// // //                           width={408}
// // //                           height={300}
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                     <div className="col-lg-6">
// // //                       <div className="tp-about-year-content">
// // //                         <h4
// // //                           className="tp-about-year-content-title"
// // //                           dangerouslySetInnerHTML={{ __html: item.title }}
// // //                         ></h4>
// // //                         <p>{item.description}</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </Slider>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";
// // import Image from "next/image";
// // import { useState } from "react";
// // import Slider from "react-slick";
// // // import star_img from "@/assets/img/our-mission/star.png";
// // // import shape from "@/assets/img/our-mission/thumb-2-shape.jpg";

// // // years
// // const about_years = [
// //   "ISO 14001 : 2015",
// //   "ISO 9001 : 2015",
// //   "ISO 45001 : 2018",
// // ];

// // // slider data
// // const slider_data = [
// //   {
// //     id: 1,
// //     image: "/assets/img/team/about-team/img69.jpg",
// //     title: "15 New <br/> Courses Added",
// //     description:
// //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/img/our-mission/thumb-3.jpg",
// //     title: "8 New <br/> Courses Added",
// //     description:
// //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/img/our-mission/thumb-4.jpg",
// //     title: "10 New <br/> Courses Added",
// //     description:
// //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// //   },
// //   {
// //     id: 4,
// //     image: "/assets/img/our-mission/thumb-3.jpg",
// //     title: "8 New <br/> Courses Added",
// //     description:
// //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// //   },
// //   {
// //     id: 5,
// //     image: "/assets/img/our-mission/thumb-2.jpg",
// //     title: "15 New <br/> Courses Added",
// //     description:
// //       "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
// //   },
// // ];

// // // nav options
// // const slider_nav_options = {
// //   slidesToShow: 3,
// //   slidesToScroll: 1,
// //   arrows: false,
// //   centerMode: true,
// //   focusOnSelect: true,
// //   responsive: [
// //     {
// //       breakpoint: 576,
// //       settings: {
// //         slidesToShow: 3,
// //       },
// //     },
// //   ],
// // };

// // // main slider options
// // const slider_options = {
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   arrows: false,
// //   fade: true,
// // };

// // export default function AboutThree() {
// //   const [slider1, setSlider1] = useState<Slider | null>(null);
// //   const [slider2, setSlider2] = useState<Slider | null>(null);

// //   return (
// //     <section className="tp-about-year-area tp-about-year-bg p-relative  pb-95 mb-30">
// //       {/* <div className="tp-about-year-shape pt-0 mt-0">
// //         <div className="shape-1">
// //           <Image src={star_img} alt="star" />
// //         </div>
// //         <div className="shape-2">
// //           <Image src={shape} alt="shape" />
// //         </div>
// //       </div> */}

// //       <div
// //         className="tp-about-year-plr tp-about-year-nav"
// //         style={{ marginTop: "0", paddingTop: "0" }}
// //       >
// //         <Slider
// //           {...slider_nav_options}
// //           asNavFor={slider2 as Slider}
// //           ref={(slider) => setSlider1(slider)}
// //           className="slider slider-nav"
// //         >
// //           {about_years.map((item) => (
// //             <div key={item}>
// //               <h3
// //                 className="tp-about-year-nav-title"
// //                 style={{
// //                   fontSize: "clamp(24px, 5vw, 40px)", // ✅ responsive font
// //                   letterSpacing: "clamp(0.5px, 0.3vw, 3px)", // ✅ responsive letter spacing
// //                   wordSpacing: "clamp(2px, 0.8vw, 8px)", // ✅ responsive word spacing
// //                   lineHeight: "1.2",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 {item}
// //               </h3>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>

// //       <div className="tp-about-year-box">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <Slider
// //               {...slider_options}
// //               asNavFor={slider1 as Slider}
// //               ref={(slider) => setSlider2(slider)}
// //               className="slider slider-for"
// //             >
// //               {slider_data.map((item) => (
// //                 <div key={item.id} className="tp-about-year-inner">
// //                   <div className="row align-items-center">
// //                     <div className="col-lg-6">
// //                       <div className="tp-about-year-thumb">
// //                         <Image
// //                           src={item.image}
// //                           alt="year-img"
// //                           width={408}
// //                           height={300}
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="col-lg-6">
// //                       <div className="tp-about-year-content">
// //                         <h4
// //                           className="tp-about-year-content-title"
// //                           dangerouslySetInnerHTML={{ __html: item.title }}
// //                         ></h4>
// //                         <p>{item.description}</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </Slider>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// // data
// const slider_data = [
//   {
//     id: 1,
//     image: "/assets/img/team/about-team/img69.jpg",
//     title: "15 New <br/> Courses Added",
//     description: "Sample description here...",
//   },
//   {
//     id: 2,
//     image: "/assets/img/team/about-team/img70.jpg",
//     title: "8 New <br/> Courses Added",
//     description: "Sample description here...",
//   },
//   {
//     id: 3,
//     image: "/assets/img/team/about-team/img71.jpg",
//     title: "10 New <br/> Courses Added",
//     description: "Sample description here...",
//   },
// ];

// export default function AboutThree() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   // auto slide
//   useEffect(() => {
//     if (paused) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slider_data.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [paused]);

//   return (
//     <section className="tp-about-year-area tp-about-year-bg p-relative pb-30 mb-30 ">
//       <div className="tp-about-year-box">
//         <div className="container">
//           <div className="row align-items-center pt-20">
//             {slider_data.map((item, i) => (
//               <div
//                 key={item.id}
//                 style={{
//                   display: i === index ? "block" : "none",
//                   transition: "0.5s",
//                 }}
//                 className="tp-about-year-inner"
//               >
//                 <div className="row align-items-center">
//                   {/*
//                   <div className="col-lg-6">
//                     <div className="tp-about-year-thumb">
//                       <Image
//                         src={item.image}
//                         alt="year-img"
//                         width={408}
//                         height={300}
//                       />
//                     </div>
//                   </div> */}
//                   <div className="col-lg-6">
//                     <div
//                       className="tp-about-year-thumb"
//                       onMouseEnter={() => setPaused(true)} // ✅ pause only here
//                       onMouseLeave={() => setPaused(false)} // ✅ resume
//                     >
//                       <Image
//                         src={item.image}
//                         alt="year-img"
//                         width={408}
//                         height={300}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-6">
//                     <div className="tp-about-year-content">
//                       <h4
//                         className="tp-about-year-content-title"
//                         dangerouslySetInnerHTML={{ __html: item.title }}
//                       />
//                       <p>{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

// data
const slider_data = [
  {
    id: 1,
    image: "/assets/img/team/about-team/img69.jpg",
  },
  {
    id: 2,
    image: "/assets/img/team/about-team/img70.jpg",
  },
  {
    id: 3,
    image: "/assets/img/team/about-team/img71.jpg",
  },
];

export default function AboutThree() {
  return (
    <section className="tp-about-year-area tp-about-year-bg p-relative pl-0 pb-30 mb-30">
      <div className="tp-about-year-box">
        <div className="container" style={{ paddingLeft: "0" }}>
          <div
            className="row align-items-start pt-20"
            style={{
              justifyContent: "flex-start",
              marginLeft: "0",
              gap: "0px",
            }}
          >
            {slider_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="tp-about-year-thumb pl-0">
                  <Image
                    src={item.image}
                    alt="year-img"
                    width={408}
                    height={300}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
