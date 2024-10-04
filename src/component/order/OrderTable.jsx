import React, { useState } from "react";
import { Button, Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styles from './OrderTable.module.css';  // Single import for all styles
import OrderTransactionModal from "./OrderTransactionModal";
import jsPDF from "jspdf";
import { DatePicker } from 'antd';
import { useGetAllOrderQuery } from "../../redux/features/order/getAllorder";
import SearchInput_itemName from "./searchInput_itemName/SearchInput_itemName";
const { RangePicker } = DatePicker;
import exportFromJSON from 'export-from-json'

// Define columns for the table
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
            <p>{record?.createdAt ? record?.createdAt.split("T")[0] : "n/a"}</p>
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

const OrderTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
     const [productName, setProductName] = useState('')
     console.log(productName);
     
    const handleRangeChange = (dates) => {
        if (dates) {
            const start = dates[0].format("YYYY-MM-DD");
            const end = dates[1].format("YYYY-MM-DD");
            setStartDate(start);
            setEndDate(end);
            console.log(`Selected dates: ${start} to ${end}`);
        } else {
            console.log('No date selected');
        }
    };

    // Pass startDate and endDate to the query
    const { data: allOrder, isLoading, refetch } = useGetAllOrderQuery({ startDate, endDate,  productName });

    console.log(allOrder);
    const filteredOrders = allOrder?.data?.attributes?.results.filter(order =>
        order.productId?.name.toLowerCase().includes(searchValue.toLowerCase())
    ) || [];
    

    const onActionClick = (record) => {
        navigate(`/dashboard/Order/orderDetails/${record?._id}`, { state: { orderDetails: record } });
    };
    const handleDownload = () => {
        const dataToDownload = filteredOrders.map(order => ({
            OrderID: order?.transitionId,
            ProductName: order?.productId?.name,
            PaymentMethod: order?.paymentMethod,
            PaymentStatus: order?.paymentStatus,
            Date: order?.createdAt ? order?.createdAt.split("T")[0] : "n/a",
            Status: order?.status,
            TotalPrice: order?.totalPrice
        }));
    
        const fileName = 'orderData';
        const exportType = exportFromJSON.types.csv;
        exportFromJSON({ data: dataToDownload, fileName, exportType });
    };

    const onsearch = (value) => {
        setProductName(value)
        
    }

    return (
        <div className={`bg-[#E8EBF0] w-[79vw] ${styles.tableContainer}`}>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="p-4">Order</h1>
                </div>
                <div className="justify-end space-x-4 p-4 flex">
                    <RangePicker onChange={handleRangeChange} />
                    <SearchInput_itemName onSearch={onsearch} />
                    <p onClick={handleDownload} className="px-2 py-1 bg-blue-400 flex items-center text-center rounded cursor-pointer">Download</p>
                </div>
            </div>
            <Table
                className={`${styles.tableContainer}`}
                columns={columns(onActionClick)}
                dataSource={allOrder?.data?.attributes?.results || []}
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
