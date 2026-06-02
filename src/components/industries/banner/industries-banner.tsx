// export default function IndustriesBanner({ data }: any) {
// const IMAGE_BASE = "https://backend-test-yeyr.onrender.com";

// const banner =
//   data?.banner_image
//     ? data.banner_image.startsWith("http")
//       ? data.banner_image
//       : `${IMAGE_BASE}/${data.banner_image.replace(/^\/+/, "")}`
//     : "/fallback.jpg";

//   return (
//     <section
//       className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
//       style={{ height: "400px" }}
//     >
//       {/* ✅ Background Image */}
//       <div
//         className="tp-breadcrumb__bg overlay"
//         style={{
//           backgroundImage: `url(${banner})`,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-sm-12">
//             <div className="tp-breadcrumb__content">
//               <div className="tp-breadcrumb__list inner-after">
//                 <h3 className="tp-breadcrumb__title color">
//                   {data?.banner_title}
//                 </h3>
//                 <span className="white">{data?.banner_subtitle}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { HomeSvg } from "@/components/svg";
import { IndustrySvg } from "@/components/svg";

type IndustryData = {
  id: number;
  category_id: number | null;
  subcategory_id: number | null;
  slug: string | null;

  banner_title: string | null;
  banner_subtitle: string | null;
  banner_image: string | null;

  about_title: string | null;
  about_subtitle: string | null;
  about_description: string | null;
  about_image: string | null;

  created_at: string;

  industries?: unknown[];
};

type Props = {
  data: IndustryData;
};
export default function IndustriesBanner({ data }: Props) {
  const banner = data?.banner_image
    ? data.banner_image.startsWith("http")
      ? data.banner_image
      : `https://backend-test-yeyr.onrender.com/uploads/${data.banner_image}`
    : "/placeholder.jpg";

  return (
    <section
      className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
      style={{ height: "400px" }}
    >
      <div
        className="tp-breadcrumb__bg overlay"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container">
        <h3 className="tp-breadcrumb__title" style={{ color: "#fecb00 " }}>
          {data?.banner_title}
        </h3>
        <span style={{ color: "#fecb00" }}>
          <IndustrySvg />
        </span>
        <span className="white" style={{ color: "#fff" }}>
          {data?.banner_subtitle}
        </span>
      </div>
    </section>
  );
}
