// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Email } from "../svg";
// // import FooterSocial from "./footer-social";
// // // import logo from "@/assets/img/logo/logo-black-2.png";
// // // import logo_white from "@/assets/img/logo/logo-white.png";
// // import { footerLinks } from "@/data/footer-links";
// // import erithglobal_black from "@/assets/img/logo/erith_global.png";

// // type Props = {
// //   dashboard_footer?: boolean;
// //   bgClr?: string;
// //   style_2?: boolean;
// //   inner?: boolean;
// // };

// // export default function FooterSeven({
// //   bgClr,
// //   dashboard_footer,
// //   style_2 = false,
// // }: Props) {
// //   // Inline style for vertical separator
// //   // Inline style for vertical separator
// //   const columnStyle = {
// //     borderRight: bgClr ? "none" : "1px solid #1d3a72",
// //   };

// //   return (
// //     <>
// //       <style jsx global>{`
// //         /* Override ONLY text colors to black - preserves all other styles */
// //         .tp-footer-widget-content p {
// //           color: #000000 !important;
// //         }

// //         .tp-footer-widget ul li a {
// //           color: #55585b !important;
// //         }

// //         .tp-footer-contact > span {
// //           color: #55585b !important;
// //         }

// //         .tp-footer-contact > a {
// //           color: #000000 !important;
// //         }

// //         .tp-footer-contact-mail a {
// //           color: #292929 !important;
// //         }

// //         .tp-footer-widget-title {
// //           color: #292929 !important;
// //         }

// //         .tp-footer-copyright span {
// //           color: #55585b !important;
// //         }

// //         .tp-footer-copyright a {
// //           color: #55585b !important;
// //         }
// //           .text-dark-important {
// //   color: #292929 !important;
// //   line-height: 1.6;
// // }

// //         .tp-footer-newsletter-wrap p {
// //           color: #55585b !important;
// //         }

// //         /* Hover color */
// //         .tp-footer-widget ul li a:hover,
// //         .tp-footer-contact > a:hover,
// //         .tp-footer-contact-mail a:hover,
// //         .tp-footer-copyright a:hover {
// //           color: #292929 !important;
// //         }

// //         /* Divider hover (NO layout/style change) */
// //         .tp-footer-main .col-xl-3,
// //         .tp-footer-main .col-xl-2 {
// //           transition: border-color 0.3s ease;
// //         }

// //         .tp-footer-main .col-xl-3:hover,
// //         .tp-footer-main .col-xl-2:hover {
// //           border-right-color: #1d3a72 !important;
// //         }

// //         /* 🔹 FIX: Subscribe button unwanted border/glow */
// //         .tp-footer-newsletter-submit button,
// //         .tp-footer-5-newsletter-submit button {
// //           outline: none !important;
// //           box-shadow: none !important;
// //         }

// //         /* Brand-consistent hover & focus */
// //         .tp-footer-newsletter-submit button:hover,
// //         .tp-footer-newsletter-submit button:focus,
// //         .tp-footer-5-newsletter-submit button:hover,
// //         .tp-footer-5-newsletter-submit button:focus {
// //           outline: none !important;
// //           box-shadow: 0 0 0 2px rgba(29, 58, 114, 0.25) !important;
// //         }
// //         /* Remove full width footer border */
// //         // .tp-footer-5-bottom,
// //         // .tp-footer-bottom,
// //         // .tpd-dashboard-footer-bottom {
// //         //   border-top: none !important;
// //         //   box-shadow: none !important;
// //         // }
// //         /* Remove any theme footer separators */
// //         .tp-footer-main,
// //         .tp-footer-inner,
// //         .tp-footer-5-bottom,
// //         .tp-footer-bottom,
// //         .tpd-dashboard-footer-bottom {
// //           border-top: none !important;
// //           border-bottom: none !important;
// //           box-shadow: none !important;

// //           .noto-products-list,
// //   .noto-products-list li,
// //   .noto-products-list li a {
// //     font-family: 'Poppins', sans-serif !important;
// //         }
// //       `}</style>

// //       <footer
// //         style={{
// //           marginTop: "60px",
// //           backgroundColor: bgClr ? bgClr : "#f3f4f8",
// //         }}
// //       >
// //         <div
// //           className={`tp-footer-main  ${
// //             dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
// //           } pt-80 pb-55`}
// //           style={{
// //             backgroundColor: "#f3f4f8",
// //           }}
// //         >
// //           <div className="container ">
// //             <div className="row">
// //               {/* Column 1 */}
// //               {/* <div
// //                 className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
// //                 // style={columnStyle}
// //               > */}
// //               <div
// //                 className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                 }}
// //               >
// //                 <div className="tp-footer-widget tp-footer-col-1 mb-30">
// //                   <div className="tp-footer-widget-logo mb-20 tp-header-logo">
// //                     <Link href="/">
// //                       <Image
// //                         src={
// //                           dashboard_footer
// //                             ? erithglobal_black
// //                             : erithglobal_black
// //                         }
// //                         alt="logo"
// //                         style={{ height: "auto" }}
// //                       />
// //                     </Link>
// //                   </div>
// //                   <div className="tp-footer-widget-content">
// //                     {/* <p
// //                       className="noto-products-list"
// //                       style={{ color: "#55585b" }}
// //                     >
// //                       Engineering sealing, isolation, and flow control solutions
// //                       that improve reliability, safety, and efficiency across
// //                       critical industrial operations.
// //                     </p> */}
// //                   </div>
// //                   <p className="text-dark-important">
// //                     Engineering sealing, isolation, and flow control solutions
// //                     that improve reliability, safety, and efficiency across
// //                     critical industrial operations.
// //                   </p>

