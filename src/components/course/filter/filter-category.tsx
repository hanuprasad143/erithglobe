// import useCourseFilter from "@/hooks/use-course-filter";
// import { courseCategories } from "@/lib/get-course-fields";
// import { FilterActionTypes } from "@/types/course-filter-type";

// type IProps = {
//   cls?: string;
// };
// export default function FilterCategory({ cls = "filter" }: IProps) {
//   const { state, dispatch } = useCourseFilter();
//   function handleCategory(category: string) {
//     dispatch({ type: FilterActionTypes.SET_CATEGORY, payload: category });
//   }
//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={state.category.includes(cate.category)}
//                   readOnly
//                 />
//                 <label
//                   onClick={() => handleCategory(cate.category)}
//                   htmlFor={cate.category}
//                 >
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { courseCategories } from "@/lib/get-course-fields";
// import { useTransition } from "react";

// const PARAM_KEY = "Product Type";

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router        = useRouter();
//   const pathname      = usePathname();
//   const searchParams  = useSearchParams();
//   const [, startTransition] = useTransition();

//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(category: string) {
//     const params = new URLSearchParams(searchParams.toString());

//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(category);

//     if (isChecked) {
//       selected
//         .filter((c) => c !== category)
//         .forEach((c) => params.append(PARAM_KEY, c));
//     } else {
//       [...selected, category].forEach((c) => params.append(PARAM_KEY, c));
//     }

//     params.set("page", "1");

//     // ✅ Wrap in startTransition to avoid setState-during-render warning
//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`);
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={selected.includes(cate.category)}
//                   onChange={() => handleToggle(cate.category)}
//                 />
//                 <label htmlFor={cate.category}>
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// // claude code below 09-05-2026
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { courseCategories } from "@/lib/get-course-fields";
// import { useTransition } from "react";

// // URL param key: ?Product Type=Valves
// const PARAM_KEY = "Product Type";

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [, startTransition] = useTransition();

//   // All currently selected product types from the URL
//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(category: string) {
//     const params = new URLSearchParams(searchParams.toString());

//     // Remove ALL existing entries then rebuild
//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(category);

//     if (isChecked) {
//       // Uncheck: keep everything except this one
//       selected
//         .filter((c) => c !== category)
//         .forEach((c) => params.append(PARAM_KEY, c));
//     } else {
//       // Check: add this one to existing selection
//       [...selected, category].forEach((c) => params.append(PARAM_KEY, c));
//     }

//     // Reset to page 1 on every filter change
//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={selected.includes(cate.category)}
//                   onChange={() => handleToggle(cate.category)}
//                 />
//                 <label htmlFor={cate.category}>
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import useCourseFilter from "@/hooks/use-course-filter";
// import { courseCategories } from "@/lib/get-course-fields";
// import { FilterActionTypes } from "@/types/course-filter-type";

// type IProps = {
//   cls?: string;
// };
// export default function FilterCategory({ cls = "filter" }: IProps) {
//   const { state, dispatch } = useCourseFilter();
//   function handleCategory(category: string) {
//     dispatch({ type: FilterActionTypes.SET_CATEGORY, payload: category });
//   }
//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={state.category.includes(cate.category)}
//                   readOnly
//                 />
//                 <label
//                   onClick={() => handleCategory(cate.category)}
//                   htmlFor={cate.category}
//                 >
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { courseCategories } from "@/lib/get-course-fields";
// import { useTransition } from "react";

// const PARAM_KEY = "Product Type";

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router        = useRouter();
//   const pathname      = usePathname();
//   const searchParams  = useSearchParams();
//   const [, startTransition] = useTransition();

//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(category: string) {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete(PARAM_KEY);
//     const isChecked = selected.includes(category);
//     if (isChecked) {
//       selected
//         .filter((c) => c !== category)
//         .forEach((c) => params.append(PARAM_KEY, c));
//     } else {
//       [...selected, category].forEach((c) => params.append(PARAM_KEY, c));
//     }
//     params.set("page", "1");
//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`);
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={selected.includes(cate.category)}
//                   onChange={() => handleToggle(cate.category)}
//                 />
//                 <label htmlFor={cate.category}>
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// claude code below 09-05-2026
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { courseCategories } from "@/lib/get-course-fields";
// import { useTransition } from "react";

// const PARAM_KEY = "Product Type";

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();

//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(category: string) {
//     // ✅ Always rebuild from scratch so order is always clean
//     const currentIndustries = searchParams.getAll("Industry");
//     const params = new URLSearchParams();

//     const isChecked = selected.includes(category);
//     const newProductTypes = isChecked
//       ? selected.filter((c) => c !== category)
//       : [...selected, category];

//     // 1st: Product Type
//     newProductTypes.forEach((c) => params.append(PARAM_KEY, c));

//     // 2nd: Industry
//     currentIndustries.forEach((v) => params.append("Industry", v));

//     // 3rd: page always last
//     params.append("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {courseCategories.map((cate, i) => (
//             <li key={i}>
//               <div className="from-checkbox">
//                 <input
//                   id={cate.category}
//                   type="checkbox"
//                   checked={selected.includes(cate.category)}
//                   onChange={() => handleToggle(cate.category)}
//                 />
//                 <label htmlFor={cate.category}>
//                   {cate.category} ({cate.courseCount})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import useCourseFilter from "@/hooks/use-course-filter";
// import { courseLanguages } from "@/lib/get-course-fields";
// import { FilterActionTypes } from "@/types/course-filter-type";

// type IProps = {
//   cls?: string;
//   checkbox?: boolean;
// };

