// Node Modules
import { createBrowserRouter } from "react-router-dom";

// Pages
import CreatePost from "../pages/CreatePostPage/CreatePost";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/submit",
        element: <CreatePost />,
      },
    ],
  },
]);
