// import Link from "next/link";
// import Image from "next/image";
// import { IBlogDT } from "@/types/blog-d-t";
// import { RightArrowSeven, ShareSvg } from "@/components/svg";
// import { LeftArrowSeven } from "@/components/svg/arrow-svg";

// type IProps = {
//   blog: IBlogDT;
// };

// export default function BlogStandardItem({ blog }: IProps) {
//   return (
//     <div className="tp-postbox-item p-relative mb-40">
//       <div className="tp-postbox-thumb">
//         {/* <Link href={`/blog-details/${blog.id}`}> */}
//         {/* <Link href={`#`}> */}
//         <Image
//           src={blog.img}
//           alt={blog.title}
//           width={793}
//           height={420}
//           style={{ height: "auto" }}
//         />
//         {/* </Link> */}
//       </div>
//       <div className="tp-postbox-content">
//         {/* <div className="tp-blog-stories-tag-wrap d-flex">
//           <a href="#">Education</a>

//         </div> */}
//         <span>{blog.date}</span>
//         <h3
//           className="tp-postbox-title"
//           style={{ fontSize: "25px", color: "#292929" }}
//         >
//           {/* <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link> */}
//           {blog.title}
//         </h3>
//         <p>{blog.desc}</p>
//         <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
//           <div className="tp-postbox-btn">
//             {/* <Link href={`/blog-details/${blog.id}`}>
//               Read More{" "}
//               <span>
//                 <RightArrowSeven />
//               </span>
//             </Link> */}
//           </div>
//           <div className="tp-postbox-share">
//             <button className="p-relative">
//               Share this post
//               <span>
//                 <ShareSvg />
//               </span>
//             </button>

//             <ul className="tp-postbox-share-hover">
//               <li>
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i> <b>Facebook</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i> <b>Twitter</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-youtube"></i> <b>Youtube</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-linkedin"></i> <b>Linkedin</b>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="tp-postbox-content">
//         <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
//           <div className="tp-postbox-btn">
//             {/* <Link href={`/blog-details/${blog.id}`}> */}
//             <Link href="#">
//               <span style={{ marginRight: "8px" }}>
//                 <LeftArrowSeven />
//               </span>
//               Previous{" "}
//             </Link>
//           </div>
//           <div className="tp-postbox-btn">
//             {/* <Link href={`/blog-details/${blog.id}`}> */}
//             <Link href="#">
//               Next{" "}
//               <span>
//                 <RightArrowSeven />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { RightArrowSeven, ShareSvg } from "@/components/svg";
// import { LeftArrowSeven } from "@/components/svg/arrow-svg";

// export default function BlogStandardItem() {
//   const params = useParams();
//   const slug = params?.slug as string;

//   const [blog, setBlog] = useState<any>(null);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchBlog = async () => {
//       try {
//         setBlog(null); // 🔥 reset old data

//         const res = await fetch(
//           `https://backend-test-yeyr.onrender.com/api/blogs/${slug}`,
//           { cache: "no-store" }
//         );

//         const data = await res.json();
//         setBlog(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchBlog();
//   }, [slug]);

//   // date format
//   const formatDate = (dateStr: string) => {
//     if (!dateStr) return "";
//     const [day, month, year] = dateStr.split("-");
//     return new Date(`${year}-${month}-${day}`).toDateString();
//   };

//   if (!blog) return <p style={{ padding: "20px" }}>Loading...</p>;

//   if (blog?.message === "Not found") {
//     return <p style={{ padding: "20px" }}>Blog not found</p>;
//   }

//   return (
//     <div className="tp-postbox-item p-relative mb-40" key={slug}>
//       <div className="tp-postbox-thumb">
//         <Image
//           src={
//             blog.img
//               ? `https://backend-test-yeyr.onrender.com${blog.img}`
//               : "/assets/img/default.jpg"
//           }
//           alt={blog.title}
//           width={793}
//           height={420}
//           style={{ height: "auto" }}
//         />
//       </div>

//       <div className="tp-postbox-content">
//         <span>{formatDate(blog.date)}</span>

//         <h3
//           className="tp-postbox-title"
//           style={{ fontSize: "25px", color: "#292929" }}
//         >
//           {blog.title}
//         </h3>

//         {/* ✅ FIXED */}
//         <p>{blog.description}</p>

//         <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
//           <div className="tp-postbox-btn"></div>

//           <div className="tp-postbox-share">
//             <button className="p-relative">
//               Share this post
//               <span>
//                 <ShareSvg />
//               </span>
//             </button>

//             <ul className="tp-postbox-share-hover">
//               <li>
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i> <b>Facebook</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i> <b>Twitter</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-youtube"></i> <b>Youtube</b>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fab fa-linkedin"></i> <b>Linkedin</b>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="tp-postbox-content">
//         <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
//           <div className="tp-postbox-btn">
//             <Link href="/blog">
//               <span style={{ marginRight: "8px" }}>
//                 <LeftArrowSeven />
//               </span>
//               Previous
//             </Link>
//           </div>

