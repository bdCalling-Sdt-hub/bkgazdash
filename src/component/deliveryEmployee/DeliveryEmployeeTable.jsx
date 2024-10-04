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
import { useGetEmployeeQuery } from "../../redux/features/deliveryEmploye/getAllEmploy";

const columns = (onActionClick) => [
  {
    title: "Address",
    dataIndex: "address",
    render: ( _, record) => (
      <p>{record?.address}</p>
    )
  },
  {
    title: "User name",
    dataIndex: "userName",
    render: ( _, record) => (
      <p>{record?.fullName}</p>
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

  const [name, setName] = useState(''); 

  
    const { data: allEmployee, isLoading } = useGetEmployeeQuery(name);
  // console.log(allEmployee?.data?.attributes?.results);
  

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filteredData, setFilteredData] = useState(originalData);
  const onActionClick = (record) => {
    // setSelectedTransaction(record);
    navigate(`/dashboard/deliveryEmployee/detialsDeliveryEmployee`, { state: { employeeDetails: record } });
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
    navigate("/dashboard/deliveryEmployee/addEmployee");
  };
  const onSearch = (value) => {
    setName(value)
    // console.log(value);
    
  }

  return (
    <div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]]">
        <Button
          onClick={handleAddEmployee}
          type="primary"
          className="flex items-center bg-[#193664] w-[206px] h-[56px] rounded-md"
        >
          <GoPlus className="mr-2" />
          Add Employee
        </Button>
      </div>
      <div className="bg-[#E8EBF0] my-6 w-[79vw]">
        <div className="grid grid-cols-3">
          <div>
            <h1 className="p-4 text-xl font-bold">Employee</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className=""></div>
          </div>
          <div className="justify-end p-4 gap-4 flex">
            <SearchInput onSearch={onSearch}/>{" "}
          </div>
        </div>
        <Table
          className="custom-table"
          // rowSelection={rowSelection}
          columns={columns(onActionClick)}
          dataSource={allEmployee?.data?.attributes?.results}
          pagination={{
            total: allEmployee?.data?.attributes?.results.length,
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
        <DeliveryEmployeeTableModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setSelectedTransaction={setSelectedTransaction}
          selectedTransaction ={selectedTransaction}
        />
      </div>
    </div>
  );
};

export default DeliveryEmployeeTable;
