// "use client";
// import { useState } from "react";

// type Props = {
//   onChange: (category: string | null) => void;
// };

// const categories = [
//   "Success Stories",
//   "Webinars",
//   "Videos",
//   "Application Guides",
//   "Published Papers",
// ];

// export default function KnowledgeCenterFilterCategory({ onChange }: Props) {
//   const [active, setActive] = useState<string | null>(null);

//   const handleSelect = (category: string) => {
//     setActive(category);
//     onChange(category); // ✅ send single category
//   };

//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {categories.map((cat) => (
//             <li key={cat}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleSelect(cat);
//                 }}
//                 style={{
//                   fontWeight: active === cat ? "bold" : "normal",
//                 }}
//               >
//                 {cat}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

// import { useSearchParams } from "next/navigation";

type Props = {
  onChange: (category: string | null) => void;
};

const categories = [
  // "Success Stories",
  "Webinars",
  "Videos",
  // "Application Guides",
  // "Published Papers",
];

// 🔹 SAME mapping you used before
const getCategoryFromSlug = (slug: string | null) => {
  switch (slug) {
    // case "successstories":
    //   return "Success Stories";
    case "webinars":
      return "Webinars";
    case "videos":
      return "Videos";
    // case "application-guides":
    //   return "Application Guides";
    // case "published-papers":
    //   return "Published Papers";
    default:
      return null;
  }
};

export default function KnowledgeCenterFilterCategory({ onChange }: Props) {
  // const searchParams = useSearchParams();

  // 🔹 get slug from URL path (manual way)
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const slug = path.split("/")[2] || null;

  const active = getCategoryFromSlug(slug);

  const handleSelect = (category: string) => {
    onChange(category);
  };

  return (
    <div className="product-filter">
      <div className="product-filter-categories">
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(cat);
                }}
                style={{
                  fontWeight: active === cat ? "bold" : "normal",
                }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
