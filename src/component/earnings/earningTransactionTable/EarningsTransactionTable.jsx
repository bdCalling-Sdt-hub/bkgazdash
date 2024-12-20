import React, { useState } from 'react';
import { Table, Modal, Button, DatePicker } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
// import './earning.css'
import styles from './../../../style.module.css'


import { BsInfoCircle } from 'react-icons/bs';
import { useGetEarningRecentTransactionQuery } from '../../../redux/features/getEarningsRecentTransactionApi';
import EarningSearchByDate from '../earningSearchByDate/EarningSearchByDate';
import SearchInput from '../../comnon/searchInput/SearchInput';
import jsPDF from 'jspdf';
import UserSearchInput from '../../users/searchInput/UserSearchInput';
  
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
 const [datee , setDate] = useState('')
 const [name , setName] = useState('')
 const {data: earning, isLoading} = useGetEarningRecentTransactionQuery({date: datee, userName :name})
//  console.log("earnin>>>>>>>>>>>",earning?.data?.attributes);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [transaction, setTransaction] = useState()
//  console.log(transaction);
 
 
  
 let date = transaction?.createdAt?.split("T")[0] ? transaction?.createdAt?.split("T")[0] : "N/A"
 
 const handleDownload = (record) => {
  const doc = new jsPDF();
  const padding = 20;

  // Add Title
  doc.setFontSize(22);
  doc.setTextColor(40);
  doc.text("Earning Details", 105, padding, null, null, "center");
  doc.setDrawColor(0, 0, 0);
  doc.line(padding, padding + 5, 210 - padding, padding + 5);

  // Define the content data
  const content = [
      { label: "Order ID", value: transaction?.transitionId || "N/A" },
      { label: "Package Item", value: transaction?.userId?.fullName || "N/A" },
      { label: "Payment Status", value: transaction?.userId?.email || "N/A" },
      { label: "Location & Date", value: record?.createdAt ? record.createdAt.split("T")[0] : "N/A" },
      { label: "Order Status", value: transaction?.userId?.phoneNumber || "N/A" },
      { label: "Amount", value: record?.subtotal || "N/A" },
      { label: "Address", value: transaction?.userId?.address || "N/A" },
  ];

  // Add each line to the PDF
  doc.setFontSize(16);
  doc.setTextColor(0);
  content.forEach((item, index) => {
      doc.setFont("helvetica", "normal");
      doc.text(`${item.label}:`, padding, padding + 15 + index * 10);
      doc.setFont("helvetica", "bold");
      doc.text(`${item.value}`, padding + 50, padding + 15 + index * 10);
  });

  // Add a closing message
  doc.setFontSize(12);
  doc.text("Thank you for your order!", 105, 280, null, null, "center");

  // Save the PDF
  doc.save(`${'Earning Details' || 'Erning'}.pdf`);
};
 
//  const handleDownload = () => {
//   const doc = new jsPDF();
//   // Adding content to PDF
//   doc.text("Full Name: " + transaction?.userId?.fullName, 10, 10);
//   doc.text("Email: " + transaction?.userId?.email, 10, 20);
//   doc.text("Transaction ID: " +  transaction?.transitionId, 10, 30);
//   doc.text("Phone: " + transaction?.userId?.phoneNumber, 10, 40);
//   doc.text("Date: " + date, 10, 50);
//   doc.text("Address: " + transaction?.userId?.address, 10, 60);
  
//   // Save the PDF
//   doc.save(`Earning_details.pdf`);
// };



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
      <p>{record?.subtotal}</p>
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
  setTransaction(value)
    // console.log(value?.userId.fullName)
    setIsModalOpen(true);
  };
  const handlePageChange = (page) => {
    setPage(page);
     
  };
  const handleSearch = (value) => {
    console.log(value);
    setName(value)
    
  } 
  const onChange = (date, dateString) => {
    setDate(dateString); 
  };

  return (
    <div className="table-container">
        <div className='grid grid-cols-3'>
        <div><h1 className='p-4'>Recent Transaction</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
        </div>
        <div className='flex justify-end gap-4 p-4'> 
        <DatePicker onChange={onChange} />
          {/* <UserSearchInput onSearch={handleSearch} /> */}
        </div>
      </div>
      <Table
        dataSource={earning?.data?.attributes?.results}
        columns={columns}
        pagination={{
          total: earning?.data?.attributes?.results.length,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: 10,
          showSizeChanger: false,
          itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <Button className={styles.paginationButton}>Back</Button>;
            }
            if (type === 'next') {
              return <Button className={styles.paginationButton}>Next</Button>;
            }
            return originalElement;
          },
          className: styles.paginationCenter,
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
          <p className="text-[16px] mb-[16px]">Earning details</p>
        </div>
        <div style={{fontFamily:'Aldrich'}} className="p-[20px]">
        <div className="flex justify-between border-b py-[16px]">
            <p>Full Name:</p>
            <p>
              {transaction?.userId?.fullName ? transaction?.userId?.fullName : "abSayed"}
              {/* {value?.userId?.fullName ? value?.userId?.fullName : "N/A"} */}
              {/* absayed */}
            </p>
          </div> 
         
          <div className="flex justify-between border-b py-[16px] ">
            <p>Email:</p>
            <p>
            {transaction?.userId?.email ? transaction?.userId?.email : "n/a"}
              {/* ab@gmail.com */}
            </p>
          </div>

          <div className="flex justify-between border-b py-[16px]">
            <p>TransactionID:</p>
            <p>
              {transaction?.transitionId ? transaction?.transitionId : "#3958F56"}
              {/* {value?.userId?.fullName ? value?.userId?.fullName : "N/A"} */}
              {/* absayed */}
            </p>
          </div>

          <div className="flex justify-between border-b py-[16px]">
            <p>Phone:</p>
            <p>
            {transaction?.userId?.phoneNumber ? transaction?.userId?.phoneNumber : "+35435"}
              {/* +45269875 */}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Date:</p>
            <p>
            <p>{transaction?.createdAt?.split("T")[0] ? transaction?.createdAt?.split("T")[0] : "N/A"}</p>
         
            </p>
          </div>
          <div className="flex justify-between items-center pt-[16px]">
            <p>address:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
            {transaction?.userId?.address ? transaction?.userId?.address : " UK"}
             
            </p>
          </div>

        </div>
         
         <div className='flex flex-col justify-center pb-5'>  
             <button onClick={handleDownload} className='bg-sky-600 text-white px-2 w-52 mx-auto py-1 rounded-lg'>Download</button> 
      </div>
         </div>
      </Modal>
    </div>
  );
};

export default RecentTransactionTable;
