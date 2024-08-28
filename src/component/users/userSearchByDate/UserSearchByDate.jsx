
import { DatePicker} from 'antd';
import './UserSearchDatePicker.css'

const UserSearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    onDateChange(date)
    

  }
  return <DatePicker placeholder='Date' onChange={handleChange}
  className="custom-datepicker" // Apply the custom class
  />
} 
export default UserSearchByDate;