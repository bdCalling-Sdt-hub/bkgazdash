import { Button, Form, Image, Input, TimePicker } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ShopOperationSelectItem from "../../../component/settings/shopOperation/selectItem/ShopOperationSeletItem";
import shopOPerationLogo from '../../../assets/Images/shopOperationLogo/shopOperationLogo.png'

const EditTime = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    
    const formattedValues = {
      startingTime: values.startingTime ? values.startingTime.format('h:mm A') : null,
      closingTime: values.closingTime ? values.closingTime.format('h:mm A') : null,
    };
    console.log('Form Values:', formattedValues);

  };

  const handleBackSettings = () => {
    navigate("/dashboard/settings");
  };

  return (
    <div className="w-[79vw]">
      <div className="flex justify-between">
        <div>
          <div
            onClick={handleBackSettings}
            className="border-none text-[#193664] flex gap-2 cursor-pointer items-center"
          >
            <IoIosArrowBack style={{ }} /> 
            Shop Operation
          </div>
        </div>
        <div className="justify-end">
          <ShopOperationSelectItem />
        </div>
      </div>
      <div className="mt-12 flex items-center gap-12" >
        <div>
            <Image preview={false} src={shopOPerationLogo} />
        </div>
        <div>

        <Form
      name="shopOperation"
      labelCol={{ span: 25 }}
      wrapperCol={{ span: 60 }}
      layout="vertical"
      onFinish={onFinish}
      className="w-[300px]"
    >
      <Form.Item
        name="startingTime"
        label={
          <span className="text-secondary text-[12px] font-medium">
            Starting Time
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please select your starting time",
          },
        ]}
      >
        <TimePicker
          size="large"
          format="h:mm A"
          use12Hours
          placeholder="Select Starting Time"
          style={{
            border: "2px solid #193664",
            height: "52px",
            width: "720px",
            paddingLeft: "16px",
            background: "#ffffff",
            outline: "none",
            marginBottom: "10px",
          }}
        />
      </Form.Item>

      <Form.Item
        name="closingTime"
        label={
          <span className="text-secondary text-[12px] font-medium">
            Closing Time
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please select your closing time",
          },
        ]}
      >
        <TimePicker
          size="large"
          format="h:mm A"
          use12Hours
          placeholder="Select Closing Time"
          style={{
            border: "2px solid #193664",
            height: "52px",
            background: "#ffffff",
            paddingLeft: "16px",
            outline: "none",
            marginBottom: "10px",
            width: "720px",
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

        </div>
      </div>
    </div>
  );
};

export default EditTime;
