
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import  './UserSearchInput.css'


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'white',

    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const UserSearchInput = () => (
  <Space direction="vertical">
    <Search
      placeholder="User Name"
      onSearch={onSearch}
      className='custom-search-input custom-search-icon userSearch-ant-input'
      style={{
        width: 200,
        backgroundColor: "",
        activeBg: "red",
      
       
      }}
    />
    </Space>
  )



 export default UserSearchInput;