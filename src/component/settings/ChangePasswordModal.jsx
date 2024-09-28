import { Modal, Button, Form, Input } from 'antd';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";

const ChangePersonalModal = ({ isVisible, onClose }) => {
const navigate = useNavigate();
const [error, setError] = useState('')
    const handleBackSettings = () => {
        navigate('/settings');
        onClose()
      };

    const changePassword = (values) => {
      const { confirmPassword, ...ChangePassword } = values;
      console.log(ChangePassword);
      
    }

    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuVisibility = (visible) => {
      setMenuVisible(visible);
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
            <div className='mt-6 text-2xl text-center'>
        <Button className='mt-6 text-2xl text-center' onClick={handleBackSettings}  >
          <IoIosArrowBack />
      Change Password
        </Button>
      </div>
            <div className='text-center'>
                <p>Your password must be 8-10 character long.</p>
            </div>
            {/* Form input field */}
            <Form
              name="changePassword"
              layout="vertical"
              onFinish={changePassword}
              className='px-16 py-10'
             
            >
              <Form.Item
                name="oldPassword"
                label="Old Password"
                rules={[{ required: true, message: "Please enter your old password!" }]}
              >
                <Input.Password
                 style={{
                  height: "40px",
                  background: "#E6F9EF",
                  outline: "none",
                 
                  border: '1px solid green'
                }}
                  placeholder="Old Password"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item
                name="newPassword"
                label="New Password"
                rules={[{ required: true, message: "Please enter your new password!" }]}
              >
                <Input.Password
                   style={{
                    height: "40px",
                    background: "#E6F9EF",
                    outline: "none",
                   
                    border: '1px solid green'
                  }}
                  placeholder="New Password"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["newPassword"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords that you entered do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    height: "40px",
                    background: "#E6F9EF",
                    outline: "none",
                   
                    border: '1px solid green'
                  }}
                  placeholder="Confirm Password"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <p className="text-red-500 font-medium">{error}</p>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-10 py-3 !bg-[#69C0BE] !text-black text-[16px] rounded-md"
                >
                  Change Password
                </Button>
              </Form.Item>
            </Form>
         
        </Modal>
    );
};

export default ChangePersonalModal;
