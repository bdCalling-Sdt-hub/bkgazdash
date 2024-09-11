import React, { useState } from "react";
import { Button, Input, Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styles from './OrderTable.module.css';  // Single import for all styles
import OrderTransactionModal from "./OrderTransactionModal";
import SearchInput_itemName from "./searchInput_itemName/SearchInput_itemName";
import OrderSearchByDate from "./orderSearchByDate/OrderSearchByDate";
import OrderStatusSelectItem from "./orderStatusSelectItem/OrderStatusSelectItem";
import jsPDF from "jspdf";
import { DatePicker, Space } from 'antd';
import { useGetAllOrderQuery } from "../../redux/features/order/getAllorder";
const { RangePicker } = DatePicker;

const columns = (onActionClick) => [
    {
      title: "Package Item",
      dataIndex: "package",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (_, record) => (
        <div className={styles.packageItemContainer}>
           
          {record?.productId?.name}
        </div>
      )
    },
    {
      title: "Order id",
      dataIndex: "orderId",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (_, record) => (
        <p>{record?.transitionId}</p>
      )
    },
    {
      title: "Payment Status",
      dataIndex: "paymentType",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (_, record) => (
        <p>{record?.paymentMethod}</p>
      )
    },
    {
      title: " Date",
      dataIndex: "date_time",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (_, record) => (
        <p>{record?.createdAt ? record?.createdAt.split("T")[0]: "n/a"}</p>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (_, record) => (
        <p>{record?.paymentStatus}</p>
      )
    },
    {
      title: "Details",
      key: "action",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
      render: (text, record) => (
        <Button
          style={{
            backgroundColor: "#0B5B80",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          onClick={() => onActionClick(record)}
        >
          Details
        </Button>
      ),
    },
];

const originalData = [];
for (let i = 0; i < 46; i++) {
  originalData.push({
    key: i,
    id: `963222`,
    package: `36 kg(1)`,
    orderId: `#GAZ-06-001`,
    paymentType: `cash`,
    date_time: `10/12/2024 8pm`,
    status: i % 3 === 0 ? 'new' : i % 3 === 1 ? 'onShipment' : 'delivered', // Example dynamic status
    userName: `leo jhon`,
    email: `abc@gmail.com`,
    phoneNumber: `12345678`,
    payType: `kfc`,
    amount: `$250`,
    joindate: moment().subtract(i, "days").format("MM-DD-YYYY"), 
    address: `London, Park Lane no. ${i}`,
  });
}

const handleDownload = (record) => {
  const doc = new jsPDF();
  
  const padding = 20;  // Define padding value

  // Set up content with styling
  doc.setFontSize(22);
  doc.setTextColor(40);
  doc.text("Order Details", 105, padding, null, null, "center");

  // Add padding for the line below the title
  doc.setDrawColor(0, 0, 0);
  doc.line(padding, padding + 5, 210 - padding, padding + 5);

  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text(`Order ID:`, padding, padding + 15);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.orderId}`, padding + 50, padding + 15);

  doc.setFont("helvetica", "normal");
  doc.text(`Package Item:`, padding, padding + 25);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.package}`, padding + 50, padding + 25);

  doc.setFont("helvetica", "normal");
  doc.text(`Payment Status:`, padding, padding + 35);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.paymentType}`, padding + 50, padding + 35);

  doc.setFont("helvetica", "normal");
  doc.text(`Location & Date:`, padding, padding + 45);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.date_time}`, padding + 50, padding + 45);

  doc.setFont("helvetica", "normal");
  doc.text(`Order Status:`, padding, padding + 55);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.status}`, padding + 50, padding + 55);

  doc.setFont("helvetica", "normal");
  doc.text(`User Name:`, padding, padding + 65);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.userName}`, padding + 50, padding + 65);

  doc.setFont("helvetica", "normal");
  doc.text(`Email:`, padding, padding + 75);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.email}`, padding + 50, padding + 75);

  doc.setFont("helvetica", "normal");
  doc.text(`Phone Number:`, padding, padding + 85);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.phoneNumber}`, padding + 50, padding + 85);

  doc.setFont("helvetica", "normal");
  doc.text(`Amount:`, padding, padding + 95);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.amount}`, padding + 50, padding + 95);

  doc.setFont("helvetica", "normal");
  doc.text(`Address:`, padding, padding + 105);
  doc.setFont("helvetica", "bold");
  doc.text(`${record.address}`, padding + 50, padding + 105);

  // Optional: Add a footer
  doc.setFontSize(12);
  doc.text("Thank you for your order!", 105, 280, null, null, "center");

  // Save the PDF with the order ID as the file name
  doc.save(`${record.orderId}.pdf`);
};


const OrderTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [filteredData, setFilteredData] = useState(originalData);
    const navigate = useNavigate();

    const {data: allOrder, isLoading} = useGetAllOrderQuery()
    console.log(allOrder?.data?.attributes?.results);
    
  
    const onActionClick = (record) => {
      // console.log("reccccc>>>>>>>>>>>>>",record);
      
      navigate(`/dashboard/Order/orderDetails/${record?._id}`, { state: { orderDetails: record } });
      // navigate(`/dashboard/Order/orderDetails`, { state: { orderDetails: record } });
    };
  
    const handleDateSearch = (date) => {
      if (date) {
        const filtered = originalData.filter(
          (item) => item.date === date.format("MM-DD-YYYY")
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(originalData);
      }
    };
    const handleStatusChange = (status) => {
      if (status === 'all') {
        setFilteredData(originalData); // Reset to original data if 'All' is selected
      } else {
        const filtered = originalData.filter(item => item.status === status);
        setFilteredData(filtered);
      }
    };
    return (
      <div className={`bg-[#E8EBF0] w-[79vw] ${styles.tableContainer}`}>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="p-4">Order</h1>
          </div>
          <div className="justify-end space-x-4 p-4 flex">
            {/* <OrderSearchByDate onDateChange={handleDateSearch} /> */}
            <RangePicker />
            <p onClick={handleDownload} className="px-2 py-1 bg-blue-400 flex items-center text-center rounded cursor-pointer ">Download</p>
       
          
            <Input 
              placeholder="User Name"
              style={{paddingLeft: "15px"}}
              className="w-40 rounded-2xl"
            />
            <SearchInput_itemName />
          </div>
        </div>
        <Table
          className={`${styles.tableContainer}`}
          columns={columns(onActionClick)}
          dataSource={allOrder?.data?.attributes?.results}
          rowKey="key"
          rowClassName={(record) => {
            if (record.status === 'new') {
              return styles.newRow;
            } else if (record.status === 'onShipment') {
              return styles.onShipmentRow;
            } else if (record.status === 'delivered') {
              return styles.deliveredRow;
            }
            return '';
          }}
          pagination={{
            total: allOrder?.data?.attributes?.results.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 3,
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
        <OrderTransactionModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setSelectedTransaction={setSelectedTransaction}
          selectedTransaction={selectedTransaction}
        />
      </div>
    );
  };
  
  export default OrderTable;
