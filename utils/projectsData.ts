import {
  AI_DSData,
  BackendData,
  FrontendData,
  PrograminLanguagesData,
} from "./skillsData";
import { Image, Project, Skill } from "./types";

export const ProjectsData = [
  {
    name: "SeeFood 🍔",
    description:
      "SeeFood is an website with image classification model which classifies uploaded food image and then displaces similara dishes, theri recipies and caloric breackdowns.",
    githubLink: "https://github.com/vishalrk1/seefood-ai",
    isFeatured: true,
    liveLink: "https://seefoodai.netlify.app/",
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
      AI_DSData[0],
      AI_DSData[1],
      AI_DSData[2],
      BackendData[0],
      BackendData[1],
      BackendData[3],
    ] as Skill[],
    projectFeatures: [
      "Image Classification",
      "Image Upload",
      "Food Recipies",
      "Caloric Breakdown",
    ] as String[],
  },
  {
    name: "MegaLinks Website",
    description:
      "Developed Megalinks website using Next JS, Tailwind CSS, and TypeScript, with state management powered by Redux, for accessing free video editing resources like Scenepacks and tutorials",
    liveLink: "https://megalinks.vercel.app/",
    githubLink:
      "https://github.com/vishalrk1/megalinks-website-nextjs/tree/main",
    isFeatured: true,
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/megalinks-website-nextjs/main/screenshots/ss-1.png",
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
    name: "MegaLinks App",
    description:
      "Megalinks is an android app built with react native and firebase, where we provide free resources available for video editing, like Scenepacks, project files of the big editor, tutorials, etc..",
    liveLink: "https://play.google.com/store/apps/details?id=com.vk.MegaLinks",
    githubLink: "https://github.com/vishalrk1/MegaLinksApk",
    isFeatured: true,
    images: [
      {
        url: "https://github.com/vishalrk1/MegaLinksApk/assets/59719046/7a9bb39c-2a0c-4443-af0c-ad4037d15fba",
        alt: "android-apk",
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
    name: "Eccomerce Website",
    description:
      "Created a E-Commerce platform utilizing React JS and CSS, delivering a seamless and visually engaging shopping experience. Elevated user interaction and interface dynamics for enhanced online shopping convenience.",
    liveLink: "",
    githubLink:
      "https://github.com/vishalrk1/Ecommerce-website-react/tree/master",
    isFeatured: false,
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
  {
    name: "Jewellery Store Website",
    description:
      "Developed a fully responsive Jewellery Store website using Reactjs, Tailwind css, context API and Django for backend. showcasing a wide range of jewellery products with user-friendly navigation and interactive features.",
    liveLink: "https://luxeselect.vercel.app/",
    githubLink: "https://github.com/vishalrk1/Ecomm",
    isFeatured: true,
    images: [
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecomm/main/screenshots/Homescreen%20-%20Logged%20In.png",
        alt: "project-3",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecomm/main/screenshots/Profile%20Details%20Page.png",
        alt: "project-3",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecomm/main/screenshots/Product%20Added%20To%20Cart%20-%20Toast.png",
        alt: "project-3",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecomm/main/screenshots/Products%20Page%20-%20Bracelets.png",
        alt: "project-3",
      },
      {
        url: "https://raw.githubusercontent.com/vishalrk1/Ecomm/main/screenshots/Your%20Cart%20Page%20.png",
        alt: "project-3",
      },
    ] as Image[],
    skills: [
      PrograminLanguagesData[1],
      FrontendData[0],
      FrontendData[2],
      FrontendData[3],
      FrontendData[4],
      FrontendData[6],
      BackendData[0],
      BackendData[3],
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
    name: "Skimlit",
    description:
      "An NLP model to classify abstract sentences into the role they play (e.g. objective, methods, results, etc..) to enable researchers to skim through the literature and dive deeper when necessary.",
    githubLink: "https://github.com/vishalrk1/SkimLit",
    liveLink: "",
    isFeatured: true,
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
    isFeatured: true,
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
] as Project[];
