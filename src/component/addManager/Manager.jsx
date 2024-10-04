import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { MdOutlineInfo } from "react-icons/md";
import './manager.css';
import TransactionModal from "./ManagerModal";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { useAllManagerQuery } from "../../redux/features/manager/getAllManager";
import SearchInput from "../comnon/searchInput/SearchInput";
  
 

const columns = (onActionClick) => [
  {
    title: "Address",
    dataIndex: "address",
    render: ( _, record) => (
      <p>{ record?.address  || 'n/a'}</p>
    )
  },
  {
    title: "User name",
    dataIndex: "userName",
    render: ( _, record) => (
      <p>{record?.fullName || "n/a"}</p>
    )
  },
  {
    title: "Email",
    dataIndex: "payType",
    render: ( _, record) => (
      <p>{record?.email}</p>
    )
  },
  {
    title: "Phone number",
    dataIndex: "amount",
    render: ( _, record) => (
      <p>{record?.phoneNumber}</p>
    )
  },
  {
    title: "Date",
    dataIndex: "date",
    render: ( _, record) => (
      <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
    ),
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

const data = [
  {
    key: "1",
    TrId: "699999",
    acNumber: "*** *** *** *545",
    name: "John Brown",
    payType: "basic",
    amount: " $250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    TrId: "699999",
    name: "Jim Green",
    payType: "Orrange Money",
    amount: "$250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    tags: ["loser"],
  },
  {
    key: "3",
    TrId: "699999",
    name: "Joe Black",
    amount: "$250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    payType: "basic",
    tags: ["cool", "teacher"],
  },
];

const Manager = () => {
  // const {data, isLoading, isError, error} = useGetDashRecentTransactionApiQuery();
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [fomattedData, setFormattedData] = useState([]);
  console.log("88, recent Transaction",fomattedData);
  const [name, setName] = useState(''); 

 const {data: allManager, isLoading} = useAllManagerQuery(name)
 console.log(allManager?.data?.attributes?.results);
 

  const onActionClick = (record) => {
    setSelectedTransaction(record);
    setIsModalVisible(true);
  };

  // if(isLoading) {
  //   return <Loading />
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>
  // }
const navigate = useNavigate()
const onSearch = (value) => {
  setName(value)
 
  
}
  return (
    <div className="w-[1500px]">
      <div>

   <Button
          onClick={()=> navigate('/dashboard/manager/addmanager')}
          type="primary"
          className="flex items-center !bg-[#193664] w-[206px] h-[56px] rounded-md"
        >
          <GoPlus className="mr-2" />
          Add Manager
        </Button>
        
      </div>
    <div className="bg-[#E8EBF0] my-12">
        <div className="flex justify-between items-center px-4">
      <h1 className="p-4">Manager List</h1>
      <SearchInput onSearch={onSearch}/>

        </div>
      <Table
        className="custom-table"
        columns={columns(onActionClick)}
        dataSource={allManager?.data?.attributes?.results}
        pagination={false}
        style={{
          "--antd-table-header-bg": "red", 
        }}
      />
      <TransactionModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setSelectedTransaction={setSelectedTransaction}
        selectedTransaction={selectedTransaction}
      />
    </div>
    </div>
  );
};

export default Manager;
