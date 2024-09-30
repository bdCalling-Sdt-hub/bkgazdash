import { Button, Form, Input, Upload } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import { TbCameraPlus } from "react-icons/tb";
 
 
 
import baseUrl from "../../../redux/api/baseUrl";
 
import toast, { Toaster } from "react-hot-toast";
import { useEditProfileMutation } from "../../../redux/features/profile/editProfile";
import { useGetProfileQuery } from "../../../redux/features/profile/getProfile";

const EditManagerProfile = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null); 

  const { data: profile } = useGetProfileQuery(id);
  // console.log(profile);
  const [editProfile, {isLoading}] = useEditProfileMutation()
  // Set initial values for the form
  const initialValues = {
    name: profile?.data?.attributes?.fullName || '',
    email: profile?.data?.attributes?.email || '',
    phone: profile?.data?.attributes?.phoneNumber || '', // Include phone in initial values
  };

  useEffect(() => {
    if (profile) {
      setPhone(profile.data.attributes.phoneNumber);
      // Set the initial image URL if it exists
      const existingImageUrl = baseUrl + profile?.data?.attributes?.image; // Assuming the profile data contains an imageUrl field
      if (existingImageUrl) {
        setImageUrl(existingImageUrl);
      }
    }
  }, [profile]);

  const handleBackSettings = () => {
    navigate('/managerlayout/managerpersonalInformation');
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleChange = (info) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);

    // Check if there's an existing uploaded file before changing
    if (uploadedFile) {
      console.log("Previous image file before change:", uploadedFile);
    }

    if (fileList[0] && fileList[0].originFileObj) {
      const imagePreviewUrl = URL.createObjectURL(fileList[0].originFileObj);
      setImageUrl(imagePreviewUrl);
      setUploadedFile(fileList[0].originFileObj); 
    } else {
      setImageUrl(null);
      setUploadedFile(null); 
    }
  };

  const onFinish = async(values) => {
 
    console.log(uploadedFile);
    const formData = new FormData();

    formData.append("fullName", values.name);
    formData.append("phoneNumber", values?.phone);
    formData.append("email", values?.email); 
    formData.append("file", uploadedFile);
  

   try{
    const res = await editProfile({formData, id}).unwrap();
    // console.log(res);
    if(res?.code == 200){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate('/managerlayout/managerpersonalInformation')
    }, 1000);

    
   }catch(error){
    console.log(error?.data);
    
   }
    
    // console.log("Profile Data: ", profileData); // Log all profile data
  };

  return (
    <div className="2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
      <div>
        <Toaster />
        <div onClick={handleBackSettings} className='border-none text-[#193664] flex gap-2 items-center cursor-pointer'>
          <IoIosArrowBack />
          Edit Profile
        </div>
      </div>

      <div className="mt-12 flex">
        <div className="w-1/12">
          <div className="border border-[#193664] w-[300px] h-[365px] py-6 rounded-md">
            <div className="rounded-full items-center w-[300px] h-[300px] flex flex-col justify-center">
              <Form.Item
                label=""
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  showUploadList={false}
                  onChange={handleChange}
                  className="custom-upload"
                >
                  {imageUrl ? (
                    <div className='relative w-60 h-60 custom-upload'>
                      <img
                        src={imageUrl}
                        alt="Uploaded"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', overflow: "hidden" }}
                      />
                      <TbCameraPlus className="text-6xl absolute top-[30%] left-[40%] opacity-60 text-white" />
                    </div>
                  ) : (
                    <div
                      className="custom-upload"
                      style={{
                        width: '80%',
                        height: '190px',
                        display: "flex",
                        margin: 'auto',
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f0f0f0",
                        borderRadius: '50%'
                      }}
                    >
                      <TbCameraPlus className="text-6xl text-[#193664]" />
                    </div>
                  )}
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <Form
            name="userProfile"
            labelCol={{ span: 25 }}
            wrapperCol={{ span: 60 }}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
            className="w-[300px] mx-auto"
          >
            <Form.Item
              name="name"
              label={
                <span className="text-secondary text-[12px] font-medium">
                  Name
                </span>
              }
              rules={[{
                required: false,
                message: "Please write your name",
              }]}>

              <Input
                size="large"
                placeholder="Name"
                style={{
                  border: "2px solid #193664",
                  height: "52px",
                  width: "720px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                  paddingLeft: "6px"
                }}
                bordered={false}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{
                type: "email",
                required: true,
                message: "Please write your email",
              }]}>
              <Input
                size="large"
                placeholder="Email"
                style={{
                  border: "2px solid #193664",
                  height: "52px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                  width: "720px",
                  paddingLeft: "6px"
                }}
                bordered={false}
              />
            </Form.Item>

            <Form.Item
              name="phone" // Ensure phone is included in the form
              label="Phone"
            >
              <PhoneInput
                style={{
                  border: "2px solid #193664",
                  width: "720px",
                  borderColor: "#193664",
                  borderRadius: "10px",
                }}
                inputStyle={{
                  height: "50px",
                  borderRadius: "10px",
                }}
                country={'bd'}
                value={phone}
                onChange={setPhone}  
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
                className="w-[300px] h-[56px] py-4 mt-2 text-white hover:border-none border-none rounded-lg"
              >
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditManagerProfile;
