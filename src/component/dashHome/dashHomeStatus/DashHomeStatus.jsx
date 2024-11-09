import { useGetDashHomeStatusApiQuery } from "../../../redux/features/getDashHomeStatusApi";
import Loading from "../../loading/Loading";

const DashHomeStatus = () => {
  const token = localStorage.getItem("token");
  // console.log("Auth Token page 10", token);

  // Fetch data using the query hook, passing the token as a header or parameter if needed
  const { data: data, isLoading, isError, error } = useGetDashHomeStatusApiQuery(undefined, {
    skip: !token, // Skip fetching if there's no token
  });

  // Debugging information
  // console.log("Data:", data?.data?.attributes);
  // console.log("Error:", error);

  // Handle the loading state
  // if (isLoading) {
  //   return <Loading />;
  // }

  // Handle the error state
  // if (isError) {
  //   return <div>Error: {error?.data?.message || error.message}</div>;
  // }

  // Extract the data you need from the response
  const totalEarnings = data?.data?.attributes?.totalEarnings;
  const totalUsers = data?.data?.attributes?.totalUser  ;
  const totalDelivery = data?.data?.attributes?.totalDelivery ;

  // Render the UI
  return (
    <div className="grid grid-cols-3 gap-12 w-[79vw] mt-[12px]">
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg">
        <div>
          <p className="text-black font-bold">Total Earnings</p>
          <h1 className="text-secondary text-[24px]">
            Cfa {totalEarnings}
            {/* ${'35'} */}
          </h1>
        </div>
      </div>
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg">
        <div>
          <p className="text-black font-bold">Total Users</p>
          <h1 className="text-secondary text-[44px]">
            {totalUsers}
            {/* ${'5'} */}
          </h1>
        </div>
      </div>
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg">
        <div>
          <p className="text-black font-bold">Total Delivery</p>
          <h1 className="text-secondary text-[44px]">
            {totalDelivery}
            {/* ${'35'} */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashHomeStatus;
