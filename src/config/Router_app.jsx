import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../component/Layout";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

export const Router_app = () => {
  return <RouterProvider router={router} />;
};
