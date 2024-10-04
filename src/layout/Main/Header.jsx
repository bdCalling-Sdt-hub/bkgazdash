import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { usePostLoginMutation } from "../../redux/features/postLoginApi";
import { Image } from "antd";
import { useGetProfileQuery } from "../../redux/features/profile/getProfile";
import baseUrl from "../../redux/api/baseUrl";

const Header = () => {
 
  
  const navigation = useNavigate();
  const handleNotificaton = () => {
    navigation("/dashboard/notification");
  };
  const user = JSON.parse(localStorage.getItem('user-update'));
  // console.log(user?.user);

  const {data: profile, } = useGetProfileQuery(user?.user?._id)
  // console.log(profile?.data?.attributes);

  

  const handleUserProfile = () => {
    navigation('/dashboard/personalInformation')
  }
  return (
  <div className="fixed w-[79vw] bg-white text-black z-50  h-28 mb-4">
      <div className="w-full px-[24px] bg-[rgb(232,235,240)] text-black rounded-lg  h-24">
      
      <div className="flex justify-between items-center pt-3">
        <div className="w-8/12 p-2 rounded-md">
          <h1 className="text-xl font-bold">Welcome  {profile?.data?.attributes?.fullName}</h1>
        <p>Have a nice day</p>
        </div>
        <div className="flex space-x-6 justify-end w-4/12">
          <div className="text-2xl py-4">
            <IoIosNotificationsOutline onClick={handleNotificaton} />
          </div>
          <div className="flex space-x-3">
            <div onClick={handleUserProfile} className="my-2 overflow-hidden h-[50px] w-[50px] rounded-full bg-[#193664]">
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