// //                   {/* <p style={{ lineHeight: "1.6" }}>
// //                       Engineering sealing, isolation, and flow control solutions
// //                       that improve reliability, safety, and efficiency across
// //                       critical industrial operations.
// //                     </p> */}
// //                   {/* <p
// //                     style={{
// //                       lineHeight: "1.6",
// //                       color: "#292929",
// //                     }}
// //                   >
// //                     Engineering sealing, isolation, and flow control solutions
// //                     that improve reliability, safety, and efficiency across
// //                     critical industrial operations.
// //                   </p> */}

// //                   {/* <div className="tp-footer-contact-mail mb-10">
// //                     <span>Got Questions? Call us</span>

// //                     <br />
// //                     <a href="tel:97172662628">+971 7266 2628</a>
// //                   </div> */}
// //                   {/* <div className="tp-footer-contact-mail noto-products-list">
// //                     <a href="mailto:info@erithme.com">
// //                       <span>
// //                         <Email />
// //                       </span>
// //                       info@erithme.com
// //                     </a>
// //                   </div> */}
// //                   <div className="tp-header-btn d-none d-md-block ">
// //                     <Link
// //                       href="/contact"
// //                       style={{
// //                         backgroundColor: "#1d3a72",
// //                         color: "#fff", // black text
// //                         padding: "8px 18px",
// //                         borderRadius: "10px",
// //                         textDecoration: "none",
// //                         fontWeight: "600",
// //                         display: "inline-block",
// //                         fontSize: "12px",
// //                       }}
// //                     >
// //                       Contact Us
// //                     </Link>
// //                   </div>
// //                   <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
// //                     <FooterSocial />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 2 */}
// //               <div className="col-xl-3 col-lg-3 col-sm-6">
// //                 <div
// //                   className={`tp-footer-widget ${
// //                     style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
// //                   } mb-30`}
// //                 >
// //                   <h4
// //                     className=" mb-20 noto-products-list"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Products
// //                   </h4>
// //                   {/* <div className="tp-footer-widget-link">
// //                     <ul>
// //                       {footerLinks.products.map((link) => (
// //                         <li key={link.id}>
// //                           <Link href={link.link}>{link.title}</Link>s
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div> */}
// //                   <div className="tp-footer-widget-link">
// //                     <ul
// //                       className="noto-products-list"
// //                       style={{ lineHeight: "1.5" }}
// //                     >
// //                       {footerLinks.products.map((link) => (
// //                         <li key={link.id}>
// //                           <Link href={link.link}>{link.title}</Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 3 */}
// //               <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-30">
// //                   <h4
// //                     className=" mb-15 noto-products-list"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Industry
// //                   </h4>
// //                   <div className="tp-footer-widget-link">
// //                     <ul className="noto-products-list">
// //                       <li>
// //                         <a href="#">Oil and Gas</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Infrastructure</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Food Pharma Bevarage</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Semi Conductors</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Marine</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Petro Chemical</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 4 (last column, no border) */}
// //               <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-30">
// //                   <h4
// //                     className="mb-15 noto-products-list"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Address
// //                   </h4>
// //                   <div className="tp-footer-widget-link">
// //                     <ul className="noto-products-list">
// //                       <li>
// //                         <a href="#">
// //                           Office No.3, Plot #84 Mussafah M40, Abu Dhabi
// //                         </a>
// //                       </li>
// //                       <li>
// //                         <a href="#">info@erithglobal.com</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">+971 7266 2628</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //                 <div className="p-footer-widget tp-footer-5-col-4 mb-30">
// //                   <h4
// //                     className="mb-15 noto-products-list"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Our Newsletter
// //                   </h4>
// //                   <div className="tp-footer-newsletter-wrap">
// //                     <p className="noto-products-list">
// //                       Enter your email and we will send you <br /> more
// //                       information
// //                     </p>
// //                     <form action="#">
// //                       <div
// //                         className={`tp-footer-newsletter-wrapper ${
// //                           dashboard_footer ? "" : "tp-footer-inner-input"
// //                         } mb-30`}
// //                       >
// //                         <div className="tp-footer-newsletter-input">
// //                           <input type="email" placeholder="Your email" />
// //                         </div>
// //                         <div
// //                           className={`${
// //                             dashboard_footer
// //                               ? "tp-footer-newsletter-submit"
// //                               : "tp-footer-5-newsletter-submit"
// //                           }`}
// //                         >
// //                           <button
// //                             className={`${
// //                               dashboard_footer ? "" : "tp-btn-inner"
// //                             }`}
// //                             style={{
// //                               borderRadius: "10px",
// //                               padding: "8px 18px",
// //                             }}
// //                           >
// //                             Subscribe
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div
// //           className={`${
// //             dashboard_footer
// //               ? "tp-footer-bottom tpd-dashboard-footer-bottom"
// //               : "tp-footer-5-bottom tp-footer-inner-bottom"
// //           }`}
// //           style={{ backgroundColor: "#f3f4f8" }}
// //         >
// //           <div
// //             className="container"
// //             style={{
// //               borderTop: "1px solid #1d3a72",
// //               paddingTop: "20px",
// //             }}
// //           >
// //             <div className="row">
// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-start">
// //                   <span>
// //                     © {new Date().getFullYear()} <a href="#">Erith Global,</a>{" "}
// //                     All rights reserved.
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-center">
// //                   <span>
// //                     <a href="/terms-conditions">Terms & Conditions</a>
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-end">
// //                   <span>
// //                     <a href="/privacy-policy">Privacy Policy</a>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }

// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import FooterSocial from "./footer-social";
// // import { footerLinks } from "@/data/footer-links";
// // import erithglobal_black from "@/assets/img/logo/erith_global.png";

// // type Props = {
// //   dashboard_footer?: boolean;
// //   bgClr?: string;
// //   style_2?: boolean;
// //   inner?: boolean;
// // };

// // export default function FooterSeven({
// //   bgClr,
// //   dashboard_footer,
// //   style_2 = false,
// // }: Props) {
// //   return (
// //     <>
// //       <style jsx global>{`
// //         /* Main paragraph typography */
// //         .text-dark-important {
// //           color: #292929 !important;
// //           line-height: 1.6;
// //           font-family: var(--tp-ff-p) !important;
// //         }

