import { useState } from "react";
import "./App.css";
import HeroSection from "./Page/HeroSection";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MultiForm from "./Page/MultiForm";
import AdminTable from "./Component/AdminTable";
import Auth from "./Component/Auth";
import ResetPassword from "./Component/ResetPassword";
import PageNotFound from "./Component/PageNotFound";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <HeroSection />,
        },
        {
          path: "auth",
          element: <MultiForm />,
        },
        {
          path: "admin-table",
          element: <AdminTable />,
        },
      ],
    },
    {
      path: "/signIn",
      element: <Auth />,
    },
    {
      path: "/reset-password/:id",
      element: <ResetPassword />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
