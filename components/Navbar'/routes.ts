export interface Route {
  title: string;
  path: string;
  isActive: boolean;
}

export const navRoutes = [
  {
    title: "About",
    path: "#about",
    isActive: true,
  },
  {
    title: "Projects",
    path: "#projects",
    isActive: false,
  },
  {
    title: "Experience",
    path: "#experience",
    isActive: false,
  },
  {
    title: "Contact",
    path: "#contact",
    isActive: false,
  },
] as Route[];
