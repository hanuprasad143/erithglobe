// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import {
//   FaLinkedin,
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaFileAlt,
// } from "react-icons/fa";

// type Story = {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   pdf_url: string;
//   label: string;
// };

// export default function ApplicationGuidesDetails() {
//   const params = useParams();

//   // ✅ FIX: safe slug handling for TS
//   const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

//   const [story, setStory] = useState<Story | null>(null);
//   const [applicationGuides, setApplicationGuides] = useState<any[]>([]);

//   useEffect(() => {
//     const category = "Application Guides";

//     fetch(
//       `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(category)}`,
//     )
//       .then((res) => res.json())
//       .then(setApplicationGuides);
//   }, []);

//   useEffect(() => {
//     if (!slug) return;

//     fetch(`https://backend-test-yeyr.onrender.com/api/successstories/slug/${slug}`)
//       .then((res) => res.json())
//       .then((data: Story) => setStory(data))
//       .catch((err) => console.error(err));
//   }, [slug]);

//   if (!story) return <p style={{ padding: "50px" }}>Loading...</p>;

//   return (
//     <div className="container " style={{ marginTop: "30px" }}>
//       {/* BACK */}
//       <Link href="/knowledgecenter" className="back">
//         ← Back to Knowledge Center
//       </Link>

//       {/* TITLE */}
//       <h1 className="title">{story.title}</h1>

//       {/* MAIN LAYOUT (UNCHANGED) */}
//       <div className="row">
//         {/* LEFT SIDE */}
//         <div className="col-lg-9">
//           <img
//             src={`https://backend-test-yeyr.onrender.com${story.image}`}
//             alt={story.title}
//             className="banner-img"
//           />

//           <div className="pdf-clean">
//             <iframe
//               src={`https://backend-test-yeyr.onrender.com${story.pdf_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
//             />
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="col-lg-3 mt-10">
//           <div className="side">
//             <h5 className="share">SHARE</h5>

//             <div className="icons">
//               {[FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp].map(
//                 (Icon, i) => (
//                   <div key={i} className="icon-box">
//                     <Icon />
//                   </div>
//                 ),
//               )}
//             </div>

//             <p className="desc">
//               The evolution of Erith, powered by its people, providing continued
//               success to our customers.
//               <br />
//               <br />
//               Read their stories and see how Erith can transform and help your
//               company.
//             </p>

//             <a
//               href={`https://backend-test-yeyr.onrender.com${story.pdf_url}`}
//               target="_blank"
//               className="download"
//             >
//               Download
//             </a>
//           </div>
//         </div>
//       </div>
//       <hr style={{ marginBottom: "10px", marginTop: "25px" }} />
//       <div className="container mt-30">
//         <div className="row">
//           <div className="col-12">
//             <div className="d-flex justify-content-between align-items-center mb-30">
//               <h2
//                 style={{
//                   fontSize: "25px",
//                   color: "#292929",
//                   marginBottom: "0",
//                 }}
//               >
//                 Application Guides
//               </h2>
//               <a
//                 href="/knowledgecenter"
//                 style={{
//                   color: "#292929",
//                   textDecoration: "none",
//                   fontSize: "15px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                 }}
//               >
//                 View All Application Guides →
//               </a>
//             </div>
//           </div>

//           {/* Application Guide Cards */}
//           {applicationGuides
//             .filter((item) => item.slug !== slug)
//             .slice(0, 3)
//             .map((story) => (
//               <div key={story.id} className="col-lg-4 col-md-6 mb-30">
//                 <div
//                   style={{
//                     position: "relative",
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     height: "230px",
//                     backgroundImage: `url(https://backend-test-yeyr.onrender.com${story.image})`, // ✅ FIXED
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   {/* Overlay */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: "rgba(0, 0, 0, 0.6)",
//                       padding: "24px 30px 30px 30px",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     {/* Top Content */}
//                     <div>
//                       <span
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "#fff",
//                           padding: "4px 14px",
//                           borderRadius: "10px",
//                           textDecoration: "none",
//                           fontWeight: "600",
//                           display: "inline-block",
//                           fontSize: "13px",
//                         }}
//                       >
//                         <FaFileAlt size={14} /> {story.label || "Case Study"}{" "}
//                         {/* ✅ dynamic */}
//                       </span>

//                       <h3
//                         style={{
//                           color: "white",
//                           fontSize: "15px",
//                           fontWeight: "400",
//                           lineHeight: "1.2",
//                           marginTop: "12px",
//                           marginBottom: "0",
//                         }}
//                       >
//                         {story.title}
//                       </h3>
//                     </div>

//                     {/* Bottom Button */}
//                     <div>
//                       <Link
//                         className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
//                         href={`/knowledgecenter/application-guides/${story.slug}`} // ✅ IMPORTANT
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "600",
//                           padding: "6px 16px",
//                           borderRadius: "10px",
//                         }}
//                       >
//                         Learn more
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* STYLES → EXACT SAME (UNCHANGED) */}
//       <style jsx>{`
//         .back {
//           font-size: 14px;
//           color: #333;
//           text-decoration: none;
//         }

