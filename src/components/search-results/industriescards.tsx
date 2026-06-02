import Link from "next/link";

type IndustryData = {
  id: number;
  category_id: number | null;
  subcategory_id: number | null;
  slug: string | null;

  banner_title: string | null;
  banner_subtitle: string | null;
  banner_image: string | null;

  about_title: string | null;
  about_subtitle: string | null;
  about_description: string | null;
  about_image: string | null;

  created_at: string;

  industries?: unknown[];
};
type Props = {
  industry: IndustryData;
};

const IMAGE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

export default function IndustryCard({ industry }: Props) {
  return (
    <div className="col-lg-4 col-md-6 mb-30">
      <div
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          height: "230px",
          backgroundImage: `url(${IMAGE_BASE}/${industry.about_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
            padding: "24px 30px 30px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                backgroundColor: "#1d3a72",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "10px",
                fontWeight: "600",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Industries
            </span>

            <h3
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "1.2",
                marginTop: "12px",
                marginBottom: "0",
              }}
            >
              {industry.banner_title || industry.slug}
            </h3>
          </div>

          <div>
            <Link
              className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
              href={`/industries/${industry.slug}`}
              style={{
                fontSize: "13px",
                fontWeight: "600",
                padding: "6px 16px",
                borderRadius: "10px",
              }}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
