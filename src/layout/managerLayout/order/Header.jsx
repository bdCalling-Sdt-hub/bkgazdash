import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
 
import { Image } from "antd";
import profile from "../../../assets/Images/bkProfile.jpg";
import { useGetProfileQuery } from "../../../redux/features/profile/getProfile";
import baseUrl from "../../../redux/api/baseUrl";

const Header = () => { 
  const navigation = useNavigate();
 
  const user = JSON.parse(localStorage.getItem('user-update'));
  // console.log(user?.user);

  const {data: profile, } = useGetProfileQuery(user?.user?._id)
  console.log(profile);
  

  const handleUserProfile = () => {
    navigation('/managerlayout/managerpersonalInformation')
  }
  return (
  <div className="fixed w-[79vw] bg-white text-black z-50  h-28 mb-4">
      <div className="w-full px-[24px] bg-[rgb(232,235,240)] text-black rounded-lg  h-24">
      
      <div className="flex justify-between pt-3">
        <div className="w-8/12 p-2 rounded-md">
        <h1 className="text-xl font-bold">Welcome  <span className="text-[#193664] font-bold">{profile?.data?.attributes?.fullName}</span> </h1>
        <p>Have a nice day</p>
        </div>
        <div className="flex space-x-6 justify-end w-4/12">
          
          <div className="flex space-x-3">
            <div onClick={handleUserProfile} className="my-2 overflow-hidden cursor-pointer h-[50px] w-[50px] rounded-full bg-[#193664]">
            <Image preview={false} src={baseUrl + profile?.data?.attributes?.image} width={50} height={70} />
              <h1>Avater</h1>
            </div>
            <div className=" py-2">
              <h1 className="font-bold text-lg">{profile?.data?.attributes?.fullName}</h1>
              <p className="text-xs">{profile?.data?.attributes?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  );
};

export default Header;
