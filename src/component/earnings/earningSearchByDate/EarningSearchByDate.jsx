
import { DatePicker} from 'antd';
import styles from './EarningSearchByDatePicker.module.css';

const EarningSearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    onDateChange(date)
    

  }
  return <DatePicker placeholder='Date' onChange={handleChange}
  className={styles.customDatePicker} // Apply the custom class
  />
} 
export default EarningSearchByDate;