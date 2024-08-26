import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { useGetDashEarningGraphChartApiQuery } from '../../../redux/features/getDashEarningGraphChartApi';
import Loading from '../../loading/Loading';
import SearchByYear from './SearchByYear';

const EarningsChart = () => {
  const { data, isLoading, isError, error } = useGetDashEarningGraphChartApiQuery({
  });

  // console.log("12 dashEarnChart", data?.data?.attributes?.monthlyIncomeRatio);
const dashEarnChart = data?.data?.attributes?.monthlyIncomeRatio || [];
console.log(dashEarnChart);

  const [year, setYear] = useState(moment().year());
  console.log("Selected year:", year);
  const filteredChartData = dashEarnChart.filter(item => moment(item.date).year() === year);


  const formatYAxis = (tickItem) => {
    // Display the Y-axis values in the format of 0k, 2k, 4k, etc.
    return `${tickItem / 1000}k`;
  };


const handleYearSearch = (selectedYear) => {
 
  setYear(selectedYear);
};

if (isLoading) {
  return <Loading />
}

if (isError) {
  return <div>Error: {error.message}</div>;
}
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
            data={dashEarnChart}
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
              domain={[0, Math.max(...dashEarnChart.map(item => item.totalEarnings || 0))]} // Set the domain to match the custom ticks
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
