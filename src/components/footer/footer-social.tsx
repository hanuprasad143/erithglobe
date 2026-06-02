const socialData = [
  {
    id: 1,
    cls: "social-whats",
    href: "https://api.whatsapp.com/send?phone=916382197589",
    iconClass: "fa-brands fa-whatsapp",
    alt: "Facebook",
  },
  {
    id: 2,
    cls: "social-lnkd",
    href: "https://ae.linkedin.com/company/erith-global",
    iconClass: "fa-brands fa-linkedin-in",
    alt: "LinkedIn",
  },

  {
    id: 3,
    cls: "social-youtube",
    href: "https://www.youtube.com/@erithme2020",
    iconClass: "fa-brands fa-youtube",
    alt: "Twitter",
  },
  // {
  //   id: 3,
  //   cls: "social-twit",
  //   href: "https://x.com/Erithgroupme",
  //   iconClass: "fa-brands fa-twitter",
  //   alt: "Twitter",
  // },

  {
    id: 4,
    cls: "social-insta",
    href: "https://www.instagram.com/erithgroup/",
    iconClass: "fa-brands fa-instagram",
    alt: "YouTube",
  },
];

export default function FooterSocial() {
  return (
    <>
      {socialData.map((item) => (
        <a key={item.id} className={item.cls} href={item.href} target="_blank">
          <i className={item.iconClass}></i>
        </a>
      ))}
    </>
  );
}
