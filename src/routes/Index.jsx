import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import DashboardHome from "../pages/Main/dashBoardHome/DashBoardHome";
import Notification from "../layout/Main/Notification";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <DashboardHome />
            },
            {
                path: "/notification",
                element: <Notification />
            }
        ]

    }
  ])

  export default router;