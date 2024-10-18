import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import SalaryPage from "../components/SalaryPage";
import CurrentJobs from "../components/CurrentJobs";
import PostJob from "../components/PostJob";
import Application from "../components/Application";
import Login from "../components/Login";
import Register from "../components/Register";
import Logout from "../components/Logout";
import Job_details from "../components/Job_details";
import Registercard from "../components/Registercard";
import HirerRegister from "../components/HirerRegister";

import HirereDetails from "../components/HirereDetails";
import Chat from "../components/Chat";
import AdminHome from "../components/Admin/AdminHome";
import AdminUsers from "../components/Admin/AdminUsers";
import ApplicationPage2 from "../components/ApplicationPage2";
import ApplicationPage3 from "../components/ApplicationPage3";
import ApplicationPage4 from "../components/ApplicationPage4";
import ApplicationPage5 from "../components/ApplicationPage5";
import ApplicationPage6 from "../components/ApplicationPage6";
import MainAppPage7 from "../components/ApplicationPage7.jsx/MainAppPage7";
import MainLayout from "../components/ApplicationPage8.jsx/MainLayout";
import MainLayout9 from "../components/ApplicationPage9.jsx/MainLayout9";
import User_dash from "../components/UserDashboard/User_dash";
import ApplicationStatus from "../components/UserDashboard/ApplicationStatus";
import UserProfile from "../components/UserDashboard/UserProfile";

const stages = [
  { name: 'Stage 1' },
  { name: 'Stage 2' },
  // Add more stages as needed
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/salary-estimate",
        element: <SalaryPage />,
      },
      {
        path: "/current-jobs",
        element: <CurrentJobs />,
      },
      {
        path: "/details/apply",
        element: <Application />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/jobdetails/:id",
        element: <Job_details />,
      },
      {
        path: "/registercard",
        element: <Registercard />,
      },
      {
        path: "/hirerregister",
        element: <HirerRegister />,
      },
      {
        path: "/hirerdetails",
        element: <HirereDetails />,
      },
      
      {
        path: "/chatbot",
        element: <Chat />,
      },
      
      {
        path: "/userDash",
        element: <User_dash/>,
        children: [
          {
            index:true,
            element:<UserProfile/>
          },
          {
            path: "applicationStatus",
            element: <ApplicationStatus/>,
          },
          ]
          },
      {
        path: "/admin",
        element: <AdminHome />,
        children: [
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            index: true, // Default page for /admin
            element: <ApplicationPage2 />,
          },
          {
            path: "applicationPage3", // Relative path for /admin/applicationPage3
            element: <ApplicationPage3 />,
          },
          {
            path: "mainlayout9",
            element: <MainLayout9 stages={stages} />,
          },
          {
            path: "mainlayout8",
            element: <MainLayout />,
          },
          {
            path: "mainapppage7",
            element: <MainAppPage7 />,
          },
          {
            path: "applicationPage6",
            element: <ApplicationPage6 />,
          },
          {
            path: "applicationPage5",
            element: <ApplicationPage5 />,
          },
          {
            path: "applicationPage4",
            element: <ApplicationPage4 />,
          },
        ],
      },
    ],
  },
]);

export default router;
