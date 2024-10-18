export interface Route {
  title: string;
  sectionId: string;
  path: string;
  isActive: boolean;
}

export const navRoutes = [
  {
    title: "About",
    sectionId: "about",
    path: "#about",
    isActive: true,
  },
  {
    title: "Projects",
    sectionId: "projects",
    path: "/projects",
    isActive: false,
  },
  {
    title: "Experience",
    sectionId: "experience",
    path: "#experience",
    isActive: false,
  },
  {
    title: "Contact",
    sectionId: "contact",
    path: "#contact",
    isActive: false,
  },
] as Route[];
