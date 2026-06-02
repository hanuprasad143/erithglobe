// "use client";

// import { useState, useEffect } from "react";

// type Props = {
//   onChange: (selectedIndustries: number[]) => void;
// };

// interface Industry {
//   id: number;
//   name: string;
// }

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

// export default function FilterIndustry({ onChange }: Props) {
//   const [industries, setIndustries] = useState<Industry[]>([]);
//   const [selected, setSelected] = useState<number[]>([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch industries from backend
//   useEffect(() => {
//     const fetchIndustries = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/industries`);
//         const data = await res.json();
//         setIndustries(data || []);
//       } catch (err) {
//         console.error("Failed to fetch industries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIndustries();
//   }, []);

//   // ✅ Toggle selection
//   const toggleOption = (id: number) => {
//     setSelected((prev) => {
//       const updated = prev.includes(id)
//         ? prev.filter((v) => v !== id)
//         : [...prev, id];

//       onChange(updated);
//       return updated;
//     });
//   };

//   if (loading) {
//     return <p className="text-sm text-gray-400">Loading industries...</p>;
//   }

//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {industries.map((ind) => (
//             <li key={ind.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleOption(ind.id);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(ind.id) ? "bold" : "normal",
//                   color: selected.includes(ind.id) ? "#000" : "#666",
//                 }}
//               >
//                 {ind.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// interface Industry {
//   id: number;
//   name: string;
// }

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
// const PARAM_KEY = "Industry";

// // No onChange prop — writes directly to URL
// export default function FilterIndustry() {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();

//   const [industries, setIndustries] = useState<Industry[]>([]);
//   const [loading, setLoading]       = useState(true);

//   // ✅ Fetch industries from backend
//   useEffect(() => {
//     const fetchIndustries = async () => {
//       try {
//         const res  = await fetch(`${BASE_URL}/industries`);
//         const data = await res.json();
//         setIndustries(data || []);
//       } catch (err) {
//         console.error("Failed to fetch industries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIndustries();
//   }, []);

//   // Read selected industry ids from URL as strings
//   const selected = searchParams.getAll(PARAM_KEY);

//   // ✅ Toggle selection — writes to URL
//   function toggleOption(id: number) {
//     const idStr = String(id);
//     const params = new URLSearchParams(searchParams.toString());

//     // Remove all existing Industry entries then rebuild
//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(idStr);

//     if (isChecked) {
//       // Uncheck: keep all except this one
//       selected
//         .filter((v) => v !== idStr)
//         .forEach((v) => params.append(PARAM_KEY, v));
//     } else {
//       // Check: add to existing selection
//       [...selected, idStr].forEach((v) => params.append(PARAM_KEY, v));
//     }

//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   if (loading) {
//     return <p className="text-sm text-gray-400">Loading industries...</p>;
//   }

//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {industries.map((ind) => (
//             <li key={ind.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleOption(ind.id);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(String(ind.id)) ? "bold" : "normal",
//                   color: selected.includes(String(ind.id)) ? "#000" : "#666",
//                 }}
//               >
//                 {ind.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// claude code below 09-05-2026

// "use client";

// import { useState, useEffect, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// interface Industry {
//   id: number;
//   name: string;
// }

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
// const PARAM_KEY = "Industry";

// export default function FilterIndustry() {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();

//   const [industries, setIndustries] = useState<Industry[]>([]);
//   const [loading, setLoading]       = useState(true);

//   useEffect(() => {
//     const fetchIndustries = async () => {
//       try {
//         const res  = await fetch(`${BASE_URL}/industries`);
//         const data = await res.json();
//         setIndustries(data || []);
//       } catch (err) {
//         console.error("Failed to fetch industries:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchIndustries();
//   }, []);

//   // Selected values from URL are now NAMES not ids
//   const selected = searchParams.getAll(PARAM_KEY);

//   function toggleOption(industry: Industry) {
//     const params = new URLSearchParams(searchParams.toString());

//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(industry.name);

//     if (isChecked) {
//       selected
//         .filter((v) => v !== industry.name)
//         .forEach((v) => params.append(PARAM_KEY, v));
//     } else {
//       [...selected, industry.name].forEach((v) => params.append(PARAM_KEY, v));
//     }

//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   if (loading) {
//     return <p className="text-sm text-gray-400">Loading industries...</p>;
//   }

//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {industries.map((ind) => (
//             <li key={ind.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleOption(ind);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(ind.name) ? "bold" : "normal",
//                   color: selected.includes(ind.name) ? "#000" : "#666",
//                 }}
//               >
//                 {ind.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Industry {
  id: number;
  name: string;
}

const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
const PARAM_KEY = "Industry";

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export default function FilterIndustry() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch(`${BASE_URL}/industries`);
        const data = await res.json();
        setIndustries(data || []);
      } catch (err) {
        console.error("Failed to fetch industries:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchIndustries();
  }, []);

  // selected = slugs from URL
  const selected = searchParams.getAll(PARAM_KEY);

  function toggleOption(industry: Industry) {
    const slug = toSlug(industry.name);
    const currentProductTypes = searchParams.getAll("Product Type");
    const params = new URLSearchParams();

    const isChecked = selected.includes(slug);
    const newIndustries = isChecked
      ? selected.filter((v) => v !== slug)
      : [...selected, slug];

    // 1st: Product Type
    currentProductTypes.forEach((v) => params.append("Product Type", v));

    // 2nd: Industry slugs
    newIndustries.forEach((v) => params.append(PARAM_KEY, v));

    // 3rd: page always last
    params.append("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  if (loading) {
    return <p className="text-sm text-gray-400">Loading industries...</p>;
  }

  return (
    <div className="product-filter">
      <div className="product-filter-categories">
        <ul>
          {industries.map((ind) => (
            <li key={ind.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOption(ind);
                }}
                style={{
                  fontWeight: selected.includes(toSlug(ind.name))
                    ? "bold"
                    : "normal",
                  color: selected.includes(toSlug(ind.name)) ? "#000" : "#666",
                }}
              >
                {ind.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
