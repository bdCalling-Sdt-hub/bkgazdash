import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import ChangePersonalModal from "../../ChangePersonalModal";
import { useState } from "react";
import ChangePersonalModal from './../../../../component/settings/ChangePasswordModal';
import { Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { GoPlus } from "react-icons/go";


const DiscountCoupon = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

   

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

 
    const handleBackSettings = () => {
        navigate('/settings')
    }

    const handleAddCoupon = () => {
    
        navigate('/dashboard/settings/discountCoupon/addCoupon')
    }
const handleUpdateCoupon = () => {
    navigate('/dashboard/settings/discountCoupon/updateCoupon')
}
    return (
       <div>
  <div>
        <div onClick={() => navigate('/dashboard/settings')} className='flex gap-2 items-center cursor-pointer border-none text-[#193664]'>
          <IoIosArrowBack />
       Discount Coupon
        </div>
      </div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button
          onClick={handleAddCoupon}
          type="primary"
          className="flex items-center bg-[#193664] w-[206px] h-[56px]"
        >
          <GoPlus className="mr-2" />
      Add Coupon
        </Button>
      </div>



         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
              Coupon 1
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 2
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 3
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         
         <ChangePersonalModal
           isVisible={isModalVisible}
           onClose={handleModalClose}
         />

          
       </div>
    );
}

export default DiscountCoupon;
