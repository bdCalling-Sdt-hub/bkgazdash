
import { DatePicker} from 'antd';
import styles from './UserSearchDatePicker.module.css'

const UserSearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    onDateChange(date)
    

  }
  return <DatePicker placeholder='Date' onChange={handleChange}
  className={styles.userDatepicker} // Apply the custom class
  />
} 
export default UserSearchByDate;