import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/erith_global.png";
import { CloseThreeSvg } from "@/components/svg";
import OffcanvasMenu from "./offcanvas-menu";
import OffcanvasMenuTwo from "./offcanvas-menu-2";
import FooterSocial from "@/components/footer/footer-social";

const galleryData = [
  {
    link: "https://www.instagram.com/",
    src: "/assets/img/menu/offcanvas/offcanvas-1.jpg",
  },
  {
    link: "https://www.instagram.com/",
    src: "/assets/img/menu/offcanvas/offcanvas-2.jpg",
  },
  {
    link: "https://www.instagram.com/",
    src: "/assets/img/menu/offcanvas/offcanvas-3.jpg",
  },
  {
    link: "https://www.instagram.com/",
    src: "/assets/img/menu/offcanvas/offcanvas-4.jpg",
  },
];

type IProps = {
  openOffCanvas: boolean;
  onHandleOffCanvas: () => void;
  offcanvas_cls?: string;
  offcanvas_menu_2?: boolean;
};
export default function OffcanvasArea({
  openOffCanvas,
  onHandleOffCanvas,
  offcanvas_cls,
  offcanvas_menu_2,
}: IProps) {
  return (
    <>
      <div
        className={`offcanvas__area ${offcanvas_cls} ${openOffCanvas ? "offcanvas-opened" : ""}`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={onHandleOffCanvas}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <CloseThreeSvg />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo tp-header-logo">
                <Link href="/">
                  <Image src={logo} alt="logo" style={{ height: "auto" }} />
                </Link>
              </div>
            </div>
            <div className="offcanvas-main">
              {/* <div className="offcanvas-content">
                        <h3 className="offcanvas-title">Hello There!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, </p>
                     </div> */}

              {/* mobile menu */}
              {offcanvas_menu_2 ? <OffcanvasMenuTwo /> : <OffcanvasMenu />}
              {/* mobile menu */}

              <div className="offcanvas-gallery">
                <div className="row gx-2">
                  {galleryData.map((item, index) => (
                    <div className="col-md-3 col-3" key={index}>
                      <div className="offcanvas-gallery-img fix">
                        {/* <a href={item.link} target="_blank">
                                       <Image src={item.src} alt={`gallery-${index}`} width={87} height={87} />
                                    </a> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="offcanvas-contact">
                <h3 className="offcanvas-title sm">Information</h3>
                <ul>
                  <li>
                    <a href="+ 971 7 266 2628">+ 971 7 266 2628</a>
                  </li>
                  <li>
                    <a href="mailto:info@erithme.com">info@erithme.com</a>
                  </li>
                  <li>
                    <a href="#">
                      Warsan Tower, Office 801, Barsha Heights, Dubai, UAE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-social">
                <h3 className="offcanvas-title sm">Follow Us</h3>
                <div className="tp-footer-newsletter-social">
                  <FooterSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Overlay */}
      <div
        onClick={onHandleOffCanvas}
        className={`body-overlay ${openOffCanvas ? "opened" : ""}`}
      />
      {/* Body Overlay */}
    </>
  );
}
