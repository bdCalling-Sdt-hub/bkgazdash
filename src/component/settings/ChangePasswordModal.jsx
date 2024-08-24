import { Modal, Button, Form, Input } from 'antd';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const ChangePersonalModal = ({ isVisible, onClose }) => {
const navigate = useNavigate();

    const handleBackSettings = () => {
        navigate('/settings');
        onClose()
      };

    return (
        <Modal
            title=""
            visible={isVisible}
            onCancel={onClose}
            footer={[
                // <Button key="back" onClick={onClose}>
                //     Cancel
                // </Button>,
                // <Button key="submit" type="primary" onClick={onClose}>
                //     Save Changes
                // </Button>,
            ]}
        >
            <div className='text-center py-6'>
                <p>Your password must be 8-10 character long.</p>
            </div>
            <div>
        <Button onClick={handleBackSettings} className='border-none text-[#193664]'>
          <IoIosArrowBack />
      Change Password
        </Button>
      </div>
            {/* Form input field */}
            <Form
              name="normal_login"
              // className="login-form"
              labelCol={{ span: 22 }}
              wrapperCol={{ span: 40 }}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            //   onFinish={onFinish}
              className="w-[300px] mt-4 mx-auto"
            >
              <Form.Item
                name="oldPassword"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Password
                //   </span>
                // }
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  // onChange={handleChange}
                  placeholder="Set your assword"
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
                  }}
                  bordered={false}
                />
              </Form.Item>
              <Form.Item
                name="newPassword"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Password
                //   </span>
                // }
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  // onChange={handleChange}
                  placeholder="Re-enter assword"
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
                  }}
                  bordered={false}
                />
              </Form.Item>
              <Form.Item
                name="reEnterPassword"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Password
                //   </span>
                // }
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  // onChange={handleChange}
                  placeholder="Re-enter assword"
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
                  }}
                  bordered={false}
                />
              </Form.Item>

              <div>
                    <Link
                      to="/auth/forgetPassword"
                      className=" font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>

              <Form.Item>
                <Button
                  // type="primary"
                  style={{
                    backgroundColor: "#193664",
                    color: "#fff",
                    size: "18px",
                    height: "56px",
                  }}
                  htmlType="submit"
                  className=" w-[300px] 
                   h-[56px] my-8 text-white hover:border-none border-none rounded-lg"
                >
                Update Password
                </Button>
              </Form.Item>
            </Form>
         
        </Modal>
    );
};

export default ChangePersonalModal;
