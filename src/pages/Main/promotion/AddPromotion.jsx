import React, { useState } from 'react';
import { Button, Form, Upload } from "antd";
import { TbCameraPlus } from "react-icons/tb";
import './Promotion.css';
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import { useAddPromotionMutation } from '../../../redux/features/promotion/createPromotion';
import toast from 'react-hot-toast';

const AddPromotion = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Add this state for the image file
  const navigate = useNavigate();

  const [addpromotion, {isLoading}] = useAddPromotionMutation()

  const onFinish = async (value) => {

    // console.log("Description:", value.description);
    // console.log("Image URL:", imageUrl);
    // console.log("file:", imageFile);

    const formData = new FormData();
    
    // Append the description and image file to the FormData object
    formData.append('description', value.description);
    if (imageFile) {
      formData.append('file', imageFile); 
    }
     try{
      const res = await addpromotion(formData).unwrap()
      console.log("ress>>>>>>>>>>>>>>>>>>>>d",res);
      
      if(res?.code == 201){
        toast.success(res?.message)
      }
      navigate('/dashboard/promotion')
     }catch(error) {
      console.log(error?.data?.message);
      
     } 

      
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleChange = (info) => {
    let fileList = [...info.fileList];

    // We only keep the latest file in the list to replace the previous image
    fileList = fileList.slice(-1);

    if (fileList[0] && fileList[0].originFileObj) {
      const imagePreviewUrl = URL.createObjectURL(fileList[0].originFileObj);
      setImageUrl(imagePreviewUrl);
      setImageFile(fileList[0].originFileObj); // Save the image file
    } else {
      setImageUrl(null);
      setImageFile(null); // Reset the image file if none is selected
    }
  };
 
  return (
    <div className="w-[79vw]">
      <h1 className="text-xl font-bold py-8">Create Promotion</h1>
      <div className='py-4'>
        <Form
          className='ant-upload'
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Upload */}
          <Form.Item
            label=""
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload 
              listType="picture-card"
              showUploadList={false} // Hide the default upload list
              onChange={handleChange}
              beforeUpload={() => false} // Prevent automatic upload
              className="ant-upload-select"
            >
              {imageUrl ? (
                <div className='relative overflow-hidden max-h-72'>
                  <img 
                    src={imageUrl} 
                    alt="Uploaded" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', overflow: "hidden" }} 
                  />
                  <TbCameraPlus className="text-6xl absolute top-[40%] left-[40%] opacity-60 text-white" />
                </div>
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: '4px'
                  }}
                >
                  <TbCameraPlus className="text-6xl text-[#193664]" />
                </div>
              )}
            </Upload>
          </Form.Item>

          {/* TextArea */}
          <Form.Item name="description">
            <TextArea 
              placeholder='Description'
              rows={2} 
              style={{ width: "1000px", maxWidth: "1000px", padding: "20px" }} // Adjust the width and height
            />
          </Form.Item>
        
          <Form.Item>
            <Button
              style={{
                backgroundColor: "#193664",
                color: "#fff",
                height: "56px",
              }}
              htmlType="submit"
              className="w-[353px] h-[57px] py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
            >
              Create post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddPromotion;
