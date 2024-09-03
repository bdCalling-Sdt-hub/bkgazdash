import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
import './earning.css'


import { BsInfoCircle } from 'react-icons/bs';
import { useGetEarningRecentTransactionQuery } from '../../../redux/features/getEarningsRecentTransactionApi';
import EarningSearchByDate from '../earningSearchByDate/EarningSearchByDate';
import SearchInput from '../../comnon/searchInput/SearchInput';
  
const dataSource = [
  {
    key: '1',
    
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
    phone:'4536656'
  },
  {
    key: '2',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
    phone:'4536656'
  },
  {
    key: '3',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
    phone:'4536656'
  },
]

const RecentTransactionTable = () => {
 
 const {data: earning, isLoading} = useGetEarningRecentTransactionQuery()
 console.log("earnin>>>>>>>>>>>",earning?.data?.attributes);
 
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
  const handlePageChange = (page) => {
    setPage(page);
     
  };
 

  return (
    <div className="table-container">
        <div className='grid grid-cols-3'>
        <div><h1 className='p-4'>Recent Transaction</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
        </div>
        <div className='flex justify-end gap-4 p-4'> 
          <EarningSearchByDate  />
          <SearchInput /> 
        </div>
      </div>
      <Table
        dataSource={earning?.data?.attributes?.results}
        columns={columns}

        pagination={{
          
          total: earning?.data?.attributes?.totalResults, // This should represent the total number of items
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          pageSize: earning?.data?.attributes?.limit || 10, // This is the number of items per page
          current: earning?.data?.attributes?.page || 1, // This is the current page number
          showSizeChanger: false,
          onChange:{handlePageChange},
          itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <a>Back</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          },
        }}

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
