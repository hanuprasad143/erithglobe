// import KnowledgeCenterBanner from "@/components/knowledgecenter/knowledge-center-banner";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Knowledge Center - Erith ",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function Page({
//   params,
//   searchParams,
// }: {
//   params: { category: string };
//   searchParams: { page?: string };
// }) {
//   return (
//     <main>
//       <KnowledgeCenterBanner
//         categorySlug={params.category}
//         currentPage={Number(searchParams.page) || 1}
//       />
//     </main>
//   );
// }



import KnowledgeCenterBanner from "@/components/knowledgecenter/knowledge-center-banner";
import { Metadata } from "next";

/* 🔹 Convert slug → readable title */
const getCategoryTitle = (slug: string) => {
  switch (slug) {
    case "successstories":
      return "Success Stories";
    case "webinars":
      return "Webinars";
    case "videos":
      return "Videos";
    case "application-guides":
      return "Application Guides";
    case "published-papers":
      return "Published Papers";
    default:
      return "Knowledge Center";
  }
};

/* 🔥 Dynamic Metadata */
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const title = getCategoryTitle(params.category);

  return {
    title: `${title} - Erith`,
    icons: {
      icon: "/favicon.png",
    },
  };
}

/* PAGE */
export default function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page?: string };
}) {
  return (
    <main>
      <KnowledgeCenterBanner
        categorySlug={params.category}
        currentPage={Number(searchParams.page) || 1}
      />
    </main>
  );
}