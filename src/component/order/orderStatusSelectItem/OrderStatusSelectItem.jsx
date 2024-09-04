import { useState } from 'react';
import { TreeSelect } from 'antd';
// import './OrderStatusSelectItem.css'
import './OrderStatusSelectItem.css'

// const treeData = [
//   {
//     title: 'Newest',
//     value: '0-0',
//   },
//   {
//     title: 'On Shipment',
//     value: '0-1',
//   },
//   {
//     title: 'Delivered',
//     value: '0-2',
//   },
// ];


const treeData = [
  {title: 'All', value: 'all'},
  {title: 'August', value: 'new'},
  {title: 'Sep', value: 'onShipment'},
  {title: 'Dec', value: 'delivered'},
]
const PaymentStatusSelectItem = ({onStatusChange}) => {
    
    const [value, setValue] = useState();
    
    const onChange = (newValue) => {
      console.log(newValue);
      setValue(newValue);
      if(onStatusChange) {
        onStatusChange(newValue)
      }
    };
    return (
      <TreeSelect
  className='custom-component'
  style={{ width: '20%' }}
  value={value}
  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
  treeData={treeData}
  placeholder="Please select"
  treeDefaultExpandAll
  onChange={onChange}
/>
    );
};

export default PaymentStatusSelectItem;