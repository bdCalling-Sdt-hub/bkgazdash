import { baseApi } from "../../api/baseApi";

 

 const employeeChart = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        employeeChart: builder.query({
            query: ({id, year}) => ({
                url: `/admin/employee-delivery/${id}?year=${year}`, 
                method: "GET"
                
            }),
            invalidatesTags: [{ type: "Users" }],
        }),
    }),
  
 })
 
 export const {useEmployeeChartQuery} = employeeChart;