import React, { useState } from "react";
import { Button, Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styles from './OrderTable.module.css';  // Single import for all styles
import OrderTransactionModal from "./OrderTransactionModal";
import jsPDF from "jspdf";
import { DatePicker } from 'antd';
import { useGetAllOrderQuery } from "../../redux/features/order/getAllorder";
const { RangePicker } = DatePicker;

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
    const navigate = useNavigate();

    const handleRangeChange = (dates) => {
        if (dates) {
            const startDate = dates[0].format("YYYY-MM-DD");
            const endDate = dates[1].format("YYYY-MM-DD");
            setStartDate(startDate);
            setEndDate(endDate);
            console.log(`Selected dates: ${startDate} to ${endDate}`);
        } else {
            console.log('No date selected');
        }
    };

    // Only trigger the query when both startDate and endDate are present
    const { data: allOrder, isLoading, refetch } = useGetAllOrderQuery();
    console.log(allOrder);
    

    const onActionClick = (record) => {
        navigate(`/dashboard/Order/orderDetails/${record?._id}`, { state: { orderDetails: record } });
    };

    const handleDownload = (record) => {
        const doc = new jsPDF();
        const padding = 20;
        doc.setFontSize(22);
        doc.setTextColor(40);
        doc.text("Order Details", 105, padding, null, null, "center");
        doc.setDrawColor(0, 0, 0);
        doc.line(padding, padding + 5, 210 - padding, padding + 5);

        doc.setFontSize(16);
        doc.setTextColor(0);
        doc.text(`Order ID:`, padding, padding + 15);
        doc.setFont("helvetica", "bold");
        doc.text(`${record.orderId}`, padding + 50, padding + 15);
        // Rest of the fields...
        doc.save(`${record.orderId}.pdf`);
    };

    return (
        <div className={`bg-[#E8EBF0] w-[79vw] ${styles.tableContainer}`}>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="p-4">Order</h1>
                </div>
                <div className="justify-end space-x-4 p-4 flex">
                    <RangePicker onChange={handleRangeChange} />
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
