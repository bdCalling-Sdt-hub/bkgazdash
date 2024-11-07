import React from 'react';
import { Form, Input, Button } from 'antd';
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useAddCategoryMutation } from '../../redux/features/category/addCategory';
import toast from 'react-hot-toast';

const AddCategory = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

const [addcaregory] = useAddCategoryMutation()

  const onFinish = async(values) => {
    console.log('Submitted values:', values);
   try{
    const res = await addcaregory(values).unwrap();
     if(res?.code == 201){
      toast.success(res?.message)
     }
     setTimeout(() => {
      navigate('/dashboard/product')
     }, 1000);
   }catch(error){
    console.log(error)
   }
  };

  return (
    <div className='mt-12'>
       <h1 className='mt-12 text-xl font-medium flex items-center'><MdArrowBackIos onClick={() => navigate('/dashboard/product')} className='cursor-pointer' />  AddCategory</h1>
    <div className="p-6 bg-white rounded-lg shadow-md">
     
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="mt-8 w-60"
      >
        <Form.Item
          name="name"
          label="Category Name"
          rules={[{ required: true, message: 'Please enter a category name'}]}
        >
          <Input
            placeholder="Enter category name"
            className="border-gray-300 h-8 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#193664] border-none text-white"
          >
            Add 
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddCategory;
