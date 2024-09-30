// import {
//     createBrowserRouter
//   } from "react-router-dom";
// import Main from "../layout/Main/Main";
// import DashboardHome from "../pages/Main/dashBoardHome/DashBoardHome";
// import Notification from "../layout/Main/Notification";
// import Earnings from "../pages/Main/earnings/Earnings";
// import Login from "../pages/Auth/login/Login";
// import ForgetPassword from "../pages/Auth/login/ForgetPassword";
// import Auth from "../layout/Auth/Auth";
// import VerifyEmail from "../pages/Auth/login/VerifyEmail";
// import ResetPassword from "../pages/Auth/login/ResetPassword";
// import UsersTable from "../component/users/UsersTable";
// import OrderTable from "../component/order/OrderTable";
// import Categories from "../component/product/Products";
// import AddProduct from "../component/product/AddProduct";
// import UpdateProduct from "../component/product/UpdateProduct";
// import SettingsHome from "../component/settings/SettingsHome";
// import PersonalInformation from "../component/settings/PersonalInformation";
// import TermsAndConditions from "../component/settings/TermsAndConditions";
// import EditTermsAndCondition from "../component/settings/EditTermsAndConditions";
// import PrivacyPolicy from "../component/settings/PrivacyPolicy";
// import EditPrivacyPolicy from "../component/settings/EditPrivacyPolicy";
// import Aboutus from "../component/settings/Aboutus";
// import EditAboutus from "../component/settings/EditAboutUs";
// import DeliveryEmployeeTable from "../component/deliveryEmployee/DeliveryEmployeeTable";
// import OrderDetails from "../pages/Main/order/orderDetails/OrderDetails";
// import EditProfile from "../component/settings/EditProfile";
// import DetailsDeliveryEmployee from "../pages/Main/deliveryEmloyee/DetailsDeliveryEmployee";
// import AddEmployee from "../pages/Main/deliveryEmloyee/addEmployee/AddEmployee";
// import UpdateEmployee from "../pages/Main/deliveryEmloyee/updateEmployee/UpdateEmployee";
// import ShopOperation from "../pages/Main/settings/ShopOperation";
// import DiscountCoupon from "../pages/Main/settings/discountCoupon/DiscountCoupon";
// import AddCoupon from "../pages/Main/settings/discountCoupon/addCoupon/AddCoupon";
// import UpdateCoupon from "../pages/Main/settings/discountCoupon/updateCoupon/UpdateCoupon";
// import Product from "../pages/Main/product/Product";
// import Users from "../pages/Main/users/Users";
// import Promotion from "../pages/Main/promotion/Promotion";
// import SeePost from "../pages/Main/promotion/seePost/SeePost";
// import Manager from "../component/addManager/Manager";
// import AddManager from "../component/addManager/AddManager";
// import ManagerLayout from "../layout/managerLayout/ManagerLayout";
// import Orderdetails from "../layout/managerLayout/order/Orderdetails";
// import Order from "../layout/managerLayout/order/Order";
// import Settings from "../layout/managerLayout/order/Settings";
// // import AdminRoutes from "./AdminRoutes";




//   const router = createBrowserRouter([
//     {
//         path: "/",
//         // element: <AdminRoutes> <Main /></AdminRoutes>,
//         element: <Main />,
//         children: [
//             {
//                 path: "/",
//                 element: <DashboardHome />
//             },
//             {
//                 path: "/notification",
//                 element: <Notification />
//             },
//             {
//                 path: "/earnings",
//                 element: <Earnings />
//             },
//             {
//                 path: "/promotion",
//                 element: <Promotion />
//             },
//             {
//                 path: "/seePost",
//                 element: <SeePost />
//             },
//             {
//                 path: "/users",
//                 element: <Users />
//             },
//             {
//                 path: "/Order",
//                 element: <OrderTable />
//             },
//             {
//                 path: "/orderDetails",
//                 element: <OrderDetails />
//             },
//             {
//                 path: "/product",
//                 element: <Product />
//             },
//             {
//                 path: "/addProduct",
//                 element: <AddProduct/>
//             },
//             {
//                 path: "/updateProduct/:id",
//                 element: <UpdateProduct />
//         },
//             {
//                 path: "/deliveryEmployee",
//                 element: <DeliveryEmployeeTable/>
//             },
//             {
//                 path: "/addEmployee",
//                 element: <AddEmployee />
//             },
//             {
//                 path: "/updateEmployee",
//                 element: <UpdateEmployee />
//             },
//             {
//                 path: "/detialsDeliveryEmployee",
//                 element: <DetailsDeliveryEmployee />
//             },
//             {
//                 path: "/settings",
//                 element: <SettingsHome />
//             },
//             {
//                 path: "/personalInformation",
//                 element: <PersonalInformation/>
//             },
//             {
//                 path: "/shopOperation",
//                 element: <ShopOperation />
//             },
            
