import React, { useState } from "react";
import { Button, Table, DatePicker } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styles from './Order.module.css';  // Import all styles from CSS module
import jsPDF from "jspdf";
import { useGetAllOrderQuery } from "../../../redux/features/order/getAllorder";
import SearchInput_itemName from "../../../component/order/searchInput_itemName/SearchInput_itemName";

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
        title: "Order ID",
        dataIndex: "orderId",
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#193664',
                color: 'white',
                fontWeight: 'bold',
                border: 'none'
            },
        }),
        render: (_, record) => <p>{record?.transitionId}</p>
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
        render: (_, record) => <p>{record?.paymentMethod}</p>
    },
    {
        title: "Date",
        dataIndex: "date_time",
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#193664',
                color: 'white',
                fontWeight: 'bold',
                border: 'none'
            },
        }),
        render: (_, record) => <p>{record?.createdAt ? record?.createdAt.split("T")[0] : "n/a"}</p>
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
        render: (_, record) => <p>{record?.paymentStatus}</p>
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

const Order = () => {
    const [searchValue, setSearchValue] = useState('');
    // console.log(searchValue);
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
    const navigate = useNavigate();


    const handleRangeChange = (dates) => {
        if (dates) {
            const startDate = dates[0].format("YYYY-MM-DD");
            const endDate = dates[1].format("YYYY-MM-DD");
            setStartDate(startDate)
            setEndDate(endDate)
            console.log(`Selected dates: ${startDate} to ${endDate}`);

        } else {
            console.log('No date selected');
        }
    };


    const { data: allOrder, isLoading, error } = useGetAllOrderQuery({startDate, endDate});
    
    const onActionClick = (record) => {
        navigate(`/dashboard/Order/orderDetails/${record?._id}`, { state: { orderDetails: record } });
    };

    
 

    // Filter the orders based on the search value
    const filteredOrders = allOrder?.data?.attributes?.results.filter(order =>
        order.productId?.name.toLowerCase().includes(searchValue.toLowerCase())
    ) || [];

    const handleDownload = (record) => {
        const doc = new jsPDF();
        const padding = 20;  // Define padding value

        // Set up content with styling
        doc.setFontSize(22);
        doc.setTextColor(40);
        doc.text("Order Details", 105, padding, null, null, "center");

     
        doc.setDrawColor(0, 0, 0);
        doc.line(padding, padding + 5, 210 - padding, padding + 5);

        doc.setFontSize(16);
        doc.setTextColor(0);
        doc.text(`Order ID:`, padding, padding + 15);
        doc.setFont("helvetica", "bold");
        doc.text(`${'tractdsdd'}`, padding + 50, padding + 15);

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

    return (
        <div className={`bg-[#E8EBF0] w-[79vw] ${styles.tableContainer}`}>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="p-4">Order</h1>
                </div>
                <div className="justify-end space-x-4 p-4 flex">
                <RangePicker onChange={handleRangeChange} />
                    <p onClick={handleDownload} className="px-2 py-1 bg-blue-400 flex items-center text-center rounded cursor-pointer">Download</p>
                    {/* <SearchInput_itemName onSearch={onSearch} /> */}
                </div>
            </div>
            <Table
                className={`${styles.tableContainer}`}
                columns={columns(onActionClick)}
                dataSource={filteredOrders} // Use filtered orders here
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
                    total: filteredOrders.length,
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
        </div>
    );
};

export default Order;
