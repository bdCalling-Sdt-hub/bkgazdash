import { useState } from 'react';
import { TreeSelect } from 'antd';
import './OpenCloseSlectItem.css'

const treeData = [
  {
    title: 'Open',
    value: '0-0',
  },
  {
    title: 'Close',
    value: '0-1',
  },
];
const OpenCloseSlectItem = () => {
    
    const [value, setValue] = useState();
    const onChange = (newValue) => {
      console.log(newValue);
      setValue(newValue);
    };
    return (
      <TreeSelect
      className='custom-component'
        style={{
          width: '10%',
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

export default OpenCloseSlectItem;