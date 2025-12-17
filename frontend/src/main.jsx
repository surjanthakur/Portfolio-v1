import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
