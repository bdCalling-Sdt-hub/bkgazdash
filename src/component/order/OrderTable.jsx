import React, { useState } from "react";
import { Button, Input, Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styles from './OrderTable.module.css';  // Single import for all styles
import OrderTransactionModal from "./OrderTransactionModal";
import SearchInput_itemName from "./searchInput_itemName/SearchInput_itemName";
import OrderSearchByDate from "./orderSearchByDate/OrderSearchByDate";
import OrderStatusSelectItem from "./orderStatusSelectItem/OrderStatusSelectItem";

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
      render: (text, record) => (
        <div className={styles.packageItemContainer}>
          {record.status === 'new' && (
            <span className={styles.newLabel}>
              * New
            </span>
          )}
          {text}
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
    },
    {
      title: "Location & Date",
      dataIndex: "date_time",
      onHeaderCell: () => ({
        style: {
          backgroundColor: '#193664',
          color: 'white',
          fontWeight: 'bold',
          border: 'none'
        },
      }),
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

const OrderTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [filteredData, setFilteredData] = useState(originalData);
    const navigate = useNavigate();
  
    const onActionClick = (record) => {
      navigate("/orderDetails", { state: { orderDetails: record } });
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
    
            <OrderStatusSelectItem onStatusChange={handleStatusChange} />
          
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
          dataSource={filteredData}
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
            total: filteredData.length,
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
