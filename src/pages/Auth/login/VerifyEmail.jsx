import { Button, Form, Input } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png";
import { useState, } from "react";
import OTPInput from "react-otp-input";
import Swal from "sweetalert2";
// import { usePostOtpMutation } from "../../redux/Features/postOtpApi";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { phone } = useParams();
  const navigate = useNavigate();
  // const [setOtpVerify, { isLoading: otpLoading }] = usePostOtpMutation();
  // console.log(phone);

  // const handleMatchOtp = async () => {
  //   console.log(otp);

  //   // try {
  //   //   const responser = await baseURL.post(
  //   //     `/user/verify-code`,{
  //   //       email : email,
  //   //       code : otp
  //   //     }
  //   //   )
  //   //   console.log(responser?.data);
  //   //   if(responser?.data?.statusCode == 200){
  //   //     Swal.fire({
  //   //       position: "top-center",
  //   //       icon: "success",
  //   //       title: responser?.data?.message,
  //   //       showConfirmButton: false,
  //   //       timer: 1500,
  //   //     });
  //   //     navigate(`/auth/update-password/${email}`);
  //   //   }
  //   // } catch (error) {
  //   //   Swal.fire({
  //   //     icon: "error",
  //   //     title: "Try Again...",
  //   //     text: error?.response?.data?.message,
  //   //     footer: '<a href="#">Why do I have this issue?</a>',
  //   //   })
  //   // }
  //   try {
  //     const response = await setOtpVerify({ phone: phone, code: otp });
  //     if (response.data.statusCode == 200) {
  //       const token = response?.data?.data?.token;
  //       localStorage.setItem("token", token);
  //       // localStorage.setItem("user", response?.data?.data?.attributes?.user);
  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: response.data.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate(`/auth/update-password/${phone}`);
  //       // setModelTitle("Reset Password");
  //     }
  //   } catch (error) {
  //     console.log("Registration Fail", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error...",
  //       text: error?.response?.data?.message,
  //       footer: '<a href="#">Why do I have this issue?</a>',
  //     });
  //   }
  // };
 

  const handleMatchOtp = () => {
    console.log(otp);
    
    navigate('../resetPassword',);
  }
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#1397D5]">

        <div className="p-24  bg-[#B6DFF2]  rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <div className="flex items-center justify-center gap-2">
              <Link to="/forgetPassword">
                <GoArrowLeft className="text-[32px]" />
              </Link>

              <h1 className="text-[24px] font-medium my-[24px]">
               Verify Email
              </h1>
            </div>
            <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter the otp we have sent you in your email.
            </p>
            <div className="mx-auto space-y-7 fit-content object-contain">
            
              <div className="mx-auto flex items-center gap-2  outline-none focus:border-[#FFA500]
              object-contain w-[400px]">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "50px",
                    background: "#ffff",
                    width: "40px",
                    border: "1px solid #1397D5",
                    marginRight: "14px",
                    marginLeft: "14px",
                    outline: "none",
                    color: "black",
                    borderRadius: "5px"
                  }}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                />
                 
              </div>
              <Button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#0E71A0',
                fontWeight: 'bold',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              onFocus={(e) => {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = 'none';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = 'none';
              }}
              className="flex mx-auto">Resend</Button>
            
            </div>
                <Button
                onClick={handleMatchOtp}
                  type="primary"
                  style={{
                    backgroundColor: "#1397D5",
                    borderRadius: "16px",
                    color: "#fff",
                    size: "18px",
                    height: "56px",
                  }}
                  htmlType="submit"
                  className="block mx-auto w-[400px] hover:bg-secondary h-[56px] py-4 my-8 text-white bg-secondary rounded-3xl "
                >
                 Verify Email
                </Button>
        
          </div>
        </div>
      </div>
 
  );
};

export default VerifyEmail;
