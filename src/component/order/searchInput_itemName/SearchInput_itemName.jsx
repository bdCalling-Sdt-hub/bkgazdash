
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "./SearchInput_itemName.css"


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

const SearchInput_itemName = ({onSearch}) => (
  <Space direction="vertical">
    <Search
      placeholder="Item Name"
      onSearch={onSearch}
      className='custom-search-input custom-search-icon'
      style={{
        width: 200,
        backgroundColor: "",
        activeBg: "red"
      }}
    />
    </Space>
  )

  export default SearchInput_itemName;