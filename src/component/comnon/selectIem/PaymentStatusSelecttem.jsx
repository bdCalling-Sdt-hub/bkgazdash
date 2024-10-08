import { useState } from 'react';
import { TreeSelect } from 'antd';
import './PaymentStatusSelecttem.css'

const treeData = [
  {
    title: 'Completed',
    value: '0-0',
  },
  {
    title: 'Not Completed',
    value: '0-1',
  },
];
const PaymentStatusSelectItem = () => {
    
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

export default PaymentStatusSelectItem;