import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import { FaCamera } from "react-icons/fa";
// import './EditProduct.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import { useAllCategoryQuery } from '../../redux/features/category/getAllCategory';
 import toast, { Toaster } from 'react-hot-toast';
import { useSingleProductQuery } from '../../redux/features/product/singleProduct';
import { useUpdateProductMutation } from '../../redux/features/product/updateProduct';
import baseUrl from '../../redux/api/baseUrl';

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

const UpdateProduct = () => {
  const { id } = useParams(); 
  console.log(id);
  
  const navigate = useNavigate();

  const { data: allCategory } = useAllCategoryQuery();
  const { data: productData, isLoading: isLoadingProduct } = useSingleProductQuery(id);
  console.log(productData);
  
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const [fileList, setFileList] = useState([]);

  // Set form with fetched product data
  useEffect(() => {
    if (productData) {
      form.setFieldsValue({
        name: productData?.data?.attributes?.name,
        price: productData?.data?.attributes?.price,
        categoryId: productData?.data?.attributes?.categoryId?._id, // Set categoryId to the actual ID
        loyaltyPrice: productData?.data?.attributes?.loyaltyPrice,
        deliveryFee: productData?.data?.attributes?.deliveryFee,
        taxFee: productData?.data?.attributes?.taxFee,
        description: productData?.data?.attributes?.description,
        loyaltyGift: productData?.data?.attributes?.loyaltyGift,
      });
  
      // Set the image file list from the product data if available
      if (productData?.data?.attributes?.image) {
        setFileList([
          {
            uid: '-1',
            name: 'image.png', // You can replace this with the actual image name
            status: 'done',
            url: baseUrl + productData?.data?.attributes?.image, // Assuming the image URL is available here
          },
        ]);
      }
    }
  }, [productData]);
  
  
  // Ant Design form instance
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const onFinish = async (values) => {
    console.log('Form Values:', values);

    // Prepare FormData for updating the product
    const formData = new FormData();
    formData.append('name', values.name);
formData.append('price', values.price);
formData.append('categoryId', values.categoryId);
formData.append('loyaltyPrice', values.loyaltyPrice);
formData.append('deliveryFee', values.deliveryFee);
formData.append('taxFee', values.taxFee);
formData.append('description', values.description);
formData.append('loyaltyGift', values.loyaltyGift);


if (fileList && fileList.length > 0) {
  formData.append('file', fileList[0].originFileObj);
}


try {
  const res = await updateProduct({ id, formData }).unwrap();
  console.log('Update Response:', res);

  if (res?.code === 200) {
    toast.success(res?.message);
    // Optionally, refetch or reload the updated product data
    navigate('/dashboard/product');
  } else {
    toast.error('Something went wrong!');
  }
} catch (error) {
  console.error('Submission Error:', error);
  toast.error(error?.data?.message || 'Failed to update product');
}
  };

  return (
    <div>
      <Toaster />
      <div className="border-none text-[#193664] flex gap-2 items-center cursor-pointer">
        <IoIosArrowBack />
        Edit Product
      </div>
      <div className="xl:w-[1440px] items-center justify-center py-24 flex">
        <Form
          className="mx-auto"
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={productData}
        >
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
                {allCategory?.data?.attributes?.results?.map(category => (
                  <Select.Option key={category?._id} value={category?._id}>
                    {category?.name}
                  </Select.Option>
                ))}
              </Select>
            </MyFormItem>

            <MyFormItem name="loyaltyPrice" label="Loyalty Price">
              <Input
                size="large"
                required
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
          </div>

          <div className="flex space-x-6">
            <MyFormItem name="deliveryFee" label="Delivery Fee">
              <Input
                size="large"
                required
                style={{ width: '500px', height: '56px', borderRadius: '8px', paddingLeft: '10px', borderColor: '#193664' }}
              />
            </MyFormItem>
            <MyFormItem name="taxFee" label="Tax Fee">
              <Input
                size="large"
                required
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
              </button>
            </Upload>
          </Form.Item>

          <div className="update-button border-t-2 border-[#193664] py-4">
            <Button className="w-[860px] h-14 !bg-[#193664] !text-white font-bold" htmlType="submit" loading={isLoading}>
              Update Product
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProduct;