//         .title {
//           font-size: 34px;
//           font-weight: 700;
//           margin: 15px 0 20px;
//         }

//         .banner-img {
//           width: 100%;
//           height: 320px;
//           object-fit: cover;
//           border-radius: 6px;
//         }

//         .side {
//           padding-left: 20px;
//         }

//         .share {
//           color: #1d3a72;
//           font-size: 13px;
//           margin-bottom: 10px;
//         }

//         .icons {
//           display: flex;
//           gap: 8px;
//           margin-bottom: 15px;
//         }

//         .icon-box {
//           width: 35px;
//           height: 35px;
//           background: #1d3a72;
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           border-radius: 8px;
//         }

//         .desc {
//           font-size: 13px;
//           color: #555;
//           margin-bottom: 20px;
//         }

//         .download {
//           background: #1d3a72;
//           color: white;
//           padding: 10px 20px;
//           display: inline-block;
//           text-decoration: none;
//           font-weight: 600;
//           border-radius: 10px;
//         }

//         .pdf-clean {
//           margin-top: 30px;
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//         }

//         .pdf-clean iframe {
//           width: 100%;
//           height: 100%;
//           border: none;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaFileAlt,
  FaBook,
  FaLightbulb,
  FaPlay,
  FaVideo,
  // FaFlag,
} from "react-icons/fa";

type Story = {
  id: number;
  title: string;
  slug: string;
  image: string;
  pdf_url?: string;
  video_url?: string;
  label: string;
  video_thumbnail_image: string;
  video_url_link: string;
  category_type?: string;
  sidebar_desc?: string;
};

const getCategoryIcon = (category?: string) => {
  switch (category) {
    case "Success Stories":
      return <FaFileAlt size={16} />;
    case "Webinars":
      return <FaPlay size={16} />;
    case "Videos":
      return <FaVideo size={16} />;
    case "Application Guides":
      return <FaLightbulb size={16} />;
    case "Published Papers":
      return <FaBook size={16} />;
    default:
      return <FaFileAlt size={16} />;
  }
};
import Image from "next/image";
// import course_img from "@/assets/img/course/details/youtube_thumbnail1.png";
// import VideoProvider from "@/components/video/video-provider";
// import { PlayTwoSvg } from "@/components/svg";

const getYoutubeId = (url: string) => {
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : url;
};

type SuccessStories = {
  id: number;
  title: string | null;
  slug: string | null;

  category_type: string;

  product_type: string | null;

  sidebar_title: string | null;
  sidebar_desc: string | null;

  image: string | null;

  pdf_url: string | null;

  video_url: string | null;

  label: string | null;

  created_at: string;

  video_url_link: string | null;

  video_thumbnail_image: string | null;
};

