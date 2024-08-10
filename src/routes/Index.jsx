import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import DashboardHome from "../pages/Main/dashBoardHome/DashBoardHome";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <DashboardHome />
            }
        ]

    }
  ])

  export default router;