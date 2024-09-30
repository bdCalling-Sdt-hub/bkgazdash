import { Button, Form, Image, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import baseUrl from "../../../redux/api/baseUrl";
import { useGetProfileQuery } from "../../../redux/features/profile/getProfile";

const ManagerProfile = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState(''); 
    const user = JSON.parse(localStorage.getItem('user-update'));
    
    console.log("User ID:", user?.user._id); // Log user ID

    const { data: managerProfile, error, isLoading } = useGetProfileQuery(user?.user?._id,)  

   

    return (
        <div className="2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
            <div>
                <Button className='border-none !text-[#193664] !bg-white'>
                    <IoIosArrowBack />
                    Personal Profile
                </Button>
            </div>
            <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
                <Button
                    onClick={() => navigate(`/managerlayout/managereditprofile?id=${managerProfile?.data?.attributes?._id}`)}
                    type="primary"
                    className="flex items-center bg-[#193664] w-[206px] h-[56px]"
                >
                    <GoPlus className="mr-2" />
                    Edit Profile
                </Button>
            </div>
            {/* Profile section */}
            <div className="mt-12 flex">
                <div className="w-1/12">
                    <div className="border-[#193664] border bg-[#E8EBF0] rounded-md items-center w-[300px] h-[365px] flex flex-col justify-center">
                        <div className="rounded-full overflow-hidden h-[100px] w-[100px] mx-auto">
                            <Image src={baseUrl + managerProfile?.data?.attributes?.image} height={100} width={100} />
                        </div>
                        <div className="text-center py-6">
                            <h1 className="text-[#5C5C5C]">Profile</h1>
                            <p className="text-xl py-2 text-[#333333] font-bold">{managerProfile?.data?.attributes?.role}</p>
                        </div>
                    </div>
                </div>
                <div className="w-6/12">
                    <Form
                        name="userProfile"
                        labelCol={{ span: 25 }}
                        wrapperCol={{ span: 60 }}
                        layout="vertical"
                        className="w-[300px] mx-auto"
                    >
                        <Form.Item
                            name="name"
                            label={<span className="text-secondary text-[12px] font-medium">Name</span>}
                        >
                            <Input
                                size="large" 
                                readOnly
                                defaultValue={managerProfile?.data?.attributes?.fullName}
                                style={{
                                    border: "1px solid #193664",
                                    paddingLeft: '10px',
                                    height: "52px",
                                    width: "720px",
                                    background: "#ffffff",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                                bordered={false}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={<span className="text-secondary text-[12px] font-medium">Email</span>}
                        >
                            <Input
                                size="large"
                                readOnly
                                defaultValue={managerProfile?.data?.attributes?.email}
                                style={{
                                    border: "1px solid #193664",
                                    paddingLeft: '10px',
                                    height: "52px",
                                    background: "#ffffff",
                                    outline: "none",
                                    marginBottom: "10px",
                                    width: "720px"
                                }}
                                bordered={false}
                            />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label={<span className="text-secondary text-[12px] font-medium">Phone Number</span>}
                        >
                            <Input
                                size="large"
                                readOnly
                                defaultValue={managerProfile?.data?.attributes?.phoneNumber}
                                style={{
                                    border: "1px solid #193664",
                                    paddingLeft: '10px',
                                    height: "52px",
                                    background: "#ffffff",
                                    outline: "none",
                                    marginBottom: "10px",
                                    width: "720px"
                                }}
                                bordered={false}
                            />
                        </Form.Item> 
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ManagerProfile;
