import Image from "next/image";
import ab_img_5 from "@/assets/img/about/4/oil_and_gas_desc.png";
import ab_img_6 from "@/assets/img/about/4/Data_Center_desc.png";
import ab_img_7 from "@/assets/img/about/4/Fertilizer_Cement_desc.png";
import ab_img_8 from "@/assets/img/about/4/power_desc.png";
import ab_img_9 from "@/assets/img/about/4/Petrochemical_desc.png";
import ab_img_10 from "@/assets/img/about/4/Nuclear_desc.png";
import ab_img_11 from "@/assets/img/about/4/Marine_desc.png";
import ab_img_12 from "@/assets/img/about/4/paper_&_pulp.jpg";
import ab_img_13 from "@/assets/img/about/4/water_management.jpg";
import ab_img_14 from "@/assets/img/about/4/Food_Pharma_Beverage_desc.png";
import ab_img_15 from "@/assets/img/about/4/steel_manufacture.jpg";
import ab_img_16 from "@/assets/img/about/4/Chemical_Processing_desc.png";
import ab_img_17 from "@/assets/img/about/4/future_energy.jpg";
import ab_img_18 from "@/assets/img/about/4/Infrastructure_desc.png";
import ab_img_19 from "@/assets/img/about/4/mining.jpg";
import Link from "next/link";

const thumbs = [
  { id: 1, img: ab_img_16, title: "Chemical", slug: "chemical-processing" },
  { id: 2, img: ab_img_6, title: "Data Center", slug: "data-center" },
  {
    id: 3,
    img: ab_img_7,
    title: "Fertilizer & Cement",
    slug: "fertilizer-cement",
  },
  {
    id: 4,
    img: ab_img_14,
    title: "Food, Pharma & Beverage",
    slug: "food-pharma-beverage",
  },
  {
    id: 5,
    img: ab_img_17,
    title: "Future Energy",
    slug: "future-energy-hydrogen",
  },
  { id: 6, img: ab_img_18, title: "Infrastructure", slug: "infrastructure" },
  { id: 7, img: ab_img_11, title: "Marine", slug: "marine" },

  { id: 8, img: ab_img_19, title: "Mining", slug: "mining" },
  { id: 9, img: ab_img_10, title: "Nuclear", slug: "nuclear" },
  { id: 10, img: ab_img_5, title: "Oil & Gas", slug: "oil-gas" },
  { id: 11, img: ab_img_12, title: "Paper & Pulp", slug: "paper-pulp" },
  { id: 12, img: ab_img_9, title: "Petro Chemical", slug: "petrochemical" },

  {
    id: 13,
    img: ab_img_8,
    title: "Power Generation",
    slug: "power-generation",
  },

  {
    id: 14,
    img: ab_img_15,
    title: "Steel Manufacturing",
    slug: "steel-manufacturing",
  },

  {
    id: 15,
    img: ab_img_13,
    title: "Water Management",
    slug: "water-management",
  },

  // { id: 2, img: ab_img_6, title: "Power Generation" },
  // { id: 3, img: ab_img_7, title: "Petro Chemical" },
  // { id: 4, img: ab_img_8, title: "Nuclear" },
  // { id: 5, img: ab_img_9, title: "Marine" },
  // { id: 6, img: ab_img_10, title: "Paper & Pulp" },
  // { id: 7, img: ab_img_11, title: "Water Management" },
  // { id: 8, img: ab_img_12, title: "Food, Pharma & Beverage" },
  // { id: 9, img: ab_img_13, title: "Steel Manufacturing" },
  // { id: 10, img: ab_img_14, title: "Chemical" },
  // { id: 11, img: ab_img_15, title: "Future Energy" },
  // { id: 12, img: ab_img_16, title: "Infrastructure" },
  // { id: 13, img: ab_img_17, title: "Mining" },
];

// type IProps = {
//   spacing?: string;
// };

type IProps = {
  spacing?: string;
};

export default function AboutTwo({
  spacing = "",
}: IProps) {
  return (
    // <section className="about-area white-bg pt-0 pb-0 mt-5">
    <section className={`about-area white-bg mt-5 ${spacing}`}>
      <div className="container">
        {/* <h3
          className="tp-about-campus-title mb-3"
          style={{ marginBottom: "30px", color: "#1d3a72" }}
        >
          Industries We Serve
        </h3> */}
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ fontSize: "25px", color: "#292929" }}>
                Industries We Serve
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* Left large image */}
          {/* <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 d-flex">
            <div className="tp-about-big-img flex-fill position-relative">
              <Image
                src={thumbs[0].img}
                alt="Main Image"
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div className="image-overlay">
                <span>{thumbs[0].title}</span>
              </div>
            </div>
          </div> */}

          {/* Right grid - 3 images per row */}
          <div className="col-lg-12 col-md-12 d-flex">
            <div className="tp-about-grid flex-fill d-flex flex-column justify-content-between">
              <div className="row g-3 flex-fill">
                {thumbs.slice(0).map((thumb) => (
                  <div
                    key={thumb.id}
                    className="col-lg-4 col-md-4 col-sm-6 d-flex"
                  >
                    <Link href={`/industries/${thumb.slug}`} className="w-100">
                      <div className="tp-about-small-img h-100 position-relative">
                        <Image
                          src={thumb.img}
                          alt={`thumb-${thumb.id}`}
                          className="img-fluid rounded shadow-sm"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                        <div className="image-overlay">
                          <span>{thumb.title}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
      </div>
    </section>
  );
}
