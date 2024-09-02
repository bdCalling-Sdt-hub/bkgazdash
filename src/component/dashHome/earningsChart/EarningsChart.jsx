import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
 

import SearchByYear from './SearchByYear';
import { useGetDashEarningApiQuery } from '../../../redux/features/getDashEarningGraphChartApi';
 

const EarningsChart = () => {
  const [year, setYear] = useState(moment().year());
 

 
  const {data: dashEarning, isLoading} = useGetDashEarningApiQuery(year)

  // console.log("12 dashEarnChart", data?.data?.attributes?.monthlyIncomeRatio);
// const dashEarnChart = data?.data?.attributes?.monthlyIncomeRatio || [];
// console.log(dashEarning?.data?.attributes?.monthlyIncomeRatio);

 
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



  // console.log("Selected year:", year);
  // const filteredChartData = dashEarnChart.filter(item => moment(item.date).year() === year);


  const formatYAxis = (tickItem) => {
    // Display the Y-axis values in the format of 0k, 2k, 4k, etc.
    return `${tickItem / 1000}k`;
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

const handleYearSearch = (selectedYear) => {
 
  setYear(selectedYear);
};

// if (isLoading) {
//   return <Loading />
// }

// if (isError) {
//   return <div>Error: {error.message}</div>;
// }
  return (
    <div className='mt-12 bg-[#E8EBF0] rounded-lg'>
     <div className='flex justify-between p-6'>
     <h1 className='text-[#333333] text-[20px] font-bold'>Earnings</h1>
     {/* <SearchByDate onDateChange={handleDateSearch}/> */}
     <SearchByYear onDateChange={handleYearSearch} />
     </div>
      <div className="pt-12 w-[79vw] h-[318px] mt-5 rounded-xl border-2 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dashEarning?.data?.attributes?.monthlyIncomeRatio}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis 
       
              tickFormatter={formatYAxis} 
              ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]} // Custom tick values including 12k
              // domain={[0, Math.max(...dashEarnChart.map(item => item.totalEarnings || 0))]} 
              domain={[0, 12000]} // Set the domain to match the custom ticks
              interval={0} // Ensure that all tick values are shown
            />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="totalEarnings" fill="#193664" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;
