

import { baseApi } from "../../api/baseApi";

 

 const singleEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        singleEmployee: builder.query({
            query: (id) => ({
                url: `/users/${id}`, 
                
            }),
            invalidatesTags: [{ type: "Users" }],
        }),
    }),
  
 })
 
 export const {useSingleEmployeeQuery} = singleEmployee;