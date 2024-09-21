import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png"; 
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { usePostLoginMutation } from "../../../redux/features/postLoginApi";
import { useState } from "react";
import './Login.css'

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [setData, { isLoading, isError, status, error, data }] = usePostLoginMutation();

  const navigate = useNavigate();

  const onFinish = async () => {
  
    // Make sure phoneNumber is valid and not empty before submitting
    if (!phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Phone number is required",
        text: "Please enter your phone number.",
      });
      return;
    }

    const payload = {phoneNumber, password};
    // console.log(payload);
    
    try {
      const response = await setData(payload).unwrap();
      console.log("loging ressssssssssssssssssss",response);
      if (response?.code == 200) {
        
        localStorage.setItem("token", response?.data?.attributes?.tokens?.accessToken);
        localStorage.setItem("refresh_token", response?.data?.attributes?.tokens?.refreshToken);
        console.log("token", response?.data?.attributes?.tokens?.accessToken);
        localStorage.setItem(
          "user-update",
          JSON.stringify(response?.data?.attributes)
        );

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/home")
      } 
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed, Try Again...",
        text: error?.data?.message,
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[100vh] bg-[#1397D5]">
      <div className="bg-[#B6DFF2] p-24  h-2/4 rounded-xl">
        <div className="mx-auto">
          <img className="mx-auto w-48" src={logo} alt="Logo" />

          <h1 className="text-[24px] py-6 text-center font-medium mt-[2px] mb-4px]">
            Sign In
          </h1>
          <Form
            name="normal_login"
            labelCol={{ span: 22 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{ remember: true }}
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
       
            <Form.Item
              name="password"
              label={
                <span className="text-secondary text-[12px] font-medium">
                  Password
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
              className=".ant-input-affix-wrapper .ant-input-suffix"
                size="large"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  border: "2px solid #1397D5",
                  borderRadius: "16px",
                  height: "52px",
                  paddingLeft: "16px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                }}
                variant="unstyled"
              />
            </Form.Item>

            <div className="flex justify-between text-[#1397D5]">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="custom-checkbox">
                  <span className="text-[#1397D5] font-medium">
                    Remember Me
                  </span>
                </Checkbox>
              </Form.Item>
              <Link to="/forgetPassword" className="font-medium">
                Forgot password?
              </Link>
            </div>

            <Form.Item>
              <Button loading = {isLoading}
                style={{
                  backgroundColor: "#1397D5",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className="w-[300px] h-[56px] py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
                // loading={isLoading}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
