// import { IBookDT } from "@/types/book-d-t";

// const knowledgeData: IBookDT[] = [
//   // =======================
//   // SUCCESS STORIES
//   // =======================
//   {
//     id: 1,
//     icon: "bulb",
//     category: "Success Stories",
//     title:
//       "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
//     date: "2025-10-07",
//     image: "/assets/img/resources/pic2.jpg",
//     description:
//       "District heating and steam systems demand uncompromising safety, consistent performance, and operator-friendly design.",
//   },
//   {
//     id: 2,
//     icon: "bulb",
//     category: "Success Stories",
//     title:
//       "Ceramic Lined Control Valve Greatly Improves Performance in Copper Concentrator Process",
//     date: "2025-07-17",
//     image: "/assets/img/resources/pic2.jpg",
//     description:
//       "A ceramic-lined control valve solution significantly enhanced durability, reduced wear, and improved operational efficiency in a demanding copper concentrator environment.",
//   },
//   {
//     id: 3,
//     icon: "bulb",
//     category: "Success Stories",
//     title:
//       "Butterfly Valve Solution Improves Reliability 1200% Over Existing Pinch Valve",
//     date: "2025-07-02",
//     image: "/assets/img/knowledge/success-stories.jpg",
//     description:
//       "By replacing traditional pinch valves, the new butterfly valve solution delivered dramatically higher reliability and reduced unplanned downtime.",
//   },
//   {
//     id: 4,
//     icon: "bulb",
//     category: "Success Stories",
//     title:
//       "Bray Extends Valve Life by 4x in Demanding Recycle Pulp & Paper Application",
//     date: "2025-06-24",
//     image: "/assets/img/knowledge/success-stories.jpg",
//     description:
//       "In a challenging pulp and paper recycling process, optimized valve selection extended service life fourfold while lowering maintenance costs.",
//   },
//   {
//     id: 5,
//     icon: "bulb",
//     category: "Success Stories",
//     title:
//       "Butterfly Valves Qualified Beyond 1 Million Cycles Using Liquid Media Testing",
//     date: "2025-02-12",
//     image: "/assets/img/knowledge/success-stories.jpg",
//     description:
//       "Rigorous liquid media testing validated butterfly valve performance beyond one million cycles, proving long-term reliability in critical applications.",
//   },

//   // =======================
//   // WEBINARS
//   // =======================
//   {
//     id: 11,
//     icon: "video",
//     category: "Webinars",
//     title: "Best Practices for Valve Selection in High-Pressure Applications",
//     date: "2025-08-14",
//     image: "/assets/img/resources/webinar1.JPEG",
//     description:
//       "This webinar covers essential design considerations, material selection, and safety factors for choosing valves in high-pressure operating conditions.",
//   },
//   {
//     id: 12,
//     icon: "video",
//     category: "Webinars",
//     title: "Improving Plant Reliability Through Smart Actuation Solutions",
//     date: "2025-06-05",
//     image: "/assets/img/resources/webinar2.JPEG",
//     description:
//       "Learn how intelligent actuation technologies enhance process reliability, enable predictive maintenance, and improve overall plant efficiency.",
//   },
//   {
//     id: 13,
//     icon: "video",
//     category: "Webinars",
//     title: "Managing Fugitive Emissions in Critical Process Industries",
//     date: "2025-03-18",
//     image: "/assets/img/knowledge/webinars.jpg",
//     description:
//       "An in-depth discussion on strategies, standards, and valve technologies designed to minimize fugitive emissions in critical industrial processes.",
//   },

//   // =======================
//   // VIDEOS
//   // =======================
//   {
//     id: 21,
//     icon: "play",
//     category: "Videos",
//     title: "Triple Offset Valve Design Explained",
//     date: "2025-07-01",
//     image: "/assets/img/resources/video1.JPEG",
//     description:
//       "This video explains the design principles, sealing mechanism, and performance advantages of triple offset butterfly valves.",
//   },
//   {
//     id: 22,
//     icon: "play",
//     category: "Videos",
//     title: "Knife Gate Valves in Mining Applications – Product Overview",
//     date: "2025-05-12",
//     image: "/assets/img/resources/video2.JPEG",
//     description:
//       "A practical overview of knife gate valves used in mining applications, highlighting their ability to handle slurry and abrasive media.",
//   },
//   {
//     id: 23,
//     icon: "play",
//     category: "Videos",
//     title: "Automated Valve Solutions for Modern Process Plants",
//     date: "2025-02-27",
//     image: "/assets/img/knowledge/videos.jpg",
//     description:
//       "Discover how automation-ready valve solutions support efficient, safe, and digitally connected modern process plants.",
//   },

