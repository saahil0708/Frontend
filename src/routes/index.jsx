import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Contact from "../Pages/Contact.jsx";
import Login from "../Pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
