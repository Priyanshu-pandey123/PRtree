import { useState } from "react";
import "./App.css";
import HeroSection from "./Page/HeroSection";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MultiForm from "./Page/MultiForm";

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
      children: [
        {
          index: true,
          element: <HeroSection />,
        },
        {
          path: "auth",
          element: <MultiForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
