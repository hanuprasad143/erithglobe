// "use client";

// import useHoverReveal from "@/hooks/use-hover-reveal";
// import Link from "next/link";

// type IProps = {
//   title: string;

// };

// export default function HoverImgItem({ title }: IProps) {
//     const { handleMouseMove } = useHoverReveal();

//     return (
//       <>
//         <Link
//           className="tp-img-reveal tp-img-reveal-item"
//           href="#"
//           data-img="/assets/img/event/event-thumb-1.jpg"
//           data-fx="1"
//           onMouseMove={handleMouseMove}
//         >
//           {title}
// {/*
//           <div
//             className="tp-hover-reveal-bg"
//             style={{ backgroundImage: `url(${img})` }}
//           ></div> */}
//         </Link>
//       </>
//     );
//   }

"use client";

import useHoverReveal from "@/hooks/use-hover-reveal";
import Link from "next/link";

type IProps = {
  title: string;
  link?: string;
};

export default function HoverImgItem({ title, link }: IProps) {
  const { handleMouseMove } = useHoverReveal();

  // If no link, render plain text
  if (!link) {
    return (
      <span
        className="tp-img-reveal tp-img-reveal-item"
        onMouseMove={handleMouseMove}
      >
        {title}
      </span>
    );
  }

  return (
    <Link
      className="tp-img-reveal tp-img-reveal-item"
      href={link}
      data-img="/assets/img/event/event-thumb-1.jpg"
      data-fx="1"
      onMouseMove={handleMouseMove}
    >
      {title}

      {/* 
      <div
        className="tp-hover-reveal-bg"
        style={{ backgroundImage: `url(${img})` }}
      ></div> 
      */}
    </Link>
  );
}