//   // =======================
//   // APPLICATION GUIDES
//   // =======================
//   {
//     id: 31,
//     icon: "book",
//     category: "Application Guides",
//     title: "Valve Selection Guide for Steam & Thermal Systems",
//     date: "2025-04-09",
//     image: "/assets/img/resources/pic2.jpg",
//     description:
//       "A comprehensive guide to selecting the right valves for steam and thermal systems, focusing on safety, efficiency, and longevity.",
//   },
//   {
//     id: 32,
//     icon: "book",
//     category: "Application Guides",
//     title: "Corrosion-Resistant Valve Solutions for Chemical Processing",
//     date: "2025-01-22",
//     image: "/assets/img/resources/webinar2.JPEG",
//     description:
//       "This guide explores corrosion-resistant materials and valve designs suited for aggressive chemical processing environments.",
//   },
//   {
//     id: 33,
//     icon: "book",
//     category: "Application Guides",
//     title: "Severe Service Valves for Slurry & Abrasive Media",
//     date: "2024-11-11",
//     image: "/assets/img/knowledge/application-guides.jpg",
//     description:
//       "Detailed insights into valve technologies engineered to withstand severe service conditions involving slurry and abrasive media.",
//   },

//   // =======================
//   // PUBLISHED PAPERS
//   // =======================
//   {
//     id: 41,
//     icon: "file",
//     category: "Published Papers",
//     title:
//       "Performance Evaluation of Triple Offset Butterfly Valves in Cryogenic Service",
//     date: "2025-06-30",
//     image: "/assets/img/resources/publishedpaper1.JPEG",
//     description:
//       "This paper evaluates the performance, sealing integrity, and reliability of triple offset butterfly valves in cryogenic service conditions.",
//   },
//   {
//     id: 42,
//     icon: "file",
//     category: "Published Papers",
//     title:
//       "Reducing Maintenance Costs Through Advanced Valve Sealing Technologies",
//     date: "2025-03-06",
//     image: "/assets/img/resources/publishedpaper2.JPEG",
//     description:
//       "An analytical study on how advanced sealing technologies contribute to reduced maintenance frequency and lifecycle costs.",
//   },
//   {
//     id: 43,
//     icon: "file",
//     category: "Published Papers",
//     title:
//       "Comparative Study of Control Valve Technologies in Power Generation Plants",
//     date: "2024-12-03",
//     image: "/assets/img/knowledge/published-papers.jpg",
//     description:
//       "A comparative analysis of various control valve technologies used in power generation, focusing on efficiency, reliability, and performance.",
//   },
// ];

// export default knowledgeData;


import { IBookDT } from "@/types/book-d-t";

