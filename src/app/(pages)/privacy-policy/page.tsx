// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Privacy Policy - Acadia",
// };

// export default function PrivacyPolicyPage() {
//   return (
//     <main>

//       {/* privacy policy area start */}
//       <section className="tp-privacy-area pt-120 pb-120" style={{ backgroundColor: "#EAECF3" }}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="tp-privacy-heading">
//                 <h3 className="tp-privacy-title">Privacy Policy </h3>
//               </div>
//             </div>
//             <div className="col-lg-10">
//               <div className="tp-privacy-box">
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Introduction</h4>
//                   <p>At Acadia, we value your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your data. By using our website or services, you consent to the practices described in this policy.</p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Information We Collect</h4>
//                   <p>We may collect various types of information from you, including:</p>
//                   <ul>
//                     <li>Personal Information: Name, email address, contact details.</li>
//                     <li>Billing Information: Payment card details, billing address.</li>
//                     <li>Usage Data: Information about how you use our website.</li>
//                     <li>Cookies and Tracking Data: Data collected through cookies, web beacons, and similar technologies.</li>
//                   </ul>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">How We Use Your Information</h4>
//                   <p>We use your information for the following purposes:</p>
//                   <ul>
//                     <li>To provide, maintain, and improve our services.</li>
//                     <li>To process transactions and send transaction notifications.</li>
//                     <li>To respond to your requests, comments, or questions.</li>
//                     <li>To personalize your user experience.</li>
//                     <li>To send you important information and updates.</li>
//                   </ul>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title"> Information Sharing</h4>
//                   <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website and services, as long as they agree to keep this information confidential. </p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Data Security</h4>
//                   <p>We implement a variety of security measures to protect your personal information. We use encryption, secure socket layer technology, and regular security audits to safeguard your data.</p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Cookies and Tracking Technologies</h4>
//                   <p>We use cookies and similar tracking technologies to enhance your user experience. You can choose to disable cookies through your browser settings; however, this may affect your ability to use our website.</p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Your Choices</h4>
//                   <p>You can choose not to provide certain information; however, this may limit your access to some features of our website.</p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Changes to this Privacy Policy</h4>
//                   <p>We reserve the right to update or change this Privacy Policy at any time. When we do, we will revise the {"Effective Date"} at the beginning of this policy. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
//                 </div>
//                 <div className="tp-privacy-content">
//                   <h4 className="tp-privacy-content-title">Contact Us</h4>
//                   <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at support@acadia.net</p>
//                 </div>
//                 <div className="tp-privacy-content-bottom mt-30">
//                   <p>Last updated on October 15, 2023. ThemePure reserves the right to change or modify the above contents at any time without any prior notice.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* privacy policy area end */}
//     </main>
//   );
// }

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="about-area white-bg pt-0 pb-0 mt-5">
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
                Privacy Policy
              </h2>
            </div>
            <p>
              Welcome to Erith Global. We are committed to protecting your
              privacy and ensuring that your personal information is handled in
              a safe and responsible manner.
            </p>
          </div>
        </div>
        <hr style={{ marginBottom: "20px", marginTop: "15px" }} />
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
                Information We Collect
              </h2>
            </div>
            <p>We may collect the following information:</p>
            <ul
              style={{
                fontSize: "15px",
                color: "#000",
                lineHeight: "1.2",
                paddingLeft: "24px",
                listStyle: "none",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>

                <span>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, company name, preferred language, request details,
                  country, business address, state, city, postal code
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>

                <span>
                  <strong>Cookies & Tracking Data:</strong>To enhance user
                  experience and analyze traffic
                </span>
              </li>
            </ul>
          </div>
          <h2 style={{ fontSize: "25px", color: "#292929" }}>
            How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul
            style={{
              fontSize: "15px",
              color: "#000",
              lineHeight: "1.2",
              paddingLeft: "24px",
              listStyle: "none",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  width: "16px",
                  marginRight: "8px",
                  fontSize: "20px",
                  lineHeight: "1.2",
                  flexShrink: 0,
                }}
              >
                •
              </span>

              <span>Respond to inquiries and customer requests</span>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  width: "16px",
                  marginRight: "8px",
                  fontSize: "20px",
                  lineHeight: "1.2",
                  flexShrink: 0,
                }}
              >
                •
              </span>

              <span>Improve website performance and user experience</span>
            </li>
          </ul>
        </div>
        <h2 style={{ fontSize: "25px", color: "#292929" }}>
          Sharing of Information
        </h2>
        <p>
          We do not sell or trade your personal information. We may share your
          data with:
        </p>
        <ul
          style={{
            fontSize: "15px",
            color: "#000",
            lineHeight: "1.2",
            paddingLeft: "24px",
            listStyle: "none",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>
              Trusted service providers (hosting, analytics, email services)
            </span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>Authorities if required by law</span>
          </li>
        </ul>

        <h2 style={{ fontSize: "25px", color: "#292929" }}>
          Third-Party Services
        </h2>
        <p>
          Our website may use third-party tools or services. These services may
          collect information according to their own privacy policies.
        </p>

        <h2 style={{ fontSize: "25px", color: "#292929" }}>
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 style={{ fontSize: "25px", color: "#292929" }}>
          Information Submitted via Forms
        </h2>
        <p>When you fill out forms on our website, we may collect:</p>

        <ul
          style={{
            fontSize: "15px",
            color: "#000",
            lineHeight: "1.2",
            paddingLeft: "24px",
            listStyle: "none",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>
            {/* 
            <span>
              <strong>Email:</strong> info@erithme.com
            </span> */}
            <span>Contact details</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>Inquiry details</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>Business-related information</span>
          </li>
        </ul>
        <p>
          This information is used only to respond to your request and provide
          services.
        </p>

        <h2 style={{ fontSize: "25px", color: "#292929" }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>

        <ul
          style={{
            fontSize: "15px",
            color: "#000",
            lineHeight: "1.2",
            paddingLeft: "24px",
            listStyle: "none",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>
            {/* 
            <span>
              <strong>Email:</strong> info@erithme.com
            </span> */}
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@erithme.com">info@erithme.com</a>
            </span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>
              {" "}
              <strong>Phone:</strong> +971 7266 2628
            </span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "16px",
                marginRight: "8px",
                fontSize: "20px",
                lineHeight: "1.2",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span>
              {" "}
              <strong>Office:</strong> Office No.3, Plot #84 Mussafah M40, Abu
              Dhabi
            </span>
          </li>
        </ul>

        <hr style={{ marginBottom: "20px", marginTop: "25px" }} />
      </div>
    </section>
  );
}
