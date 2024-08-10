import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SubscriptionBarChart = () => {
  const [year,setYear ] = useState('2024');
//   const {data:chart,isError,isLoading,isSuccess} = useGetChatDataQuery(year);
//   if(isLoading){
//     return <Loading/>
//   }
const data = [
    {
      name: 'January',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'October',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'November',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'December',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  


  return (
    <div className="bg-[#E8EBF0] w-[79vw]   h-[318px] mt-5 rounded-xl border-2 shadow-xl ">
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
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#193664" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionBarChart;