export default function KnowledgeCenterVideosDetails() {
  const params = useParams();

  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const [story, setStory] = useState<Story | null>(null);
  const [videos, setvideos] = useState<SuccessStories[]>([]);

  const [playVideo, setPlayVideo] = useState(false);

  /* GET RELATED */
  useEffect(() => {
    const category = "Videos";

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories?category_type=${encodeURIComponent(
        category,
      )}`,
    )
      .then((res) => res.json())
      .then(setvideos);
  }, []);

  /* GET DETAILS */
  // useEffect(() => {
  //   if (!slug) return;

  //   fetch(`https://backend-test-yeyr.onrender.com/api/successstories/slug/${slug}`)
  //     .then((res) => res.json())
  //     .then((data: Story) => setStory(data))
  //     .catch((err) => console.error(err));
  // }, [slug]);

  // GET DETAILS
  useEffect(() => {
    if (!slug) return;

    fetch(
      `https://backend-test-yeyr.onrender.com/api/successstories/slug/${slug}`,
    )
      .then((res) => res.json())
      .then((data: Story) => {
        setStory(data);
        setPlayVideo(false); // ✅ reset video player on navigation
      })
      .catch((err) => console.error(err));
  }, [slug]);

  // ✅ ADD THIS — scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!story) return <p style={{ padding: "50px" }}>Loading...</p>;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(story.title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer.php?t=${encodedTitle}&u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    // whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedUrl}`,
  };

  return (
    <div className="container " style={{ marginTop: "30px" }}>
      {/* BACK */}
      <Link href="/knowledgecenter" className="back">
        ← Back to Knowledge Center
      </Link>

      {/* TITLE */}
      <h1 className="title">{story.title}</h1>

      {/* MAIN LAYOUT */}
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-lg-9">
          {/* <img
            src={`https://backend-test-yeyr.onrender.com${story.image}`}
            alt={story.title}
            className="banner-img"
          /> */}

          {/* VIDEO */}
          {/* {story.video_url && (
            <div className="pdf-clean">
              <video
                controls
                width="100%"
                height="100%"
                src={`https://backend-test-yeyr.onrender.com${story.video_url}`}
              />
            </div>
          )} */}
          {/* VIDEO */}
          {/* {story.video_url && (
            <div style={{ marginTop: "30px" }}>
              <video
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                }}
                src={`https://backend-test-yeyr.onrender.com${story.video_url}`}
              />
            </div>
          )} */}

          {/* VIDEO */}

          {/* PDF */}
          {/* {story.pdf_url && (
            <div className="pdf-clean">
              <iframe
                src={`https://backend-test-yeyr.onrender.com${story.pdf_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              />
            </div>
          )} */}
          {/* {story.pdf_url && (
            <div style={{ marginTop: "30px" }}>
              <embed
                src={`https://backend-test-yeyr.onrender.com${story.pdf_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                type="application/pdf"
                width="100%"
                height="1200px"
                style={{ borderRadius: "6px" }}
              />
            </div>
          )} */}

          {/* {story.pdf_url && (
            <div
              style={{
                marginTop: "30px",
                width: "100%",
                height: "1200px",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <iframe
                src={`https://backend-test-yeyr.onrender.com${story.pdf_url}#toolbar=0&navpanes=0&scrollbar=0`}
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  marginRight: "-20px", // hides vertical scrollbar
                }}
              />
            </div>
          )} */}
          {/* {story.video_url && (
            <div style={{ marginTop: "30px" }}>
              <video
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                }}
                src={`https://backend-test-yeyr.onrender.com${story.video_url}`}
              />
            </div>
          )} */}

          {story.video_url_link && (
            <div
              className="tp-course-details-2-widget-thumb p-relative mt-30"
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // ✅ 16:9 ratio (fixes black sides)
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid #1d3a72",
              }}
            >
              {!playVideo ? (
                <>
                  {/* ✅ Thumbnail */}
                  <Image
                    src={`https://backend-test-yeyr.onrender.com${
                      story.video_thumbnail_image || story.image
                    }`}
                    alt="video-thumbnail"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  {/* ✅ Play Button */}
                  <div
                    onClick={() => setPlayVideo(true)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        color: "#fecb00",
                        fontSize: "30px",
                        marginLeft: "4px",
                      }}
                    >
                      ▶
                    </span>
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    story.video_url_link,
                  )}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                  title="video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                ></iframe>
              )}
              <p
                className="mt-10 mb-4"
                style={{
                  lineHeight: 1.3,
                  color: "#292929",
                  fontSize: "15px",
                }}
              >
                {story.sidebar_desc}
              </p>
            </div>
          )}
          {/* <div className="tp-course-details-2-widget-thumb p-relative">
            <Image src={course_img} alt="course-img" style={{borderBlockColor:"ButtonHighlight",border:"bold"}} />
            <Image
              src={course_img}
              alt="course-img"
              style={{ border: "2px solid #292929" }}
            />
            <VideoProvider videoId="https://youtu.be/M9CCc_RSulI?si=5suypfaUc6GBiGck">
              <span>
                <PlayTwoSvg />
              </span>
            </VideoProvider>
          </div> */}
          {/* <hr /> */}
          {/* <div className="tp-course-details-2-widget-thumb p-relative mt-30">
            <Image
              src={`https://backend-test-yeyr.onrender.com${story.video_thumbnail_image}`}
              alt="course-img"
              style={{ border: "2px solid #1d3a72" }}
              width={500}
              height={300}
            />

            <VideoProvider videoId={story.video_url_link}>
              <span>
                <PlayTwoSvg />
              </span>
            </VideoProvider>
          </div> */}
        </div>

        {/* RIGHT PANEL */}
        <div className="col-lg-3 mt-10">
          <div className="side">
            <h5 className="share">SHARE</h5>

            {/* <div className="icons">
              {[FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp].map(
                (Icon, i) => (
                  <div key={i} className="icon-box">
                    <Icon />
                  </div>
                ),
              )}
            </div> */}
            {/* <div className="icons">
              {[
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/",
                },
                {
                  icon: FaFacebook,
                  link: "https://www.facebook.com/",
                },
                {
                  icon: FaTwitter,
                  link: "https://twitter.com/",
                },
                {
                  icon: FaWhatsapp,
                  link: "https://wa.me/919999999999", // change number
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-box"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div> */}
            <div className="icons">
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <FaLinkedin />
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <FaFacebook />
              </a>

              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <FaTwitter />
              </a>

              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="desc">
              The evolution of Erith, powered by its people, providing continued
              success to our customers.
              <br />
              <br />
              Read their stories and see how Erith can transform and help your
              company.
            </p>
            {/* 
            {story.pdf_url && (
              <a
                href={`https://backend-test-yeyr.onrender.com${story.pdf_url}`}
                target="_blank"
                className="download"
              >
                Download
              </a>
            )} */}
          </div>
        </div>
      </div>

      <hr style={{ marginBottom: "10px", marginTop: "25px" }} />

      {/* RELATED */}
      <div className="container mt-30">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-30">
              <h2
                style={{
                  fontSize: "25px",
                  color: "#292929",
                  marginBottom: "0",
                }}
              >
                Related Videos
              </h2>
              <a
                href="/knowledgecenter/videos"
                style={{
                  color: "#292929",
                  textDecoration: "none",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All Videos →
              </a>
            </div>
          </div>

          {/* {videos
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((story) => ( */}

          {videos
            .filter((item) => item.id !== story.id) // ✅ BEST
            .slice(0, 3)
            .map((story) => (
              <div key={story.id} className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "230px",
                    backgroundImage: `url(https://backend-test-yeyr.onrender.com${story.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                      padding: "24px 30px 30px 30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "#fff",
                          padding: "4px 14px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "inline-block",
                          fontSize: "13px",
                        }}
                      >
                        {/* <FaFileAlt size={14} /> {story.label || "Case Study"} */}
                        {getCategoryIcon(story.category_type)}{" "}
                        {story.label || story.category_type || "Case Study"}
                      </span>

                      <h3
                        style={{
                          color: "white",
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "1.2",
                          marginTop: "12px",
                          marginBottom: "0",
                        }}
                      >
                        {story.title}
                      </h3>
                    </div>

                    <div>
                      <Link
                        className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
                        href={`/knowledgecenter/videos/${story.slug}`}
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          padding: "6px 16px",
                          borderRadius: "10px",
                        }}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* STYLES (UNCHANGED) */}
      <style jsx>{`
        .back {
          font-size: 14px;
          color: #333;
          text-decoration: none;
        }

        .title {
          font-size: 34px;
          font-weight: 700;
          margin: 15px 0 20px;
        }

        .banner-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 6px;
        }

        .side {
          padding-left: 20px;
        }

        .share {
          color: #1d3a72;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .icons {
          display: flex;
          gap: 8px;
          margin-bottom: 15px;
        }

        .icon-box {
          width: 35px;
          height: 35px;
          background: #1d3a72;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 8px;
        }

        .desc {
          font-size: 13px;
          color: #555;
          margin-bottom: 20px;
        }

        .download {
          background: #1d3a72;
          color: white;
          padding: 10px 20px;
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
          border-radius: 10px;
        }

        .pdf-clean {
          margin-top: 30px;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .pdf-clean iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
}
