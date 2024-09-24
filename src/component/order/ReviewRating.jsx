import  { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = [""];
const ReviewRating = ({review}) => {
  console.log(review);
  
  const [value, setValue] = useState(4);
  return (
    <Flex gap="middle" vertical>
      <Rate className='text-[#1397D5]' tooltips={desc} onChange={setValue} value={value} />
      {value ? <span>{desc[value - 1]}</span> : null}
    </Flex>
  );
};
export default ReviewRating;