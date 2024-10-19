import {
  AI_DSData,
  BackendData,
  FrontendData,
  PrograminLanguagesData,
} from "./skillsData";
import { Image, Project, Skill } from "./types";

export const ProjectsData = [
  {
    name: "Jewellery Store Website 🛒",
    description:
      "Developed a fully responsive Jewellery Store website using Next js, Tailwind css, context API and Django for backend. showcasing a wide range of jewellery products with user-friendly navigation and interactive features.",
    liveLink: "https://illusionjewellery.vercel.app/",
    githubLink: "https://github.com/vishalrk1/JewelleryShop",
    isFeatured: true,
    isFlipped: true,
    projectTypes: ["Web Development", "Backend Development"],
    images: [
      {
        url: "https://github.com/user-attachments/assets/f68835e2-ff91-4417-ae1b-2ce4512a4ae5",
        alt: "project-3-1",
      },
      {
        url: "https://github.com/user-attachments/assets/65730ede-e480-40f6-843b-7336b4fa81d9",
        alt: "project-3",
      },
      {
        url: "https://github.com/user-attachments/assets/2b8a063c-b333-4ee2-a146-437ff3289674",
        alt: "project-3",
      },
      {
        url: "https://github.com/user-attachments/assets/35a0a5c5-25f0-4a74-b4ad-2e571884432a",
        alt: "project-3",
      },
      {
        url: "https://github.com/user-attachments/assets/9af01a8b-e69e-4a1f-999d-62c7c0a4130a",
        alt: "project-3",
      },
      {
        url: "https://github.com/user-attachments/assets/bda95840-6dba-48e3-a736-066e1a79d7af",
        alt: "project-3",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[1],
      FrontendData[0],
      FrontendData[2],
      FrontendData[4],
      FrontendData[6],
    ] as Skill[],
    projectFeatures: [
      "Fully Responsive",
      "User-friendly Navigation",
      "Interactive Features",
      "Product Filtering",
      "Product Sorting",
      "Product Pagination",
      "Shopping Cart",
      "Checkout",
      "Payment Processing",
      "Order Tracking",
      "User Authentication",
      "User Profile",
      "User Orders",
      "User Wishlist",
      "Admin Dashboard",
      "Product Management",
      "Order Management",
      "User Management",
    ] as String[],
  },
  {
    name: "MegaLinks Website 💻",
    description:
      "Developed Megalinks website using Next JS, Tailwind CSS, and TypeScript, with state management powered by Redux, for accessing free video editing resources like scenepacks and tutorials",
    liveLink: "https://megalinks.vercel.app/",
    githubLink:
      "https://github.com/vishalrk1/megalinks-website-nextjs/tree/main",
    isFeatured: true,
    isFlipped: false,
    projectTypes: ["Web Development"],
    images: [
      {
        url: "https://github.com/user-attachments/assets/a407ede5-d7e5-4c9f-88aa-b6a7e07f3e4b",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-2.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-3.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-4.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-5.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-6.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-67.png",
        alt: "first-panel-ss",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[2],
      FrontendData[0],
      FrontendData[2],
      FrontendData[3],
      FrontendData[4],
      FrontendData[6],
    ] as Skill[],
    projectFeatures: [
      "Free Video Editing Resources",
      "Scenepacks",
      "Tutorials",
      "User-friendly Interface",
      "State Management with Redux",
      "Responsive Design",
      "Dark Mode",
      "Authentication",
    ] as String[],
  },
  {
    name: "MegaLinks App 📱",
    description:
      "Megalinks is an android app built with react native and firebase, where we provide free resources available for video editing, like Scenepacks, project files of the big editor, tutorials, etc..",
    liveLink: "https://play.google.com/store/apps/details?id=com.vk.MegaLinks",
    githubLink: "https://github.com/vishalrk1/MegaLinksApk",
    isFeatured: true,
    isFlipped: false,
    projectTypes: ["Android Development"],
    images: [
      {
        url: "https://github.com/vishalrk1/MegaLinksApk/assets/59719046/7a9bb39c-2a0c-4443-af0c-ad4037d15fba",
        alt: "android-apk",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[1],
      PrograminLanguagesData[2],
      FrontendData[5],
      BackendData[2],
    ] as Skill[],
    projectFeatures: [
      "Free Video Editing Resources",
      "Scenepacks",
      "Tutorials",
      "User-friendly Interface",
      "State Management with Redux",
      "Responsive Design",
      "Dark Mode",
      "Authentication",
    ] as String[],
  },
  {
    name: "Bitcoin Alerting System 🔔",
    description:
      "The Bitcoin Alert System is a comprehensive web application designed to provide real-time notifications for Bitcoin price movements.",
    githubLink: "https://github.com/vishalrk1/BTCAlert",
    isFeatured: true,
    isFlipped: true,
    liveLink: "",
    projectFeatures: [],
    projectTypes: ["Web Development", "Backend Development"],
    images: [
      {
        alt: "BTC-alerting-vishal-karangale",
        url: "https://github.com/user-attachments/assets/1c0f40da-f67d-4d6b-b67a-e3429543de25",
      },
    ],
    skills: [
      PrograminLanguagesData[1],
      PrograminLanguagesData[2],
      FrontendData[0],
      FrontendData[2],
      FrontendData[6],
      FrontendData[7],
    ] as Skill[],
  },
  {
    name: "SeeFood 🍔",
    description:
      "SeeFood is a website with image classification model which classifies uploaded food images and displays similar dishes, their recipes and calorie breakdown.",
    githubLink: "https://github.com/vishalrk1/seefood-ai",
    isFeatured: true,
    liveLink: "https://seefoodai.netlify.app/",
    isFlipped: false,
    projectTypes: ["AI/ML", "Web Development"],
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-1.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-4.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-5.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-6.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-7.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-2.png",
        alt: "project-seeFood",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/seefood-ai/combined/screenshot/img-3.png",
        alt: "project-seeFood",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[0],
      FrontendData[2],
      AI_DSData[2],
      BackendData[0],
    ] as Skill[],
    projectFeatures: [
      "Image Classification",
      "Image Upload",
      "Food Recipies",
      "Caloric Breakdown",
    ] as String[],
  },
  {
    name: "Skimlit",
    description:
      "An NLP model to classify abstract sentences into the role they play (e.g. objective, methods, results, etc..) to enable researchers to skim through the literature and dive deeper when necessary.",
    githubLink: "https://github.com/vishalrk1/SkimLit",
    liveLink: "",
    isFeatured: false,
    isFlipped: true,
    projectTypes: ["AI/ML", "Web Development"],
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/SkimLit/main/images/app.png",
        alt: "skimlit-image-alt",
      },
    ] as Image[],
    skills: [PrograminLanguagesData[0], ...AI_DSData] as Skill[],
    projectFeatures: [
      "NLP Model",
      "Abstract Classification",
      "Literature Skimming",
      "Research Efficiency",
    ] as String[],
  },
  {
    name: "MegaLinks Admin Portal",
    description:
      "Developed Megalinks website and admin panel using Next JS, Tailwind CSS, and TypeScript, with state management powered by Redux, ensuring a cohesive user experience and efficient data handling across platforms",
    liveLink: "",
    githubLink: "https://github.com/vishalrk1/megalinks-admin-portal",
    isFeatured: false,
    isFlipped: false,
    projectTypes: ["Web Development"],
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-1.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-2.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-3.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-4.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-5.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-6.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-7.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-8.png",
        alt: "first-panel-ss",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-admin-portal/main/screenshots/img-9.png",
        alt: "first-panel-ss",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[1],
      PrograminLanguagesData[2],
      FrontendData[0],
      FrontendData[2],
      FrontendData[3],
      FrontendData[4],
      FrontendData[6],
      BackendData[2],
    ] as Skill[],
    projectFeatures: [
      "User-friendly Interface",
      "State Management with Redux",
      "Responsive Design",
      "Dark Mode",
      "Authentication",
      "Data Authorization",
      "Data Tables",
      "Data Management",
      "Data Filtering",
      "Data Sorting",
      "Data Pagination",
    ] as String[],
  },
  {
    name: "Eccomerce Website",
    description:
      "Created a E-Commerce platform utilizing React JS and CSS, delivering a seamless and visually engaging shopping experience. Elevated user interaction and interface dynamics for enhanced online shopping convenience.",
    liveLink: "",
    githubLink:
      "https://github.com/vishalrk1/Ecommerce-website-react/tree/master",
    isFeatured: false,
    isFlipped: true,
    projectTypes: ["Web Development"],
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-1.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-2.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-3.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-4.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-5.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-6.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-7.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-8.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-9.png",
        alt: "second-project-2",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecommerce-website-react/master/demo-images/img-10.png",
        alt: "second-project-2",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[1],
      FrontendData[0],
      FrontendData[1],
      FrontendData[2],
      FrontendData[3],
      FrontendData[4],
      FrontendData[6],
      BackendData[2],
    ] as Skill[],
    projectFeatures: [
      "Fully Responsive",
      "User-friendly Navigation",
      "Interactive Features",
      "Shopping Cart",
      "Checkout",
      "Payment Processing",
      "User Authentication",
      "User Profile",
      "User Wishlist",
    ] as String[],
  },
] as Project[];

export const featuredProjects = ProjectsData.filter(
  (item) => item.isFeatured === true
);

export const webDevelopmentProjects = ProjectsData.filter((item) =>
  item.projectTypes.includes("Web Development")
);

export const androidDevelopmentProjects = ProjectsData.filter((item) =>
  item.projectTypes.includes("Android Development")
);

export const backendDevData = ProjectsData.filter((item) =>
  item.projectTypes.includes("Backend Development")
);

export const aiMlData = ProjectsData.filter((item) =>
  item.projectTypes.includes("AI/ML")
);

export const dataScienceData = ProjectsData.filter((item) =>
  item.projectTypes.includes("Data Science")
);
