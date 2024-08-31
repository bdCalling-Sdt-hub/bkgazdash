import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { FaCamera } from "react-icons/fa";
import './AddProduct.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
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



const UpdateProcuct = () => {
  const naviate = useNavigate();
  const [form] = Form.useForm();
  // const selectedProduct = useSelector((state) => state.product.selectedProduct);
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
    naviate('/product')
  }


  return (
  <div>
    <div onClick={handleAddProduct} className='flex gap-2 cursor-pointer items-center  border-none text-[#193664]'>
      <IoIosArrowBack />
      Add Product
    </div>
      <div className='xl:w-[1440px] items-center justify-center py-24 flex'>
      
      <Form className='mx-auto' name="form_item_path" layout="vertical" onFinish={onFinish}>
    
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-4'>
          <MyFormItem name="productName" label="Product Name">
          <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
          </MyFormItem>
          <MyFormItem name="price" label="Price">
          <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
          </MyFormItem>
          </div>
        </MyFormItemGroup>
        <MyFormItemGroup prefix={['name']}>
          <div className='flex space-x-4'>
          <MyFormItem name="categoryName" label="Category Name">
          <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
          </MyFormItem>
          <MyFormItem name="loyalityPrice" label="Loyality Price">
          <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
          </MyFormItem>
          
          </div>
        </MyFormItemGroup>

     <MyFormItemGroup>
      
     <MyFormItem name="description" label="Description">
        <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
        </MyFormItem>
     <MyFormItem name="loyalityGift" label="Loyality Gift">
        <Input size='large' style={{ width: '500px', height: "56px", borderColor: "#193664" }}/>
        </MyFormItem>
     </MyFormItemGroup>

{/* Upload */}
<Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              
              }}
              type="button"
            >
             <FaCamera className='text-6xl text-[#193664]' />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                {/* Upload */}
              </div>
            </button>
          </Upload>
        </Form.Item>




      <div className='update-button border-t-2 border-[#193664] py-4'>
      <Button className='w-[860px] h-14 bg-[#193664] text-white font-bold'  htmlType="submit">
     Update Product
      </Button>
      </div>
    </Form>
    </div>
  </div>
  );

}


export default UpdateProcuct;