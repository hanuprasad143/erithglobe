import Image from "next/image";
import overview_img_1 from "@/assets/img/course/image1.png";
import overview_img_2 from "@/assets/img/course/image2.png";
// import { RightArrowSeven } from "../svg";
// import Link from "next/link";

export default function AdmissionArea() {
  return (
    <section className="tp-admission-overview-area grey-bg pb-130 pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">            <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="tp-admission-overview-title pt-40" style={{fontSize:"60px"}} >Protect Your Bearings </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p>
               Bearing isolator labyrinth seals are advanced sealing devices designed to protect rotating equipment bearings from contamination and lubricant leakage. Unlike traditional contact seals, labyrinth seals use a non-contacting design with a series of interlocking pathways (labyrinth) that block the ingress of dust, dirt, moisture, and other contaminants while preventing the escape of lubricants.
              </p>
              {/* <p>
                These seals are widely used in pumps, motors, gearboxes, and other rotating machinery where reliability and longevity of bearings are critical. Their non-contacting mechanism reduces friction, eliminates wear, and ensures maintenance-free operation over long service cycles.
              </p> */}
              {/* <div className="tp-admission-overview-btn mt-50">
                <Link className="tp-btn" href="/university-financial">
                  Learn more <br />
                  About financial aid{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function AdmissionApplyArea() {
  return (
    <section className="tp-admission-apply-area grey-bg pt-40 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={overview_img_2}
                alt="overview-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-heading wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="tp-admission-apply-title">Precision Bearing Solutions</h3>
              <p>
               High-quality bearings and isolator seals designed for durability. <br />
Keep out dust, dirt, and moisture while reducing wear and extending equipment life.
              </p>
              {/* <div className="tp-admission-apply-btn">
                <Link className="tp-btn" href="/university-apply">
                  How To Apply
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionCtaArea() {
  return (
    <section className="tp-admission-cta-area grey-bg pb-160">
      <div className="container">
        <div className="tp-admission-cta-box">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-admission-cta-title">
                  Long-Lasting Bearing Seals
                </h3>
                <p>
                 Keep bearings safe from dust and moisture.<br />
Reduce leaks and extend the life of your machines.
                </p>
                {/* <div className="tp-admission-cta-btn">
                  <Link className="tp-btn" href="/university-tuition-fees">
                    Net Price Calculator{" "}
                    <span>
                      <RightArrowSeven />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-thumb wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Image
                  src={overview_img_1}
                  alt="overview-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
