// // import useCourseFilter from "@/hooks/use-course-filter";
// // import { courseLanguages } from "@/lib/get-course-fields";
// // import { FilterActionTypes } from "@/types/course-filter-type";

// // type IProps = {
// //   cls?: string;
// //   checkbox?: boolean;
// // };

// // export default function FilterLanguage({ cls = "filter", checkbox }: IProps) {
// //   const { state, dispatch } = useCourseFilter();
// //   function handleLanguage(lang: string) {
// //     dispatch({ type: FilterActionTypes.SET_LANGUAGE, payload: lang });
// //   }
// //   return (
// //     <div className={`tp-${cls}-widget-content`}>
// //       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
// //         <ul>
// //           {courseLanguages.map((lang, i) => (
// //             <li key={i}>
// //               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
// //                 <input
// //                   className={`${checkbox ? "" : "form-check-input"}`}
// //                   type={checkbox ? "checkbox" : "radio"}
// //                   name={lang.language}
// //                   id={lang.language}
// //                   checked={state.language.includes(lang.language)}
// //                   readOnly
// //                 />
// //                 <label
// //                   onClick={() => handleLanguage(lang.language)}
// //                   className={`${checkbox ? "" : "form-check-label"}`}
// //                   htmlFor={lang.language}
// //                 >
// //                   {lang.language} ({lang.languageCounts})
// //                 </label>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useRouter, useSearchParams, usePathname } from "next/navigation";
// // import { courseLanguages } from "@/lib/get-course-fields";
// // import { useTransition } from "react";

// // const PARAM_KEY = "Industry";

// // type IProps = {
// //   cls?: string;
// //   checkbox?: boolean;
// // };

// // export default function FilterLanguage({ cls = "filter", checkbox }: IProps) {
// //   const router        = useRouter();
// //   const pathname      = usePathname();
// //   const searchParams  = useSearchParams();
// //   const [, startTransition] = useTransition();

// //   const selected = searchParams.getAll(PARAM_KEY);

// //   function handleToggle(lang: string) {
// //     const params = new URLSearchParams(searchParams.toString());

// //     params.delete(PARAM_KEY);

// //     const isChecked = selected.includes(lang);

// //     if (isChecked) {
// //       selected
// //         .filter((v) => v !== lang)
// //         .forEach((v) => params.append(PARAM_KEY, v));
// //     } else {
// //       [...selected, lang].forEach((v) => params.append(PARAM_KEY, v));
// //     }

// //     params.set("page", "1");

// //     // ✅ Wrap in startTransition to avoid setState-during-render warning
// //     startTransition(() => {
// //       router.push(`${pathname}?${params.toString()}`);
// //     });
// //   }

// //   return (
// //     <div className={`tp-${cls}-widget-content`}>
// //       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
// //         <ul>
// //           {courseLanguages.map((lang, i) => (
// //             <li key={i}>
// //               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
// //                 <input
// //                   className={`${checkbox ? "" : "form-check-input"}`}
// //                   type={checkbox ? "checkbox" : "radio"}
// //                   name={lang.language}
// //                   id={lang.language}
// //                   checked={selected.includes(lang.language)}
// //                   onChange={() => handleToggle(lang.language)}
// //                 />
// //                 <label
// //                   htmlFor={lang.language}
// //                   className={`${checkbox ? "" : "form-check-label"}`}
// //                 >
// //                   {lang.language} ({lang.languageCounts})
// //                 </label>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // claude code below 09-05-2026
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { useTransition } from "react";

// // URL param key: ?Industry=2
// const PARAM_KEY = "Industry";

// type IProps = {
//   cls?: string;
//   checkbox?: boolean;
//   // Industries fetched in allproducts.tsx and passed down
//   // so we don't double-fetch
//   industries: { id: number; name: string }[];
// };

// export default function FilterLanguage({
//   cls = "filter",
//   checkbox,
//   industries,
// }: IProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [, startTransition] = useTransition();

//   // All currently selected industry ids from the URL
//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(id: string) {
//     const params = new URLSearchParams(searchParams.toString());

//     // Remove all existing Industry entries then rebuild
//     params.delete(PARAM_KEY);

//     const isChecked = selected.includes(id);

//     if (isChecked) {
//       // Uncheck: keep all except this one
//       selected
//         .filter((v) => v !== id)
//         .forEach((v) => params.append(PARAM_KEY, v));
//     } else {
//       // Check: add to existing selection
//       [...selected, id].forEach((v) => params.append(PARAM_KEY, v));
//     }

//     // Reset to page 1 on every filter change
//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
//         <ul>
//           {industries.map((industry) => {
//             const idStr = String(industry.id);
//             return (
//               <li key={industry.id}>
//                 <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
//                   <input
//                     className={`${checkbox ? "" : "form-check-input"}`}
//                     type={checkbox ? "checkbox" : "radio"}
//                     name={`industry-${industry.id}`}
//                     id={`industry-${industry.id}`}
//                     checked={selected.includes(idStr)}
//                     onChange={() => handleToggle(idStr)}
//                   />
//                   <label
//                     htmlFor={`industry-${industry.id}`}
//                     className={`${checkbox ? "" : "form-check-label"}`}
//                   >
//                     {industry.name}
//                   </label>
//                 </div>
//               </li>
//             );
//           })}
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

//     // ✅ Wrap in startTransition to avoid setState-during-render warning
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

// // claude code below 09-05-2026
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { useTransition } from "react";

