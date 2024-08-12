
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "./SearchInput_userName.css"


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
const SearchInput_UserName = () => (
  <Space direction="vertical">
    <Search
      placeholder="User Name"
      onSearch={onSearch}
      className='custom-search-input_user custom-search-icon'
      style={{
        width: 200,
        backgroundColor: "",
        activeBg: "red"
      }}
    />
    </Space>
  )

  export default SearchInput_UserName;