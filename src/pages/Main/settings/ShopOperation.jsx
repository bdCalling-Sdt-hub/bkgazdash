import { Button, Form, Image, Input } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ShopOperationSelectItem from "../../../component/settings/shopOperation/selectItem/ShopOperationSeletItem";
import shopOPerationLogo from '../../../assets/Images/shopOperationLogo/shopOperationLogo.png'

const ShopOperation = () => {
  const navigate = useNavigate();

  const handleBackSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="w-[79vw]">
      <div className="flex justify-between">
        <div>
          <Button
            onClick={handleBackSettings}
            className="border-none text-[#193664]"
          >
            <IoIosArrowBack style={{ paddingRight: '8px' }} /> 
            Shop Operation
          </Button>
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
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
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
                  required: false,
                  type: 'text',
                  message: "Please write your name",
                },
              ]}
            >
              
              <Input
                size="large"
                placeholder="Name"
                name="email"
                // prefix={
                //   <HiOutlineMailOpen
                //     className="mr-2 bg-secondary rounded-full p-[6px]"
                //     size={28}
                //     color="white"
                //   />
                // }
                style={{
                  border: "2px solid #193664",
                  height: "52px",
                  width: "720px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                }}
                required
                bordered={false}
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
                  type: "email",
                  required: false,
                  message: "Please write your email",
                },
              ]}
            >
              <Input
                size="large"
                // onChange={handleChange}
                placeholder="Email"
                name="current_password"
                prefix={
                  //
                  ""
                }
                style={{
                  border: "2px solid #193664",
                  height: "52px",
                  background: "#ffffff",
                  outline: "none",
                  marginBottom: "10px",
                  width: "720px"
                }}
                bordered={false}
              />
            </Form.Item>

            <div className="">
              <div className="flex justify-between text-[#1397D5]">

                {/* <div>
                    <Link
                      to="/auth/forgot-password"
                      className="text-secondary font-medium hover:text-secondary"
                    >
                     Remember me
                    </Link>
                  </div> */}

              </div>
            </div>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default ShopOperation;
