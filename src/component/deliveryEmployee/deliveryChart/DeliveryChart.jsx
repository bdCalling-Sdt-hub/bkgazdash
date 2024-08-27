import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SearchByDate from './../../comnon/datePicker/SearchByDate';
import moment from 'moment';

const DeliveryChart = () => {
  const [year, setYear] = useState('2024');
 

  const data = [
    { name: 'Jan', uv: 4000, pv: 2000, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 5000, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 8000, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 10000, amt: 2000 },
    { name: 'May', uv: 1890, pv: 6000, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 4000, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 7000, amt: 2100 },
    { name: 'Aug', uv: 3490, pv: 9000, amt: 2100 },
    { name: 'Sep', uv: 3490, pv: 3000, amt: 2100 },
    { name: 'Oct', uv: 3490, pv: 2000, amt: 2100 },
    { name: 'Nov', uv: 3490, pv: 5000, amt: 2100 },
    { name: 'Dec', uv: 3490, pv: 12000, amt: 2100 },
  ];

  const formatYAxis = (tickItem) => {
    // Display the Y-axis values in the format of 0k, 2k, 4k, etc.
    return `${tickItem / 1000}`;
  };

  const originalData = [];
console.log(originalData)
for (let i = 0; i < 46; i++) {
  originalData.push({
    key: i,
    id: `963222`,
    userName: `leo jhon`,
    payType: `kfc`,
    amount: `$250`,
    date: moment().subtract(i, 'days').format("MM-DD-YYYY"), // Generate dates dynamically
    address: `London, Park Lane no. ${i}`,
  });
}
const [filteredData, setFilteredData] = useState(originalData);

const handleDateSearch = (date) => {
  console.log("Selected date:", date ? date.format("MM-DD-YYYY") : "No date selected");
  if (date) {
    const filtered = originalData.filter(item => item.date === date.format("MM-DD-YYYY"));
    console.log("Filtered data:", filtered);
    setFilteredData(filtered);
  } else {
    setFilteredData(originalData);
  }
};
  return (
    <div className=' bg-[#E8EBF0] rounded-lg '>
     <div className='flex justify-between p-2'>
     <h1 className='text-[#333333] text-[20px] font-bold'>Delivery</h1>
     <SearchByDate onDateChange={handleDateSearch}/>
     </div>
      <div className="pt-8 w-full   pb-6 h-[318px] mt-5 rounded-xl border-2 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis 
              tickFormatter={formatYAxis} 
              ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]} // Custom tick values including 12k
              domain={[0, 12000]} // Set the domain to match the custom ticks
              interval={0} // Ensure that all tick values are shown
            />
            <Tooltip />
            {/* <Legend /> */}
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#193664" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryChart;
