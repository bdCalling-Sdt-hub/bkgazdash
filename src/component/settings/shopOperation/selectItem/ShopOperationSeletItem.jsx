import { useState } from 'react';
import { TreeSelect } from 'antd';
import './ShopOperationSelectItem.css'

const treeData = [
  {
    title: 'Open',
    value: '0-0',
  },
  {
    title: 'Closed',
    value: '0-1',
  },
];
const ShopOperationSelectItem = () => {
    
    const [value, setValue] = useState();
    const onChange = (newValue) => {
      console.log(newValue);
      setValue(newValue);
    };
    return (
      <TreeSelect
      className='custom-component'
        style={{
          width: '120px',
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

export default ShopOperationSelectItem;