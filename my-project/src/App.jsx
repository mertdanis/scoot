import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/destinations",
        element: <Destination />,
      },

      { path: "/crew", element: <Crew /> },

      { path: "/technology", element: <Technology /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <div className="bg-black text-white w-screen h-screen ">App</div>;
}

export default App;
