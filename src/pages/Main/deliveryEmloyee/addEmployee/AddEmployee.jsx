 


import React from "react";
import { Button, Form, Input, Upload } from "antd";
import { FaCamera } from "react-icons/fa";
import "./addEmployee.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAddEmployeeMutation } from "../../../../redux/features/deliveryEmploye/AddEmployee";
import toast, { Toaster } from "react-hot-toast";

const AddEmployee = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [addEmployee, { isLoading }] = useAddEmployeeMutation();

  const onFinish = async (values) => {
    // console.log("Form values:", values);
    const formData = new FormData();

    // Append the required fields to the formData
    formData.append('fullName', values?.fullName);  // Correct field name
    formData.append('password', values?.password);  // Ensure lowercase 'password'
    formData.append('address', values?.address);    // Ensure 'address' is included
    formData.append('phoneNumber', values?.phoneNumber);
    formData.append('role', values?.role); // Employee role

    // Access the uploaded image file
    const imageFile = values.file?.[0]?.originFileObj;
    if (imageFile) {
      formData.append('file', imageFile);
      // console.log("Uploaded Image File:", imageFile);
    } else {
      console.log("No image file uploaded.");
    }

    try {
      const res = await addEmployee(formData).unwrap();
      // console.log(res);
      if (res?.code === 201) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate("/dashboard/deliveryEmployee");
        }, 1000);
      }
    } catch (error) {
      toast.error(error?.data?.message);
      console.log(error?.data);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleEmployee = () => {
    navigate("/dashboard/deliveryEmployee");
  };

  return (
    <div>
      <Toaster reverseOrder={false} />
      <div
        onClick={handleEmployee}
        className="border-none text-[#193664] flex items-center cursor-pointer"
      >
        <IoIosArrowBack />
        Add Employee
      </div>
      <div>
        <div className="xl:w-[1440px] items-center justify-center py-24 flex">
          <Form
            className="mx-auto"
            name="form_item_path"
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="flex space-x-4">
              <Form.Item
                name="fullName"
                label="User Name"
                rules={[{ required: true, message: "Please input your username!" }]}
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
                rules={[{ required: true, message: "Please input your password!" }]}
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
                label="Phone Number"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input
                  placeholder="Enter phone number"
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
                name="address"
                label="Address"
                rules={[{ required: true, message: "Please input your address!" }]}
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

            <Form.Item
              name="role"
              label="Role"
              initialValue="employee"
              rules={[{ required: true }]}
            >
              <Input
                value="employee"
                disabled
                style={{
                  width: "1000px",
                  height: "56px",
                  borderRadius: "8px",
                  paddingLeft: "10px",
                  borderColor: "#193664",
                }}
              />
            </Form.Item>

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
              >
                <button
                  style={{ border: 0, background: "none" }}
                  type="button"
                >
                  <FaCamera className="text-6xl text-[#193664]" />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>

            <div className="update-button border-t-2 border-[#193664] py-4">
              <Button
                className="w-[860px] h-14 !bg-[#193664] !text-white font-bold"
                htmlType="submit"
              >
                Add Employee
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

