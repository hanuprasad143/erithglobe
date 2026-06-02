// // import Link from "next/link";
// // import React from "react";

// // type ServiceData = {
// //   id: string | number;
// //   icon: string;
// //   title: string;
// //   text: string;
// // };

// // interface SingleServices1Props {
// //   data: ServiceData;
// // }

// // const SingleServices1: React.FC<SingleServices1Props> = ({ data }) => {
// //   const { icon, title, text } = data;

// //   return (
// //     <div className="services-style-one">
// //       <i className={icon} style={{ color: "#fecb00" }}></i>
// //       <h4>
// //         {/* <Link href={`/services-details/${id}`}>{title}</Link> */}
// //         <Link href="#" style={{ fontSize: "18px" }}>
// //           {title}
// //         </Link>
// //       </h4>
// //       <p style={{ color: "#292929", lineHeight: "1.3", fontSize: "15px" }}>
// //         {text}
// //       </p>
// //     </div>
// //   );
// // };

// // export default SingleServices1;

// // import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// type ServiceData = {
//   id: string | number;
//   icon: string;
//   title: string;
//   text: string;
//   img: string;
//   link?: string;
// };

// interface SingleServices1Props {
//   data: ServiceData;
// }

// const SingleServices1: React.FC<SingleServices1Props> = ({ data }) => {
//   const { title, img, link } = data;

//   return (
//     <div className="services-style-one mt-0 mb-0 pb-0 pt-0 ">
//       {/* <i className={icon} style={{ color: "#fecb00" }}></i> */}
//       <img
//         src={img}
//         alt="Service Image"
//         style={{
//           width: "100%",
//           // marginBottom: "15px",
//           borderRadius: "8px",
//           height: "200px",
//           objectFit: "cover",
//         }}
//       />
//       <h4>
//         {/* <Link href={`/services-details/${id}`}>{title}</Link> */}
//         {link ? (
//           <Link href={link} style={{ fontSize: "18px" }}>
//             {title}
//           </Link>
//         ) : (
//           <span style={{ fontSize: "18px" }}>{title}</span>
//         )}
//       </h4>
//       {/* <p style={{ color: "#292929", lineHeight: "1.3", fontSize: "15px" }}>
//         {text}
//       </p> */}
//       {/* <div className="image-overlay">
//                 <span>{img.title}</span>
//               </div> */}
//     </div>
//   );
// };

// export default SingleServices1;

import Link from "next/link";
import React from "react";
import Image from "next/image";

type ServiceData = {
  id: string | number;
  icon: string;
  title: string;
  text: string;
  img: string;
  link?: string;
};

interface SingleServices1Props {
  data: ServiceData;
}

const SingleServices1: React.FC<SingleServices1Props> = ({ data }) => {
  const { title, img, link } = data;

  return (
    <div
      className="services-style-one mt-0 mb-0 pb-0 pt-0 service-full-width "
      style={{
        width: "100%",
      }}
    >
      {/* <Image
        src={img}
        alt="Service Image"
        style={{
          width: "100%",
          borderRadius: "8px",
          height: "200px",
          objectFit: "cover",
        }}
        
        className="service-responsive-img"
      /> */}
      {/* <Image
        src={img}
        alt="Service Image"
        width={500}
        height={200}
        style={{
          width: "100%",
          borderRadius: "8px",
          height: "200px",
          objectFit: "cover",
          objectPosition: "top", 
        }}
        className="service-responsive-img"
      /> */}
      <Image
        src={img}
        alt="Service Image"
        width={500}
        height={300}
        style={{
          width: "100%",
          borderRadius: "8px",
          height: "auto",
          aspectRatio: "16/9",
          objectFit: "cover",
        }}
        className="service-responsive-img"
      />

      <h4
        style={{
          marginTop: "15px",
          wordBreak: "break-word",
        }}
      >
        {link ? (
          <Link
            href={link}
            style={{
              fontSize: "18px",
              lineHeight: "1.4",
              display: "block",
            }}
            className="service-responsive-title"
          >
            {title}
          </Link>
        ) : (
          <span
            style={{
              fontSize: "18px",
              lineHeight: "1.4",
              display: "block",
            }}
            className="service-responsive-title"
          >
            {title}
          </span>
        )}
      </h4>
    </div>
  );
};

export default SingleServices1;
