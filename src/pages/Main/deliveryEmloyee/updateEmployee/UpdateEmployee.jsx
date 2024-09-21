// import React, { useContext, useMemo } from 'react';
// import { Button, Form, Input, Upload } from 'antd';
// import { FaCamera } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSingleEmployeeQuery } from '../../../../redux/features/deliveryEmploye/getSignlEmployee';
// import './UpdateEmployee.css';

// const MyFormItemContext = React.createContext([]);

// function toArr(str) {
//   return Array.isArray(str) ? str : [str];
// }

// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = useContext(MyFormItemContext);
//   const concatPath = useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };

// const MyFormItem = ({ name, ...props }) => {
//   const prefixPath = useContext(MyFormItemContext);
//   const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//   return <Form.Item name={concatName} {...props} />;
// };

// const UpdateEmployee = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
  
//   // Fetch single employee data
//   const { data: signlEmploye } = useSingleEmployeeQuery(id);
   
//   let signlEmployee = signlEmploye?.data?.attributes;
//   console.log(signlEmployee?.fullName);
  

//   const onFinish = (values) => {
//     console.log('Submitted Values:', values);
//   };

//   const normFile = (e) => {
//     return Array.isArray(e) ? e : e?.fileList;
//   };

//   return (
//     <div>
//       {/* Header Navigation */}
//       <div className='border-none text-[#193664] flex items-center gap-2 cursor-pointer' onClick={() => navigate('/dashboard/deliveryEmployee/detialsDeliveryEmployee')}>
//         <IoIosArrowBack />
//         Update Employee
//       </div>

//       <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
//         <Form
//           className='mx-auto'
//           name="form_item_path"
//           layout="vertical"
//           onFinish={onFinish}
//           initialValues={{
//             userName: signlEmployee?.fullName,
//             phoneNumber: signlEmployee?.phoneNumber,
//             address: signlEmployee?.address,
//           }}
//         >
         
//           <MyFormItemGroup prefix={['name']}>
//             <div className='flex space-x-6'>
//               <MyFormItem name="fullName" label="User Name">
//                 <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }} />
//               </MyFormItem>
//               <MyFormItem name="phoneNumber" label="Phone Number">
//                 <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }} />
//               </MyFormItem>
//             </div>
//           </MyFormItemGroup>

        
//           <MyFormItemGroup>
//             <MyFormItem name="address" label="Address">
//               <Input size='large' style={{ width: '1026px', height: "56px", borderColor: "#193664" }} />
//             </MyFormItem>
//           </MyFormItemGroup>

        
//           <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
//             <Upload action="/upload.do" listType="picture-card">
//               <button style={{ border: 0, background: 'none' }} type="button">
//                 <FaCamera className='text-6xl text-[#193664]' />
//               </button>
//             </Upload>
//           </Form.Item>

           
//           <div className='update-button border-t-2 border-[#193664] py-4'>
//             <Button className='w-[860px] h-14 bg-[#193664] text-white font-bold' htmlType="submit">
//               Update Employee
//             </Button>
//           </div>
//         </Form>
        
//       </div>
//     </div>
//   );
// }

// export default UpdateEmployee;

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IoIosArrowBack } from 'react-icons/io';
import { useSingleEmployeeQuery } from '../../../../redux/features/deliveryEmploye/getSignlEmployee';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../../../redux/api/baseUrl';
import { useEditEmployeeMutation } from '../../../../redux/features/deliveryEmploye/editEployee';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const UpdateEmployee = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Fetch single employee data
  const { data: signlEmploye } = useSingleEmployeeQuery(id);
  // console.log(signlEmploye);

  const [ editEployee, ] = useEditEmployeeMutation()
  
  let signlEmployee = signlEmploye?.data?.attributes;

  // Set initial values when employee data is fetched
  useEffect(() => {
    if (signlEmployee) {
      form.setFieldsValue({
        fullName: signlEmployee.fullName,
        phoneNumber: signlEmployee.phoneNumber,
        address: signlEmployee.address,
      });
      // Set existing image URL and file list if there's a default image
      if (signlEmployee.image) {
        const imageUrl = baseUrl + signlEmployee.image;
        setExistingImageUrl(imageUrl);
        setFileList([{ uid: '-1', name: 'image.png', status: 'done', url: imageUrl }]);
      }
    }
  }, [signlEmployee, form]);

  // Handle image file upload
  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // Handle form submission
  const onFinish = async(values) => {
    // If no new file uploaded, retain existing image URL
    if (fileList.length === 0) {
      values.file = existingImageUrl;
    } else {
      values.file = fileList[0].originFileObj;
    }
    console.log('Form Values:', values);
    console.log(values.file);
    
    try{
      const formData = new FormData()
      formData.append('fullName', values?.fullName)
      formData.append('phoneNumber', values?.phoneNumber)
      formData.append('address', values?.address)
      if(fileList){
        formData.append('file', values?.file)
      }
const res = await editEployee({id , data: formData}).unwrap();
  
    if(res?.code == 200){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate('/dashboard/deliveryEmployee')
    }, 1000); 
    }catch(error){
      console.log(error);
      
    }
    // Handle your submit logic here, e.g., send values to your API
  };

  // Image upload props
  const uploadProps = {
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG files!');
        return Upload.LIST_IGNORE;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    fileList,
    onChange: handleUploadChange,
  };

  return (
    <div>
      <Toaster />
      <div className='border-none text-[#193664] flex items-center gap-2 cursor-pointer' onClick={() => navigate('/dashboard/deliveryEmployee/detialsDeliveryEmployee')}>
        <IoIosArrowBack />
        Update Employee      
      </div>

      <div className='xl:w-[1140px] items-center justify-center py-12 flex'> 
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="User Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input style={{ width: '700px', paddingLeft: '12px', height: "56px", borderColor: "#193664" }} />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input style={{ width: '700px', paddingLeft: '12px', height: "56px", borderColor: "#193664" }} />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input style={{ width: '700px', paddingLeft: '12px', height: "56px", borderColor: "#193664" }} />
            </Form.Item>

            <Form.Item
              label="Upload Image"
              name="file"
            >
              <Upload
                {...uploadProps}
                listType="picture-card"
                maxCount={1}
              >
                <Button className='!bg-[#193664] !text-white' icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            
            <Form.Item>
              <Button className='w-[860px] h-14 !bg-[#193664] !text-white font-bold' htmlType="submit" block>
                Update Employee
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