// //         /* Footer headings */
// //         .footer-heading {
// //           color: #292929 !important;
// //           font-family: var(--tp-ff-heading) !important;
// //           font-weight: 600;
// //         }

// //         /* Footer links */
// //         .footer-links,
// //         .footer-links li,
// //         .footer-links li a {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //           line-height: 1.8;
// //           text-decoration: none;
// //         }

// //         .footer-links li a:hover {
// //           color: #292929 !important;
// //         }

// //         /* Copyright */
// //         .footer-copy,
// //         .footer-copy a {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //           text-decoration: none;
// //         }

// //         .footer-copy a:hover {
// //           color: #292929 !important;
// //         }

// //         /* Newsletter */
// //         .tp-footer-newsletter-wrap p {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //         }

// //         /* Newsletter buttons */
// //         .tp-footer-newsletter-submit button,
// //         .tp-footer-5-newsletter-submit button {
// //           outline: none !important;
// //           box-shadow: none !important;
// //           font-family: var(--tp-ff-body) !important;
// //         }

// //         .tp-footer-newsletter-submit button:hover,
// //         .tp-footer-newsletter-submit button:focus,
// //         .tp-footer-5-newsletter-submit button:hover,
// //         .tp-footer-5-newsletter-submit button:focus {
// //           outline: none !important;
// //           box-shadow: 0 0 0 2px rgba(29, 58, 114, 0.25) !important;
// //         }

// //         /* Remove theme borders */
// //         .tp-footer-main,
// //         .tp-footer-inner,
// //         .tp-footer-5-bottom,
// //         .tp-footer-bottom,
// //         .tpd-dashboard-footer-bottom {
// //           border-top: none !important;
// //           border-bottom: none !important;
// //           box-shadow: none !important;
// //         }
// //       `}</style>

// //       <footer
// //         style={{
// //           marginTop: "60px",
// //           backgroundColor: bgClr ? bgClr : "#f3f4f8",
// //         }}
// //       >
// //         <div
// //           className={`tp-footer-main ${
// //             dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
// //           } pt-80 pb-20`}
// //           style={{
// //             backgroundColor: "#f3f4f8",
// //           }}
// //         >
// //           <div className="container">
// //             <div className="row">
// //               {/* Column 1 */}
// //               <div
// //                 className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                 }}
// //               >
// //                 <div className="tp-footer-widget tp-footer-col-1 mb-30">
// //                   <div className="tp-footer-widget-logo mb-20 tp-header-logo">
// //                     <Link href="/">
// //                       <Image
// //                         src={erithglobal_black}
// //                         alt="logo"
// //                         style={{ height: "auto" }}
// //                       />
// //                     </Link>
// //                   </div>

// //                   <p className="text-dark-important">
// //                     Engineering sealing, isolation, and flow control solutions
// //                     that improve reliability, safety, and efficiency across
// //                     critical industrial operations.
// //                   </p>

// //                   <div className="tp-header-btn d-none d-md-block">
// //                     <Link
// //                       href="/contact"
// //                       style={{
// //                         backgroundColor: "#1d3a72",
// //                         color: "#fff",
// //                         padding: "8px 18px",
// //                         borderRadius: "10px",
// //                         textDecoration: "none",
// //                         fontWeight: "600",
// //                         display: "inline-block",
// //                         fontSize: "12px",
// //                         fontFamily: "var(--tp-ff-body)",
// //                       }}
// //                     >
// //                       Contact Us
// //                     </Link>
// //                   </div>

