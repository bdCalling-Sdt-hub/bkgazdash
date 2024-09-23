import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import { useGetPrivacyQuery } from "../../redux/features/setting/getPrivacy";
import { useEditPrivacyMutation } from "../../redux/features/setting/editPrivacy";
import toast, { Toaster } from "react-hot-toast";

const data = [1, 2, 3, 4]


const EditPrivacyPolicy = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    
    
    const {data: privacy} = useGetPrivacyQuery()
   const [editPrivacy, {isLoading}] = useEditPrivacyMutation()
    // console.log(privacy?.data?.attributes[0]?.content);
    const id = privacy?.data?.attributes[0]?._id;
    console.log(id);

    const decodeHtml = (html) => {
      const parser = new DOMParser();
      const decodedString = parser.parseFromString(html, 'text/html').body.textContent;
      return decodedString;
     };
     
     const decodedContent = decodeHtml (privacy?.data?.attributes[0]?.content);
     console.log(decodedContent); 
    
    const [contentt, setContent] = useState(decodedContent);

    useEffect(() => {
      if (privacy) { 
        setContent(decodedContent);
      }
    }, [privacy]); 


    const updateAbout = async () => {
      // navigate("/dashboard/settings/privacypolicy")
      // console.log(content);
      
      try{
       
        const res = await editPrivacy({id: id , content: contentt}).unwrap();
        console.log(res);
        
         if(res?.code ==200){ 
          toast.success(res?.message)  
         }
         setTimeout(() => { 
           navigate("/dashboard/settings/privacyPolicy")
         },1000);
      }catch(error){
        console.log(error);
        
      } 
    }


 
      const handleBackPrivacyPolicy = () => {
        navigate('/dashboard/settings/privacyPolicy')
      }
    return (
        
        <div className="relative ml-[24px]">
          <Toaster />
        <div onClick={handleBackPrivacyPolicy} className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
          <MdOutlineKeyboardArrowLeft
            className=""
           
            size={34}
          />
          <h1 className="text-[24px] font-semibold">
            Edit Privacy Policy
          </h1>
        </div>
        <div className="text-justify  mt-[24px] relative ">
          <JoditEditor
        ref={editor}
        value={contentt}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        className="text-wrap"
        style={{ width: '100%',  height: "30px" }} 
      />
      <Button
        onClick={updateAbout}
        loading = {isLoading}
        style={{
                
          backgroundColor: "#193664",
          color: "#fff",
          size: "18px",
          height: "56px",
        }}
        block
        className="mt-[30px] h-[60px] hover:text-white bg-secondary hover:bg-gradient-to-r from-red-500 via-red-600 to-red-800
        text-white py-3 rounded-lg w-full text-[18px] font-medium  duration-200"
      >
        Update
        </Button>
        </div>
      </div>
    );
}

export default EditPrivacyPolicy;
