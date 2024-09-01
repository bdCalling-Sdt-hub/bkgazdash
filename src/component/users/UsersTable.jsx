import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import './UsersTable.css';
import { MdOutlineInfo } from "react-icons/md";
import EarningTransactionModal from './UsersTransactionModal';
import moment from 'moment';
import UserSearchInput from './searchInput/UserSearchInput';
import UserSearchByDate from './userSearchByDate/UserSearchByDate';
import { useGetAllUserApiQuery } from '../../redux/features/user/getAllUserApi';

const columns = (onActionClick) => [
  {
    title: 'Address',
    dataIndex: 'address',
    render: (text) => text || 'N/A',
  },
  {
    title: 'User name',
    dataIndex: 'userName',
    render: (text) => text || 'N/A',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (text) => text || 'N/A',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    render: (text) => text || 'N/A',
  },
  {
    title: 'Join Date',
    dataIndex: 'joinDate',
    render: (text) => text || 'N/A',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <MdOutlineInfo onClick={() => onActionClick(record)} />
    ),
  },
];

const UsersTable = () => {
  const { data, isLoading, isError, error } = useGetAllUserApiQuery();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data?.data?.attributes?.results) {
      const formattedData = data.data.attributes.results.map((user, index) => ({
        key: user._id,
        userName: user.fullName || 'N/A',
        email: user.email || 'N/A',
        phoneNumber: user.phoneNumber || 'N/A',
        joinDate: moment(user.createdAt).format("MM-DD-YYYY"),
        address: user.address || 'N/A',
        ...user, // Include the rest of the user object if needed
      }));
      setFilteredData(formattedData);
    }
  }, [data]);

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
      const filtered = filteredData.filter(item => moment(item.joinDate).isSame(date, 'day'));
      setFilteredData(filtered);
    } else {
      setFilteredData(filteredData);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-[#E8EBF0] my-12 w-[79vw]'>
      <div className='grid grid-cols-3'>
        <div><h1 className='p-4'>Users List</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
        </div>
        <div className='justify-end p-4 gap-3 flex'>
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






// const originalData = [];
// for (let i = 0; i < 46; i++) {
//   originalData.push({
//     key: i,
//     id: `963222`,
//     userName: `leo jhon`,
//     email: `abc@gmail.com`,
//     phoneNumber: `12345678`,
//     payType: `kfc`,
//     amount: `$250`,
//     joindate: moment().subtract(i, 'days').format("MM-DD-YYYY"), // Generate dates dynamically
//     address: `London, Park Lane no. ${i}`,
//   });
// }
