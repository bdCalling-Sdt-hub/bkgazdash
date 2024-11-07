import { Pagination } from "antd";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useGetNotificationQuery } from "../../redux/features/profile/getNotification";

const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of notifications to display per page
  const { data: notification, isLoading } = useGetNotificationQuery();
  console.log(notification)

  const notifications = notification?.data?.attributes?.results || [];
  const totalNotifications = notifications.length;

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotifications = notifications.slice(startIndex, endIndex);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = date.getUTCDay(); // Get the day of the week
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[day];
    return `${dayOfWeek}, ${time}`;
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-8">
      <div className="h-screen bg-[#E8EBF0] w-[79vw]">
        <div className="rounded-xl rounded-b-none overflow-hidden">
          <div className="border-b-2 border-[#C0C0C0] rounded-b-none">
            <h1 className="text-[24px] py-4 pl-[24px] text-black font-semibold pb-3">
              Notification
            </h1>
          </div>
          <div className="flex flex-col">
            {/* Display notifications for the current page */}
            {currentNotifications.map((item) => (
              <div key={item._id} className="flex space-x-4 p-[24px]">
                <div>
                  <IoIosNotificationsOutline className="text-5xl bg-[#B8C1CF] p-2 rounded-sm" />
                </div>
                <div>
                  <h1 className="text-[16px]">{item?.message}</h1>
                  <p className="text-[12px]">{formatDateTime(item?.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={totalNotifications}
              onChange={onChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
