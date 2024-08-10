import React, { useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import { MdOutlineInfo } from "react-icons/md";
import "./RecentTransactions.css";
import TransactionModal from "./TransactionTableModal";

const columns = (onActionClick) => [
  {
    title: "#Tr.ID",
    dataIndex: "taxId",
    key: "taxId",
    render: (number) => <a>{number}</a>,
  },
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Subscription Package",
    dataIndex: "subPackage",
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
    taxId: "699999",
    name: "John Brown",
    subPackage: "basic",
    amount: " $250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    taxId: "699999",
    name: "Jim Green",
    subPackage: "basic",
    amount: "$250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    tags: ["loser"],
  },
  {
    key: "3",
    taxId: "699999",
    name: "Joe Black",
    subPackage: "basic",
    amount: "$250",
    date: "03-08-2024",
    action: <MdOutlineInfo></MdOutlineInfo>,
    subPackage: "basic",
    tags: ["cool", "teacher"],
  },
];

const RecentTransactionsTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const onActionClick = (record) => {
    setSelectedTransaction(record);
    setIsModalVisible(true);
  };

  return (
    <div className="bg-[#E8EBF0] my-12">
      <h1 className="p-4">Transactions</h1>
      <Table
        className="custom-table"
        columns={columns(onActionClick)}
        dataSource={data}
        style={{
          "--antd-table-header-bg": "red", // Custom CSS variable for header background
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
