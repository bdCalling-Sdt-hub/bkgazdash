import { Button, Form, Image, Input, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import profileImg from '../../assets/Images/bkProfile.jpg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'
import './PersonalInformation.css'

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { TbCameraPlus } from "react-icons/tb";



const PersonalInformation = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

 

  const handleBackSettings = () => {
    navigate('/dashboard/settings');
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
    } else {
      setImageUrl(null);
    }
  };

  return (
    <div className="2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
      
      <div>
        <div onClick={()=> navigate('/dashboard/settings')} className='border-none text-[#193664] flex gap-2 items-center cursor-pointer'>
          <IoIosArrowBack />
          Personal Information
        </div>
      </div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button
          onClick={() => navigate('/dashboard/editProfile')}
          type="primary"
          className="flex items-center bg-[#193664] w-[206px] h-[56px]"
        >
          <GoPlus className="mr-2" />
        Edit Profile
        </Button>
      </div>
      {/* Profile section */}
      <div className="mt-12 flex">
        <div className="w-1/12">
          <div className="border border-[#193664] w-[300px] h-[365px] py-6 rounded-md">
           
            <div className="  rounded-ful items-center w-[300px] h-[300px] flex flex-col justify-center">
              {/* <Image src={profileImg} height={100} width={100} />
            </div>
            <div className="text-center py-6">
              <h1 className="text-[#5C5C5C]">Profile</h1>
              <p className="text-xl py-2 text-[#333333] font-bold">Admin</p> */}
          
          
           {/* Upload */}
           <Form.Item
            label=""
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload 
              // listType="picture-card"
              showUploadList={false} // Hide the default upload list
              onChange={handleChange}
              // beforeUpload={() => false} // Prevent automatic upload
           className="custom-upload"
            >
              {imageUrl ? (
                <div className='relative w-60 h-60 custom-upload'>
                  <img 
                    src={imageUrl} 
                    alt="Uploaded" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', overflow: "hidden",  }} 
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
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            className="w-[300px]  mx-auto"
          >
            <Form.Item
              name="name"
              label={
                <span className="text-secondary text-[12px] font-medium">
                  Name
                </span>
              }
              rules={[
                {
                  required: false,
                  type: 'text',
                  message: "Please write your name",
                },
              ]}
            >
              {/* <PhoneInput
                      placeholder="Enter phone number"
                      international
                      countryCallingCodeEditable={false}
                      style={{
                        marginTop: "12px",
                        
                      }}
                      defaultCountry="US"
                      value={phoneNumber?.toString()}
                      onChange={setPhoneNumber}
                    /> */}
              <Input
                size="large"
                placeholder="Name"
                name="email"
                // prefix={
                //   <HiOutlineMailOpen
                //     className="mr-2 bg-secondary rounded-full p-[6px]"
                //     size={28}
                //     color="white"
                //   />
                // }
                style={{
                  border: "2px solid #193664",
                  height: "52px",
                  width: "720px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                  paddingLeft: "6px"
                }}
                required
                bordered={false}
              />
            </Form.Item>

            <Form.Item
              name="email"
              // label={
              //   <span className="text-secondary text-[12px] font-medium">
              //     Password
              //   </span>
              // }
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please write your email",
                },
              ]}
            >
              <Input
                size="large"
                // onChange={handleChange}
                placeholder="Email"
                name="current_password"
                prefix={
                  //
                  ""
                }
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

            <div className="">
              <div className="flex justify-between text-[#1397D5]">

                {/* <div>
                    <Link
                      to="/auth/forgot-password"
                      className="text-secondary font-medium hover:text-secondary"
                    >
                     Remember me
                    </Link>
                  </div> */}

              </div>
            </div>


            {/* Phone Input */}
            <Form.Item>
              <PhoneInput
                style={{
                  border: "2px solid #193664",
                  width: "720px",
                  borderColor: "#193664",
                  borderRadius: "10px",  
                  overflow: "hidden"
                }}
                inputStyle={{
                  height: "50px",
                  borderRadius: "10px",  
                  overflow: "hidden"
                }}
                country={'bd'}
                value={phone}
                onChange={setPhone} // Update the phone state
              />
            </Form.Item>


            <Form.Item>
              <Button
                // type="primary"
                style={{
                  backgroundColor: "#193664",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[300px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-lg"
              >
                Update Profile
              </Button>
              {/* <Link to="/dashboard"
              // type="primary"
              // htmlType="submit"
              className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
            >
              Log In
            </Link> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;


