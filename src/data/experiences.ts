export interface Experience {
  id: number;
  logo: string;
  company: string;
  role?: string;
  date: string;
  description: string[];
  color: string; // color of the dot in the timeline
}

import untelsLogo from "../assets/logo-untels.png";
import latamLogo from "../assets/latamready.png";
import indraLogo from "../assets/indra.png";

export const experiences: Experience[] = [
  {
    id: 1,
    logo: untelsLogo,
    company: "National Technological University of Lima Sur (UNTELS)",
    date: "04/2017 - 01/2022",
    description: [
      "📌 Modeling and design of relational and NoSQL databases.",
      "📌 Development of applications using various technologies.",
      "📌 Project planning and control following PMBOK and Scrum methodologies."
    ],
    color: "bg-violet-400",
  },
  {
    id: 2,
    logo: latamLogo,
    company: "LatamReady",
    date: "09/2021 - 12/2022",
    description: [
      "📌 Development within Oracle NetSuite ERP using JavaScript / SuiteScript.",
      "📌 Process automation and QA support.",
      "📌 Execution of functional tests and technical support."
    ],
    color: "bg-blue-400",
  },
  {
    id: 3,
    logo: indraLogo,
    company: "Indra",
    date: "2023 - Present",
    description: [
      "📌 ABAP development for automation in SAP.",
      "📌 Projects involving mass data loads, RFCs, and SOAP/REST web services.",
      "📌 Technical and functional collaboration to optimize processes."
    ],
    color: "bg-green-400",
  },
];
