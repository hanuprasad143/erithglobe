// import Link from "next/link";
type IProps = {
  banner_title?: string;
  banner_subtitle?: string;
  banner_image?: string;
};

export default function CareersBanner({
  banner_title = "Careers",
  banner_subtitle = "At Erith, our business is helping our customers with their flow control requirements.",
  banner_image = "/assets/img/live/ABOUT-ERITH.jpg",
}: IProps) {
  const banner = banner_image
    ? banner_image.startsWith("http")
      ? banner_image
      : `https://backend-test-yeyr.onrender.com/uploads/${banner_image}`
    : "/assets/img/live/ABOUT-ERITH.jpg";
  return (
    <>
      <section
        className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        {/* Background Image */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content Section */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  <h3
                    className="tp-breadcrumb__title color"
                    style={{ color: "#fecb00" }}
                  >
                    {banner_title}
                  </h3>
                  <span className="white">{banner_subtitle}</span>
                </div>
                {/* <Link
                  href="/contact"
                  style={{
                    backgroundColor: "#1d3a72",
                    color: "#fff", // black text
                    padding: "8px 18px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                    fontSize: "12px",
                    marginTop:"10px"
                  }}
                >
                  Request a Quote
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
