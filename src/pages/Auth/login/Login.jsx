import { Button, Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Images/bkGazLogo.svg";
// import baseURL from "../../config";
// import Swal from "sweetalert2";
// import { IconLock } from "@tabler/icons-react";
// import { usePostLoginMutation } from "../../redux/Features/postLoginApi";
// import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState();
  //   const [setData, { isLoading,isError,status,error,data }] = usePostLoginMutation();
  console.log(phoneNumber);
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
  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-[#1397D5]">
      
        <div className="bg-[#B6DFF2] p-24 rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <h1 className="text-[24px] py-6 text-center font-medium mt-[2px] mb-4px]">
              Sign In
            </h1>
            <Form
              name="normal_login"
              // className="login-form"
              labelCol={{ span: 22 }}
              wrapperCol={{ span: 40 }}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              className="w-[300px] mt-4 mx-auto"
            >
              <Form.Item
                name="email"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Username
                //   </span>
                // }
                rules={[
                  {
                    required: false,
                    type: 'email',
                    message: "Please write your email!",
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
                  placeholder="Email"
                  name="email"
                  // prefix={
                  //   <HiOutlineMailOpen
                  //     className="mr-2 bg-secondary rounded-full p-[6px]"
                  //     size={28}
                  //     color="white"
                  //   />
                  // }
                  style={{
                    border: "2px solid #1397D5",
                    height: "52px",
                    background: "#ffffff",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                  required
                  bordered={false}
                />
              </Form.Item>

              <Form.Item
                name="password"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Password
                //   </span>
                // }
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  // onChange={handleChange}
                  placeholder="Password"
                  name="current_password"
                  prefix={
                    //
                    ""
                  }
                  style={{
                    border: "2px solid #1397D5",
                    height: "52px",
                    background: "#ffffff",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                  bordered={false}
                />
              </Form.Item>

              <div className="">
                <div className="flex justify-between text-[#1397D5]">
                  <div className="flex items-center gap-2">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox className="custom-checkbox">
                        <span className="text-[#1397D5]  font-medium">
                          Remember Me
                        </span>
                      </Checkbox>
                    </Form.Item>
                  </div>
                  {/* <div>
                    <Link
                      to="/auth/forgot-password"
                      className="text-secondary font-medium hover:text-secondary"
                    >
                     Remember me
                    </Link>
                  </div> */}
                  <div>
                    <Link
                      to="/auth/forgetPassword"
                      className=" font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <Form.Item>
                <Button
                  // type="primary"
                  style={{
                    backgroundColor: "#1397D5",
                    color: "#fff",
                    size: "18px",
                    height: "56px",
                  }}
                  htmlType="submit"
                  className=" w-[300px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-lg"
                >
                  Sign in
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

export default Login;
