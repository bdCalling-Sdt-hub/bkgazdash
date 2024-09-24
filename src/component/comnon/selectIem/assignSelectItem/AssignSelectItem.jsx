import { useState } from 'react';
import { TreeSelect } from 'antd';
import './AssignSelect.css';
import { useGetEmployeeQuery } from '../../../../redux/features/deliveryEmploye/getAllEmploy';

const AssignSelectItem = ({ onChange }) => {
  const { data: employees } = useGetEmployeeQuery();
  
  // Map employees data to treeData format
  const treeData = employees?.data?.attributes?.results?.map((employee) => ({
    title: employee.fullName, // Employee's name as the title
    value: employee._id, // Use employee's _id as the value
  })) || [];

  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    // console.log('Selected Employee ID:', newValue); // Log selected employee ID
    setValue(newValue); // Set the value in the local state
    onChange(newValue); // Call the parent's onChange function
  };

  return (
    <TreeSelect
      className='custom-component'
      style={{
        width: '200px',
        height: "38px",
        border: "1px solid #193664",
        borderRadius: "20px"
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData} // Using dynamically mapped treeData with _id as value
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={handleChange} // Handle selection change
    />
  );
};

export default AssignSelectItem;
