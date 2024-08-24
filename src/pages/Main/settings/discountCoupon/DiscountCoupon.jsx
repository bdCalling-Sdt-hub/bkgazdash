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

    const handlePersonalInformation = () => {
        navigate('/personalInformation');
    };
    const handleShopOperation = () => {
        navigate('/shopOperation');
    };

    const handleChangePassword = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleTermAndConditions = () => {
        navigate('/termsAndConditons')
    }

    const handlePrivacyPolicy = () => {
        navigate('/privacyPolicy')
    }

    const handleAboutus = () => {
        navigate('/aboutus')
    }
    const handleBackSettings = () => {
        navigate('/settings')
    }

    const handleAddCoupon = () => {
    
        navigate('/addCoupon')
    }
const handleUpdateCoupon = () => {
    navigate('/updateCoupon')
}
    return (
       <div>
  <div>
        <Button onClick={handleBackSettings} className='border-none text-[#193664]'>
          <IoIosArrowBack />
       Discount Coupon
        </Button>
      </div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button
          onClick={handleAddCoupon}
          type="primary"
          className="flex items-center bg-[#193664]"
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

         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 4
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
         </div>

         <ChangePersonalModal
           isVisible={isModalVisible}
           onClose={handleModalClose}
         />

         {/* Other items */}
         
         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 5
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 6
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div onClick={handleUpdateCoupon} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
            Coupon 7
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
       </div>
    );
}

export default DiscountCoupon;
