import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import './UpdateCoupon.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
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



const UpdateCoupon = () => {
  const naviate = useNavigate()
  const onFinish = (value) => {
    console.log(value);
  };


  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
    
  };

  const handleEmployee = () => {
    naviate('/dashboard/settings/discountCoupon')
  }


  return (
  <div>
    <div onClick={handleEmployee} className='flex gap-2 items-center cursor-pointer border-none text-[#193664]'>
      <IoIosArrowBack />
Coupon
    </div>
      <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
      
      <Form className='mx-auto' name="form_item_path" layout="vertical" onFinish={onFinish}>
    
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-4'>
          <MyFormItem name="companyName" label="Company Name">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          <MyFormItem name="disCount" label="Discount">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          </div>
        </MyFormItemGroup>
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-4'>
          <MyFormItem name="startDate" label="Start Date">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          <MyFormItem name="endDate" label="End Date">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
        
          </div>
        </MyFormItemGroup>

     <MyFormItemGroup>
      
     <MyFormItem name="timeUse" label="Time use">
        <Input size='large'style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
        </MyFormItem>
     
     </MyFormItemGroup>

      <div className='update-button border-t-2 border-[#193664] py-4'>
      <Button className='w-[860px] h-14 bg-[#193664] text-white font-bold'  htmlType="submit">
Submit
      </Button>
      </div>
    </Form>
    </div>
  </div>
  );

}


export default UpdateCoupon;