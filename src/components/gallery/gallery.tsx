import Image, { StaticImageData } from "next/image";

import ab_img_7 from "@/assets/img/about/4/petro_chemical.jpg";
import ab_img_8 from "@/assets/img/about/4/nuclear.jpg";
import ab_img_9 from "@/assets/img/about/4/marine.jpg";
import ab_img_10 from "@/assets/img/about/4/paper_&_pulp.jpg";
import ab_img_11 from "@/assets/img/about/4/water_management.jpg";
import ab_img_12 from "@/assets/img/about/4/food_pharma.jpg";
import ab_img_13 from "@/assets/img/about/4/steel_manufacture.jpg";
import ab_img_14 from "@/assets/img/about/4/chemical.jpg";
import ab_img_15 from "@/assets/img/about/4/future_energy.jpg";
// import ab_img_16 from "@/assets/img/about/4/infrastructure.jpg";
// import ab_img_17 from "@/assets/img/about/4/mining.jpg";
import ab_img_18 from "@/assets/img/about/4/erith_dubai_run.jpeg";

// import ab_img_19 from "@/assets/img/event/event-4-shape-1.png";

/* ------------------ TYPES ------------------ */

type MediaItem = {
  id: number;
  title: string;
  type: "image" | "video";
  img?: StaticImageData;
  video?: string;
  poster?: StaticImageData;
};

/* ------------------ DATA ------------------ */

const thumbs: MediaItem[] = [
  {
    id: 1,
    img: ab_img_18,
    title: "Team Erith at the Dubai Run 2025!",
    type: "image",
  },
  {
    id: 2,
    title:
      "June has arrived. 🌞We’re halfway through the year — a good moment to pause,",
    type: "video",
    video: "/assets/img/about/4/erith_wishes.mp4",
    poster: ab_img_7,
  },
  {
    id: 3,
    img: ab_img_8,
    title: "Nuclear",
    type: "image",
  },
  {
    id: 4,
    img: ab_img_9,
    title: "Marine",
    type: "image",
  },
  {
    id: 5,
    img: ab_img_10,
    title: "Paper & Pulp",
    type: "image",
  },
  {
    id: 6,
    img: ab_img_11,
    title: "Water Management",
    type: "image",
  },
  {
    id: 7,
    img: ab_img_12,
    title: "Spreading Kindness, One Meal at a Time 🤲✨",
    type: "video",
    video: "/assets/img/about/4/ramdan.mp4",
  },
  {
    id: 8,
    img: ab_img_13,
    title: "Steel Manufacturing",
    type: "image",
  },
  {
    id: 9,
    img: ab_img_14,
    title: "Chemical",
    type: "image",
  },
  {
    id: 10,
    img: ab_img_15,
    title: "Future Energy",
    type: "image",
  },
];

/* ------------------ PAGE ------------------ */

type IProps = {
  spacing?: string;
};

export default function AboutTwo({ spacing = "pt-40 pb-90" }: IProps) {
  return (
    <section className={`about-area ${spacing} white-bg`}>
      <div className="container">
        <div className="row g-3 mb-3">
          <div className="col-lg-8 col-md-12">
            <MediaBox item={thumbs[0]} />
          </div>
          <div className="col-lg-4 col-md-12">
            <MediaBox item={thumbs[1]} />
          </div>
        </div>

        <div className="row g-3 mb-3">
          {thumbs.slice(2, 5).map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <MediaBox item={item} />
            </div>
          ))}
        </div>

        <div className="row g-3 mb-3">
          <div className="col-lg-4 col-md-12">
            <MediaBox item={thumbs[5]} />
          </div>
          <div className="col-lg-8 col-md-12">
            <MediaBox item={thumbs[6]} />
          </div>
        </div>

        <div className="row g-3">
          {thumbs.slice(7, 10).map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <MediaBox item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ MEDIA BOX ------------------ */

function MediaBox({ item }: { item: MediaItem }) {
  return (
    <div className="tp-about-media">
      {item.type === "video" ? (
        <video
          className="tp-about-media-el"
          src={item.video}
          poster={item.poster ? item.poster.src : undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={item.img!}
          alt={item.title}
          className="tp-about-media-el"
          sizes="100vw"
        />
      )}
      {/* 
      <div className="media-bottom-shape">
        <Image src={ab_img_19} alt="shape" />
      </div> */}

      <div className="image-overlay">
        <h4 style={{ fontFamily: "18px" }}>{item.title}</h4>
        <p>{item.title}</p>
      </div>
    </div>
  );
}
