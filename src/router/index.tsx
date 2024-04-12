import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/core/Layout";
import ErrorPage from "../components/core/ErrorPage";
import NotFound from "../components/core/404";
import Home from "../views/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