//             {
//                 path: "/discountCoupon",
//                 element: <DiscountCoupon />
//             },
//             {
//                 path: "/addCoupon",
//                 element: <AddCoupon />
//             },
//             {
//                 path: "/updateCoupon",
//                 element: <UpdateCoupon />
//             },
//             {
//                 path: "/editProfile",
//                 element: <EditProfile />
//             },
//             {
//                 path: "/termsAndConditons",
//                 element: <TermsAndConditions />
//             },
//             {
//                 path: "/edittermsAndConditions",
//                element: <EditTermsAndCondition />
//             },
//             {
//                 path: "/privacyPolicy",
//                element: <PrivacyPolicy />
//             },
//             {
//                 path: "/editPrivacyPolicy",
//                element: <EditPrivacyPolicy />
//             },
//             {
//                 path: "/aboutus",
//                element: <Aboutus />
//             },
//             {
//                 path: "/editAboutus",
//                element: <EditAboutus />
//             },
//             {
//                 path: "/manager",
//                 element: <Manager />
//             },
//             {
//                 path: "/addmanager",
//                 element: <AddManager />
//             },
            
//         ]

//     },
//     {
//         path: "managerlayout",
//         element: <ManagerLayout />,
//         children: [
//             {
//                 path: "managerorder",
//                 element: <Order />
//             },
//             {
//                 path: "orderdetails",
//                 element: <Orderdetails />
//             },
//             {
//                 path:"setings",
//                 element:<Settings />
//             }
//         ]
//     },
    
    
//     {
//         path: '/auth',
//         element: <Auth />,
//         children: [
//             {
//                 path: '/auth',
//                 element: <Login />
//             },
//             {
//                 path: 'forgetPassword',
//                 element: <ForgetPassword />
//             },
//             {
//                 path: 'verifyEmail',
//                 element: <VerifyEmail />
//             },
//             {
//                 path: 'resetPassword',
//                 element: <ResetPassword />
//             },
//         ]
//     },
   
//   ])

//   export default router;


