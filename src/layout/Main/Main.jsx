
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";


const Main = () => {
  return (
    <div className="flex xl:space-x-[350px] lg:space-x-64 bg-white">
      <div className=" fixed">
        <Sidebar />
      </div>
      <div className="">
        <div className="mx-auto py-4 w-full rounded-lg bg-white ">
            <Header />
            {/* <div className="h-4 w-auto border border-red-400"></div> */}
        </div>
        
        <div className="mt-24  pr-4">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
