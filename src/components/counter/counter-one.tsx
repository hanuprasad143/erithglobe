// import { link } from "fs";
import React from "react";

// const counterData = [
//   {
//     id: 1,
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h-8a2 2 0 0 1-2-2V4z" />
//         <path d="M14 4v4h4" />
//       </svg>
//     ),
//     title: "Resources",
//     description:
//       "Find information about Bray product including Sales Data Sheets, Brochures, IOM guides and more.",
//     linkText: "Explore Now",
//   },
//   {
//     id: 2,
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M9 21h6v-1H9v1zm3-20a7 7 0 0 0-4 12.9V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.1A7 7 0 0 0 12 1z" />
//       </svg>
//     ),
//     title: "Knowledge Center",
//     description:
//       "Learn about Bray's customer success stories, webinars, industry solutions, and more about Bray and our products.",
//     linkText: "Explore Now",
//   },
//   {
//     id: 3,
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M6 2a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V6l-6-4H6z" />
//       </svg>
//     ),
//     title: "Materials Selection",
//     description:
//       "A guide to provide insights for common applications and basic material compatibility.",
//     linkText: "Explore Now",
//   },
//   {
//     id: 4,
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
//       </svg>
//     ),
//     title: "Virtual Tradeshow",
//     description:
//       "Discover Bray innovations in a virtual trade show setting.",
//     linkText: "Explore Now",
//   },
// ];

const counterData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
    title: "Technical Resources",
    description:
      "Datasheets, brochures, manuals, and product documentation to support your engineering and procurement needs.",
    linkText: "Explore Now",
    link: "./documents",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: "Knowledge Center",
    description:
      "Videos, webinars, and insights to help you understand applications, technologies, and industry best practices.",
    linkText: "Explore Now",
    link: "./knowledgecenter",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: "Case Studies",
    description:
      "Real-world applications and project solutions demonstrating performance across industries.",
    linkText: "Explore Now",
    link: "./projects",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "News & Updates",
    description:
      "Latest company announcements, events, and industry participation updates.",
    linkText: "Explore Now",
    link: "/company/news-updates",
  },
];

// export default function CounterOne() {
//   return (
//     <section className="counter-area tp-counter-wrap ">
//       <div className="container" style={{ marginTop: "150px" }}>
//         <div
//           className="tp-counter-bg wow fadeInUp"
//           data-wow-delay=".3s"
//           style={{ backgroundColor: "#f8f9fa" }}
//         >
//           <div className="row gx-0">
//             {counterData.map((item) => (
//               <div key={item.id} className="col-lg-3 col-md-6">
//                 <div
//                   className="tp-counter-item h-100"
//                   style={{
//                     borderTop: "1px solid #e5e7eb",
//                     borderBottom: "1px solid #e5e7eb",
//                     borderRight: "1px solid #e5e7eb",
//                     padding: "15px 14px",
//                     display: "flex",
//                     flexDirection: "column",
//                     backgroundColor: "white",
//                     boxShadow: "0 6px 12px -6px rgba(0, 0, 0, 0.15)",
//                   }}
//                 >
//                   <div className="d-flex align-items-center mb-2">
//                     {/* Small vertical red line */}
//                     <div
//                       style={{
//                         width: "3px",
//                         height: "45px",
//                         backgroundColor: "#fecb00",
//                         marginRight: "12px",
//                         flexShrink: 0,
//                       }}
//                     ></div>

//                     <div
//                       className="icon me-2"
//                       style={{ color: "#fecb00", flexShrink: 0 }}
//                     >
//                       {item.icon}
//                     </div>
//                     <h3
//                       className="mb-0"
//                       style={{
//                         fontSize: "15px",
//                         fontWeight: "800",
//                         color: "#292929",
//                       }}
//                     >
//                       {item.title}
//                     </h3>
//                   </div>
//                   <p
//                     className="mb-2"
//                     style={{
//                       fontSize: "13px",
//                       color: "#6b7280",
//                       lineHeight: "1.5",
//                       flex: "1",
//                     }}
//                   >
//                     {item.description}
//                   </p>
//                   <a
//                     href={item.link}
//                     className="text-decoration-none d-inline-flex align-items-center"
//                     style={{
//                       color: "#292929",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       marginTop: "auto",
//                     }}
//                   >
//                     {item.linkText} →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function CounterOne() {
  return (
    <section
      className="counter-area tp-counter-wrap"
      style={{
        position: "relative",
        zIndex: 1, // 👈 lower than search dropdown
      }}
    >
      <div className="container"style={{ marginTop: "150px" }}> {/* ✅ spacing fix */}
        <div
          className="tp-counter-bg wow fadeInUp"
          data-wow-delay=".3s"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="row gx-0">
            {counterData.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div
                  className="tp-counter-item h-100"
                  style={{
                    borderTop: "1px solid #e5e7eb",
                    borderBottom: "1px solid #e5e7eb",
                    borderRight: "1px solid #e5e7eb",
                    padding: "15px 14px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    boxShadow: "0 6px 12px -6px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <div
                      style={{
                        width: "3px",
                        height: "45px",
                        backgroundColor: "#fecb00",
                        marginRight: "12px",
                      }}
                    />
                    <div style={{ color: "#fecb00", marginRight: "8px" }}>
                      {item.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: "800",
                        color: "#292929",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      lineHeight: "1.5",
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    style={{
                      color: "#292929",
                      fontSize: "13px",
                      fontWeight: "500",
                      marginTop: "auto",
                    }}
                  >
                    {item.linkText} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
