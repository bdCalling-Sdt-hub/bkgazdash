import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ChangePersonalModal from "./ChangePasswordModal";
import { useState } from "react";

const SettingsHome = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePersonalInformation = () => {
        navigate('/personalInformation');
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

    return (
       <div>
         <div onClick={handlePersonalInformation} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Personal Information
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div onClick={handleChangePassword} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
               Change Password
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
         </div>

         <ChangePersonalModal
           isVisible={isModalVisible}
           onClose={handleModalClose}
         />

         {/* Other items */}
         
         <div onClick={handleTermAndConditions} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
               Terms & Condition
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div onClick={handlePrivacyPolicy} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Privacy Policy
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div onClick={handleAboutus} className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                About Us
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
       </div>
    );
}

export default SettingsHome;
