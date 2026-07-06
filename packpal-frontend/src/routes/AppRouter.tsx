import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
// import Home from "@/pages/Home";
import LandingPage from "@/features/landing";
import NotFound from "@/pages/NotFound";
import DesignSystem from "@/pages/DesignSystem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path:  "design-system",
        element: <DesignSystem />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);