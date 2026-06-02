// import Link from "next/link";
import Image from "next/image";
import { team_university } from "@/data/team-data";
// import shape from "@/assets/img/team/about-team/team-shape.png";

export default function TeamAreaThree() {
  return (
    <section className="tp-about-campus-info-area">
      {/* <div className="tp-about-team-shape">
        <Image src={shape} alt="shape" />
      </div> */}
      <div className="container">
        {/* <h3
          className="tp-about-campus-title mt-0 pt-0 gap-0"
          style={{ color: "#1d3a72" }}
        >
         
        </h3> */}

        <h2
          style={{
            fontSize: "25px",
            color: "#292929",
            marginBottom: "10px",
          }}
        >
          Certifications
        </h2>
        <div className="row">
          {team_university.map((item, i) => (
            <div key={item.id} className="col-lg-3 col-sm-6">
              <div
                className="tp-about-team-item p-relative mb-30 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="tp-about-team-thumb">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={282}
                    height={440}
                    style={{
                      height: "auto",
                      gap: "5px",
                      border: "2px solid #ddd",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="tp-about-team-content">
                  {/* <h4 className="tp-about-team-title">
                    <Link href="/my-profile" style={{ color: "#fecb00" }}>
                      {item.name}
                    </Link>
                  </h4>
                  <p>{item.title}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
}
