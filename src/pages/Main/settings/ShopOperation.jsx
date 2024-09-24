import { Button, Form, Image, Input, TimePicker } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ShopOperationSelectItem from "../../../component/settings/shopOperation/selectItem/ShopOperationSeletItem";
import shopOPerationLogo from '../../../assets/Images/shopOperationLogo/shopOperationLogo.png'
import { useGetTimeQuery } from "../../../redux/features/shopOparetion/getTime";
import { ClockCircleOutlined } from "@ant-design/icons";
import { CheckCircleOutlined, PoweroffOutlined } from "@ant-design/icons";

const ShopOperation = () => {
  const navigate = useNavigate()

  const {data: timeShop} = useGetTimeQuery()
  // console.log(timeShop?.data?.attributes?.isOpen);
  

  const handleBackSettings = () => {
    navigate("/dashboard/settings");
  };

  return (
    <div className="w-[79vw]">
      <div className="flex justify-between">
        <div>
          <div
            onClick={handleBackSettings}
            className="border-none text-[#193664] flex gap-2 cursor-pointer items-center"
          >
            <IoIosArrowBack style={{ }} /> 
            Shop Operation
          </div>
        </div>
        <div className="justify-end">
          <ShopOperationSelectItem />
        </div>
      </div>
      <div className="mt-12 flex items-center gap-12" >
        <div>
            <Image preview={false} src={shopOPerationLogo} />
        </div>

        <div>
        <div className="flex flex-col xl:ml-44 items-center justify-center p-8 bg-gray-100">
          
      <h1 className="text-3xl font-semibold text-gray-800 ">
        Shop Timings
      </h1>

      <div className="flex items-center mb-6 justify-center bg-gray-100">
      <h1
        className={` font-bold flex items-center gap-4 ${
          timeShop?.data?.attributes?.isOpen === true ? "text-green-600" : "text-red-600"
        }`}
      >
        {/* Icon based on shop status */}
        {timeShop?.data?.attributes?.isOpen === true ? (
          <CheckCircleOutlined className="text-green-600" />
        ) : (
          <PoweroffOutlined className="text-red-600" />
        )}
        
        {/* Text based on shop status */}
        {timeShop?.data?.attributes?.isOpen === true ? "The shop is now OPEN" : "The shop is now CLOSED"}
      </h1>
    </div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Start Time */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl text-gray-600">Opening Time</span>
          <div className="flex items-center">
            <ClockCircleOutlined className="text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">
              {timeShop?.data?.attributes?.startTime}
            </span>
          </div>
        </div>

        {/* Close Time */}
        <div className="flex items-center justify-between">
          <span className="text-xl text-gray-600">Closing Time</span>
          <div className="flex items-center">
            <ClockCircleOutlined className="text-red-600 mr-2" />
            <span className="text-2xl font-semibold text-red-600">
              {timeShop?.data?.attributes?.endTime}
            </span>
          </div>
        </div>
        
      </div>
      <button onClick={() => navigate('editshoptime')} class="bg-[#193664] text-white font-bold py-2 px-5 rounded-lg shadow-lg transition duration-300 ease-in-out">
  Update Time
</button>

    </div>

        </div>
      </div>
    </div>
  );
};

export default ShopOperation;
