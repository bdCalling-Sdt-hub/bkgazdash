
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Header = () => {
const navigation = useNavigate();
const handleNotificaton = () => {
navigation('/notification')
}

  return (
    <div className='fixed mt-0 z-50 h-[78px] w-[79vw] px-[24px] bg-[#E8EBF0] text-black'>
      
  <div className='flex justify-between'>
    <div className='w-8/12 p-2 rounded-md'>
      <h1 className='text-xl font-bold'>Welcome User</h1>
      <p>Have a nice day</p>
    </div>
    <div className='flex space-x-6 justify-end w-4/12'>
      <div className='text-2xl py-4'>
        <IoIosNotificationsOutline onClick={handleNotificaton} />
      </div>
      <div className='flex space-x-3'>
      <div className='my-2 overflow-hidden h-[50px] w-[50px] rounded-full bg-[#193664]'>  <h1>Avater</h1></div>
      <div>
        <h1>user name</h1>
        <p>Role</p>
      </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Header