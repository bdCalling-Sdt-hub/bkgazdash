import { Button, Image } from "antd";
import "./DetailsDeliveryEmployee.css";
import DeliveryChart from "../../../component/deliveryEmployee/deliveryChart/DeliveryChart";
import Details from "../../../component/deliveryEmployee/details/Details";
import { useNavigate } from "react-router-dom";
import detailsDeliveryImg from "../../../assets/Images/detailsDeliveryEmployProfile.jpg";
const DetailsDeliveryEmployee = () => {
  const navigate = useNavigate();
  const handleUpdateEmployee = () => {
    navigate("/updateEmployee");
  };
  return (
    <div>
      <div className="flex justify-center w-[79vw]">
        <div className="flex items-center justify-center gap-6 w-4/12">
          {/* Employee Img */}
          <div className="bg-[#E7F5FB] p-8">
            <div className=" rounded-full h-48 w-48 overflow-hidden">
              <Image src={detailsDeliveryImg} width={200} height={250} />
            </div>
            <h1 className="py-4 text-center">Julian</h1>
          </div>
          {/* Button */}
        </div>
        {/* Employee chart */}
        <div className="w-8/12">
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
