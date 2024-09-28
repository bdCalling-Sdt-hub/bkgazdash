import { Button, Checkbox, Form, Input } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png";
import { GoArrowLeft } from "react-icons/go";
 
import { useState } from "react";
import "./Login.css";
import { useResetPasswordMutation } from "../../../redux/features/auth/resetPassword";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const phoneNumber = queryParams.get('phoneNumber')
  console.log(phoneNumber);
  

const [resetPassword, {isLoading}] = useResetPasswordMutation()



  const onFinish =  async(values) => {
 
    const data = {
      phoneNumber : "+"+phoneNumber.trim(),
      password : values?.password
    }
    try{
      const res = await resetPassword(data).unwrap();
      if(res?.code == 200){
        toast.success(res?.message)
      }
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }catch(error){
      console.log(error?.data);
      
    }
   
    // navigate('/');
  }

  return (
    <div className="w-full flex items-center justify-center min-h-[100vh] bg-[#1397D5]">
     <Toaster />
        <div className="p-24  bg-[#B6DFF2]  rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <div className="flex items-center justify-center gap-2">
              <Link to="/verifyEmail">
                <GoArrowLeft className="text-[32px]" />
              </Link>

              <h1 className="text-[24px] font-medium my-[8px] py-8">
               Reset password
              </h1>
            </div>
            <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
              Please enter your email address to reset your password.
            </p>
            <Form
  name="reset_password"
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
    name="password"
    rules={[
      {
        required: true,
        message: "Please input your password!",
      },
    ]}
  >
    <Input.Password
      size="large"
      placeholder="Set your password"
      style={{
        border: "2px solid #1397D5",
        borderRadius: "16px",
        height: "52px",
        background: "#ffffff",
        outline: "none",
        marginBottom: "10px",
      }}
      bordered={false}
    />
  </Form.Item>

  <Form.Item
    name="confirm_password"
    dependencies={['password']}
    hasFeedback
    rules={[
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The two passwords do not match!'));
        },
      }),
    ]}
  >
    <Input.Password
      size="large"
      placeholder="Re-enter password"
      style={{
        border: "2px solid #1397D5",
        borderRadius: "16px",
        height: "52px",
        background: "#ffffff",
        outline: "none",
        marginBottom: "10px",
      }}
      bordered={false}
    />
  </Form.Item>

  <Form.Item>
    <Button
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
      Reset Password
    </Button>
  </Form.Item>
</Form>

          </div>
        </div>
      </div>
 
  );
};

export default ResetPassword;
