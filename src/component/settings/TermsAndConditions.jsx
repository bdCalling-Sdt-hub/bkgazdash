import { Button } from "antd"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetTermsQuery } from "../../redux/features/setting/termsCondition";


const TermsAndConditions = () => {
    const navigate = useNavigate();

    const handleBackSettings = () => {
        navigate('/dashboard/settings')
    }
    const {data: terms} = useGetTermsQuery()
    console.log(terms);
  
    const decodeHtml = (html) => {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(html, 'text/html').body.textContent;
        return decodedString;
      };
      
      const decodedContent = decodeHtml (terms?.data?.attributes[0]?.content);
      console.log(decodedContent); 

    const handleEdit = () => {
        navigate('/dashboard/settings/termsAndConditons/edittermsAndConditions')

    }
    
    return (
        <div className="w-[79vw] ">
            <div>
                <div onClick={handleBackSettings} className='border-none text-[#193664] flex items-center gap-2 cursor-pointer'>
                    <IoIosArrowBack />
                    Terms & Conditions
                </div>
            </div>
           <div className="pl-10 text-justify py-12">
           <div dangerouslySetInnerHTML={{ __html: decodedContent}} />
            </div>
           <div className="flex justify-end">
           <Button
           onClick={handleEdit}
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

export default TermsAndConditions