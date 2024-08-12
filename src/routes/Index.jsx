import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import DashboardHome from "../pages/Main/dashBoardHome/DashBoardHome";
import Notification from "../layout/Main/Notification";
import Earnings from "../pages/Main/earnings/Earnings";
import Login from "../pages/Auth/login/Login";
import ForgetPassword from "../pages/Auth/login/ForgetPassword";
import Auth from "../layout/Auth/Auth";
import VerifyEmail from "../pages/Auth/login/VerifyEmail";
import ResetPassword from "../pages/Auth/login/ResetPassword";
import UsersTable from "../component/users/UsersTable";
import OrderTable from "../component/order/OrderTable";
import Categories from "../component/categories/Categories";
import AddProduct from "../component/categories/AddProduct";
import UpdateProduct from "../component/categories/UpdateProduct";
import SettingsHome from "../component/settings/SettingsHome";
import PersonalInformation from "../component/settings/PersonalInformation";
import TermsAndConditions from "../component/settings/TermsAndConditions";
import EditTermsAndCondition from "../component/settings/EditTermsAndConditions";
import PrivacyPolicy from "../component/settings/PrivacyPolicy";
import EditPrivacyPolicy from "../component/settings/EditPrivacyPolicy";
import Aboutus from "../component/settings/Aboutus";
import EditAboutus from "../component/settings/EditAboutUs";




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
            },
            {
                path: "/earnings",
                element: <Earnings />
            },
            {
                path: "/users",
                element: <UsersTable/>
            },
            {
                path: "/Order",
                element: <OrderTable />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/addProduct",
                element: <AddProduct />
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct />
            },
            {
                path: "/settings",
                element: <SettingsHome />
            },
            {
                path: "/personalInformation",
                element: <PersonalInformation/>
            },
            {
                path: "/termsAndConditons",
                element: <TermsAndConditions />
            },
            {
                path: "/edittermsAndConditions",
               element: <EditTermsAndCondition />
            },
            {
                path: "/privacyPolicy",
               element: <PrivacyPolicy />
            },
            {
                path: "/editPrivacyPolicy",
               element: <EditPrivacyPolicy />
            },
            {
                path: "/aboutus",
               element: <Aboutus />
            },
            {
                path: "/editAboutus",
               element: <EditAboutus />
            },
        ]

    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: '/auth',
                element: <Login />
            },
            {
                path: 'forgetPassword',
                element: <ForgetPassword />
            },
            {
                path: 'verifyEmail',
                element: <VerifyEmail />
            },
            {
                path: 'resetPassword',
                element: <ResetPassword />
            },
        ]
    },
   
  ])

  export default router;