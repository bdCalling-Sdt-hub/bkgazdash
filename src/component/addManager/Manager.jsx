import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { MdOutlineInfo } from "react-icons/md";
import './Manager.css';
import TransactionModal from "./ManagerModal";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
// import { useGetDashRecentTransactionApiQuery } from "../../../redux/features/getDashRecentTransactionApi";
 

const columns = (onActionClick) => [
  {
    title: "#Tr.Id",
    dataIndex: "TrId",
    key: "TrId",
    render: (number) => <a>{number}</a>,
  },
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Payment Type",
    dataIndex: "payType",
    key: "subPackage",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (number) => <a>{number}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => (
      <MdOutlineInfo onClick={() => onActionClick(record)} />
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
  console.log(data?.data?.attributes);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [fomattedData, setFormattedData] = useState([]);
  console.log("88, recent Transaction",fomattedData);

  useEffect(() => {
    if(data?.data?.attributes && Array.isArray(data?.data?.attributes)) {
      const formatted = data?.data?.attributes.map((item) => ({
        key: item._id,
        trId: item?.transitionId,
        name: item?.fullName,
        payType: item.payType,
        amount: `$${item.amount}`,
        date: item.date,
      }))
      setFormattedData(formatted)
    }
  }, [data])

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
  return (
    <div className="w-[1500px]">
   <Button
          onClick={()=> navigate('/addmanager')}
          type="primary"
          className="flex items-center bg-[#193664] w-[206px] h-[56px] rounded-md"
        >
          <GoPlus className="mr-2" />
          Add Manager
        </Button>
    <div className="bg-[#E8EBF0] my-12">
        
      <h1 className="p-4">Manager List</h1>
      <Table
        className="custom-table"
        columns={columns(onActionClick)}
        dataSource={data}
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
