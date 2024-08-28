
import { DatePicker} from 'antd';
import './EarningSearchByDatePicker.css'

const EarningSearchByDate = ({onDateChange}) =>{
  const handleChange = (date) => {
    onDateChange(date)
    

  }
  return <DatePicker placeholder='Date' onChange={handleChange}
  className="custom-datepicker" // Apply the custom class
  />
} 
export default EarningSearchByDate;