
import { DatePicker} from 'antd';
import moment from 'moment';

const SearchByYear = ({onDateChange}) =>{
    const handleChange = (date) => {
        // Trigger the onDateChange callback with the selected year
        if(date) {
            onDateChange(date.year());
        }
      };
    
      return (
        <DatePicker
          picker="year"  // Set picker to "year" to allow only year selection
          onChange={handleChange}
          defaultValue={moment()}  // Default to the current year
        />
      );
    };
export default SearchByYear;