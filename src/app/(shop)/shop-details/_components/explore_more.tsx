"use client";

import { useRouter } from "next/navigation";

type Props = {
  slug: string;
};

export default function ExploreMore({ slug }: Props) {
  const router = useRouter();

  if (!slug) return null;

  return (
    <p
      style={{
        lineHeight: "1.4",
        cursor: "pointer",
        color: "#292929",
        marginTop: "8px",
        fontWeight: "500",
      }}
      onClick={() => router.push(`/products/${slug}`)}
    >
      Explore more →
    </p>
  );
}
