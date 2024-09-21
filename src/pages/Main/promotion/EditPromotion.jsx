import React, { useState, useEffect } from 'react';
import { Button, Form, Upload } from "antd";
import { TbCameraPlus } from "react-icons/tb";
import './Promotion.css';
import TextArea from "antd/es/input/TextArea";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useGetPromotionByIdQuery, useUpdatePromotionMutation } from '../../../redux/features/promotion/updatePromotion';
import toast, { Toaster } from 'react-hot-toast';
import { useEditPromotionMutation } from '../../../redux/features/promotion/editPromotion';
import baseUrl from '../../../redux/api/baseUrl';

const EditPromotion = () => {
//   const { id } = useParams(); // Get the promotion ID from the URL
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation()
 const {promotion} = location.state || {}
 console.log(promotion);
 const id = promotion?._id;
    

  const [updatePromotion, {isLoading}] = useEditPromotionMutation()

  useEffect(() => {
    if (promotion) {
      setImageUrl(baseUrl + promotion.image); // Preload the image URL
    }
  }, [promotion]);

  const onFinish = async (value) => {
    console.log(value.description, imageFile);
      
    const formData = new FormData();
    formData.append('description', value.description);
    if (imageFile) {
      formData.append('file', imageFile);
    }
  
    try {
      const res = await updatePromotion({ id, data: formData }).unwrap(); // Note the "data" key here
    //   console.log(res);
      
      if (res?.code === 200) {
        toast.success(res?.message);
    }
    setTimeout(() => {
        
        navigate('/dashboard/promotion');
    }, 1000);
    } catch (error) {
      console.error(error?.data?.message);
      toast.error("Failed to update promotion.");
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
    fileList = fileList.slice(-1); // Only keep the latest file
    if (fileList[0] && fileList[0].originFileObj) {
      const imagePreviewUrl = URL.createObjectURL(fileList[0].originFileObj);
      setImageUrl(imagePreviewUrl);
      setImageFile(fileList[0].originFileObj);
    } else {
      setImageUrl(null);
      setImageFile(null);
    }
  };

//   if (isFetching) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="w-[79vw]">
        <Toaster />
      <h1 className="text-xl font-bold py-8">Edit Promotion</h1>
      <div className='py-4'>
        <Form
          className='ant-upload'
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            description: promotion?.description || '', // Preload the description
          }}
        >
          {/* Upload */}
          <Form.Item
            label=""
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture-card"
              showUploadList={false}
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
              style={{ width: "1000px", maxWidth: "1000px", padding: "20px" }}
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
            //   loading={isLoading}
            >
              Update Promotion
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditPromotion;
