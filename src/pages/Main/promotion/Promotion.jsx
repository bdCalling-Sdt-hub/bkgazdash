import { Button, Form, Input, Upload } from "antd";
import { FaCamera } from "react-icons/fa";
import './Promotion.css'
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";

const Promotion = () => {
    const navigate = useNavigate();
  const onFinish = (value) => {
    console.log(value);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const handleSeePost = () => {
navigate('/seePost')
}
  return (
    <div className="w-[79vw]">
      <h1 className="text-xl font-bold py-8">Create Promotion</h1>
      <div>
        <Form
          className="ant-upload"
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Upload */}
          <Form.Item
            label=""
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload 
              action="/upload.do" 
              listType="picture-card"
              style={{ width: 150, height: 150 }} // Adjust the size here
            >
              <button
                style={{
                  border: 0,
                  background: "none",
                  width: 150, // Match the button size to the Upload container
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                type="button"
              >
                <FaCamera className="text-6xl text-[#193664]" />
              </button>
            </Upload>
          </Form.Item>

          {/* TextArea */}
          <Form.Item name="description" label="Description">
            <TextArea 
              rows={7} 
              style={{ width: "1000px", maxWidth: "1000px" }} // Adjust the width and height
            />
          </Form.Item>
        
          <Form.Item>
              <Button
              onClick={handleSeePost}
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
               Create post
              </Button>
          
            </Form.Item>
        </Form>
       
      </div>
    </div>
  );
};

export default Promotion;
