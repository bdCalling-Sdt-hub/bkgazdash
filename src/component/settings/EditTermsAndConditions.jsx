import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import { useGetTermsQuery } from "../../redux/features/setting/termsCondition";
import { useEditTermsMutation } from "../../redux/features/setting/editTerms";
import toast, { Toaster } from "react-hot-toast";


const data = [1, 2, 3, 4]


const EditTermsAndCondition = () => {
    const navigate = useNavigate();
    const editor = useRef(null);

    const {data: terms} = useGetTermsQuery()
    console.log(terms);
    const id = terms?.data?.attributes[0]?._id;
    console.log(id);
    const [editTerms, {isLoading}] = useEditTermsMutation()
   
    const decodeHtml = (html) => {
     const parser = new DOMParser();
     const decodedString = parser.parseFromString(html, 'text/html').body.textContent;
     return decodedString;
    };
    
    const decodedContent = decodeHtml (terms?.data?.attributes[0]?.content);
    console.log(decodedContent); 
   
   const [contentt, setContent] = useState(decodedContent);
   
   const updateTerms = async () => {
    // navigate("/dashboard/settings/privacypolicy")
    // console.log(content);
    
    try{
     
      const res = await editTerms({id: id , content: contentt}).unwrap();
      console.log(res);
      
       if(res?.code ==200){ 
        toast.success(res?.message)  
       }
       setTimeout(() => { 
         navigate("/dashboard/settings/termsAndConditons")
       },1000);
    }catch(error){
      console.log(error);
      
    } 
  }
   
    
   
    
   useEffect(() => {
     if (terms) { 
       setContent(decodedContent);
     }
   }, [terms]); 
      const handleBackTermsAndCondition = () => {
navigate('/dashboard/settings/termsAndConditons')
      }

    return (
        
        <div className="relative ml-[24px]">
          <Toaster />
        <div onClick={handleBackTermsAndCondition} className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
          <MdOutlineKeyboardArrowLeft
            className=""
            
            size={34}
          />
          <h1 className="text-[24px] font-semibold">
            Edit Terms & Condition
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
        style={{ width: '100%',  height: "" }} 
      />
      <Button
        onClick={updateTerms}
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

export default EditTermsAndCondition;
