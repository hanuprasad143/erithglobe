import { EmailThree, TelSvgTwo } from "@/components/svg";
import { LocationFour } from "@/components/svg/location";

const contactInfoData = [
  {
    icon: <LocationFour />,
    text: "Warsan Tower, Office 801, Barsha Heights, Dubai, UAE",
  },
  {
    icon: <EmailThree />,
    text: "info@erithme.com",
  },
  {
    icon: <TelSvgTwo />,
    text: "+971 7 266 2628",
  },
];

export default function ErithCareessidebarArea() {
  return (
    <div className="tp-sidebar-wrapper">
      <div className="col-lg-12 col-md-12">
        <div className="tp-contact-info-item mb-20">
          <div className="tp-sidebar-content">
            <h2
              style={{
                fontSize: "25px",
                color: "#292929",
                marginBottom: "0",
              }}
            >
              Get Touch in with us
            </h2>

            <p
              style={{
                color: "#292929",
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              Discover opportunities to learn, grow, and succeed in a supportive
              and forward-thinking workplace.
            </p>

            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              {contactInfoData.map((item, index) => (
                <li key={index}>
                  <div style={{ marginBottom: "2px" }}>
                    <div className="d-flex align-items-center">
                      <div className="tp-contact-info-icon mb-0 pb-0 pr-10">
                        <span>{item.icon}</span>
                      </div>

                      <p
                        style={{
                          marginBottom: "0",
                          fontSize: "14px",
                          color: "#292929",
                          lineHeight: "1.2",
                          textAlign: "start",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {index !== contactInfoData.length - 1 && (
                    <hr
                      style={{
                        width: "100%",
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "14px 0",
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
