import Link from "next/link";
import { HomeSvg } from "../svg";

// prop type
type IProps = {
  subtitle: string;
  title: string;
  color?: string;
  pages?: boolean;
  description?: string;
};

export default function BreadcrumbOne({
  subtitle,
  title,
  description,
  color = "",
  pages,
}: IProps) {
  return (
    <section
      className="tp-breadcrumb__area pt-60 pb-60 p-relative z-index-1 fix"
      style={{ height: "400px" }}
    >
      <div
        className="tp-breadcrumb__bg overlay"
        style={{
          backgroundImage: "url(/assets/img/banner/banner-6.png)",
          backgroundSize: "cover",
        }}
        // style={{ backgroundColor: "#fff" }}
      ></div>
      <div className="container pt-50">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/" style={{ color: "#ffff" }}>
                    <HomeSvg />
                  </Link>
                </span>
                {pages && <span style={{ color: "#fff" }}>Pages</span>}
                <span style={{ color: "#fff" }} className={color}>
                  {subtitle}
                </span>
              </div>
              <h3
                className="tp-breadcrumb__title white"
                style={{ color: "#fff" }}
              >
                {title}
              </h3>
              {/* <p>hello hanu</p> */}
              <p style={{ color: "#fff" }} className={color}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
