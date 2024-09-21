import { baseApi } from "../../api/baseApi";

 

 const getEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => ({
                url: `users?role=employee&limit=100`, 
            }),
            providesTags: [{ type: "Users" }],
        }),
    }),
  
 })
 
 export const {useGetEmployeeQuery} = getEmployee;