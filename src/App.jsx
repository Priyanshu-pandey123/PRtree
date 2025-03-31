import { useState } from "react";
import "./App.css";
import HeroSection from "./Page/HeroSection";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Contact from "./Page/Contact";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
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
import Meeting from "./Component/Meeting";

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
  const user = useSelector((state) => state.user);
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
          path: "contact",
          element: <Contact />
        },
        {
          path: "auth",
          element: true ? <MultiForm /> : <Navigate to="/signIn" />,
        },
        {
          path: "admin-table",
          element: true ? <AdminTable /> : <Navigate to="/signIn" />,
        },
      ],
    },
    {
      path: "/signIn",
      element: <Auth />,
    },
    {
      path: "/meeting",
      element: <Meeting />,
    },
    {
      path: "/reset-password/:id",
      element: <ResetPassword />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
