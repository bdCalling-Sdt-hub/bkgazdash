import { Button, Form, Input } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "./../../../../public/bkGazLogo.png";
import { useState, } from "react";
import OTPInput from "react-otp-input";
import Swal from "sweetalert2";
import { useVerifyOtpMutation } from "../../../redux/features/auth/verifyOtp";
import toast, { Toaster } from "react-hot-toast";
// import { usePostOtpMutation } from "../../redux/Features/postOtpApi";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { phone } = useParams();
  const navigate = useNavigate();
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const phoneNumber = queryParams.get('phoneNumber')
  // console.log('+'+phoneNumber); 
  const [error, setError] = useState('');

const [verifyOtp, {isLoading}] = useVerifyOtpMutation()

  const handleMatchOtp = async() => {
     
    if (otp.length < 6) {
      setError('Please enter a valid OTP');  
    } else {
      setError('');  
      
    } 
    const verify = {
      otp,
      phoneNumber : "+"+phoneNumber.trim()
    }
   try{
    const res = await verifyOtp(verify).unwrap();
    console.log(res);
    if(res?.code == 200){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate(`../resetPassword?phoneNumber=${phoneNumber}`);
    }, 1000);
    
   }catch(error){
    console.log(error?.data);
    setError(error?.data?.message)
    
   }



   

    // navigate('../resetPassword',);
  }
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#1397D5]">
      <Toaster />
        <div className="p-24  bg-[#B6DFF2]  rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <div className="flex items-center justify-center gap-2">
              <Link to="forgotpassword">
                <GoArrowLeft className="text-[32px]" />
              </Link>

              <h1 className="text-[24px] font-medium my-[24px]">
               Verify PhoneNumber
              </h1>
            </div>
            <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter the otp we have sent you in your Phone.
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
              <p className="text-red-500">{error}</p>
              <Button
              loading = {isLoading}
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
                 loading = {isLoading}
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
                 Verify PhoneNumber
                </Button>
        
          </div>
        </div>
      </div>
 
  );
};

export default VerifyEmail;
