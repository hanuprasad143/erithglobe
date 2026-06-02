// "use client";

// import { useEffect, useState } from "react";

// type Feature = {
//   id: number;
//   type_id: number;
//   feature: string;
// };

// type Props = {
//   typeId: number;
// };

// export default function Features({ typeId }: Props) {
//   const [features, setFeatures] = useState<Feature[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!typeId) return;

//     setLoading(true);

//     fetch(`https://backend-test-yeyr.onrender.com/api/type-features/${typeId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setFeatures(data || []);
//       })
//       .catch((err) => {
//         console.error("Features API error:", err);
//         setFeatures([]);
//       })
//       .finally(() => setLoading(false));
//   }, [typeId]);

//   return (
//     <section className="program-area mb-75">
//       <div className="container mt-5">
//         <h5
//           style={{
//             color: "#292929",
//             marginBottom: "30px",
//             fontSize: "25px",
//           }}
//         >
//           More Details
//         </h5>

//         <p
//           style={{
//             fontSize: "28px",
//             color: "#000",
//             marginBottom: "16px",
//           }}
//         >
//           Features & Benefits
//         </p>

//         {loading && <p>Loading features...</p>}

//         {!loading && features.length === 0 && (
//           <p>No features available.</p>
//         )}

//         <ul
//           style={{
//             fontSize: "16px",
//             color: "#000",
//             lineHeight: "1.8",
//             paddingLeft: "24px",
//             listStyle: "none",
//           }}
//         >
//           {features.map((item) => (
//             <li
//               key={item.id}
//               style={{
//                 display: "flex",
//                 alignItems: "flex-start",
//                 marginBottom: "10px",
//               }}
//             >
//               <span
//                 style={{
//                   width: "16px",
//                   marginRight: "8px",
//                   fontSize: "20px",
//                   lineHeight: "1.4",
//                   flexShrink: 0,
//                 }}
//               >
//                 •
//               </span>

//               <span>{item.feature}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
