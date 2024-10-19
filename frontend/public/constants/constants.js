import { IoDocumentText } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { SiPivotaltracker } from "react-icons/si";
import { SiCssdesignawards } from "react-icons/si";
import { CiCircleMore } from "react-icons/ci";

export const featureOptions = [
  {
    icon: <IoDocumentText size={80} />,
    activeIcon: (
      <IoDocumentText
        className="dark:text-green-100 text-green-300"
        size={80}
      />
    ),
    name: "Resumes",
    description: [
      "Create Resumes with the best ATS scores across the internet",
      "Tailor the resume for specific job applications.",
      "Pre-defined styling and templates to get the most out of your resume",
      "Time Saved: 40-60 minutes",
      "😰😢😵‍💫 : None ",
    ],
  },
  {
    icon: <CgWebsite size={80} />,
    activeIcon: (
      <CgWebsite className="dark:text-green-100 text-green-300" size={80} />
    ),
    name: "Portfolio",
    description: [
      "Design Portfolios that Stand Out Everywhere",
      "Customize your portfolio to fit any career or creative niche.",
      "Professional-grade templates and designs to highlight your best projects",
      "Time Saved: 1-2 days",
      "Stress Levels: Zero",
    ],
  },
  {
    icon: <SiPivotaltracker size={80} />,
    activeIcon: (
      <SiPivotaltracker
        className="dark:text-green-100 text-green-300"
        size={80}
      />
    ),
    name: "Application Tracker",
    description: [
      "Track Job Applications with Unmatched Precision",
      "Organize and manage applications for every role effortlessly.",
      "Smart filters and reminders to keep you on top of deadlines",
      "Time Saved: 30-45 minutes per application",
      "Overwhelm Factor: None",
    ],
  },
  {
    icon: <SiCssdesignawards size={80} />,
    activeIcon: (
      <SiCssdesignawards
        className="dark:text-green-100 text-green-300"
        size={80}
      />
    ),
    name: "Style",
    description: [
      "Craft Visually Stunning Designs with Ease",
      "Personalize your site’s style to match your brand and vision.",
      "Modern, sleek layouts with intuitive customization options",
      "Time Saved: Hours of manual design work",
      "Design Frustration: Zero",
    ],
  },
];

export const pricingData = [
  {
    name: "Starter",
    oldPrice: 99,
    newPrice: 49,
    features: [
      "3 Resume templates",
      "1 portfolio website",
      "50 Job Tracking fields",
      "Extra Resume editing tools",
    ],
  },
  {
    name: "All-in",
    oldPrice: 199,
    newPrice: 149,
    features: [
      "All Resume templates",
      "3 portfolio websites",
      "100+ Job Tracking fields",
      "All Resume editing tools",
    ],
  },
];

export const faqsData = [
  {
    name: "what",
    question: "What is Jobbies about?",
    answer: "",
  },
  {
    name: "domain",
    question: "Do I have to buy a domain for my portfolio site?",
    answer: "",
  },
  {
    name: "cost",
    question: "Are there any other costs associated",
    answer: "",
  },
  {
    name: "buy",
    question: "Do we have to buy to start using jobbies?",
    answer:
      "No, you do not have to buy to get started. You can opt to use the free version by simply signing in and using the provided workspace.\n\nAlthough, you have limited access to the features, this is the best way to get your hands on the best tool to get you hired as soon as possible.",
  },
];

export const menuItems = ["Home", "About", "Testimonials", "Contact"];
