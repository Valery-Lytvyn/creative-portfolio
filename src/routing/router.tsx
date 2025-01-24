import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.project(null), element: <ProjectPage /> },
    ],
  },
]);
