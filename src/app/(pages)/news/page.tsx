import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import EventAreaFour from "@/components/event/event-area-four";

export const metadata: Metadata = {
  title: "News - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function EventPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne
        title="Our Insightful News"
        subtitle="Upcoming News"
        color="color"
        pages={true}
      />
      {/* breadcrumb area end */}

      {/* event area start */}
      <EventAreaFour />
      {/* event area end */}
    </main>
  );
}
