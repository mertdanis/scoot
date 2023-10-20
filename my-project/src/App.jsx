import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import About from "./pages/About";
import Location from "./pages/Location";
import Careers from "./pages/Careers";
import Home from "./pages/Home";

import Layout from "./ui/Layout";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/location",
        element: <Location />,
      },

      { path: "/careers", element: <Careers /> },
    ],
  },
]);

function App() {
  return (
    <div className="overflow-hidden ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
