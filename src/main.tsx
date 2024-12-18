import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import "./index.css";
import { Dashboard } from "./routes/dashboard";
import { Orders } from "./routes/orders";
import { Tabs } from "./components/tabs/tabs";
import { Messages } from "./routes/messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Tabs />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
        ],
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
