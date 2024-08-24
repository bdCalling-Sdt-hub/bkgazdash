import { Button, Image } from "antd";
import './DetailsDeliveryEmployee.css'
import DeliveryChart from "../../../component/deliveryEmployee/deliveryChart/DeliveryChart";
import Details from "../../../component/deliveryEmployee/details/Details";
import { useNavigate } from "react-router-dom";

const DetailsDeliveryEmployee = () => {
  const navigate = useNavigate();
  const handleUpdateEmployee = () => {
    navigate('/updateEmployee')
  }
  return (
    <div>
      <div className="flex justify-center w-[79vw]">
        <div className="flex items-center gap-6 w-5/12">
          {/* Employee Img */}
          <div className="bg-[#E7F5FB] p-4">
            <div className="border-red-700 border rounded-full h-48 w-48 overflow-hidden">
              <Image />
            </div>
            <h1 className="py-4 text-center">User Name</h1>
          </div>
          {/* Button */}
          <div className="flex flex-col gap-6 ">
            <Button className="w-48 h-12 rounded-xl custom-delete-button ">
              Delete
            </Button>
            <Button onClick={handleUpdateEmployee} className="w-48 h-12 rounded-xl custom-Edit-button">
              Edit
            </Button>
          </div>
        </div>
        {/* Employee chart */}
        <div className="w-/12">
          <DeliveryChart />
        </div>
      </div>
      {/* Details */}
      <div>
        <Details />
      </div>
    </div>
  );
};

export default DetailsDeliveryEmployee;
