import { useState } from 'react';
import { Table } from 'antd';
import './OrderTable.css';
import { MdOutlineInfo } from "react-icons/md";
import SearchByDate from '../../component/comnon/datePicker/SearchByDate';
import moment from 'moment';
import SearchInput_UserName from './searchInput_userName/SearchInput_userName';
import SearchInput_itemName from './searchInput_itemName/SearchInput_itemName';

import { useNavigate } from 'react-router-dom';
import PaymentStatusSelectItem from '../comnon/selectIem/PaymentStatusSelecttem';
import AssignSelectItem from '../comnon/selectIem/assignSelectItem/AssignSelectItem';

const columns = (onActionClick, onPaymentTypeChange) => [
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
    },
    {
        title: 'Assign',
        key: 'action',
        render: (text, record) => (
           <AssignSelectItem 
           defaultValue={record.paymentType}
           onChange={(value) => onPaymentTypeChange(record.ke, value)}
            />
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
        date_time: `10/12/2024 8pm`,
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
                <div className='justify-end space-x-4 p-4 flex'>
                    <SearchByDate onDateChange={handleDateSearch} />
                    <SearchInput_UserName />
                    <SearchInput_itemName />
                </div>
            </div>
            <Table
                className='custom-table'
                columns={columns(onActionClick, onPaymentTypeChange)}  // Pass the onPaymentTypeChange handler
                dataSource={filteredData}
                pagination={false}
            />
        </div>
    );
};

export default OrderDetailTable;
