import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
 
import { Button, Form, notification } from "antd";
 
// import '../../../index.css'
 
import toast, { Toaster } from "react-hot-toast";
import { useGetAboutQuery } from "../../redux/features/setting/getAbout";
import { useEditAboutMutation } from "../../redux/features/setting/editAbout";
 
 
 

const EditAbout = () => { 
  
  const editor = useRef(null);
  const navigate = useNavigate()  
 
  const {data: about} = useGetAboutQuery()
    // console.log(privacy?.data?.attributes?.privacyText);
 const [aboutUpdate, {isLoading}] = useEditAboutMutation()
 const id = about?.data?.attributes[0]?._id;
 console.log(id);
 

 const decodeHtml = (html) => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(html, 'text/html').body.textContent;
  return decodedString;
 };
 
 const decodedContent = decodeHtml (about?.data?.attributes[0]?.content);
 console.log(decodedContent); 

const [contentt, setContent] = useState(decodedContent);

  
 

 
useEffect(() => {
  if (about) { 
    setContent(decodedContent);
  }
}, [about]); 
  

  const updateAbout = async () => {
    // navigate("/dashboard/settings/privacypolicy")
    // console.log(content);
    
    try{
     
      const res = await aboutUpdate({id: id , content: contentt}).unwrap();
      console.log(res);
      
       if(res?.code ==200){ 
        toast.success(res?.message)  
       }
       setTimeout(() => { 
         navigate("/dashboard/settings/aboutus")
       },1000);
    }catch(error){
      console.log(error);
      
    } 
  }
  

  return (
    <div className="mt-8 mx-6">
      <Toaster  />
        <Link to ='/dashboard/settings/aboutus' className="flex items-center gap-2">
      <FaCircleArrowLeft className=" text-[#69C0BE] w-8 h-8" />
        <p className=" font-semibold text-[30px]">Edit AboutUS</p>
      </Link>
      <Form
     labelCol={{ span: 22 }}
     wrapperCol={{ span: 30 }}
     layout="vertical"
     initialValues={{
       remember: true,
       
     }}
     onFinish = {updateAbout}
      > 
      <div className="mt-6">
        <JoditEditor 
          ref={editor}
          value ={contentt}
         
          onChange={(newContent) => {
            setContent(newContent)
          }}
        />
      </div>
      <div className="text-right mt-6">
          <Form.Item>
            <Button
             loading = {isLoading}
              htmlType="submit"
              className=" h-[44px] w-[260px] !text-white !bg-[#193664] rounded-[8px]"
            >
              Update Privacy
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditAbout;
