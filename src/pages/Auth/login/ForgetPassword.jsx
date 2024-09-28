import { Button, Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png";
import { GoArrowLeft } from "react-icons/go";
// import baseURL from "../../config";
// import Swal from "sweetalert2";
// import { IconLock } from "@tabler/icons-react";
// import { usePostLoginMutation } from "../../redux/Features/postLoginApi";
import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
import "./Login.css";
import { VscLaw } from "react-icons/vsc";
import { useState } from "react";
import { useForgotPasswordMutation } from "../../../redux/features/auth/forgotPassword";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const [forgetPassword, {isLoading}] = useForgotPasswordMutation()
  const onFinish =  async(values) => {
    if (!phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Phone number is required",
        text: "Please enter your phone number.",
      });
      return;
    }

    const payload = {phoneNumber};

   try{
    const res = await forgetPassword(payload).unwrap();
    console.log(res);
    if(res?.code == 200){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate(`/verifyEmail?phoneNumber=${phoneNumber}`);
    }, 1000);
   }catch(error){
    console.log(error?.data);
    
   }

    // navigate('/verifyEmail');
    // console.log("first", values.phoneNumber)
  }

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#1397D5]">
       <Toaster />
        <div className="p-24 bg-[#B6DFF2]  rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <div className="flex items-center justify-center gap-2">
              <Link to="/">
                <GoArrowLeft className="text-[32px]" />
              </Link>

              <h1 className="text-[24px] font-medium my-[24px]">
                Forgot password
              </h1>
            </div>
            <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter your Phone Number to reset
            your password.
            </p>
            <Form
              name="normal_login"
              // className="login-form"
              labelCol={{ span: 22 }}
              wrapperCol={{ span: 40 }}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              className="w-[300px] mt-4 mx-auto"
            >
 

 <Form.Item
              name="phoneNumber"
              label={
                <span className="text-secondary text-[12px] font-medium">
                  Phone Number
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number!",
                },
              ]}
            >
              <PhoneInput
                placeholder="Enter phone number"
                international
                countryCallingCodeEditable={false}
                style={{
                  marginTop: "12px",
                }}
                defaultCountry="US"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </Form.Item>
       


              

              <Form.Item>
                <Button
                  // type="primary"
                  loading = {isLoading}
                  style={{
                    backgroundColor: "#1397D5",
                    borderRadius: "16px",  
                    color: "#fff",
                    size: "18px",
                    height: "56px",
                  }}
                  htmlType="submit"
                  className=" w-[300px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-lg"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
   
  );
};

export default ForgetPassword;
