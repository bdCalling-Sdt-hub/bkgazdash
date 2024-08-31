
import { DatePicker} from 'antd';
import styles from './OrderSearchByDate.module.css'


const OrderSearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    
    onDateChange(date)

  }
  return <DatePicker
  className={styles.orderCustomDatePicker}
  onChange={handleChange}  />
} 
export default OrderSearchByDate;