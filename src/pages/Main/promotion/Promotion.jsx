import { Button, Image } from 'antd';
import React from 'react';
import prom from './../../../../public/prom.png'
import { GoPlus } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useGetPromotionQuery } from '../../../redux/features/promotion/getAllpromotion';
import baseUrl from '../../../redux/api/baseUrl';
import { useDeletePromotionMutation } from '../../../redux/features/promotion/deletePromotion';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const Promotion = () => {
    const navigate = useNavigate()

  const {data: promotions} = useGetPromotionQuery()
  // console.log(promotions?.data?.attributes?.results);
   const [deletePromotion, {isLoading}] = useDeletePromotionMutation()

const handleDelete = async(id) => {
    try{
      const res = await deletePromotion(id).unwrap();
      // console.log(res);
      
      if(res?.code ==200){
        toast.success(res?.message)
      }
    }catch(error){
      toast.error(error?.data?.message)
    }
}

const handleEdit = () => {
  navigate('/promotion')
}

    return (
        <div className=''>
         <Toaster position="top-center" reverseOrder = {false} />
             <div className="flex justify-between 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw] py-6">
         <h1 className='text-2xl'>Promotion</h1>
        <Button onClick={() => navigate('addpromotion')} type="primary" className="flex items-center w-[206px] h-[56px] rounded-md  bg-[#193664]">
          <GoPlus className="mr-2" />
          Add Product
        </Button>
      </div>
           <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {
              promotions?.data?.attributes?.results.map(promotion => 
                <div key={promotion._id}>
                        <div className='ml-4'>
            <Image height={400}  className='' src={baseUrl + promotion?.image} />
           </div>
           <div className=' justify-around flex py-8'>
           <Button
              onClick={() => navigate(`editpromotion`, {state : { promotion }})}   
                type="primary"
                style={{
                  backgroundColor: "#193664",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[135px] 
                   h-[40px]  py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
              >
               Edit
              </Button>
           <Button
              onClick={()=> handleDelete(promotion?._id)}
                // type="primary"
                style={{
                  backgroundColor: "transparent",
                  color: "#193664",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[135px] custom-delete-button font-bold 
                   h-[40px]  py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
              >
          Delete
              </Button>
           </div>
                </div>
              )
            }

    
           </div>
          
        </div>
    );
};

export default Promotion;