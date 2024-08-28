import React, { useState } from 'react';
import { Table } from 'antd';
import './UsersTable.css';
import { MdOutlineInfo } from "react-icons/md";
import EarningTransactionModal from './UsersTransactionModal';
import moment from 'moment';
import UserSearchInput from './searchInput/UserSearchInput';
import UserSearchByDate from './userSearchByDate/UserSearchByDate';

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
    title: 'Phone Number',
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
    if (date) {
      const filtered = originalData.filter(item => item.date === date.format("MM-DD-YYYY"));
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
        <div><h1 className='p-4'>Users List</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
        </div>
        <div className='justify-end p-4 flex'>
          <UserSearchByDate onDateChange={handleDateSearch} />
          <UserSearchInput />
        </div>
      </div>
      <Table
        className='custom-table'
        columns={columns(onActionClick)}
        dataSource={filteredData}
        pagination={{
          total: filteredData.length,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: 10,
          showSizeChanger: false,
          itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <a>Back</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          },
        }}
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