//           <div className="tp-postbox-btn">
//             <Link href="/blog">
//               Next
//               <span>
//                 <RightArrowSeven />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RightArrowSeven, ShareSvg } from "@/components/svg";
import { LeftArrowSeven } from "@/components/svg/arrow-svg";

interface BlogPost {
  id: number;
  title: string;
  link: string;
  slug: string;
  img?: string;
  top_position: number;
  description: string;
  date: string;
  message?: string;
  // Add other fields as needed, e.g., content: string; createdAt: string;
}

export default function BlogStandardItem() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);

  // ✅ NEW STATES
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  void blogs;
  const [prevBlog, setPrevBlog] = useState<BlogPost | null>(null);
  const [nextBlog, setNextBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setBlog(null);

        // current blog
        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/blogs/${slug}`,
          {
            cache: "no-store",
          },
        );
        const data = await res.json();
        setBlog(data);

        // ✅ fetch all blogs for navigation
        const listRes = await fetch(
          `https://backend-test-yeyr.onrender.com/api/blogs/recent`,
        );
        const listData = await listRes.json();

        setBlogs(listData);

        const index = listData.findIndex((b: BlogPost) => b.slug === slug);

        if (index !== -1) {
          setPrevBlog(listData[index - 1] || null);
          setNextBlog(listData[index + 1] || null);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [slug]);

  // date format
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}`).toDateString();
  };

  if (!blog) return <p style={{ padding: "20px" }}>Loading...</p>;

  if (blog?.message === "Not found") {
    return <p style={{ padding: "20px" }}>Blog not found</p>;
  }

  return (
    <div className="tp-postbox-item p-relative mb-40" key={slug}>
      <div className="tp-postbox-thumb">
        <Image
          src={
            blog.img
              ? `https://backend-test-yeyr.onrender.com${blog.img}`
              : "/assets/img/default.jpg"
          }
          alt={blog.title}
          width={793}
          height={420}
          style={{ height: "auto" }}
        />
      </div>

      <div className="tp-postbox-content">
        {/* <span>{formatDate(blog.date)}</span> */}
        <span>
          {blog.date
            ? blog.date.split("-").length === 3
              ? formatDate(blog.date)
              : new Date(blog.date + "-01").toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })
            : ""}
        </span>
        {/* 
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "25px", color: "#292929" }}
        >
          {blog.title}
        </h3> */}
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "25px", color: "#292929" }}
        >
          {blog.link ? (
            <Link
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#292929",
                textDecoration: "none",
              }}
            >
              {blog.title}
            </Link>
          ) : (
            blog.title
          )}
        </h3>

        {/* <p>{blog.description}</p> */}
        {blog.description?.split("||").map((para, index) => (
          <p key={index} className="mb-3">
            {para.trim()}
          </p>
        ))}

        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn"></div>

          <div className="tp-postbox-share">
            <button className="p-relative">
              Share this post
              <span>
                <ShareSvg />
              </span>
            </button>
            {/* 
            <ul className="tp-postbox-share-hover">
              <li>
                <a href="#">
                  <i className="fab fa-whatsapp"></i> <b>WhatsApp</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i> <b>LinkedIn</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i> <b>Youtube</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> <b>Instagram</b>
                </a>
              </li>
            </ul> */}
            <ul className="tp-postbox-share-hover">
              <li>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    blog.title + " " + window.location.href,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> <b>WhatsApp</b>
                </a>
              </li>

              <li>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> <b>LinkedIn</b>
                </a>
              </li>

              <li>
                <a
                  href={`https://www.youtube.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i> <b>Youtube</b>
                </a>
              </li>

              <li>
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> <b>Instagram</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ ONLY LOGIC UPDATED BELOW */}
      {/* <div className="tp-postbox-content">
        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn">
            <Link href={prevBlog ? `/blog/${prevBlog.slug}` : "/blog"}>
              <span style={{ marginRight: "8px" }}>
                <LeftArrowSeven />
              </span>
              Previous
            </Link>
          </div>

          <div className="tp-postbox-btn">
            <Link href={nextBlog ? `/blog/${nextBlog.slug}` : "/blog"}>
              Next
              <span>
                <RightArrowSeven />
              </span>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="tp-postbox-content">
        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn">
            {/* ❌ Hide if latest (no prevBlog) */}
            {prevBlog && (
              <Link href={`/blog/${prevBlog.slug}`}>
                <span style={{ marginRight: "8px" }}>
                  <LeftArrowSeven />
                </span>
                Previous
              </Link>
            )}
          </div>

          <div className="tp-postbox-btn">
            {/* ❌ Hide if first post (no nextBlog) */}
            {nextBlog && (
              <Link href={`/blog/${nextBlog.slug}`}>
                Next
                <span>
                  <RightArrowSeven />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
