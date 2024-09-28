// import React, { useState } from 'react';
// import { Button, Form, Input, Select, Upload } from 'antd';
// import { FaCamera } from "react-icons/fa";
// import './AddProduct.css'
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import { useAllCategoryQuery } from '../../redux/features/category/getAllCategory';
// import { useAddProductMutation } from '../../redux/features/product/addProduct';
// import toast, { Toaster } from 'react-hot-toast';
// const MyFormItemContext = React.createContext([]);
// function toArr(str) {
//   return Array.isArray(str) ? str : [str];
// }
// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
//   return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
// };



// const MyFormItem = ({ name, ...props }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//   return <Form.Item name={concatName} {...props} />;
// };



// const AddProduct = () => {
//   const naviate = useNavigate()

 

//  const {data:allCategory} = useAllCategoryQuery()
//  console.log(allCategory?.data?.attributes?.results);
//  const [addProduct, {isLoading}] = useAddProductMutation()
//  const [fileList, setFileList] = useState([]);

//  // Handler for the file upload
//  const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

 
//  const handleFileChange = ({ fileList }) => {
//    setFileList(fileList);
//  };

//  // Function to handle form submission
//  const onFinish = async (values) => {
//   console.log('Form Values:', values);

//   // Prepare FormData
//   const formData = new FormData();
//   formData.append('name', values.name);
//   formData.append('price', values.price);
//   formData.append('categoryId', values.categoryId);
//   formData.append('loyaltyPrice', values.loyaltyPrice);  // Use correct key
//   formData.append('deliveryFee', values.deliveryFee);
//   formData.append('taxFee', values.taxFee);
//   formData.append('description', values.description);
//   formData.append('loyaltyGift', values.loyaltyGift);  // Use correct key

//   // Add uploaded file, if available
//   if (fileList && fileList.length > 0) {
//     formData.append('file', fileList[0].originFileObj); 
//   }

//   try {
//     const res = await addProduct(formData).unwrap();
//     console.log('Response:', res);

//     if (res?.code === 201) {
//       toast.success(res?.message);
//     } else {
//       toast.error('Something went wrong!');
//     }
//     naviate('/dashboard/product')
//   } catch (error) {
//     console.error('Submission Error:', error);
//     toast.error(error?.data?.message || 'Failed to add product');
//   }
// };



//   return (
//   <div>
//     <Toaster />
//     <div   className='border-none text-[#193664] flex gap-2 items-center cursor-pointer'>
//       <IoIosArrowBack />
//       Add Product
//     </div>
//       <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
      
//       <Form className="mx-auto" name="form_item_path" layout="vertical" onFinish={onFinish}>
//   <div className="flex space-x-6">
//     <MyFormItem name="name" label="Product Name">
//       <Input
//         size="large"
//         required
//         style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//       />
//     </MyFormItem>
//     <MyFormItem name="price" label="Price">
//       <Input
//         size="large"
//         required
//         style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//       />
//     </MyFormItem>
//   </div>

//   <div className="flex space-x-6">
//     <MyFormItem name="categoryId" label="Category Name">

//     <Select
//     size="large"
//     required
//     style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '1px' }}
//     placeholder="Select Category"
   
//   >
//     { 
//       allCategory?.data?.attributes?.results?.map(category =>  
//         <Select.Option key={category?._id} value={category?._id}>
//           {category?.name}  {/* Display the category name */}
//         </Select.Option>
//       )
//     }
//   </Select>

//     </MyFormItem>

//     <MyFormItem name="loyaltyPrice" label="Loyalty Price">
//   <Input
//     size="large"
//     required
//     style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//   />
// </MyFormItem>
//   </div>


//   <div className="flex space-x-6">
//     <MyFormItem name="deliveryFee" label="Delivery Fee">
//       <Input
//         size="large"
//         required
//         style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//       />
//     </MyFormItem>
//     <MyFormItem name="taxFee" label="Tax Fee">
//       <Input
//         size="large"
//         required
//         style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//       />
//     </MyFormItem>
//   </div>

//   <MyFormItem name="description" label="Description">
//     <Input
//       size="large"
//       required
//       style={{ width: '1026px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//     />
//   </MyFormItem>
//   <MyFormItem name="loyaltyGift" label="Loyalty Gift">
//   <Input
//     size="large"
//     required
//     style={{ width: '1026px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
//   />
// </MyFormItem>

//   {/* Upload */}
//   <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
//   <Upload
    
