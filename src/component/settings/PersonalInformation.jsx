 


import { Button, Form, Image, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import profileImg from '../../assets/Images/bkProfile.jpg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import baseUrl from "../../redux/api/baseUrl";
import { useGetProfileQuery } from "../../redux/features/profile/getProfile";



const PersonalInformation = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState(''); 
  const user = JSON.parse(localStorage.getItem('user-update'));
  // console.log(user?.user);

  const {data: profile, } = useGetProfileQuery(user?.user?._id)
  // console.log(profile?.data?.attributes.phoneNumber);
  
  

  return (
    <div className="2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
      
      <div>
        <Button  className='border-none !text-[#193664] !bg-white'>
          <IoIosArrowBack />
          Personal Profile
        </Button>
      </div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button
          onClick={() => navigate(`/dashboard/editProfile?id=${profile?.data?.attributes?._id}`)}
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
          <div className="border-[#193664] border bg-[#E8EBF0] rounded-md items-center w-[300px] h-[365px] flex flex-col justify-center">
            <div className="rounded-full overflow-hidden h-[100px] w-[100px] mx-auto">
              <Image src={baseUrl + profile?.data?.attributes?.image} height={100} width={100} />
            </div>
            <div className="text-center py-6">
              <h1 className="text-[#5C5C5C]">Profile</h1>
              <p className="text-xl py-2 text-[#333333] font-bold">{profile?.data?.attributes?.role}</p>
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
                    defaultCountry="ML" 
                      value={phoneNumber?.toString()}
                      onChange={setPhoneNumber}
                    /> */}
              <Input
                size="large" 
                readOnly
                defaultValue ={profile?.data?.attributes?.fullName}
                // prefix={
                //   <HiOutlineMailOpen
                //     className="mr-2 bg-secondary rounded-full p-[6px]"
                //     size={28}
                //     color="white"
                //   />
                // }
                style={{
                  border: "1px solid #193664",
                   paddingLeft: '10px',
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
              label={
                <span className="text-secondary text-[12px] font-medium">
                  Email
                </span>
              }
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
          
               readOnly
               defaultValue={profile?.data?.attributes?.email}
                name="current_password"
                 
                style={{
                  border: "1px solid #193664",
                  paddingLeft: '10px',
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
            <Form.Item
              name="phone" 
              label={
                <span className="text-secondary text-[12px] font-medium">
                  PhoneNumber
                </span>
              }
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
          
               readOnly
               defaultValue={profile?.data?.attributes?.phoneNumber}
                name="current_password"
                 
                style={{
                  border: "1px solid #193664",
                  paddingLeft: '10px',
                  height: "52px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                  width: "720px"
                }}
                bordered={false}
              />
            </Form.Item> 
            
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;



