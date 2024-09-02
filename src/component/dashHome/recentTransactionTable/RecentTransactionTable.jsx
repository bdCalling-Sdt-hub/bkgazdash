import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
 
import './RecentTransactions.css'

import { BsInfoCircle } from 'react-icons/bs';
import { useGetDashRecentTransactionApiQuery } from '../../../redux/features/getDashRecentTransactionApi';

const RecentTransactionTable = () => {
 const {data: recentTransaction, isLoading} = useGetDashRecentTransactionApiQuery()
//  console.log(recentTransaction?.data?.attributes);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [transaction, setTransaction] = useState()

const columns = [
  {
    title: '#Transaction ID',
    dataIndex: 'applicationId',
    key: 'applicationId',
    render: ( _, record) => (
      <p>{record?.transitionId}</p>
    )
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
    render: (_, record) => (
      <p>{record?.userId?.fullName}</p>
 ),
  },
  {
    title: 'Payment Type',
    dataIndex: 'Payment',
    key: 'Payment',
    render: (_, record) => (
       <p>{record?.paymentMethod}</p>
  ),
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    render: (_, record) => (
      <p>{record?.userId?.totalCashBalance}</p>
 ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => (
      <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>

    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
        <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" />
    ),
  },
];

const handleView = (value) => {
  // setTransaction(value)
  //   console.log(value)
    setIsModalOpen(true);
  };


  return (
    <div className="table-container">
        <h1 className='text-[20px] font-medium my-2'>Recent Transaction</h1>
      <Table
        dataSource={recentTransaction?.data?.attributes}
        columns={columns}
        pagination={false}
        bordered
        
      />
        <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white", // Icon color
              backgroundColor: "#de0a26", // Background color of the close icon
              borderRadius: "10%", // Rounded background
              padding: "10px", // Padding inside the background
            }}
          />
        }
      >
      
      <div>
        <div style={{fontFamily:'Aldrich'}} className="flex justify-center py-4 items-center gap-2 flex-col border-b border-b-gray-300">
          {/* <img className="w-[140px] h-[140px] rounded-full my-4"   src={users} alt="" /> */}
          <p className="text-[16px] mb-[16px]">absayed</p>
        </div>
        <div style={{fontFamily:'Aldrich'}} className="p-[20px]">
        <div className="flex justify-between border-b py-[16px]">
            <p>Full Name:</p>
            <p>
              {/* {user?.name ? user?.name : "N/A"} */}
              absayed
            </p>
          </div>
        
         
          <div className="flex justify-between border-b py-[16px] ">
            <p>Email:</p>
            <p>
              {/* {user?.email ? user?.email : "N/A"} */}
              ab@gmail.com
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Phone:</p>
            <p>
              {/* {user?.phone ? user?.phone : "N/A"} */}
              +45269875
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Date:</p>
            <p>
              {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
              23-11-24
            </p>
          </div>
          <div className="flex justify-between items-center pt-[16px]">
            <p>address:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {/* Regular P550 */}
              UK
            </p>
          </div>

        </div>
      </div>
      </Modal>
    </div>
  );
};

export default RecentTransactionTable;
