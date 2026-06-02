// import { FaFilePdf } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";
// import { AiFillFilePdf } from "react-icons/ai";

// import Image from "next/image";

// import Link from "next/link";

const shopServices = [
  {
    id: 1,
    title: "Product Brochure",
    description: "Bidirectional Urethane Lined Slurry Valves Series 755",
    language: "English",
    // image: "/assets/img/shop/author/shop-icon-1.png",
  },
  {
    id: 2,
    title: "Product Brochure",
    description:
      "Knife Gate and Slurry Valves are specifically engineered for demanding applications involving abrasive, viscous, and high-solid media.",
    // image: "/assets/img/shop/author/shop-icon-2.png",
    language: "English",
  },
  // {
  //   id: 3,
  //   title: "Return with Confidence",
  //   description: "Within 20 Days Return",
  //   // image: "/assets/img/shop/author/shop-icon-3.png",
  // },
];

export default function DownloadTypes() {
  return (
    <section className="tp-shop-service-area pb-30">
      <div className="container px-0">
        <div className="row">
          {shopServices.map((service) => (
            <div key={service.id} className="col-lg-6 col-md-6 mt-30 mb-30">
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "10px",
                  padding: "24px",
                  height: "100%",
                  backgroundColor: "white",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-start mb-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      // backgroundColor: "#fee",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {/* <AiFillFilePdf  
                      style={{
                        color: "#1d3a72",
                        fontSize: "20px",
                      }}
                    /> */}
                    <svg
                      // class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fecb00"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                      />
                    </svg>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "600",
                        marginBottom: "6px",
                      }}
                    >
                      {service.title}
                    </h5>
                    <p
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        marginBottom: "0",
                        lineHeight: "1.5",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start justify-content-between mt-4">
                  <button
                    style={{
                      backgroundColor: "#1d3a72 ",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      marginLeft: "50px",
                      transition:
                        "background-color 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1d3a72 ";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#1d3a72 ";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Download
                  </button>

                  <span
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      marginRight: "100px",
                      marginTop: "5px",
                    }}
                  >
                    {service.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
