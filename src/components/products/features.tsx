"use client";

type Feature = {
  id?: number;
  product_id?: number;
  feature?: string | null;
  created_at?: string;
};

type Props = {
  features: Feature[];
};

export default function Features({ features }: Props) {
  return (
    <section className="program-area mb-75">
      <div className="container mt-5">
        <h5
          style={{
            color: "#292929",
            marginBottom: "30px",
            fontSize: "25px",
          }}
        >
          More Details
        </h5>

        <p
          style={{
            fontSize: "28px",
            color: "#000",
            marginBottom: "16px",
          }}
        >
          Features & Benefits
        </p>

        <ul
          style={{
            fontSize: "16px",
            color: "#000",
            lineHeight: "1.2",
            paddingLeft: "24px",
            listStyle: "none",
          }}
        >
          {features?.map((item, index) => (
            <li
              key={index}
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

              {/* <span>{item.feature}</span> */}
              <span>{item.feature ?? ""}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
