export const ROUTES = {
  index: "/",
  project: (projectName: string | null) =>
    projectName
      ? `/project/${projectName.toLowerCase()}`
      : "/project/:categoryName",
  HASHES: {
    home: "home",
    about: "about",
    portfolio: "portfolio",
    contact: "contact",
    project: "project",
  },
};
