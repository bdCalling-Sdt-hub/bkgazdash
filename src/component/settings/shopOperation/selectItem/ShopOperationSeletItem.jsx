// import { useState } from 'react';
// import { TreeSelect } from 'antd';
// import './ShopOperationSelectItem.css'
// import { useGetTimeQuery } from '../../../../redux/features/shopOparetion/getTime';
// import { useStatusChangeMutation } from '../../../../redux/features/shopOparetion/statusChange';

// const treeData = [
//   {
//     title: 'Open',
//     value: 'close',
//   },
//   {
//     title: 'Closed',
//     value: 'open',
//   },
// ];



// const ShopOperationSelectItem = () => {

//   const {data: time,} = useGetTimeQuery()
//   // console.log(time?.data?.attributes?._id);
//   console.log(time?.data?.attributes?.isOpen);
  
//   // const [changeStatus, {isLoading}] = useStatusChangeMutation()
    
//     const [value, setValue] = useState();
//     const onChange = (newValue) => {
//       setValue(newValue);
//       console.log(value);
//     };

//     const statusChange = async() => {
//        const data = {
//         status : value
//        }
//     }


//     return (
//       <TreeSelect
//       className='custom-component'
//       style={{
//         width: '120px',
//       }}
//       value={value}
//       dropdownStyle={{
//         maxHeight: 400,
//         overflow: 'auto',
        
//       }}
//       treeData={treeData}
//       placeholder="Please select"
//       treeDefaultExpandAll
//       onChange={onChange}
//     />
//     );
// };

// export default ShopOperationSelectItem;
import { useState, useEffect } from 'react';
import { Select } from 'antd';  // Import the Select component from antd
import './ShopOperationSelectItem.css';
import { useGetTimeQuery } from '../../../../redux/features/shopOparetion/getTime';
import { useStatusChangeMutation } from '../../../../redux/features/shopOparetion/statusChange';
import toast, { Toaster } from 'react-hot-toast';

const { Option } = Select; // Destructure Option from Select

const ShopOperationSelectItem = () => {
  const { data: time } = useGetTimeQuery();
  const [value, setValue] = useState(null); // Initialize value as null
 const [changeStatus, {isLoading}] = useStatusChangeMutation()
  // Use useEffect to set the default value based on isOpen
  useEffect(() => {
    if (time?.data?.attributes?.isOpen !== undefined) {
      setValue(time.data.attributes.isOpen ? 'open' : 'close');
    }
  }, [time]);

  const onChange = async(newValue) => {
    setValue(newValue);
 
    const data = {
      status: newValue,  
      shopId: time.data.attributes?._id
    };
    // console.log(data);
      try{
        const res = await changeStatus(data).unwrap();
        // console.log(res);
        if(res?.code == 200){
          toast.success(res?.message)
        }
        
      }catch(error){
        console.log(error);
        
      }
  };

   

  return (
    <div>
      <Toaster />
    <Select
      className="custom-component"
      style={{
        width: '120px',
      }}
      value={value} // Bind value to the current state
      placeholder="Please select"
      onChange={onChange}  // Update value when user selects an option
      // onClick={statusChange} // Trigger status change on click
    >
      <Option value="open">Open</Option> {/* Replace with Option */}
      <Option value="close">Closed</Option> {/* Replace with Option */}
    </Select>
    </div>
  );
};

export default ShopOperationSelectItem;
