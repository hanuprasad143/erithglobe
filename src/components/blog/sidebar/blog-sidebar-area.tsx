// import Link from "next/link";
// import Image from "next/image";
// import { blog_stories_data } from "@/data/blog-data";

// export default function BlogSidebarArea() {
//   const truncateText = (text: string, limit = 50) =>
//     text.length > limit ? text.slice(0, limit) + "..." : text;

//   return (
//     <div className="tp-sidebar-wrapper pl-55">
//       {/* Top Posts */}
//       <div className="tp-sidebar-widget mb-50">
//         <div className="tp-sidebar-content">
//           <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
//             Top Posts
//           </h5>

//           <ul className="tp-sidebar-post-list">
//             {blog_stories_data.slice(0, 5).map((blog, index) => (
//               <li key={blog.id} className="tp-sidebar-post-item">
//                 {/* <Link href={`/blog-details/${blog.id}`} */}
//                 <Link href={`#`}>
//                   <div className="d-flex align-items-start">
//                     <span
//                       className="tp-sidebar-post-number"
//                       style={{
//                         marginRight: "12px",
//                         fontSize: "32px",
//                         fontWeight: "700",
//                         lineHeight: "1",
//                       }}
//                     >
//                       {index + 1}
//                     </span>

//                     <span className="tp-sidebar-post-title">
//                       {truncateText(blog.title)}
//                     </span>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Recent Posts */}
//       <div className="tp-sidebar-widget">
//         <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
//           Recent Posts
//         </h5>

//         <div className="tp-recent-post-grid">
//           {blog_stories_data.slice(0, 6).map((blog) => (
//             <Link
//               //   href={`/blog-details/${blog.id}`}
//               href="#"
//               key={blog.id}
//               className="tp-recent-post-item"
//             >
//               <Image src={blog.img} alt={blog.title} width={300} height={200} />

//               <div className="tp-recent-post-overlay">
//                 <h5>{truncateText(blog.title, 35)}</h5>
//                 {/* <p>{blog.date || "Read more"}</p> */}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  img?: string;
  top_position: number;
  // Add other fields as needed, e.g., content: string; createdAt: string;
}

export default function BlogSidebarArea() {
  const [topPosts, setTopPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  const truncateText = (text: string, limit = 50) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ fetch top posts
        const topRes = await fetch(
          "https://backend-test-yeyr.onrender.com/api/blogs/top",
        );
        const topData = await topRes.json();

        // sort by top_position ascending & take 1–5
        const sortedTop = topData
          .filter((b: BlogPost) => b.top_position >= 1 && b.top_position <= 5)
          .sort((a: BlogPost, b: BlogPost) => a.top_position - b.top_position);

        setTopPosts(sortedTop);

        // ✅ fetch recent posts
        const recentRes = await fetch(
          "https://backend-test-yeyr.onrender.com/api/blogs/recent",
        );
        const recentData = await recentRes.json();

        setRecentPosts(recentData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tp-sidebar-wrapper pl-55">
      {/* Top Posts */}
      <div className="tp-sidebar-widget mb-50">
        <div className="tp-sidebar-content">
          <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
            Top Posts
          </h5>

          <ul className="tp-sidebar-post-list">
            {topPosts.map((blog, index) => (
              <li key={blog.id} className="tp-sidebar-post-item">
                <Link href={`/blog/${blog.slug}`}>
                  <div className="d-flex align-items-start">
                    <span
                      className="tp-sidebar-post-number"
                      style={{
                        marginRight: "12px",
                        fontSize: "32px",
                        fontWeight: "700",
                        lineHeight: "1",
                      }}
                    >
                      {index + 1}
                    </span>

                    <span className="tp-sidebar-post-title">
                      {truncateText(blog.title)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="tp-sidebar-widget">
        <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
          Recent Posts
        </h5>

        <div className="tp-recent-post-grid">
          {recentPosts.slice(0, 6).map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="tp-recent-post-item"
            >
              <Image
                src={
                  blog.img
                    ? `https://backend-test-yeyr.onrender.com${blog.img}`
                    : "/assets/img/default.jpg"
                }
                alt={blog.title}
                width={300}
                height={200}
              />

              <div className="tp-recent-post-overlay">
                <h5>{truncateText(blog.title, 35)}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
