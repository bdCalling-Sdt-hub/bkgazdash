import { baseApi } from "../../api/baseApi";

 

 const getEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => ({
                url: `users?role=employee`, 
                providesTags: ["employee"],
            }),
        }),
    }),
    overrideExisting: false,
 })
 
 export const {useGetEmployeeQuery} = getEmployee;