//     listType="picture-card"
//     fileList={fileList}
//     onChange={handleFileChange}
//   >
//     <button
//       style={{
//         border: 0,
//         background: 'none',
//       }}
//       type="button"
//     >
//       <FaCamera className="text-6xl text-[#193664]" />
//       <div style={{ marginTop: 8 }}>{/* Upload */}</div>
//     </button>
//   </Upload>
// </Form.Item>


//   <div className="update-button border-t-2 border-[#193664] py-4">
//     <Button className="w-[860px] h-14 !bg-[#193664] !text-white font-bold" htmlType="submit">
//       Add Product
//     </Button>
//   </div>
// </Form>



//     </div>
//   </div>
//   );

// }


// export default AddProduct;

import React, { useState } from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import { FaCamera } from "react-icons/fa";
import './AddProduct.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useAllCategoryQuery } from '../../redux/features/category/getAllCategory';
import { useAddProductMutation } from '../../redux/features/product/addProduct';
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

const AddProduct = () => {
  const navigate = useNavigate();
  const { data: allCategory } = useAllCategoryQuery();
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [fileList, setFileList] = useState([]);

  // Handler for the file upload
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  // Function to handle form submission
  const onFinish = async (values) => {
    console.log('Form Values:', values); // Log form values
    console.log('Delivery Fee:', values.deliveryFee);
    console.log('Tax Fee:', values.taxFee);

    // Prepare FormData
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('categoryId', values.categoryId);
    formData.append('loyaltyPrice', values.loyaltyPrice);
    formData.append('deliveryFee', values.deliveryFee);
    formData.append('taxFee', values.taxFee);
    formData.append('description', values.description);
    formData.append('loyaltyGift', values.loyaltyGift);

    // Add uploaded file, if available
    if (fileList && fileList.length > 0) {
      formData.append('file', fileList[0].originFileObj);
    }

    try {
      const res = await addProduct(formData).unwrap();
      console.log('Response:', res);

      if (res?.code === 201) {
        toast.success(res?.message);
        navigate('/dashboard/product');
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error(error?.data?.message || 'Failed to add product');
    }
  };

  return (
    <div>
      <Toaster />
      <div className='border-none text-[#193664] flex gap-2 items-center cursor-pointer'>
        <IoIosArrowBack />
        Add Product
      </div>
      <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
        <Form className="mx-auto" name="form_item_path" layout="vertical" onFinish={onFinish}>
          <div className="flex space-x-6">
            <MyFormItem name="name" label="Product Name">
              <Input
                size="large"
                required
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
            <MyFormItem name="price" label="Price">
              <Input
                size="large"
                required
                type="number" // Set input type to number
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
          </div>

          <div className="flex space-x-6">
            <MyFormItem name="categoryId" label="Category Name">
              <Select
                size="large"
                required
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '1px' }}
                placeholder="Select Category"
              >
                {allCategory?.data?.attributes?.results?.map(category =>
                  <Select.Option key={category?._id} value={category?._id}>
                    {category?.name}  {/* Display the category name */}
                  </Select.Option>
                )}
              </Select>
            </MyFormItem>

            <MyFormItem name="loyaltyPrice" label="Loyalty Price">
              <Input
                size="large"
                required
                type="number" // Set input type to number
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
          </div>

          <div className="flex space-x-6">
            <MyFormItem name="deliveryFee" label="Delivery Fee">
              <Input
                size="large"
                required
                type="number" // Set input type to number
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
            <MyFormItem name="taxFee" label="Tax Fee">
              <Input
                size="large"
                required
                type="number" // Set input type to number
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
          </div>

          <MyFormItem name="description" label="Description">
            <Input
              size="large"
              required
              style={{ width: '1026px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
            />
          </MyFormItem>

          <MyFormItem name="loyaltyGift" label="Loyalty Gift">
            <Input
              size="large"
              required
              style={{ width: '1026px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
            />
          </MyFormItem>

          {/* Upload */}
          <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleFileChange}
            >
              <button
                style={{
                  border: 0,
                  background: 'none',
                }}
                type="button"
              >
                <FaCamera className="text-6xl text-[#193664]" />
                <div style={{ marginTop: 8 }}>{/* Upload */}</div>
              </button>
            </Upload>
          </Form.Item>

          <div className="update-button border-t-2 border-[#193664] py-4">
            <Button 
            loading = {isLoading}
            className="w-[860px] h-14 !bg-[#193664] !text-white font-bold" htmlType="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;