// export default function FilterLanguage({ cls = "filter", checkbox }: IProps) {
//   const { state, dispatch } = useCourseFilter();
//   function handleLanguage(lang: string) {
//     dispatch({ type: FilterActionTypes.SET_LANGUAGE, payload: lang });
//   }
//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
//         <ul>
//           {courseLanguages.map((lang, i) => (
//             <li key={i}>
//               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
//                 <input
//                   className={`${checkbox ? "" : "form-check-input"}`}
//                   type={checkbox ? "checkbox" : "radio"}
//                   name={lang.language}
//                   id={lang.language}
//                   checked={state.language.includes(lang.language)}
//                   readOnly
//                 />
//                 <label
//                   onClick={() => handleLanguage(lang.language)}
//                   className={`${checkbox ? "" : "form-check-label"}`}
//                   htmlFor={lang.language}
//                 >
//                   {lang.language} ({lang.languageCounts})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { courseLanguages } from "@/lib/get-course-fields";
// import { useTransition } from "react";

// const PARAM_KEY = "Industry";

// type IProps = {
//   cls?: string;
//   checkbox?: boolean;
// };

// export default function FilterLanguage({ cls = "filter", checkbox }: IProps) {
//   const router        = useRouter();
//   const pathname      = usePathname();
//   const searchParams  = useSearchParams();
//   const [, startTransition] = useTransition();

//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(lang: string) {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete(PARAM_KEY);
//     const isChecked = selected.includes(lang);
//     if (isChecked) {
//       selected
//         .filter((v) => v !== lang)
//         .forEach((v) => params.append(PARAM_KEY, v));
//     } else {
//       [...selected, lang].forEach((v) => params.append(PARAM_KEY, v));
//     }
//     params.set("page", "1");
//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`);
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
//         <ul>
//           {courseLanguages.map((lang, i) => (
//             <li key={i}>
//               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
//                 <input
//                   className={`${checkbox ? "" : "form-check-input"}`}
//                   type={checkbox ? "checkbox" : "radio"}
//                   name={lang.language}
//                   id={lang.language}
//                   checked={selected.includes(lang.language)}
//                   onChange={() => handleToggle(lang.language)}
//                 />
//                 <label
//                   htmlFor={lang.language}
//                   className={`${checkbox ? "" : "form-check-label"}`}
//                 >
//                   {lang.language} ({lang.languageCounts})
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// claude code below 09-05-2026
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { useTransition } from "react";

// const PARAM_KEY = "Product Type";
// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";

// // slug helpers
// const toSlug = (text: string) =>
//   text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// const fromSlug = (text: string) =>
//   text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// interface ProductType {
//   id: number;
//   name: string;
// }

// import { useState, useEffect } from "react";

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();
//   const [categories, setCategories] = useState<ProductType[]>([]);

//   useEffect(() => {
//     fetch(`${BASE_URL}/allproducttypes`)
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // selected = slugs from URL
//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(name: string) {
//     const slug = toSlug(name);
//     const currentIndustries = searchParams.getAll("Industry");
//     const params = new URLSearchParams();

//     const isChecked = selected.includes(slug);
//     const newProductTypes = isChecked
//       ? selected.filter((c) => c !== slug)
//       : [...selected, slug];

//     // 1st: Product Type slugs
//     newProductTypes.forEach((c) => params.append(PARAM_KEY, c));

//     // 2nd: Industry slugs
//     currentIndustries.forEach((v) => params.append("Industry", v));

//     // 3rd: page always last
//     params.append("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-checkbox`}>
//         <ul>
//           {categories.map((cat) => (
//             <li key={cat.id}>
//               <div className="from-checkbox">
//                 <input
//                   id={`cat-${cat.id}`}
//                   type="checkbox"
//                   checked={selected.includes(toSlug(cat.name))}
//                   onChange={() => handleToggle(cat.name)}
//                 />
//                 <label htmlFor={`cat-${cat.id}`}>
//                   {cat.name}
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useTransition } from "react";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";

// const BASE_URL = "https://backend-test-yeyr.onrender.com/api";
// const PARAM_KEY = "Product Type";

// const toSlug = (text: string) =>
//   text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// interface ProductType {
//   id: number;
//   name: string;
// }

// export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();
//   const [categories, setCategories] = useState<ProductType[]>([]);

//   useEffect(() => {
//     fetch(`${BASE_URL}/allproducttypes`)
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(name: string) {
//     const slug = toSlug(name);
//     const currentIndustries = searchParams.getAll("Industry");
//     const params = new URLSearchParams();

//     const isChecked = selected.includes(slug);
//     const newProductTypes = isChecked
//       ? selected.filter((c) => c !== slug)
//       : [...selected, slug];

//     newProductTypes.forEach((c) => params.append(PARAM_KEY, c));
//     currentIndustries.forEach((v) => params.append("Industry", v));
//     params.append("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className="product-filter">
//       <div className="product-filter-categories">
//         <ul>
//           {categories.map((cat) => (
//             <li key={cat.id}>
//           <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleToggle(cat.name);
//                 }}
//                 style={{
//                   fontWeight: selected.includes(toSlug(cat.name)) ? "bold" : "normal",
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

export default function FilterCategory({ cls = "filter" }: { cls?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const [categories, setCategories] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/allproducttypes`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const selected = searchParams.getAll(PARAM_KEY);

  function handleToggle(name: string) {
    const slug = toSlug(name);
    const currentIndustries = searchParams.getAll("Industry");
    const params = new URLSearchParams();

    const isChecked = selected.includes(slug);
    const newProductTypes = isChecked
      ? selected.filter((c) => c !== slug)
      : [...selected, slug];

    newProductTypes.forEach((c) => params.append(PARAM_KEY, c));
    currentIndustries.forEach((v) => params.append("Industry", v));
    params.append("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  return (
    // <div className="product-filter">
    <div className={`product-filter ${cls}`}>
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
