import { useState } from 'react';
import { Table } from 'antd';
import './OrderTable.css';
import { MdOutlineInfo } from "react-icons/md";

import SearchByDate from '../../component/comnon/datePicker/SearchByDate';
import moment from 'moment';
import OrderTransactionModal from './OrderTransactionModal';
import SearchInput_UserName from './searchInput_userName/SearchInput_userName';
import SearchInput_itemName from './searchInput_itemName/SearchInput_itemName';

const columns = (onActionClick) => [
    {
        title: 'Package Item',
        dataIndex: 'package',
    },
    {
        title: 'Order id',
        dataIndex: 'orderId',
    },
    {
        title: 'Payment Type',
        dataIndex: 'paymentType',
    },
    {
        title: 'Date & Time',
        dataIndex: 'date_time',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <MdOutlineInfo onClick={() => onActionClick(record)} />
        ),
    },
];

const originalData = [];
console.log(originalData)
for (let i = 0; i < 46; i++) {
    originalData.push({
        key: i,
        id: `963222`,
        package: `36 kg(1)`,
        orderId: `#GAZ-06-001`,
        paymentType: `cash`,
        date_time: `10/12/2024 8pm`,
        status: `pending`,
        userName: `leo jhon`,
        email: `abc@gmail.com`,
        phoneNumber: `12345678`,
        payType: `kfc`,
        amount: `$250`,
        joindate: moment().subtract(i, 'days').format("MM-DD-YYYY"), // Generate dates dynamically
        address: `London, Park Lane no. ${i}`,
    });
}

const OrderTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [filteredData, setFilteredData] = useState(originalData);

    const onActionClick = (record) => {
        setSelectedTransaction(record);
        setIsModalVisible(true);
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleDateSearch = (date) => {
        console.log("Selected date:", date ? date.format("MM-DD-YYYY") : "No date selected");
        if (date) {
            const filtered = originalData.filter(item => item.date === date.format("MM-DD-YYYY"));
            console.log("Filtered data:", filtered);
            setFilteredData(filtered);
        } else {
            setFilteredData(originalData);
        }
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <div className='bg-[#E8EBF0] my-12 w-[79vw]'>
            <div className='grid grid-cols-3'>
                <div> <h1 className='p-4'>Appointments</h1></div>
                <div className='grid grid-cols-3 gap-4 py-4'>
                    <div className=''>
                        <SearchByDate onDateChange={handleDateSearch} />
                    </div>
                   
                </div>
                <div className='justify-end space-x-4 p-4 flex'> <SearchInput_UserName />
                <SearchInput_itemName />
                 </div>
            </div>
            <Table
                className='custom-table'
                rowSelection={rowSelection}
                columns={columns(onActionClick)}
                dataSource={filteredData}
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
