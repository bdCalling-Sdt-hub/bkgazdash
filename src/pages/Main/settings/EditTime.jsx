import { Button, Form, Image, TimePicker } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ShopOperationSelectItem from "../../../component/settings/shopOperation/selectItem/ShopOperationSeletItem";
import shopOPerationLogo from '../../../assets/Images/shopOperationLogo/shopOperationLogo.png';

import moment from "moment";
import { useGetTimeQuery } from "../../../redux/features/shopOparetion/getTime";
import { useUpdateTimeMutation } from "../../../redux/features/shopOparetion/updateTimeStatus";
import toast, { Toaster } from "react-hot-toast";

const EditTime = () => {
  const navigate = useNavigate();
  const { data: getTime } = useGetTimeQuery();

  const [updateTime , {isLoading}] = useUpdateTimeMutation()
  
  // Format the initial time values from getTime
  const initialValues = getTime
  ? {
      startingTime: getTime?.data?.attributes?.startTime 
        ? moment(getTime.data.attributes.startTime.trim(), 'h:mm A') 
        : null,
      closingTime: getTime?.data?.attributes?.endTime 
        ? moment(getTime.data.attributes.endTime.trim(), 'h:mm A') 
        : null,
    }
  : {};

  const onFinish = async (values) => {
    const formattedValues = {
      startTime: values.startingTime ? values.startingTime.format('hh:mm A') : null,
      endTime: values.closingTime ? values.closingTime.format('hh:mm A') : null,
      shopId: getTime?.data?.attributes?._id,
    };
    
    // console.log('Form Values:', formattedValues);
  
    try {
      const res = await updateTime(formattedValues).unwrap();
      // console.log(res);
      if (res?.code === 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate('/dashboard/settings/shopOperation');
      }, 1000);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  

  const handleBackSettings = () => {
    navigate("/dashboard/settings");
  };

  return (
    <div className="w-[79vw]">
      <Toaster />
      <div className="flex justify-between">
        <div>
          <div
            onClick={handleBackSettings}
            className="border-none text-[#193664] flex gap-2 cursor-pointer items-center"
          >
            <IoIosArrowBack /> 
            Update Time Status
          </div>
        </div>
        <div className="justify-end">
          
        </div>
      </div>
      <div className="mt-12 flex items-center gap-12">
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
            initialValues={initialValues}  // Set initial values here
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
