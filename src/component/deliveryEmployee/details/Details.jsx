import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { FaCamera } from "react-icons/fa";
import './Details.css'
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



const Details = () => {
  const navigate = useNavigate()
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
  const handleUpdateEmployee = () => {
    navigate("/updateEmployee");
  };

  return (
  <div className='px-12'>
    <h1 className='border-none text-[#193664] font-bold text-2xl mt-8 py-6'>
     Details
    </h1>
      <div className='xl:w-[1440px]'>
      
      <Form className='mx-auto' name="form_item_path" layout="vertical" onFinish={onFinish}>
    
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-6'>
          <MyFormItem name="userName" label="User Name">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          {/* <MyFormItem name="password" label="Password">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem> */}
           <MyFormItem name="phoneNumber" label="Phone Number">
          <Input size='large' style={{ width: '500px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          </div>
        </MyFormItemGroup>
        <MyFormItemGroup prefix={['name']}>
          <div className=''>
         
          <MyFormItem name="address" label="Address">
          <Input size='large' style={{ width: '1026px', height: '56px', borderColor: "#193664" }}/>
          </MyFormItem>
          
          </div>
        </MyFormItemGroup>
    </Form>

    <div className="flex gap-6 ">
          <Button className="w-48 h-12 rounded-xl custom-delete-button ">
            Delete
          </Button>
          <Button
            onClick={handleUpdateEmployee}
            className="w-48 h-12 rounded-xl custom-Edit-button"
          >
            Edit
          </Button>
        </div>
    </div>
  </div>
  );

}


export default Details;