import React from 'react';
import { Button, Form, Image, Input, Upload } from 'antd';
import { FaCamera } from "react-icons/fa";
import './Details.css'
 
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryChart from '../deliveryChart/DeliveryChart';
import baseUrl from '../../../redux/api/baseUrl';
import { MdArrowBack, MdArrowBackIos } from 'react-icons/md';
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



const Details = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const { employeeDetails } = location.state || {};
  console.log(employeeDetails);
  
  const onFinish = (value) => {
    console.log(value);
  };


  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
    
  };

  const handleAddProduct = () => {
    navigate('/categories')
  }
  // const handleUpdateEmployee = (employeeDetails) => {
  //   navigate(`/dashboard/deliveryEmployee/detialsDeliveryEmployee/updateEmployee/${employeeDetails?._id}`);
  // };

  return (
    <div>
        <div onClick={() => navigate('/dashboard/deliveryEmployee')} className='flex items-center gap-2 cursor-pointer'>

         <MdArrowBackIos />
        <h1>back</h1>
        </div>
       <div className="flex justify-center w-[79vw]">
        <div className="flex items-center justify-center gap-6 w-4/12">
          {/* Employee Img */}
          <div className="bg-[#E7F5FB] p-8">
            <div className=" rounded-full h-48 w-48 overflow-hidden">
              <img src={baseUrl + employeeDetails?.image} width={200} height={250} />
            </div>
            <h1 className="py-4 text-center">{employeeDetails?.fullName}</h1>
            <h1 className=" text-center">{employeeDetails?.role}</h1>
          </div>
          {/* Button */}
        </div>
        {/* Employee chart */}
        <div className="w-8/12">
          <DeliveryChart id = {employeeDetails._id} />
        </div>
      </div>
  <div className='px-12'>
    <h1 className='border-none text-[#193664] font-bold text-2xl mt-8 py-6'>
     Details
    </h1>
      <div className='xl:w-[1440px]'>
      
      <Form className='mx-auto' name="form_item_path" layout="vertical" onFinish={onFinish}>
    
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-6'>
          <MyFormItem name="userName" label="User Name">
          <Input size='large' defaultValue={employeeDetails?.fullName} style={{ width: '500px', height: '46px', paddingLeft: '12px', borderColor: "#193664" }} readOnly/>
          </MyFormItem>
          {/* <MyFormItem name="password" label="Password">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem> */}
           <MyFormItem name="phoneNumber" label="Phone Number">
          <Input size='large'readOnly defaultValue={employeeDetails?.phoneNumber} style={{ width: '500px',paddingLeft: '12px', height: '46px', borderColor: "#193664" }}/>
          </MyFormItem>
          </div>
        </MyFormItemGroup>
        <MyFormItemGroup prefix={['name']}>
          <div className=''>
         
          <MyFormItem name="address" label="Address">
          <Input size='large' readOnly defaultValue={employeeDetails?.address} style={{ width: '1026px',paddingLeft: '12px', height: '46px', borderColor: "#193664" }}/>
          </MyFormItem>
          
          </div>
        </MyFormItemGroup>
    </Form>

    <div className="flex gap-6 ">
          {/* <Button className="w-48 h-12 rounded-xl custom-delete-button ">
            Delete
          </Button> */}
          <Button
            onClick={() => navigate(`updateEmployee/${employeeDetails?._id}`)}
            className="w-48 h-12 rounded-xl custom-Edit-button"
          >
            Edit
          </Button>
        </div>
    </div>
  </div>
    </div>
  );

}


export default Details;