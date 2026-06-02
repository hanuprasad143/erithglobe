// import Image from "next/image";
// import icon_1 from "@/assets/img/about/icon1.png";
// import icon_2 from "@/assets/img/about/icon2.png";
// import icon_3 from "@/assets/img/about/icon3.png";

// const tutorData = [
//   { id: 1, icon: icon_1, title: "Reliable & quality products", delay: ".3s" },
//   { id: 2, icon: icon_2, title: "In-house engineering team", delay: ".5s" },
//   { id: 3, icon: icon_3, title: "Cost efficient solutions", delay: ".7s" },
// ];

export default function TutorArea() {
  return (
    <section className="tp-about-tutor-area pt-60 pb-70">
      <div className="container mb-50">
        <div
          className="tp-about-wrap  wow fadeInLeft"
          data-wow-delay=".3s"
        >
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="tp-about-tutor-heading ">
                <h3 className="tp-about-tutor-title">Our Vision</h3>
                <p>
                  Become the most respected and successful valve, actuator, and
                  controls company in the world, with our greatest assets being
                  our employees and customers Driven by innovation, integrity, and excellence in every product we deliver.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-tutor-heading ">
                <h3 className="tp-about-tutor-title">Our Mission</h3>
                <p>
                  To pursue growth through improved and expanded high-quality
                  product offerings, always strive to exceed our customers’
                  expectations, manage our business with integrity, and treat
                  our team members with care and respect.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="tp-about-tutor-right d-flex justify-content-lg-end mb-130">
                <div className="tp-about-tutor-content">
                  <p>
                    Erith, headquartered in the vibrant heart of the Middle
                    East, stands as a premier engineering solutions company,
                    renowned for its expertise in high-end engineered products
                    and solutions. Established in August 2020 and with a
                    versatile global workforce spanning 75 countries across the
                    Middle East and Africa, we provide niche applications that
                    cater to significant industries.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="row">
          {tutorData.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="tp-tutor-item about text-center mb-30 ">
                <div className="tp-tutor-icon ">
                  <span>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="tp-tutor-content">
                  <h4 className="tp-tutor-title">
                    <a href="#">{item.title}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
