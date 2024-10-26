import React from 'react';
import { Button, Form, Input, DatePicker, InputNumber } from 'antd'; // Import InputNumber
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './AddCoupon.css';
import { useAddCouponMutation } from '../../../../../redux/features/coupon/addCoupon';
import toast, { Toaster } from 'react-hot-toast';

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const AddCoupon = () => {
  const navigate = useNavigate();
  const [addCoupon, { isLoading }] = useAddCouponMutation();
 
  const onFinish = async(values) => {
    console.log(values);

    const date = new Date(values?.name?.startingDate);
    const startingDate = date.toISOString().split('T')[0];
   
    const dateEnd = new Date(values?.name?.endDate);
    const endDate = dateEnd.toISOString().split('T')[0];

    // Prepare data to send to the server
    const data = {
      couponName: values?.name?.couponName,
      startingDate,
      endDate,
      discount: values?.name?.discount, // This will be a number now
      useTime: values?.name?.useTime,   // This will be a number now
    }; 
    console.log(data);

    try{
      const res = await addCoupon(data).unwrap();
      if(res?.code == 201){
        toast.success(res?.message)
      }
      setTimeout(() => {
        navigate('/dashboard/settings/discountCoupon')
      }, 1000);
    }catch(error){
      console.log(error);
      toast.error(error?.data?.message)
      
    }
    // Submit the data to the server
  };

  const handleBack = () => {
    navigate('/dashboard/settings/discountCoupon');
  };

  return (
    <div>
      <Toaster />
      <Button onClick={handleBack} className='border-none text-[#193664]'>
        <IoIosArrowBack />
        Coupon
      </Button>
      <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
        <Form className='mx-auto' name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={['name']}>
            <div className='flex space-x-14'>
              <MyFormItem name="couponName" label="Coupon-Name">
                <Input size='large' style={{ width: '400px', height: "45px", paddingLeft: '12px', borderColor: "#193664" }} />
              </MyFormItem>
              <MyFormItem name="discount" label="Discount">
                <InputNumber size='large' style={{ width: '400px', height: "45px", paddingLeft: '12px', borderColor: "#193664" }} min={0} max={100} />
              </MyFormItem>
            </div>
          </MyFormItemGroup>
          <MyFormItemGroup prefix={['name']}>
            <div className='flex space-x-14'>
              <MyFormItem name="startingDate" label="Start Date">
                <DatePicker 
                  size='large' 
                  style={{ width: '400px', height: "45px", paddingLeft: '12px', borderColor: "#193664" }}
                  format="YYYY-MM-DD"
                />
              </MyFormItem>
              <MyFormItem name="endDate" label="End Date">
                <DatePicker 
                  size='large' 
                  style={{ width: '400px', height: "45px", paddingLeft: '12px', borderColor: "#193664" }}
                  format="YYYY-MM-DD"
                />
              </MyFormItem>
            </div>
          </MyFormItemGroup>

          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="useTime" label="Time use">
              <InputNumber size='large' style={{ width: '400px', height: '45px', paddingLeft: '12px', borderColor: "#193664" }} min={0} />
            </MyFormItem>
          </MyFormItemGroup>

          <div className='update-button border-t-2 border-[#193664] py-4'>
            <Button className='w-[860px] h-14 !bg-[#193664] !text-white font-bold' htmlType="submit">
              Add Coupon
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddCoupon;
