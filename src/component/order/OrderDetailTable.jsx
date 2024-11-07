import { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import styles from './OrderTable.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentStatusSelectItem from '../comnon/selectIem/PaymentStatusSelecttem';
import AssignSelectItem from '../comnon/selectIem/assignSelectItem/AssignSelectItem';
import { jsPDF } from "jspdf";
import { FaBackward } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { useAssignEmployeeMutation } from '../../redux/features/order/assignedEmployee';
import toast, { Toaster } from 'react-hot-toast';
import { useGetProductReviewQuery } from '../../redux/features/order/getReview';
import Review from './Review';



const OrderDetailTable = () => {
    const [filteredData, setFilteredData] = useState([]);
    const location = useLocation();
    
    const { orderDetails } = location.state || {};
    console.log(orderDetails);
    const id = orderDetails?.productId?._id
    const {data: review} = useGetProductReviewQuery(id)
    console.log(review);

    const [ assignedEmployee] = useAssignEmployeeMutation()

    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    // This function will handle the onChange event from AssignSelectItem
    const handleEmployeeChange = async (newValue) => {
    //   console.log(newValue);
      const data = {
        employeeId : newValue,
        orderId : orderDetails?._id
      }
      try{
        const res = await assignedEmployee(data).unwrap();
        if(res?.code == 200){
            toast.success(res?.message)
        }
      }catch(error){
        console.log(error);
        toast.error(error?.data?.message)
        
      }
      
     
    };
    
    const columns = (handleDownload) => [
        {
            title: 'Package Item',
            dataIndex: 'package',
            render: (text, record) => (
                <span>
                    {record?.productId?.name}
                </span>
            ),
        },
        {
            title: 'Order id',
            dataIndex: 'orderId',
            render: (text, record) => (
                <span>
                   <p>{record?.transitionId}</p>
                </span>
            ),
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentType',
            render: (text, record) => (
                <p>{record?.paymentStatus}</p>
            ),
        },
        {
            title: 'Location & Date',
            dataIndex: 'date_time',
            render: (text, record) => (
                <span>
                    <p>{record?.createdAt ? record?.createdAt.split("T")[0]: "n/a"}</p>
                </span>
            ),
        },
        {
            title: 'Order Status',
            dataIndex: 'status',
            render: (text, record) => (
                <span className={record?.status === 'complete' ? styles.completeStatus : ''}>
                    {record?.status}
                </span>
            ),
        },
        {
            title: 'Assign',
            key: 'assign',
            render: (text, record) => (
                record?.assignedEmployee ? (
                    <span>{record?.assignedEmployee?.fullName}</span>
                ) : (
                    <AssignSelectItem 
                        className="bordered-select"
                        defaultValue="Unassigned" // Default to "Unassigned" if no assigned employee
                        onChange={handleEmployeeChange}
                    />
                )
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

    
    useEffect(() => {
        if (orderDetails) {
            // Set filteredData to the single orderDetails object
            setFilteredData([orderDetails]);
        } else {
            // Default to originalData if no orderDetails is provided
            // setFilteredData(originalData);
        }
    }, [orderDetails]);

    // const onPaymentTypeChange = (key, value) => {
    //     setFilteredData((prevData) =>
    //         prevData.map((item) =>
    //             item.key === key ? { ...item, paymentType: value } : item
    //         )
    //     );
    // };

    // const handleDownload = (record) => {
    //     const doc = new jsPDF();
    //     const padding = 20;

    //     doc.setFontSize(22);
    //     doc.setTextColor(40);
    //     doc.text("Order Details", 105, padding, null, null, "center");
    //     doc.setDrawColor(0, 0, 0);
    //     doc.line(padding, padding + 5, 210 - padding, padding + 5);

    //     doc.setFontSize(16);
    //     doc.setTextColor(0);
    //     doc.text(`Order ID:`, padding, padding + 15);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.orderId}`, padding + 50, padding + 15);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Package Item:`, padding, padding + 25);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.package}`, padding + 50, padding + 25);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Payment Status:`, padding, padding + 35);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.paymentType}`, padding + 50, padding + 35);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Location & Date:`, padding, padding + 45);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.date_time}`, padding + 50, padding + 45);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Order Status:`, padding, padding + 55);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.status}`, padding + 50, padding + 55);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`User Name:`, padding, padding + 65);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.userName}`, padding + 50, padding + 65);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Email:`, padding, padding + 75);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.email}`, padding + 50, padding + 75);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Phone Number:`, padding, padding + 85);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.phoneNumber}`, padding + 50, padding + 85);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Amount:`, padding, padding + 95);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.amount}`, padding + 50, padding + 95);

    //     doc.setFont("helvetica", "normal");
    //     doc.text(`Address:`, padding, padding + 105);
    //     doc.setFont("helvetica", "bold");
    //     doc.text(`${record.address}`, padding + 50, padding + 105);

    //     doc.setFontSize(12);
    //     doc.text("Thank you for your order!", 105, 280, null, null, "center");

    //     doc.save(`${record.orderId}.pdf`);
    // };

    const handleDownload = (record) => {
        const doc = new jsPDF();
        const padding = 20;
    
        // Add Title
        doc.setFontSize(22);
        doc.setTextColor(40);
        doc.text("Order Details", 105, padding, null, null, "center");
        doc.setDrawColor(0, 0, 0);
        doc.line(padding, padding + 5, 210 - padding, padding + 5);
    
        // Define the content data
        const content = [
            { label: "Order ID", value: record?.transitionId || "N/A" },
            { label: "Package Item", value: record?.productId?.name || "N/A" },
            { label: "Payment Status", value: record?.paymentStatus || "N/A" },
            { label: "Location & Date", value: record?.createdAt ? record.createdAt.split("T")[0] : "N/A" },
            { label: "Order Status", value: record?.status || "N/A" },
            { label: "User Name", value: record?.userId?.fullName || "N/A" },
            { label: "Email", value: record?.userId?.email || "N/A" },
            { label: "Phone Number", value: record?.userId?.phoneNumber || "N/A" },
            { label: "Amount", value: record?.subtotal || "N/A" },
            { label: "Address", value: record?.userId?.address || "N/A" },
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
        doc.save(`${'Order Details' || 'order'}.pdf`);
    };
    



const navigate = useNavigate()
    return (
        <div>

        <div className='bg-[#E8EBF0] my-12 w-[79vw]'>
            <Toaster />
            <div className='grid grid-cols-3 gap-2'>
                <div className='flex items-center p-4'> 
                    <p onClick={() => navigate('/dashboard/order')} > <MdArrowBack /> </p>
                    <h1 className=''>Order</h1>
                </div>
                <div className='grid grid-cols-3 gap-4 py-4'>
                   
                </div>
            </div>
            <Table
                className='custom-table'
                columns={columns(handleDownload)}  
                dataSource={filteredData}
                pagination={false}
            />
           
        </div>
        <h1 className="text-2xl font-bold">Review</h1>
        <Review review = {review}/>
        </div>
    );
};

export default OrderDetailTable;

 