import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import DashboardHome from "../pages/Main/dashBoardHome/DashBoardHome";
import Notification from "../layout/Main/Notification";
import Earnings from "../pages/Main/earnings/Earnings";
import Login from "../pages/Auth/login/Login";
import ForgetPassword from "../pages/Auth/login/ForgetPassword";
import VerifyEmail from "../pages/Auth/login/VerifyEmail";
import ResetPassword from "../pages/Auth/login/ResetPassword";
import UsersTable from "../component/users/UsersTable";
import OrderTable from "../component/order/OrderTable";
import Categories from "../component/product/Products";
import AddProduct from "../component/product/AddProduct";
import UpdateProduct from "../component/product/UpdateProduct";
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
import Promotion from "../pages/Main/promotion/Promotion";
import SeePost from "../pages/Main/promotion/seePost/SeePost";
import Manager from "../component/addManager/Manager";
import AddManager from "../component/addManager/AddManager";
import ManagerLayout from "../layout/managerLayout/ManagerLayout";
import Orderdetails from "../layout/managerLayout/order/Orderdetails";
import Order from "../layout/managerLayout/order/Order";
import Settings from "../layout/managerLayout/order/Settings";
import AddPromotion from "../pages/Main/promotion/AddPromotion";
import Details from "../component/deliveryEmployee/details/Details";
import EditPromotion from "../pages/Main/promotion/EditPromotion";
import EditTime from "../pages/Main/settings/EditTime";
import AdminRoutes from "./AdminRoutes";
import ManagerProfile from "../layout/managerLayout/order/ManagerProfile";
import EditManagerProfile from "../layout/managerLayout/order/editManagerProfile";
// import AdminRoutes from "./AdminRoutes";




  const router = createBrowserRouter([

           {
          path: '/',
           element: <Login />,
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
    
  
    {
        path: "dashboard",
        element: <AdminRoutes> <Main /></AdminRoutes>,
        // element: <Main />,
        children: [
            {
                path: "home",
                element: <AdminRoutes> <DashboardHome /> </AdminRoutes> 
            },
            {
                path: "notification",
                element: <Notification />
            },
            {
                path: "earnings",
                element: <Earnings />
            },
            {
                path: "promotion",
                element: <Promotion />
            },
            {
                path: "promotion/addpromotion",
                element: <AddPromotion />
            },
            {
                path: "promotion/editpromotion",
                element: <EditPromotion />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "Order",
                element: <OrderTable />
            },
            {
                path: "Order/orderDetails/:id",
                element: <OrderDetails />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "product/addProduct",
                element: <AddProduct/>
            },
            {
                path: "product/updateProduct/:id",
                element: <UpdateProduct />
        },
            {
                path: "deliveryEmployee",
                element: <DeliveryEmployeeTable/>
            },
            {
                path: "deliveryEmployee/addEmployee",
                element: <AddEmployee />
            },
            {
                path: "deliveryEmployee/detialsDeliveryEmployee/updateEmployee/:id",
                element: <UpdateEmployee />
            },
            {
                path: "deliveryEmployee/detialsDeliveryEmployee",
                element: <Details/>
            },
            {
                path: "settings",
                element: <SettingsHome />
            },
            {
                path: "personalInformation",
                element: <PersonalInformation/>
            },
            {
                path: "editprofile",
                element:<EditProfile />
            },
            {
                path: "settings/shopOperation",
                element: <ShopOperation />
            },
            {
                path: 'settings/shopOperation/editshoptime',
                element: <EditTime />
            },
            
            {
                path: "settings/discountCoupon",
                element: <DiscountCoupon />
            },
            {
                path: "settings/discountCoupon/addCoupon",
                element: <AddCoupon />
            },
            {
                path: "settings/discountCoupon/updateCoupon",
                element: <UpdateCoupon />
            },
            
            {
                path: "settings/termsAndConditons",
                element: <TermsAndConditions />
            },
            {
                path: "settings/termsAndConditons/edittermsAndConditions",
               element: <EditTermsAndCondition />
            },
            {
                path: "settings/privacyPolicy",
               element: <PrivacyPolicy />
            },
            {
                path: "settings/privacyPolicy/editPrivacyPolicy",
               element: <EditPrivacyPolicy />
            },
            {
                path: "settings/aboutus",
               element: <Aboutus />
            },
            {
                path: "settings/aboutus/editAboutus",
               element: <EditAboutus />
            },
            {
                path: "manager",
                element: <Manager />
            },
            {
                path: "manager/addmanager",
                element: <AddManager />
            },
            
        ]

    },
    {
        path: "managerlayout",
        element: <AdminRoutes> <ManagerLayout /> </AdminRoutes>,
        children: [
            {
                path: "managerorder",
                element: <AdminRoutes>  <Order/>  </AdminRoutes>,
            },
            {
                path: "managerorder/orderdetails/:id",
                element: <Orderdetails />
            },
          
            {
                path: "managerpersonalInformation",
                element: <ManagerProfile />
            },
            {
                path: "managereditprofile",
                element:<EditManagerProfile />
            },
        ]
    },
    
    
   
   
  ])

  export default router;