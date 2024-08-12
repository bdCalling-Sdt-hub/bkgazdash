import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/bkGazLogo.svg";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdSubscriptions } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiCurrencyLine, RiExchangeDollarLine } from "react-icons/ri";
import { CiUser, CiSettings } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { IoRestaurant } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { TbPlant } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogOut = () => {
    Swal.fire({
      title: "Do you want to Logout from here?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user-update");
        navigate("/auth");
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };

  return (
    <div className={`fixed flex-col bg-[#193664] rounded-lg border-2 border-[#193664] transition-width duration-300 ${collapsed ? 'w-20' : 'xl:w-80 xl:h-[940px] 2xl:h-[1100px] lg:h-[800px] lg:w-60'}`}>
      {collapsed ? <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-white p-2 mb-3"
      >
        <FiMenu size={15} />
      </button> : ""}
      <div className="text-center py-6">
        <img
          src={logo}
          alt="Meal Pass Logo"
          className={`transition-all duration-300 ${collapsed ? 'w-10 mx-auto' : 'xl:w-20 lg:w-24 mx-auto py-4'}`}
        />
        <h1 className='text-[#1397D5] text-3xl font-bold'>B. K. GAZ</h1>
      </div>
      <nav className="flex flex-col overflow-y-auto 2xl:px-8 xl:px-6 lg:px-4 2xl:py-12">
        <NavLink to="/" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">
          <BiSolidDashboard size={20} />
          {!collapsed && <span className='text-[18px]'>Dashboard</span>}
        </NavLink>
        <NavLink to="/earnings" className="flex items-center gap-3 p-3 mb-2 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">

          <FaMoneyBills size={20} />
          {!collapsed && <span className='text-[18px]'>Earnings</span>}
        </NavLink>
        <NavLink to="/users" className="flex items-center gap-3 p-3 mb-2 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">
          <FaUserFriends size={20} />
          {!collapsed && <span className='text-[18px]'>Users</span>}
        </NavLink>
        <NavLink to="/order" className="flex items-center gap-3 p-3 mb-2 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">
          <MdOutlineCalendarToday size={20} />
          {!collapsed && <span className='text-[18px]'>Order</span>}
        </NavLink>
        <NavLink to="/categories" className="flex items-center gap-3 p-3 mb-2 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">
          <BiSolidCategory size={20} />
          {!collapsed && <span className='text-[18px]'>Categories</span>}
        </NavLink>

        <NavLink to="/settings" className="flex items-center gap-3 p-3 mb-2 rounded-lg text-white hover:bg-white hover:text-[#193664] transition-colors duration-300">
          <CiSettings size={20} />
          {!collapsed && <span className='text-[18px]'>Settings</span>}
        </NavLink>
      </nav>
      <div className="">
        <button
          onClick={handleLogOut}
          className="flex items-center gap-3 p-3 mb-2 rounded-lg text-red-500 hover:bg-white hover:text-[#193664] transition-colors duration-300 2xl:px-12 xl:px-8 lg:px-6 2xl:my-36 xl:my-24 lg:my-20"
        >
          <HiLogout size={20} />
          {!collapsed && <span className='text-[18px]'>Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
