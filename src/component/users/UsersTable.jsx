import  { useState } from 'react';
import { Table } from 'antd';
import './UsersTable.css';
import { MdOutlineInfo } from "react-icons/md";
import SearchInput from '../comnon/searchInput/SearchInput';
import EarningTransactionModal from './UsersTransactionModal';
import SearchByDate from '../../component/comnon/datePicker/SearchByDate';
import moment from 'moment';

const columns = (onActionClick) => [
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'User name',
    dataIndex: 'userName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phome Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Join Date',
    dataIndex: 'joindate',
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
    userName: `leo jhon`,
    email: `abc@gmail.com`,
    phoneNumber: `12345678`,
    payType: `kfc`,
    amount: `$250`,
    joindate: moment().subtract(i, 'days').format("MM-DD-YYYY"), // Generate dates dynamically
    address: `London, Park Lane no. ${i}`,
  });
}

const UsersTable = () => {
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
        <div> <h1 className='p-4'>Users List</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
          <div className=''>
            <SearchByDate onDateChange={handleDateSearch} />
          </div>
          <div><h1>User Name</h1></div>
        </div>
        <div className='justify-end p-4 flex'> <SearchInput /> </div>
      </div>
      <Table 
        className='custom-table' 
        rowSelection={rowSelection} 
        columns={columns(onActionClick)} 
        dataSource={filteredData} 
      />
      <EarningTransactionModal 
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setSelectedTransaction={setSelectedTransaction}
        selectedTransaction={selectedTransaction}
      />
    </div>
  );
};

export default UsersTable;
