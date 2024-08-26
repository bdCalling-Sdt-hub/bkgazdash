
import { DatePicker} from 'antd';


const SearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    onDateChange(date)

  }
  return <DatePicker onChange={handleChange}  />
} 
export default SearchByDate;