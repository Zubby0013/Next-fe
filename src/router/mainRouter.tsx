import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../pages/page/auth/Register";
import SignIn from "../pages/page/auth/SignIn";
import RegisterCard from "../pages/page/auth/RegisterCard";

import SecondStep from "../pages/home/start/SecondStep";
import ThirdScreen from "../pages/home/start/ThirdStep";
import LoadingScreen from "../components/static/LoadingScreen";
import SwitchLogin from "../pages/page/auth/SwitchLogin";
import StudentLogin from "../pages/page/auth/StudentLogin";
import LandingLayout from "../LandingPage1/LandingLayout";
import ABetter from "../LandingPage1/Homescreen/ABetter";
import Contact from "../LandingPage1/Contact";
import About from "../LandingPage1/About";
import StartUsing from "../LandingPage1/Homescreen/StartUsing";
import LandingScreen from "../LandingPage1/Homescreen/HomeScreen";
import SchoolLandingPage from "../mainSchoolPage/Pages/SchoolLandingPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
      {
        index: true,
        path: "/features",
        element: <ABetter />,
      },
      {
        index: true,
        path: "/contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/about",
        element: <About />,
      },
      {
        index: true,
        path: "/service",
        element: <StartUsing />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "switch-login",
        element: <SwitchLogin />,
      },
      {
        index: true,
        path: "student-login",
        element: <StudentLogin />,
      },
      {
        index: true,
        path: "api/verify-user/:token",
        element: <SignIn />,
      },
      {
        index: true,
        path: "register-message",
        element: <RegisterCard />,
      },
    ],
  },

  {
    path: "/step-two-data",
    element: <ThirdScreen />,
  },

  {
    path: "/step-third-data",
    element: <SecondStep />,
  },

  {
    path: "*",
    element: <LoadingScreen />,
  },
  {
    path: "/school/:schoolName",
    element: <SchoolLandingPage />,
  },

  // {
  //   path: "/loading",
  //   element: <LoadingScreen />,
  // },
]);
