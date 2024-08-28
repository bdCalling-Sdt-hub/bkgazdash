import React, { useState } from 'react';
import { Button, Form, Upload } from "antd";
import { FaCamera } from "react-icons/fa";
import './Promotion.css';
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";

const Promotion = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const onFinish = (value) => {
    console.log(value);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleChange = ({ fileList }) => {
    if (fileList && fileList[0] && fileList[0].originFileObj) {
      const imagePreviewUrl = URL.createObjectURL(fileList[0].originFileObj);
      setImageUrl(imagePreviewUrl);
    } else {
      setImageUrl(null);
    }
  };

  const handleSeePost = () => {
    navigate('/seePost');
  };

  return (
    <div className="w-[79vw]">
      <h1 className="text-xl font-bold py-8">Create Promotion</h1>
      <div>
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
              action="/upload.do"
              listType="picture-card"
              showUploadList={false} // Hide the default upload list
              onChange={handleChange}
              className="ant-upload-select"
            >
              {imageUrl ? (
               
                <div className='relative'>
                 <img 
                  src={imageUrl} 
                  alt="Uploaded" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', }} 
                />
                  <FaCamera className="text-6xl text-[#193664] absolute top-[40%] left-[40%] opacity-50" />
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
                  <FaCamera className="text-6xl text-[#193664]" />
                </div>
              )}
            </Upload>
          </Form.Item>

          {/* TextArea */}
          <Form.Item name="description" label="Description">
            <TextArea 
              rows={7} 
              style={{ width: "1000px", maxWidth: "1000px", padding: "0" }} // Adjust the width and height
            />
          </Form.Item>
        
          <Form.Item>
            <Button
              onClick={handleSeePost}
              style={{
                backgroundColor: "#193664",
                color: "#fff",
                height: "56px",
              }}
              htmlType="submit"
              className="w-[300px] h-[56px] py-4 mt-2 text-white hover:border-none border-none rounded-lg"
            >
              Create post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Promotion;