const knowledgeData: IBookDT[] = [
  // =======================
  // SUCCESS STORIES
  // =======================
  {
    id: 1,
    subcategory_id: 0,
    name: "success-story-1",
    banner_image: "/assets/img/resources/pic2.jpg",
    slug: "safe-reliable-ergonomic-solutions",
    serial_number: "SS-001",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/pic2.jpg",

    icon: "bulb",
    category: "Success Stories",
    title:
      "Safe, Reliable, & Ergonomic Solutions for District Heating & Steam Systems",
    date: "2025-10-07",
    image: "/assets/img/resources/pic2.jpg",
    description:
      "District heating and steam systems demand uncompromising safety, consistent performance, and operator-friendly design.",
  },

  {
    id: 2,
    subcategory_id: 0,
    name: "success-story-2",
    banner_image: "/assets/img/resources/pic2.jpg",
    slug: "ceramic-lined-control-valve",
    serial_number: "SS-002",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/pic2.jpg",

    icon: "bulb",
    category: "Success Stories",
    title:
      "Ceramic Lined Control Valve Greatly Improves Performance in Copper Concentrator Process",
    date: "2025-07-17",
    image: "/assets/img/resources/pic2.jpg",
    description:
      "A ceramic-lined control valve solution significantly enhanced durability, reduced wear, and improved operational efficiency in a demanding copper concentrator environment.",
  },

  {
    id: 3,
    subcategory_id: 0,
    name: "success-story-3",
    banner_image: "/assets/img/knowledge/success-stories.jpg",
    slug: "butterfly-valve-reliability",
    serial_number: "SS-003",
    product_category: "Knowledge Center",
    img: "/assets/img/knowledge/success-stories.jpg",

    icon: "bulb",
    category: "Success Stories",
    title:
      "Butterfly Valve Solution Improves Reliability 1200% Over Existing Pinch Valve",
    date: "2025-07-02",
    image: "/assets/img/knowledge/success-stories.jpg",
    description:
      "By replacing traditional pinch valves, the new butterfly valve solution delivered dramatically higher reliability and reduced unplanned downtime.",
  },

  // =======================
  // WEBINARS
  // =======================
  {
    id: 11,
    subcategory_id: 0,
    name: "webinar-1",
    banner_image: "/assets/img/resources/webinar1.JPEG",
    slug: "valve-selection-high-pressure",
    serial_number: "WB-001",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/webinar1.JPEG",

    icon: "video",
    category: "Webinars",
    title: "Best Practices for Valve Selection in High-Pressure Applications",
    date: "2025-08-14",
    image: "/assets/img/resources/webinar1.JPEG",
    description:
      "This webinar covers essential design considerations, material selection, and safety factors for choosing valves in high-pressure operating conditions.",
  },

  {
    id: 12,
    subcategory_id: 0,
    name: "webinar-2",
    banner_image: "/assets/img/resources/webinar2.JPEG",
    slug: "smart-actuation-solutions",
    serial_number: "WB-002",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/webinar2.JPEG",

    icon: "video",
    category: "Webinars",
    title: "Improving Plant Reliability Through Smart Actuation Solutions",
    date: "2025-06-05",
    image: "/assets/img/resources/webinar2.JPEG",
    description:
      "Learn how intelligent actuation technologies enhance process reliability, enable predictive maintenance, and improve overall plant efficiency.",
  },

  // =======================
  // VIDEOS
  // =======================
  {
    id: 21,
    subcategory_id: 0,
    name: "video-1",
    banner_image: "/assets/img/resources/video1.JPEG",
    slug: "triple-offset-valve-design",
    serial_number: "VD-001",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/video1.JPEG",

    icon: "play",
    category: "Videos",
    title: "Triple Offset Valve Design Explained",
    date: "2025-07-01",
    image: "/assets/img/resources/video1.JPEG",
    description:
      "This video explains the design principles, sealing mechanism, and performance advantages of triple offset butterfly valves.",
  },

  {
    id: 22,
    subcategory_id: 0,
    name: "video-2",
    banner_image: "/assets/img/resources/video2.JPEG",
    slug: "knife-gate-valves-mining",
    serial_number: "VD-002",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/video2.JPEG",

    icon: "play",
    category: "Videos",
    title: "Knife Gate Valves in Mining Applications – Product Overview",
    date: "2025-05-12",
    image: "/assets/img/resources/video2.JPEG",
    description:
      "A practical overview of knife gate valves used in mining applications, highlighting their ability to handle slurry and abrasive media.",
  },

  // =======================
  // APPLICATION GUIDES
  // =======================
  {
    id: 31,
    subcategory_id: 0,
    name: "guide-1",
    banner_image: "/assets/img/resources/pic2.jpg",
    slug: "steam-thermal-systems-guide",
    serial_number: "AG-001",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/pic2.jpg",

    icon: "book",
    category: "Application Guides",
    title: "Valve Selection Guide for Steam & Thermal Systems",
    date: "2025-04-09",
    image: "/assets/img/resources/pic2.jpg",
    description:
      "A comprehensive guide to selecting the right valves for steam and thermal systems, focusing on safety, efficiency, and longevity.",
  },

  {
    id: 32,
    subcategory_id: 0,
    name: "guide-2",
    banner_image: "/assets/img/resources/webinar2.JPEG",
    slug: "corrosion-resistant-valves",
    serial_number: "AG-002",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/webinar2.JPEG",

    icon: "book",
    category: "Application Guides",
    title: "Corrosion-Resistant Valve Solutions for Chemical Processing",
    date: "2025-01-22",
    image: "/assets/img/resources/webinar2.JPEG",
    description:
      "This guide explores corrosion-resistant materials and valve designs suited for aggressive chemical processing environments.",
  },

  // =======================
  // PUBLISHED PAPERS
  // =======================
  {
    id: 41,
    subcategory_id: 0,
    name: "paper-1",
    banner_image: "/assets/img/resources/publishedpaper1.JPEG",
    slug: "triple-offset-butterfly-valves",
    serial_number: "PP-001",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/publishedpaper1.JPEG",

    icon: "file",
    category: "Published Papers",
    title:
      "Performance Evaluation of Triple Offset Butterfly Valves in Cryogenic Service",
    date: "2025-06-30",
    image: "/assets/img/resources/publishedpaper1.JPEG",
    description:
      "This paper evaluates the performance, sealing integrity, and reliability of triple offset butterfly valves in cryogenic service conditions.",
  },

  {
    id: 42,
    subcategory_id: 0,
    name: "paper-2",
    banner_image: "/assets/img/resources/publishedpaper2.JPEG",
    slug: "advanced-valve-sealing-technologies",
    serial_number: "PP-002",
    product_category: "Knowledge Center",
    img: "/assets/img/resources/publishedpaper2.JPEG",

    icon: "file",
    category: "Published Papers",
    title:
      "Reducing Maintenance Costs Through Advanced Valve Sealing Technologies",
    date: "2025-03-06",
    image: "/assets/img/resources/publishedpaper2.JPEG",
    description:
      "An analytical study on how advanced sealing technologies contribute to reduced maintenance frequency and lifecycle costs.",
  },
];

export default knowledgeData;