import React, { useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { MdOutlineInfo } from "react-icons/md";
import "./RecentTransactions.css";
import TransactionModal from "./TransactionTableModal";
import { useGetDashRecentTransactionApiQuery } from "../../../redux/features/getDashRecentTransactionApi";

const columns = (onActionClick) => [
  {
    title: "#TrId",
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

const RecentTransactionsTable = () => {
  const {data, isLoading, isError, error} = useGetDashRecentTransactionApiQuery();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const onActionClick = (record) => {
    setSelectedTransaction(record);
    setIsModalVisible(true);
  };

  return (
    <div className="bg-[#E8EBF0] my-12">
      <h1 className="p-4">Recent Transactions</h1>
      <Table
        className="custom-table"
        columns={columns(onActionClick)}
        dataSource={data}
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
  );
};

export default RecentTransactionsTable;
