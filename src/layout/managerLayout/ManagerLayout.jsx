import React from 'react'; 
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './order/Header';
 

const ManagerLayout = () => {
    return (
        <div className="flex xl:space-x-[350px] lg:space-x-64 bg-white">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="">
          <div className="mx-auto py-4 rounded-lg bg-white ">
              <Header />
              {/* <div className="h-4 w-auto border border-red-400"></div> */}
          </div>
          
          <div className="mt-24 w-full">
              <Outlet />
          </div>
        </div>
      </div>


    // <div>
    //     heloo
    // </div>
    );
};

export default ManagerLayout;