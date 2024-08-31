

import { useState } from 'react';
import { TreeSelect } from 'antd';
import './AssignSelect.css'

const treeData = [
  {
    title: 'Liam',
    value: '0-0',
  },
  {
    title: 'James',
    value: '0-1',
  },
  {
    title: 'Henry',
    value: '0-2',
  },
];
const AssignSelectItem = () => {
    
    const [value, setValue] = useState();
    const onChange = (newValue) => {
      console.log(newValue);
      setValue(newValue);
    };
    return (
      <TreeSelect
      className='custom-component'
        style={{
          width: '80%',
          height: "38px",
          border: "1px solid #193664",
          borderRadius: "20px"
        }}
        value={value}
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
        }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={onChange}
      />
    );
};

export default AssignSelectItem;