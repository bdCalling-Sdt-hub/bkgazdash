import React, { useState } from 'react';
import { DatePicker, Table } from 'antd';
import './UsersTable.css';
import { MdOutlineInfo } from "react-icons/md";
import EarningTransactionModal from './UsersTransactionModal';
import UserSearchInput from './searchInput/UserSearchInput';
import { useGetAllUsersQuery } from '../../redux/features/users/getAllUsers';

const UsersTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [date, setDate] = useState(null); // Set initial date as null
  const [searchValue, setSearchValue] = useState(''); // Search value for users
  
  // Fetch users based on both date and searchValue
  const { data: allUsers, isLoading, error } = useGetAllUsersQuery({ date, fullName: searchValue });

  const onActionClick = (record) => {
    setSelectedTransaction(record);
    setIsModalVisible(true);
  };

  const onChange = (date, dateString) => {
    setDate(dateString); // When date is selected, update the state
  };

  const handleSearch = (value) => {
    setSearchValue(value); // Update search value
  };

  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      render: (_, record) => <p>{record?.address || 'N/A'}</p>,
    },
    {
      title: 'User name',
      dataIndex: 'fullName',
      render: (_, record) => <p>{record?.fullName || 'N/A'}</p>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (_, record) => <p>{record?.email || 'N/A'}</p>,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      render: (_, record) => <p>{record?.phoneNumber || 'N/A'}</p>,
    },
    {
      title: 'Join Date',
      dataIndex: 'joindate',
      render: (_, record) => <p>{record?.createdAt?.split('T')[0] || 'N/A'}</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => <MdOutlineInfo size={20} onClick={() => onActionClick(record)} />,
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className="bg-[#E8EBF0] my-12 w-[79vw]">
      <div className="grid grid-cols-3">
        <div><h1 className="p-4">Users List</h1></div>
        <div className="grid grid-cols-3 gap-4 py-4"></div>
        <div className="justify-end p-4 gap-3 flex">
          <DatePicker onChange={onChange} />
          <UserSearchInput onSearch={handleSearch} />
        </div>
      </div>
      <Table
        className="custom-table"
        columns={columns}
        dataSource={allUsers?.data?.attributes?.results}
        pagination={{
          total: allUsers?.data?.attributes?.results?.length || 0,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: 4,
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
