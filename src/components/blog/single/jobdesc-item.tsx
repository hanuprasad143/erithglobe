// import Link from "next/link";
// import Image from "next/image";
// import { IBlogDT } from "@/types/blog-d-t";
import { ShareSvg } from "@/components/svg";
// import { LeftArrowSeven } from "@/components/svg/arrow-svg";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// type IProps = {
//   blog: IBlogDT;
// };

type Job = {
  id: number;
  title: string;
  slug: string;
  tag?: string | null;
  date?: string | null;
  place?: string | null;
  description?: string | null;
  responsibilities?: string[] | null;
  qualifications?: string[] | null;
  skills?: string[] | null;
  employment_type?: string | null;
  experience?: string | null;
  role?: string | null;
  map_url?: string | null;
  image?: string | null;
  status?: "active" | "inactive";
  created_at?: string;
  updated_at?: string;
  industry?: string | null;
  email?: string | null;
};

type IProps = {
  blog: Job;
};

export default function JobsDetails({ blog }: IProps) {
  return (
    <div
      className="tp-postbox-item p-relative"
      style={{ marginTop: "0px", paddingTop: "0px" }}
    >
      <div className="tp-postbox-thumb">
        {/* <Link href={`/blog-details/${blog.id}`}> */}
        {/* <Link href={`#`}> */}
        {/* <Image
          src={blog.img}
          alt={blog.title}
          width={793}
          height={420}
          style={{ height: "auto" }}
        /> */}
        {/* </Link> */}
      </div>
      <div
        className="tp-postbox-content"
        style={{ marginTop: "0px", paddingTop: "0px" }}
      >
        {/* <div className="tp-blog-stories-tag-wrap d-flex">
          <a href="#">Education</a>
         
        </div> */}

        <h3
          className="tp-postbox-title"
          style={{ fontSize: "25px", color: "#292929" }}
        >
          {/* <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link> */}
          {/* <FaBriefcase size={25} style={{ marginRight: "6px",color:"#fecb00" }} /> */}
          {blog.title}
        </h3>

        <div style={{ marginBottom: "" }}>
          <span style={{ marginRight: "15px" }}>
            <FaCalendarAlt
              size={14}
              style={{
                marginRight: "6px",
                verticalAlign: "middle",
                color: "#fecb00",
              }}
            />
            {/* {blog.date} */}
            {/* {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} */}
            {blog.date
              ? new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </span>
          <span>
            <FaMapMarkerAlt
              size={14}
              style={{
                marginRight: "6px",
                verticalAlign: "middle",
                color: "#fecb00",
              }}
            />
            {blog.place}
          </span>
        </div>

        <hr
          style={{
            width: "100%",
            border: "none",
            borderTop: "1px solid #ddd",
            margin: "15px 0",
          }}
        />
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "18px", color: "#292929" }}
        >
          About the Job
        </h3>

        <p style={{ marginBottom: "10px" }}>{blog.description}</p>
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "18px", color: "#292929" }}
        >
          Responsibilities:
        </h3>
        {blog.responsibilities && blog.responsibilities.length > 0 && (
          <ul
            style={{
              fontSize: "16px",
              color: "#000",
              lineHeight: "1.5px",
              paddingLeft: "24px",
              listStyle: "none",
              marginTop: "10px",
            }}
          >
            {blog.responsibilities.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                  lineHeight: "1px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <p style={{ margin: "0px" }}>{item}</p>
              </li>
            ))}
          </ul>
        )}
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "18px", color: "#292929" }}
        >
          Required Qualifications:
        </h3>
        {blog.qualifications && blog.qualifications.length > 0 && (
          <ul
            style={{
              fontSize: "16px",
              color: "#000",
              lineHeight: "1.8",
              paddingLeft: "24px",
              listStyle: "none",
              marginTop: "10px",
            }}
          >
            {blog.qualifications.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    fontSize: "20px",
                    lineHeight: "1",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <p style={{ margin: "0px" }}>{item}</p>
              </li>
            ))}
          </ul>
        )}

        <h3
          className="tp-postbox-title"
          style={{ fontSize: "18px", color: "#292929" }}
        >
          Required Skills:
        </h3>

        {blog.skills && blog.skills.length > 0 && (
          <div className="tp-header-btn  mt-10 mb-10">
            {blog.skills.map((skill, index) => (
              <p
                key={index}
                style={{
                  backgroundColor: "#1d3a72",
                  color: "#fff",
                  padding: "2px 12px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-block",
                  fontSize: "12px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                {skill}
              </p>
            ))}
          </div>
        )}
        <h3
          className="tp-postbox-title"
          style={{ fontSize: "18px", color: "#292929" }}
        >
          Location:
        </h3>

        {/* <iframe
          style={{
            // padding: "2px 12px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14539.849890984015!2d54.482767351645464!3d24.34779985307368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%203%2C%20Plot%20%2384%2C%20Mussafah%20M40%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1757593238170!5m2!1sen!2sin"
          width={"100%"}
        ></iframe> */}
        <iframe
          style={{
            // padding: "2px 12px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          // src={
          //   blog.map_url?.includes("<iframe")
          //     ? blog.map_url.match(/src="([^"]+)"/)?.[1]
          //     : blog.map_url
          // }
          src={
            blog.map_url?.includes("<iframe")
              ? blog.map_url.match(/src="([^"]+)"/)?.[1]
              : (blog.map_url ?? undefined)
          }
          width={"100%"}
          height="150"
        ></iframe>

        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between mt-20">
          <div className="tp-postbox-btn">
            {/* <Link href={`/blog-details/${blog.id}`}>
              Read More{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link> */}
          </div>
          <div className="tp-postbox-share">
            <button className="p-relative">
              Share this Job
              <span>
                <ShareSvg />
              </span>
            </button>

            <ul className="tp-postbox-share-hover">
              <li>
                <a href="#">
                  <i className="fab fa-whatsapp"></i> <b>Whatsapp</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> <b>Twitter</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-telegram"></i> <b>Telegram</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i> <b>Linkedin</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="tp-postbox-content">
        <div className="tp-postbox-btn-box d-flex align-items-center justify-content-between">
          <div className="tp-postbox-btn">
      
            <Link href="#">
              <span style={{ marginRight: "8px" }}>
                <LeftArrowSeven />
              </span>
              Previous{" "}
            </Link>
          </div>
          <div className="tp-postbox-btn">
    
            <Link href="#">
              Next{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
