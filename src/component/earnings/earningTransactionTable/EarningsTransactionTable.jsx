import  { useEffect, useState } from 'react';
import { Table } from 'antd';
import './EarningTransaction.css';
import { MdOutlineInfo } from "react-icons/md";
import SearchInput from '../../comnon/searchInput/SearchInput';
import EarningTransactionModal from './EarningTransactionModal';
import SearchByDate from '../../comnon/datePicker/SearchByDate';
import moment from 'moment';
import { useGetEarningRecentTransactionQuery } from '../../../redux/features/getEarningsRecentTransactionApi';


const columns = (onActionClick) => [
  {
    title: '#Tr.Id',
    dataIndex: 'trId',
  },
  {
    title: 'User name',
    dataIndex: 'userName',
  },
  {
    title: 'Payment Type',
    dataIndex: 'payType',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'A/C Number',
    dataIndex: 'acNo',
  },
  {
    title: 'A/C Name',
    dataIndex: 'acName',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <MdOutlineInfo onClick={() => onActionClick(record)} />
    ),
  },
];

// const originalData = [];
// console.log(originalData)
// for (let i = 0; i < 46; i++) {
//   originalData.push({
//     key: i,
//     id: `963222`,
//     userName: `leo jhon`,
//     payType: `kfc`,
//     amount: `$250`,
//     date: moment().subtract(i, 'days').format("MM-DD-YYYY"), // Generate dates dynamically
//     address: `London, Park Lane no. ${i}`,
//   });
// }

const TransactionList = () => {
  const { data, isLoading, isError, error } = useGetEarningRecentTransactionQuery();
  console.log(data);
  

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if(data && data?.data && data?.data?.attributes?.results) {
      const formattedData = data?.data?.attributes?.results?.map((item) => ({
        key: item?._id,
        trId: item?.transitionId,
        userName: item?.userId?.fullName,
        // acNo: item?.userId?.fullName,
        // acName: item?.userId?.fullName,
        payType: item?.paymentMethod,
        amount: `$${item?.totalPrice}`, 
        date: moment(item.createdAt).format("MM-DD-YYYY"),
      }));
      setFilteredData(formattedData);

    }
  }, [data])

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
      const filtered = filteredData.filter(item => item.date === date.format("MM-DD-YYYY"));
      console.log("Filtered data:", filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    }
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
        <div> <h1 className='p-4'>Recent Transaction</h1></div>
        <div className='grid grid-cols-3 gap-4 py-4'>
        </div>
        <div className='flex justify-end gap-4 p-4'> 
        <SearchByDate onDateChange={handleDateSearch} />
          <SearchInput /> </div>
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

export default TransactionList;
