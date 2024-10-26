import React, { useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import { FaCamera } from "react-icons/fa";
import "./addManager.css";
import { IoIosArrowBack } from "react-icons/io";
import { useActionData, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAddEmployeeMutation } from "../../redux/features/deliveryEmploye/AddEmployee";
import PhoneInput from "react-phone-number-input";

const AddManager = () => {
  const [form] = Form.useForm();
  const naviate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addManager, { isLoading }] = useAddEmployeeMutation();

  const onFinish = async (values) => {
    console.log("Form values:", values);
    const formData = new FormData();
    console.log(formData);

    formData.append("fullName", values?.fullName);
    formData.append("password", values?.password);
    formData.append("address", values?.address);
    formData.append("email", values?.email);
    formData.append("phoneNumber", values?.phoneNumber);
    formData.append("role", values?.role);
    // Accessing the uploaded image file
    const imageFile = values.file?.[0]?.originFileObj;
    if (imageFile) {
      formData.append("file", imageFile);
      console.log("Uploaded Image File:", imageFile);
    } else {
      console.log("No image file uploaded.");
    }
    try {
      const res = await addManager(formData).unwrap();
      console.log(res);
      if (res?.code == 201) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        naviate("/dashboard/manager");
      }, 1000);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Toaster reverseOrder={false} />
      <h1
        onClick={() => naviate("/dashboard/manager")}
        className="border-none text-[#193664] text-2xl flex items-center cursor-pointer"
      >
        <IoIosArrowBack />
        Add Manager
      </h1>
      <div>
        <div className="xl:w-[1440px] items-center justify-center py-24 flex">
          <Form
            className="mx-auto"
            name="form_item_path"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            // initialValues={{  role : 'employee' }}
          >
            <div className="flex space-x-4">
              <Form.Item
                name="fullName"
                label="User Name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  placeholder="Enter user name"
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    borderColor: "#193664",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Enter password"
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    borderColor: "#193664",
                  }}
                />
              </Form.Item>
            </div>
            <div className="flex space-x-4">
              <Form.Item
                name="phoneNumber"
                label={
                  <span className="text-secondary text-[12px] font-medium">
                    Phone Number
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <PhoneInput
                  placeholder="Enter phone number"
                  international
                  countryCallingCodeEditable={false}
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    // border: '1px solid #193664', // Change this to your desired border color
                    // Adjust padding for a consistent look
                    outline: "none", // Remove default outline
                  }}
                  defaultCountry="BD"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </Form.Item>

              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input
                  placeholder="Enter address"
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    borderColor: "#193664",
                  }}
                />
              </Form.Item>
            </div>

            <div className="flex space-x-4">
              <Form.Item
                name="role"
                label="Role"
                initialValue="manager"
                rules={[{ required: true }]}
              >
                <Input
                  value="manager"
                  disabled
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    borderColor: "#193664",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  placeholder="Enter Email"
                  type="email"
                  style={{
                    width: "500px",
                    height: "56px",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    borderColor: "#193664",
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="file"
              label="Upload Photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "Please upload a photo!" }]}
            >
              <Upload
                name="file"
                listType="picture-card"
                beforeUpload={() => false} // Prevent upload immediately to server
                maxCount={1} // Restrict to 1 file
                onChange={({ fileList }) => {
                  // If a new file is selected, clear the old one
                  if (fileList.length > 1) {
                    fileList.splice(0, fileList.length - 1); // Keep only the latest file
                  }
                  // Update the file list in the form item
                  setFieldsValue({ file: fileList });
                }}
              >
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <FaCamera className="text-6xl text-[#193664]" />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item>

            {/* <Form.Item
              name="file"
              label="Upload Photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "Please upload a photo!" }]}
            >
              <Upload
                name="file"
                listType="picture-card"
                beforeUpload={() => false} // Prevent upload immediately to server
              >
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <FaCamera className="text-6xl text-[#193664]" />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item> */}

            <div className="update-button border-t-2 border-[#193664] py-4">
              <Button
                loading={isLoading}
                className="w-[860px] h-14 !bg-[#193664] !text-white font-bold"
                htmlType="submit"
              >
                Add Manager
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddManager;
