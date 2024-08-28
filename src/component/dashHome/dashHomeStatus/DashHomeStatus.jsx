

// import { useGetDashHomeStatusApiQuery } from "../../../redux/features/getDashHomeStatusApi";
// import Loading from "../../loading/Loading";

//

const DashHomeStatus = () => {
  // const token = localStorage.getItem("token");
//   console.log("Auth Token page 10", token);
  // const { data, isLoading, isError, error } = useGetDashHomeStatusApiQuery({
  //   skip: !token,
  // });
//   console.log("Data:", data?.data?.attributes?.totalUser);

//   console.log("Error:", error);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  const data = [1, 2, 3]
  return (
    <div className="grid grid-cols-3 gap-12 w-[79vw] mt-[12px]">
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg ">
        <div>
          <p className="text-black font-bold">Total Earnings</p>
          <h1 className="text-secondary text-[44px]">
            ${data?.data?.attributes?.totalEarnings || 24.88}
          </h1>
        </div>
      </div>
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg ">
        <div>
          <p className="text-black font-bold">Total Users</p>
          <h1 className="text-secondary text-[44px]">
            ${data?.data?.attributes?.totalUser || 6500}
          </h1>
        </div>
      </div>
      <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg">
        <div>
          <p className="text-black font-bold">Total Delivery</p>
          <h1 className="text-secondary text-[44px]">
            ${data?.data?.attributes?.totalDelivery || 740}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashHomeStatus;