// // URL param key: ?Industry=Oil & Gas
// const PARAM_KEY = "Industry";

// type IProps = {
//   cls?: string;
//   checkbox?: boolean;
//   industries: { id: number; name: string }[];
// };

// export default function FilterLanguage({
//   cls = "filter",
//   checkbox,
//   industries,
// }: IProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [, startTransition] = useTransition();

//   // Selected values from URL are NAMES
//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(industry: { id: number; name: string }) {
//     const params = new URLSearchParams(searchParams.toString());

//     // Remove all existing Industry entries then rebuild
//     params.delete(PARAM_KEY);
//     // ✅ Remove page so we can re-append it last
//     params.delete("page");

//     const isChecked = selected.includes(industry.name);

//     if (isChecked) {
//       // Uncheck: keep all except this one
//       selected
//         .filter((v) => v !== industry.name)
//         .forEach((v) => params.append(PARAM_KEY, v));
//     } else {
//       // Check: add to existing selection
//       [...selected, industry.name].forEach((v) =>
//         params.append(PARAM_KEY, v),
//       );
//     }

//     // ✅ page is always last
//     params.append("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
//         <ul>
//           {industries.map((industry) => (
//             <li key={industry.id}>
//               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
//                 <input
//                   className={`${checkbox ? "" : "form-check-input"}`}
//                   type={checkbox ? "checkbox" : "radio"}
//                   name={`industry-${industry.id}`}
//                   id={`industry-${industry.id}`}
//                   checked={selected.includes(industry.name)}
//                   onChange={() => handleToggle(industry)}
//                 />
//                 <label
//                   htmlFor={`industry-${industry.id}`}
//                   className={`${checkbox ? "" : "form-check-label"}`}
//                 >
//                   {industry.name}
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
// import { useTransition } from "react";

// const PARAM_KEY = "Industry";

// // slug helpers
// const toSlug = (text: string) =>
//   text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// type IProps = {
//   cls?: string;
//   checkbox?: boolean;
//   industries: { id: number; name: string }[];
// };

// export default function FilterLanguage({
//   cls = "filter",
//   checkbox,
//   industries,
// }: IProps) {
//   const router              = useRouter();
//   const pathname            = usePathname();
//   const searchParams        = useSearchParams();
//   const [, startTransition] = useTransition();

//   // selected = slugs from URL
//   const selected = searchParams.getAll(PARAM_KEY);

//   function handleToggle(industry: { id: number; name: string }) {
//     const slug = toSlug(industry.name);
//     const currentProductTypes = searchParams.getAll("Product Type");
//     const params = new URLSearchParams();

//     const isChecked = selected.includes(slug);
//     const newIndustries = isChecked
//       ? selected.filter((v) => v !== slug)
//       : [...selected, slug];

//     // 1st: Product Type slugs
//     currentProductTypes.forEach((v) => params.append("Product Type", v));

//     // 2nd: Industry slugs
//     newIndustries.forEach((v) => params.append(PARAM_KEY, v));

//     // 3rd: page always last
//     params.append("page", "1");

//     startTransition(() => {
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     });
//   }

//   return (
//     <div className={`tp-${cls}-widget-content`}>
//       <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
//         <ul>
//           {industries.map((industry) => (
//             <li key={industry.id}>
//               <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
//                 <input
//                   className={`${checkbox ? "" : "form-check-input"}`}
//                   type={checkbox ? "checkbox" : "radio"}
//                   name={`industry-${industry.id}`}
//                   id={`industry-${industry.id}`}
//                   checked={selected.includes(toSlug(industry.name))}
//                   onChange={() => handleToggle(industry)}
//                 />
//                 <label
//                   htmlFor={`industry-${industry.id}`}
//                   className={`${checkbox ? "" : "form-check-label"}`}
//                 >
//                   {industry.name}
//                 </label>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";

const PARAM_KEY = "Industry";

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

type IProps = {
  cls?: string;
  checkbox?: boolean;
  industries: { id: number; name: string }[];
};

export default function FilterLanguage({
  cls = "filter",
  checkbox,
  industries,
}: IProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const selected = searchParams.getAll(PARAM_KEY);

  function handleToggle(industry: { id: number; name: string }) {
    const slug = toSlug(industry.name);
    const currentProductTypes = searchParams.getAll("Product Type");
    const params = new URLSearchParams();

    const isChecked = selected.includes(slug);
    const newIndustries = isChecked
      ? selected.filter((v) => v !== slug)
      : [...selected, slug];

    currentProductTypes.forEach((v) => params.append("Product Type", v));
    newIndustries.forEach((v) => params.append(PARAM_KEY, v));
    params.append("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div className={`tp-${cls}-widget-content`}>
      <div className={`tp-${cls}-widget-${checkbox ? "checkbox" : "radio"}`}>
        <ul>
          {industries.map((industry) => (
            <li key={industry.id}>
              <div className={`${checkbox ? "from-checkbox" : "form-check"}`}>
                <input
                  className={`${checkbox ? "" : "form-check-input"}`}
                  type={checkbox ? "checkbox" : "radio"}
                  name={`industry-${industry.id}`}
                  id={`industry-${industry.id}`}
                  checked={selected.includes(toSlug(industry.name))}
                  onChange={() => handleToggle(industry)}
                />
                <label
                  htmlFor={`industry-${industry.id}`}
                  className={`${checkbox ? "" : "form-check-label"}`}
                >
                  {industry.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
