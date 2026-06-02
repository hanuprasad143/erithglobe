import Link from "next/link";

type SuccessStories = {
  id: number;
  title: string | null;
  slug: string | null;

  category_type: string;

  product_type: string | null;

  sidebar_title: string | null;
  sidebar_desc: string | null;

  image: string | null;

  pdf_url: string | null;

  video_url: string | null;

  label: string | null;

  created_at: string;

  video_url_link: string | null;

  video_thumbnail_image: string | null;
};

type Props = {
  item: SuccessStories;
};

// ✅ FIX: remove /uploads here
const IMAGE_BASE = "https://backend-test-yeyr.onrender.com";

export default function CaseStudiesSearchResults({ item }: Props) {
  // ✅ Build correct image URL
  const imageUrl = item.image?.startsWith("http")
    ? item.image
    : `${IMAGE_BASE}${item.image}`;

  return (
    <div className="col-lg-4 col-md-6 mb-30">
      <div
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          height: "230px",
          backgroundImage: `url(${imageUrl})`,
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
              Case Studies
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
              {item.title || item.slug}
            </h3>
          </div>
          <div>
            <Link
              className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
              href={`/knowledgecenter/successstories/${item.slug}`}
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
