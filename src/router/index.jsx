// Node Modules
import { createBrowserRouter } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage/HomePage";

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])