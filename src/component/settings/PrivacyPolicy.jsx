import { Button } from "antd"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetPrivacyQuery } from "../../redux/features/setting/getPrivacy";


const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const {data: privacy} = useGetPrivacyQuery()

    console.log(privacy?.data?.attributes);
  
    const decodeHtml = (html) => {
      const parser = new DOMParser();
      const decodedString = parser.parseFromString(html, 'text/html').body.textContent;
      return decodedString;
    };
    
    const decodedContent = decodeHtml (privacy?.data?.attributes[0]?.content);
    console.log(decodedContent); 

    const handleBackSettings = () => {
        navigate('/dashboard/settings')
    }

    const handlePrivacyEdit = () => {
        navigate('/dashboard/settings/privacyPolicy/editPrivacyPolicy')

    }
    
    return (
        <div className="w-[79vw] ">
            <div>
                <div onClick={handleBackSettings} className='border-none text-[#193664 flex gap-2 items-center cursor-pointer]'>
                    <IoIosArrowBack />
                    Privacy Policy
                </div>
            </div>
           <div className="pl-10 text-justify py-12">
           <div dangerouslySetInnerHTML={{ __html: decodedContent}} />
           </div>
           <div className="flex justify-end">
           <Button
           onClick={handlePrivacyEdit}
                // type="primary"
                style={{
                  backgroundColor: "#193664",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[300px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-lg"
              >
                Edit
              </Button>
              
           </div>
        </div>
    )
}

export default PrivacyPolicy