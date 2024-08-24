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
import DeliveryEmployeeTable from "../component/deliveryEmployee/DeliveryEmployeeTable";
import OrderDetails from "../pages/Main/order/orderDetails/OrderDetails";
import EditProfile from "../component/settings/EditProfile";
import DetailsDeliveryEmployee from "../pages/Main/deliveryEmloyee/DetailsDeliveryEmployee";
import AddEmployee from "../pages/Main/deliveryEmloyee/addEmployee/AddEmployee";
import UpdateEmployee from "../pages/Main/deliveryEmloyee/updateEmployee/UpdateEmployee";
import ShopOperation from "../pages/Main/settings/ShopOperation";
import DiscountCoupon from "../pages/Main/settings/discountCoupon/DiscountCoupon";
import AddCoupon from "../pages/Main/settings/discountCoupon/addCoupon/AddCoupon";
import UpdateCoupon from "../pages/Main/settings/discountCoupon/updateCoupon/UpdateCoupon";
import Product from "../pages/Main/product/Product";
import Users from "../pages/Main/users/Users";
import AdminRoutes from "./AdminRoutes";




  const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminRoutes> <Main /></AdminRoutes>,
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
                element: <Users />
            },
            {
                path: "/Order",
                element: <OrderTable />
            },
            {
                path: "/orderDetails",
                element: <OrderDetails />
            },
            {
                path: "/product",
                element: <Product />
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
                path: "/deliveryEmployee",
                element: <DeliveryEmployeeTable/>
            },
            {
                path: "/addEmployee",
                element: <AddEmployee />
            },
            {
                path: "/updateEmployee",
                element: <UpdateEmployee />
            },
            {
                path: "/detialsDeliveryEmployee",
                element: <DetailsDeliveryEmployee />
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
                path: "/shopOperation",
                element: <ShopOperation />
            },
            
            {
                path: "/discountCoupon",
                element: <DiscountCoupon />
            },
            {
                path: "/addCoupon",
                element: <AddCoupon />
            },
            {
                path: "/updateCoupon",
                element: <UpdateCoupon />
            },
            {
                path: "/editProfile",
                element: <EditProfile />
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