// //                   <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
// //                     <FooterSocial />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 2 */}
// //               <div className="col-xl-3 col-lg-3 col-sm-6">
// //                 <div
// //                   className={`tp-footer-widget ${
// //                     style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
// //                   } mb-10`}
// //                 >
// //                   <h4
// //                     className="mb-20 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Products
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       {footerLinks.products.map((link) => (
// //                         <li key={link.id}>
// //                           <Link href={link.link}>{link.title}</Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 3 */}
// //               <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-10">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Industry
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       <li>
// //                         <a href="#">Oil and Gas</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Infrastructure</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Food Pharma Beverage</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Semi Conductors</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Marine</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Petro Chemical</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 4 */}
// //               <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-30">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Address
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       <li>
// //                         <a href="#">
// //                           Office No.3, Plot #84 Mussafah M40, Abu Dhabi
// //                         </a>
// //                       </li>
// //                       <li>
// //                         <a href="mailto:info@erithme.com">
// //                           info@erithme.com
// //                         </a>
// //                       </li>
// //                       <li>
// //                         <a href="tel:+97172662628">+971 7266 2628</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>

// //                 <div className="tp-footer-widget tp-footer-5-col-4 mb-10">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Our Newsletter
// //                   </h4>

// //                   <div className="tp-footer-newsletter-wrap">
// //                     <p className="text-dark-important">
// //                       Enter your email and we will send you <br />
// //                       more information
// //                     </p>

// //                     <form action="#">
// //                       <div
// //                         className={`tp-footer-newsletter-wrapper ${
// //                           dashboard_footer ? "" : "tp-footer-inner-input"
// //                         } mb-30`}
// //                       >
// //                         <div className="tp-footer-newsletter-input">
// //                           <input type="email" placeholder="Your email" />
// //                         </div>

// //                         <div
// //                           className={`${
// //                             dashboard_footer
// //                               ? "tp-footer-newsletter-submit"
// //                               : "tp-footer-5-newsletter-submit"
// //                           }`}
// //                         >
// //                           <button
// //                             className={`${
// //                               dashboard_footer ? "" : "tp-btn-inner"
// //                             }`}
// //                             style={{
// //                               borderRadius: "10px",
// //                               padding: "8px 18px",
// //                             }}
// //                           >
// //                             Subscribe
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Footer */}
// //         <div
// //           className={`${
// //             dashboard_footer
// //               ? "tp-footer-bottom tpd-dashboard-footer-bottom"
// //               : "tp-footer-5-bottom tp-footer-inner-bottom"
// //           }`}
// //           style={{ backgroundColor: "#f3f4f8" }}
// //         >
// //           <div
// //             className="container"
// //             style={{
// //               borderTop: "1px solid #1d3a72",
// //               paddingTop: "20px",
// //             }}
// //           >
// //             <div className="row">
// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-start footer-copy">
// //                   <span>
// //                     © {new Date().getFullYear()}{" "}
// //                     <a href="#">Erith Global</a>, All rights reserved.
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-center footer-copy">
// //                   <span>
// //                     <a href="/terms-conditions">Terms & Conditions</a>
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-end footer-copy">
// //                   <span>
// //                     <a href="/privacy-policy">Privacy Policy</a>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }

// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import FooterSocial from "./footer-social";
// // import { footerLinks } from "@/data/footer-links";
// // import erithglobal_black from "@/assets/img/logo/erith_global.png";

// // type Props = {
// //   dashboard_footer?: boolean;
// //   bgClr?: string;
// //   style_2?: boolean;
// //   inner?: boolean;
// // };

// // export default function FooterSeven({
// //   bgClr,
// //   dashboard_footer,
// //   style_2 = false,
// // }: Props) {
// //   return (
// //     <>
// //       <style jsx global>{`
// //         /* Main paragraph typography */
// //         .text-dark-important {
// //           color: #292929 !important;
// //           line-height: 1.6;
// //           font-family: var(--tp-ff-p) !important;
// //         }

// //         /* Footer headings */
// //         .footer-heading {
// //           color: #292929 !important;
// //           font-family: var(--tp-ff-heading) !important;
// //           font-weight: 600;
// //         }

// //         /* Footer links */
// //         .footer-links,
// //         .footer-links li,
// //         .footer-links li a {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //           line-height: 1.8;
// //           text-decoration: none;
// //         }

// //         .footer-links li a:hover {
// //           color: #292929 !important;
// //         }

// //         /* Copyright */
// //         .footer-copy,
// //         .footer-copy a {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //           text-decoration: none;
// //         }

// //         .footer-copy a:hover {
// //           color: #292929 !important;
// //         }

// //         /* Newsletter */
// //         .tp-footer-newsletter-wrap p {
// //           color: #55585b !important;
// //           font-family: var(--tp-ff-p) !important;
// //         }

// //         /* Newsletter buttons */
// //         .tp-footer-newsletter-submit button,
// //         .tp-footer-5-newsletter-submit button {
// //           outline: none !important;
// //           box-shadow: none !important;
// //           font-family: var(--tp-ff-body) !important;
// //         }

// //         .tp-footer-newsletter-submit button:hover,
// //         .tp-footer-newsletter-submit button:focus,
// //         .tp-footer-5-newsletter-submit button:hover,
// //         .tp-footer-5-newsletter-submit button:focus {
// //           outline: none !important;
// //           box-shadow: 0 0 0 2px rgba(29, 58, 114, 0.25) !important;
// //         }

// //         /* Remove theme borders */
// //         .tp-footer-main,
// //         .tp-footer-inner,
// //         .tp-footer-5-bottom,
// //         .tp-footer-bottom,
// //         .tpd-dashboard-footer-bottom {
// //           border-top: none !important;
// //           border-bottom: none !important;
// //           box-shadow: none !important;
// //         }
// //       `}</style>

// //       <footer
// //         style={{
// //           marginTop: "60px",
// //           backgroundColor: bgClr ? bgClr : "#f3f4f8",
// //         }}
// //       >
// //         <div
// //           className={`tp-footer-main ${
// //             dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
// //           } pt-80 pb-20`}
// //           style={{
// //             backgroundColor: "#f3f4f8",
// //           }}
// //         >
// //           <div className="container">
// //             <div className="row">
// //               {/* Column 1 */}
// //               <div
// //                 className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                 }}
// //               >
// //                 <div className="tp-footer-widget tp-footer-col-1 mb-30">
// //                   <div className="tp-footer-widget-logo mb-20 tp-header-logo">
// //                     <Link href="/">
// //                       <Image
// //                         src={erithglobal_black}
// //                         alt="logo"
// //                         style={{ height: "auto" }}
// //                       />
// //                     </Link>
// //                   </div>

// //                   <p className="text-dark-important">
// //                     Engineering sealing, isolation, and flow control solutions
// //                     that improve reliability, safety, and efficiency across
// //                     critical industrial operations.
// //                   </p>

// //                   <div className="tp-header-btn d-none d-md-block">
// //                     <Link
// //                       href="/contact"
// //                       style={{
// //                         backgroundColor: "#1d3a72",
// //                         color: "#fff",
// //                         padding: "8px 18px",
// //                         borderRadius: "10px",
// //                         textDecoration: "none",
// //                         fontWeight: "600",
// //                         display: "inline-block",
// //                         fontSize: "12px",
// //                         fontFamily: "var(--tp-ff-body)",
// //                       }}
// //                     >
// //                       Contact Us
// //                     </Link>
// //                   </div>

// //                   <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
// //                     <FooterSocial />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 2 */}
// //               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
// //                 <div
// //                   className={`tp-footer-widget ${
// //                     style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
// //                   } mb-10`}
// //                 >
// //                   <h4
// //                     className="mb-20 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Products
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       {footerLinks.products.map((link) => (
// //                         <li key={link.id}>
// //                           <Link href={link.link}>{link.title}</Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 3 */}
// //               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-10">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Industry
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       <li>
// //                         <a href="#">Oil and Gas</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Infrastructure</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Food Pharma Beverage</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Semi Conductors</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Marine</a>
// //                       </li>
// //                       <li>
// //                         <a href="#">Petro Chemical</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Column 4 */}
// //               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
// //                 <div className="tp-footer-widget tp-footer-col-3 mb-30">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Address
// //                   </h4>

// //                   <div className="tp-footer-widget-link">
// //                     <ul className="footer-links">
// //                       <li>
// //                         <a href="#">
// //                           Office No.3, Plot #84 Mussafah M40, Abu Dhabi
// //                         </a>
// //                       </li>
// //                       <li>
// //                         <a href="mailto:info@erithme.com">
// //                           info@erithme.com
// //                         </a>
// //                       </li>
// //                       <li>
// //                         <a href="tel:+97172662628">+971 7266 2628</a>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>

// //                 <div className="tp-footer-widget tp-footer-5-col-4 mb-10">
// //                   <h4
// //                     className="mb-15 footer-heading"
// //                     style={{ fontSize: "18px" }}
// //                   >
// //                     Our Newsletter
// //                   </h4>

// //                   <div className="tp-footer-newsletter-wrap">
// //                     <p className="text-dark-important">
// //                       Enter your email and we will send you <br />
// //                       more information
// //                     </p>

// //                     <form action="#">
// //                       <div
// //                         className={`tp-footer-newsletter-wrapper ${
// //                           dashboard_footer ? "" : "tp-footer-inner-input"
// //                         } mb-30`}
// //                       >
// //                         <div className="tp-footer-newsletter-input">
// //                           <input type="email" placeholder="Your email" />
// //                         </div>

// //                         <div
// //                           className={`${
// //                             dashboard_footer
// //                               ? "tp-footer-newsletter-submit"
// //                               : "tp-footer-5-newsletter-submit"
// //                           }`}
// //                         >
// //                           <button
// //                             className={`${
// //                               dashboard_footer ? "" : "tp-btn-inner"
// //                             }`}
// //                             style={{
// //                               borderRadius: "10px",
// //                               padding: "8px 18px",
// //                             }}
// //                           >
// //                             Subscribe
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Footer */}
// //         <div
// //           className={`${
// //             dashboard_footer
// //               ? "tp-footer-bottom tpd-dashboard-footer-bottom"
// //               : "tp-footer-5-bottom tp-footer-inner-bottom"
// //           }`}
// //           style={{ backgroundColor: "#f3f4f8" }}
// //         >
// //           <div
// //             className="container"
// //             style={{
// //               borderTop: "1px solid #1d3a72",
// //               paddingTop: "20px",
// //             }}
// //           >
// //             <div className="row">
// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-start footer-copy">
// //                   <span>
// //                     © {new Date().getFullYear()}{" "}
// //                     <a href="#">Erith Global</a>, All rights reserved.
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-center footer-copy">
// //                   <span>
// //                     <a href="/terms-conditions">Terms & Conditions</a>
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4">
// //                 <div className="tp-footer-copyright text-end footer-copy">
// //                   <span>
// //                     <a href="/privacy-policy">Privacy Policy</a>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import FooterSocial from "./footer-social";
// import { footerLinks } from "@/data/footer-links";
// import erithglobal_black from "@/assets/img/logo/erith_global.png";

// type Props = {
//   dashboard_footer?: boolean;
//   bgClr?: string;
//   style_2?: boolean;
//   inner?: boolean;
// };

// export default function FooterSeven({
//   bgClr,
//   dashboard_footer,
//   style_2 = false,
// }: Props) {
//   return (
//     <>
//       <style jsx global>{`
//         /* Main paragraph typography */
//         .text-dark-important {
//           color: #292929 !important;
//           line-height: 1.6;
//           font-family: var(--tp-ff-p) !important;
//         }

//         /* Footer headings */
//         .footer-heading {
//           color: #292929 !important;
//           font-family: var(--tp-ff-heading) !important;
//           font-weight: 600;
//         }

//         /* Footer links */
//         .footer-links,
//         .footer-links li,
//         .footer-links li a {
//           color: #55585b !important;
//           font-family: var(--tp-ff-p) !important;
//           line-height: 1.5;
//           text-decoration: none;
//         }

//         .footer-links li a:hover {
//           color: #292929 !important;
//         }

//         /* Copyright */
//         .footer-copy,
//         .footer-copy span,
//         .footer-copy a {
//           color: #55585b !important;
//           font-family: var(--tp-ff-p) !important;
//           text-decoration: none;
//         }

//         .footer-copy a:hover {
//           color: #fecb00 !important;
//         }

//         /* Newsletter */
//         .tp-footer-newsletter-wrap p {
//           color: #55585b !important;
//           font-family: var(--tp-ff-p) !important;
//         }

//         /* Newsletter buttons */
//         .tp-footer-newsletter-submit button,
//         .tp-footer-5-newsletter-submit button {
//           outline: none !important;
//           box-shadow: none !important;
//           font-family: var(--tp-ff-body) !important;
//         }

//         .tp-footer-newsletter-submit button:hover,
//         .tp-footer-newsletter-submit button:focus,
//         .tp-footer-5-newsletter-submit button:hover,
//         .tp-footer-5-newsletter-submit button:focus {
//           outline: none !important;
//           box-shadow: 0 0 0 2px rgba(29, 58, 114, 0.25) !important;
//         }

//         /* Remove theme borders */
//         .tp-footer-main,
//         .tp-footer-inner,
//         .tp-footer-5-bottom,
//         .tp-footer-bottom,
//         .tpd-dashboard-footer-bottom {
//           border-top: none !important;
//           border-bottom: none !important;
//           box-shadow: none !important;
//         }

//         /* =========================
//            Responsive Footer
//         ========================= */

//         @media (max-width: 991px) {
//           .tp-footer-main {
//             padding-top: 60px !important;
//             padding-bottom: 20px !important;
//           }

//           .tp-footer-widget {
//             margin-bottom: 35px !important;
//           }

//           .tp-footer-newsletter-social {
//             margin-top: 15px !important;
//           }

//           .tp-footer-copyright {
//             text-align: center !important;
//             margin-bottom: 10px;
//           }
//         }

//         @media (max-width: 767px) {
//           .tp-footer-main {
//             padding-top: 50px !important;
//             padding-bottom: 10px !important;
//           }

//           .tp-footer-widget-logo img {
//             max-width: 180px;
//             height: auto;
//           }

//           .tp-footer-widget {
//             margin-bottom: 35px !important;
//           }

//           .tp-footer-widget h4 {
//             font-size: 16px !important;
//             margin-bottom: 12px !important;
//           }

//           .footer-links li a,
//           .text-dark-important,
//           .tp-footer-newsletter-wrap p {
//             font-size: 14px !important;
//             line-height: 1.7 !important;
//           }

//           .tp-header-btn a {
//             width: 100%;
//             text-align: center;
//           }

//           .tp-footer-newsletter-wrapper {
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//           }

//           .tp-footer-newsletter-submit button,
//           .tp-footer-5-newsletter-submit button {
//             width: 100%;
//           }

//           .tp-footer-copyright {
//             text-align: center !important;
//             margin-bottom: 12px;
//           }
//         }

//         @media (max-width: 575px) {
//           .tp-footer-main {
//             padding-top: 45px !important;
//           }

//           .tp-footer-widget {
//             margin-bottom: 30px !important;
//           }

//           .tp-footer-widget-logo {
//             margin-bottom: 15px !important;
//           }

//           .tp-footer-newsletter-input input {
//             height: 48px;
//             font-size: 14px;
//           }

//           .tp-footer-newsletter-submit button,
//           .tp-footer-5-newsletter-submit button {
//             height: 48px;
//             font-size: 14px;
//           }

//           .tp-footer-copyright span {
//             display: block;
//             line-height: 1.8;
//           }
//         }
//       `}</style>

//       <footer
//         style={{
//           marginTop: "60px",
//           backgroundColor: bgClr ? bgClr : "#f3f4f8",
//         }}
//       >
//         <div
//           className={`tp-footer-main ${
//             dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
//           } pt-80 pb-20`}
//           style={{
//             backgroundColor: "#f3f4f8",
//           }}
//         >
//           <div className="container">
//             <div className="row">
//               {/* Column 1 */}
//               <div
//                 className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <div className="tp-footer-widget tp-footer-col-1 mb-30">
//                   <div className="tp-footer-widget-logo mb-20 tp-header-logo">
//                     <Link href="/">
//                       <Image
//                         src={erithglobal_black}
//                         alt="logo"
//                         style={{ height: "auto" }}
//                       />
//                     </Link>
//                   </div>

//                   <p className="text-dark-important">
//                     Engineering sealing, isolation, and flow control solutions
//                     that improve reliability, safety, and efficiency across
//                     critical industrial operations.
//                   </p>

//                   <div className="tp-header-btn d-none d-md-block">
//                     <Link
//                       href="/contact"
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "8px 18px",
//                         borderRadius: "10px",
//                         textDecoration: "none",
//                         fontWeight: "600",
//                         display: "inline-block",
//                         fontSize: "12px",
//                         fontFamily: "var(--tp-ff-body)",
//                       }}
//                     >
//                       Contact Us
//                     </Link>
//                   </div>

//                   <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
//                     <FooterSocial />
//                   </div>
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
//                 <div
//                   className={`tp-footer-widget ${
//                     style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
//                   } mb-10`}
//                 >
//                   {/* <h4
//                     className="mb-20 footer-heading"
//                     style={{ fontSize: "15px" }}

//                   >
//                     Products
//                   </h4> */}
//                   <h4
//                     className="mb-20 footer-heading"
//                     style={{ fontSize: "15px" }}
//                   >
//                     <Link
//                       href="/allproducts"
//                       style={{ color: "inherit", textDecoration: "none" }}
//                     >
//                       Products
//                     </Link>
//                   </h4>

//                   <div className="tp-footer-widget-link">
//                     <ul className="footer-links">
//                       {footerLinks.products.map((link) => (
//                         <li key={link.id}>
//                           <Link href={link.link}>{link.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Column 3 */}
//               <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
//                 <div className="tp-footer-widget tp-footer-col-3 mb-10">
//                   <h4
//                     className="mb-15 footer-heading"
//                     style={{ fontSize: "15px" }}
//                   >
//                     <Link
//                       href="about#industries"
//                       style={{ color: "inherit", textDecoration: "none" }}
//                     >
//                       Industries
//                     </Link>
//                   </h4>
//                   <div className="tp-footer-widget-link">
//                     <ul className="footer-links">
//                       <li>
//                         <Link href="/industries/oil-gas">Oil and Gas</Link>
//                       </li>
//                       <li>
//                         <Link href="/industries/data-center">Data Center</Link>
//                       </li>
//                       <li>
//                         <Link href="/industries/petrochemical">
//                           Petro Chemical
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/industries/steel-manufacturing">
//                           Steel Manufacturing
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/industries/marine">Marine</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Column 4 */}
//               <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
//                 <div className="tp-footer-widget tp-footer-col-3 mb-30">
//                   <h4
//                     className="mb-15 footer-heading"
//                     style={{ fontSize: "15px" }}
//                   >
//                     <Link
//                       href="/about"
//                       style={{ color: "inherit", textDecoration: "none" }}
//                     >
//                       Company
//                     </Link>
//                   </h4>

//                   <div className="tp-footer-widget-link">
//                     <ul className="footer-links">
//                       <li>
//                         <a href="/company/quality">Quality</a>
//                       </li>
//                       <li>
//                         <a href="/contact">Contact Us</a>
//                       </li>
//                       <li>
//                         {/* <a href="tel:+97172662628">+971 7266 2628</a> */}
//                         <a
//                           href="company/news-updates"
//                           style={{ cursor: "pointer" }}
//                         >
//                           News & Updates
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* <div className="tp-footer-widget tp-footer-5-col-4 mb-10">
//                   <h4
//                     className="mb-15 footer-heading"
//                     style={{ fontSize: "18px" }}
//                   >
//                     Company
//                   </h4>

//                   <div className="tp-footer-newsletter-wrap">
//                     <p className="text-dark-important">
//                       Enter your email and we will send you <br />
//                       more information
//                     </p>
//                     <form action="#">
//                       <div
//                         className={`tp-footer-newsletter-wrapper ${
//                           dashboard_footer ? "" : "tp-footer-inner-input"
//                         } mb-30`}
//                       >
//                         <div className="tp-footer-newsletter-input">
//                           <input type="email" placeholder="Your email" />
//                         </div>

//                         <div
//                           className={`${
//                             dashboard_footer
//                               ? "tp-footer-newsletter-submit"
//                               : "tp-footer-5-newsletter-submit"
//                           }`}
//                         >
//                           <button
//                             className={`${
//                               dashboard_footer ? "" : "tp-btn-inner"
//                             }`}
//                             style={{
//                               borderRadius: "10px",
//                               padding: "8px 18px",
//                             }}
//                           >
//                             Subscribe
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div> */}
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
//                 <div className="tp-footer-widget tp-footer-col-3 mb-10">
//                   <h4
//                     className="mb-15 footer-heading"
//                     style={{ fontSize: "15px" }}
//                   >
//                     <Link
//                       href="/resources"
//                       style={{ color: "inherit", textDecoration: "none" }}
//                     >
//                       Resources
//                     </Link>
//                   </h4>

//                   <div className="tp-footer-widget-link">
//                     <ul className="footer-links">
//                       <li>
//                         <Link href="/documents">Technical Resources</Link>
//                       </li>
//                       <li>
//                         <Link href="/knowledgecenter">Knowledge Center</Link>
//                       </li>
//                       <li>
//                         <Link href="/projects">Case Studies</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div
//           className={`${
//             dashboard_footer
//               ? "tp-footer-bottom tpd-dashboard-footer-bottom"
//               : "tp-footer-5-bottom tp-footer-inner-bottom"
//           }`}
//           style={{ backgroundColor: "#f3f4f8" }}
//         >
//           <div
//             className="container"
//             style={{
//               borderTop: "1px solid #1d3a72",
//               paddingTop: "20px",
//             }}
//           >
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="tp-footer-copyright text-start footer-copy">
//                   <span>
//                     © {new Date().getFullYear()} <a href="#">Erith Global</a>,
//                     All rights reserved.
//                   </span>
//                 </div>
//               </div>

//               <div className="col-lg-4">
//                 <div className="tp-footer-copyright text-center footer-copy">
//                   <span>
//                     <a href="/terms-conditions">Terms & Conditions</a>
//                   </span>
//                 </div>
//               </div>

//               <div className="col-lg-4">
//                 <div className="tp-footer-copyright text-end footer-copy">
//                   <span>
//                     <a href="/privacy-policy">Privacy Policy</a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSocial from "./footer-social";
import { footerLinks } from "@/data/footer-links";
import erithglobal_black from "@/assets/img/logo/erith_global.png";

type Props = {
  dashboard_footer?: boolean;
  bgClr?: string;
  style_2?: boolean;
  inner?: boolean;
};

export default function FooterSeven({
  bgClr,
  dashboard_footer,
  style_2 = false,
}: Props) {
  return (
    <>
      <style jsx global>{`
        /* Main paragraph typography */
        .text-dark-important {
          color: #292929 !important;
          line-height: 1.6;
          font-family: var(--tp-ff-p) !important;
        }

        /* Footer headings */
        .footer-heading {
          color: #292929 !important;
          font-family: var(--tp-ff-heading) !important;
          font-weight: 600;
        }

        /* Footer links */
        .footer-links,
        .footer-links li,
        .footer-links li a {
          color: #55585b !important;
          font-family: var(--tp-ff-p) !important;
          line-height: 1.5;
          text-decoration: none;
        }

        .footer-links li a:hover {
          color: #292929 !important;
        }

        /* Copyright */
        .footer-copy,
        .footer-copy span,
        .footer-copy a {
          color: #55585b !important;
          font-family: var(--tp-ff-p) !important;
          text-decoration: none;
        }

        .footer-copy a:hover {
          color: #fecb00 !important;
        }

        /* Newsletter */
        .tp-footer-newsletter-wrap p {
          color: #55585b !important;
          font-family: var(--tp-ff-p) !important;
        }

        /* Newsletter buttons */
        .tp-footer-newsletter-submit button,
        .tp-footer-5-newsletter-submit button {
          outline: none !important;
          box-shadow: none !important;
          font-family: var(--tp-ff-body) !important;
        }

        .tp-footer-newsletter-submit button:hover,
        .tp-footer-newsletter-submit button:focus,
        .tp-footer-5-newsletter-submit button:hover,
        .tp-footer-5-newsletter-submit button:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(29, 58, 114, 0.25) !important;
        }

        /* Remove theme borders */
        .tp-footer-main,
        .tp-footer-inner,
        .tp-footer-5-bottom,
        .tp-footer-bottom,
        .tpd-dashboard-footer-bottom {
          border-top: none !important;
          border-bottom: none !important;
          box-shadow: none !important;
        }

        /* =========================
           Responsive Footer
        ========================= */

        @media (max-width: 991px) {
          .tp-footer-main {
            padding-top: 60px !important;
            padding-bottom: 20px !important;
          }

          .tp-footer-widget {
            margin-bottom: 35px !important;
          }

          .tp-footer-newsletter-social {
            margin-top: 15px !important;
          }

          .tp-footer-copyright {
            text-align: center !important;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 767px) {
          .tp-footer-main {
            padding-top: 50px !important;
            padding-bottom: 10px !important;
          }

          .tp-footer-widget-logo img {
            max-width: 180px;
            height: auto;
          }

          .tp-footer-widget {
            margin-bottom: 30px !important;
          }

          .tp-footer-widget h4 {
            font-size: 15px !important;
            margin-bottom: 12px !important;
          }

          .footer-links li a,
          .text-dark-important,
          .tp-footer-newsletter-wrap p {
            font-size: 13px !important;
            line-height: 1.7 !important;
          }

          .tp-header-btn a {
            width: 100%;
            text-align: center;
          }

          .tp-footer-newsletter-wrapper {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .tp-footer-newsletter-submit button,
          .tp-footer-5-newsletter-submit button {
            width: 100%;
          }

          .tp-footer-copyright {
            text-align: center !important;
            margin-bottom: 12px;
          }

          /* Bottom footer stacked on mobile */
          .footer-bottom-row > div {
            text-align: center !important;
            margin-bottom: 8px;
          }
        }

        @media (max-width: 575px) {
          .tp-footer-main {
            padding-top: 45px !important;
          }

          .tp-footer-widget {
            margin-bottom: 28px !important;
          }

          .tp-footer-widget-logo {
            margin-bottom: 15px !important;
          }

          .tp-footer-newsletter-input input {
            height: 48px;
            font-size: 14px;
          }

          .tp-footer-newsletter-submit button,
          .tp-footer-5-newsletter-submit button {
            height: 48px;
            font-size: 14px;
          }

          .tp-footer-copyright span {
            display: block;
            line-height: 1.8;
          }
        }
      `}</style>

      <footer
        style={{
          marginTop: "60px",
          backgroundColor: bgClr ? bgClr : "#f3f4f8",
        }}
      >
        <div
          className={`tp-footer-main ${
            dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
          } pt-80 pb-20`}
          style={{
            backgroundColor: "#f3f4f8",
          }}
        >
          <div className="container">
            <div className="row">
              {/* Column 1 — Logo / About (full width on mobile) */}
              <div
                className="col-xl-4 col-lg-4 col-12 col-sm-12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="tp-footer-widget tp-footer-col-1 mb-30">
                  <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                    <Link href="/">
                      <Image
                        src={erithglobal_black}
                        alt="logo"
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>

                  <p className="text-dark-important">
                    Engineering sealing, isolation, and flow control solutions
                    that improve reliability, safety, and efficiency across
                    critical industrial operations.
                  </p>

                  <div className="tp-header-btn d-none d-md-block">
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "var(--tp-ff-body)",
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>

                  <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
                    <FooterSocial />
                  </div>
                </div>
              </div>

              {/* Column 2 — Products (2-col on mobile) */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div
                  className={`tp-footer-widget ${
                    style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
                  } mb-10`}
                >
                  <h4
                    className="mb-20 footer-heading"
                    style={{ fontSize: "15px" }}
                  >
                    <Link
                      href="/allproducts"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Products
                    </Link>
                  </h4>

                  <div className="tp-footer-widget-link">
                    <ul className="footer-links">
                      {footerLinks.products.map((link) => (
                        <li key={link.id}>
                          <Link href={link.link}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 — Industries (2-col on mobile) */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="tp-footer-widget tp-footer-col-3 mb-10">
                  <h4
                    className="mb-15 footer-heading"
                    style={{ fontSize: "15px" }}
                  >
                    <Link
                      href="about#industries"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Industries
                    </Link>
                  </h4>
                  <div className="tp-footer-widget-link">
                    <ul className="footer-links">
                      <li>
                        <Link href="/industries/oil-gas">Oil and Gas</Link>
                      </li>
                      <li>
                        <Link href="/industries/data-center">Data Center</Link>
                      </li>
                      <li>
                        <Link href="/industries/petrochemical">
                          Petro Chemical
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/steel-manufacturing">
                          Steel Manufacturing
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/marine">Marine</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 — Company (2-col on mobile) */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="tp-footer-widget tp-footer-col-3 mb-30">
                  <h4
                    className="mb-15 footer-heading"
                    style={{ fontSize: "15px" }}
                  >
                    <Link
                      href="/about"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Company
                    </Link>
                  </h4>

                  <div className="tp-footer-widget-link">
                    <ul className="footer-links">
                      <li>
                        <a href="/company/quality">Quality</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a
                          href="/company/news-updates"
                          style={{ cursor: "pointer" }}
                        >
                          News & Updates
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 5 — Resources (2-col on mobile) */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="tp-footer-widget tp-footer-col-3 mb-10">
                  <h4
                    className="mb-15 footer-heading"
                    style={{ fontSize: "15px" }}
                  >
                    <Link
                      href="/resources"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Resources
                    </Link>
                  </h4>

                  <div className="tp-footer-widget-link">
                    <ul className="footer-links">
                      <li>
                        <Link href="/documents">Technical Resources</Link>
                      </li>
                      <li>
                        <Link href="/knowledgecenter">Knowledge Center</Link>
                      </li>
                      <li>
                        <Link href="/projects">Case Studies</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`${
            dashboard_footer
              ? "tp-footer-bottom tpd-dashboard-footer-bottom"
              : "tp-footer-5-bottom tp-footer-inner-bottom"
          }`}
          style={{ backgroundColor: "#f3f4f8" }}
        >
          <div
            className="container"
            style={{
              borderTop: "1px solid #1d3a72",
              paddingTop: "20px",
            }}
          >
            <div className="row footer-bottom-row">
              <div className="col-lg-4 col-12">
                <div className="tp-footer-copyright text-start footer-copy">
                  <span>
                    © {new Date().getFullYear()} <a href="#">Erith Global</a>,
                    All rights reserved.
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="tp-footer-copyright text-center footer-copy">
                  <span>
                    <a href="/terms-conditions">Terms & Conditions</a>
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="tp-footer-copyright text-end footer-copy">
                  <span>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
