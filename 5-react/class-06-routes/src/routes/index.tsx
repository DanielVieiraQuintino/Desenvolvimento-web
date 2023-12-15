import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import { Galerry } from "../pages/Gallery";
import { Contact } from "../pages/Contact";
import { Page404 } from "../pages/Erro404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Galerry /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export function AppRoutes() {
    return <RouterProvider router={router}/>
}
