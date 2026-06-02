// "use client";
// import { useState, useEffect } from "react";

// type Props = {
//   onChange: (sizes: string[]) => void;
// };

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

// interface ProductType {
//   id: number;
//   name: string;
// }

// export default function FilterCategory({ onChange }: Props) {
//   const [selected, setSelected] = useState<string[]>([]);
//   const [categories, setCategories] = useState<ProductType[]>([]);

//   /* ===============================
//      FETCH FROM BACKEND
//   ============================== */
//   useEffect(() => {
//     fetch(`${BASE_URL}/allproducttypes`)
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error(err));
//   }, []);

//   /* ===============================
//      TOGGLE
//   ============================== */
//   const toggleOption = (value: string) => {
//     setSelected((prev) => {
//       const updated = prev.includes(value)
//         ? prev.filter((v) => v !== value)
//         : [...prev, value];

//       onChange(updated); // send to parent
//       return updated;
//     });
//   };

//   /* ===============================
//      UI
//   ============================== */
//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {categories.map((cat) => (
//             <li key={cat.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleOption(cat.name);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(cat.name) ? "bold" : "normal",
//                 }}
//               >
//                 {cat.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// // claude code below 09-05-2026

// "use client";

// import { useEffect, useState, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
// const PARAM_KEY = "Product Type";

// interface ProductType {
//   id: number;
//   name: string;
// }

// // No onChange prop — writes directly to URL
// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();

//   const [categories, setCategories] = useState<ProductType[]>([]);

//   // ===============================
//   // FETCH FROM BACKEND
//   // ===============================
//   useEffect(() => {
//     fetch(`${BASE_URL}/allproducttypes`)
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Read selected values from URL
//   const selected = searchParams.getAll(PARAM_KEY);

//   // ===============================
//   // TOGGLE — writes to URL
//   // ===============================
//   function handleToggle(name: string) {
//     const params = new URLSearchParams(searchParams.toString());

//     // Remove all existing entries then rebuild
//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(name);

//     if (isChecked) {
//       // Uncheck: keep everything except this one
//       selected
//         .filter((c) => c !== name)
//         .forEach((c) => params.append(PARAM_KEY, c));
//     } else {
//       // Check: add to existing selection
//       [...selected, name].forEach((c) => params.append(PARAM_KEY, c));
//     }

//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   // ===============================
//   // UI
//   // ===============================
//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {categories.map((cat) => (
//             <li key={cat.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleToggle(cat.name);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(cat.name) ? "bold" : "normal",
//                 }}
//               >
//                 {cat.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
const PARAM_KEY = "Product Type";

// slug helpers
const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

interface ProductType {
  id: number;
  name: string;
}

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
export default function FilterCategory() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const [categories, setCategories] = useState<ProductType[]>([]);

  // ===============================
  // FETCH FROM BACKEND
  // ===============================
  useEffect(() => {
    fetch(`${BASE_URL}/allproducttypes`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // selected = slugs from URL
  const selected = searchParams.getAll(PARAM_KEY);

  // ===============================
  // TOGGLE — rebuilds URL from scratch
  // ===============================
  function handleToggle(name: string) {
    const slug = toSlug(name);
    const currentIndustries = searchParams.getAll("Industry");
    const params = new URLSearchParams();

    const isChecked = selected.includes(slug);
    const newProductTypes = isChecked
      ? selected.filter((c) => c !== slug)
      : [...selected, slug];

    // 1st: Product Type slugs
    newProductTypes.forEach((c) => params.append(PARAM_KEY, c));

    // 2nd: Industry slugs
    currentIndustries.forEach((v) => params.append("Industry", v));

    // 3rd: page always last
    params.append("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  // ===============================
  // UI
  // ===============================
  return (
    <div className="product-filter">
      <div className="product-filter-categories">
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(cat.name);
                }}
                style={{
                  fontWeight: selected.includes(toSlug(cat.name))
                    ? "bold"
                    : "normal",
                }}
              >
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
