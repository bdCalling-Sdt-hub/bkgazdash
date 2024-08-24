import { useState } from "react";
import { Button, Table } from "antd";
import "./DeliveryEmployeeTable.css";
import { MdOutlineInfo } from "react-icons/md";
import SearchInput from "../../component/comnon/searchInput/SearchInput";
import SearchByDate from "../comnon/datePicker/SearchByDate";
import moment from "moment";
import DeliveryEmployeeTableModal from "./DeliveryEmployeeModal";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const columns = (onActionClick) => [
  {
    title: "Address",
    dataIndex: "id",
  },
  {
    title: "User name",
    dataIndex: "userName",
  },
  {
    title: "Email",
    dataIndex: "payType",
  },
  {
    title: "Phone number",
    dataIndex: "amount",
  },
  {
    title: "Password",
    dataIndex: "date",
  },
  {
    title: "Details",
    key: "action",
    render: (text, record) => (
      <MdOutlineInfo onClick={() => onActionClick(record)} />
    ),
  },
];

const originalData = [];
console.log(originalData);
for (let i = 0; i < 46; i++) {
  originalData.push({
    key: i,
    id: `963222`,
    userName: `leo jhon`,
    payType: `kfc`,
    amount: `$250`,
    date: moment().subtract(i, "days").format("MM-DD-YYYY"), // Generate dates dynamically
    address: `London, Park Lane no. ${i}`,
  });
}

const DeliveryEmployeeTable = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filteredData, setFilteredData] = useState(originalData);
  const onActionClick = (record) => {
    setSelectedTransaction(record);
    navigate("/detialsDeliveryEmployee", { state: { transaction: record } });
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // const handleDateSearch = (date) => {
  //   console.log(
  //     "Selected date:",
  //     date ? date.format("MM-DD-YYYY") : "No date selected"
  //   );
  //   if (date) {
  //     const filtered = originalData.filter(
  //       (item) => item.date === date.format("MM-DD-YYYY")
  //     );
  //     console.log("Filtered data:", filtered);
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(originalData);
  //   }
  // };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleAddEmployee = () => {
    navigate('/addEmployee')
  };

  return (
    <div className="bg-[#E8EBF0] my-12 w-[79vw]">
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button
          onClick={handleAddEmployee}
          type="primary"
          className="flex items-center bg-[#193664]"
        >
          <GoPlus className="mr-2" />
          Add Employee
        </Button>
      </div>
      <div className="grid grid-cols-3">
        <div>
          {" "}
          <h1 className="p-4 text-xl font-bold">Employee</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className=""></div>
        </div>
        <div className="justify-end p-4 gap-4 flex">
          <SearchInput />{" "}
        </div>
      </div>
      <Table
        className="custom-table"
        rowSelection={rowSelection}
        columns={columns(onActionClick)}
        dataSource={filteredData}
      />
      <DeliveryEmployeeTableModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setSelectedTransaction={setSelectedTransaction}
        selectedTransaction={selectedTransaction}
      />
    </div>
  );
};

export default DeliveryEmployeeTable;
