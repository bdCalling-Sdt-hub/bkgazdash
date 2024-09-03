import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Settings = () => {
    return (
        <div>
             <div>
         <div  className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Personal Information
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
         <div   className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Shop Operation
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
         <div  className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Discount Coupon
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div   className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
               Change Password
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
         </div>
 
         {/* Other items */}
         
         <div   className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
               Terms & Condition
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div   className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                Privacy Policy
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>

         <div   className='bg-[#E8EBF0] w-[79vw] h-16 flex items-center justify-between my-6 rounded-lg'>
            <p className='text-[#333333] font-bold px-6'>
                About Us
            </p>
            <MdOutlineKeyboardArrowRight className="text-2xl mr-6" />
        </div>
       </div>
        </div>
    );
};

export default Settings;