// import Link from "next/link";
// // import Image from "next/image";
// // import { blog_stories_data } from "@/data/blog-data";

// // import { EmailThree, LocationFour, TelSvgTwo } from "../../svg";

// export default function ErithJobDescArea() {
//   //   const truncateText = (text: string, limit = 50) =>
//   //     text.length > limit ? text.slice(0, limit) + "..." : text;

//   return (
//     <div className="tp-sidebar-wrapper">
//       {/* Top Posts */}
//       <div className="col-lg-12 col-md-12">
//         <div className="tp-contact-info-item mb-30">
//           <div className="tp-sidebar-content">
//             <ul className="">
//               {/* {blog_stories_data.slice(0, 5).map((blog, index) => ( */}
//               <li className="tp-sidebar-post-item">
//                 {/* Industry */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-industry"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Oil & Gas Industry
//                       </h3>
//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Industry
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Employment Type */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-briefcase"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Full-Time
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Employment Type
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />
//                 {/* Job Role */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-user-tie"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Oil & Gas Operations Engineer
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Job Role
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Contact Email */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-envelope"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         careers@erithglobal.com
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Contact Email
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />
//               </li>
//               {/* ))} */}
//             </ul>
//             <Link
//               href="#"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 color: "#fff",
//                 padding: "8px 18px",
//                 borderRadius: "10px",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "12px",
//                 marginRight: "10px",
//                 marginBottom: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               Apply for a Job
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Recent Posts */}
//       {/* <div className="tp-sidebar-widget">
//         <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
//           Recent Posts
//         </h5>

//         <div className="tp-recent-post-grid">
//           {blog_stories_data.slice(0, 6).map((blog) => (
//             <Link
//                 href={`/blog-details/${blog.id}`}
//               href="#"
//               key={blog.id}
//               className="tp-recent-post-item"
//             >
//               <Image src={blog.img} alt={blog.title} width={300} height={200} />

//               <div className="tp-recent-post-overlay">
//                 <h5>{truncateText(blog.title, 35)}</h5>
//                 <p>{blog.date || "Read more"}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// }

import Link from "next/link";

type Job = {
  id: number;
  title: string;
  slug: string;
  tag?: string | null;
  date?: string | null;
  place?: string | null;
  description?: string | null;
  responsibilities?: string[] | null;
  qualifications?: string[] | null;
  skills?: string[] | null;
  employment_type?: string | null;
  experience?: string | null;
  role?: string | null;
  map_url?: string | null;
  image?: string | null;
  status?: "active" | "inactive";
  created_at?: string;
  updated_at?: string;
  industry?: string | null;
  email?: string | null;
};

type Props = {
  blog: Job;
};

export default function ErithJobDescArea({ blog }: Props) {
  return (
    <div className="tp-sidebar-wrapper">
      <div className="col-lg-12 col-md-12">
        <div className="tp-contact-info-item mb-30">
          <div className="tp-sidebar-content">
            <ul className="">
              <li className="tp-sidebar-post-item">
                {/* Industry */}
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "10px",
                        marginRight: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "36px",
                        height: "36px",
                      }}
                    >
                      <i className="fa fa-industry"></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "15px",
                          color: "#292929",
                          marginBottom: "2px",
                        }}
                      >
                        {blog.industry || "Industry"}
                      </h3>

                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "13px",
                          color: "#6c757d",
                          fontWeight: "500",
                        }}
                      >
                        Industry
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />

                {/* Employment Type */}
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "10px",
                        marginRight: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "36px",
                        height: "36px",
                      }}
                    >
                      <i className="fa fa-briefcase"></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "15px",
                          color: "#292929",
                          marginBottom: "2px",
                        }}
                      >
                        {blog.employment_type}
                      </h3>

                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "13px",
                          color: "#6c757d",
                          fontWeight: "500",
                        }}
                      >
                        Employment Type
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />

                {/* Job Role */}
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "10px",
                        marginRight: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "36px",
                        height: "36px",
                      }}
                    >
                      <i className="fa fa-user-tie"></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "15px",
                          color: "#292929",
                          marginBottom: "2px",
                        }}
                      >
                        {blog.title}
                      </h3>

                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "13px",
                          color: "#6c757d",
                          fontWeight: "500",
                        }}
                      >
                        Job Role
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />

                {/* Contact Email */}
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        backgroundColor: "#1d3a72",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "10px",
                        marginRight: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "36px",
                        height: "36px",
                      }}
                    >
                      <i className="fa fa-envelope"></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "15px",
                          color: "#292929",
                          marginBottom: "2px",
                        }}
                      >
                        {blog.email || "careers@erithglobal.com"}
                      </h3>

                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "13px",
                          color: "#6c757d",
                          fontWeight: "500",
                        }}
                      >
                        Contact Email
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ddd",
                    margin: "10px 0",
                  }}
                />
              </li>
            </ul>

            <Link
              href="#"
              style={{
                backgroundColor: "#1d3a72",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "12px",
                marginRight: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Apply for a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
