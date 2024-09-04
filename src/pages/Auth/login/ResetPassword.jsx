import { Button, Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png";
import { GoArrowLeft } from "react-icons/go";
// import baseURL from "../../config";
// import Swal from "sweetalert2";
// import { IconLock } from "@tabler/icons-react";
// import { usePostLoginMutation } from "../../redux/Features/postLoginApi";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
import "./Login.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  // const [phoneNumber, setPhoneNumber] = useState();
  //   const [setData, { isLoading,isError,status,error,data }] = usePostLoginMutation();
  // console.log(phoneNumber);
  //    const onFinish = async (value) => {

  //    console.log(value);
  //    console.log(isLoading,isError,status,error,data );
  //   try {
  //     const response = await setData(value);
  //     console.log(response?.error?.data?.message);
  //     if(response?.data?.statusCode == 200){
  //       console.log(data);
  //       localStorage.setItem("token", response?.data?.data?.token);
  //       localStorage.setItem(
  //         "user-update",
  //         JSON.stringify(response?.data?.data?.attributes)
  //       );

  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: response?.data?.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/");
  //     }else{
  //       Swal.fire({
  //         icon: "error",
  //         title: "Login Failed , Try Again...",
  //         text: response?.error?.data?.message,
  //       })
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Login Failed , Try Again...",
  //       text: error?.data?.message,
  //     })
  //   }

  //   };
  const onFinish =  (values) => {
    console.log("first",values)
    navigate('/');
  }

  return (
    <div className="w-full flex items-center justify-center min-h-[100vh] bg-[#1397D5]">

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
