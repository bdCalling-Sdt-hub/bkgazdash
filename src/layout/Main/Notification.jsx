import { Pagination } from "antd";
// import NotificationCart from "../../../Components/NotificationCart";
// import { useGetAdminNotificationQuery } from "../../../redux/Features/getAdminNotificationApi";
import { useState } from "react";
// import NotificationCart from "../../../Components/NotificationCart";
// import { useGetAdminNotificationQuery } from "../../../redux/Features/getAdminNotificationApi";
// import Loading from "../../../Components/Loading";
import { IoIosNotificationsOutline } from "react-icons/io";

const data = [1, 2, 3];
const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  //   const {data,isSuccess,isLoading} = useGetAdminNotificationQuery(currentPage);
  //   if(isLoading){
  //     return <Loading/>
  //   }
  //   console.log(data?.data?.attributes);
  console.log(data?.pagination?.totalNotification);
  console.log(currentPage);
  const onChange = (values) => {
    console.log(values);
    setCurrentPage(values);
  };
  return (
    <div className="mt-8">
      <div className="">
        <div className=" h-screen bg-[#E8EBF0] w-[79vw] ">
          <div className="rounded-xl rounded-b-none overflow-hidden">
            <div className="border-b-2  border-[#C0C0C0] rounded-b-none">
              <h1 className="text-[24px] py-4 pl-[24px] text-black  font-semibold pb-3">
                Notification
              </h1>
            </div>
            <div className="flex flex-col">
              {data?.data?.attributes?.map((item, index) => (
                <NotificationCart key={item?._id} item={item} />
              ))}
            </div>
            <div className="flex space-x-4 p-[24px]">
              <div>
                <IoIosNotificationsOutline className="text-5xl bg-[#B8C1CF] p-2 rounded-sm" />
              </div>
              <div>
                <h1 className="text-[16px]">You have received $500 from John Doe</h1>
                <p className="text-[12px]">Fri, 12:30pm</p>
              </div>
            </div>
            <div className="flex space-x-4 p-[24px]">
              <div>
                <IoIosNotificationsOutline className="text-5xl bg-[#B8C1CF] p-2 rounded-sm" />
              </div>
              <div>
                <h1 className="text-[16px]">You have received $500 from John Doe</h1>
                <p className="text-[12px]">Fri, 12:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
