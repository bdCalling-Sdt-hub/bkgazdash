import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import './SearchByYear.css';  
import DownArrowIcon from './DownArrowIcon';

const SearchByYear = ({ onDateChange }) => {
  const handleChange = (date) => {
    // Trigger the onDateChange callback with the selected year
    if (date) {
      onDateChange(date.year());
    }
  };

  return (
    <DatePicker
      picker="year"  // Set picker to "year" to allow only year selection
      onChange={handleChange}
      defaultValue={moment()}  // Default to the current year
      suffixIcon={<DownArrowIcon />}  // Custom icon if needed
      className="year-picker"
      placeholder='2024'
    />
  );
};

export default SearchByYear;
