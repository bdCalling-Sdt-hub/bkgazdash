
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
        <div className="mx-auto py-4 rounded-lg">
            <Header />
        </div>
        <div className="mt-24">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
