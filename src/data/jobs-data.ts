import { IBlogDT } from "@/types/blog-d-t";

export const Job_desc_data: IBlogDT[] = [
  {
    id: 19,
    img: "/assets/img/blog/blog-standard/erith-blog-1.JPEG",
    tag: "Oil & Gas",
    date: "January 28, 2026",
    place: "Dubai, UAE",
    title: "Oil & Gas Operations Engineer",
    desc: "We are seeking a dedicated and experienced Oil & Gas Operations Engineer to oversee field operations, ensure safety compliance, and optimize production efficiency.",

    responsibilities: [
      "Monitor and manage daily oil & gas field operations",
      "Ensure compliance with safety and environmental regulations",
      "Supervise pipeline installation and maintenance activities",
      "Prepare operational and technical reports",
      "Coordinate with drilling and production teams",
      "Conduct risk assessments and safety audits",
      "Troubleshoot operational issues and minimize downtime",
    ],

    qualifications: [
      "Bachelor’s degree in Petroleum, Mechanical, or Chemical Engineering",
      "3–5 years experience in oil & gas field operations",
      "Strong understanding of production and pipeline systems",
      "Experience working in onshore/offshore sites",
    ],

    skills: [
      "Knowledge of drilling & production processes",
      "Understanding of OSHA & safety standards",
      "Technical documentation skills",
      "Strong analytical & problem-solving ability",
      "Team leadership and coordination skills",
    ],

    employmentType: "Full-Time",
    experience: "3-5 Years",
    author: "HR Department",
  },

  {
    id: 20,
    img: "/assets/img/blog/blog-standard/blog-standard-2.jpg",
    tag: "Oil & Gas",
    date: "February 28, 2026",
    place: "Abu Dhabi, UAE",
    title: "Pipeline Maintenance Engineer",
    desc: "We are hiring a Pipeline Maintenance Engineer to ensure the integrity and safe operation of oil & gas pipeline systems.",

    responsibilities: [
      "Inspect and maintain pipeline systems",
      "Conduct preventive maintenance activities",
      "Monitor corrosion control systems",
      "Prepare inspection documentation",
      "Ensure compliance with safety regulations",
    ],

    qualifications: [
      "Bachelor’s degree in Mechanical Engineering or related field",
      "2–4 years experience in pipeline maintenance",
      "Knowledge of pipeline inspection standards",
    ],

    skills: [
      "Pipeline integrity management",
      "Problem-solving skills",
      "Knowledge of industrial safety procedures",
      "Team coordination ability",
    ],

    employmentType: "Full-Time",
    experience: "2-4 Years",
    author: "HR Department",
  },

  {
    id: 21,
    img: "/assets/img/blog/blog-standard/blog-standard-3.jpg",
    tag: "Oil & Gas",
    date: "February 28, 2026",
    place: "Qatar",
    title: "HSE Officer – Oil & Gas",
    desc: "We are looking for a qualified HSE Officer to ensure workplace safety and compliance in oil & gas operations.",

    responsibilities: [
      "Implement health & safety policies",
      "Conduct safety training sessions",
      "Perform risk assessments",
      "Monitor site safety compliance",
      "Prepare safety audit reports",
    ],

    qualifications: [
      "Degree/Diploma in Safety or Engineering",
      "NEBOSH certification preferred",
      "3+ years HSE experience in oil & gas industry",
    ],

    skills: [
      "Knowledge of international safety standards",
      "Risk assessment capability",
      "Report preparation skills",
      "Strong communication skills",
    ],

    employmentType: "Full-Time",
    experience: "3+ Years",
    author: "HR Department",
  },
];

const all_jobs = [...Job_desc_data];

export default all_jobs;
