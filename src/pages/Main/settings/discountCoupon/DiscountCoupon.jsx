import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import ChangePersonalModal from "../../ChangePersonalModal";
import { useState } from "react";
import ChangePersonalModal from './../../../../component/settings/ChangePasswordModal';
import { Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useGetAllCouponQuery } from "../../../../redux/features/coupon/getallCoupon";
import { useDeleteCouponMutation } from "../../../../redux/features/coupon/deleteCoupon";
import toast, { Toaster } from "react-hot-toast";


const DiscountCoupon = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

   const {data: allcoupon, } = useGetAllCouponQuery()
  //  console.log(allcoupon?.data?.attributes?.results);
   
  const [deletCoupon, {isLoading}] = useDeleteCouponMutation()

  const handleDelete = async(id) => {
    try{
      const res = await deletCoupon(id).unwrap()
      if(res?.code == 200){
        toast.success(res?.message)
      }
    }catch(error){
      console.log(error);
      
    }
  }

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

 
    const handleBackSettings = () => {
        navigate('/settings')
    }

    const handleAddCoupon = () => { 
        navigate('/dashboard/settings/discountCoupon/addCoupon')
    }
// const handleUpdateCoupon = () => {
//     navigate('/dashboard/settings/discountCoupon/updateCoupon')
// }
    return (
       <div>
        <Toaster />
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
<div className="grid grid-cols-6 gap-3">

      {
        allcoupon?.data?.attributes?.results.map(coupon => 


      <div key={coupon._id} className=" bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ coupon?.couponName}</div>
        <p className="text-gray-700 text-base">
          Discount: <span className="font-semibold">{coupon?.discount}</span>
        </p>
        <p className="text-gray-700 text-base">
          Start Date: <span className="font-semibold">{coupon?.startingDate?.split("T")[0]}</span>
        </p>
        <p className="text-gray-700 text-base">
          End Date: <span className="font-semibold">{coupon?.endDate?.split("T")[0]}
          </span>
        </p>
        <p className="text-gray-700 text-base">
          Use Time: <span className="font-semibold">{ coupon?.useTime}</span>
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <Button onClick={() => navigate(`updateCoupon`, {state: {coupon: coupon}})} type="primary" >
          Edit
        </Button>
        <Button type="danger" className="bg-red-400 text-white py-1 px-2 rounded-md" onClick={() => handleDelete(coupon?._id)} >
          Delete
        </Button>
      </div>
    </div>

        )
      }
</div>
         
         <ChangePersonalModal
           isVisible={isModalVisible}
           onClose={handleModalClose}
         />

          
       </div>
    );
}

export default DiscountCoupon;
