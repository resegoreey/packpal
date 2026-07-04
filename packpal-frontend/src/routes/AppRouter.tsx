import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import DesignSystem from "@/pages/DesignSystem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "design-system",
        element: <DesignSystem />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);