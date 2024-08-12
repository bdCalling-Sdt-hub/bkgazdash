import { Button, Form, Image, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import profileImg from '../../assets/Images/bkProfile.jpg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'
import { useState } from "react";
import { BiBorderRadius } from "react-icons/bi";



const PersonalInformation = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  const handleBackSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
      <div >
        {/* <Button onClick={handleAddProduct} type="primary" className="flex items-center bg-[#193664] py- px-6">
          <PiNotePencilFill />
          Edit Profile
        </Button> */}
      </div>
      <div>
        <Button onClick={handleBackSettings} className='border-none text-[#193664]'>
          <IoIosArrowBack />
          Personal Information
        </Button>
      </div>
      {/* Profile section */}
      <div className="mt-12 flex">
        <div className="w-1/12">
          <div className="border-[#193664] border bg-[#E8EBF0] rounded-md items-center w-[300px] h-[365px] flex flex-col justify-center">
            <div className="rounded-full overflow-hidden h-[100px] w-[100px] mx-auto">
              <Image src={profileImg} height={100} width={100} />
            </div>
            <div className="text-center py-6">
              <h1 className="text-[#5C5C5C]">Profile</h1>
              <p className="text-xl py-2 text-[#333333] font-bold">Admin</p>
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
                  width: "720px"
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


