import ContactForm from "../form/contact-form";
// import Link from "next/link";
// import { HomeSvg } from "../svg";

type IProps = {
  title?: string;
  subtitle?: string;
  // admission?: boolean;
};

export default function ContactArea({ title, subtitle,  }: IProps) {
  return (
    <>
      {/* ===== Banner Section ===== */}
      {/* <section
        className="tp-breadcrumb__area pt-160  p-relative z-index-1 fix"
        style={{ height: "400px" }}
      > */}
      <section
        className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix"
        style={{ height: "400px" }}
      >
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: "url(/assets/img/live/contact.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  {/* {admission && <span className="white">Admission</span>} */}
                  {title && <span className="white">{title}</span>}
                  {subtitle && <span className="white">{subtitle}</span>}
                  <h3
                    className="tp-breadcrumb__title color"
                    style={{ color: "#fecb00" }}
                  >
                    Get In Touch
                  </h3>
                  <span className="white">
                    We Are Here To Answer Any Questions You May Have
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
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
          <span style={{ color: "#fecb00" }}>
            <IndustrySvg />
          </span>
          <span className="white" style={{ color: "#fff" }}>
            {data?.banner_subtitle}
          </span>
          <h3 className="tp-breadcrumb__title" style={{ color: "#fecb00 " }}>
            {data?.banner_title}
          </h3>
        </div>
      </section> */}

      <section className="tp-contact-area tp-contact-p fix p-relative pt-10 ">
        <div className="tp-contact-shape-2"></div>
        <div className="container">
          <div
            className="tp-about-wrap mb-60 wow fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="tp-contact-wrap p-relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
