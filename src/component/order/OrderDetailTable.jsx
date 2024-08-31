import { useState } from 'react';
import { Table, Button } from 'antd';
import styles from  './OrderTable.module.css';
import SearchByDate from '../../component/comnon/datePicker/SearchByDate';
import moment from 'moment';
import SearchInput_UserName from './searchInput_userName/SearchInput_userName';
import SearchInput_itemName from './searchInput_itemName/SearchInput_itemName';
import { useNavigate } from 'react-router-dom';
import PaymentStatusSelectItem from '../comnon/selectIem/PaymentStatusSelecttem';
import AssignSelectItem from '../comnon/selectIem/assignSelectItem/AssignSelectItem';
import { jsPDF } from "jspdf";

const columns = (onActionClick, onPaymentTypeChange, handleDownload) => [
    {
        title: 'Package Item',
        dataIndex: 'package',
    },
    {
        title: 'Order id',
        dataIndex: 'orderId',
    },
    {
        title: 'Payment Status',
        dataIndex: 'paymentType',
        render: (text, record) => (
            <PaymentStatusSelectItem
                defaultValue={record.paymentType}
                onChange={(value) => onPaymentTypeChange(record.key, value)}
            />
        ),
    },
    {
        title: 'Location & Date',
        dataIndex: 'date_time',
    },
    {
        title: 'Order Status',
        dataIndex: 'status',
        render: (text, record) => (
            <span className={record.status === 'complete' ? styles.completeStatus : ''}>
                {record.status}
            </span>
        ),
        
    },
    {
        title: 'Assign',
        key: 'assign',
        render: (text, record) => (
           <AssignSelectItem 
            className="bordered-select"
           defaultValue={record.paymentType}
           onChange={(value) => onPaymentTypeChange(record.ke, value)}
            />
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div className="flex space-x-2">
                <Button
                className={styles.customBtn} 
                    type="default"
                    onClick={() => handleDownload(record)}
                    
                >
                    Download
                </Button>
            </div>
        ),
    },
];

const originalData = [];
for (let i = 0; i < 1; i++) {
    originalData.push({
        key: i,
        id: `963222`,
        package: `36 kg(1)`,
        orderId: `#GAZ-06-001`,
        paymentType: `cash`,  // Default value that can be changed
        date_time: `2715 Ash Dr. San `,
        status: `complete`,
        userName: `leo jhon`,
        email: `abc@gmail.com`,
        phoneNumber: `12345678`,
        payType: `kfc`,
        amount: `$250`,
        joindate: moment().subtract(i, 'days').format("MM-DD-YYYY"),
        address: `London, Park Lane no. ${i}`,
    });
}

const OrderDetailTable = () => {
    const [filteredData, setFilteredData] = useState(originalData);
    const navigate = useNavigate();

    const onActionClick = (record) => {
        navigate('/orderDetails', { state: { orderDetails: record } });
    };

    const onPaymentTypeChange = (key, value) => {
        setFilteredData((prevData) =>
            prevData.map((item) =>
                item.key === key ? { ...item, paymentType: value } : item
            )
        );
    };

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
    
    const handleDateSearch = (date) => {
        if (date) {
            const filtered = originalData.filter(item => item.date_time === date.format("MM-DD-YYYY"));
            setFilteredData(filtered);
        } else {
            setFilteredData(originalData);
        }
    };

    return (
        <div className='bg-[#E8EBF0] my-12 w-[79vw]'>
            <div className='grid grid-cols-3'>
                <div> <h1 className='p-4'>Order</h1></div>
                <div className='grid grid-cols-3 gap-4 py-4'>
                    {/* Add other filters or components here if needed */}
                </div>
                {/* <div className='justify-end space-x-4 p-4 flex'>
                    <SearchByDate onDateChange={handleDateSearch} />
                    <SearchInput_UserName />
                    <SearchInput_itemName />
                </div> */}
            </div>
            <Table
                className='custom-table'
                columns={columns(onActionClick, onPaymentTypeChange, handleDownload)}  // Pass the handleDownload function
                dataSource={filteredData}
                pagination={false}
            />
        </div>
    );
};

export default OrderDetailTable;
